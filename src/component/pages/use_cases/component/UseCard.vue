<template>
    <v-container class="card-container">
        <v-row class="mt-4 mb-4 mr-4 new-row" justify="end">
            <label class="new-label" v-if="isNew">NEW</label>
        </v-row>

        <v-row class="mt-12 mb-8 title-row" justify="center">
            <label class="title-label">{{ title }}</label>
        </v-row>

        <v-row class="mb-12 desc-row" justify="center">
            <label class="desc-label mx-8">{{ desc }}</label>
        </v-row>

        <v-row class="mb-12" justify="center">
            <v-btn
                    :disabled="disabled"
                    class="action-btn"
                    :class="disabled ? 'disabled-btn' : ''"
                    @click="link ? openLink(link) : callbackFunc()">
                {{ btnLabel }}
            </v-btn>
        </v-row>
    </v-container>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "UseCard",
    props: {
        title: {
            type: String,
            default: '',
        },

        desc: {
            type: String,
            default: '',
        },

        link: {
            type: String,
            default: null,
        },

        btnLabel: {
            type: String,
            default: null,
        },

        disabled: {
            type: Boolean,
            default: false,
        },

        isNew: {
            type: Boolean,
            default: false,
        },

        callbackFunc: {
            type: Function,
            default: function () {
            }
        }
    },

    computed: {
        ...mapGetters([]),
    },

    data: () => ({
    }),
    
    methods: {
        openLink(url) {
            if (url) {
                window.open(url, '_blank').focus();
            }
        },
    },
}
</script>

<style scoped>

/* mobile */
@media only screen and (max-width: 1400px) {

    .title-label {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.02em;
    }

    .new-label {
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

    .action-btn {
        height: 40px;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 16px !important;
        line-height: 18px !important;
    }
}

@media only screen and (min-width: 1400px) {

    .title-label {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.04em;
    }

    .new-label {
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

    .action-btn {
        width: 250px;
        height: 50px;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 18px !important;
        line-height: 20px !important;
    }

    .card-container {
        width: 100% !important;
    }
}

.card-container {
    z-index: 100 !important;
    background: #F5F5F5;
    border-radius: 0;
    height: 100% !important;
}

.desc-row {
    height: 30% !important;
}

.title-row {
    height: 8% !important;
}

.new-row {
    height: 2%;
}

.action-btn {
    border-radius: 0;
    background: linear-gradient(91.26deg, #28A0F0 0%, rgba(6, 120, 196, 0.9917) 100%);
    font-family: 'Roboto', sans-serif !important;
    font-feature-settings: 'liga' off !important;
    color: #FFFFFF !important;
    box-shadow: none !important;
}

.disabled-btn {
    background: #D7DADF !important;
}

.title-label {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    text-align: center;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #000000;
}

.new-label {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #1C95E7;
}

.desc-label {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    color: #000000;
}

</style>
