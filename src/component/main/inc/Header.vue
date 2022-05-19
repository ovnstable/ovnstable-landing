<template>
    <div class="main-header-container">
        <v-row class="header-row">
            <v-col cols="12" class="header-col">
                <v-row class="content-row" align="center">
                    <v-col cols="2">
                        <img class="logo-img" height="40" :src="require('@/assets/img/logo_full.svg')" @click="openLink('https://overnight.fi/')">
                    </v-col>

                    <v-col cols="5" class="ml-0">
                        <v-row justify="end">
                            <label class="header-label mr-8 ml-10" @click="openHook('main_page')">about</label>
                            <label class="header-label mr-8" @click="openHook('performance_page')">performance</label>
                            <label class="header-label mr-8" @click="openHook('portfolio_page')">portfolio</label>
                            <label class="header-label" @click="openHook('team_page')">team</label>
                        </v-row>
                    </v-col>

                    <v-col cols="4">
                        <v-row justify="center">
                            <img class="logo-img mr-4" height="48" :src="require('@/assets/img/social/twitter_btn.svg')" @click="openLink('https://twitter.com/overnight_fi')">
                            <img class="logo-img mr-4" height="48" :src="require('@/assets/img/social/discord_btn.svg')" @click="openLink('https://discord.com/invite/7dEceNJqPq')">
                            <img class="logo-img mr-10" height="48" :src="require('@/assets/img/social/tg_btn.svg')" @click="openLink('https://t.me/overnight_fi')">

                            <v-btn class="dapp-btn" @click="launchDapp">DAPP</v-btn>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>

export default {
    name: "Header",

    components: {
    },

    data: () => ({

    }),

    computed: {
        isMobile() {
            return window.innerWidth < 800;
        },
    },

    methods: {
        launchDapp() {
            window.open(`https://app.overnight.fi/`, '_blank').focus();
        },

        openLink(url) {
            window.open(url, '_blank').focus();
        },

        openHook(name) {
            let el = document.getElementById(name);
            el.scrollIntoView();
        },
    }
}
</script>

<style scoped>

.main-header-container {
    z-index: 1000;
    top: 0;
    position:fixed;
    overflow-y:hidden;
    overflow-x:hidden;
    width: 100vw;
}

.header-row {
    background: linear-gradient(100.74deg, rgba(2, 24, 68, 0.8) 0.89%, rgba(16, 21, 39, 0.8) 98.31%) !important;
}

.header-col {
    margin-left: 7% !important;
    margin-right: 7% !important;
}

.content-row {
    width: 100vw;
    margin-top: 0;
    margin-bottom: -6px;
}

.logo-img {
    cursor: pointer;
}

.header-label {
    cursor: pointer;
    
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #FFFFFF;
}

.header-label:hover {
    text-decoration: underline;
}

.dapp-btn {
    border-radius: 0 !important;
    background: linear-gradient(91.26deg, #28A0F0 0%, rgba(6, 120, 196, 0.9917) 100%);
    height: 48px !important;
    width: 160px !important;
    box-shadow: none !important;

    font-family: 'Roboto', sans-serif !important;
    font-style: normal !important;
    font-weight: 400 !important;
    font-size: 18px !important;
    line-height: 20px !important;
    font-feature-settings: 'liga' off !important;
    color: #FFFFFF !important;
}

</style>
