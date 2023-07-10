<template>
    <div class="page-container overflow-hidden" v-observe-visibility="visibilityChanged" >
        <v-row class="container-row">
            <v-col :cols="isMobile ? 12 : 12">
                <div class="arrow" :class="isMobile ? '' : 'mt-5'">
                </div>
                <v-row :class="isMobile ? 'mt-10' : ''" justify="center" >
                    <label v-if="!isMobile" class="title-text">our <label class="accent-text">roadmap</label></label>
                </v-row>
                <v-row justify="center" class="roadmap-images" :class="isMobile ? 'mb-0' : 'mb-0'">
                    <img v-if="!isMobile" class="roadmap-img mt-15" :src="require('@/assets/img/roadmap.svg')">
                    <img v-if="isMobile" class="roadmap-img-mobile mb-0" :src="require('@/assets/img/roadmap_mobile.svg')">
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
    .page-container {
        height: 100% !important;
        margin-bottom: 0 !important;
    }

    .title-text {
        font-style: normal;
        font-weight: 300;
        font-size: 34px;
        line-height: 36px;
    }

    .roadmap-img {
        width: 100% !important;
        height: 100% !important;
        transform: scale(80%);
    }

    .accent-text {
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 38px;
    }

    .roadmap-img-mobile {
        width: 80% !important;
        height: 100% !important;
        margin-bottom: 0 !important;
    }

    .feature-btn {
        height: 40px !important;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 16px !important;
        line-height: 18px !important;
    }

    .arrow,
    .arrow:before {
        position: absolute;
        left: 50%;
        top: 1%;
    }

    .arrow {
        width: 40px;
        height: 40px;
        top: 1%;
        margin: -20px 0 0 -20px;
        -webkit-transform: rotate(45deg);
        border-left: none;
        border-top: none;
        border-right: 3px #1C95E7 solid;
        border-bottom: 3px #1C95E7 solid;
    }

    .arrow:before {
        content: '';
        width: 15px;
        height: 15px;
        top: 1%;
        left: 50%;
        margin: 10px 0 0 -7px;
        border-left: none;
        border-top: none;
        border-right: 2px #1C95E7 solid;
        border-bottom: 2px #1C95E7 solid;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-name: arrow;
    }

    @keyframes arrow {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translate(-10px, -10px);
        }
    }
}
@media only screen and (min-width: 1300px) {
    .title-text {
        font-style: normal;
        font-weight: 300;
        font-size: 70px;
        line-height: 80px;
    }

    .accent-text {
        font-style: normal;
        font-weight: 300;
        font-size: 60px;
        line-height: 80px;
    }

    .feature-btn {
        height: 50px !important;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 18px !important;
        line-height: 20px !important;
    }

    .btn-row {
        margin-top: 10% !important;
    }

    .arrow {
        width: 80px;
        height: 80px;
        top: 1%;
        margin: -20px 0 0 -20px;
        -webkit-transform: rotate(45deg);
        border-left: none;
        border-top: none;
        border-right: 4px #1C95E7 solid;
        border-bottom: 4px #1C95E7 solid;
    }

    .arrow:before {
        content: '';
        width: 40px;
        height: 40px;
        top: 120%;
        left: 200%;
        margin: 10px 0 0 -27px;
        border-left: none;
        border-top: none;
        border-right: 3px #1C95E7 solid;
        border-bottom: 3px #1C95E7 solid;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-name: arrow;
    }

    @keyframes arrow {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translate(-10px, -10px);
        }
    }

    .roadmap-img {
        width: 100% !important;
        height: 100% !important;
        transform: scale(80%);
    }
    /* Large screen, non-retina */

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
        font-weight: 500;
        font-size: 45px;
        line-height: 55px;
    }

    .accent-text {
        font-style: normal;
        font-weight: 300;
        font-size: 40px;
        line-height: 55px;
    }

    .feature-btn {
        height: 40px !important;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 14px !important;
        line-height: 18px !important;
    }

    .btn-row {
        margin-top: 5% !important;
    }

    .arrow {
        width: 50px;
        height: 50px;
        top: 1%;
        margin: -20px 0 0 -20px;
        -webkit-transform: rotate(45deg);
        border-left: none;
        border-top: none;
        border-right: 3px #1C95E7 solid;
        border-bottom: 3px #1C95E7 solid;
    }

    .arrow:before {
        content: '';
        width: 25px;
        height: 25px;
        top: 120%;
        left: 200%;
        margin: 10px 0 0 -14px;
        border-left: none;
        border-top: none;
        border-right: 3px #1C95E7 solid;
        border-bottom: 3px #1C95E7 solid;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-name: arrow;
    }

    @keyframes arrow {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translate(-10px, -10px);
        }
    }


    .roadmap-img {
        width: 100% !important;
        height: 100% !important;
        transform: scale(80%);
    }
    /* Large screen, retina, stuff to override above media query */

}
@media only screen and (min-width: 1400px) {

}

.roadmap-img {
    width: 100% !important;
    height: 100% !important;
    transform: scale(85%);
}

.page-container {
    background-image: url("../../assets/background/img/cases_bg_lines.svg");
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
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
    font-family: 'Cormorant', sans-serif;
    text-transform: uppercase;
    color: #28A0F0;
    font-weight: 500;
}

.accent-text {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    background: #000;
    font-weight: 300;

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
    letter-spacing: normal;
}

.page-container {
    position: relative;
}

.arrow,
.arrow:before {
    position: absolute;
    left: 50%;
    top: 1%;
}

</style>
