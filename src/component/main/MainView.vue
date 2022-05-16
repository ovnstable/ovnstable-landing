<template>
    <div class="fill-height">
        <MainPage/>
        <HowPage/>
        <UseCasesPage/>
        <PerformancePage/>
        <PortfolioPage/>

        <!-- TODO: add security page -->

        <!-- TODO: add trusted page -->

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
export default {
    name: "MainView",

    components: {
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
