<template>
    <v-card class="card-container ma-3">
        <v-col>
            <v-row class="mb-4">
                <v-col>
                    <img class="avatar-img ml-3 mt-7" :src="require('@/assets/img/team/' + (imgLink ? imgLink : 'anonym.svg'))">
                </v-col>

                <v-col class="mt-10">
                    <v-row justify="end">
                        <HoverImg
                                v-if="linkedInLink"
                                class="social-link mr-10 mb-3"
                                :link="linkedInLink"
                                :img="require('@/assets/img/social/linkedinicon.svg')"
                                :hover-img="require('@/assets/img/social/linkediniconColored.svg')"
                        />
                    </v-row>
                    <v-row justify="end">
                        <HoverImg
                                v-if="twitterLink"
                                class="social-link mr-10 mb-3"
                                :link="twitterLink"
                                :img="require('@/assets/img/social/twittericon.svg')"
                                :hover-img="require('@/assets/img/social/twittericonColored.svg')"
                        />
                    </v-row>
                    <v-row justify="end">
                        <HoverImg
                                v-if="telegramLink"
                                class="social-link mr-10"
                                :link="telegramLink"
                                :img="require('@/assets/img/social/telegramicon.svg')"
                                :hover-img="require('@/assets/img/social/telegramiconColored.svg')"
                        />
                    </v-row>
                    <v-row justify="end">
                        <HoverImg
                                v-if="discordLink"
                                class="social-link mr-10"
                                :link="discordLink"
                                :img="require('@/assets/img/social/discord_gray.svg')"
                                :hover-img="require('@/assets/img/social/discord_colorful.svg')"
                        />
                    </v-row>
                </v-col>
            </v-row>
            <v-row>
                <label class="name-label ml-6 mb-2">{{ name }}</label>
            </v-row>
            <v-row>
                <label class="desc-label ml-6 mb-2">{{ desc }}</label>
            </v-row>
        </v-col>
    </v-card>
</template>

<script>
import {mapGetters} from "vuex";
import HoverImg from "@/component/common/HoverImg";

export default {
    name: "TeamMemberCard",
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

        linkedInLink: {
            type: String,
            default: null,
        },

        twitterLink: {
            type: String,
            default: null,
        },

        telegramLink: {
            type: String,
            default: null,
        },

        discordLink: {
            type: String,
            default: null,
        }
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
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
    }

    .card-container {
        width: 260px !important;
        height: 260px !important;
    }

    .avatar-img {
        height: 100px !important;
    }
}

@media only screen and (min-width: 1400px) {
    .name-label {
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 40px;
    }

    .desc-label {
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 32px;
    }

    .card-container {
        width: 360px !important;
        height: 360px !important;
    }
}

@media
only screen and (-webkit-min-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 1300px),
only screen and (        min-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (                min-resolution: 192dpi) and (min-width: 1300px),
only screen and (                min-resolution: 2dppx)  and (min-width: 1300px) {
    .name-label {
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 18px;
    }

    .desc-label {
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        line-height: 16px;
    }

    .card-container {
        width: 250px !important;
        height: 250px !important;
    }

    .avatar-img {
        height: 110px !important;
    }

    .social-link {
        height: 20px;
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
    color: #333333;
}

.desc-label {
    font-family: 'Roboto', sans-serif;
    color: #9DA4B0;
}
</style>
