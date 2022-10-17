<template>
    <div class="page-container overflow-hidden">
        <v-row class="container-row">
            <v-col class="logo-col" :cols="isMobile ? 12 : ''">
                <v-row class="mb-4" :justify="isMobile ? 'center' : 'start'" v-if="isVisible">
                    <img class="logo-img" height="40" :src="require('@/assets/img/logo_full.svg')">
                </v-row>
                <v-row :justify="isMobile ? 'center' : 'start'" v-observe-visibility="visibilityChanged">
                    <p class="footer-logo-sub-text mb-0">Your money should not sleep</p>
                </v-row>
                <v-row class="mb-6" :justify="isMobile ? 'center' : 'start'" v-if="isVisible">
                    <p class="footer-logo-sub-text">2022 © All Rights Reserved</p>
                </v-row>
            </v-col>

            <v-spacer></v-spacer>

            <v-col class="community-col" :cols="isMobile ? 6 : ''" v-if="isVisible">
                <v-row class="mb-5">
                    <label class="col-title">Community</label>
                </v-row>

                <v-row class="mb-3">
                    <label class="col-title-item" @click="openLink('https://twitter.com/overnight_fi')">Twitter</label>
                </v-row>
                <v-row class="mb-3">
                    <label class="col-title-item" @click="openLink('https://discord.com/invite/overnight-fi')">Discord</label>
                </v-row>
                <v-row class="mb-3">
                    <label class="col-title-item" @click="openLink('https://t.me/overnight_fi')">Telegram Discussion</label>
                </v-row>
                <v-row class="mb-3">
                    <label class="col-title-item" @click="openLink('https://www.youtube.com/channel/UCuPsmMZTOCaTNZWUXWZr12A')">YouTube</label>
                </v-row>
                <v-row class="mb-3">
                    <label class="col-title-item" @click="openLink('https://www.linkedin.com/company/overnightfi/')">LinkedIn</label>
                </v-row>
                <v-row class="mb-3">
                    <label class="col-title-item" @click="openLink('https://github.com/ovnstable')">GitHub</label>
                </v-row>
                <v-row>
                    <label class="col-title-item" @click="openLink('https://overnight.fi/blog/')">Blog</label>
                </v-row>
            </v-col>

            <v-col class="dev-col" :cols="isMobile ? 6 : ''" v-if="isVisible">
                <v-row class="mb-5">
                    <label class="col-title">Developers</label>
                </v-row>

                <v-row class="mb-3">
                    <label class="col-title-item" @click="openLink('https://docs.overnight.fi/')">Docs</label>
                </v-row>
                <v-row class="mb-3">
                    <label class="col-title-item" @click="openLink('https://docs.overnight.fi/advanced/audits')">Audits</label>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>

export default {
    name: "Footer",

    components: {
    },

    data: () => ({
        isVisible: false,
    }),

    computed: {
        isMobile() {
            return window.innerWidth <= 630;
        },
    },

    created() {
    },

    mounted() {
    },

    methods: {
        openLink(url) {
            window.open(url, '_blank').focus();
        },

        openHook(name) {
            let el = document.getElementById(name);
            el.scrollIntoView();
        },

        visibilityChanged (isVisible, entry) {
            if (isVisible) {
                this.isVisible = true;
            }
        }
    }
}
</script>

<style scoped>

/* mobile */
@media only screen and (max-width: 1400px) {
    .footer-logo-sub-text {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
    }

    .col-title {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.02em;
    }

    .col-title-item {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
    }
}

@media only screen and (min-width: 1400px) {
    .footer-logo-sub-text {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
    }

    .col-title {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.04em;
    }

    .col-title-item {
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 32px;
    }
}

.page-container {
    background: linear-gradient(122.1deg, #011845 0%, #15141D 104.83%) !important;
}

.container-row {
    width: 90% !important;
}

.logo-col, .community-col, .dev-col {
    z-index: 100 !important;
}

.container-row {
    margin-left: 5% !important;
    margin-top: 4% !important;
    margin-bottom: 2% !important;
}

.footer-logo-sub-text {
    font-family: 'Roboto', sans-serif;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #535F73;
}

.col-title {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #FFFFFF;
}

.col-title-item {
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    color: #FFFFFF;
}

.col-title-item:hover {
    text-decoration: underline;
}

</style>
