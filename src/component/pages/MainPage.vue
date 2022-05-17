<template>
    <v-row class="main-page-container">
        <video playsinline autoplay muted loop class="bg-video">
            <source :src='require("@/assets/background/video/main_video_bg.mp4")' type='video/mp4'>
        </video>

        <v-col class="text-col" cols="7">
            <v-row class="title-row mb-10">
                <div>
                    <p class="title-text mb-0"><label class="accent-text">USD+</label> Is</p>
                    <p class="title-text mb-0">USDC that pays you yield</p>
                    <p class="title-text mb-0">daily via rebase</p>
                </div>
            </v-row>
            <v-row class="mb-10">
                <p class="sub-title-text mb-0">USD+ stablecoin can be instantly minted and redeemed to USDC 1:1.</p>
                <p class="sub-title-text mb-0">Simply replace USDC with USD+ stablecoin and start getting passive yield where it didn’t exist before.</p>
            </v-row>
            <v-row class="btn-row">
                <v-btn class="launch-dapp-btn" @click="launchDapp">Launch DAPP</v-btn>
            </v-row>
        </v-col>

        <v-col class="maincards-col" cols="5">
            <!-- TODO: add maincards widget -->
        </v-col>

        <!-- TODO: add video with gradient mask -->
        <!-- <video playsinline autoplay muted loop>
            <source :src='require("@/assets/background/video/main_video_bg.mp4")' type='video/mp4'>
        </video>-->

    </v-row>
</template>

<script>

export default {
    name: "MainPage",

    components: {
    },

    data: () => ({

    }),

    computed: {
    },

    methods: {
        launchDapp() {
            window.open(`https://app.overnight.fi/`, '_blank').focus();
        },
    }
}
</script>

<style scoped>

.main-page-container {
    /*background: linear-gradient(100.74deg, rgba(2, 24, 68, 0.9) 0.89%, rgba(16, 21, 39, 0.9) 98.31%);*/
    background-color: rgba(2, 24, 68, 0.9);
}

.text-col {
    margin-left: 7% !important;
}

.maincards-col {
    margin-right: 7% !important;
}

.text-col, .maincards-col {
    z-index: 100;
}

.title-row {
    margin-top: 347px !important;
}

.btn-row {
    margin-bottom: 250px !important;
}

.title-text {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 60px;
    line-height: 80px;
    text-transform: uppercase;
    color: #FFFFFF;
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

.sub-title-text {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 32px;
    color: #FFFFFF;
}

.launch-dapp-btn {
    border-radius: 0 !important;
    background: linear-gradient(91.26deg, #28A0F0 0%, rgba(6, 120, 196, 0.9917) 100%);
    height: 50px !important;
    width: 250px !important;
    box-shadow: none !important;

    font-family: 'Roboto', sans-serif !important;
    font-style: normal !important;
    font-weight: 400 !important;
    font-size: 18px !important;
    line-height: 20px !important;
    font-feature-settings: 'liga' off !important;
    color: #FFFFFF !important;
}

.bg-video {
    mix-blend-mode: soft-light;
    z-index: 0;
    position: absolute;
}

</style>
