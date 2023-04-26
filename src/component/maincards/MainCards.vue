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
            :label-usd-plus="bestChain && bestChain.includes('_dai') ? 'DAI+ APY' : 'USD+ APY'"
            :value-usd-plus="apyWeek"
            :network-usd-plus="bestChain"
            :is-loading="isApyLoading"
            :value-ets="apyWeekEts"
            :value-insurance="apyWeekInsurance"
            :ets-name="bestEtsName"
            :network-ets="bestChainEts"
            :network-insurance="networkInsurance"
            info="Max 30-day APY across all chains"
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
    chainsStatistic: {
      tvl: {value: 0.0, label: 'Total Value Locked'},
      insuranceFund: {value: 0.0, label: 'Insurance Fund'},
    },
    apyWeek: null,
    apyWeekEts: null,
    apyWeekInsurance: null,
    bestEtsName: null,
    bestChain: null,
    bestChainEts: null,
    networkInsurance: 'polygon',
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

    async getInsuranceAvgData(widgetApiUrl) {
      let fetchOptions = {
        headers: {
          "Access-Control-Allow-Origin": widgetApiUrl
        }
      };

      return fetch(widgetApiUrl + '/insurance/avg-apy-info/month', fetchOptions)
          .then(value => value.json())
          .then(value => {
            if (value) {
              return value.value;
            } else {
              return 0;
            }
          }).catch(reason => {
            console.log('Error get insurance data: ' + reason);
            return []
          });
    },

    async getInsuranceTotalData(widgetApiUrl) {
      let fetchOptions = {
        headers: {
          "Access-Control-Allow-Origin": widgetApiUrl
        }
      };

      return fetch(widgetApiUrl + '/insurance/', fetchOptions)
          .then(value => value.json())
          .then(value => {
            if (value) {
              console.log("v", value)
              return value.lastTvl
            } else {
              return 0;
            }
          }).catch(reason => {
            console.log('Error get insurance data: ' + reason);
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

    async getMainCardsData() {

      this.isApyLoading = true;
      let apys = await this.getProductApyData(process.env.VUE_APP_WIDGET_ROOT_API_URL + '/root/widget');
      apys.sort(function(a, b) {
        return b.value - a.value;
      });

      console.log("Apys: ", apys);

      this.bestChainEts = null;
      for (let i = 0; i < apys.length; i++) {
        let item = apys[i];
        if (item.productType === 'ETS' && (!this.apyWeekEts || item.value > this.apyWeekEts)) {
          this.apyWeekEts = item.value + '';
          this.bestChainEts = item.chain.toLowerCase();
        }
      }

      this.apyWeekEts = this.apyWeekEts ? (this.$utils.formatMoney(this.apyWeekEts, 0) + '%') : '-';


      this.bestChain = null;
      for (let i = 0; i < apys.length; i++) {
        let item = apys[i];
        if (item.productType.includes('_PLUS') && (!this.apyWeek || item.value > this.apyWeek)) {
          this.apyWeek = item.value + '';
          this.bestChain = item.chain.toLowerCase();
        }
      }

      this.apyWeek = this.apyWeek ? (this.$utils.formatMoney(this.apyWeek, 0) + '%') : '—';
      this.isApyLoading = false;

      // chains statistic
      this.isLoading = true;
      this.chainsStatistic.tvl.value = await this.getTvl();
      this.chainsStatistic.insuranceFund.value = await this.getInsuranceFund();
      this.isLoading = false;

      this.apyWeekInsurance = await this.getInsuranceAvgData(process.env.VUE_APP_WIDGET_API_URL_POLYGON);
      this.networkInsurance = 'polygon';
      this.apyWeekInsurance = this.apyWeekInsurance ? (this.$utils.formatMoney(this.apyWeekInsurance, 0) + '%') : '-';
    },

    async getTvl() {
      let tvl = 0.0;
      let tvlData = await this.getTvLData();
      if (tvlData) {
        tvl = tvlData;
      }

      return tvl ? ('$ ' + this.$utils.formatMoneyComma(tvl, 0)) : '-'
    },

    async getInsuranceFund() {
      let insuranceFund = await this.getInsuranceTotalData(process.env.VUE_APP_WIDGET_API_URL_POLYGON);
      return insuranceFund ? ('$ ' + this.$utils.formatMoneyComma(insuranceFund, 0)) : '—'
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
