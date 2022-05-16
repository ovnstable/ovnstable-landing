<template>
    <div class="fill-height">
        <MainPage/>
        <HowPage/>
        <UseCasesPage/>

        <!-- TODO: add performance page -->

        <!-- TODO: add portfolio page -->

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
export default {
    name: "MainView",

    components: {
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
