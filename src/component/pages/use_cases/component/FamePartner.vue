<template>
    <v-container class="card-container-fame" @click="openPoolLink(data)">
        <v-row justify="center" class="mt-10 mb-8">
            <label class="tvl-label">${{ $utils.formatMoneyComma(data.tvl, 0).slice(0, -4) }}K</label>
        </v-row>

        <v-row justify="center" class="mb-8">
            <img height="40" :src="data.token0Icon">
            <img height="40" class="ml-n2" :src="data.token1Icon">
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
        data: {
            type: Object,
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
        openPoolLink(item) {

            let url;
            let platform = item.platform.toLowerCase();

            switch (platform){
                case 'quickswap':
                    url = 'https://info.quickswap.exchange/#/pair/'
                    break;
                case 'dystopia':
                    url = 'https://www.dystopia.exchange/liquidity/'
                    break;
                case 'meshswap':
                    url = 'https://meshswap.fi/exchange/pool/detail/'
                    break;
            }

            window.open(url + item.link, '_blank');
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

    cursor: pointer !important;
}

.tvl-label {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    line-height: 42px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #333333;
}

</style>
