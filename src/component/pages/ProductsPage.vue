<template>
    <div class="page-container-products overflow-hidden" :class="isMobile ? 'flex-column' : 'flex-row'">

        <v-row class="d-flex " :class="isMobile ? 'mt-15 mb-10' : 'mt-15 mb-15' " justify="center">
            <v-col class="text-col" :cols="isMobile ? 12 : (isTablet ? 6 : 12)">
                <v-row class="justify-center main-title" :class="isMobile ? 'mb-0 flex-column' : ' mt-15 flex-row'">
                    <label class="accent-text">Overnight's</label>
                    <label class="title-text">&nbsp;products</label>
                </v-row>

                <v-row class="d-flex" :class="isMobile ? 'flex-column mt-0' : 'flex-row mb-15'" justify="center">
                    <v-container :class="isMobile ? '' : 'ma-0'" class="fill-height card-container mt-10" @click="openLink('https://app.overnight.fi/stats')">
                        <v-col align-self="start" :cols="isMobile ? 10 : 12">
                            <v-row align="center" :class="isMobile ? 'mt-3 mb-5' : 'mt-8 mb-2 ml-1'" justify="start">
                                <div>
                                    <v-img :src="require('@/assets/img/products/ls_return.svg')" />
                                </div>
                                <label class="risk-label-low ml-1">low risk/return</label>
                            </v-row>
                            <template v-if="isTablet">
                                <v-row :class="isMobile ? 'mb-5' : 'ml-1 mb-5'" justify="start">
                                    <label class="card-label">Stablecoin Money Market (USD+)</label>
                                </v-row>
                            </template>
                            <template v-else>
                                <v-row :class="isMobile ? '' : 'ml-1'" justify="start">
                                    <label class="card-label">Stablecoin Money</label>
                                </v-row>
                                <v-row :class="isMobile ? 'mb-7' : 'ml-1 mb-5'" justify="start">
                                    <label class="card-label">Market (USD+)</label>
                                </v-row>
                            </template>
                            <v-row :class="isMobile ? 'mt-5' : 'mx-1'" justify="start">
                                <label class="desc-label mb-5"><span class="bold-text">Highly liquid:</span> 1:1 peg to USDC, instantly mintable and redeemable in USDC</label>
                                <label class="desc-label mb-5"><span class="bold-text">100% collateralized:</span> with delta-neutral and other stablecoin strategies based on the best protocols</label>
                                <label class="desc-label mb-5"><span class="bold-text">Insured:</span> any daily loss to be compensated out of insurance fund (not more than 100% of the insurance fund)</label>
                            </v-row>
                        </v-col>

                        <v-col align-self="start" :cols="isMobile ? 6 : 12">
                            <v-row :class="isMobile ? '' : 'ml-1 mb-10'" justify="start">
                                <v-btn class="mint-btn" @click="openLink('https://app.overnight.fi/stats?network=op')">
                                    mint
                                    usd+ <img class="arrow ml-3" src="../../assets/img/icon/arrow.svg"></v-btn>
                            </v-row>
                        </v-col>
                        <v-row :class="isMobile ? 'ml-0 mt-1' : 'ma-0'">
                            <v-col :class="isMobile ? 'mt-5' : 'mt-0'">
                                <v-row :class="isMobile ? '' : 'ml-1 '" justify="start" align="center">
                                    <label class="apy-label">apy&nbsp;</label>
                                    <div @click.stop>
                                        <Tooltip
                                            text="Expected, not guaranteed yield ranges. For more accurate figures, see our dapp."/>
                                    </div>

                                </v-row>
                                <v-row :class="isMobile ? ' mb-5' : 'ml-1 mb-5'" justify="start">
                                    <label class="numbers-label">5-15%</label>
                                </v-row>
                            </v-col>
                        </v-row>

                        <div>
                            <v-img class="low-risk" :src="require('@/assets/img/products/low-risk.svg')" />
                        </div>

                    </v-container>

                    <v-container :class="isMobile ? '' : 'ma-0 mx-3'" class="fill-height card-container mt-10" @click="openLink('https://app.overnight.fi/market')">
                        <v-col align-self="start" :cols="isMobile ? 10 : 12">
                            <v-row align="center" :class="isMobile ? 'mt-3 mb-5' : 'mt-8 mb-2 ml-1'" justify="start">
                                <div>
                                    <v-img :src="require('@/assets/img/products/ms-return.svg')" />
                                </div>
                                <label class="risk-label-medium ml-1">medium risk/return</label>
                            </v-row>
                            <v-row :class="isMobile ? '' : 'ml-1'" justify="start">
                                <label class="card-label">Exchange-traded</label>
                            </v-row>
                            <v-row :class="isMobile ? 'mb-7' : 'ml-1 mb-5'" justify="start">
                                <label class="card-label">strategies (ETS)</label>
                            </v-row>
                            <v-row :class="isMobile ? 'mt-5' : 'mx-1'" justify="start">
                                <label class="desc-label mb-5"><span class="bold-text">Delta-neutral:</span> crypto-to-stable LP positions with hedge against crypto price fluctuations</label>
                                <label class="desc-label mb-5"><span class="bold-text">Real yield:</span> most ETSes based on protocols generating yield without rewards, e.g. Uni V3 and Aave</label>
                                <label class="desc-label mb-5"><span class="bold-text">Highly liquid:</span> 1:1 peg to USDC, instantly mintable and redeemable in USDC with a fee</label>
                            </v-row>
                        </v-col>
                        <v-col align-self="start" :cols="isMobile ? 10 : 12">
                            <v-row :class="isMobile ? '' : 'ml-0 mb-10 mt-3'" justify="start" align="center">
                                <v-btn class="mint-btn" :class="isMobile ? 'ml-0' : 'ml-1' "
                                       @click="openLink('https://app.overnight.fi/market')">mint ETS
                                    <img class="arrow ml-3" src="../../assets/img/icon/arrow.svg">
                                </v-btn>
                                <label class="learn-more" :class="isMobile ? 'ml-2 mt-1' : 'ml-12 mt-1'"
                                       @click="openLink('https://www.youtube.com/watch?v=wIVAiUMLmvA')">Learn
                                    more</label>
                                <img :class="isMobile ? 'mt-1 ml-1' : 'mt-1 ml-1'" class="mdi-open" src="../../assets/img/youtube-outlined.svg"
                                     @click="openLink('https://www.youtube.com/watch?v=wIVAiUMLmvA')">
                            </v-row>
                        </v-col>
                        <v-row :class="isMobile ? 'ml-1 mt-5' : 'ma-0'">
                            <v-col>
                                <v-row :class="isMobile ? '' : 'ml-1 '" justify="start" align="center">
                                    <label class="apy-label">apy&nbsp;</label>
                                    <div @click.stop>
                                        <Tooltip
                                            :max-width="200"
                                            text="Expected, not guaranteed yield ranges. For more accurate figures, see our dapp."/>
                                    </div>
                                </v-row>
                                <v-row :class="isMobile ? 'mb-5' : 'ml-1 mb-5'" justify="start">
                                    <label class="numbers-label">15-25%</label>
                                </v-row>
                            </v-col>
                        </v-row>

                        <div>
                            <v-img class="low-risk" :src="require('@/assets/img/products/medium-risk.svg')" />
                        </div>

                    </v-container>

                    <v-container :class="isMobile ? 'mb-15' : 'ma-0'" class="fill-height card-container mt-10" @click="openLink('https://app.overnight.fi/insurance')">
                        <v-col align-self="start" :cols="isMobile ? 10 : 12">
                            <v-row align="center" :class="isMobile ? 'mt-3 mb-5' : 'mt-8 mb-10 ml-1'" justify="start">
                                <div>
                                    <v-img :src="require('@/assets/img/products/hs_return.svg')" />
                                </div>
                                <label class="risk-label-high ml-1">high risk/return</label>
                            </v-row>
                            <v-row :class="isMobile ? 'mb-5' : 'ml-1 mb-4'" justify="start">
                                <label class="card-label">USD+ Insurance</label>
                            </v-row>
                            <v-row :class="isMobile ? 'mt-5' : 'mx-1'" justify="start">
                                <label class="desc-label mb-5"><span class="bold-text">Highly yielding:</span> collects (1) premiums retained from USD+ yields and (2) yield generated by insurance fund liquidity, mostly, from best ETSes</label>
                                <label class="desc-label mb-5"><span class="bold-text">First loss:</span> exposed to ‘first loss’ from USD+, i.e. any loss on USD+ is covered first from insurance fund</label>
                                <label class="desc-label mb-5"><span class="bold-text">Illiquid:</span> 3 days notification period to initiate redemption</label>
                            </v-row>
                        </v-col>

                        <v-col align-self="start" :cols="isMobile ? 6 : 12">
                            <v-row :class="isMobile ? 'mb-3' : 'ml-1 mb-1 mt-0'" justify="start">
                                <v-btn class="mint-btn" @click="openLink('https://app.overnight.fi/insurance')">
                                    mint
                                    insurance <img class="arrow ml-3" src="../../assets/img/icon/arrow.svg"></v-btn>
                            </v-row>
                        </v-col>

                        <v-col align-self="end" cols="12">
                            <v-row :class="isMobile ? '' : 'ml-1 '" justify="start" align="center">
                                <label class="apy-label">apy&nbsp;</label>
                                <div @click.stop>
                                    <Tooltip
                                        text="Expected, not guaranteed yield ranges. For more accurate figures, see our dapp."/>
                                </div>
                            </v-row>
                            <v-row :class="isMobile ? 'mb-5' : 'ml-1 mb-5'" justify="start">
                                <label class="numbers-label">25%+</label>
                            </v-row>
                        </v-col>

                        <img class="low-risk" src="../../assets/img/products/insurance.svg">
                    </v-container>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Tooltip from "@/component/common/element/Tooltip";

