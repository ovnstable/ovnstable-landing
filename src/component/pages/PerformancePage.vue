<template>
    <div class="page-container overflow-hidden">
        <v-row class="container-row container-row-usd-plus">
            <v-col cols="12">
                <v-row class="mb-15" align="center" v-if="!isMobile">
                    <v-col class="overflow-hidden" :cols="isMobile ? 12 : 9" v-observe-visibility="visibilityChanged">
                        <v-row class="ml-0" justify="start" align="center">
                            <label class="accent-text mb-0">USD+</label>
                            <label class="title-text">&nbsp;Performance</label>
                            <label class="accent-chain-text mx-3" v-if="!isMobile">|</label><label
                            class="accent-chain-text">{{ getChainName(chain) }} </label>
                        </v-row>
                    </v-col>

                    <v-col class="overflow-hidden" v-if="isVisible">
                        <v-row class="mr-0" justify="end" align="center">
                            <ChainSelector mode="light" :callbackFunc="selectChain" :chains="['polygon', 'bsc', 'op', 'arbitrum']"/>
                        </v-row>
                    </v-col>
                </v-row>

                <template v-else>
                    <v-row align="center" justify="center" v-observe-visibility="visibilityChanged">
                        <label class="accent-text mb-0">Overnight's</label>
                        <label class="title-text">&nbsp;Performance</label>
                    </v-row>
                    <v-row class="mb-10" align="center" justify="center" v-if="isVisible">
                        <label class="accent-chain-text mx-3" v-if="!isMobile">|</label><label
                        class="accent-chain-text">{{ getChainName(chain) }} </label>
                    </v-row>
                    <v-row class="mb-5" align="center" justify="center" v-if="isVisible">
                        <ChainSelector mode="light" :callbackFunc="selectChain"/>
                    </v-row>
                </template>

                <v-row class="d-flex " :class="isMobile ? 'flex-column' : 'flex-row'" v-if="isVisible">
                    <v-col class="overflow-hidden" :cols="isMobile ? 12 : 6">
                        <v-row :justify="isMobile ? 'center' : 'end'">
                            <template v-if="chain === 'polygon'">
                                <ovn-apyrate class="chain-networks" network="polygon" product="usd+"></ovn-apyrate>
                            </template>

                            <template v-if="chain === 'arbitrum'">
                                <ovn-apyrate class="chain-networks" network="arbitrum" product="usd+"></ovn-apyrate>
                            </template>

                            <template v-if="chain === 'bsc'">
                                <ovn-apyrate class="chain-networks" network="bsc" product="usd+"></ovn-apyrate>
                            </template>

                            <template v-if="chain === 'op'">
                                <ovn-apyrate class="chain-networks" network="op" product="usd+"></ovn-apyrate>
                            </template>
                        </v-row>
                    </v-col>

                    <v-col class="overflow-hidden" :cols="isMobile ? 12 : 6" v-if="isVisible">
                        <v-row :justify="isMobile ? 'center' : 'start'">
                            <template v-if="chain === 'polygon'">
                                <ovn-tvlrate class="chain-networks" network="polygon" product="usd+"></ovn-tvlrate>
                            </template>

                            <template v-if="chain === 'arbitrum'">
                                <ovn-tvlrate class="chain-networks" network="arbitrum" product="usd+"></ovn-tvlrate>
                            </template>

                            <template v-if="chain === 'bsc'">
                                <ovn-tvlrate class="chain-networks" network="bsc" product="usd+"></ovn-tvlrate>
                            </template>

                            <template v-if="chain === 'op'">
                                <ovn-tvlrate class="chain-networks" network="op" product="usd+"></ovn-tvlrate>
                            </template>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>

import ChainSelector from "@/component/common/ChainSelector";
import ApyRate from "@/component/apyrate/ApyRate.vue";
import TvlRate from "@/component/tvlrate/TvlRate.vue";

export default {
    name: "PerformancePage",

    components: {
        ChainSelector,
        'ovn-apyrate': ApyRate,
        'ovn-tvlrate': TvlRate,
    },

    data: () => ({
        chain: 'op',

        isVisible: false,
    }),

    computed: {
        isMobile() {
            return window.innerWidth <= 960;
        },
    },

    methods: {
        selectChain(chain) {
            this.chain = chain;
        },

        getChainName(s) {
            switch (s) {
                case 'op':
                    return 'optimism'
                default:
                    return s
            }
        },

        visibilityChanged(isVisible, entry) {
            if (isVisible) {
                this.isVisible = true;
            }
        }
    }
}
</script>

<style scoped>

/* mobile */
@media only screen and (max-width: 1400px) {
    .title-text {
        font-style: normal;
        font-weight: 300;
        font-size: 30px;
        line-height: 36px;
    }

    .accent-chain-text {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.04em;
    }

    .accent-text {
        font-style: normal;
        font-weight: 500;
        font-size: 34px;
        line-height: 38px;
    }

    .container-row-usd-plus {
        margin-top: 10% !important;
        margin-bottom: 10% !important;
    }

    .page-container {
        width: 100%;
        height: 100% !important;
    }
}

@media only screen and (max-width: 960px) {
    .container-row {
        width: 90% !important;
    }

    .container-row {
        margin-left: 5% !important;
    }

    .accent-chain-text {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.04em;
    }
}

@media only screen and (min-width: 961px) {
    .container-row {
        width: 86vw !important;
    }

    .container-row {
        margin-left: 7vw !important;
    }
}

@media only screen and (min-width: 1300px) {
    .title-text {
        font-style: normal;
        font-weight: 300;
        font-size: 60px;
        line-height: 80px;
    }

    .accent-chain-text {
        font-style: normal;
        font-weight: 300;
        font-size: 32px;
        line-height: 40px;
        letter-spacing: 0.02em;
    }

    .accent-text {
        font-style: normal;
        font-weight: 500;
        font-size: 70px;
        line-height: 80px;
    }

    .container-row-usd-plus {
        margin-top: 10% !important;
        margin-bottom: 5% !important;
    }

    .page-container {
        width: 100% !important;
        height: 100% !important;
        /* SCALABLE HEIGHT */
    }
    /* Large screen, non-retina */
}

@media
only screen and (-webkit-min-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 1300px),
only screen and (        min-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (                min-resolution: 192dpi) and (min-width: 1300px),
only screen and (                min-resolution: 2dppx)  and (min-width: 1300px) {
    .title-text {
        font-style: normal;
        font-weight: 300;
        font-size: 40px;
        line-height: 55px;
    }

    .accent-chain-text {
        font-style: normal;
        font-weight: 300;
        font-size: 28px;
        line-height: 36px;
        letter-spacing: 0.02em;
    }

    .accent-text {
        font-style: normal;
        font-weight: 500;
        font-size: 45px;
        line-height: 55px;
    }
    /* Large screen, retina, stuff to override above media query */

}

.title-text {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    color: #333333;
}

.accent-chain-text {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #ADB3BD;
}

.accent-text {
    font-family: 'Cormorant', sans-serif;
    text-transform: uppercase;
    background: linear-gradient(91.26deg, #28A0F0 0%, rgba(6, 120, 196, 0.9917) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}

</style>
