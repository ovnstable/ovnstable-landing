<template>
  <div class="tvl-page page-container overflow-hidden" v-observe-visibility="visibilityChanged" >
    <v-row class="container-row">
      <v-col :cols="isMobile ? 12 : 12">
        <v-row :class="isMobile ? 'mt-10' : 'mb-5'" justify="center" >
          <label v-if="!isMobile" class="title-text">overnight’s <label class="accent-text">TVL</label></label>
        </v-row>
        <v-row justify="center">
          <div class="chart-wrap">
            <div class="chart-title">
              <p class="chart-title__text">Total value locked</p>
              <p class="chart-title__value">{{formattedTotalValue}}</p>
            </div>
            <div id="chart" class="chart"></div>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {initChartSettings} from "@/component/pages/tvl/model/initChartSettings";

export default {
  name: "TvlPage",

  components: {

  },

  data: () => ({
    totalValue: 28340060.87
  }),

  computed: {
    isMobile() {
      return window.innerWidth <= 960;
    },
    formattedTotalValue() {
      return this.$utils.formatMoneyComma(this.totalValue, 2)
    }
  },

  mounted() {
    const chart = initChartSettings()

    chart.container('chart');

    chart.draw();
  },

  methods: {
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
    font-weight: 300;
    font-size: 70px;
    line-height: 80px;
  }

  .accent-text {
    font-style: normal;
    font-weight: 300;
    font-size: 60px;
    line-height: 80px;
  }

  .title-text {
    font-family: 'Cormorant', sans-serif;
    text-transform: uppercase;
    color: #28A0F0;
    font-weight: 500;
  }

  .accent-text {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    background: #000;
    font-weight: 300;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .chart {
    height: 400px;
    width: 1200px;
  }

  .tvl-page {
    background-image: linear-gradient(171.55deg, rgba(28, 149, 231, 0.1) 5.72%, rgba(28, 149, 231, 0) 98.76%);
  }

  .container-row {
    margin-top: 8% !important;
    margin-bottom: 3% !important;
  }

  .chart-wrap {
    padding: 20px;
    background-color: #FFFFFF;
    box-shadow: 0 4px 4px rgba(32, 81, 155, 0.12);
    border-radius: 12px;
  }

  .chart-title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__text {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 36px;
    }

    &__value {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 48px;
    }
  }
</style>

<style>
.anychart-credits-text, .anychart-credits-logo {
  display: none;
}
</style>
