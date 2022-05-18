<template>
    <v-row class="main-page-container">
        <video playsinline autoplay muted loop class="bg-video">
            <source :src='require("@/assets/background/video/use_video_bg.mp4")' type='video/mp4'>
        </video>

        <v-col class="text-col">
            <v-row class="title-row mb-10">
                <p class="title-text mb-0"><label class="accent-text">USD+</label> use cases</p>
            </v-row>

            <v-row class="use-cards-row">
                <UseCard
                        title="Cash management"
                        desc="Park your stables in USD+, and watch your balance grow in your wallet overnight. No staking required"
                        btnLabel="Mint"
                        link="https://app.overnight.fi/"/>

                <v-spacer></v-spacer>

                <UseCard
                        title="Liquidity Pools"
                        desc="Provide liquidity into USD+ pools, and get USD+ yield on top of LP fees and rewards"
                        btnLabel="Deposit"
                        link="https://app.overnight.fi/farm"/>

                <v-spacer></v-spacer>

                <UseCard
                        title="Leveraged Yield"
                        desc="Get 6x-9x USD+ yield by pledgeing USD+ as collateral with minimum risk of liquidation"
                        btnLabel="Coming Soon"
                        link=""/>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>

import UseCard from "@/component/pages/use_cases/component/UseCard";
export default {
    name: "UseCasesPage",

    components: {
        UseCard
    },

    data: () => ({

    }),

    computed: {
    },

    methods: {
    }
}
</script>

<style scoped>

.main-page-container {
    background: #FFFFFF !important;
    height: 100vh;
}

.bg-video {
    margin-left: 50%;
    z-index: 0;
    position: absolute;
    height: 100vh;
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

.text-col {
    margin-left: 7% !important;
    margin-right: 7% !important;
}

.title-row {
    margin-top: 150px !important;
    z-index: 100;
    position: relative;

    border-bottom: 1px solid #DEE1E5;
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
