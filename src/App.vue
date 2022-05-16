<template>
    <v-app id="app">

        <!-- TODO: add header -->

        <v-main>
            <div class="main-container">
                <router-view></router-view>
            </div>
        </v-main>

    </v-app>
</template>

<script>

export default {
    name: 'App',

    components: {
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
