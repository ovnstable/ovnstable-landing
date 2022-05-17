<template>
    <v-row class="main-page-container">
        <v-col class="text-col">
            <v-row class="title-row" justify="center">
                <label class="title-text mb-0"><label class="accent-text">Security</label> at it’s core</label>
            </v-row>

            <v-row class="cards-row">
                <v-col>
                    <v-row justify="center">
                        <label class="title-label mb-8">full collateralization</label>
                    </v-row>
                    <v-row justify="center">
                        <label class="desc-label">100% + Collateralized with secure DeFi assets: USDC, USDT, DAI. No algorithmic stablecoins or other volatile assets</label>
                    </v-row>
                </v-col>
                <v-col class="middle-col" cols="4">
                    <v-row justify="center">
                        <label class="title-label mb-8">Rigorous Risk-management and monitoring</label>
                    </v-row>
                    <v-row justify="center">
                        <label class="desc-label">Finance risks and smart contract risk management. World class risk management team and process built in line with “Three lines of defence approach” mandated for blue-chip financial exexutions </label>
                    </v-row>
                </v-col>
                <v-col>
                    <v-row justify="center">
                        <label class="title-label mb-8">Audit</label>
                    </v-row>
                    <v-row justify="center">
                        <label class="desc-label">Audited by Hacken.io. Other world’s leading security firms’ audit’s are in plans. Security of the USD+ Protocol is our highest priority</label>
                    </v-row>
                </v-col>
            </v-row>

            <v-row class="find-row" id="audit_part">
                <v-col cols="8" class="find-col">
                    <v-row class="find-title-row mb-8">
                        <label class="find-title">Find us on</label>
                    </v-row>
                    <v-row align="center">
                        <img
                                class="find-us-img"
                                height="54"
                                @click="openLink('https://polygon.technology/')"
                                :src="require('@/assets/img/partners/polygon_token_logo.png')">

                        <v-spacer></v-spacer>

                        <img
                                class="find-us-img"
                                height="80"
                                @click="openLink('https://app.1inch.io/#/137/swap/USDC/USD%2B')"
                                :src="require('@/assets/img/partners/1inch.svg')">

                        <v-spacer></v-spacer>

                        <!-- TODO: add debank link -->
                        <img
                                class="find-us-img"
                                height="56"
                                :src="require('@/assets/img/partners/debank.svg')">
                    </v-row>
                </v-col>

                <v-col>
                    <v-row class="find-title-row mb-8">
                        <label class="find-title">Audit</label>
                    </v-row>
                    <v-row align="center">
                        <v-spacer></v-spacer>
                        <img
                                class="find-us-img"
                                height="70"
                                @click="openLink('https://hacken.io/audits/#overnight')"
                                :src="require('@/assets/img/partners/hacken.svg')">
                        <v-spacer></v-spacer>
                    </v-row>
                </v-col>
            </v-row>

            <v-row class="btn-row" justify="center">
                <v-btn
                        text
                        class="whitepaper-btn"
                        @click="openLink('https://docs.overnight.fi/')">
                    Risk-management whitepaper
                </v-btn>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>

export default {
    name: "SecurityPage",

    components: {
    },

    data: () => ({

    }),

    computed: {
    },

    methods: {
        openLink(url) {
            window.open(url, '_blank').focus();
        },
    }
}
</script>

<style scoped>

.main-page-container {
    background: #F5F5F5;
}

.text-col {
    margin-left: 7% !important;
    margin-right: 7% !important;
}

.find-us-img {
    cursor: pointer;
}

.title-row {
    margin-top: 200px !important;
    margin-bottom: 100px !important;
}

.cards-row {
    margin-bottom: 134px !important;
    margin-left: 50px !important;
    margin-right: 50px !important;
}

.find-row {
    margin-bottom: 134px !important;
}

.btn-row {
    margin-bottom: 164px !important;
}

.find-col {
    margin-right: 112px !important;
}

.middle-col {
    margin-left: 94px !important;
    margin-right: 94px !important;
}

.find-title-row {
    height: 56px !important;
    border-bottom: 1px solid #DEE1E5;
}

.find-title {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #333333;
}

.title-text {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 60px;
    line-height: 80px;
    text-transform: uppercase;
    color: #333333;
}

.accent-text {
    font-family: 'Cormorant', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 70px;
    line-height: 80px;
    text-transform: uppercase;

    background: linear-gradient(91.26deg, #28A0F0 0%, rgba(6, 120, 196, 0.9917) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}

.title-label {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on;
    text-align: center;
    color: #000000;
}

.desc-label {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    color: #000000;
}

.whitepaper-btn {
    width: 348px !important;
    height: 50px !important;
    border: 1px solid #28A0F0;
    border-radius: 0;

    font-family: 'Roboto', sans-serif !important;
    font-style: normal !important;
    font-weight: 400 !important;
    font-size: 18px !important;
    line-height: 20px !important;
    font-feature-settings: 'liga' off !important;
    color: #28A0F0 !important;

    text-transform: none !important;
}
</style>
