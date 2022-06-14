<template>
    <v-container class="card-container-fame">
        <v-row justify="center" class="mt-15 mb-8">
            <img height="40" :src="require('@/assets/img/currency/' + coin0Link)">
            <img height="40" class="ml-n2" :src="require('@/assets/img/currency/' + coin1Link)">
        </v-row>

        <v-row justify="center" class="mb-8">
            <img height="46" :src="require('@/assets/img/partners/' + logoLink)">
        </v-row>
    </v-container>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "FamePartner",
    props: {
        coin0Link: {
            type: String,
            default: null,
        },

        coin1Link: {
            type: String,
            default: null,
        },

        logoLink: {
            type: String,
            default: null,
        },
    },

    computed: {
        ...mapGetters([]),
    },

    data: () => ({
    }),
    
    methods: {
        openLink(url) {
            if (url) {
                window.open(url, '_blank').focus();
            }
        },
    },
}
</script>

<style scoped>

@media only screen and (max-width: 1200px) {
    .card-container-fame {
        width: 70vw !important;
    }
}

@media only screen and (min-width: 1200px) {
    .card-container-fame {
        width: 22vw !important;
    }
}

/* mobile */
@media only screen and (max-width: 1400px) {
}

@media only screen and (min-width: 1400px) {
}

.card-container-fame {
    z-index: 100 !important;
    border: 1px solid #E5E7EA !important;
    height: 100% !important;
    min-height: 250px !important;
}

</style>
