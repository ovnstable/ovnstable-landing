<template>
    <v-app id="app">

        <Header/>

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

    methods: {},

    computed: {
    },
}
</script>

<style>

#app {
}

</style>
