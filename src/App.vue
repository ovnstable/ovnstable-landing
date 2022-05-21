<template>
    <v-app id="app">

        <!-- TODO: add mobile header -->
<!--        <Header/>-->

        <v-main>
            <div class="main-container">
                <router-view></router-view>
            </div>
        </v-main>

    </v-app>
</template>

<script>

import Header from "@/component/main/inc/Header";
export default {
    name: 'App',

    components: {
        Header
    },

    data: () => ({
    }),

    mounted() {
    },

    methods: {
    },

    computed: {
    },
}
</script>

<style>

/* mobile */
@media only screen and (max-width: 1400px) {
    #app {
        overflow-x:hidden;
    }
}

@media only screen and (min-width: 1400px) {
}

.title-text-plus {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 60px;
    line-height: 80px;
    text-transform: uppercase;

    background: linear-gradient(91.26deg, #28A0F0 0%, rgba(6, 120, 196, 0.9917) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}

</style>
