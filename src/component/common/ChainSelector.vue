<template>
    <div class="chain-selector-container" :class="mode === 'light' ? 'container-light' : 'container-dark'">
        <v-btn
                outlined
                class="chain-btn ma-2"
                @click="clickTab('polygon')" v-bind:class="activeTabPolygon">
            <img class="chain-img" :src="require('@/assets/img/network/polygon.svg')">
        </v-btn>

        <v-btn
                outlined
                class="chain-btn ma-2"
                @click="clickTab('bsc')" v-bind:class="activeTabBsc">
            <img class="chain-img" :src="require('@/assets/img/network/bsc.svg')">
        </v-btn>

        <v-btn
                outlined
                class="chain-btn ma-2"
                @click="clickTab('avax')" v-bind:class="activeTabAvax">
            <img class="chain-img" :src="require('@/assets/img/network/avax.svg')">
        </v-btn>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "ChainSelector",

    props: {
        mode: {
            type: String,
            default: 'light',
        },

        callbackFunc: {
            type: Function,
            default: function () {
            }
        }
    },

    computed: {
        ...mapGetters([]),

        isMobile() {
            return window.innerWidth <= 960;
        },

        activeTabPolygon: function () {
            return {
                'tab-button': (this.chain === 'polygon' && this.mode === 'light'),
                'tab-button-dark': (this.chain === 'polygon' && this.mode === 'dark'),
                'tab-button-in-active': this.chain !== 'polygon',
            }
        },

        activeTabBsc: function () {
            return {
                'tab-button': (this.chain === 'bsc' && this.mode === 'light'),
                'tab-button-dark': (this.chain === 'bsc' && this.mode === 'dark'),
                'tab-button-in-active': this.chain !== 'bsc',
            }
        },

        activeTabAvax: function () {
            return {
                'tab-button': (this.chain === 'avax' && this.mode === 'light'),
                'tab-button-dark': (this.chain === 'avax' && this.mode === 'dark'),
                'tab-button-in-active': this.chain !== 'avax',
            }
        },
    },

    data: () => ({
        chain: 'polygon',
    }),
    
    methods: {
        clickTab(chain) {
            this.chain = chain;
            this.callbackFunc(chain);
        },
    },
}
</script>

<style scoped>

/* mobile */
@media only screen and (max-width: 1400px) {
    .chain-img {
        width: 24px !important;
        height: 24px !important;
    }

    .chain-btn {
        min-width: 32px !important;
        width: 32px !important;
        height: 32px !important;
    }
}

@media only screen and (min-width: 1400px) {
    .chain-img {
        width: 32px !important;
        height: 32px !important;
    }

    .chain-btn {
        min-width: 44px !important;
        width: 44px !important;
        height: 44px !important;
    }
}

.chain-selector-container {
    border-radius: 4px;
}

.container-light {
    background: #FFFFFF;
    border: 1px solid #DEE1E5;
}

.container-dark {
    background: #0E1529;
    border: 1px solid #4C586D;
}

.chain-btn {
    color: transparent !important;
}

.tab-button {
    background-color: #E5E7EA !important;
}

.tab-button-dark {
    background-color: #29323E !important;
}
</style>
