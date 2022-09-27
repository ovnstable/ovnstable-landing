<template>
    <div class="page-container-products overflow-hidden">

        <img class="performance-bg-img-left" :src="require('@/assets/background/img/performance_bg_lines.svg')"
             v-if="isVisible">
        <img class="performance-bg-img-right" :src="require('@/assets/background/img/performance_bg_lines.svg')"
             v-if="isVisible">

        <v-row class="d-flex flex-wrap mt-15 mb-10" :class="isMobile ? 'flex-row' : 'flex-column'" justify="center">
            <v-col cols="12">
                <v-row class="title-row mb-10" justify="center" v-observe-visibility="visibilityChanged">
                    <label class="accent-text">Overnight's</label>
                    <label class="title-text mb-0">&nbsp;products</label>
                </v-row>

                <v-row class="d-flex" :class="isMobile ? 'flex-column' : 'flex-row'" justify="center">
                    <v-container :class="isMobile ? '' : 'ma-0'" class="fill-height card-container mt-10">
                        <v-col align-self="start" cols="12">
                            <v-row class="mt-12 mb-2 ml-5" justify="start">
                                <label class="risk-label-low">low risk/return</label>
                            </v-row>
                            <v-row class="ml-5" justify="start">
                                <label class="card-label">Yield bearing</label>
                            </v-row>
                            <v-row class="ml-5 mb-5" justify="start">
                                <label class="card-label">stablecoin(s)</label>
                            </v-row>
                            <v-row class="mx-5" justify="start">
                                <label class="desc-label">Park your stables in USD+, and watch your balance grow in your
                                    wallet overnight. No staking required</label>
                            </v-row>
                        </v-col>

                        <v-col align-self="end" cols="12">
                            <v-row class="ml-5 mb-8" justify="start">
                                <v-btn class="mint-btn" @click="openLink('https://app.overnight.fi/stats?network=op')">
                                    mint
                                    usd+ <img class="arrow ml-3" src="../../assets/img/icon/arrow.svg"></v-btn>
                            </v-row>
                            <v-row class="ml-5" justify="start" align="center">
                                <label class="apy-label">apy&nbsp;</label>
                                <Tooltip
                                    text="Average USD+ APY includes fees taken. For more accurate figures, see our dapp."/>
                            </v-row>
                            <v-row class="ml-5 mb-5 mt-6" justify="start">
                                <label class="numbers-label">8-12%</label>
                            </v-row>
                        </v-col>

                        <img class="low-risk" src="../../assets/img/products/low-risk.svg">
                    </v-container>

                    <v-container :class="isMobile ? '' : 'ma-0 mx-6'" class="fill-height card-container mt-10">
                        <v-col align-self="start" cols="12">
                            <v-row class="mt-12 mb-2 ml-5" justify="start">
                                <label class="risk-label-medium">medium risk/return</label>
                            </v-row>
                            <v-row class="ml-5" justify="start">
                                <label class="card-label">Exchange-traded</label>
                            </v-row>
                            <v-row class="ml-5 mb-5" justify="start">
                                <label class="card-label">strategies (ETS)</label>
                            </v-row>
                            <v-row class="mx-5" justify="start">
                                <label class="desc-label">Earn stable yield on hedged “crypto-to-stable” pools
                                    (“delta-neutral” strategy)</label>
                            </v-row>
                        </v-col>

                        <v-col align-self="end" cols="12">
                            <v-row class="ml-5 mb-8" justify="start">
                                <v-btn class="mint-btn" @click="openLink('https://app.overnight.fi/market')">mint ETS
                                    <img class="arrow ml-3" src="../../assets/img/icon/arrow.svg"></v-btn>
                                <label class="learn-more mt-1 ml-12"
                                       @click="openLink('https://www.youtube.com/watch?v=wIVAiUMLmvA')">Learn
                                    more</label>
                                <img class="mdi-open ml-2" src="../../assets/img/mdi-open.svg"
                                     @click="openLink('https://www.youtube.com/watch?v=wIVAiUMLmvA')">
                            </v-row>
                            <v-row class="ml-5" justify="start" align="center">
                                <label class="apy-label">apy&nbsp;</label>
                                <Tooltip
                                    text="Average ETS APY includes fees taken. For more accurate figures, see our dapp."/>
                            </v-row>
                            <v-row class="ml-5 mb-5 mt-6" justify="start">
                                <label class="numbers-label">10-25%</label>
                            </v-row>
                        </v-col>

                        <img class="low-risk" src="../../assets/img/products/medium-risk.svg">
                    </v-container>

                    <v-container :class="isMobile ? '' : 'ma-0'" class="fill-height card-container mt-10">
                        <v-col align-self="start" cols="12">
                            <v-row class="mt-12 mb-2 ml-5" justify="start">
                                <label class="risk-label-high">high risk/return</label>
                            </v-row>
                            <v-row class="ml-5 mb-5" justify="start">
                                <label class="card-label">USD+ Insurance</label>
                            </v-row>
                            <v-row class="ml-5 mt-5 mb-5">
                                <label class="in-development">in development</label>
                            </v-row>
                            <v-row class="list-label mx-5" justify="start">
                                <label class="desc-label">Earn yield by writing insurance for the investment strategies
                                    collateralizing USD+</label>
                            </v-row>
                        </v-col>

                        <v-col align-self="end" cols="12">
                            <v-row class="ml-5" justify="start" align="center">
                                <label class="apy-label">apy&nbsp;</label>
                                <Tooltip text="Expected APY. Stay tuned."/>
                            </v-row>
                            <v-row class="ml-5 mb-5 mt-6" justify="start">
                                <label class="numbers-label">TBD</label>
                            </v-row>
                        </v-col>

                        <img class="low-risk" src="../../assets/img/products/high-risk.svg">
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
            return window.innerWidth <= 960;
        },

        isTablet() {
            return window.innerWidth <= 1200;
        },
    },

    methods: {
        openLink(url) {
            if (url) {
                window.open(url, '_blank').focus();
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

    .in-development {
        font-size: 14px;
        line-height: 18px;
    }

    .list-label {
        font-size: 16px;
        line-height: 24px;
    }

    .card-container {
        width: 400px;
    }
}

@media only screen and (min-width: 1400px) {
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
        font-size: 20px;
        line-height: 32px;
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

    .in-development {
        font-size: 16px;
        line-height: 20px;
    }

    .list-label {
        font-size: 20px;
        line-height: 32px;
    }

    .card-container {
        width: 527px;
    }
}

.page-container-products {
    min-height: 80vh;
}

.title-text {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    color: #FFFFFF;
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

.card-container {
    height: 534px;
    background: linear-gradient(135deg, rgba(8, 43, 111, 1), rgba(21, 20, 29, 1));
    border-radius: 10px;
    z-index: 20 !important;

    position: relative;
}

.risk-label-low {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    color: #22ABAC;
}

.risk-label-medium {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    color: #FE7F2D;
}

.risk-label-high {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    color: #CF3F92;
}

.card-label {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    color: #FFFFFF;
}

.desc-label {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    text-transform: none;
    color: #FFFFFF;
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
    color: #FFFFFF;
}

.numbers-label {
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    color: #FFFFFF;
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
}

.learn-more {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: #1C95E7;
    cursor: pointer;
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

.list-label {
    font-family: "Roboto", sans-serif;
    font-weight: 200;
    text-transform: none;
    color: #FFFFFF;
}

</style>