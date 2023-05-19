<template>
  <div>
    <div v-if="mekkaData" class="tvl-page page-container overflow-hidden" v-observe-visibility="visibilityChanged" >
      <v-row class="container-row">
        <v-col :cols="12">
          <v-row :class="isMobile ? 'mt-10' : 'mb-5'" justify="center" >
            <label class="title-text">overnight’s <label class="accent-text">TVL</label></label>
          </v-row>
            <div class="chart-container">
                <div class="chart-title">
                    <span class="chart-title__text">Total value locked</span>
                    <span class="chart-title__value">{{totalValue}}</span>
                </div>
<!--                <div class="chart-chain-blocks">
                    <div class="chart-block block-op">
                        <img class="mr-2" :src="require('@/assets/img/network/optimism.svg')">
                        <label class="chain-text">{{ '$' + $utils.formatNumberToMln(this.totalOptimismValue) + 'M' }}</label>
                    </div>
                    <div class="chart-block block-arb">
                        <img class="mr-2" :src="require('@/assets/img/network/arb.svg')">
                        <label class="chain-text">{{ '$' + $utils.formatNumberToMln(this.totalArbitrumValue) + 'M' }}</label>
                    </div>
                    <div class="chart-block block-bsc">
                        <img class="mr-2" :src="require('@/assets/img/network/binancedex.svg')">
                        <label class="chain-text">{{ '$' + $utils.formatNumberToMln(this.totalBscValue) + 'M' }}</label>
                    </div>
                    <div class="chart-block block-zks">
                        <img class="mr-2" :src="require('@/assets/img/network/zksync.svg')">
                        <label class="chain-text">{{ '$' + $utils.formatNumberToMln(this.totalZksyncValue) + 'M' }}</label>
                    </div>
                    <div class="chart-block block-pol">
                        <img class="mr-2" :src="require('@/assets/img/network/pol.svg')">
                        <label class="chain-text">{{ '$' + $utils.formatNumberToMln(this.totalPolygonValue) + 'M' }}</label>
                    </div>
                </div>-->
                <div id="chart" class="chart"></div>
            </div>

        </v-col>
      </v-row>

      <v-row justify="center" class="btn-row" :class="isMobile ? 'mt-0' : ''" >
        <v-btn
            text
            class="feature-btn px-15"
            @click="openLink('https://defillama.com/protocol/overnight-finance')">
            See us on DefiLlama
          <img class="mdi-open ml-1" src="../../../assets/img/mdi-open.svg" height="19" @click="openLink(`https://defillama.com/protocol/overnight-finance`)">
        </v-btn>
      </v-row>
    </div>
  </div>

</template>

<script>
import {getChartSettings} from "@/component/pages/tvl/model/getChartSettings";
import utils from "@/plugins/utils";

