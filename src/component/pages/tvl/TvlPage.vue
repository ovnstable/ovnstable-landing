<template>
  <div class="page-container overflow-hidden" v-observe-visibility="visibilityChanged" >
    <v-row class="container-row">
      <v-col :cols="isMobile ? 12 : 12">
        <v-row :class="isMobile ? 'mt-10' : ''" justify="center" >
          <label v-if="!isMobile" class="title-text">overnight’s <label class="accent-text">TVL</label></label>
        </v-row>
        <v-row justify="center">
          <div id="chart" class="chart"></div>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import anychart from 'anychart'

export default {
  name: "TvlPage",

  components: {

  },

  data: () => ({

  }),

  computed: {
    isMobile() {
      return window.innerWidth <= 960;
    },
  },

  mounted() {
    var data = {
      title: 'Global Smartphone Shipments (In Millions) in 2019',
      header: ['Name', 'USDT+', 'DAI+', 'USD+', 'ETS'],
      rows: [
        ['OP', 800, 1800, 2000, 1000],
        ['arbitrum', 400, 800, 1800, 2000],
        ['bsc', 1800, 1800, 1800, 2000],
        ['zkSync', 1800, 2000],
        ['polygon', 800, 800, 800],
      ]
    };

    const chart = anychart.mosaic();

    chart.data(data);

    chart.legend(true);

    chart.tooltip().format('{%seriesName}: ${%Value}M');

    chart.tooltip().displayMode("union");

    const title = chart.tooltip().title();
    title.fontFamily("Calibri");
    title.fontDecoration("underline");
    title.fontWeight(700);
    title.fontSize(18);

    chart.labels().format('${%Value}M');

    chart.xAxis().title('Smartphone Shipments by Brands');
    chart.yAxis().title('Smartphone Shipments by Quarters %');

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

<style scoped>
@media only screen and (min-width: 1300px) {
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
}

  .title-text {
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 36px;
  }

  .accent-text {
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    line-height: 38px;
  }

  .chart {
    height: 400px;
    width: 1200px;
  }
</style>

<style>
.anychart-credits-text, .anychart-credits-logo {
  display: none;
}
</style>
