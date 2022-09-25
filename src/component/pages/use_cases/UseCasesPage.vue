<template>
    <div class="page-container overflow-hidden">
        <v-row class="container-row-cases d-flex overflow-hidden justify-center">
            <v-col class="text-col" cols="12">
                <v-row class="title-row mb-10 justify-center main-label" v-observe-visibility="visibilityChanged">
                    <label class="accent-text">USD</label><label class="title-text-plus">+</label>
                    <label class="title-text mb-0">&nbsp;use cases</label>
                </v-row>

                <v-row class="d-flex justify-space-around card-container-row" :class="isMobile ? 'flex-column' : 'flex-row'">
                    <v-col :cols="isMobile ? 12 : (isTablet ? 6 : 4)">
                        <v-container class="card-container">
                            <v-row class="mt-12 mb-8 title-row ml-5" justify="start">
                                <label class="title-label">Cash management</label>
                            </v-row>

                            <v-row class="mb-12 desc-row" justify="start">
                                <label class="desc-label mx-8">Do nothing and earn yield in stables on your stables right in the wallet via daily rebase</label>
                            </v-row>
                        </v-container>
                    </v-col>

                    <v-col :cols="isMobile ? 12 : (isTablet ? 6 : 4)">
                        <v-container class="card-container">
                            <v-row class="mt-12 mb-8 title-row ml-5" justify="left">
                                <label class="title-label">Liquidity Pools in dexes</label>
                            </v-row>

                            <v-row class="mb-12 desc-row" justify="start">
                                <label class="desc-label mx-8">Get fees, rewards and yield on the USD+ pairs in pools compatibe with Uni V2, Curve and Balancer</label>
                            </v-row>
                        </v-container>
                    </v-col>

                    <v-col :cols="isMobile ? 12 : (isTablet ? 6 : 4)">
                        <v-container class="card-container">
                            <v-row class="mt-12 mb-8 title-row ml-5" justify="left">
                                <label class="title-label">Treasury liquidity in pools</label>
                            </v-row>

                            <v-row class="mb-12 desc-row" justify="start">
                                <ul class="desc-label mx-8">
                                    <li class="list-desc">Earn yield on projects’ own stablecoin liquidity kept in liquidity pools;</li>
                                    <li class="list-desc">Сreate appreciation pressure on the project's token;</li>
                                </ul>
                                <label class="link mx-8 mt-6" @click="openModal(showHall)">How it works</label>
                            </v-row>
                        </v-container>
                    </v-col>

                    <v-col :cols="isMobile ? 12 : (isTablet ? 6 : 6)">
                        <v-container class="card-container second-row">
                            <v-row class="mt-12 mb-8 title-row ml-5" justify="space-between">
                                <label class="title-label">Yield on collateral</label>
                                <label class="in-development mr-10 mb-5" >In development</label>
                            </v-row>

                            <v-row class="mb-12 desc-row" justify="start">
                                <label class="desc-label mx-8">Pledge USD+ as collateral and earn yield, potentially, exceeding the borrowing rate</label>
                            </v-row>
                        </v-container>
                    </v-col>
                    <v-col :cols="isMobile ? 12 : (isTablet ? 6 : 6)">
                        <v-container class="card-container second-row last-desc">
                            <v-row class="mt-12 mb-8 title-row ml-5" justify="space-between">
                                <label class="title-label">Yield on CEX liquidity</label>
                                <label class="in-development mr-10 mb-5">In development</label>
                            </v-row>

                            <v-row class="mb-16 desc-row" justify="start">
                                <label class="desc-label mx-8">Earn DeFi yield on stablecoin liquidity kept in USD+</label>
                            </v-row>
                        </v-container>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-dialog v-model="showHall" class="hall-dialog" fullscreen>
            <v-card>
                <v-toolbar class="container_header" flat>
                    <v-btn icon class="ml-auto" @click="showHall = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-card-text>
                    <v-row class="title-row-unbordered mb-10" justify="center">
                        <label class="accent-text">USD</label><label class="title-text-plus">+</label>
                        <label class="title-text mb-0">&nbsp;hall of fame</label>
                    </v-row>

                    <v-row>
                        <v-col :cols="isTablet ? 12 : 3">
                            <FamePartner
                                    :data="pools[0][0]"
                                    logo-link="sphere.svg"
                                    partner-link="https://www.sphere.finance/"
                            />
                        </v-col>
                        <v-col :cols="isTablet ? 12 : 3">
                            <FamePartner
                                    :data="pools[1][0]"
                                    logo-link="parrotly.svg"
                                    partner-link="https://parrotly.finance/"
                            />
                        </v-col>
                        <v-col :cols="isTablet ? 12 : 3">
                            <FamePartner
                                    :data="pools[2][0]"
                                    logo-link="tetu.svg"
                                    partner-link="https://tetu.io/"
                            />
                        </v-col>
                        <v-col :cols="isTablet ? 12 : 3">
                            <FamePartner
                                    :data="pools[3][0]"
                                    logo-link="otterclam.svg"
                                    partner-link="https://www.otterclam.finance/"
                            />
                        </v-col>

                        <v-col :cols="isTablet ? 12 : 3">
                            <FameSocialCard/>
                        </v-col>
                    </v-row>

                    <v-row class="mb-10" justify="center">
                        <label class="dialog-sub-text">Do you want to increase your token?</label>
                    </v-row>

                    <v-row class="mb-10" justify="center">
                        <v-btn class="contact-discord-btn" @click="openLink('https://discord.gg/UYYw68N7zS')">
                            CONTACT US
                            <img height="42" :src="require('@/assets/img/social/discord_btn.svg')">
                        </v-btn>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>

