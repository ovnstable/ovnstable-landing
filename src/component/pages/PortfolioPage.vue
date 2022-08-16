<template>
    <div class="page-container overflow-hidden" :class="isMobile ? 'flex-column' : 'flex-row'">
        <v-row class="container-row d-flex overflow-hidden">
            <v-col class="text-col" :cols="isMobile ? 12 : 7">
                <v-row class="mb-8">
                    <div>
                        <label class="title-text mb-0">USD+ </label>
                        <label class="accent-text">Portfolio</label>
                        <label class="title-text mb-0"> strategy</label>
                    </div>
                </v-row>

                <div>
                    <v-row class="sub-title-row mb-16">
                        <p class="sub-title-text">
                            The portfolio deployed by Overnight is constructed to minimize risk and maximize liquidity. 100% of the assets consist of yield-bearing strategies is exposure by major stablecoins.
                        </p>
                    </v-row>

                    <v-row class="mb-4">
                        <label class="list-title">Asset selection criteria</label>
                    </v-row>

                    <v-row class="mb-15">
                        <ul>
                            <li class="list-label">We consider only high-quality stablecoins: USDC, USDT, DAI</li>
                            <li class="list-label">Other stables can be considered as well on an exceptional basis, <br/>subject to rigorous due diligence</li>
                            <li class="list-label">No exposure to algorithmic stablecoins</li>
                        </ul>
                    </v-row>

                    <v-row class="mb-4">
                        <label class="list-title">Stablecoin lending</label>
                    </v-row>

                    <v-row class="mb-15">
                        <ul>
                            <li class="list-label">Deposit stablecoins to lending protocols, like AAVE</li>
                        </ul>
                    </v-row>

                    <v-row class="mb-4">
                        <label class="list-title">Stable-to-stable pools</label>
                    </v-row>

                    <v-row class="mb-15">
                        <ul>
                            <li class="list-label">Deposit stablecoins into liquidity pools with no impermanent loss</li>
                        </ul>
                    </v-row>

                    <v-row class="mb-4">
                        <label class="list-title">Hedged strategies</label>
                    </v-row>

                    <v-row class="mb-15">
                        <ul>
                            <li class="list-label">Coming soon</li>
                        </ul>
                    </v-row>
                </div>

                <v-row class="mb-8">
                    <v-btn
                            text
                            class="see-docs-btn"
                            @click="openDocsLink">
                        Smart contract addresses
                    </v-btn>
                </v-row>
            </v-col>

            <v-col :cols="isMobile ? 12 : 5">
                <v-row class="my-3" :class="isMobile ? '' : 'mr-0'" :justify="isMobile ? 'center' : 'end'">
                    <ChainSelector mode="light" :callbackFunc="selectChain"/>
                </v-row>

                <v-row :justify="isMobile ? 'center' : 'end'" class="overflow-hidden">
                    <template v-if="chain === 'polygon'">
                        <ovn-portfoliocards network="polygon"></ovn-portfoliocards>
                    </template>

                    <template v-if="chain === 'avax'">
                        <ovn-portfoliocards network="avax"></ovn-portfoliocards>
                    </template>

                    <template v-if="chain === 'bsc'">
                        <ovn-portfoliocards network="bsc"></ovn-portfoliocards>
                    </template>

                    <template v-if="chain === 'op'">
                        <ovn-portfoliocards network="op"></ovn-portfoliocards>
                    </template>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>

import ChainSelector from "@/component/common/ChainSelector";
export default {
    name: "PortfolioPage",

    components: {ChainSelector},

    data: () => ({
        chain: 'polygon',
    }),

    computed: {
        isMobile() {
            return window.innerWidth <= 960;
        },
    },

    methods: {
        openDocsLink() {
            window.open(`https://docs.overnight.fi/advanced/contract-addresses`, '_blank').focus();
        },

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

    .sub-title-text {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
    }

    .list-title {
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

    .see-docs-btn {
        height: 40px !important;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 16px !important;
        line-height: 18px !important;
    }
}

@media only screen and (min-width: 961px) {
    .sub-title-row {
        width: 85%;
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

    .list-title {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.04em;
    }

    .list-label {
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 32px;
    }

    .see-docs-btn {
        height: 50px !important;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 18px !important;
        line-height: 20px !important;
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

.sub-title-row {
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

.sub-title-text {
    font-family: 'Roboto', sans-serif;
    color: #333333;
}

.list-title {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #333333;
}

.list-label {
    font-family: 'Roboto', sans-serif;
    color: #333333;
}

.see-docs-btn {
    border: 1px solid #28A0F0;
    border-radius: 0;
    font-family: 'Roboto', sans-serif !important;
    font-feature-settings: 'liga' off !important;
    color: #28A0F0 !important;
    text-transform: none !important;
}
</style>
