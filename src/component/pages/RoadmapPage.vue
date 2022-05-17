<template>
    <v-row class="main-page-container">

        <img class="roadmap-bg-img" :src="require('@/assets/img/roadmap_bg_lines.svg')">

        <v-col class="text-col">
            <v-row class="title-row mb-15" justify="center">
                <label class="title-text mb-0">our <label class="accent-text">roadmap</label></label>
            </v-row>

            <v-row class="roadmap-row">
                <!-- TODO: add roadmap -->
            </v-row>
        </v-col>
    </v-row>
</template>

<script>

export default {
    name: "RoadmapPage",

    components: {
    },

    data: () => ({

    }),

    computed: {
    },

    methods: {
    }
}
</script>

<style scoped>

.main-page-container {
    background: linear-gradient(122.1deg, #011845 0%, #15141D 104.83%);
}

.text-col {
    margin-left: 7% !important;
    margin-right: 7% !important;
}

.title-row {
    margin-top: 192px !important;
    margin-bottom: 124px !important;
}

.roadmap-row {
    margin-bottom: 186px !important;
    height: 675px !important;
}

.title-text {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 60px;
    line-height: 80px;
    text-transform: uppercase;
    color: #FFFFFF;
    text-align: center;
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

.roadmap-bg-img {
    position: absolute;
    z-index: 0;
    margin-top: -180px !important;
    clip: rect(0px,2000px,1200px,0px);
}

</style>
