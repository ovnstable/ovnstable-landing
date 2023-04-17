<template>
  <div class="tvl-page page-container overflow-hidden" v-observe-visibility="visibilityChanged" >
    <v-row class="container-row">
      <v-col :cols="12">
        <v-row :class="isMobile ? 'mt-10' : 'mb-5'" justify="center" >
          <label class="title-text">overnight’s <label class="accent-text">TVL</label></label>
        </v-row>
        <div class="chart-wrap">
          <div class="chart-title">
            <span class="chart-title__text">Total value locked</span>
            <span class="chart-title__value">{{formattedTotalValue}}</span>
          </div>
          <div id="chart" class="chart"></div>
        </div>
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
    const chart = initChartSettings({
      hasTooltip: this.isMobile,
      hasBlockLabel: !this.isMobile,
    })

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
    font-size: 70px;
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
    font-size: 60px;
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
</style>

<style>
/* Скрыть логотип и его текст на графике */
.anychart-credits-text, .anychart-credits-logo {
  display: none;
}
</style>
