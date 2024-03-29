<template>
    <v-container class="apy-chart-container">
        <v-row class="chart-header-row mb-0">
            <v-col cols="12">
                <v-row class="header-text-row">
                    <label class="chart-title">
                        {{ avgApy ? (product === 'usd+' ? (isMobile ? 'USD+ APY' : 'Average USD+ APY') : (isMobile ? (etsName + ' APY') : ('ETS: ' + etsName + ' daily net APY'))) : '' }}
                    </label>

                    <v-spacer></v-spacer>

                    <label class="chart-title-apy">
                        {{ (avgApy && avgApy.value) ? ($utils.formatMoneyComma(avgApy.value, 1)) + '%' : '' }}
                    </label>
                </v-row>
                <v-row class="header-text-sub-row">
                    <label class="chart-sub-title-apy">
                        on&nbsp;
                    </label>
                    <label class="chart-sub-title-apy chain-label">
                        {{ getChainName(network) }}
                    </label>

                    <v-spacer></v-spacer>

                    <label class="chart-sub-title-apy">
                        {{ (avgApy && avgApy.date) ? 'from ' + avgApy.date : '' }}
                    </label>
                </v-row>
            </v-col>
        </v-row>

        <div class="chart-row" :id="'line-chart-apy-' + (product === 'usd+' ? 'usd-plus' : 'ets')"></div>

        <v-row class="zoom-row">
            <v-spacer></v-spacer>
            <v-btn
                    text
                    :id="'week-zoom-btn-apy-' + (product === 'usd+' ? 'usd-plus' : 'ets')"
                    class="zoom-btn"
                    dark
                    @click="zoomChart('week')"
            >
                <label>Week</label>
            </v-btn>
            <v-btn
                    text
                    :id="'month-zoom-btn-apy-' + (product === 'usd+' ? 'usd-plus' : 'ets')"
                    class="zoom-btn"
                    dark
                    @click="zoomChart('month')"
            >
                Month
            </v-btn>
            <v-btn
                    text
                    :id="'all-zoom-btn-apy-' + (product === 'usd+' ? 'usd-plus' : 'ets')"
                    class="zoom-btn"
                    dark
                    @click="zoomChart('all')"
            >
                All
            </v-btn>
            <v-spacer v-if="isMobile"></v-spacer>
        </v-row>
    </v-container>
</template>

<script>
/* eslint-disable no-unused-vars,no-undef */

import {mapActions, mapGetters, mapMutations} from "vuex";

import ApexCharts from 'apexcharts'
import moment from "moment";

