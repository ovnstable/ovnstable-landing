<template>
  <v-container class="main">
    <v-row>
      <v-col>
        <MainCardPcv info="ALL Chains" :chainsStatistic="chainsStatistic" :is-loading="isLoading"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>

        <MainCardApy
            :label-usd-plus="bestChain && bestProductType && bestProductType.includes('dai_') ? 'DAI+ APY' : (bestProductType && bestProductType.includes('usdt_') ? 'USDT+ APY' : 'USD+ APY')"
            :value-usd-plus="apyWeek"
            :network-usd-plus="bestChain"
            :is-loading="isApyLoading"
            :is-pools-loading="isPoolsLoading"
            :value-pool="aprPool"
            :pool-name="bestPoolName"
            :network-pool="bestChainPool"
            :best-product-type="bestProductType"
            info="BEST % ACROSS ALL CHAINS"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import MainCardPcv from "./card/MainCardPcv";
import MainCardApy from "./card/MainCardApy";

export default {
  name: 'MainCards',

  components: {
    MainCardPcv,
    MainCardApy,
  },

  props: {
  },

  data: () => ({
    isLoading: true,
    isApyLoading: true,
    isPoolsLoading: true,
    chainsStatistic: {
      tvl: {value: 0.0, label: 'Total Value Locked'},
    },
    apyWeek: null,
    aprPool: null,
    bestPoolName: null,
    bestChain: null,
    bestProductType: null,
    bestChainPool: null,
  }),

  computed: {
  },

  created() {
    this.getMainCardsData();
  },

  methods: {
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
              return 0;
            }
          }).catch(reason => {
            console.log('Error get data: ' + reason);
          });
    },

    async getApyData(widgetApiUrl) {
      let fetchOptions = {
        headers: {
          "Access-Control-Allow-Origin": widgetApiUrl
        }
      };

      return fetch(widgetApiUrl + '/widget/avg-apy-info/month', fetchOptions)
          .then(value => value.json())
          .then(value => {
            if (value.value) {
              return value.value;
            } else {
              return 0;
            }
          }).catch(reason => {
            console.log('Error get data: ' + reason);
          });
    },


    async getProductApyData(widgetApiUrl) {
      let fetchOptions = {
        headers: {
          "Access-Control-Allow-Origin": widgetApiUrl
        }
      };

      return fetch(widgetApiUrl + '/product-chart', fetchOptions)
          .then(value => value.json())
          .then(value => {
            if (value && value.items) {
              return value.items;
            } else {
              return [];
            }
          }).catch(reason => {
            console.log('Error get product data: ' + reason);
            return [];
          });
    },
      getAllPools(apiUrl) {
          let fetchOptions = {
              headers: {
                  "Access-Control-Allow-Origin": apiUrl
              }
          };

          return fetch(apiUrl + '/pools/all', fetchOptions)
              .then(value => value.json())
              .then(value => {
                  if (value) {
                      return value;
                  } else {
                      return [];
                  }
              }).catch(reason => {
                  console.log('Error get pools data: ' + reason);
                  return [];
              });
      },

    async getMainCardsData() {

      this.isApyLoading = true;
      this.isPoolsLoading = true

      let apys = await this.getProductApyData(process.env.VUE_APP_WIDGET_ROOT_API_URL + '/root/widget');
      apys.sort(function(a, b) {
        return b.value - a.value;
      });

      console.log("Apys: ", apys);

      this.bestChain = null;
      for (let i = 0; i < apys.length; i++) {
        let item = apys[i];
        if (item.productType.includes('_PLUS') && (!this.apyWeek || item.value > this.apyWeek)) {
          this.apyWeek = item.value + '';
          this.bestChain = item.chain.toLowerCase();
          this.bestProductType = item.productType.toLowerCase();
        }
      }

      this.apyWeek = this.apyWeek ? (this.$utils.formatMoney(this.apyWeek, 1) + '%') : '—';
      this.isApyLoading = false;

      this.bestChainPool = null;
      let sortedPools = await this.loadPools();
      let topPool = sortedPools && sortedPools.length ? sortedPools[0] : null;
      console.log("Top pool: ", topPool);

      if (topPool) {
          this.aprPool = topPool.apr ? (this.$utils.formatMoney(topPool.apr, 1) + '%') : '—';
          this.bestPoolName = topPool.name;
          this.bestChainPool = topPool.chainName.toLowerCase();
      }
        console.log("Top pool loaded");
        this.isPoolsLoading = false

      // chains statistic
      this.isLoading = true;
      this.chainsStatistic.tvl.value = await this.getTvl();
      this.isLoading = false;

    },

    async getTvl() {
      let tvl = 0.0;
      let tvlData = await this.getTvLData();
      if (tvlData) {
        tvl = tvlData;
      }

      return tvl ? ('$ ' + this.$utils.formatMoneyComma(tvl, 2)) : '-'
    },

      async loadPools() {
          let pools = [];
          let networkConfigList = [
              { appApiUrl: 'https://app.overnight.fi/api' },
              { appApiUrl: 'https://bsc.overnight.fi/api' },
              { appApiUrl: 'https://op.overnight.fi/api' },
              { appApiUrl: 'https://arbitrum.overnight.fi/api' },
              { appApiUrl: 'https://zksync.overnight.fi/api' },
              { appApiUrl: 'https://base.overnight.fi/api' },
          ];

          for (let networkConfig of networkConfigList) {
              await this.getAllPools(networkConfig.appApiUrl)
                  .then(data => {
                      if (data) {
                          console.log("Pools from ", networkConfig, data);

                          data.forEach(pool => {
                              if (pool && pool.tvl && pool.tvl >= 10000.00) {
                                  pools.push({
                                      id: (pool.id.name + pool.tvl + pool.platform),
                                      name: pool.id.name,// + ' ' + pool.id.address,
                                      chainName: pool.id.chain,
                                      address: pool.id.address,
                                      platform: pool.platform,
                                      tvl: pool.tvl,
                                      apr: pool.apr,
                                      data: pool,
                                  });
                              }
                          })
                      }
                  }).catch(reason => {
                      console.log('Error get pools data: ' + reason);
                  })
          }

          let topPools = pools.filter(pool => pool.tvl >= 500000);
          topPools = topPools.sort((a, b) => {
              if (a.feature && !b.feature) {
                  return -1; // a comes first when a is featured and b is not
              } else if (!a.feature && b.feature) {
                  return 1; // b comes first when b is featured and a is not
              } else if (a.apr !== b.apr) {
                  return b.apr - a.apr; // sort by APR number
              } else {
                  return b.tvl - a.tvl; // sort by TVL number
              }
          });

          let secondPools = pools.filter(pool => pool.tvl < 500000);
          secondPools = secondPools.sort((a, b) => b.tvl - a.tvl);

          return [...topPools, ...secondPools];
      },

  }
}
</script>


<style scoped>

.main {
  font-style: normal;
  width: 100%;
  display: inline-block;

  background: none;
}

</style>
