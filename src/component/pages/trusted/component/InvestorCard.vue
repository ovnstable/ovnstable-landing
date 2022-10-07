<template>
    <v-card class="card-container">
        <v-col>
            <v-row class="mt-7 mb-4">
                <img height="28" class="avatar-img ml-10" :src="require('@/assets/img/investors/company/' + companyImg)">
            </v-row>

            <v-row class="mb-4">
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

            <v-row class="icon-row ml-7 mb-15">
                <HoverImg
                        v-if="tweetLink"
                        class="social-link"
                        :link="tweetLink"
                        :img="require('@/assets/img/social/twittericon.svg')"
                        :hover-img="require('@/assets/img/social/twittericonColored.svg')"
                />
            </v-row>
        </v-col>
    </v-card>
</template>

<script>
import {mapGetters} from "vuex";
import HoverImg from "@/component/common/HoverImg";

export default {
    name: "InvestorCard",
    components: {HoverImg},
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
    .name-label {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
    }

    .desc-label {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
    }

    .tweet-label {
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 20px;
    }

    .card-container {
        width: 350px !important;
        height: 560px !important;
    }
}

@media only screen and (min-width: 1400px) {
    .name-label {
        font-style: normal;
        font-weight: 500;
        font-size: 34px;
        line-height: 38px;
    }

    .desc-label {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
    }

    .tweet-label {
        font-style: normal !important;
        font-weight: 300 !important;
        font-size: 16px !important;
        line-height: 24px !important;
    }

    .card-container {
        width: 390px !important;
        height: 610px !important;
    }
}

.card-container {
    background: #F5F5F5 !important;
    border-radius: 10px !important;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.12) !important;
}

.avatar-img {
    border-radius: 0 !important;
}

.social-link {
    cursor: pointer;
}

.name-label {
    font-family: 'Cormorant', sans-serif;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #000000;
}

.desc-label {
    font-family: 'Roboto', sans-serif;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #9DA4B0;
}

.tweet-label {
    font-family: 'Roboto', sans-serif !important;
    font-feature-settings: 'pnum' on, 'lnum' on !important;
    color: #333333;
}

.icon-row {
    position: absolute !important;
    bottom: 0;
}

</style>
