<template>
    <div class="page-container overflow-hidden mt-0 mb-0">
        <v-row class="container-row d-flex overflow-hidden">
            <v-col class="text-col" cols="12">
                <v-row class="title-row" justify="center" :class="isMobile ? 'mb-10' : 'mb-10'" v-observe-visibility="visibilityChanged">
                    <label class="title-text mb-0">our <label class="accent-text">plus</label> team</label>
                </v-row>

                <v-row justify="center" align="center" class="mb-15" v-if="isVisible">
                    <v-col cols="12">
                        <v-row justify="center">
                            <TeamMemberCard
                                name="Max E."
                                img-link="max_e.png"
                                desc="Founder & CEO"
                                linked-in-link="https://www.linkedin.com/in/maxim-ermilov/"
                                twitter-link="https://twitter.com/maxim_ermilov"
                                telegram-link="https://t.me/wmermus" />
                            <TeamMemberCard
                                name="Yaro P."
                                img-link="yaro_p.png"
                                desc="Co-Founder & Tech Lead"
                                linked-in-link="https://www.linkedin.com/in/yarik-pavlov/" />
                            <TeamMemberCard
                                name="Nikita O."
                                img-link="nikita_o.png"
                                desc="Chief Business Development Officer"
                                linked-in-link="https://www.linkedin.com/in/nikita-ovchinnik/" />
                        </v-row>
                    </v-col>
                    <v-col cols="12">
                        <v-row justify="center">
                            <TeamMemberCard
                                name="Naran M."
                                img-link="naran_m.png"
                                desc="Blockchain Engineer"
                                linked-in-link="https://www.linkedin.com/in/naran-mucherinov/" />
                            <TeamMemberCard
                                name="Nikita S."
                                img-link="nick_s.png"
                                desc="Blockchain Engineer"
                                linked-in-link="https://www.linkedin.com/in/nikita-slezkin-859123215/" />
                            <TeamMemberCard
                                name="Uliana T."
                                img-link="uliana_t.png"
                                desc="Design and Marketing Lead"
                                linked-in-link="https://www.linkedin.com/in/ulyana-tuzhilina/" />
                        </v-row>
                    </v-col>
                    <v-col cols="12">
                        <v-row justify="center">
                            <TeamMemberCard
                                name="Dmitry T."
                                img-link="dmitry_t.png"
                                desc="Frontend Lead"
                                linked-in-link="https://www.linkedin.com/in/dmitry-timoshchuk-082365110/" />
                            <TeamMemberCard
                                name="Roman G."
                                img-link="roman_g.png"
                                desc="Frontend Developer"
                                linked-in-link="https://www.linkedin.com/in/roman-golovlyov-2753611b3/" />
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="experienced-title-row mb-8">
                    <label class="experienced-title">Team background</label>
                </v-row>
                <v-row align="center" class="d-flex justify-space-around">
                    <HoverImg
                                    class="exp-img my-2"
                                    link="https://www.google.com/"
                                    :img="require('@/assets/img/companies/google.svg')"
                                    :hover-img="require('@/assets/img/companies/google_colored.svg')"
                            />
                    <HoverImg
                                    class="exp-img my-2"
                                    link="https://www.facebook.com"
                                    :img="require('@/assets/img/companies/facebook.svg')"
                                    :hover-img="require('@/assets/img/companies/facebook_colored.svg')"
                            />
                    <HoverImg
                                    class="exp-img my-2"
                                    link="https://www.stanford.edu"
                                    :img="require('@/assets/img/companies/stanford.svg')"
                                    :hover-img="require('@/assets/img/companies/stanford_colored.svg')"
                            />
                    <HoverImg
                                    class="exp-img my-2"
                                    link="https://www.kellogg.northwestern.edu"
                                    :img="require('@/assets/img/companies/kellogg.svg')"
                                    :hover-img="require('@/assets/img/companies/kellogg_colored.svg')"
                            />
                    <HoverImg
                                    class="exp-img my-2"
                                    link="https://www.insead.edu"
                                    :img="require('@/assets/img/companies/insead.svg')"
                                    :hover-img="require('@/assets/img/companies/insead_colored.svg')"
                            />

                    <HoverImg
                                    class="exp-img my-2"
                                    link="https://www.morganstanley.com/"
                                    :img="require('@/assets/img/companies/morgan.svg')"
                                    :hover-img="require('@/assets/img/companies/morgan_stanley_colored.svg')"
                            />
                    <HoverImg
                        class="exp-img my-2"
                        link="https://www.jpmorgan.com/global/"
                        :img="require('@/assets/img/companies/jp.svg')"
                        :hover-img="require('@/assets/img/companies/jp_morgan_colored.svg')"
                    />
                    <HoverImg
                        class="exp-img my-2"
                        link="https://www.bcg.com/"
                        :img="require('@/assets/img/companies/bcg.svg')"
                        :hover-img="require('@/assets/img/companies/bcg_colored.svg')"
                    />
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>

import TeamMemberCard from "@/component/pages/team/component/TeamMemberCard";
import HoverImg from "@/component/common/HoverImg";
export default {
    name: "TeamPage",

    components: {
        HoverImg,
        TeamMemberCard
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

    .experienced-title {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
    }
}

@media only screen and (max-width: 960px) {
    .exp-img {
        width: 22vw !important;
    }
}

@media only screen and (min-width: 961px) {
    .exp-img {
        width: 11vw !important;
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

    .experienced-title {
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 36px;
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

    .experienced-title {
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
    }
}

.page-container {
    background: #FFFFFF !important;
}

.container-row {
    width: 90% !important;
}

.container-row {
    margin-left: 5% !important;
    margin-top: 10% !important;
    margin-bottom: 15% !important;
}

.experienced-title-row {
    height: 56px !important;
    border-bottom: 1px solid #DEE1E5;
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

.experienced-title {
    font-family: 'Roboto', sans-serif;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #333333;
}

.exp-img {
    cursor: pointer;
}
</style>
