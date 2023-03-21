<template>
    <v-container class="main">
        <div class="line-apy-container">
            <template v-if="payoutsApyData">
                <LineChartApy :data="payoutsApyData" :network="network" :product="product" :address="address"/>
            </template>
        </div>
    </v-container>
</template>

<script>

import moment from "moment";
import LineChartApy from "./chart/LineChartApy";

export default {
    name: 'ApyRate',

    components: {
        LineChartApy
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
        payoutsApyData: [],
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
            this.getApyRateData();
        },

        network: function (newVal, oldVal) {
            this.getApyRateData();
        },

        address: function (newVal, oldVal) {
            this.getApyRateData();
        },
    },

    created() {
        this.getApyRateData();
    },

    methods: {

        fillData(value) {
            let widgetDataDictApy = {};
            let widgetDataApy = {
                labels: [],
                datasets: [
                    {
                        fill: false,
                        data: [],
                    }
                ]
            };

            [...value].reverse().forEach(item => {
                widgetDataDictApy[moment(item.payableDate).format('DD.MM.YYYY')] = parseFloat(item.annualizedYield ? item.annualizedYield : 0.0).toFixed(4);
            });

            for(let key in widgetDataDictApy) {
                widgetDataApy.labels.push(key);
                widgetDataApy.datasets[0].data.push(widgetDataDictApy[key]);
            }

            this.payoutsApyData = widgetDataApy;
        },

        fillDataEts(value) {
            let clientData = value.timeData;

            clientData.sort(
                function(o1,o2){
                    return moment(o1.date).isBefore(moment(o2.date)) ? -1 : moment(o1.date).isAfter(moment(o2.date)) ? 1 : 0;
                }
            );

            let widgetDataDict = {};
            let widgetData = {
                labels: [],
                datasets: [
                    {
                        fill: false,
                        data: [],
                    }
                ]
            };

            [...clientData].forEach(item => {
                widgetDataDict[moment(item.date).format('DD.MM.YYYY')] = parseFloat(item.apy ? item.apy : 0.0).toFixed(4);
            });

            for(let key in widgetDataDict) {
                widgetData.labels.push(key);
                widgetData.datasets[0].data.push(widgetDataDict[key]);
            }

            this.payoutsApyData = widgetData;
        },

        getApyRateData() {
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
                    this.loading = false;
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
                    this.loading = false;
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

.line-apy-container {
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(32, 81, 155, 0.12);
    border-radius: 12px;
    box-sizing: border-box;
}

</style>
