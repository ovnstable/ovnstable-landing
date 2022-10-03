<template>
    <div class="blog-page-container overflow-hidden">
        <v-row class="container-row d-flex overflow-auto">
            <v-col class="text-col" cols="12">
                <v-row class="mb-10" justify="center">
                    <label class="title-text mb-0">Subscribe on our <label class="accent-text">updates</label></label>
                </v-row>

                <v-row class="d-flex" :class="isMobile ? 'flex-column' : 'flex-row'" justify="center">
                    <v-col align-self="start" cols="3" v-for="item in blogCards" v-bind:key="blogCards.id">
                        <v-row class="mt-12 mb-2 ml-5 cards" justify="start">
                            <NewsCard :post-data="item"/>
                        </v-row>
                    </v-col>
                </v-row>

                <v-row justify="center mt-10">
                    <v-btn
                        text
                        class="blog-btn mt-12 px-15"
                        @click="openLink('https://wordpress.overnight.fi/')">
                        Go to our blog
                    </v-btn>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import NewsCard from "@/component/pages/blog/component/NewsCard";

export default {
    name: "BlogPage",

    components: {NewsCard},

    data: () => ({
        blogCards: [],
    }),

    computed: {
        isMobile() {
            return window.innerWidth <= 960;
        },
    },

    async created() {

        await fetch('https://wordpress.overnight.fi/wp-json/wp/v2/posts/?orderby=date&per_page=3', {})
            .then(value => value.json())
            .then(async value => {

                for (const post of value) {
                    let blogPost = {
                        id: post.id,
                        date: post.date,
                        title: post.title.rendered,
                        link: post.link
                    };
                    blogPost.imgLink = await this.getImgLink(blogPost.id);

                    this.blogCards.push(blogPost);
                }
            }).catch(reason => {
                console.log('Error get data: ' + reason);
            });
    },

    methods: {
        openLink(url) {
            window.open(url, '_blank').focus();
        },

        async getImgLink(id) {

            console.log("Img parent id: " + id)

            let result = null;

            await fetch('https://wordpress.overnight.fi/wp-json/wp/v2/media?media_type=image&parent=' + id, {})
                .then(value => value.json())
                .then(value => {
                    result = value[0].guid.rendered;
                }).catch(reason => {
                    console.log('Error get data: ' + reason);
                });

            return result;
        },
    },
}
</script>

<style>
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

    .blog-btn {
        height: 40px !important;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 16px !important;
        line-height: 18px !important;
    }
}

/* desktop */
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

    .blog-btn {
        height: 50px !important;
        font-style: normal !important;
        font-weight: 400 !important;
        font-size: 18px !important;
        line-height: 20px !important;
    }
}

.blog-page-container {
    background-image: url("../../../assets/background/img/blogPage_bg.svg");
    background-position: center;
    background-size: cover;
    background-color: rgba(28, 149, 231, 0.1);
    padding-top: 150px;
    height: 110vh;
}

.container-row {
    width: 100% !important;
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

.blog-btn {
    border: 1px solid #28A0F0;
    border-radius: 0;
    font-family: 'Roboto', sans-serif !important;
    letter-spacing: normal;
    font-feature-settings: 'liga' off !important;
    color: #28A0F0 !important;
    text-transform: none !important;
}

</style>