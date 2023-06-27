<template>
    <div class="main-card-container">
        <div class="arrow-img">
            <svg width="226" height="221" viewBox="0 0 226 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M65.4999 112.5L68.6375 107.386L62.7726 103.788L60.0062 110.088L65.4999 112.5ZM147 162.5L143.862 167.614L149.731 171.215L152.495 164.908L147 162.5ZM218 0.499509L162.188 41.5481L225.643 69.3587L218 0.499509ZM11.4936 250.412L70.9936 114.912L60.0062 110.088L0.506199 245.588L11.4936 250.412ZM62.3623 117.614L143.862 167.614L150.137 157.386L68.6375 107.386L62.3623 117.614ZM152.495 164.908L201.819 52.3665L190.828 47.5495L141.504 160.092L152.495 164.908Z"
                      fill="url(#paint0_linear_211_6198)"/>

                <animate attributeName="fill" values="url(#paint0_linear_211_6198)" dur="2s" />

                <defs>
                    <linearGradient id="paint0_linear_211_6198" x1="5.99988" y1="0.499512" x2="286.622" y2="151.297"
                                    gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stop-color="#15141D">
                            <animate attributeName="stop-color" values="#15141D; #052758; #15141D" dur="2s" repeatCount="indefinite"></animate>
                        </stop>
                        <stop offset="100%" stop-color="#052758">
                            <animate attributeName="stop-color" values="#052758; #15141D; #052758" dur="2s" repeatCount="indefinite"></animate>
                        </stop>
                    </linearGradient>
                </defs>
            </svg>
        </div>

        <div class="arrow-img-mobile">
            <svg width="152" height="145" viewBox="0 0 152 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44.6507 73.4283L47.7883 68.314L41.9234 64.716L39.157 71.0159L44.6507 73.4283ZM97.85 106.066L94.7124 111.18L100.581 114.781L103.345 108.474L97.85 106.066ZM144.195 0.319822L88.3831 41.3684L151.838 69.179L144.195 0.319822ZM11.3057 164.288L50.1444 75.8407L39.157 71.0159L0.318332 159.464L11.3057 164.288ZM41.5131 78.5425L94.7124 111.18L100.988 100.952L47.7883 68.314L41.5131 78.5425ZM103.345 108.474L128.015 52.1868L117.024 47.3698L92.3546 103.657L103.345 108.474Z" fill="url(#paint0_linear_753_145335)"/>
                <defs>
                    <linearGradient id="paint0_linear_753_145335" x1="5.81201" y1="0.319824" x2="188.988" y2="98.7528" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#052758"/>
                        <stop offset="1" stop-color="#071025"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>

        <v-row class="info-row">
            <v-spacer></v-spacer>
            <label class="info-label">
                {{ info }}
            </label>
        </v-row>


      <div v-if="isLoading" class="loader-container">
        <v-progress-circular
            width="2"
            size="24"
            color="#8FA2B7"
            indeterminate
        ></v-progress-circular>
      </div>
      <v-row v-else class="value-row">
        <v-col cols="5" class="value-col" @click="openBestChainLink()">
          <label class="value-label">
            {{ valueUsdPlus }}
          </label>
          <br/><br/>
          <label class="text-label">
            {{ labelUsdPlus }}
          </label>
          <div class="network-img-container">
            <img class="network-img"
                 :src="require('../../../assets/networks/' + networkUsdPlus +'.png')">
          </div>
        </v-col>
        <v-divider class="apy-divider" dark vertical></v-divider>
        <v-col class="value-col" @click="openBestChainLinkPool()">
          <label class="value-label">
              {{ valuePool }}
          </label>
          <br/><br/>
          <label class="text-label">
            <abbr title="Exchange-traded strategy">Top Pool</abbr> APR
          </label>
          <div v-if="networkPool === 'zksync' || networkPool === 'zk'" class="network-img-container">
            <img class="network-img" :src="require('../../../assets/networks/' + networkPool +'.svg')" :alt="networkPool">
          </div>
          <div v-else class="network-img-container">
            <img class="network-img" :src="require('../../../assets/networks/' + networkPool +'.png')" :alt="networkPool">
          </div>
        </v-col>
      </v-row>
    </div>
