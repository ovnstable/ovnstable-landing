<template>
    <div class="fill-height">
        <MainPage id="main_page"/>
        <HowPage id="how_page"/>
        <UseCasesPage id="use_cases_page"/>
        <PerformancePage id="performance_page"/>
        <PortfolioPage id="portfolio_page"/>
        <SecurityPage id="security_page"/>
        <TrustedPage id="trusted_page"/>
        <RoadmapPage id="roadmap_page"/>
        <TeamPage id="team_page"/>
        <QuestionsPage id="questions_page"/>

        <Footer/>
    </div>
</template>

<script>

import MainPage from "@/component/pages/MainPage";
import HowPage from "@/component/pages/HowPage";
import UseCasesPage from "@/component/pages/use_cases/UseCasesPage";
import PerformancePage from "@/component/pages/PerformancePage";
import PortfolioPage from "@/component/pages/PortfolioPage";
import SecurityPage from "@/component/pages/SecurityPage";
import TrustedPage from "@/component/pages/trusted/TrustedPage";
import RoadmapPage from "@/component/pages/RoadmapPage";
import TeamPage from "@/component/pages/team/TeamPage";
import QuestionsPage from "@/component/pages/QuestionsPage";
import Footer from "@/component/main/inc/Footer";
export default {
    name: "MainView",

    components: {
        Footer,
        QuestionsPage,
        TeamPage,
        RoadmapPage,
        TrustedPage,
        SecurityPage,
        PortfolioPage,
        PerformancePage,
        UseCasesPage,
        HowPage,
        MainPage
    },

    data: () => ({

    }),

    computed: {
    },

    created() {
    },

    mounted() {
    },

    methods: {
    }
}
</script>

<style scoped>

/* mobile */
@media only screen and (max-width: 1400px) {
}

@media only screen and (min-width: 1400px) {
}

</style>
