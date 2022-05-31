<template>
    <div class="page-container overflow-hidden">

        <v-row class="container-row d-flex overflow-hidden">
            <v-col class="text-col" cols="12">
                <v-row class="title-row mb-10">
                    <label class="accent-text">USD</label><label class="title-text-plus">+</label>
                    <label class="title-text mb-0" v-observe-visibility="titleVC" :class="titleAnm ? 'text-focus-in' : 'display-none'">&nbsp;use cases</label>
                </v-row>

                <v-row class="d-flex justify-space-between" :class="isMobile ? 'flex-column' : 'flex-row'">
                    <v-col :cols="isMobile ? 12 : 4">
                        <UseCard
                                v-observe-visibility="cashCardVC"
                                :class="cashCardAnm ? 'puff-in-center' : 'display-none'"
                                title="Cash management"
                                desc="Park your stables in USD+, and watch your balance grow in your wallet overnight. No staking required"
                                btnLabel="Mint"
                                link="https://app.overnight.fi/"/>
                    </v-col>

                    <v-col :cols="isMobile ? 12 : 4">
                        <UseCard
                                v-observe-visibility="liquidCardVC"
                                :class="liquidCardAnm ? 'puff-in-center' : 'display-none'"
                                title="Liquidity Pools"
                                desc="Provide liquidity into USD+ pools, and get USD+ yield on top of LP fees and rewards"
                                btnLabel="Deposit"
                                link="https://app.overnight.fi/farm"/>
                    </v-col>

                    <v-col :cols="isMobile ? 12 : 4">
                        <UseCard
                                v-observe-visibility="leverageCardVC"
                                :class="leverageCardAnm ? 'puff-in-center' : 'display-none'"
                                title="Leveraged Yield"
                                desc="Get 6x-9x USD+ yield by pledging USD+ as collateral with minimum risk of liquidation"
                                btnLabel="Coming Soon"
                                link=""/>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>

import UseCard from "@/component/pages/use_cases/component/UseCard";
export default {
    name: "UseCasesPage",

    components: {
        UseCard
    },

    data: () => ({
        titleAnm: true,
        cashCardAnm: true,
        liquidCardAnm: true,
        leverageCardAnm: true,
    }),

    computed: {
        isMobile() {
            return window.innerWidth <= 960;
        },
    },

    methods: {
        titleVC() {
            this.titleAnm = !this.titleAnm;
        },

        cashCardVC() {
            this.cashCardAnm = !this.cashCardAnm;
        },

        liquidCardVC() {
            this.liquidCardAnm = !this.liquidCardAnm;
        },

        leverageCardVC() {
            this.leverageCardAnm = !this.leverageCardAnm;
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

    .title-text-plus {
        font-style: normal;
        font-weight: 300;
        font-size: 30px;
        line-height: 36px;
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
    background: #FFFFFF !important;
}

.container-row {
    width: 90% !important;
}

.container-row {
    margin-left: 5% !important;
    margin-top: 5% !important;
    margin-bottom: 15% !important;
}

.title-row {
    z-index: 100;
    position: relative;

    border-bottom: 1px solid #DEE1E5;
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
