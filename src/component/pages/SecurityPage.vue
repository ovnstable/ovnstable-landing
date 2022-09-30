<template>
    <div class="page-container overflow-hidden">
        <v-row class="container-row d-flex overflow-hidden">
            <v-col class="text-col" cols="12">
                <v-row class="mb-10" justify="center" v-observe-visibility="visibilityChanged">
                    <label class="title-text mb-0"><label class="accent-text">Security</label> at its core</label>
                </v-row>

                <v-row class="d-flex justify-space-between" :class="isMobile ? 'flex-column' : 'flex-row'" v-if="isVisible">
                    <v-col :cols="isMobile ? 12 : 3" class="mt-12">
                        <v-row justify="center" class="mb-10 card-title-row">
                            <label class="title-label">full collateralization</label>
                        </v-row>
                        <v-row justify="center" class="mb-10">
                            <label class="desc-label">100%+ Collateralized with secure DeFi assets: USDC, USDT, DAI. No algorithmic stablecoins or other volatile assets</label>
                        </v-row>
                    </v-col>

                    <v-col :cols="isMobile ? 12 : 4" class="mt-12">
                        <v-row justify="center" class="mb-10 card-title-row">
                            <label class="title-label">Rigorous Risk-management and monitoring</label>
                        </v-row>
                        <v-row justify="center" class="mb-10">
                            <label class="desc-label">Finance risks and smart contract risk management. The world-class risk management team and built-in process line with the “Three lines of defense approach” mandated for blue-chip financial institutions</label>
                        </v-row>
                    </v-col>

                    <v-col :cols="isMobile ? 12 : 3" class="mt-12">
                        <v-row justify="center" class="mb-10 card-title-row">
                            <label class="title-label">Audit</label>
                        </v-row>
                        <v-row justify="center" class="mb-10">
                            <label class="desc-label">We are audited by <a @click="openLink('https://hacken.io/audits/#overnight')">Hacken.io</a>. Other world’s leading security firms’ audits are in plan. Security of the USD+ Protocol is our highest priority</label>
                        </v-row>
                    </v-col>
                </v-row>

                <v-row class="d-flex justify-space-between mt-10 mb-12" :class="isMobile ? 'flex-column-reverse' : 'flex-row'" v-if="isVisible">
                    <v-col :cols="isMobile ? 12 : 8" class="mt-12">
                        <v-row class="find-title-row mb-8">
                            <label class="find-title">Find us on</label>
                        </v-row>
                        <v-row align="center">
                            <HoverImg
                                    class="find-us-img"
                                    link="https://coinmarketcap.com/currencies/usd/"
                                    :img="require('@/assets/img/partners/coinMarketCap.svg')"
                                    :hover-img="require('@/assets/img/partners/coinMarketCapColored.svg')"
                            />

                            <v-spacer></v-spacer>

                            <HoverImg
                                    class="find-us-img"
                                    link="https://app.1inch.io/#/137/swap/USDC/USD%2B"
                                    :img="require('@/assets/img/partners/1Inch.svg')"
                                    :hover-img="require('@/assets/img/partners/1InchColored.svg')"
                            />

                            <v-spacer></v-spacer>

                            <HoverImg
                                    class="find-us-img"
                                    link="https://www.coingecko.com/en/coins/usdplus"
                                    :img="require('@/assets/img/partners/coinGecko.svg')"
                                    :hover-img="require('@/assets/img/partners/coinGeckoColored.svg')"
                            />

                            <v-spacer></v-spacer>

                            <HoverImg
                                class="find-us-img"
                                link="https://debank.com/"
                                :img="require('@/assets/img/partners/DeBank.svg')"
                                :hover-img="require('@/assets/img/partners/DeBank.svg')"
                            />
                        </v-row>
                    </v-col>

                    <v-col :cols="isMobile ? 12 : 3" class="mt-12">
                        <v-row class="find-title-row mb-8">
                            <label class="find-title">Audit</label>
                        </v-row>
                        <v-row align="center">
                            <v-spacer></v-spacer>
                            <HoverImg
                                    class="find-us-img-audit"
                                    link="https://hacken.io/audits/#overnight"
                                    :img="require('@/assets/img/partners/hacken.svg')"
                                    :hover-img="require('@/assets/img/partners/hackenColored.svg')"
                            />
                            <v-spacer></v-spacer>
                        </v-row>
                    </v-col>
                </v-row>

                <v-row justify="center" v-if="isVisible">
                    <v-btn
                            text
                            class="whitepaper-btn mt-12 px-15"
                            @click="openLink('https://docs.overnight.fi/')">
                        Risk-management whitepaper
                    </v-btn>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>

import HoverImg from "@/component/common/HoverImg";
export default {
    name: "SecurityPage",

    components: {
        HoverImg
    },

    data: () => ({
        isVisible: false,
    }),

    computed: {
        isMobile() {
            return window.innerWidth <= 960;
        },
    },

    methods: {
        openLink(url) {
            window.open(url, '_blank').focus();
        },

        visibilityChanged (isVisible, entry) {
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
        font-size: 34px;
        line-height: 38px;
    }

    .title-label {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.02em;
    }

    .desc-label {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
    }

    .whitepaper-btn {
        height: 40px !important;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 16px !important;
        line-height: 18px !important;
    }

    .find-title {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
    }
}

@media only screen and (max-width: 960px) {
    .find-us-img {
        width: 20vw;
    }

    .find-us-img-audit {
        width: 5vw;
    }
}

@media only screen and (min-width: 961px) {
    .find-us-img {
        width: 20vw;
    }

    .find-us-img-audit {
        width: 5vw;
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
        font-size: 70px;
        line-height: 80px;
    }

    .title-label {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.04em;
    }

    .desc-label {
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 32px;
    }

    .whitepaper-btn {
        height: 50px !important;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 18px !important;
        line-height: 20px !important;
    }

    .find-title {
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 36px;
    }

    .find-us-img, .find-us-img-audit {
        width: 12vw;
    }

    .find-us-img-audit {
        width: 3vw;
    }
}

.page-container {
    background: #F5F5F5 !important;
    margin: 0 20px 0 20px;
}

.container-row {
    width: 90% !important;
}

.container-row {
    margin-left: 5% !important;
    margin-top: 10% !important;
    margin-bottom: 10% !important;
}

.find-us-img, .find-us-img-audit {
    cursor: pointer;
}

.find-title-row {
    height: 56px !important;
    border-bottom: 1px solid #DEE1E5;
}

.find-title {
    font-family: 'Roboto', sans-serif;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #333333;
}

.title-text {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    color: #333333;
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

.title-label {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on;
    text-align: center;
    color: #000000;
}

.desc-label {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #000000;
}

.whitepaper-btn {
    border: 1px solid #28A0F0;
    border-radius: 0;
    font-family: 'Roboto', sans-serif !important;
    letter-spacing: normal;
    font-feature-settings: 'liga' off !important;
    color: #28A0F0 !important;
    text-transform: none !important;
}

.card-title-row {
    height: 15% !important;
}
</style>
