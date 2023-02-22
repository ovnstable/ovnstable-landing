<template>
    <div class="main-header-container header-background overflow-hidden flex-row" :style="'--opacity: ' + headerOpacity">
        <v-row class="header-row fill-height">
            <v-col cols="12" class="d-flex overflow-hidden justify-space-between align-center">
                <div class="mr-auto sub-text-focus-in-1s" :class="isMobile ? 'mr-4' : ''" @click="openHook('main_page')">
                    <img class="logo-img" :src="require('@/assets/img/logo.svg')">
                    <img class="logo-img-text ml-2" :style="'--opacity: ' + headerOpacity" :src="require('@/assets/img/logo-text.svg')">
                </div>

                <div class="mr-2 sub-text-focus-in-1s" v-if="!isMobile">
                    <img class="social-btn"
                         @click="openLink('https://twitter.com/overnight_fi')"
                         :src="require('@/assets/img/social/twitter_btn.svg')"
                         :style="'--opacity: ' + headerOpacity">
                </div>

                <div class="mr-2 sub-text-focus-in-1s" v-if="!isMobile">
                    <img class="social-btn"
                         @click="openLink('https://discord.com/invite/overnight-fi')"
                         :src="require('@/assets/img/social/discord_btn.svg')"
                         :style="'--opacity: ' + headerOpacity">
                </div>


                <div :class="isMobile ? '' : 'mr-8'">
                    <v-btn class="dapp-btn sub-text-focus-in-1s" @click="launchDapp">DAPP</v-btn>
                </div>

                <div>
                    <v-menu bottom left transition="scale-transition" class="menu-container">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                    outlined
                                    :style="'--opacity: ' + headerOpacity"
                                    class="menu-btn"
                                    v-bind="attrs"
                                    v-on="on"
                            >
                                <img class="sub-text-focus-in-1s" :src="require('@/assets/img/icon/menu.svg')">
                            </v-btn>
                        </template>

                        <v-list>
                            <v-list-item class="menu-list-item" @click="openHook('products_page')">
                                <v-list-item-title class="list-item-label">Products</v-list-item-title>
                            </v-list-item>
                            <v-list-item class="menu-list-item" @click="openHook('performance_page')">
                                <v-list-item-title class="list-item-label">Performance</v-list-item-title>
                            </v-list-item>
                            <v-list-item class="menu-list-item" @click="openHook('roadmap_page')">
                                <v-list-item-title class="list-item-label">Roadmap</v-list-item-title>
                            </v-list-item>
                            <v-list-item class="menu-list-item" @click="openHook('security_page')">
                                <v-list-item-title class="list-item-label">Security</v-list-item-title>
                            </v-list-item>
                            <v-list-item class="menu-list-item" @click="openHook('team_page')">
                                <v-list-item-title class="list-item-label">Team</v-list-item-title>
                            </v-list-item>
                            <v-list-item class="menu-list-item" @click="openLink('https://overnight.fi/blog/')">
                                <v-list-item-title class="list-item-label">Blog</v-list-item-title>
                            </v-list-item>

                            <v-divider></v-divider>
                            <v-list-item disabled>
                                <label class="menu-community-label">Our community</label>
                            </v-list-item>

                            <v-list-item class="menu-list-item" @click="openLink('https://twitter.com/overnight_fi')" v-if="isMobile">
                                <v-list-item-title class="list-item-label">Twitter</v-list-item-title>
                            </v-list-item>
                            <v-list-item class="menu-list-item" @click="openLink('https://discord.com/invite/overnight-fi')" v-if="isMobile">
                                <v-list-item-title class="list-item-label">Discord</v-list-item-title>
                            </v-list-item>
                            <v-list-item class="menu-list-item" @click="openLink('https://www.linkedin.com/company/overnightfi/')">
                                <v-list-item-title class="list-item-label">LinkedIn</v-list-item-title>
                            </v-list-item>
                            <v-list-item class="menu-list-item" @click="openLink('https://github.com/ovnstable')">
                                <v-list-item-title class="list-item-label">GitHub</v-list-item-title>
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
            return opacity > 1 ? 1 : opacity;
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
            window.open(`https://app.overnight.fi/featured?tabName=featured`, '_blank').focus();
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

    .logo-img-text {
        height: 22px !important ;
    }

    .dapp-btn {
        height: 40px !important;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 16px !important;
        line-height: 18px !important;
    }

    .social-btn {
        height: 40px !important;
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

    .logo-img-text {
        height: 34px !important ;
    }

    .dapp-btn {
        width: 200px !important;
        height: 48px !important;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 18px !important;
        line-height: 20px !important;
    }

    .social-btn {
        height: 48px !important;
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
    background: rgba(255, 255, 255, var(--opacity));
    filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.06));
}

.logo-img-text {
    filter: brightness(max(calc(1 - var(--opacity)), 0.2));
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

.logo-img, .logo-img-text, .menu-list-item {
    cursor: pointer;
}

.menu-list-item:hover {
    background-color: rgba(6, 120, 196, 0.1);
}

.logo-img {
    vertical-align: sub !important;
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
    filter: brightness(max(calc(1 - var(--opacity)), 0.2));
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

.social-btn {
    filter: brightness(max(calc(1 - var(--opacity)), 0.2));
    vertical-align: sub !important;
}

.social-btn:hover {
    cursor: pointer;
}
</style>
