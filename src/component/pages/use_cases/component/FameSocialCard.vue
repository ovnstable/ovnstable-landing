<template>
    <v-container class="card-container-fame">
        <v-row justify="center" class="mt-12">
            <v-col>
                <p class="learn-label mb-0">Learn more</p>
                <p class="learn-label">how it works</p>
            </v-col>
        </v-row>
        <v-row justify="center">
            <img height="60" class="social-btn mr-4" :src="require('@/assets/img/social/medium.svg')" @click="openLink('https://blog.overnight.fi/the-in-liquidity-pools-why-liquidity-pairs-with-usd-are-more-capital-efficient-f4e45298d7ff')">
            <img height="60" class="social-btn" :src="require('@/assets/img/social/youtube.svg')" @click="openLink('https://www.youtube.com/watch?v=ocH7iUvUdos')">
        </v-row>
    </v-container>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "FameSocialCard",
    props: {
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
    .learn-label {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0.02em;
    }
}

@media only screen and (min-width: 1400px) {
    .learn-label {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.04em;
    }
}

.card-container-fame {
    z-index: 100 !important;
    border: 1px solid #E5E7EA !important;
    height: 100% !important;
    min-height: 300px !important;
}

.learn-label {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #1C95E7;
}

.social-btn {
    cursor: pointer !important;
}

</style>
