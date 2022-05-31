<template>
    <div class="page-container overflow-hidden">
        <v-row class="container-row d-flex overflow-hidden">
            <v-col class="text-col" cols="12">
                <v-row class="title-row mb-15" justify="center">
                    <label class="title-text mb-0">our <label class="accent-text">plus</label> team</label>
                </v-row>

                <v-row class="d-flex justify-space-between mb-15">
                    <v-col>
                        <TeamMemberCard
                                name="Max E."
                                img-link="max_e.png"
                                desc="Founder & CEO"
                                linked-in-link="https://www.linkedin.com/in/maxim-ermilov/"
                                twitter-link="https://twitter.com/maxim_ermilov"
                                telegram-link="https://t.me/wmermus" />
                    </v-col>
                    <v-col>
                        <TeamMemberCard
                                name="Yaro P."
                                img-link="yaro_p.png"
                                desc="Co-Founder & Tech Lead"
                                linked-in-link="https://www.linkedin.com/in/yarik-pavlov/" />
                    </v-col>
                    <v-col>
                        <TeamMemberCard
                                name="Nick M."
                                img-link="nick_m.png"
                                desc="Co-founder & Blockchain Engineer"
                                linked-in-link="https://www.linkedin.com/in/mosinnik/" />
                    </v-col>
                    <v-col>
                        <TeamMemberCard
                                name="Maxime L."
                                img-link="maxsime_l.png"
                                desc="Product Lead"
                                linked-in-link="https://www.linkedin.com/in/maxim-lafe/" />
                    </v-col>
                    <v-col>
                        <TeamMemberCard
                                name="Andrew S."
                                img-link="andrew_s.png"
                                desc="Marketing Lead"
                                linked-in-link="http://linkedin.com/in/andrewskripkin/" />
                    </v-col>
                    <v-col>
                        <TeamMemberCard
                                name="Naran M."
                                img-link="naran_m.png"
                                desc="Blockchain Engineer"
                                linked-in-link="https://www.linkedin.com/in/naran-mucherinov/" />
                    </v-col>
                    <v-col>
                        <TeamMemberCard
                                name="Nikita S."
                                img-link="nick_s.png"
                                desc="Blockchain Engineer"
                                linked-in-link="https://www.linkedin.com/in/nikita-slezkin-859123215/" />
                    </v-col>
                    <v-col>
                        <TeamMemberCard
                                name="Alex S."
                                img-link="alex_s.png"
                                desc="Frontend Developer"
                                linked-in-link="https://www.linkedin.com/in/alexander-sharuev-b000b9164/" />
                    </v-col>
                    <v-col>
                        <TeamMemberCard
                                name="Uliana T."
                                img-link="uliana_t.png"
                                desc="Designer"
                                linked-in-link="https://www.linkedin.com/in/ulyana-tuzhilina/" />
                    </v-col>
                </v-row>

                <v-row class="experienced-title-row mb-8">
                    <label class="experienced-title">Team background</label>
                </v-row>
                <v-row align="center" class="d-flex justify-space-around">
                    <img
                            class="exp-img my-2"
                            @click="openLink('https://www.google.com/')"
                            :src="require('@/assets/img/companies/google.svg')">
                    <img
                            class="exp-img my-2"
                            @click="openLink('https://www.facebook.com')"
                            :src="require('@/assets/img/companies/facebook.svg')">
                    <img
                            class="exp-img my-2"
                            @click="openLink('https://www.stanford.edu')"
                            :src="require('@/assets/img/companies/stanford.svg')">
                    <img
                            class="exp-img my-2"
                            @click="openLink('https://www.kellogg.northwestern.edu')"
                            :src="require('@/assets/img/companies/kellogg.svg')">
                    <img
                            class="exp-img my-2"
                            @click="openLink('https://www.insead.edu')"
                            :src="require('@/assets/img/companies/insead.svg')">
                    <img
                            class="exp-img my-2"
                            @click="openLink('https://www.bcg.com/')"
                            :src="require('@/assets/img/companies/bcg.svg')">
                    <img
                            class="exp-img my-2"
                            @click="openLink('https://www.morganstanley.com/')"
                            :src="require('@/assets/img/companies/morgan.svg')">
                    <img
                            class="exp-img my-2"
                            @click="openLink('https://www.jpmorgan.com/global/')"
                            :src="require('@/assets/img/companies/jp.svg')">
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>

import TeamMemberCard from "@/component/pages/team/component/TeamMemberCard";
export default {
    name: "TeamPage",

    components: {
        TeamMemberCard
    },

    data: () => ({
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
