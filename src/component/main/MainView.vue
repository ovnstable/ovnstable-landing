<template>
    <div class="fill-height">
        <MainPage/>
        <HowPage/>
        <UseCasesPage/>
        <PerformancePage/>
        <PortfolioPage/>
        <SecurityPage/>
        <TrustedPage/>

        <!-- TODO: add roadmap page -->

        <!-- TODO: add team page -->

        <!-- TODO: add questions page -->

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
export default {
    name: "MainView",

    components: {
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
