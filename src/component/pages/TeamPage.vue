<template>
    <v-row class="main-page-container">

        <img class="team-bg-img-left" :src="require('@/assets/img/team_bg_lines.svg')">
        <img class="team-bg-img-right" :src="require('@/assets/img/team_bg_lines.svg')">

        <v-col class="text-col">
            <v-row class="title-row" justify="center">
                <label class="title-text mb-0">our <label class="accent-text">best</label> team</label>
            </v-row>
            <v-row class="team-cards-row">
                <!-- TODO: add team cards -->
            </v-row>

            <v-row class="content-row">
                <v-col cols="12">
                    <v-row class="experienced-title-row mb-8">
                        <label class="experienced-title">Our team experienced in large companies</label>
                    </v-row>
                    <v-row class="experienced-row" align="center">
                        <!-- TODO: add links -->
                        <img
                                class="exp-img"
                                height="40"
                                :src="require('@/assets/img/companies/bsg.png')">

                        <v-spacer></v-spacer>

                        <img
                                class="exp-img"
                                height="46"
                                :src="require('@/assets/img/companies/morgan.png')">

                        <v-spacer></v-spacer>

                        <img
                                class="exp-img"
                                height="36"
                                :src="require('@/assets/img/companies/jp.svg')">

                        <v-spacer></v-spacer>

                        <img
                                class="exp-img"
                                height="40"
                                :src="require('@/assets/img/companies/google.png')">

                        <v-spacer></v-spacer>

                        <img
                                class="exp-img"
                                height="40"
                                :src="require('@/assets/img/companies/facebook.png')">

                        <v-spacer></v-spacer>

                        <img
                                class="exp-img"
                                height="50"
                                :src="require('@/assets/img/companies/kellogg.png')">

                        <v-spacer></v-spacer>

                        <img
                                class="exp-img"
                                height="60"
                                :src="require('@/assets/img/companies/stanford.png')">

                        <v-spacer></v-spacer>

                        <img
                                class="exp-img"
                                height="70"
                                :src="require('@/assets/img/companies/insead.png')">
                    </v-row>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>

export default {
    name: "TeamPage",

    components: {
    },

    data: () => ({

    }),

    computed: {
    },

    methods: {
        openLink(url) {
            window.open(url, '_blank').focus();
        },
    }
}
</script>

<style scoped>

.main-page-container {
    background: #FFFFFF;
}

.text-col {
    margin-left: 7% !important;
    margin-right: 7% !important;
}

.title-row {
    margin-top: 179px !important;
    margin-bottom: 120px !important;
}

.experienced-title-row {
    height: 56px !important;
    border-bottom: 1px solid #DEE1E5;
}

.team-cards-row {
    height: 1220px !important;
    margin-bottom: 180px !important;
}

.experienced-row {
    margin-bottom: 228px !important;
}

.title-text {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 60px;
    line-height: 80px;
    text-transform: uppercase;
    color: #333333;
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

.experienced-title {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #333333;
}

.team-bg-img-left {
    position: absolute;
    mix-blend-mode: normal;
    z-index: 0;
    left: 0 !important;
}

.team-bg-img-right {
    position: absolute;
    mix-blend-mode: normal;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    z-index: 0;
    right: 0 !important;
}

.exp-img {
    cursor: pointer;
}

</style>
