<template>
    <v-row class="main-page-container">
        <video playsinline autoplay muted loop class="bg-video">
            <source :src='require("@/assets/background/video/questions_video_bg.mp4")' type='video/mp4'>
        </video>

        <v-col class="text-col" cols="7">
            <v-row class="title-row mb-15" justify="center">
                <div>
                    <p class="title-text mb-0">join <label class="accent-text">plus</label> community</p>
                </div>
            </v-row>
            <v-row class="mb-4" justify="center">
                <v-text-field
                        class="text-input-field"
                        v-model="email"
                        background-color="white"
                        flat
                        placeholder="Write your Email here"
                        outlined>
                </v-text-field>
            </v-row>
            <v-row class="mb-9" justify="center">
                <v-text-field
                        class="text-input-field"
                        v-model="text"
                        background-color="white"
                        flat
                        placeholder="Write your question here"
                        outlined>
                </v-text-field>
            </v-row>
            <v-row class="email-row" justify="center">
                <v-btn class="send-btn" @click="sendEmailAction">Send</v-btn>
            </v-row>
        </v-col>

        <v-col class="social-col">
            <v-row class="social-row">
                <v-col class="social-card mr-5 mb-5">
                    <v-row class="social-img-row" align="center" justify="center">
                        <img
                                class="social-img"
                                height="60"
                                @click="openLink('https://twitter.com/overnight_fi')"
                                :src="require('@/assets/img/social/twitter.svg')">
                    </v-row>
                </v-col>
                <v-col class="social-card mb-5">
                    <v-row class="social-img-row" align="center" justify="center">
                        <img
                                class="social-img"
                                height="60"
                                @click="openLink('https://t.me/overnight_fi')"
                                :src="require('@/assets/img/social/tg.svg')">
                    </v-row>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="social-card mr-5">

                    <v-row class="social-img-row" align="center" justify="center">
                        <img
                                class="social-img"
                                height="60"
                                @click="openLink('https://discord.com/invite/7dEceNJqPq')"
                                :src="require('@/assets/img/social/discord.svg')">
                    </v-row>
                </v-col>
                <v-col class="social-card">

                    <v-row class="social-img-row" align="center" justify="center">
                        <img
                                class="social-img"
                                height="60"
                                @click="openLink('https://github.com/ovnstable')"
                                :src="require('@/assets/img/social/github.svg')">
                    </v-row>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>

export default {
    name: "QuestionsPage",

    components: {
    },

    data: () => ({
        email: null,
        text: null,
    }),

    computed: {
    },

    methods: {
        openLink(url) {
            window.open(url, '_blank').focus();
        },

        sendEmailAction() {
            /* TODO: add send email action */
        },
    }
}
</script>

<style scoped>

.main-page-container {
    background-color: rgba(122, 122, 122, 0.22);
    height: 100vh !important;
}

.social-img-row {
    height: 240px;
    cursor: pointer;
}

.text-col {
    margin-left: 7% !important;
}

.social-col {
    margin-right: 7% !important;
}

.text-col, .social-col {
    z-index: 100 !important;
}

.title-row {
    margin-top: 282px !important;
}

.email-row {
    margin-bottom: 310px !important;
}

.social-row {
    margin-top: 243px !important;
}

.social-card {
    width: 240px !important;
    height: 240px !important;
    background: white;
}

.bg-video {
    mix-blend-mode: lighten;
    z-index: 0;
    position: absolute;
    clip: rect(0px,2000px,100vh,0px);
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

.text-input-field {
    max-width: 526px !important;
    border-radius: 0 !important;
}

.send-btn {
    border-radius: 0 !important;
    background: linear-gradient(91.26deg, #28A0F0 0%, rgba(6, 120, 196, 0.9917) 100%);
    height: 50px !important;
    width: 250px !important;
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
