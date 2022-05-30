<template>
    <div class="main-header-container header-background overflow-hidden flex-row" :style="'--opacity: ' + headerOpacity">
        <v-row class="header-row fill-height">
            <v-col cols="12" class="d-flex overflow-hidden justify-space-between align-center">
                <div class="mr-auto sub-text-focus-in-1s" :class="isMobile ? 'mr-4' : ''">
                    <img class="logo-img" :src="require('@/assets/img/logo_full.svg')" @click="openLink('https://overnight.fi/')">
                </div>

                <div :class="isMobile ? '' : 'mr-8'">
                    <v-btn class="dapp-btn sub-text-focus-in-1s" @click="launchDapp">DAPP</v-btn>
                </div>

                <div>
                    <v-menu bottom left transition="scale-transition" class="menu-container">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                    outlined
                                    class="menu-btn"
                                    v-bind="attrs"
                                    v-on="on"
                            >
                                <img class="sub-text-focus-in-1s" :src="require('@/assets/img/icon/menu.svg')">
                            </v-btn>
                        </template>

                        <v-list>
                            <v-list-item class="menu-list-item">
                                <v-list-item-title class="list-item-label" @click="openHook('main_page')">About</v-list-item-title>
                            </v-list-item>
                            <v-list-item class="menu-list-item">
                                <v-list-item-title class="list-item-label" @click="openHook('performance_page')">Performance</v-list-item-title>
                            </v-list-item>
                            <v-list-item class="menu-list-item">
                                <v-list-item-title class="list-item-label" @click="openHook('portfolio_page')">Portfolio</v-list-item-title>
                            </v-list-item>
                            <v-list-item class="menu-list-item">
                                <v-list-item-title class="list-item-label" @click="openHook('team_page')">Team</v-list-item-title>
                            </v-list-item>

                            <v-divider></v-divider>
                            <v-list-item disabled>
                                <label class="menu-community-label">Our community</label>
                            </v-list-item>

                            <v-list-item class="menu-list-item">
                                <v-list-item-title class="list-item-label" @click="openLink('https://twitter.com/overnight_fi')">Twitter</v-list-item-title>
                            </v-list-item>
                            <v-list-item class="menu-list-item">
                                <v-list-item-title class="list-item-label" @click="openLink('https://discord.com/invite/7dEceNJqPq')">Discord</v-list-item-title>
                            </v-list-item>
                            <v-list-item class="menu-list-item">
                                <v-list-item-title class="list-item-label" @click="openLink('https://t.me/overnight_fi')">Telegram discussion </v-list-item-title>
                            </v-list-item>
                            <v-list-item class="menu-list-item">
                                <v-list-item-title class="list-item-label" @click="openLink('https://www.linkedin.com/company/overnightfi/')">LinkedIn</v-list-item-title>
                            </v-list-item>
                            <v-list-item class="menu-list-item">
                                <v-list-item-title class="list-item-label" @click="openLink('https://github.com/ovnstable')">GitHub</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
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
        scrollPosition: null,
        scrollFadePosition: null,
    }),

    computed: {
        isMobile() {
            return window.innerWidth <= 960;
        },

        headerOpacity() {
            let opacity = this.scrollPosition / this.scrollFadePosition;
            return opacity > 0.8 ? 0.8 : opacity;
        }
    },

    mounted() {
        window.addEventListener('scroll', this.updateScroll);
        this.scrollFadePosition = window.innerWidth;
    },

    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY;
        },

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

/* mobile */
@media only screen and (max-width: 1400px) {
    .logo-img {
        height: 28px !important ;
    }

    .dapp-btn {
        height: 40px !important;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 16px !important;
        line-height: 18px !important;
    }

    .list-item-label {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
    }

    .menu-community-label {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.02em;
    }
}

@media only screen and (min-width: 1400px) {
    .logo-img {
        height: 40px !important ;
    }

    .dapp-btn {
        width: 200px !important;
        height: 48px !important;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 18px !important;
        line-height: 20px !important;
    }

    .list-item-label {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 20px;
    }

    .menu-community-label {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 20px;
        letter-spacing: 0.04em;
    }
}

.header-background {
    background: linear-gradient(100.74deg, rgba(2, 24, 68, var(--opacity)) 0.89%, rgba(16, 21, 39, var(--opacity)) 98.31%) !important;
}

.main-header-container {
    z-index: 1000;
    top: 0;
    position:fixed;
    width: 100%;
}

.header-row {
    width: 90% !important;
}

.header-row {
    margin-left: 5% !important;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
}

.logo-img, .menu-list-item {
    cursor: pointer;
}

.dapp-btn {
    border-radius: 2px !important;
    background: linear-gradient(91.26deg, #28A0F0 0%, rgba(6, 120, 196, 0.9917) 100%);
    box-shadow: none !important;
    font-family: 'Roboto', sans-serif !important;
    font-feature-settings: 'liga' off !important;
    color: #FFFFFF !important;
}

.list-item-label {
    font-family: 'Roboto', sans-serif;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #333333;
}

.menu-btn {
    border: none !important;
}

.v-menu__content {
    background: #F5F5F5 !important;
    box-shadow: 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12), 0px 5px 5px -3px rgba(0, 0, 0, 0.2) !important;
    border-radius: 2px !important;
    width: 240px !important;
}

.menu-community-label {
    /*border-top: 1px solid #DEE1E5;*/
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #707A8B;
}
</style>