export default {
  name: "TvlPage",

  components: {

  },

  data: () => ({
    totalValue: null,
    mekkaData: null,
    clientCalculateFoundsSchema: { // network_calculateValue: 'sub/add_value'
      'optimism_dai+': 'USD+',
      'arbitrum_dai+': 'USD+',
      'bsc_usdt+': 'USD+',
    },
      totalOptimismValue: null,
      totalArbitrumValue: null,
      totalBscValue: null,
      totalZksyncValue: null,
      totalPolygonValue: null,
      chainOrderMap: {
        'Optimism': 1,
        'Arbitrum': 2,
        'BSC': 3,
        'Polygon': 4,
        'zkSync': 5,
      },
      chainOrderProductsMap: {
        'ETS': 1,
        'USDT+': 2,
        'DAI+': 3,
        'USD+': 4,
      }
  }),

  computed: {
    isMobile() {
      return window.innerWidth <= 960;
    },
  },

  async mounted() {
    this.mekkaData = await this.loadProductTvlData();
    this.mekkaData = this.getOrderedMekkaData(this.mekkaData);
    console.log("Mekka Data:", this.mekkaData);
    this.getTotalNetworkValue(this.mekkaData);

    let tvlData = await this.getTvl();
    this.totalValue = tvlData.formattedTvl;
    if (this.mekkaData) {
      console.log('Mekka:', this.mekkaData);
      setTimeout(() => {
        this.initChart(this.mekkaData, parseInt(tvlData.tvl));
      }, 20)
    }
  },

  methods: {
    async loadProductTvlData() {
      let fetchOptions = {
        headers: {
          "Access-Control-Allow-Origin": process.env.VUE_APP_WIDGET_ROOT_API_URL
        }
      };


      return await fetch(process.env.VUE_APP_WIDGET_ROOT_API_URL + '/root/tvl/product/total', fetchOptions)
          .then(value => value.json())
          .then(value => {
            if (value && !value.error) {
              return value;
            } else {
              return null;
            }
          }).catch(reason => {
            console.log('Error get data: ' + reason);
            return null;
          });
    },
    getOrderedMekkaData(mekkaData) {
        let orderedMekkaData = [];
        for (let i = 0; i < mekkaData.length; i++) {
            let cahinInfo = mekkaData[i];
            let newPosition = this.chainOrderMap[cahinInfo.chainName];
            if (newPosition) {
                orderedMekkaData[newPosition - 1] = this.getOrderedAndFilledProductValues(cahinInfo);
                console.log('Ordered and filled orderedMekkaData[newPosition - 1]', orderedMekkaData[newPosition - 1]);
                continue;
            }

            console.error("Mekka data not found order position for chain: ", cahinInfo);
        }

        return orderedMekkaData;
    },
    getOrderedAndFilledProductValues(chainInfo) {
        let orderedProducts = [];
        chainInfo = this.getFilledNullableProductValues(chainInfo);
        console.log('Filled chainInfo: ', chainInfo);
        for (let i = 0; i < chainInfo.values.length; i++) {
            let product = chainInfo.values[i];
            let newPosition = this.chainOrderProductsMap[product.name];
            if (newPosition) {
                orderedProducts[newPosition - 1] = product;
                continue;
            }

            console.error("Mekka product data not found order position for chain: ", product);
        }

        chainInfo.values = orderedProducts;
        return chainInfo;
    },
    getFilledNullableProductValues(chainInfo) {
        let productsWithoutValues = []
        let productAvailableList = Object.keys(this.chainOrderProductsMap);
        for (let i = 0; i < productAvailableList.length; i++) {
            let productName = productAvailableList[i];
            if (this.isProductExistInChainProducts(productName, chainInfo)) {
                // product exist
                continue;
            }

            productsWithoutValues.push({
                name: productName,
                value: 0
            })
        }

        chainInfo.values = [...chainInfo.values, ...productsWithoutValues];

        return chainInfo;
    },
    isProductExistInChainProducts(productName, chainInfo) {
        return chainInfo.values.some(obj => obj.name.toLowerCase() === productName.toLowerCase());
    },
    async getArbitrumValueFundsFromCollateralAndStrategies() {
      let collateral = await this.getCollateral('arbitrum', 'usd+');
      console.log("collateral : ", collateral)
      let collateralSum = collateral.reduce((acc, curr) => acc + curr.netAssetValue, 0);
      console.log("collateralSum sum: ", collateralSum)

      let strategies = await this.getStrategies('arbitrum', 'usd+');
      console.log("Strategies : ", strategies)
      let strategiesSum = strategies.reduce((acc, curr) => acc + curr.netAssetValue, 0);
      console.log("Strategies sum: ", strategiesSum)

      let sum = strategiesSum - collateralSum;
      if (sum <= 0) {
        return 0;
      }
      return sum;
    },
    async getWithFilledClientFoundsValue(mekkaData) {

      for (let i = 0; i < mekkaData.length; i++) {
        let mekkaItem = mekkaData[i];

        for (let j = 0; j < mekkaItem.values.length; j++) {
          let value = mekkaItem.values[j];

          if (mekkaItem.chainName === 'Arbitrum'  && value.name === 'ETS') {
            let valueFunds = await this.getArbitrumValueFundsFromCollateralAndStrategies();
            console.log("+Value valueFunds: ", valueFunds)
            value.value = valueFunds;
            continue
          }

          let key = mekkaItem.chainName.toLowerCase() + '_' + value.name.toLowerCase();
          let subAddValue = this.clientCalculateFoundsSchema[key]
          if (!subAddValue) {
            continue;
          }

          console.log(mekkaItem.chainName.toLowerCase(), value.name.toLowerCase())
          let tokenCollaterals = await this.getCollateral(mekkaItem.chainName.toLowerCase(), value.name.toLowerCase());
          let foundValue = this.getFoundValueByTokenName(tokenCollaterals, subAddValue);
          console.log(key + ': ', foundValue);
          value.value = value.value + foundValue;
          this.subFoundFromMekkaValue(mekkaItem.values, subAddValue, foundValue);
        }
      }

      return mekkaData;
    },

    subFoundFromMekkaValue(networkValues, subToken, subValue) {
      for (let i = 0; i < networkValues.length; i++) {
        let value = networkValues[i];
        console.log("SUB TOKEN:", networkValues, subToken,  subValue)
        if (value.name ===  subToken) {
          value.value = value.value - subValue
          return
        }

      }
    },

      getTotalNetworkValue(mekkaData) {
          for (let i = 0; i < mekkaData.length; i++) {
              let mekkaItem = mekkaData[i];
              let sumOp = 0;
              let sumArb = 0;
              let sumBsc = 0;
              let sumZk = 0;
              let sumPoly = 0;

              if (mekkaItem.chainName === 'Optimism') {
                  for (let j = 0; j < mekkaItem.values.length; j++) {
                      sumOp += mekkaItem.values[j].value;
                      this.totalOptimismValue = sumOp;
                  }
                  console.log('Optimism TVL: ', this.totalOptimismValue);
              }
              if (mekkaItem.chainName === 'Arbitrum') {
                  for (let k = 0; k < mekkaItem.values.length; k++) {
                      sumArb += mekkaItem.values[k].value;
                      this.totalArbitrumValue = sumArb;
                  }
                  console.log('Arbitrum TVL: ', this.totalArbitrumValue);
              }
              if (mekkaItem.chainName === 'BSC') {
                  for (let b = 0; b < mekkaItem.values.length; b++) {
                      sumBsc += mekkaItem.values[b].value;
                      this.totalBscValue = sumBsc;
                  }
                  console.log('Bsc TVL: ', this.totalBscValue);
              }
              if (mekkaItem.chainName === 'zkSync') {
                  for (let z = 0; z < mekkaItem.values.length; z++) {
                      sumZk += mekkaItem.values[z].value;
                      this.totalZksyncValue = sumZk;
                  }
                  console.log('ZkSync TVL: ', this.totalZksyncValue);
              }
              if (mekkaItem.chainName === 'Polygon') {
                  for (let p = 0; p < mekkaItem.values.length; p++) {
                      sumPoly += mekkaItem.values[p].value;
                      this.totalPolygonValue = sumPoly;
                  }
                  console.log('Polygon TVL: ', this.totalPolygonValue);
              }
          }
      },

    getFoundValueByTokenName(collateralList, tokenName) {
      for (let i = 0; i < collateralList.length; i++) {
        let collateralInfo = collateralList[i];
        if (collateralInfo.id && collateralInfo.id.tokenName === tokenName) {
          return collateralInfo.netAssetValue;
        }
      }

      return 0;
    },

    async getCollateral(networkName, tokenName) {
      // example: https://api.overnight.fi/optimism/dai+/dapp/collateral/total

      let fetchOptions = {
        headers: {
          "Access-Control-Allow-Origin": process.env.VUE_APP_WIDGET_ROOT_API_URL
        }
      };

      return fetch(process.env.VUE_APP_WIDGET_ROOT_API_URL + `/${networkName}/${tokenName}/dapp/collateral/total`, fetchOptions)
          .then(value => value.json())
          .then(value => {
            if (value) {
              return value;
            } else {
              return null;
            }
          }).catch(reason => {
            console.log('Error get data: ' + reason);
            return null;
          });
    },
    async getStrategies(networkName, tokenName) {
      // example: https://api.overnight.fi/arbitrum/usd+/dapp/strategies

      let fetchOptions = {
        headers: {
          "Access-Control-Allow-Origin": process.env.VUE_APP_WIDGET_ROOT_API_URL
        }
      };

      return fetch(process.env.VUE_APP_WIDGET_ROOT_API_URL + `/${networkName}/${tokenName}/dapp/strategies`, fetchOptions)
          .then(value => value.json())
          .then(value => {
            if (value) {
              return value;
            } else {
              return null;
            }
          }).catch(reason => {
            console.log('Error get data: ' + reason);
            return null;
          });
    },

    async getTvl() {
      let tvl = 0.0;
      let tvlData = await this.getTvLData();
      if (tvlData) {
        tvl = tvlData;
      }

      return {
        formattedTvl: tvl ? ('$ ' + this.$utils.formatMoneyComma(tvl, 2)) : '-',
        tvl: tvl
      }
    },

    openLink(url) {
      if (url) {
        window.open(url, '_blank').focus();
      }
    },

    async getTvLData() {
      let fetchOptions = {
        headers: {
          "Access-Control-Allow-Origin": process.env.VUE_APP_WIDGET_ROOT_API_URL
        }
      };

      return fetch(process.env.VUE_APP_WIDGET_ROOT_API_URL + '/root/tvl/total', fetchOptions)
          .then(value => value.json())
          .then(value => {
            if (value) {
              return value;
            } else {
              return null;
            }
          }).catch(reason => {
            console.log('Error get data: ' + reason);
            return null;
          });
    },

    initChart(mekkaData, maxTvl) {
      const chart = getChartSettings(
          {
            mekkaData: mekkaData,
            maxTvl: maxTvl,
            hasTooltip: this.isMobile,
            hasBlockLabel: !this.isMobile,
            legendPosition: this.isMobile ? 'center' : 'bottom',
            legendAlignment: this.isMobile ? 'center' : 'left',
            blocksPadding: this.isMobile ? 1 : 2,
            legendMarginTop: 10,
          })

      chart.container('chart');

      chart.draw();
    },
    visibilityChanged (isVisible, entry) {
      if (isVisible) {
        this.isVisible = true;
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .title-text {
    font-style: normal;
    font-size: 45px;
    line-height: 80px;
    font-family: 'Cormorant', sans-serif;
    text-transform: uppercase;
    color: #28A0F0;
    font-weight: 500;
  }

  .accent-text {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    line-height: 80px;
    background-color: #000;
    text-transform: uppercase;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .chart-container {
      padding: 20px;
      background-color: #FFFFFF;
      box-shadow: 0 4px 4px rgba(32, 81, 155, 0.12);
      border-radius: 12px;
      aspect-ratio: 2.6/1;
      display: flex;
      flex-direction: column;
  }

  .chart-chain-blocks {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
  }

  .chart-block {
      border: 1px solid #DEE1E5;
      height: 44px;
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      margin-left: 20px;
      margin-right: 20px;
  }

  .chart {
    width: 100%;
    flex-grow: 1;
    flex-direction: row;
  }

  .tvl-page {
    background-image: linear-gradient(171.55deg, rgba(28, 149, 231, 0.1) 5.72%, rgba(28, 149, 231, 0) 98.76%);
  }

  .container-row {
    margin: 8% auto 3% auto;
    width: 87%;
  }

  .chart-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;

    &__text {
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 36px;
    }

    &__value {
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 48px;
    }
  }

  .chain-images-wrap {
    display: flex;
    justify-content: space-around;
  }

  @media (max-width: 1400px) {
    .chart-container {
      aspect-ratio: 1.8/1;
    }

    .title-text {
      font-size: 34px;
    }

    .accent-text {
      font-size: 30px;
    }

    .chart-title {
      &__text {
        font-size: 20px;
      }

      &__value {
        font-size: 30px;
      }
    }
  }

  @media (max-width: 767px) {
    .chart-container {
      aspect-ratio: unset;
      width: 100%;
      height: 400px;
      padding: 5px;
    }

    .chart-title {
      flex-direction: column;
    }

    .container-row {
      width: 100%;
      margin-top: 0;
    }
  }

  .feature-btn {
    height: 40px !important;
    font-style: normal !important;
    font-weight: 400 !important;
    font-size: 16px !important;
    line-height: 18px !important;
  }

  .btn-row {
    margin-top: 2% !important;
    padding-bottom: 20px;
  }

  .feature-btn {
    border: 1px solid #28A0F0;
    border-radius: 0;
    font-family: 'Roboto', sans-serif !important;
    font-feature-settings: 'liga' off !important;
    color: #28A0F0 !important;
    text-transform: none !important;
    letter-spacing: normal;
  }

</style>

<style>

/* Скрыть логотип и его текст на графике */
.anychart-credits-text, .anychart-credits-logo {
  display: none;
}

.divider {
    margin-left: 10px;
    margin-right: 20px;
    border-top: 1px solid #DEE1E5 !important;
}

</style>

