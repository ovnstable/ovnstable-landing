<template>
    <div class="page-container overflow-hidden">
        <v-row class="container-row d-flex overflow-hidden">
            <v-col class="text-col" cols="12">
                <v-row class="" :class="isMobile ? 'justify-center mb-5' : 'justify-start mb-10'" v-observe-visibility="visibilityChanged">
                    <label class="title-text mb-0">we are <label class="accent-text">trusted</label></label>
                </v-row>

                <v-row class="d-flex justify-space-between " :class="isMobile ? 'flex-column-reverse mt-0' : 'flex-row mt-10'" v-if="isVisible">
                    <v-col :class="isMobile ? 'mt-10' : 'mt-12'">
                        <v-row class="trusted-title-row" :class="isMobile ? 'mb-0' : 'mb-5'">
                            <label class="trusted-title">Partners</label>
                        </v-row>
                        <v-row align="center" class="d-flex justify-space-around">
                            <HoverImg
                                    class="trusted-img my-2"
                                    link="https://www.optimism.io/"
                                    :img="require('@/assets/img/partners/optimism.svg')"
                                    :hover-img="require('@/assets/img/partners/optimismColored.svg')"
                            />
                            <HoverImg
                                class="trusted-img my-2"
                                link="https://uniswap.org/"
                                :img="require('@/assets/img/partners/uniswap.svg')"
                                :hover-img="require('@/assets/img/partners/uniswapColored.svg')"
                            />
                            <HoverImg
                                class="trusted-img my-2"
                                link="https://app.velodrome.finance/"
                                :img="require('@/assets/img/partners/velodrome.svg')"
                                :hover-img="require('@/assets/img/partners/velodromeColored.svg')"
                            />
                            <HoverImg
                                    class="trusted-img my-2"
                                    link="https://polygon.technology"
                                    :img="require('@/assets/img/partners/polygon.svg')"
                                    :hover-img="require('@/assets/img/partners/polygonColored.svg')"
                            />
                        </v-row>
                        <v-row align="center" class="d-flex justify-space-around">
                            <HoverImg
                                class="trusted-img my-2"
                                link="https://quickswap.exchange/"
                                :img="require('@/assets/img/partners/quickswap.svg')"
                                :hover-img="require('@/assets/img/partners/quickswapColored.svg')"
                            />
                            <HoverImg
                                class="trusted-img my-2"
                                link="https://balancer.fi/"
                                :img="require('@/assets/img/partners/balancer.svg')"
                                :hover-img="require('@/assets/img/partners/balancerColored.svg')"
                            />
                            <HoverImg
                                class="trusted-img my-2"
                                link="https://beets.fi/"
                                :img="require('@/assets/img/partners/beethoven.svg')"
                                :hover-img="require('@/assets/img/partners/beethovenColored.svg')"
                            />
                            <HoverImg
                                class="trusted-img my-2"
                                link="https://www.sushi.com/"
                                :img="require('@/assets/img/partners/sushi.svg')"
                                :hover-img="require('@/assets/img/partners/sushiColored.svg')"
                            />
                        </v-row>
                        <v-row align="center" class="d-flex justify-space-around mb-12">
                            <HoverImg
                                class="trusted-img my-2"
                                link="https://sphere.finance/"
                                :img="require('@/assets/img/partners/sphere.svg')"
                                :hover-img="require('@/assets/img/partners/sphereColored.svg')"
                            />
                            <HoverImg
                                class="trusted-img my-2"
                                link="https://xcelerator.berkeley.edu/"
                                :img="require('@/assets/img/partners/xelerator.svg')"
                                :hover-img="require('@/assets/img/partners/xeleratorColored.svg')"
                            />
                            <HoverImg
                                class="trusted-img my-2"
                                link="https://tetu.io/"
                                :img="require('@/assets/img/partners/tetu.svg')"
                                :hover-img="require('@/assets/img/partners/tetuColored.svg')"
                            />
                            <HoverImg
                                class="trusted-img my-2"
                                link="https://www.arrakis.finance/"
                                :img="require('@/assets/img/partners/arrakis.svg')"
                                :hover-img="require('@/assets/img/partners/arrakisColored.svg')"
                            />
                        </v-row>

                        <v-row :style="{'height': isMobile ? '20px' : '20px'}">
                        </v-row>

                        <v-row class="trusted-title-row" :class="isMobile ? 'mt-0 mb-5' : 'mt-12 mb-8'" id="investors_part">
                            <label class="trusted-title">Our valued investors</label>
                        </v-row>

                        <v-row>
                            <v-sheet max-width="100%">
                                <v-slide-group show-arrows>
                                    <v-slide-item>
                                        <InvestorCard
                                                class="mr-4"
                                                name="Alex Pack"
                                                img-link="alex_pack.png"
                                                companyImg="hack_vc.svg"
                                                desc="Managing Partner at Hack VC"
                                                tweet="Overnight team are building a financial primitive that should have very broad applications from treasury management to liquidity mining. We welcome Overnight’s conservative approach to risk, the design that is built to be both decentralized and compliant with future regulation and are excited to support their efforts."
                                                tweetLink="https://twitter.com/hack_vc" />
                                    </v-slide-item>

                                    <v-slide-item>
                                        <InvestorCard
                                                class="mr-4"
                                                name="Fabrice Grinda"
                                                img-link="fabrice.png"
                                                companyImg="fj_labs.png"
                                                desc="FJ Labs"
                                                tweet="Overnight have struck us with the depth of understanding DeFi’s unique opportunities and problems as well as the ability to articulate its vision in a very compelling story. Stablecoin economics can be very strong provided network effects can be realized and we look to support Overnight with our expertise in these matters."
                                                tweetLink="https://twitter.com/fjlabs" />
                                    </v-slide-item>

                                    <v-slide-item>
                                        <InvestorCard
                                                class="mr-4"
                                                name="Brian Tubergen"
                                                img-link="brian.png"
                                                companyImg="coinlist.svg"
                                                desc="Co-founder of Coinlist"
                                                tweet="USD+ is a product that is intuitively understood by a wide audience, including advanced DeFi investors and people new to crypto. Its focus on low risk and high liquidity subsegment of DeFi should help bring mainstream conservative investors into DeFi"
                                                tweetLink="https://twitter.com/tubergen?s=20" />
                                    </v-slide-item>

                                    <v-slide-item>
                                        <InvestorCard
                                                class="mr-4"
                                                name="Sandeep Naiwal"
                                                img-link="sandeep.png"
                                                companyImg="polygon_pos.png"
                                                desc="Co-founder Polygon POS chain"
                                                tweet="Overnight and its stablecoin USD+ showcase how Polygon’s technology enables truly innovative products that take DeFI to the new level. USD+ is a stablecoin focused on minimizing risk while producing solid yield, it is ideal to onboard fiat investors into DeFI, as a treasury asset for crypto projects and a means to improve capital efficiency of sophisticated liquidity mining strategies get around by train, bus, car, ferry, cruise ship, bicycle, skis, or sleigh. Relax and enjoy yourself!"
                                                tweetLink="https://twitter.com/sandeepnailwal?s=20" />
                                    </v-slide-item>

                                    <v-slide-item>
                                        <InvestorCard
                                                class="mr-4"
                                                name="Paul Holland"
                                                img-link="paul_holland.png"
                                                companyImg="paulrholland.svg"
                                                tweet="Overnight are working on an opportunity that already exceeds 100 Bln USD and can soon exceed 1 Trl USD. USD+ is a unique product both from fin and tech perspectives, with a team that had proven itself many times over in the past."
                                                tweetLink="https://twitter.com/paulrholland" />
                                    </v-slide-item>

                                    <v-slide-item>
                                        <InvestorCard
                                                class="mr-4"
                                                name="Ryan Selkis"
                                                img-link="ryan_selkis.png"
                                                companyImg="ryanselkis.svg"
                                                desc="Co-founder & CEO of Messari"
                                                tweetLink="https://twitter.com/twobitidiot?s=20" />
                                    </v-slide-item>
                                </v-slide-group>
                            </v-sheet>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>

