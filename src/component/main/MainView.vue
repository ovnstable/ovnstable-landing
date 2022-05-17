<template>
    <div class="fill-height">
        <MainPage/>
        <HowPage/>
        <UseCasesPage/>
        <PerformancePage/>
        <PortfolioPage/>
        <SecurityPage/>
        <TrustedPage/>
        <RoadmapPage/>
        <TeamPage/>
        <QuestionsPage/>

        <!-- TODO: add footer -->
    </div>
</template>

<script>

import MainPage from "@/component/pages/MainPage";
import HowPage from "@/component/pages/HowPage";
import UseCasesPage from "@/component/pages/UseCasesPage";
import PerformancePage from "@/component/pages/PerformancePage";
import PortfolioPage from "@/component/pages/PortfolioPage";
import SecurityPage from "@/component/pages/SecurityPage";
import TrustedPage from "@/component/pages/TrustedPage";
import RoadmapPage from "@/component/pages/RoadmapPage";
import TeamPage from "@/component/pages/TeamPage";
import QuestionsPage from "@/component/pages/QuestionsPage";
export default {
    name: "MainView",

    components: {
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

    methods: {
    }
}
</script>

<style scoped>

</style>
