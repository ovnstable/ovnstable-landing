<template>
    <div class="page-container overflow-hidden" :class="isMobile ? 'flex-column' : 'flex-row'">
        <v-row class="container-row d-flex overflow-hidden">
            <v-col class="text-col" :cols="isMobile ? 12 : 7">
                <v-row class="title-row mb-10" justify="center" align="center">
                    <p class="title-text mb-0">join <label class="accent-text">plus</label> community</p>
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

                <v-row class="mb-4" justify="center">
                    <v-text-field
                            class="text-input-field"
                            v-model="text"
                            background-color="white"
                            flat
                            placeholder="Write your question here"
                            outlined>
                    </v-text-field>
                </v-row>

                <v-row class="email-row mb-12" justify="center">
                    <v-btn class="send-btn" @click="sendEmailAction">Send</v-btn>
                </v-row>
            </v-col>

            <v-col class="social-col" :cols="isMobile ? 12 : 5">
                <v-row justify="center">
                    <div>
                        <v-row class="card-container ma-5" align="center" justify="center" @click="openLink('https://twitter.com/overnight_fi')">
                            <img class="social-img" :src="require('@/assets/img/social/twitter.svg')">
                        </v-row>
                    </div>
                    <div>
                        <v-row class="card-container ma-5" align="center" justify="center" @click="openLink('https://t.me/overnight_fi')">
                            <img class="social-img" :src="require('@/assets/img/social/tg.svg')">
                        </v-row>
                    </div>
                </v-row>

                <v-row justify="center">
                    <div>
                        <v-row class="card-container ma-5" align="center" justify="center" @click="openLink('https://discord.com/invite/7dEceNJqPq')">
                            <img class="social-img" :src="require('@/assets/img/social/discord.svg')">
                        </v-row>
                    </div>
                    <div>
                        <v-row class="card-container ma-5" align="center" justify="center" @click="openLink('https://github.com/ovnstable')">
                            <img class="social-img" :src="require('@/assets/img/social/github.svg')">
                        </v-row>
                    </div>
                </v-row>
            </v-col>
        </v-row>
    </div>
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
        isMobile() {
            return window.innerWidth <= 960;
        },
    },

    methods: {
        openLink(url) {
            window.open(url, '_blank').focus();
        },

        sendEmailAction() {
            /* TODO: add send email action */

            this.email = null;
            this.text = null;
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

    .text-input-field {
        max-width: 90% !important;
    }

    .send-btn {
        height: 40px !important;
        width: 200px !important;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 16px !important;
        line-height: 18px !important;
    }
}

@media only screen and (max-width: 960px) {
    .card-container {
        width: 20vw !important;
        height: 20vw !important;
        background: #FFFFFF !important;
    }

    .social-img {
        width: 10vw !important;
    }
}

@media only screen and (min-width: 960px) {
    .card-container {
        width: 12vw !important;
        height: 12vw !important;
        background: #FFFFFF !important;
    }

    .social-img {
        width: 6vw !important;
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

    .text-input-field {
        max-width: 60% !important;
    }

    .send-btn {
        height: 50px !important;
        width: 250px !important;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 18px !important;
        line-height: 20px !important;
    }
}

.page-container {
    background-color: rgba(122, 122, 122, 0.22) !important;
}

.container-row {
    width: 90% !important;
}

.container-row {
    margin-left: 5% !important;
    margin-top: 10% !important;
    margin-bottom: 5% !important;
}

.text-col, .social-col {
    z-index: 100 !important;
}

.title-text {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    color: #333333;
    text-align: center !important;
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

.text-input-field {
    border-radius: 0 !important;
}

.send-btn {
    border-radius: 0 !important;
    background: linear-gradient(91.26deg, #28A0F0 0%, rgba(6, 120, 196, 0.9917) 100%);
    box-shadow: none !important;
    font-family: 'Roboto', sans-serif !important;
    font-feature-settings: 'liga' off !important;
    color: #FFFFFF !important;
}
</style>