export default {
    name: "ProductsPage",
    components: {Tooltip},
    data: () => ({
        isVisible: false,
    }),

    computed: {
        isMobile() {
            return window.innerWidth <= 767;
        },

        isTablet() {
            return window.innerWidth <= 1299;
        },
    },

    methods: {
        openLink(url) {
            if (url) {
                window.open(url, '_blank').focus();
            }
        },
    }
}
</script>

<style scoped>

/* mobile */
@media only screen and (max-width: 1400px) {
    .card-container {
        width: 90% !important;
        height: auto !important;
    }

    .title-text {
        font-style: normal;
        font-weight: 300;
        font-size: 30px;
        line-height: 36px;
    }

    .main-title {
        display: flex;
        align-items: center;
        margin-bottom: 0 !important;
    }

    .accent-text {
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 36px;
    }

    .risk-label-low {
        font-size: 14px;
        line-height: 16px;
    }

    .risk-label-medium {
        font-size: 14px;
        line-height: 16px;
    }

    .risk-label-high {
        font-size: 14px;
        line-height: 16px;
    }

    .card-label {
        font-size: 24px;
        line-height: 32px;
    }

    .desc-label {
        font-size: 16px;
        line-height: 24px;
    }

    .mint-btn {
        font-size: 14px;
        line-height: 18px;
    }

    .apy-label {
        font-size: 20px;
        line-height: 28px;
    }

    .numbers-label {
        font-size: 54px;
        line-height: 60px;
    }

    .tooltip {
        width: 17px;
        height: 17px;
    }

    .learn-more {
        font-size: 16px;
        line-height: 24px;
    }

    .card-container {
        width: 400px;
        padding-left: 20px;
    }

    .low-risk {
        width: 170px !important;
        height: 170px !important;
    }

    .mdi-open {
        height: 22px;
        width: 22px;
    }
}

