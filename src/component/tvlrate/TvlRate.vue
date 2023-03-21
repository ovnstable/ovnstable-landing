<template>
    <v-container class="main">
        <div class="line-tvl-container">
            <template v-if="payoutsTvlData">
                <LineChartTvl :data="payoutsTvlData" :totalUsdPlusValue="totalUsdPlusValue" :product="product" :network="network" :address="address"/>
            </template>
        </div>
    </v-container>
</template>

<script>

import moment from "moment";
import LineChartTvl from "./chart/LineChartTvl";

export default {
    name: 'TvlRate',

    components: {
        LineChartTvl
    },

    props: {
        network: {
            type: String,
            default: 'polygon'
        },

        product: {
            type: String,
            default: 'usd+'
        },

        address: {
            type: String,
            default: ''
        }
    },

    data: () => ({
        payoutsTvlData: [],
        totalUsdPlusValue: null,
    }),

    computed: {
        widgetApi() {
            if (this.network === null || this.network === 'polygon') {
                return process.env.VUE_APP_WIDGET_API_URL_POLYGON;
            } else if (this.network === 'avax') {
                return process.env.VUE_APP_WIDGET_API_URL_AVAX;
            } else if (this.network === 'bsc') {
                return process.env.VUE_APP_WIDGET_API_URL_BSC;
            } else if (this.network === 'op') {
                return process.env.VUE_APP_WIDGET_API_URL_OP;
            } else {
                /* TODO: add widget stub */
                return '';
            }
        },
    },

    /* eslint-disable no-unused-vars,no-undef */
    watch: {
        product: function (newVal, oldVal) {
            this.getTvlRateData();
        },

        network: function (newVal, oldVal) {
            this.getTvlRateData();
        },

        address: function (newVal, oldVal) {
            this.getTvlRateData();
        },
    },

    created() {
        this.getTvlRateData();
    },

    methods: {

        getTotalTvl() {
            let fetchOptions = {
                headers: {
                    "Access-Control-Allow-Origin": this.widgetApi
                }
            };

            fetch(this.widgetApi + '/dapp/strategies', fetchOptions)
                .then(value => value.json())
                .then(value => {
                    let strategies = value;
                    strategies.sort((a,b) => b.netAssetValue - a.netAssetValue);

                    let result = [];

                    for (let i = 0; i < strategies.length; i++) {
                        let element = strategies[i];

                        result.push(
                            {
                                value: element.netAssetValue,
                            }
                        );
                    }

                    let sum = 0;
                    result.forEach(dataItem => {
                        sum += dataItem.value
                    });

                    this.totalUsdPlusValue = sum;
                }).catch(reason => {
                console.log('Error get data: ' + reason);
            })
        },

        fillData(value) {
            let widgetDataDictTvl = {};
            let widgetDataTvl = {
                labels: [],
                datasets: [
                    {
                        fill: false,
                        data: [],
                    }
                ]
            };

            [...value].reverse().forEach(item => {
                widgetDataDictTvl[moment(item.payableDate).format('DD.MM.YYYY')] = item.totalUsdPlus;
            });

            for(let key in widgetDataDictTvl) {
                widgetDataTvl.labels.push(key);
                widgetDataTvl.datasets[0].data.push(widgetDataDictTvl[key]);
            }

            this.payoutsTvlData = widgetDataTvl;
            this.getTotalTvl();
        },

        fillDataEts(value) {
            let wmaticStrategyData = value;
            let clientData = value.timeData;

            clientData.sort(
                function(o1,o2){
                    return moment(o1.date).isBefore(moment(o2.date)) ? -1 : moment(o1.date).isAfter(moment(o2.date)) ? 1 : 0;
                }
            );

            let widgetTvlDataDict = {};
            let widgetTvlData = {
                labels: [],
                datasets: [
                    {
                        fill: false,
                        data: [],
                    }
                ]
            };

            [...clientData].forEach(item => {
                widgetTvlDataDict[moment(item.date).format('DD.MM.YYYY')] = item.tvl;
            });

            for(let key in widgetTvlDataDict) {
                widgetTvlData.labels.push(key);
                widgetTvlData.datasets[0].data.push(widgetTvlDataDict[key]);
            }

            this.payoutsTvlData = widgetTvlData;

            if (wmaticStrategyData) {
                this.totalUsdPlusValue = wmaticStrategyData.tvl;
            }
        },

        getTvlRateData() {
            let fetchOptions = {
                headers: {
                    "Access-Control-Allow-Origin": this.widgetApi
                }
            };

            if (this.product === 'usd+') {
                fetch(this.widgetApi + '/dapp/payouts', fetchOptions)
                    .then(value => value.json())
                    .then(value => {
                        this.fillData(value);
                    }).catch(reason => {
                    console.log('Error get data: ' + reason);
                })
            } else if (this.product === 'ets') {

                let contractAddress;

                if (!this.address || this.address === '') {
                    if (this.network === 'polygon') {
                        contractAddress = '0x4b5e0af6AE8Ef52c304CD55f546342ca0d3050bf';
                    }

                    if (this.network === 'bsc') {
                        contractAddress = '0xbAAc6ED05b2fEb47ef04b63018A27d80cbeA10d1';
                    }
                } else {
                    contractAddress = this.address;
                }

                fetch(this.widgetApi + '/hedge-strategies/' + contractAddress, fetchOptions)
                    .then(value => value.json())
                    .then(value => {
                        this.fillDataEts(value);
                    }).catch(reason => {
                    console.log('Error get data: ' + reason);
                })
            } else {
                /* TODO: add widget stub */
            }
        },
    }
}
</script>

<style scoped>

/* mobile */
@media only screen and (max-width: 1400px) {
}

@media only screen and (min-width: 1400px) {
}

.main {
    font-style: normal;
    width: 100%;
    display: inline-block;

    background: none;
}

.line-tvl-container {
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(32, 81, 155, 0.12);
    border-radius: 12px;
    box-sizing: border-box;
}

</style>
