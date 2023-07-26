<template>
    <div class="page-container overflow-hidden" :class="isMobile ? 'flex-column' : 'flex-row'">

        <video autoplay playsinline muted loop class="bg-video">
            <source :src='require("@/assets/background/video/main_video_bg.mp4")' type='video/mp4'>
        </video>

        <v-row class="container-row d-flex overflow-hidden">
            <v-col class="text-col" :cols="isMobile ? 12 : (isTablet ? 6 : 7)">
                <v-row class="title-row mb-10" :class="isMobile ? '' : 'mt-15'" v-observe-visibility="visibilityChanged">
                    <div>
                        <label class="accent-text">OVERNIGHT</label>
                        <label class="title-text mb-0"> – Delta-neutral REAL Yield for conservative STABLECOIN investors</label>
                    </div>
                </v-row>
                <v-row class="mb-10" v-if="isVisible">
                    <p class="sub-title-text mb-0">Overnight Finance is an asset management protocol offering passive yield products based on delta-neutral strategies, primarily for conservative stablecoin investors. </p>
                    <p class="sub-title-text mb-0"></p>
                </v-row>

                <v-row class="btn-row" v-if="isVisible">
                    <v-btn class="d-none d-md-flex launch-dapp-btn" @click="launchDapp">Launch DAPP</v-btn>
                </v-row>
            </v-col>

            <v-col :cols="isMobile ? 12 : (isTablet ? 6 : 5)">
                <v-row :justify="isMobile ? 'center' : 'end'" class="overflow-hidden">
                    <ovn-maincards class="maincards-widget"></ovn-maincards>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>

import MainCards from "@/component/maincards/MainCards.vue"

export default {
    name: "MainPage",

    components: {
      'ovn-maincards': MainCards
    },

    data: () => ({
        isVisible: false,
    }),

    computed: {
        isMobile() {
            return window.innerWidth <= 960;
        },

        isTablet() {
            return window.innerWidth <= 1440;
        },
    },

    methods: {
        launchDapp() {
            window.open(`https://app.overnight.fi/swap`, '_self').focus();
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

    .sub-title-text {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
    }

    .launch-dapp-btn {
        height: 40px !important;
        width: 200px !important;

        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 16px !important;
        line-height: 18px !important;
    }
}

@media only screen and (min-width: 1400px) {
    .title-text {
        font-style: normal;
        font-weight: 300;
        font-size: 56px;
        line-height: 80px;
    }

    .accent-text {
        font-style: normal;
        font-weight: 500;
        font-size: 70px;
        line-height: 80px;
    }

    .sub-title-text {
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 32px;
    }

    .launch-dapp-btn {
        height: 50px !important;
        width: 250px !important;

        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 18px !important;
        line-height: 20px !important;
    }
}

@media
only screen and (-webkit-min-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 1300px),
only screen and (        min-device-pixel-ratio: 2)      and (min-width: 1300px),
only screen and (                min-resolution: 192dpi) and (min-width: 1300px),
only screen and (                min-resolution: 2dppx)  and (min-width: 1300px) {
    .title-text {
        font-style: normal;
        font-weight: 300;
        font-size: 40px;
        line-height: 55px;
    }

    .accent-text {
        font-style: normal;
        font-weight: 500;
        font-size: 45px;
        line-height: 55px;
    }

    .sub-title-text {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 28px;
    }

    .launch-dapp-btn {
        height: 45px !important;
        width: 240px !important;

        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 18px !important;
        line-height: 20px !important;
    }

    .maincards-widget {
        z-index: 100 !important;
        height: auto;
        transform: scale(80%);
    }
    /* Large screen, retina, stuff to override above media query */

}

@media only screen and (min-width: 1800px) {
    .bg-video {
        width: 100%;
    }
}

.page-container {
    background-color: rgba(2, 24, 68, 0.9) !important;
    height: 100% !important;
}

.container-row {
    width: 90% !important;
}

.text-col {
    z-index: 100 !important;
}

.container-row {
    margin-left: 5% !important;
    margin-top: 15% !important;
    margin-bottom: 10% !important;
}

.bg-video {
    mix-blend-mode: soft-light;
    z-index: 0 !important;
    position: absolute;
}

.maincards-widget {
    z-index: 100 !important;
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

.sub-title-text {
    font-family: 'Roboto', sans-serif;
    color: #FFFFFF;
}

.launch-dapp-btn {
    border-radius: 0 !important;
    background: linear-gradient(91.26deg, #28A0F0 0%, rgba(6, 120, 196, 0.9917) 100%);
    box-shadow: none !important;

    font-family: 'Roboto', sans-serif !important;
    font-feature-settings: 'liga' off !important;
    color: #FFFFFF !important;
}

</style>
