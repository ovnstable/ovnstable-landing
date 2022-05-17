<template>
    <v-row class="main-page-container">
        <v-col class="text-col">
            <v-row class="title-row" justify="start">
                <label class="title-text mb-0">we are <label class="accent-text">trusted</label></label>
            </v-row>

            <v-row class="content-row">
                <v-col cols="12">
                    <v-row class="trusted-title-row mb-8">
                        <label class="trusted-title">Partners</label>
                    </v-row>
                    <v-row class="trusted-row" align="center">
                        <img
                                class="trusted-img"
                                height="50"
                                @click="openLink('https://xcelerator.berkeley.edu/')"
                                :src="require('@/assets/img/partners/berkeley.png')">

                        <v-spacer></v-spacer>

                        <img
                                class="trusted-img"
                                height="40"
                                @click="openLink('https://www.bnbchain.world/en/bsc-mvb-program')"
                                :src="require('@/assets/img/partners/binance.svg')">

                        <v-spacer></v-spacer>

                        <img
                                class="trusted-img"
                                height="54"
                                @click="openLink('https://polygon.technology/')"
                                :src="require('@/assets/img/partners/polygon_token_logo.png')">

                        <v-spacer></v-spacer>

                        <img
                                class="trusted-img"
                                height="65"
                                @click="openLink('https://www.gelato.network/')"
                                :src="require('@/assets/img/partners/gelato.png')">

                        <v-spacer></v-spacer>

                        <img
                                class="trusted-img"
                                height="40"
                                @click="openLink('https://www.arrakis.finance/')"
                                :src="require('@/assets/img/partners/arrakis.png')">
                    </v-row>

                    <v-row class="trusted-title-row mb-8">
                        <label class="trusted-title">Our valued investors</label>
                    </v-row>

                    <v-row class="cards-row">
                        <!-- TODO: add cards carousel -->
                    </v-row>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>

export default {
    name: "TrustedPage",

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
    background: #FFFFFF;
}

.trusted-img {
    cursor: pointer;
}

.text-col {
    margin-left: 7% !important;
    margin-right: 7% !important;
}

.title-row {
    margin-top: 160px !important;
    margin-bottom: 100px !important;
}

.content-row {
    margin-bottom: 291px !important;
}

.trusted-row {
    margin-bottom: 186px !important;
}

.cards-row {
    height: 615px !important;
}

.trusted-title-row {
    height: 56px !important;
    border-bottom: 1px solid #DEE1E5;
}

.trusted-title {
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

</style>