import FamePartner from "@/component/pages/use_cases/component/FamePartner";
import FameSocialCard from "@/component/pages/use_cases/component/FameSocialCard";
import {mapGetters} from "vuex";
export default {
    name: "UseCasesPage",

    components: {
        FameSocialCard,
        FamePartner,
    },

    props: {
        inDevelopment: {
            type: Boolean,
            default: false,
        },
    },

    data: () => ({
        showHall: false,

        poolsAddresses: [
            '0xb8e91631f348dd1f47cb46f162df458a556c6f1e',
            '0x143b882e58fd8c543da98c7d84063a5ae34925da',
            '0x5a272ad79cbd3c874879e3fec5753c2127f77583',
            '0x291e289c39cbaf5ee158028d086d76ffa141cfda'
        ],

        pools: [],

        isVisible: false,
    }),

    computed: {
        ...mapGetters([]),

        isMobile() {
            return window.innerWidth <= 960;
        },

        isTablet() {
            return window.innerWidth <= 1200;
        },
    },

    created() {
        this.getPoolsData();
    },

    methods: {
        openModal() {
            this.showHall = true;
        },

        openLink(url) {
            if (url) {
                window.open(url, '_blank').focus();
            }
        },

        async getPoolsData() {

            for (const item of this.poolsAddresses) {

                let poolInfo = await this.getPoolInfo(item);
                this.pools.push(poolInfo);
            }
        },

        async getPoolInfo(address) {
            let fetchOptions = {
                headers: {
                    "Access-Control-Allow-Origin": process.env.VUE_APP_API_URL
                }
            };

            let result = [];

            await fetch(process.env.VUE_APP_API_URL + '/pools/' + address, fetchOptions)
                .then(value => value.json())
                .then(value => {
                    let token0Icon;
                    let token1Icon;

                    let tokenNames = value.id.name.split('/');

                    try {
                        token0Icon = require('@/assets/img/currency/pools/' + tokenNames[0] + '.svg');
                    } catch (e) {
                        console.error("Error while getting coin icon")
                        token0Icon = require('@/assets/img/currency/pools/undefined.svg');
                    }

                    try {
                        token1Icon = require('@/assets/img/currency/pools/' + tokenNames[1] + '.svg');
                    } catch (e) {
                        console.error("Error while getting coin icon")
                        token1Icon = require('@/assets/img/currency/pools/undefined.svg');
                    }

                    result.push(
                        {
                            platform: value.platform,
                            name: value.id.name,
                            link: value.id.address,
                            tvl: value.tvl,
                            token0Icon: token0Icon,
                            token1Icon: token1Icon,
                        }
                    )
                }).catch(reason => {
                    console.log('Error get data: ' + reason);
                    this.loading = false;
                })

            return result;
        },

        visibilityChanged (isVisible, entry) {
            if (isVisible) {
                this.isVisible = true;
            }
        }
    }
}
</script>

