<template>
  <div class="main-card-container">
    <div class="shield-img">
      <svg width="161" height="152" viewBox="0 0 161 152" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M80.2298 146C80.2298 146 6 131.218 6 28.3155C30.7433 26.7175 54.9859 24.4916 80.2298 6C105.474 24.4346 129.716 26.7175 154.46 28.3155C154.531 131.218 80.2298 146 80.2298 146Z" stroke="url(#paint0_linear_7150_115531)" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <defs>
          <linearGradient id="paint0_linear_7150_115531" x1="-15.752" y1="13.56" x2="156.292" y2="96.394" gradientUnits="userSpaceOnUse">
            <stop stop-color="#052E68"/>
            <stop offset="1" stop-color="#071025"/>
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div class="shield-img-mobile">
      <svg width="119" height="112" viewBox="0 0 119 112" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M59.0213 106C59.0213 106 6 95.4415 6 21.9397C23.6738 20.7982 40.9899 19.2083 59.0213 6C77.0526 19.1675 94.3688 20.7982 112.043 21.9397C112.094 95.4415 59.0213 106 59.0213 106Z" stroke="url(#paint0_linear_7199_115626)" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <defs>
          <linearGradient id="paint0_linear_7199_115626" x1="-9.53717" y1="11.4" x2="113.351" y2="70.5671" gradientUnits="userSpaceOnUse">
            <stop stop-color="#052E68"/>
            <stop offset="1" stop-color="#071025"/>
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div v-if="isLoading" class="loader-container">
      <v-progress-circular
          width="2"
          size="24"
          color="#8FA2B7"
          indeterminate
      ></v-progress-circular>
    </div>
    <div v-else class="info-container">
      <div class="info-label-container">
        <label class="info-label">
          {{ info }}
        </label>
      </div>

      <div @click="openUsdLink()" class="tvl-container">
        <div class="value-label tvl-value">
          {{ chainsStatistic.tvl.value }}
        </div>

        <div class="text-label tvl-label">
          {{ chainsStatistic.tvl.label }}
        </div>
      </div>
      <div @click="openBestChainLinkInsurance()" class="insurance-container">
        <div class="value-label insurance-value">
          {{ chainsStatistic.insuranceFund.value }}
        </div>
        <div class="text-label insurance-labe">
          {{ chainsStatistic.insuranceFund.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "MainCardPcv",

  props: {
    info: {
      type: String,
      default: null,
    },

    chainsStatistic: {
      type: Object,
      default: null,
    },
    isLoading: {
      type: Boolean,
      default: true,
    },
  },

  components: {},

  data: () => ({}),

  computed: {},

  mounted() {
  },

  created() {
  },

  methods: {
    openUsdLink() {
      window.open('https://app.overnight.fi/stats?network=op', '_blank').focus();
    },
    openBestChainLinkInsurance() {
      window.open(`https://app.overnight.fi/insurance/polygon`, '_blank').focus();
    },
  }
}
</script>

<style scoped>

/* mobile */
@media only screen and (max-width: 1400px) {
  .main-card-container {
    width: 344px;
    height: 236px;
  }

  .info-label-container {
    position: absolute;
    right: 16px;
    top: 16px;
  }

  .info-label {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.03em;
  }

  .info-container {
    padding-top: 47px;
    padding-bottom: 42px;
    padding-left: 20px;
  }

  .tvl-container {
  }

  .tvl-value {
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
  }

  .tvl-label {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.02em;
    padding-top: 4px;
  }

  .insurance-value {
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;
  }

  .insurance-container {
    padding-top: 23px;
  }

  .insurance-labe {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.03em;
    padding-top: 4px;
  }

  .shield-img-mobile {
    right: 13px;
    top: 111px;
  }

  .shield-img {
    display: none !important;
  }

}

@media only screen and (min-width: 1400px) {
  .main-card-container {
    width: 527px !important;
    height: 277px;
  }

  .info-label-container {
    position: absolute;
    right: 24px;
    top: 22px;
  }

  .info-label {
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.04em;
  }

  .info-container {
    padding-top: 46px;
    padding-bottom: 41px;
    padding-left: 41px;
  }

  .tvl-container {
  }

  .tvl-value {
    font-style: normal;
    font-weight: 400;
    font-size: 54px;
    line-height: 60px;
  }

  .insurance-value {
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;
  }

  .tvl-label {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.04em !important;
    padding-top: 8px;
  }

  .insurance-container {
    padding-top: 28px;
  }

  .insurance-labe {
    padding-top: 8px;
  }

  .shield-img {
    right: 38px;
    top: 95px;
  }

  .shield-img-mobile {
    display: none !important;
  }
}

.shield-img, .shield-img-mobile {
  position: absolute;
}

.shield-img > svg > path, .shield-img-mobile > svg > path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 4s linear forwards;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

.main-card-container {
  border: 1px solid #29323E !important;
  background: #0A1632 !important;
  position: relative;
}

.value-label {
  font-family: 'Roboto', sans-serif;
  font-feature-settings: 'pnum' on, 'lnum' on;
  background: linear-gradient(91.26deg, #28A0F0 0%, rgba(6, 120, 196, 0.9917) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.text-label {
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: white;
}

.info-label {
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #4C586D;
}

.value-label, .text-label, .info-label {
  z-index: 100 !important;
}

.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25vh;
  z-index: 10;
}
</style>
