<template>
    <v-card class="card-container">
        <v-col>
            <v-row class="mb-4">
                <v-col cols="9">
                    <img class="avatar-img ml-7 mt-7" :src="require('@/assets/img/team/' + (imgLink ? imgLink : 'anonym.svg'))">
                </v-col>

                <v-col class="mt-10">
                    <v-row justify="end">
                        <img
                                v-if="linkedInLink"
                                class="social-link mr-10 mb-3"
                                @click="openLink(linkedInLink)"
                                :src="require('@/assets/img/social/linkedinicon.svg')">
                    </v-row>
                    <v-row justify="end">
                        <img
                                v-if="twitterLink"
                                class="social-link mr-10 mb-3"
                                @click="openLink(twitterLink)"
                                :src="require('@/assets/img/social/twittericon.svg')">
                    </v-row>
                    <v-row justify="end">
                        <img
                                v-if="telegramLink"
                                class="social-link mr-10"
                                @click="openLink(telegramLink)"
                                :src="require('@/assets/img/social/telegramicon.svg')">
                    </v-row>
                </v-col>
            </v-row>
            <v-row>
                <label class="name-label ml-10 mb-2">{{ name }}</label>
            </v-row>
            <v-row>
                <label class="desc-label ml-10 mb-2">{{ desc }}</label>
            </v-row>
        </v-col>
    </v-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "TeamMemberCard",
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
    },

    computed: {
        ...mapGetters([]),
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

.card-container {
    background: #F5F5F5 !important;
    border-radius: 0 !important;
    box-shadow: none !important;

    width: 390px !important;
    height: 380px !important;
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
    font-size: 36px;
    line-height: 40px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #333333;
}

.desc-label {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 32px;
    color: #9DA4B0;
}

</style>
