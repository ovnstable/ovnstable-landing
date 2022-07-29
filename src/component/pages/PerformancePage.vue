<template>
    <div class="page-container overflow-hidden">

        <img class="performance-bg-img-left" :src="require('@/assets/background/img/performance_bg_lines.svg')">
        <img class="performance-bg-img-right" :src="require('@/assets/background/img/performance_bg_lines.svg')">

        <v-row class="container-row">
            <v-col cols="12">
                <v-row class="mb-15" align="center" v-if="!isMobile">
                    <v-col class="overflow-hidden" cols="6">
                        <v-row class="ml-0" justify="start">
                            <label class="accent-text mb-0">USD</label><label class="title-text-plus">+</label>
                            <label class="title-text">&nbsp;Performance</label>
                        </v-row>
                    </v-col>

                    <v-col class="overflow-hidden" cols="6">
                        <v-row class="mr-0" justify="end">
                            <ChainSelector mode="dark" :callbackFunc="selectChain"/>
                        </v-row>
                    </v-col>
                </v-row>

                <template v-else>
                    <v-row class="mb-10" align="center" justify="center">
                        <label class="accent-text mb-0">USD</label><label class="title-text-plus">+</label>
                        <label class="title-text">&nbsp;Performance</label>
                    </v-row>
                    <v-row class="mb-5" align="center" justify="center">
                        <ChainSelector mode="dark" :callbackFunc="selectChain"/>
                    </v-row>
                </template>

                <v-row class="d-flex " :class="isMobile ? 'flex-column' : 'flex-row'">
                    <v-col class="overflow-hidden" :cols="isMobile ? 12 : 6">
                        <v-row :justify="isMobile ? 'center' : 'end'">
                            <template v-if="chain === 'polygon'">
                                <ovn-apyrate network="polygon"></ovn-apyrate>
                            </template>

                            <template v-if="chain === 'avax'">
                                <ovn-apyrate network="avax"></ovn-apyrate>
                            </template>

                            <template v-if="chain === 'bsc'">
                                <ovn-apyrate network="bsc"></ovn-apyrate>
                            </template>
                        </v-row>
                    </v-col>

                    <v-col class="overflow-hidden" :cols="isMobile ? 12 : 6">
                        <v-row :justify="isMobile ? 'center' : 'start'">
                            <template v-if="chain === 'polygon'">
                                <ovn-distrate network="polygon"></ovn-distrate>
                            </template>

                            <template v-if="chain === 'avax'">
                            </template>

                            <template v-if="chain === 'bsc'">
                            </template>
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
        chain: 'polygon',
    }),

    computed: {
        isMobile() {
            return window.innerWidth <= 960;
        },
    },

    methods: {
        selectChain(chain) {
            this.chain = chain;
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

    .title-text-plus {
        font-style: normal;
        font-weight: 300;
        font-size: 30px;
        line-height: 36px;
    }
}

@media only screen and (max-width: 960px) {
    .container-row {
        width: 90% !important;
    }

    .container-row {
        margin-left: 5% !important;
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
}

.page-container {
    background: linear-gradient(122.1deg, #011845 0%, #15141D 104.83%);
}

.container-row {
    margin-top: 10% !important;
    margin-bottom: 10% !important;
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

</style>
