<template>
    <div class="page-container overflow-hidden">

        <img class="performance-bg-img-left" :src="require('@/assets/background/img/performance_bg_lines.svg')" v-if="isVisible">
        <img class="performance-bg-img-right" :src="require('@/assets/background/img/performance_bg_lines.svg')" v-if="isVisible">

        <v-row class="container-row container-row-usd-plus">
            <v-col cols="12">
                <v-row class="mb-15" align="center" v-if="!isMobile">
                    <v-col class="overflow-hidden" :cols="isMobile ? 12 : 9" v-observe-visibility="visibilityChanged">
                        <v-row class="ml-0" justify="start" align="center">
                            <label class="accent-text mb-0">USD</label><label class="title-text-plus">+</label>
                            <label class="title-text">&nbsp;Performance</label>
                            <label class="accent-chain-text mx-3" v-if="!isMobile">|</label><label
                            class="accent-chain-text">{{ getChainName(chain) }} </label>
                        </v-row>
                    </v-col>

                    <v-col class="overflow-hidden" v-if="isVisible">
                        <v-row class="mr-0" justify="end" align="center">
                            <ChainSelector mode="dark" :callbackFunc="selectChain"/>
                        </v-row>
                    </v-col>
                </v-row>

                <template v-else>
                    <v-row align="center" justify="center" v-observe-visibility="visibilityChanged">
                        <label class="accent-text mb-0">USD</label><label class="title-text-plus">+</label>
                        <label class="title-text">&nbsp;Performance</label>
                    </v-row>
                    <v-row class="mb-10" align="center" justify="center" v-if="isVisible">
                        <label class="accent-chain-text mx-3" v-if="!isMobile">|</label><label
                        class="accent-chain-text">{{ getChainName(chain) }} </label>
                    </v-row>
                    <v-row class="mb-5" align="center" justify="center" v-if="isVisible">
                        <ChainSelector mode="dark" :callbackFunc="selectChain"/>
                    </v-row>
                </template>

                <v-row class="d-flex " :class="isMobile ? 'flex-column' : 'flex-row'" v-if="isVisible">
                    <v-col class="overflow-hidden" :cols="isMobile ? 12 : 6">
                        <v-row :justify="isMobile ? 'center' : 'end'">
                            <template v-if="chain === 'polygon'">
                                <ovn-apyrate network="polygon" product="usd+"></ovn-apyrate>
                            </template>

                            <template v-if="chain === 'avax'">
                                <ovn-apyrate network="avax" product="usd+"></ovn-apyrate>
                            </template>

                            <template v-if="chain === 'bsc'">
                                <ovn-apyrate network="bsc" product="usd+"></ovn-apyrate>
                            </template>

                            <template v-if="chain === 'op'">
                                <ovn-apyrate network="op" product="usd+"></ovn-apyrate>
                            </template>
                        </v-row>
                    </v-col>

                    <v-col class="overflow-hidden" :cols="isMobile ? 12 : 6" v-if="isVisible">
                        <v-row :justify="isMobile ? 'center' : 'start'">
                            <template v-if="chain === 'polygon'">
                                <ovn-tvlrate network="polygon" product="usd+"></ovn-tvlrate>
                            </template>

                            <template v-if="chain === 'avax'">
                                <ovn-tvlrate network="avax" product="usd+"></ovn-tvlrate>
                            </template>

                            <template v-if="chain === 'bsc'">
                                <ovn-tvlrate network="bsc" product="usd+"></ovn-tvlrate>
                            </template>

                            <template v-if="chain === 'op'">
                                <ovn-tvlrate network="op" product="usd+"></ovn-tvlrate>
                            </template>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row class="container-row container-row-ets" v-if="isVisible">
            <v-col cols="12">
                <v-row class="mb-15" align="center" v-if="!isMobile">
                    <v-col class="overflow-hidden" :cols="isMobile ? 12 : 9">
                        <v-row class="ml-0" justify="start" align="center">
                            <label class="accent-text mb-0">ETS</label>
                            <label class="title-text">&nbsp;Performance</label>
                            <label class="accent-chain-text mx-3" v-if="!isMobile">|</label><label
                            class="accent-chain-text">{{ chainEts }}</label>
                        </v-row>
                    </v-col>

                    <v-col class="overflow-hidden">
                        <v-row class="mr-0" justify="end" align="center">
                            <ChainSelector mode="dark" :callbackFunc="selectChainEts" :chains="['polygon', 'bsc', 'op']" :selected-by-default="'polygon'"/>
                        </v-row>
                    </v-col>
                </v-row>

                <template v-else>
                    <v-row align="center" justify="center">
                        <label class="accent-text mb-0">ETS</label>
                        <label class="title-text">&nbsp;Performance</label>
                    </v-row>
                    <v-row class="mb-10" align="center" justify="center">
                        <label class="accent-chain-text mx-3" v-if="!isMobile">|</label><label
                        class="accent-chain-text">{{ chainEts }}</label>
                    </v-row>
                    <v-row class="mb-4" align="center" justify="center">
                        <ChainSelector mode="dark" :callbackFunc="selectChainEts" :chains="['polygon', 'bsc', 'op']" :selected-by-default="'polygon'"/>
                    </v-row>
                </template>

                <v-row align="center" justify="start" class="ma-0 toggle-row mb-4" :class="isMobile ? '' : 'mt-n4'">
                    <label
                        v-if="chainEts === 'polygon'"
                        @click="setEtsAddress('0x4b5e0af6AE8Ef52c304CD55f546342ca0d3050bf')"
                        class="tab-btn mr-4"
                        v-bind:class="activeTabUsdPlusWmatic">
                        USD+/wMatic
                    </label>

                    <label
                        v-if="chainEts === 'polygon'"
                        @click="setEtsAddress('0xd52caB8AfC8ECd08b7CFa6D07e224a56F943e4c4')"
                        class="tab-btn mx-4"
                        v-bind:class="activeTabWmaticUsdc">
                        wMatic/USDC
                    </label>

                    <label
                        v-if="chainEts === 'polygon'"
                        @click="setEtsAddress('0x719ee857Ae6cf85Cbe7284Bc45ad1f99dd5ff0dB')"
                        class="tab-btn mx-4"
                        v-bind:class="activeTabEtsMoonstone">
                        Moonstone
                    </label>

                    <label
                        v-if="chainEts === 'bsc'"
                        @click="setEtsAddress('0xbAAc6ED05b2fEb47ef04b63018A27d80cbeA10d1')"
                        class="tab-btn mr-4"
                        v-bind:class="activeTabUsdPlusBnb">
                        USD+/BNB
                    </label>

                    <label
                        v-if="chainEts === 'bsc'"
                        @click="setEtsAddress('0xc6eca7a3b863d720393DFc62494B6eaB22567D37')"
                        class="tab-btn mx-4"
                        v-bind:class="activeTabBusdBnb">
                        BUSD/BNB
                    </label>

                    <label
                        v-if="chainEts === 'op'"
                        @click="setEtsAddress('0xA88F8c02eBdE678de623C6BCFC886De82e18ad00')"
                        class="tab-btn mx-4"
                        v-bind:class="activeTabRuby">
                        Ruby
                    </label>
                </v-row>

                <v-row class="d-flex " :class="isMobile ? 'flex-column' : 'flex-row'">
                    <v-col class="overflow-hidden" :cols="isMobile ? 12 : 6">
                        <v-row :justify="isMobile ? 'center' : 'end'">
                            <ovn-apyrate :network="chainEts" product="ets" :address="etsAddress"></ovn-apyrate>
                        </v-row>
                    </v-col>

                    <v-col class="overflow-hidden" :cols="isMobile ? 12 : 6">
                        <v-row :justify="isMobile ? 'center' : 'start'">
                            <ovn-tvlrate :network="chainEts" product="ets" :address="etsAddress"></ovn-tvlrate>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>