@media only screen and (min-width: 1300px) {
    .title-text {
        font-style: normal;
        font-weight: 300;
        font-size: 60px;
        line-height: 80px;
    }

    .accent-text {
        font-style: normal;
        font-weight: 500;
        font-size: 60px;
        line-height: 80px;
    }

    .risk-label-low {
        font-size: 16px;
        line-height: 16px;
    }

    .risk-label-medium {
        font-size: 16px;
        line-height: 16px;
    }

    .risk-label-high {
        font-size: 16px;
        line-height: 16px;
    }

    .card-label {
        font-size: 32px;
        line-height: 40px;
    }

    .desc-label {
        font-size: 18px;
        line-height: 28px;
    }

    .mint-btn {
        font-size: 16px;
        line-height: 20px;
    }

    .apy-label {
        font-size: 28px;
        line-height: 28px;
    }

    .numbers-label {
        font-size: 74px;
        line-height: 60px;
    }

    .learn-more {
        font-size: 18px;
        line-height: 28px;
    }

    .card-container {
        height: auto !important;
        width: 500px;
    }

    .mdi-open {
        height: 32px;
        width: 32px;
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

    .accent-text {
        font-style: normal;
        font-weight: 500;
        font-size: 45px;
        line-height: 55px;
    }

    .risk-label-low {
        font-size: 14px;
        line-height: 16px;
    }

    .risk-label-medium {
        font-size: 14px;
        line-height: 16px;
    }

    .risk-label-high {
        font-size: 14px;
        line-height: 16px;
    }

    .card-label {
        font-size: 24px;
        line-height: 30px;
    }

    .desc-label {
        font-size: 14px;
        line-height: 24px;
    }

    .mint-btn {
        font-size: 14px !important;
        line-height: 20px;
    }

    .apy-label {
        font-size: 24px;
        line-height: 20px;
    }

    .numbers-label {
        font-size: 54px;
        line-height: 50px;
    }

    .learn-more {
        font-size: 16px;
        line-height: 22px;
    }

    .card-container {
        width: 400px;
        height: auto !important;
    }

    .mdi-open {
        height: 22px;
        width: 22px;
    }

    .low-risk {
        width: 160px !important;
        height: 160px !important;
    }
    /* Large screen, retina, stuff to override above media query */

}

.main-title {
    position: relative;
    z-index: 1000;

}

.page-container-products {
    height: 100% !important;
}

.title-text {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    color: #29323E;
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

.card-container {
    height: 534px;
    background: #FFFFFF;
    border-radius: 10px;

    position: relative;
    z-index: 20 !important;

    box-shadow: 0 4px 4px 4px rgba(0, 0, 0, 0.12) !important;
    cursor: pointer;
}

.card-container:hover {
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.12) !important;
}

.risk-label-low {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    color: #22ABAC;
    cursor: pointer;
}

.risk-label-medium {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    color: #FE7F2D;
    cursor: pointer;
}

.risk-label-high {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    color: #CF3F92;
    cursor: pointer;
}

.card-label {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    color: #29323E;
    cursor: pointer;
}

.desc-label {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    text-transform: none;
    color: #29323E;
    list-style-type: none;
    display: inline-block;
    cursor: pointer;
}

.mint-btn {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    background: linear-gradient(rgba(40, 160, 240, 1), rgba(6, 120, 196, 0.99));
    border-radius: 2px;
    color: #FFFFFF !important;
}

.apy-label {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    color: #29323E;
}

.numbers-label {
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    color: #29323E;
    z-index: 10 !important;
}

.tooltip {
    width: 20px;
    height: 20px;
}

.low-risk {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1 !important;
    border-radius: 0 0 12px 0;
}

.learn-more {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: #1C95E7;
    cursor: pointer;
    z-index: 1000 !important;
}

.mdi-open {
    cursor: pointer;
}

.in-development {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    color: #707A8B;
}

.bold-text {
    font-weight: 500;
    background-color: #F1F3F6;
    padding: 3px;
}

</style>