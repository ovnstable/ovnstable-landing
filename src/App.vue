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
}

@media only screen and (min-width: 1400px) {
}

#app {
    overflow-x:hidden;
}

</style>
