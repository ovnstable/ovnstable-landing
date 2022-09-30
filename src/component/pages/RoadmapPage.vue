<template>
    <div class="page-container overflow-hidden">
        <v-row class="container-row">
            <v-col cols="12">
                <v-row class="mb-15" justify="center" v-observe-visibility="visibilityChanged">
                    <label class="title-text mb-0">our <label class="accent-text">roadmap</label></label>
                </v-row>

                <v-row justify="center" class="mb-15" v-if="isVisible">
                    <img class="roadmap-img mt-12" :src="require('@/assets/img/roadmap.svg')">
                    <img class="roadmap-img-mobile mt-12" :src="require('@/assets/img/roadmap_mobile.svg')">
                </v-row>

                <v-row justify="center" class="btn-row" v-if="isVisible">
                    <v-btn
                            text
                            class="feature-btn"
                            @click="openLink('https://overnight.canny.io/')">
                        Vote for new features
                    </v-btn>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>

export default {
    name: "RoadmapPage",

    components: {
    },

    data: () => ({
        isVisible: false,
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

    .roadmap-img-mobile {
        width: 80% !important;
    }

    .feature-btn {
        height: 40px !important;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 16px !important;
        line-height: 18px !important;
    }
}

@media only screen and (max-width: 960px) {
    .roadmap-img {
        display: none !important;
    }
}

@media only screen and (min-width: 961px) {
    .roadmap-img-mobile {
        display: none !important;
    }

    .roadmap-img {
        width: 100% !important;
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

    .feature-btn {
        height: 50px !important;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 18px !important;
        line-height: 20px !important;
    }
}

.page-container {
    background-image: url("../../assets/background/img/cases_bg_lines.svg");
    background-position: center;
    background-size: cover;
}

.container-row {
    width: 90% !important;
}

.container-row {
    margin-left: 5% !important;
    margin-top: 10% !important;
    margin-bottom: 10% !important;
}

.btn-row {
    margin-top: 10% !important;
}

.title-text {
    font-family: 'Cormorant', sans-serif;
    text-transform: uppercase;
    color: #28A0F0;
    font-weight: 500;
    font-size: 70px;
    line-height: 80px;
}

.accent-text {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    background: #000;
    font-weight: 300;
    font-size: 60px;
    line-height: 80px;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}

.feature-btn {
    border: 1px solid #28A0F0;
    border-radius: 0;
    font-family: 'Roboto', sans-serif !important;
    font-feature-settings: 'liga' off !important;
    color: #28A0F0 !important;
    text-transform: none !important;
}

</style>
