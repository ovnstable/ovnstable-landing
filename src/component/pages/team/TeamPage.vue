<template>
    <v-row class="main-page-container">

        <img class="team-bg-img-left" :src="require('@/assets/img/team_bg_lines.svg')">
        <img class="team-bg-img-right" :src="require('@/assets/img/team_bg_lines.svg')">

        <v-col class="text-col">
            <v-row class="title-row" justify="center">
                <label class="title-text mb-0">our <label class="accent-text">best</label> team</label>
            </v-row>
            <v-row class="team-cards-row" justify="start">
                <TeamMemberCard
                        class="mr-4 mb-10"
                        name="Max E."
                        img-link="max_e.png"
                        desc="Founder & CEO"
                        linked-in-link="https://www.linkedin.com/in/maxim-ermilov/"
                        twitter-link="https://twitter.com/maxim_ermilov"
                        telegram-link="https://t.me/wmermus" />

                <TeamMemberCard
                        class="mr-4 mb-10"
                        name="Nick M."
                        desc="Co-founder & Blockchain Engineer"
                        linked-in-link="https://www.linkedin.com/in/mosinnik/" />

                <TeamMemberCard
                        class="mr-4 mb-10"
                        name="Yaro P."
                        img-link="yaro_p.png"
                        desc="Co-Founder & Tech Lead"
                        linked-in-link="https://www.linkedin.com/in/yarik-pavlov/" />

                <TeamMemberCard
                        class="mr-4 mb-10"
                        name="Maxime L."
                        img-link="maxsime_l.png"
                        desc="Product Lead"
                        linked-in-link="https://www.linkedin.com/in/maxim-lafe/" />

                <TeamMemberCard
                        class="mr-4 mb-10"
                        name="Andrew S."
                        img-link="andrew_s.png"
                        desc="Marketing Lead"
                        linked-in-link="http://linkedin.com/in/andrewskripkin/" />

                <TeamMemberCard
                        class="mr-4 mb-10"
                        name="Naran M."
                        img-link="naran_m.png"
                        desc="Blockchain Engineer"
                        linked-in-link="https://www.linkedin.com/in/naran-mucherinov/" />

                <TeamMemberCard
                        class="mr-4 mb-10"
                        name="Nikita S."
                        img-link="nick_s.png"
                        desc="Blockchain Engineer"
                        linked-in-link="https://www.linkedin.com/in/nikita-slezkin-859123215/" />

                <TeamMemberCard
                        class="mr-4 mb-10"
                        name="Alex S."
                        img-link="alex_s.png"
                        desc="Frontend Developer"
                        linked-in-link="https://www.linkedin.com/in/alexander-sharuev-b000b9164/" />

                <TeamMemberCard
                        class="mr-4 mb-10"
                        name="Uliana T."
                        img-link="uliana_t.png"
                        desc="Designer"
                        linked-in-link="https://www.linkedin.com/in/ulyana-tuzhilina/" />

                <TeamMemberCard
                        class="mr-4 mb-10"
                        name="Abdul"
                        desc="Community Manager" />
            </v-row>

            <v-row class="content-row">
                <v-col cols="12">
                    <v-row class="experienced-title-row mb-8">
                        <label class="experienced-title">Team background</label>
                    </v-row>
                    <v-row class="experienced-row" align="center">
                        <img
                                class="exp-img"
                                height="40"
                                @click="openLink('https://www.google.com/')"
                                :src="require('@/assets/img/companies/google.png')">

                        <v-spacer></v-spacer>

                        <img
                                class="exp-img"
                                height="40"
                                @click="openLink('https://www.facebook.com')"
                                :src="require('@/assets/img/companies/facebook.png')">

                        <v-spacer></v-spacer>

                        <img
                                class="exp-img"
                                height="50"
                                @click="openLink('https://www.kellogg.northwestern.edu')"
                                :src="require('@/assets/img/companies/kellogg.png')">

                        <v-spacer></v-spacer>

                        <img
                                class="exp-img"
                                height="60"
                                @click="openLink('https://www.stanford.edu')"
                                :src="require('@/assets/img/companies/stanford.png')">

                        <v-spacer></v-spacer>

                        <img
                                class="exp-img"
                                height="70"
                                @click="openLink('https://www.insead.edu')"
                                :src="require('@/assets/img/companies/insead.png')">

                        <v-spacer></v-spacer>

                        <img
                                class="exp-img"
                                height="40"
                                @click="openLink('https://www.bcg.com/')"
                                :src="require('@/assets/img/companies/bsg.png')">

                        <v-spacer></v-spacer>

                        <img
                                class="exp-img"
                                height="46"
                                @click="openLink('https://www.morganstanley.com/')"
                                :src="require('@/assets/img/companies/morgan.png')">

                        <v-spacer></v-spacer>

                        <img
                                class="exp-img"
                                height="36"
                                @click="openLink('https://www.jpmorgan.com/global/')"
                                :src="require('@/assets/img/companies/jp.svg')">
                    </v-row>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
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
}

@media only screen and (min-width: 1400px) {
}

.main-page-container {
    background: #FFFFFF;
}

.text-col {
    margin-left: 7% !important;
    margin-right: 5% !important;
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