<style scoped>

/* mobile */
@media only screen and (max-width: 1400px) {
    .page-container {
        width: 100%;
        height: 140vh;
    }

    .main-label {
        margin-bottom: 0 !important;
    }

    .title-text {
        font-style: normal;
        font-weight: 300;
        font-size: 30px;
        line-height: 36px;
    }

    .accent-text {
        font-style: normal;
        font-weight: 500;
        font-size: 34px;
        line-height: 38px;
    }

    .title-text-plus {
        font-style: normal;
        font-weight: 300;
        font-size: 30px;
        line-height: 36px;
    }

    .dialog-sub-text {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
    }

    .contact-discord-btn {
        height: 40px !important;
        width: 200px !important;

        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 16px !important;
        line-height: 18px !important;
    }

    .title-label {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.02em;
    }

    .desc-label {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
    }

    .card-container {
        height: 254px;
    }

    .second-row {
        height: 100%;
    }

    .card-container-row {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0 !important;
    }

    .last-desc {
        margin-bottom: 100px !important;
    }
}

@media only screen and (min-width: 1400px) {
    .page-container {
        min-height: 100vh;
    }

    .title-text {
        font-style: normal;
        font-weight: 300;
        font-size: 60px;
        line-height: 80px;
    }

    .accent-text {
        font-style: normal;
        font-weight: 500;
        font-size: 70px;
        line-height: 80px;
    }

    .title-text-plus {
        font-style: normal;
        font-weight: 300;
        font-size: 60px;
        line-height: 80px;
    }

    .dialog-sub-text {
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 36px;
    }

    .contact-discord-btn {
        height: 50px !important;
        width: 250px !important;

        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 18px !important;
        line-height: 20px !important;
    }
    .title-label {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.04em;
    }

    .desc-label {
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 32px;
    }

    .card-container {
        width: 100% !important;
        margin-top: 20px;
    }

    .link {
        font-size: 20px;
        line-height: 32px;
    }

    .in-development {
        font-size: 20px;
        line-height: 32px;
    }

    .card-container-row {
        margin-left: 30px;
        margin-right: 30px;
    }
}

.page-container {
    background-image: url("../../../assets/background/img/cases_bg_lines.svg"), radial-gradient(at 50% 100%, rgba(28, 149, 231, 0.12) 0%, rgba(28, 149, 231, 0) 74.72%);
    background-position: center;
    background-size: cover;
}

.title-row {
    z-index: 100;
    position: relative;
}

.title-row-unbordered {
    z-index: 100;
    position: relative;
}

.title-text {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    color: #333333;
}

.accent-text {
    font-family: 'Cormorant', sans-serif;
    text-transform: uppercase;
    background: linear-gradient(91.26deg, #28A0F0 0%, rgba(6, 120, 196, 0.9917) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}

.title-text-plus {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;

    background: linear-gradient(91.26deg, #28A0F0 0%, rgba(6, 120, 196, 0.9917) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}

.hall-dialog {
    z-index: 10000 !important;
}

.dialog-sub-text {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #333333;
}

.contact-discord-btn {
    border-radius: 0 !important;
    background: linear-gradient(91.26deg, #28A0F0 0%, rgba(6, 120, 196, 0.9917) 100%);
    box-shadow: none !important;

    font-family: 'Roboto', sans-serif !important;
    font-feature-settings: 'liga' off !important;
    color: #FFFFFF !important;
}

.card-container {
    z-index: 100 !important;
    background: #FFFFFF;
    border-radius: 20px;
    height: 100%;
    text-align: left;

    box-shadow: 0 4px 5px 1px rgba(32, 81, 155, 0.12);
}

.desc-row {
    height: 30% !important;
}

.title-row {
    height: 8% !important;
}

.title-label {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #000000;
}

.desc-label {
    font-family: 'Roboto', sans-serif;
    color: #000000;
}

.link {
    list-style: none;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    color: #1C95E7;
    cursor: pointer;
}

.in-development {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 300;
    text-transform: uppercase;
    color: #ADB3BD;
}

</style>
