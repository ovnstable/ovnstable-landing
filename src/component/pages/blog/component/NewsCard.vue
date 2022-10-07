<template>
    <v-container class="news-card-container" @click="openLink(postData.link)">
        <v-col align-self="start" cols="12" class="content-col">
            <v-row justify="start">
                <img class="post-bg-img" :src="postData.imgLink">
            </v-row>

            <v-row justify="start">
                <label class="post-date mx-8 mt-5 mb-2">{{ getDate(postData.date) }}</label>
            </v-row>

            <v-row justify="start">
                <label class="news-title mx-8 mb-8">{{ postData.title }}</label>
            </v-row>
        </v-col>
    </v-container>
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

        openLink(url) {
            window.open(url, '_blank').focus();
        },

        getDate(date) {
            try {
                return this.$moment.utc(date).format("DD MMMM YY");
            } catch (e) {
                return '';
            }
        },
    }
}
</script>

<style scoped>
/* mobile */
@media only screen and (max-width: 960px) {
    .news-card-container {
        max-width: 80% !important;
    }

    .news-title {
        font-weight: 400;
        font-size: 20px;
        line-height: 32px;
    }

    .post-date {
        font-size: 12px;
        line-height: 20px;
        font-style: normal;
    }
}

/* tablet */
@media only screen and (min-width: 960px) and (max-width: 1400px) {
    .news-card-container {
        max-width: 40% !important;
    }

    .news-title {
        font-weight: 400;
        font-size: 20px;
        line-height: 32px;
    }

    .post-date {
        font-size: 12px;
        line-height: 20px;
        font-style: normal;
    }
}

/* full */
@media only screen and (min-width: 1400px) {
    .news-card-container {
        max-width: 30% !important;
    }

    .news-title {
        font-weight: 400;
        font-size: 24px;
        line-height: 36px;
    }

    .post-date {
        font-size: 14px;
        line-height: 24px;
        font-style: normal;
    }
}

.news-card-container {
    background-color: #FFFFFF;
    text-align: start;
    border-radius: 3px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.12) !important;
}

.news-card-container:hover {
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12) !important;
}

.post-bg-img {
    border-radius: 3px 3px 0 0;
    width: 100%;
    height: auto !important;
    object-fit: cover;
}

.news-title {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: #29323E;
}

.post-date {
    color: #707A8B;
    font-family: "Roboto", sans-serif;
    font-style: normal;
}

.news-card-container {
    cursor: pointer !important;
}

.content-col {
    padding: 0 !important;
}
</style>