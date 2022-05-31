<template>
    <div class="page-container overflow-hidden">

        <img class="performance-bg-img-left" :src="require('@/assets/background/img/performance_bg_lines.svg')">
        <img class="performance-bg-img-right" :src="require('@/assets/background/img/performance_bg_lines.svg')">

        <v-row class="container-row">
            <v-col cols="12">
                <v-row class="mb-15" justify="center">
                    <label class="accent-text mb-0">USD</label><label class="title-text-plus">+</label>
                    <label class="title-text" v-observe-visibility="titleVC" :class="titleAnm ? 'text-focus-in' : ''">&nbsp;Performance</label>
                </v-row>

                <v-row class="d-flex " :class="isMobile ? 'flex-column' : 'flex-row'">
                    <v-col class="overflow-hidden" :cols="isMobile ? 12 : 6">
                        <v-row :justify="isMobile ? 'center' : 'end'">
                            <ovn-apyrate v-observe-visibility="apyRateVC" :class="apyRateAnm ? 'slide-in-left' : ''"></ovn-apyrate>
                        </v-row>
                    </v-col>

                    <v-col class="overflow-hidden" :cols="isMobile ? 12 : 6">
                        <v-row :justify="isMobile ? 'center' : 'start'">
                            <ovn-distrate v-observe-visibility="distRateVC" :class="distRateAnm ? 'slide-in-right' : ''"></ovn-distrate>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>

export default {
    name: "PerformancePage",

    components: {
    },

    data: () => ({
        titleAnm: true,
        apyRateAnm: true,
        distRateAnm: true,
    }),

    computed: {
        isMobile() {
            return window.innerWidth <= 960;
        },
    },

    methods: {
        titleVC() {
            this.titleAnm = !this.titleAnm;
        },

        apyRateVC() {
            this.apyRateAnm = !this.apyRateAnm;
        },

        distRateVC() {
            this.distRateAnm = !this.distRateAnm;
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

    .title-text-plus {
        font-style: normal;
        font-weight: 300;
        font-size: 30px;
        line-height: 36px;
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

    .title-text-plus {
        font-style: normal;
        font-weight: 300;
        font-size: 60px;
        line-height: 80px;
    }
}

.page-container {
    background: linear-gradient(122.1deg, #011845 0%, #15141D 104.83%);
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

.title-text-plus {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;

    background: linear-gradient(91.26deg, #28A0F0 0%, rgba(6, 120, 196, 0.9917) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}

.performance-bg-img-left {
    position: absolute;
    mix-blend-mode: overlay;
    z-index: 0;
    left: 0 !important;
}

.performance-bg-img-right {
    position: absolute;
    mix-blend-mode: overlay;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    z-index: 0;
    right: 0 !important;
}

</style>
