<template>
    <div class="page-container overflow-hidden">

        <img class="roadmap-bg-img" :src="require('@/assets/background/img/roadmap_bg_lines.svg')">

        <v-row class="container-row">
            <v-col cols="12">
                <v-row class="mb-15" justify="center">
                    <label class="title-text mb-0">our <label class="accent-text">roadmap</label></label>
                </v-row>

                <v-row justify="center">
                    <img class="roadmap-img mt-12" :src="require('@/assets/img/roadmap.svg')">
                    <img class="roadmap-img-mobile mt-12" :src="require('@/assets/img/roadmap_mobile.svg')">
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

    }),

    computed: {
        isMobile() {
            return window.innerWidth <= 960;
        },
    },

    methods: {
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

    .roadmap-bg-img {
        margin-top: -35%;
    }
}

@media only screen and (max-width: 960px) {
    .roadmap-img {
        display: none !important;
    }
}

@media only screen and (min-width: 960px) {
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

    .roadmap-bg-img {
        margin-top: -10%;
    }
}

.page-container {
    background: linear-gradient(122.1deg, #011845 0%, #15141D 104.83%) !important;
}

.container-row {
    width: 90% !important;
}

.container-row {
    margin-left: 5% !important;
    margin-top: 10% !important;
    margin-bottom: 10% !important;
}

.title-text {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    color: #FFFFFF;
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

.roadmap-bg-img {
    position: absolute;
    z-index: 0 !important;
    max-height: 100% !important;
}

</style>
