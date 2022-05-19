<template>
    <v-row class="main-footer-container">
        <v-col class="text-col">
            <v-row class="content-row">
                <v-col class="logo-col">
                    <v-row class="mb-8">
                        <img class="logo-img" height="40" :src="require('@/assets/img/logo_full.svg')">
                    </v-row>
                    <v-row>
                        <p class="footer-logo-sub-text mb-0">Your money should not never sleep</p>
                        <br/>
                        <p class="footer-logo-sub-text">2022 © All Rights Reserved</p>
                    </v-row>
                </v-col>

                <v-col class="community-col">
                    <v-row class="mb-5">
                        <label class="col-title">Community</label>
                    </v-row>

                    <v-row class="mb-3">
                        <label class="col-title-item" @click="openLink('https://twitter.com/overnight_fi')">Twitter</label>
                    </v-row>
                    <v-row class="mb-3">
                        <label class="col-title-item" @click="openLink('https://discord.com/invite/7dEceNJqPq')">Discord</label>
                    </v-row>
                    <v-row class="mb-3">
                        <label class="col-title-item" @click="openLink('https://t.me/overnight_fi')">Telegram Discussion</label>
                    </v-row>
                    <v-row class="mb-3">
                        <label class="col-title-item" @click="openLink('https://t.me/overnight_fi_announcements')">Telegram Announcements</label>
                    </v-row>
                    <v-row class="mb-3">
                        <label class="col-title-item" @click="openLink('https://www.linkedin.com/company/overnightfi/')">LinkedIn</label>
                    </v-row>
                    <v-row class="mb-3">
                        <label class="col-title-item" @click="openLink('https://github.com/ovnstable')">GitHub</label>
                    </v-row>
                    <v-row>
                        <label class="col-title-item" @click="openLink('https://blog.overnight.fi/')">Medium</label>
                    </v-row>
                </v-col>

                <v-col class="dev-col">
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

                <v-spacer></v-spacer>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>

export default {
    name: "Footer",

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
}

@media only screen and (min-width: 1400px) {
}

.main-footer-container {
    background: linear-gradient(122.1deg, #011845 0%, #15141D 104.83%);
}

.text-col {
    margin-left: 7%;
    margin-right: 7%;
}

.logo-col {
    margin-right: 158px !important;
}

.community-col {
    margin-right: 88px !important;
}

.content-row {
    margin-top: 100px !important;
    margin-bottom: 80px !important;
}

.footer-logo-sub-text {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #535F73;
}

.col-title {
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

.col-title-item {
    cursor: pointer;
    
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 32px;
    color: #FFFFFF;
}

.col-title-item:hover {
    text-decoration: underline;
}

</style>
