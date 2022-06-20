<template>
    <div class="page-container overflow-hidden">
        <v-row class="container-row d-flex overflow-hidden">
            <v-col class="text-col" cols="12">
                <v-row class="title-row mb-10">
                    <label class="accent-text">USD</label><label class="title-text-plus">+</label>
                    <label class="title-text mb-0">&nbsp;use cases</label>
                </v-row>

                <v-row class="d-flex justify-space-between" :class="isMobile ? 'flex-column' : 'flex-row'">
                    <v-col :cols="isMobile ? 12 : (isTablet ? 6 : 3)">
                        <UseCard
                                title="Cash management"
                                desc="Park your stables in USD+, and watch your balance grow in your wallet overnight. No staking required"
                                btnLabel="Mint"
                                link="https://app.overnight.fi/"/>
                    </v-col>

                    <v-col :cols="isMobile ? 12 : (isTablet ? 6 : 3)">
                        <UseCard
                                title="Liquidity Pools"
                                desc="Provide liquidity into USD+ pools, and get USD+ yield on top of LP fees and rewards"
                                btnLabel="Deposit"
                                link="https://app.overnight.fi/farm"/>
                    </v-col>

                    <v-col :cols="isMobile ? 12 : (isTablet ? 6 : 3)">
                        <UseCard
                                title="Passive token appreciation"
                                desc="Pair your token with USD+ and passively grow your token’s price thanks to USD+ yield bearing nature"
                                btnLabel="Join hall of fame"
                                :isNew="true"
                                :callbackFunc="openModal"/>
                    </v-col>

                    <v-col :cols="isMobile ? 12 : (isTablet ? 6 : 3)">
                        <UseCard
                                title="Leveraged Yield"
                                desc="Get 6x-9x USD+ yield by pledging USD+ as collateral with minimum risk of liquidation"
                                btnLabel="Coming Soon"
                                :disabled="true"/>
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

import UseCard from "@/component/pages/use_cases/component/UseCard";
import FamePartner from "@/component/pages/use_cases/component/FamePartner";
import FameSocialCard from "@/component/pages/use_cases/component/FameSocialCard";
export default {
    name: "UseCasesPage",

    components: {
        FameSocialCard,
        FamePartner,
        UseCard
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
    }),

    computed: {
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
        }
    }
}
</script>

<style scoped>

/* mobile */
@media only screen and (max-width: 1400px) {
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
}

@media only screen and (min-width: 1400px) {
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
}

.page-container {
    background: #FFFFFF !important;
}

.container-row {
    width: 90% !important;
}

.container-row {
    margin-left: 5% !important;
    margin-top: 5% !important;
    margin-bottom: 15% !important;
}

.title-row {
    z-index: 100;
    position: relative;

    border-bottom: 1px solid #DEE1E5;
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
</style>
