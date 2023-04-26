<template>
    <div class="fill-height">
        <MainPage id="main_page"/>
        <div class="product-container">
            <ProductsPage id="products_page"/>
        </div>
        <HowPage id="how_page"/>

        <TvlPage id="tvl_page"/>
        <RoadmapPage id="roadmap_page"/>
        <SecurityPage id="security_page"/>
        <TrustedPage id="trusted_page"/>
        <TeamPage id="team_page"/>
        <BlogPage id="blog_page"/>
        <QuestionsPage id="questions_page"/>

        <Footer/>
    </div>
</template>

<script>

import MainPage from "@/component/pages/MainPage";
import HowPage from "@/component/pages/HowPage";
import ProductsPage from "@/component/pages/ProductsPage";
import PerformancePage from "@/component/pages/PerformancePage";
import RoadmapPage from "@/component/pages/RoadmapPage";
import SecurityPage from "@/component/pages/SecurityPage";
import TrustedPage from "@/component/pages/trusted/TrustedPage";
import TeamPage from "@/component/pages/team/TeamPage";
import QuestionsPage from "@/component/pages/QuestionsPage";
import Footer from "@/component/main/inc/Footer";
import BlogPage from "@/component/pages/blog/BlogPage";
import TvlPage from "@/component/pages/tvl/TvlPage.vue";

export default {
    name: "MainView",

    components: {
        TvlPage,
        BlogPage,
        ProductsPage,
        Footer,
        QuestionsPage,
        TeamPage,
        RoadmapPage,
        TrustedPage,
        SecurityPage,
        PerformancePage,
        HowPage,
        MainPage
    },

    data: () => ({}),

    computed: {},

    created() {
    },

    mounted() {
    },

    methods: {}
}
</script>

<style scoped>

/* mobile */
@media only screen and (max-width: 1400px) {
}

@media only screen and (min-width: 1400px) {
}

.product-container {
    background: linear-gradient(0.72deg, rgba(28, 149, 231, 0.2) 0.74%, rgba(28, 149, 231, 0) 86.11%) !important;
}

.performance-roadmap-container {
    background: linear-gradient(171.55deg, rgba(28, 149, 231, 0.1) 5.72%, rgba(28, 149, 231, 0) 98.76%) !important;
}
</style>
