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

/* animations */

.slide-in-bck-center {
    animation: slide-in-bck-center 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes slide-in-bck-center {
    0% {
        transform: translateZ(600px);
        opacity: 0;
    }
    100% {
        transform: translateZ(0);
        opacity: 1;
    }
}

.slide-top {
    animation: slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes slide-top {
    0% {
        transform: translateY(200px);
    }
    100% {
        transform: translateY(0);
    }
}

.fade-animation {
    animation: fade-animation 4s forwards;
}

@keyframes fade-animation{
    0% {opacity: 0;}
    100% {opacity: 1;}
}

.text-focus-in {
    animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}

.sub-text-focus-in-1s {
    animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both 1s;
}

.sub-text-focus-in-hs {
    animation: text-focus-in 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both 1s;
}

@keyframes text-focus-in {
    0% {
        filter: blur(5px);
        opacity: 0;
    }
    100% {
        filter: blur(0px);
        opacity: 1;
    }
}
</style>