import ChainSelector from "@/component/common/ChainSelector";

export default {
    name: "PerformancePage",

    components: {
        ChainSelector
    },

    data: () => ({
        chain: 'op',
        chainEts: 'polygon',
        etsAddress: '0x4b5e0af6AE8Ef52c304CD55f546342ca0d3050bf',

        isVisible: false,
    }),

    computed: {
        isMobile() {
            return window.innerWidth <= 960;
        },

        activeTabUsdPlusWmatic: function () {
            return {
                'tab-button': this.etsAddress === '0x4b5e0af6AE8Ef52c304CD55f546342ca0d3050bf',
                'tab-button-in-active': this.etsAddress !== '0x4b5e0af6AE8Ef52c304CD55f546342ca0d3050bf',
            }
        },

        activeTabWmaticUsdc: function () {
            return {
                'tab-button': this.etsAddress === '0xd52caB8AfC8ECd08b7CFa6D07e224a56F943e4c4',
                'tab-button-in-active': this.etsAddress !== '0xd52caB8AfC8ECd08b7CFa6D07e224a56F943e4c4',
            }
        },

        activeTabEtsMoonstone: function () {
            return {
                'tab-button': this.etsAddress === '0x719ee857Ae6cf85Cbe7284Bc45ad1f99dd5ff0dB',
                'tab-button-in-active': this.etsAddress !== '0x719ee857Ae6cf85Cbe7284Bc45ad1f99dd5ff0dB',
            }
        },

        activeTabUsdPlusBnb: function () {
            return {
                'tab-button': this.etsAddress === '0xbAAc6ED05b2fEb47ef04b63018A27d80cbeA10d1',
                'tab-button-in-active': this.etsAddress !== '0xbAAc6ED05b2fEb47ef04b63018A27d80cbeA10d1',
            }
        },

        activeTabBusdBnb: function () {
            return {
                'tab-button': this.etsAddress === '0xc6eca7a3b863d720393DFc62494B6eaB22567D37',
                'tab-button-in-active': this.etsAddress !== '0xc6eca7a3b863d720393DFc62494B6eaB22567D37',
            }
        },

        activeTabRuby: function () {
            return {
                'tab-button': this.etsAddress === '0xA88F8c02eBdE678de623C6BCFC886De82e18ad00',
                'tab-button-in-active': this.etsAddress !== '0xA88F8c02eBdE678de623C6BCFC886De82e18ad00',
            }
        },
    },

    methods: {
        selectChain(chain) {
            this.chain = chain;
        },

        selectChainEts(chain) {
            this.chainEts = chain;

            if (chain === 'polygon') {
                this.setEtsAddress('0x4b5e0af6AE8Ef52c304CD55f546342ca0d3050bf');
            }

            if (chain === 'bsc') {
                this.setEtsAddress('0xbAAc6ED05b2fEb47ef04b63018A27d80cbeA10d1');
            }

            if (chain === 'op') {
                this.setEtsAddress('0xA88F8c02eBdE678de623C6BCFC886De82e18ad00');
            }
        },

        setEtsAddress(address) {
            this.etsAddress = address;
        },

        getChainName(s) {
            switch (s) {
                case 'op':
                    return 'optimism'
                case 'avax':
                    return 'avalanche (alpha)'
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

    .title-text-plus {
        font-style: normal;
        font-weight: 300;
        font-size: 30px;
        line-height: 36px;
    }

    .container-row-usd-plus, .container-row-ets {
        margin-top: 10% !important;
        margin-bottom: 10% !important;
    }

    .tab-btn {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
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

@media only screen and (min-width: 1400px) {
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

    .title-text-plus {
        font-style: normal;
        font-weight: 300;
        font-size: 60px;
        line-height: 80px;
    }

    .container-row-usd-plus {
        margin-top: 10% !important;
        margin-bottom: 5% !important;
    }

    .container-row-ets {
        margin-top: 5% !important;
        margin-bottom: 10% !important;
    }

    .tab-btn {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 32px;
    }
}

.page-container {
}

.title-text {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    color: #FFFFFF;
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

.title-text-plus {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;

    background: linear-gradient(91.26deg, #28A0F0 0%, rgba(6, 120, 196, 0.9917) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}

.performance-bg-img-left {
    position: absolute;
    mix-blend-mode: overlay;
    z-index: 0;
    left: 0 !important;
}

.performance-bg-img-right {
    position: absolute;
    mix-blend-mode: overlay;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    z-index: 0;
    right: 0 !important;
}

.title-row-col {
    min-width: 86vw !important;
    width: 86vw !important;
    max-width: 86vw !important;
}

.toggle-row {
    border-bottom: 2px solid #4C586D;
}

.tab-btn {
    font-family: 'Roboto', sans-serif;
    font-feature-settings: 'liga' off;
    color: #FFFFFF;
    margin-bottom: -2px;
    cursor: pointer;
    z-index: 10 !important;
}

.tab-btn-disabled {
    cursor: default;
}

.tab-button {
    border-bottom: 2px solid #1C95E7 !important;
    color: #1C95E7 !important;
    cursor: pointer !important;
}

.tab-button-in-active {
    color: #FFFFFF !important;
    cursor: pointer !important;
}

</style>
