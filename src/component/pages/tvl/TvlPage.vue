<template>
  <div>
    <div v-if="mekkaData" class="tvl-page page-container overflow-hidden" v-observe-visibility="visibilityChanged" >
      <v-row class="container-row">
        <v-col :cols="12">
          <v-row :class="isMobile ? 'mt-10' : 'mb-5'" justify="center" >
            <label class="title-text">overnight’s <label class="accent-text">TVL</label></label>
          </v-row>
          <div class="chart-wrap">
            <div class="chart-title">
              <span class="chart-title__text">Total value locked</span>
              <span class="chart-title__value">{{totalValue}}</span>
            </div>
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

export default {
  name: "TvlPage",

  components: {

  },

  data: () => ({
    totalValue: null,
    mekkaData: null
  }),

  computed: {
    isMobile() {
      return window.innerWidth <= 960;
    },
  },

  async mounted() {
    this.mekkaData = await this.loadProductTvlData();
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
            legendPosition: this.isMobile ? 'center' : 'top',
            blocksPadding: this.isMobile ? 1 : 2,
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

  .chart-wrap {
    padding: 20px;
    background-color: #FFFFFF;
    box-shadow: 0 4px 4px rgba(32, 81, 155, 0.12);
    border-radius: 12px;
    aspect-ratio: 2.65/1;
    display: flex;
    flex-direction: column;
  }

  .chart {
    width: 100%;
    flex-grow: 1;
    flex-direction: column;
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
    .chart-wrap {
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
    .chart-wrap {
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
</style>

