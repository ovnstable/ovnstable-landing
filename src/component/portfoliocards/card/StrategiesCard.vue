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
                    :background="'#FFFFFF'"
                    :size="isMobile ? 200 : 320" unit="px" :thickness="16"
                    :sections="sections"
                    :start-angle="0" :auto-adjust-text-size="false">
                <p class="total-label">Total USD+</p>
                <p class="total-sum-label">{{ $utils.formatMoneyComma(totalUsdPlusValue, 2)}}</p>
            </vc-donut>
            <v-spacer></v-spacer>
        </v-row>

        <v-row>
            <v-container class="strategy-row-list">
                <v-row class="strategy-row" v-for="item in data" v-bind:key="item.label" dense>
                    <v-col cols="6">
                        <label class="strategy-title-label" @click="openInNewTab(item.link)">{{ item.label }}</label>
                    </v-col>

                    <v-col style="display: inline-flex" cols="6">
                        <v-progress-linear :value="getPercent(item, data)"
                                           :color="item.color"
                                           rounded
                                           class="strategy-progress"
                                           height="6">
                        </v-progress-linear>
                        <label class="strategy-label">{{ $utils.formatMoneyComma(getPercent(item, data), 1) }}%</label>
                    </v-col>
                </v-row>
            </v-container>
        </v-row>
    </div>
</template>

<script>

/* eslint-disable no-unused-vars,no-undef */

export default {
    name: "StrategiesCard",

    props: {
        title: {
            type: String,
            default: null,
        },

        data: {
            type: Array,
            default: null,
        },

        totalUsdPlusValue: {
            type: Number,
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

        openInNewTab(url) {
            if (url && url !== '') {
                window.open(url, '_blank').focus();
            }
        }
    }
}
</script>

<style>

/* mobile */
@media only screen and (max-width: 1400px) {
    .card-title-label {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.02em;
    }

    .total-label {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
    }

    .total-sum-label {
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 36px;
    }

    .strategy-label, .strategy-title-label {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
    }

    .strategy-progress {
        width: 80px !important;
        margin-right: 12px !important;
        margin-top: 12px !important;
    }

    .main-card-container {
        width: 344px !important;
    }

    .strategy-row {
        margin-left: 20px !important;
    }

    .title-row {
        margin-top: 40px !important;
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

    .total-label {
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 32px;
    }

    .total-sum-label {
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 42px;
    }

    .strategy-label, .strategy-title-label {
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 32px;
    }

    .strategy-progress {
        width: 155px !important;
        margin-right: 12px !important;
        margin-top: 12px !important;
    }

    .main-card-container {
        width: 540px !important;
    }

    .strategy-row {
        margin-left: 32px !important;
    }

    .title-row {
        margin-top: 60px !important;
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

.strategy-label, .strategy-title-label {
    font-family: 'Roboto', sans-serif;
    color: #333333;
}

.strategy-title-label {
    cursor: pointer !important;
}

.total-label {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    color: #333333;
}

.total-sum-label {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #333333;

    margin-top: 6px !important;
}

.doughnut-row {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
}

.strategy-row-list {
    margin-bottom: 32px !important;
}

.strategy-row {
    margin-bottom: 8px !important;
}

.strategy-progress > .v-progress-linear__buffer {
    background-color: #E5E7EA !important;
}

.strategy-progress > .v-progress-linear__determinate{
    left: 0 !important;
    right: auto !important;
}

.strategy-title-label:hover {
    text-decoration: underline !important;
}
</style>