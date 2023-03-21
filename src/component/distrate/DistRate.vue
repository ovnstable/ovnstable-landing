<template>
    <v-container class="main">
        <div class="line-dist-container">
            <template v-if="chartData">
                <LineChartDist :data="chartData"/>
            </template>
        </div>
    </v-container>
</template>

<script>

import LineChartDist from "./chart/LineChartDist";

export default {
    name: 'DistRate',

    components: {
        LineChartDist
    },

    props: {
        network: {
            type: String,
            default: 'polygon'
        }
    },

    data: () => ({
        chartData: [],
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
        network: function (newVal, oldVal) {
            this.getDistRateData();
        },
    },

    created() {
        this.getDistRateData();
    },

    methods: {

        fillData(value) {
            let labels = [];
            let ovnDist = [];
            let normalDist = [];

            for (let i = 0; i < value.length; i++) {
                let element = value[i];
                labels.push(element.label)
                ovnDist.push(parseFloat(element.ovnDist).toFixed(2))
                normalDist.push(parseFloat(element.normalDist).toFixed(2))
            }

            this.chartData = {
                labels: labels,
                datasets: [{
                    type: 'line',
                    fill: false,
                    label: 'Normal Distribution',
                    data: normalDist,
                    order: 1,
                }, {
                    type: 'column',
                    order: 2,
                    label: 'Overnight rate distribution',
                    data: ovnDist,
                }],
            };
        },

        getDistRateData() {
            let fetchOptions = {
                headers: {
                    "Access-Control-Allow-Origin": this.widgetApi
                }
            };

            fetch(this.widgetApi + '/widget/distribution-rate', fetchOptions)
                .then(value => value.json())
                .then(value => {
                    this.fillData(value)
                    this.loading = false;
                }).catch(reason => {
                console.log('Error get data: ' + reason)
                this.loading = false;
            })
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

.line-dist-container {
    background: #111E37 !important;
    border: 1px solid #4C586D !important;
    box-sizing: border-box;
}

</style>
