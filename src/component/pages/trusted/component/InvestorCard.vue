<template>
    <v-card class="card-container">
        <v-col>
            <v-row class="mt-7 mb-4">
                <img height="28" class="avatar-img ml-10" :src="require('@/assets/img/investors/company/' + companyImg)">
            </v-row>

            <v-row class="mb-4" :class="tweet ? '' : 'no-tweet'">
                <v-col cols="4">
                    <img height="68" class="avatar-img ml-7 mr-4" :src="require('@/assets/img/investors/avatar/' + (imgLink ? imgLink : 'anonym.svg'))">
                </v-col>

                <v-col class="mt-3">
                    <v-row>
                        <label class="name-label mb-2">{{ name }}</label>
                    </v-row>
                    <v-row>
                        <label class="desc-label">{{ desc }}</label>
                    </v-row>
                </v-col>
            </v-row>

            <v-row class="ml-7 mr-7">
                <label class="tweet-label">{{ tweet }}</label>
            </v-row>

            <v-row class="icon-row ml-7 mb-10">
                <img
                        v-if="tweetLink"
                        class="social-link"
                        @click="openLink(tweetLink)"
                        :src="require('@/assets/img/social/twittericon.svg')">
            </v-row>
        </v-col>
    </v-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "InvestorCard",
    props: {
        name: {
            type: String,
            default: '',
        },

        desc: {
            type: String,
            default: '',
        },

        imgLink: {
            type: String,
            default: null,
        },

        companyImg: {
            type: String,
            default: null,
        },

        tweet: {
            type: String,
            default: '',
        },

        tweetLink: {
            type: String,
            default: null,
        },
    },

    computed: {
        isMobile() {
            return window.innerWidth <= 960;
        },
    },

    data: () => ({
    }),
    
    methods: {
        openLink(url) {
            if (url) {
                window.open(url, '_blank').focus();
            }
        },
    },
}
</script>

<style scoped>

/* mobile */
@media only screen and (max-width: 1400px) {
}

@media only screen and (min-width: 1400px) {
}

.card-container {
    background: #F5F5F5 !important;
    border-radius: 0 !important;
    box-shadow: none !important;

    width: 390px !important;
    height: 613px !important;
}

.avatar-img {
    border-radius: 0 !important;
}

.social-link {
    cursor: pointer;
}

.name-label {
    font-family: 'Cormorant', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    line-height: 38px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #000000;
}

.desc-label {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #9DA4B0;
}

.tweet-label {
    font-family: 'Roboto', sans-serif !important;
    font-style: normal !important;
    font-weight: 300 !important;
    font-size: 16px !important;
    line-height: 24px !important;
    font-feature-settings: 'pnum' on, 'lnum' on !important;
    color: #333333;
}

.icon-row {
    position: absolute !important;
    bottom: 0;
}

.no-tweet {
    margin-top: 50%;
}

</style>
