<template>
    <div class="page-container overflow-hidden" v-observe-visibility="visibilityChanged">
        <v-row class="container-row d-flex overflow-hidden">
            <v-col class="text-col" cols="12">
                <v-row class="mb-10" justify="center" >
                    <label class="title-text mb-0"><label class="accent-text">Security</label> at its core</label>
                </v-row>

                <v-row class="d-flex justify-space-between" :class="isMobile ? 'flex-column' : 'flex-row'" v-if="isVisible">
                    <v-col :cols="isMobile ? 12 : 3" :class="isMobile ? 'mt-0' : 'mt-12'">
                        <v-row justify="center" class="card-title-row" :class="isMobile ? 'mb-5' : 'mt-1 mb-10'">
                            <label class="title-label">full collateralization</label>
                        </v-row>
                        <v-row justify="start" class="mb-10">
                            <label class="desc-label">100% collateralized with the best stablecoins (USDC, USDT, DAI) in proven protocols and proprietary delta-neutral strategies. No algorithmic stablecoins or other volatile assets</label>
                        </v-row>
                    </v-col>

                    <v-col :cols="isMobile ? 12 : 3" :class="isMobile ? 'mt-0' : 'mt-15'">
                        <v-row justify="center" class="card-title-row" :class="isMobile ? 'mb-5' : 'mb-10'">
                            <label class="title-label">Rigorous Risk-management and monitoring</label>
                        </v-row>
                        <v-row justify="center" class="mb-10">
                            <label class="desc-label">Finance risks and smart contract risk management. World class risk management team and process built in line with “Three lines of defence approach” mandated for blue-chip financial institutions</label>
                        </v-row>
                    </v-col>

                    <v-col :cols="isMobile ? 12 : 3" :class="isMobile ? 'mt-0' : 'mt-15'">
                        <v-row justify="center" :class="isMobile ? 'mb-0' : 'mb-10'" class="card-title-row">
                            <label class="title-label">Audit</label>
                        </v-row>
                        <v-row justify="center" :class="isMobile ? 'mb-10' : 'mb-10'">
                            <label class="desc-label">Audited by <a @click="openLink('https://hacken.io/audits/#overnight')">Hacken.io</a>. Other world’s leading security firms’ audits are in plans. Security of the USD+ Protocol is our highest priority</label>
                            <div v-if="isMobile">
                                <HoverImg
                                    class="find-us-img-audit mt-5"
                                    link="https://hacken.io/audits/#overnight"
                                    :img="require('@/assets/img/partners/hacken.svg')"
                                    :hover-img="require('@/assets/img/partners/hackenColored.svg')"
                                />
                            </div>
                        </v-row>
                    </v-col>
                </v-row>

                <v-row class="d-flex justify-space-between" :class="isMobile ? 'flex-column-reverse mt-0 mb-0' : 'flex-row mt-10 mb-12'" v-if="isVisible">
                    <v-col :cols="isMobile ? 12 : 8" :class="isMobile ? 'mt-5' : ''">
                        <v-row class="find-title-row" :class="isMobile ? 'mb-0' : 'mb-5'">
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
                                :hover-img="require('@/assets/img/partners/deBank_colored.svg')"
                            />
                        </v-row>
                    </v-col>

                    <v-col v-if="!isMobile" :cols="isMobile ? 12 : 3" :class="isMobile ? 'mt-0' : ''">
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

    .find-us-img {
        width: 30% !important;
        height: auto;
    }

    .find-us-img-audit {
        width: 44px;
        height: 50px;
    }

    .page-container {
        margin: 0 0 0 0;
    }

    .find-title-row {
        height: 35px !important;
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
        font-size: 70px;
        line-height: 80px;
    }

    .title-label {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.04em;
    }

    .desc-label {
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 28px;
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
        line-height: 40px;
    }

    .find-us-img, .find-us-img-audit {
        width: 12vw;
    }

    .find-us-img-audit {
        width: 3vw;
    }

    .page-container {
        margin: 0 20px 0 20px;
    }

    .find-title-row {
        height: 56px !important;
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

    .title-label {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        letter-spacing: 0.04em;
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
        line-height: 20px !important;
    }

    .find-title {
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 32px;
    }

    .find-us-img, .find-us-img-audit {
        width: 12vw;
    }

    .find-us-img-audit {
        width: 3vw;
    }

    .page-container {
        margin: 0 20px 0 20px;
    }

    .find-title-row {
        height: 56px !important;
    }
    /* Large screen, retina, stuff to override above media query */

}

.page-container {
    background: #F5F5F5 !important;
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
    text-align: left;
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