import InvestorCard from "@/component/pages/trusted/component/InvestorCard";
import HoverImg from "@/component/common/HoverImg";
export default {
    name: "TrustedPage",

    components: {
        HoverImg,
        InvestorCard
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
        margin-top: 50px;
        width: 100% !important;
        height: 100% !important;
    }
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

    .trusted-title {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
    }
}

@media only screen and (max-width: 960px) {
    .trusted-img {
        width: 35vw;
    }
}

@media only screen and (min-width: 961px) {
    .trusted-img {
        width: 20vw;
    }
}

@media only screen and (min-width: 1300px) {
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

    .trusted-title {
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 36px;
    }

    .trusted-title-row {
        height: 56px !important;
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

    .trusted-title {
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
    }
    /* Large screen, retina, stuff to override above media query */

}

.page-container {
    background: #FFFFFF !important;
    height: 100% ;
}

.container-row {
    width: 90% !important;
    height: 100% !important;
}

.container-row {
    margin-left: 5% !important;
    margin-top: 10% !important;
}

.trusted-img {
    cursor: pointer;
}

.trusted-title-row {
    height: 56px !important;
    border-bottom: 1px solid #DEE1E5;
}

.trusted-title {
    font-family: 'Roboto', sans-serif;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #333333;
}

.title-text {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    color: #333333;
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
</style>