</template>

<script>

export default {
    name: "MainCardApy",

    props: {
        labelUsdPlus: {
            type: String,
            default: null,
        },

        valueUsdPlus: {
            type: String,
            default: null,
        },

        networkUsdPlus: {
            type: String,
            default: null,
        },

        labelEts: {
            type: String,
            default: null,
        },

        valuePool: {
            type: String,
            default: null,
        },


        poolName: {
            type: String,
            default: null,
        },

        networkPool: {
            type: String,
            default: null,
        },

        info: {
            type: String,
            default: null,
        },

      isLoading: {
          type: Boolean,
          default: true,
      }
    },

    components: {},

    data: () => ({}),

    computed: {},

    mounted() {
    },

    created() {
    },

    methods: {
        openLink(url) {
            window.open(url).focus();
        },

        openBestChainLink() {
          if (this.networkUsdPlus.includes('_dai')) {
            this.openLink('https://app.overnight.fi/stats/dai?tabName=' + this.networkUsdPlus + "&chart=month");
          } else {
            this.openLink('https://app.overnight.fi/stats?tabName=' + this.networkUsdPlus + "&chart=month");
          }
        },

        openBestChainLinkPool() {
            this.openLink(`https://app.overnight.fi/featured?tabName=${this.networkPool}`);
        },
    }
}
</script>

<style scoped>

/* mobile */
@media only screen and (max-width: 1400px) {
    .value-label {
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 48px;
    }

    .text-label {
      font-weight: 400;
      font-size: 9px;
      line-height: 16px;
      letter-spacing: 0.03em!important;
    }

    .text-container-usdpluse {
      max-width: 26%!important;
    }

    .main-card-container {
        min-height: 166px !important;
        width: 344px !important;
    }

    .value-row {
        margin-left: 25px !important;
    }

    .value-row {
        margin-top: 25px !important;
    }

    .arrow-img {
        display: none !important;
    }

    .arrow-img-mobile {
        margin-left: 180px;
        margin-top: 19px;
        z-index: 2;
    }

    .info-row {
        margin-right: 20px !important;
        margin-top: 20px !important;
    }

    .info-label {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.03em;
    }

    .apy-divider {
        height: 100px !important;
        margin-right: 4px !important;
        margin-left: 4px !important;
        z-index: 2;
    }

    .network-img {
        width: 14px !important;
        height: 14px !important;
    }
}

@media only screen and (min-width: 1400px) {
    .value-label {
        font-style: normal;
        font-weight: 400;
        font-size: 54px;
        line-height: 60px;
    }

    .text-label {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.04em !important;
    }

    .main-card-container {
        min-height: 254px !important;
        width: 527px !important;
    }

    .value-row {
        margin-left: 44px !important;
    }

    .value-row {
        margin-top: 44px !important;
    }

    .arrow-img {
      margin-left: 210px;
      margin-top: 32px;
      z-index: 2;
    }

    .arrow-img-mobile {
        display: none !important;
    }

    .info-row {
        margin-right: 20px !important;
        margin-top: 20px !important;
    }

    .info-label {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        letter-spacing: 0.04em;
    }

    .apy-divider {
        height: 128px !important;
        margin-right: 18px !important;
    }

    .network-img {
        width: 24px !important;
        height: 24px !important;
    }
}

.arrow-img, .arrow-img-mobile {
    position: absolute;
}

.arrow-img > svg > path, .arrow-img-mobile > svg > path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dash-arrow 5s linear forwards;
}

@keyframes dash-arrow {
    to {
        stroke-dashoffset: 0;
    }
}

.main-card-container {
    border: 1px solid #29323E !important;
    background: #0A1632 !important;
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

.value-label, .text-label, .info-label, .value-col, .network-img-container {
    z-index: 100 !important;
}

.network-img-container {
    display: inline-flex !important;
    vertical-align: sub !important;
}

.info-label {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #4C586D;
}

.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16vh;
  z-index: 10;
}
</style>
