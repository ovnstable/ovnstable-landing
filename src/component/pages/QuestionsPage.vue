<template>
    <div class="page-container overflow-hidden" :class="isMobile ? 'flex-column' : 'flex-row'">
        <v-row class="container-row overflow-hidden d-flex flex-column">
            <v-row :class="isMobile ? 'mb-5 mt-10' : 'mb-10'" class="title-row" justify="center" align="center" v-observe-visibility="visibilityChanged">
                <p class="title-text mb-0">join <label class="accent-text">plus</label> community</p>
            </v-row>

            <v-row :class="isMobile ? 'd-flex flex-wrap' : 'd-flex flex-row justify-center'">
                <div :class="isMobile ? '' : 'mr-15'">
                    <v-row class="card-container ma-2" align="center" justify="center" @click="openLink('https://twitter.com/overnight_fi')">
                        <img class="social-img" :src="require('@/assets/img/social/twitter.svg')">
                    </v-row>
                </div>
                <div :class="isMobile ? '' : 'mr-15'">
                    <v-row class="card-container ma-2" align="center" justify="center" @click="openLink('https://t.me/overnight_fi')">
                        <img class="social-img" :src="require('@/assets/img/social/tg.svg')">
                    </v-row>
                </div>

                <div :class="isMobile ? '' : 'mr-15'">
                    <v-row class="card-container ma-2" align="center" justify="center" @click="openLink('https://discord.com/invite/overnight-fi')">
                        <img class="social-img" :src="require('@/assets/img/social/discord.svg')">
                    </v-row>
                </div>
                <div :class="isMobile ? '' : 'mr-15'">
                    <v-row class="card-container ma-2" align="center" justify="center" @click="openLink('https://github.com/ovnstable')">
                        <img class="social-img" :src="require('@/assets/img/social/github.svg')">
                    </v-row>
                </div>
            </v-row>
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

        // eslint-disable-next-line
        regEmail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,

        isVisible: false,
    }),

    computed: {
        isMobile() {
            return window.innerWidth <= 960;
        },

        isDisabledBtn() {
            return !this.validateEmail(this.email) || !this.text;
        },
    },

    methods: {

        validateEmail(val) {
            return (val === "") ? false : (this.regEmail.test(val));
        },

        openLink(url) {
            window.open(url, '_blank').focus();
        },

        sendEmailAction() {
            /* TODO: add send email action */

            this.email = null;
            this.text = null;
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
    .page-container {
        width: 100%;
        height: 100% !important;
    }

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
        max-width: 100% !important;
    }

    .send-btn, .disabled-btn {
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
        width: 40vw !important;
        height: 40vw !important;
        background: #FFFFFF !important;
    }

    .social-img {
        width: 10vw !important;
    }

    .send-btn, .disabled-btn {
        height: 50px !important;
        width: 100% !important;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 18px !important;
        line-height: 20px !important;
    }

    .container-row {
        margin-bottom: 12% !important;
    }
}

@media only screen and (min-width: 960px) {
    .card-container {
        width: 12vw !important;
        height: 12vw !important;
        background: #FFFFFF !important;
    }

    .social-img {
        width: 4vw !important;
    }
}

@media only screen and (min-width: 1300px) {
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

    .send-btn, .disabled-btn {
        height: 50px !important;
        width: 250px !important;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 18px !important;
        line-height: 20px !important;
    }

    .container-row {
        margin-left: 5% !important;
        margin-top: 12% !important;
        margin-bottom: 12% !important;
    }
    /* Large screen, non-retina */

}

@media
only screen and (-webkit-min-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 1300px),
only screen and (        min-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (                min-resolution: 192dpi) and (min-width: 1300px),
only screen and (                min-resolution: 2dppx)  and (min-width: 1300px) {
    .title-text {
        font-style: normal;
        font-weight: 300;
        font-size: 40px;
        line-height: 55px;
    }

    .accent-text {
        font-style: normal;
        font-weight: 500;
        font-size: 45px;
        line-height: 55px;
    }

    .text-input-field {
        max-width: 60% !important;
    }

    .send-btn, .disabled-btn {
        height: 40px !important;
        width: 250px !important;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 18px !important;
        line-height: 20px !important;
    }
    /* Large screen, retina, stuff to override above media query */

}

@media only screen and (min-width: 1800px) {
    .bg-video {
        width: 100%;
    }
}

.page-container {
    background-color: #FFFFFF !important;
    height: 100%;
}

.container-row {
    width: 90% !important;
}

.container-row {
    margin-left: 5% !important;
    margin-bottom: 12% !important;
}

.bg-video {
    mix-blend-mode: darken;
    z-index: 0 !important;
    position: absolute;
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

.disabled-btn {
    border-radius: 0 !important;
    box-shadow: none !important;
    font-family: 'Roboto', sans-serif !important;
    font-feature-settings: 'liga' off !important;
    color: #FFFFFF !important;
}

.card-container {
    cursor: pointer !important;
    background: linear-gradient(300deg, rgba(28, 149, 231, 0.1), rgba(28, 149, 231, 0)) !important;
    border-radius: 12px;
}
</style>
