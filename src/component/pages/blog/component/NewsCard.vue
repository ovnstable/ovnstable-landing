<template>
    <v-card class="news-card-container mt-5 overflow-hidden ma-0">
        <div>
            <img class="post-bg-img" :src="postData.imgLink">
        </div>
        <v-row class="title-container">
            <label class="news-title pa-10">{{postData.title}}</label>
        </v-row>
        <v-row class="date-container pb-4">
            <label class="post-date ml-10 py-5">{{postData.date}}</label>
        </v-row>
    </v-card>
</template>

<script>
export default {
    name: "NewsCard",

    props: {

        postData: {
            type: Object,
            default: null,
        },
    },

    computed: {

    },

    created() {
    },

    methods: {

    }
}
</script>

<style>
/* mobile */
@media only screen and (max-width: 1400px) {

}

/* desktop */
@media only screen and (min-width: 1400px) {

}

.news-card-container {
    overflow: hidden;
    width: 527px !important;
    background-color: #FFFFFF;
    text-align: start;
    border-radius: 3px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.12) !important;
}

.post-bg-img {
    border-radius: 3px 3px 0 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.news-title {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    color: #29323E;
}

.date-container {
    border-top: 1px solid #bbbbbb;
}

.post-date {
    color: #707A8B;
}
</style>