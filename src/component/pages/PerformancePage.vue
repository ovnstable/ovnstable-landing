<template>
    <v-row class="main-page-container">

        <img class="performance-bg-img-left" :src="require('@/assets/img/performance_bg_lines.svg')">
        <img class="performance-bg-img-right" :src="require('@/assets/img/performance_bg_lines.svg')">

        <v-col class="text-col">
            <v-row class="title-row mb-15" justify="center">
                <label class="title-text mb-0">USD+ Performance</label>
            </v-row>

            <v-row class="widgets-row">
                <!-- TODO: add apy and dist widgets -->
            </v-row>
        </v-col>
    </v-row>
</template>

<script>

export default {
    name: "PerformancePage",

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
    height: 100vh !important;
}

.text-col {
    margin-left: 7% !important;
    margin-right: 7% !important;
}

.title-row {
    margin-top: 197px !important;
    margin-bottom: 100px !important;
}

.widgets-row {
    margin-bottom: 252px !important;
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

.performance-bg-img-left {
    height: 100vh !important;
    position: absolute;
    mix-blend-mode: overlay;
    z-index: 0;
    left: 0 !important;
}

.performance-bg-img-right {
    height: 100vh !important;
    position: absolute;
    mix-blend-mode: overlay;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    z-index: 0;
    right: 0 !important;
}

</style>
