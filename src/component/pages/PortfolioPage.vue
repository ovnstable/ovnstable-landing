<template>
    <v-row class="main-page-container">
        <v-col class="text-col">
            <v-row class="title-row mb-15">
                <div>
                    <p class="title-text mb-0">USD+ <label class="accent-text">Portfolio</label> strategy</p>
                </div>
            </v-row>

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
                    <li class="list-label">We consider only high quality stablecoins: USDC, USDT, DAI</li>
                    <li class="list-label">Other stables can be considered as well on exceptional basis, <br/>subject to rigorous due-diligence</li>
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

            <v-row class="list-row">
                <ul>
                    <li class="list-label">coming soon</li>
                </ul>
            </v-row>

            <v-row class="btn-row">
                <v-btn
                        text
                        class="see-docs-btn"
                        @click="openDocsLink">
                    See our docs
                </v-btn>
            </v-row>
        </v-col>

        <v-col class="widget-col">
            <!-- TODO: add portfolio cards widget -->
        </v-col>
    </v-row>
</template>

<script>

export default {
    name: "PortfolioPage",

    components: {},

    data: () => ({}),

    computed: {},

    methods: {
        openDocsLink() {
            window.open(`https://docs.overnight.fi/`, '_blank').focus();
        }
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

.title-row {
    margin-top: 270px !important;
}

.list-row {
    margin-bottom: 113px !important;
}

.btn-row {
    margin-bottom: 383px !important;
}

.sub-title-row {
    width: 95%;
    height: 96px !important;
    border-bottom: 1px solid #DEE1E5;
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

.list-title {
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

.list-label {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 32px;
    color: #333333;
}

.see-docs-btn {
    width: 250px !important;
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
