<template>
    <div class="main-card-container">
        <v-row class="title-row">
            <v-spacer></v-spacer>
            <label class="card-title-label">{{ title }}</label>
            <v-spacer></v-spacer>
        </v-row>

        <v-row class="doughnut-row">
            <v-spacer></v-spacer>
            <vc-donut
                    background="none"
                    :size="isMobile ? 200 : 250" unit="px"
                    :sections="sections"
                    :start-angle="0" :auto-adjust-text-size="false">
            </vc-donut>
            <v-spacer></v-spacer>
        </v-row>

        <v-container class="stablecoin-row-list">
            <v-row class="stablecoin-row" dense>
                <v-col wrap cols="6" align="start" v-for="item in data" v-bind:key="item.label">
                    <span class="img-label-col" @click="openTokenOnScan(item.link)">
                        <v-img class="currency-icon" :src="item.logo"/>
                        <label class="stablecoin-label">{{ item.label }}</label>
                        <label class="stablecoin-label-percent">{{ $utils.formatMoneyComma(getPercent(item, data), 1) }}%</label>
                    </span>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>

/* eslint-disable no-unused-vars,no-undef */

export default {
    name: "StablecoinsCard",

    props: {
        title: {
            type: String,
            default: null,
        },

        data: {
            type: Array,
            default: null,
        },
    },

    components: {},

    data: () => ({
        sections: [],
    }),

    watch: {
        data: function (newVal, oldVal) {
            this.updateSectionsData();
        },
    },

    computed: {
        isMobile() {
            return window.innerWidth <= 1400;
        },
    },

    mounted() {
        this.updateSectionsData();
    },

    created() {
        this.updateSectionsData();
    },

    methods: {
        getPercent(item, data) {
            let sum = data.map(dataItem => dataItem.value).reduce((prev, next) => prev + next);

            return (item.value * 100 / sum) - 0;
        },

        updateSectionsData() {
            this.sections = [];

            this.data.forEach(item => {
                this.sections.push(
                    {
                        color: item.color,
                        label: item.label,
                        value: this.getPercent(item, this.data),
                    }
                )
            });
        },

        openTokenOnScan(hash) {
            if (hash && hash !== '') {
                window.open("https://polygonscan.com/token/" + hash, '_blank').focus();
            }
        }
    }
}
</script>

<style scoped>

/* mobile */
@media only screen and (max-width: 1400px) {
    .card-title-label {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.02em;
    }

    .stablecoin-label, .stablecoin-label-percent {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
    }

    .currency-icon {
        width: 24px;
        height: 24px;
    }

    .main-card-container {
        min-height: 430px !important;
        width: 344px !important;
    }

    .title-row {
        margin-top: 40px !important;
    }

    .stablecoin-row {
        margin-left: 25px;
    }
}

@media only screen and (min-width: 1400px) {
    .card-title-label {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.04em;
    }

    .stablecoin-label, .stablecoin-label-percent {
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 32px;
    }

    .currency-icon {
        width: 32px;
        height: 32px;
    }

    .main-card-container {
        min-height: 520px !important;
        width: 540px !important;
    }

    .title-row {
        margin-top: 60px !important;
    }

    .stablecoin-row {
        margin-left: 80px;
    }
}

.main-card-container {
    border: 1px solid #DEE1E5 !important;
    background: #FFFFFF !important;
}

.card-title-label {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #333333;
}

.stablecoin-label, .stablecoin-label-percent {
    font-family: 'Roboto', sans-serif;
    color: #333333;
    margin-left: 8px !important;
}

.stablecoin-label {
    cursor: pointer !important;
}

.doughnut-row {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
}

.stablecoin-row {
    margin-bottom: 20px !important;
}

.img-label-col {
    display: -webkit-inline-box;
}

.stablecoin-label:hover {
    text-decoration: underline !important;
}

</style>