export default {
    name: "LineChartApy",

    props: {
        data: {
            type: Object,
            default: null,
        },

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

    watch: {
        data: function (newVal, oldVal) {
            this.redraw();
        },

        product: function (newVal, oldVal) {
            this.zoomChart("week");
        },

        network: function (newVal, oldVal) {
            this.zoomChart("week");
        },

        address: function (newVal, oldVal) {
            this.zoomChart("week");
        },
    },

    components: {},

    data: () => ({
        zoom: "week",
        slice: null,
        chart: null,

        avgApy: null,
    }),

    computed: {
        isMobile() {
            return window.innerWidth <= 960;
        },

        chainColor() {
            if (this.network === null || this.network === 'polygon') {
                return '#7B3FE4';
            } else if (this.network === 'arbitrum') {
                return '#29A0F0';
            } else if (this.network === 'bsc') {
                return '#F0B90B';
            } else if (this.network === 'op') {
                return '#FF0420';
            } else {
                /* TODO: add widget stub */
                return '';
            }
        },

        widgetApi() {
            if (this.network === null || this.network === 'polygon') {
                return process.env.VUE_APP_WIDGET_API_URL_POLYGON;
            } else if (this.network === 'arbitrum') {
                return process.env.VUE_APP_WIDGET_API_URL_AR;
            } else if (this.network === 'bsc') {
                return process.env.VUE_APP_WIDGET_API_URL_BSC;
            } else if (this.network === 'op') {
                return process.env.VUE_APP_WIDGET_API_URL_OP;
            } else {
                /* TODO: add widget stub */
                return '';
            }
        },

        etsName() {
            switch (this.network) {
                case "polygon":
                    if (!this.address || this.address === '') {
                        return 'USD+/WMATIC';
                    } else {
                        switch (this.address) {
                            case "0x4b5e0af6AE8Ef52c304CD55f546342ca0d3050bf":
                                return 'USD+/WMATIC';
                            case "0xd52caB8AfC8ECd08b7CFa6D07e224a56F943e4c4":
                                return 'WMATIC/USDC';
                            case "0x719ee857Ae6cf85Cbe7284Bc45ad1f99dd5ff0dB":
                                return 'Moonstone';
                            default:
                                return '';
                        }
                    }
                case "bsc":
                    if (!this.address || this.address === '') {
                        return 'USD+/WBNB';
                    } else {
                        switch (this.address) {
                            case "0xbAAc6ED05b2fEb47ef04b63018A27d80cbeA10d1":
                                return 'USD+/WBNB';
                            case "0xc6eca7a3b863d720393DFc62494B6eaB22567D37":
                                return 'BUSD/WBNB';
                            default:
                                return '';
                        }
                    }
                case "op":
                    if (!this.address || this.address === '') {
                        return 'Ruby';
                    } else {
                        switch (this.address) {
                            case "0xA88F8c02eBdE678de623C6BCFC886De82e18ad00":
                                return 'Ruby';
                            default:
                                return '';
                        }
                    }
                default:
                    return '';
            }
        },
    },

    mounted() {
        this.redraw();
    },

    created() {
        this.zoomChart("week");
    },

    methods: {
        ...mapMutations([]),

        getChainName(s) {
            switch (s) {
                case 'op':
                    return 'optimism'
                default:
                    return s
            }
        },

        async zoomChart(zoom) {

            let fetchOptions = {
                headers: {
                    "Access-Control-Allow-Origin": this.widgetApi
                }
            };
            if (this.product === 'usd+') {
                await fetch(this.widgetApi + '/widget/avg-apy-info/' + zoom, fetchOptions)
                    .then(value => value.json())
                    .then(value => {
                        this.avgApy = value;
                        this.avgApy.date = moment(this.avgApy.date).format("DD MMM. ‘YY");
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

                fetch(this.widgetApi + '/hedge-strategies/' + contractAddress + '/avg-apy-info/' + zoom, fetchOptions)
                    .then(value => value.json())
                    .then(value => {
                        this.avgApy = value;
                        this.avgApy.date = moment(this.avgApy.date).format("DD MMM. ‘YY");
                    }).catch(reason => {
                    console.log('Error get data: ' + reason);
                })
            } else {
                /* TODO: add widget stub */
            }

            this.zoom = zoom;

            switch (zoom) {
                case "week":
                    this.slice = -7;
                    break;
                case "month":
                    this.slice = -30;
                    break;
                case "all":
                    this.slice = null;
                    break;
                default:
                    this.slice = null;
            }

            if (this.chart) {
                this.chart.destroy();
            }

            this.redraw();
        },

        changeZoomBtnStyle() {
            document.getElementById("week-zoom-btn-apy-" + (this.product === 'usd+' ? 'usd-plus' : 'ets')).classList.remove("selected");
            document.getElementById("month-zoom-btn-apy-" + (this.product === 'usd+' ? 'usd-plus' : 'ets')).classList.remove("selected");
            document.getElementById("all-zoom-btn-apy-" + (this.product === 'usd+' ? 'usd-plus' : 'ets')).classList.remove("selected");

            document.getElementById(this.zoom + "-zoom-btn-apy-" + (this.product === 'usd+' ? 'usd-plus' : 'ets')).classList.add("selected");
        },

        hexToRGB(hex, alpha) {
            let r = parseInt(hex.slice(1, 3), 16),
                g = parseInt(hex.slice(3, 5), 16),
                b = parseInt(hex.slice(5, 7), 16);

            if (alpha) {
                return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
            } else {
                return "rgb(" + r + ", " + g + ", " + b + ")";
            }
        },

        redraw() {
            if (this.chart) {
                this.chart.destroy();
            }

            this.changeZoomBtnStyle();

            let values = [];
            this.data.datasets[0].data.forEach(v => values.push(v));
            values = this.slice ? values.slice(this.slice) : values;

            let labels = [];
            this.data.labels.forEach(v => labels.push(v));
            labels = this.slice ? labels.slice(this.slice) : labels;

            let averageValue = this.avgApy.value;

            let maxValue;
            try {
                maxValue = Math.max.apply(Math, values);
                maxValue = Math.round(Math.ceil(maxValue / 10)) * 10;
            } catch (e) {
                maxValue = 50;
            }

            let options = {
                series: [{
                    name: "APY",
                    color: this.hexToRGB(this.chainColor, 0.1),
                    data: values
                }],

                labels: labels,

                chart: {
                    type: 'area',
                    height: 250,

                    sparkline: {
                        enabled: false,
                    },

                    zoom: {
                        enabled: false
                    },

                    background: '#FFFFFF',

                    toolbar: {
                        show: false
                    }
                },

                tooltip: {
                    enabled: true,
                },

                annotations: {
                    position: 'front',
                    yaxis: [{
                        y: averageValue,
                        strokeDashArray: 4,
                        borderColor: this.chainColor,
                        fillColor: this.chainColor,
                        label: {
                            show: true,
                        },
                        width: this.isMobile ? '0%' : '100%',
                    }]
                },

                grid: {
                    show: false,
                },

                dataLabels: {
                    enabled: false
                },

                stroke: {
                    curve: 'straight',
                    width: this.isMobile ? 1 : 2,
                    colors: [this.chainColor],
                },

                xaxis: {
                    type: 'category',

                    tickAmount: 7,
                    tickPlacement: 'between',

                    labels: {
                        show: false,
                    },

                    axisBorder: {
                        show: false,
                    },

                    axisTicks: {
                        show: false,
                    },
                },

                yaxis: {
                    opposite: false,

                    tickAmount: 5,
                    min: 0,
                    max: maxValue,

                    labels: {
                        show: false,
                    },
                },

                legend: {
                    horizontalAlign: 'left'
                },

                theme: {
                    mode: 'light',
                },

                fill: {
                    colors: [this.hexToRGB(this.chainColor, 0.1)],
                    opacity: 1,
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        type: "vertical",
                        shadeIntensity: 1,
                        gradientToColors: ['#FFFFFF'],
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100],
                        colorStops: []
                    },
                }
            };

            this.chart = new ApexCharts(document.querySelector("#line-chart-apy-" + (this.product === 'usd+' ? 'usd-plus' : 'ets')), options);
            this.chart.render();
        },
    }
}
</script>

<style>

/* mobile */
@media only screen and (max-width: 1400px) {
    .chart-title {
        font-style: normal;
        font-weight: 400 !important;
        font-size: 20px !important;
        line-height: 32px !important;
    }

    .chart-title-apy {
        font-style: normal;
        font-weight: 400 !important;
        font-size: 30px !important;
        line-height: 36px !important;
    }

    .chart-sub-title-apy {
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 22px;
    }
}

@media only screen and (max-width: 960px) {
    .zoom-row {
        margin-top: -35px !important;
    }
}

@media only screen and (min-width: 961px) {
    #all-zoom-btn-apy-usd-plus {
        margin-right: 40px !important;
    }

    #all-zoom-btn-apy-ets {
        margin-right: 40px !important;
    }

    .zoom-row {
        margin-top: -50px !important;
    }
}

