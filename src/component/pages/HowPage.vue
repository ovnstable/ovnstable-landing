<template>
    <div class="page-container overflow-hidden">
        <v-row class="container-row d-flex overflow-hidden" :class="isMobile ? 'flex-column-reverse' : 'flex-row'" align="center">
            <v-col class="" :cols="isMobile ? 12 : 6">
                <v-row class="title-row mb-15" v-if="!isMobile">
                    <div>
                        <label class="title-text mb-0">How does </label>
                        <label class="accent-text">USD</label><label class="title-text-plus">+</label>
                        <label class="title-text"> work?</label>
                    </div>
                </v-row>

                <v-row class="">
                    <p class="sub-title-text">
                        USD+ includes 3 components:
                    </p>
                </v-row>

                <v-row>
                    <v-expansion-panels multiple v-model="openedPanels">
                        <v-expansion-panel class="ml-n9 mt-n4 panel-bordered" @click="openPanel(0)">
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

                        <v-expansion-panel class="ml-n9 panel-bordered" @click="openPanel(1)">
                            <v-expansion-panel-header class="panel-header-row mt-n4">
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

                        <v-expansion-panel class="ml-n9" disabled  @click="openPanel(2)">
                            <v-expansion-panel-header class="panel-header-row">
                                <label class="panel-header">3. Insurance (soon)</label>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-row>
            </v-col>

            <v-col class="" :cols="isMobile ? 12 : 6">
                <v-row class="title-row mb-10" v-if="isMobile">
                    <div>
                        <label class="title-text mb-0">How does </label>
                        <label class="accent-text">USD</label><label class="title-text-plus">+</label>
                        <label class="title-text"> work?</label>
                    </div>
                </v-row>
                <v-row :justify="isMobile ? 'center' : 'end'" class="overflow-hidden" :class="isMobile ? 'mb-10' : ''">
                    <img class="how-img" :src="require('@/assets/img/how_to_use.svg')">
                </v-row>
            </v-col>
        </v-row>
    </div>
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
        isMobile() {
            return window.innerWidth <= 960;
        },
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

    .sub-title-text {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
    }

    .panel-header {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.02em;
    }

    .list-label {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
    }

    .title-text-plus {
        font-style: normal;
        font-weight: 300;
        font-size: 30px;
        line-height: 36px;
    }

    .how-img {
        width: 80vw !important;
    }
}

@media only screen and (min-width: 961px) {
    .how-img {
        width: 40vw !important;
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

    .sub-title-text {
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 32px;
    }

    .panel-header {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.04em;
    }

    .list-label {
        font-style: normal !important;
        font-weight: 300 !important;
        font-size: 20px !important;
        line-height: 32px !important;
    }

    .title-text-plus {
        font-style: normal;
        font-weight: 300;
        font-size: 60px;
        line-height: 80px;
    }
}

.page-container {
    background: #FFFFFF !important;
}

.container-row {
    width: 90% !important;
}

.container-row {
    margin-left: 5% !important;
    margin-top: 10% !important;
    margin-bottom: 5% !important;
}

.title-text {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    color: #333333;
}

.sub-title-text {
    font-family: 'Roboto', sans-serif;
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

.panel-header {
    font-family: 'Roboto', sans-serif;
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
    color: #333333 !important;
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

</style>
