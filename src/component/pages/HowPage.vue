<template>
    <v-row class="main-page-container">
        <v-col class="text-col">
            <v-row class="title-row mb-15">
                <div>
                    <p class="title-text mb-0">How does <label class="accent-text">USD</label><label class="title-text-plus">+</label> work?</p>
                </div>
            </v-row>
            <v-row class="sub-title-row mb-12">
                <p class="sub-title-text">USD+ includes 3 components:</p>
            </v-row>
            <v-row class="expansion-row">
                <v-expansion-panels multiple v-model="openedPanels">
                    <v-expansion-panel class="how-panel panel-bordered" @click="openPanel(0)">
                        <v-expansion-panel-header class="panel-header-row">
                            <label class="panel-header">1. Pegged to USDC 1 : 1</label>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <ul class="mb-5">
                                <li class="list-label mb-8">100% collateralized with assets immediately convertable into USDC</li>
                                <li class="list-label mb-8">'Risk-first portfolio', i.e. assets are picked primarily to avoid losses on a daily basis (3-4 sigmas away from 0), no exposure to algorithmic stables</li>
                                <li class="list-label">USD+ can replace USDC in pools and lending protocols</li>
                            </ul>
                        </v-expansion-panel-content>
                    </v-expansion-panel>

                    <v-expansion-panel class="how-panel panel-bordered" @click="openPanel(1)">
                        <v-expansion-panel-header class="panel-header-row">
                            <label class="panel-header">2. Yield generating</label>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <ul class="mb-5">
                                <li class="list-label mb-8">Collateral consists of  yield-bearing strategies, including lending and stable-to-stable pools</li>
                                <li class="list-label mb-8">Portfolio allocation decentrally controlled (community proposals, veto power by token stakers/insurance providers)</li>
                                <li class="list-label mb-8">Portfolio strategy executed decentrally via smart-contracts</li>
                                <li class="list-label">Profit paid out daily in USD+ via rebase</li>
                            </ul>
                        </v-expansion-panel-content>
                    </v-expansion-panel>

                    <v-expansion-panel class="how-panel" disabled  @click="openPanel(2)">
                        <v-expansion-panel-header class="panel-header-row">
                            <label class="panel-header">3. Insurance (soon)</label>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-row>
        </v-col>

        <v-col class="img-col">
            <img class="how-img" height="650" :src="require('@/assets/img/how_to_use.svg')">
        </v-col>
    </v-row>
</template>

<script>

export default {
    name: "HowPage",

    components: {
    },

    data: () => ({
        openedPanels: [0],
    }),

    computed: {
    },

    methods: {
        openPanel(i) {
            if (this.openedPanels[0] !== i) {
                this.openedPanels = [].push(i);
            }
        },
    }
}
</script>

<style scoped>

.main-page-container {
    background: #FFFFFF !important;
}

.text-col {
    margin-left: 7% !important;
}

.img-col {
}

.how-img {
    margin-top: 306px !important;
    margin-bottom: 275px !important;
}

.title-row {
    margin-top: 231px !important;
}

.expansion-row {
    width: 700px !important;
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

.sub-title-text {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 32px;
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

.panel-header {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on;

    color: #333333;
}

.v-expansion-panel::before {
    box-shadow: none !important;
}

.theme--light.v-expansion-panels .v-expansion-panel:not(:first-child)::after {
    border: none !important;
}

.panel-bordered {
    border-bottom: 1px solid #DEE1E5 !important;
}

.panel-header-row {
    height: 112px !important;
}

.list-label {
    font-family: 'Roboto', sans-serif !important;
    font-style: normal !important;
    font-weight: 300 !important;
    font-size: 20px !important;
    line-height: 32px !important;
    color: #333333 !important;
}

</style>
