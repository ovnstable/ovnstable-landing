<template>
    <v-row class="main-page-container">
        <v-col class="text-col">
            <v-row class="title-row mb-15">
                <div>
                    <p class="title-text mb-0">How does <label class="accent-text">USD+</label> work?</p>
                </div>
            </v-row>
            <v-row class="sub-title-row mb-12">
                <p class="sub-title-text">USD+ includes 3 components:</p>
            </v-row>
            <v-row class="expansion-row">
                <!-- TODO: add expansion panels -->
            </v-row>
        </v-col>

        <v-col class="img-col">
            <img class="how-img" height="650" :src="require('@/assets/img/how_to_use.png')">
        </v-col>
    </v-row>
</template>

<script>

export default {
    name: "HowPage",

    components: {
    },

    data: () => ({

    }),

    computed: {
    },

    methods: {
    }
}
</script>

<style scoped>

.main-page-container {
    background: #FFFFFF !important;
}

.text-col {
    margin-left: 7% !important;
}

.img-col {
}

.how-img {
    margin-top: 306px !important;
    margin-bottom: 275px !important;
}

.title-row {
    margin-top: 231px !important;
}

.title-text {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 60px;
    line-height: 80px;
    text-transform: uppercase;
    color: #333333;
}

.sub-title-text {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 32px;
    color: #333333;
}

.accent-text {
    font-family: 'Cormorant', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 70px;
    line-height: 80px;
    text-transform: uppercase;

    background: linear-gradient(91.26deg, #28A0F0 0%, rgba(6, 120, 196, 0.9917) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}

</style>