@media only screen and (min-width: 1400px) {
    .chart-title {
        font-style: normal;
        font-weight: 400 !important;
        font-size: 24px !important;
        line-height: 36px !important;
    }

    .chart-title-apy {
        font-style: normal;
        font-weight: 400 !important;
        font-size: 40px !important;
        line-height: 44px !important;
    }

    .chart-sub-title-apy {
        font-style: normal;
        font-weight: 400 !important;
        font-size: 16px !important;
        line-height: 24px !important;
    }
}

.chart-title {
    font-family: 'Roboto', sans-serif;
    color: #29323E !important;
}

.chart-title-apy {
    font-family: 'Roboto', sans-serif;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #29323E !important;
}

.chart-sub-title-apy {
    font-family: 'Roboto', sans-serif;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #707A8B !important;
}

.zoom-row {
    height: 20px !important;
}

.chart-header-row {
    height: 150px !important;
}

.chart-row {
    height: 275px !important;
}

.apy-chart-container {
    height: 428px !important;
}

.yaxis-label {
    font-size: 12px !important;
    line-height: 12px !important;
    font-weight: 400;
    fill: rgba(255, 255, 255, 0.6) !important;
}

#line-chart-apy-usd-plus {
    overflow-x: hidden !important;
    overflow-y: hidden !important;
}

#line-chart-apy-ets {
    overflow-x: hidden !important;
    overflow-y: hidden !important;
}

.yaxis-label {
    display: none !important;
}

.zoom-btn {
    height: 32px !important;
    border: none !important;
    font-family: 'Roboto', sans-serif !important;
    font-style: normal !important;
    font-weight: 300 !important;
    font-size: 16px !important;
    line-height: 24px !important;
    color: #707A8B !important;
    letter-spacing: 0 !important;
}

.selected {
    color: #28A0F0 !important;
    background-color: rgba(95, 151, 255, 0.15);
    border-radius: 0 !important;
}

.zoom-btn:hover {
    border-radius: 0 !important;
}

.chart-header-row, .chart-row, .zoom-row {
    margin-left: 28px;
    margin-right: 28px;
}

.header-text-row, .header-text-sub-row {
    margin-left: 28px !important;
    margin-right: 28px !important;
}

.header-text-sub-row {
    padding-top: 4px !important;
}

.header-text-row {
    margin-top: 28px !important;
}

.chain-label {
    text-transform: capitalize !important;
}

</style>