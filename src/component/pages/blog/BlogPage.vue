<template>
    <div class="blog-page-container overflow-hidden"  v-observe-visibility="visibilityChanged">
        <v-row class="justify-center overflow-hidden">
            <v-col :cols="isMobile ? 12 : 12" >
                <v-row :class="isMobile ? 'mb-0 mt-0 ml-5 mr-5' : 'mb-10'" class="justify-center">
                    <label class="title-text">Subscribe to our </label>
                    <label class="accent-text ml-2"> updates</label>
                </v-row>

                <v-row class="d-flex justify-center align-center" :class="isMobile ? 'flex-column' : 'flex-row'" justify="center">
                    <NewsCard class="ma-3" v-for="item in blogCards" v-bind:key="blogCards.id" :post-data="item"/>
                </v-row>

                <v-row :class="isMobile ? 'mt-0' : 'mt-5'" justify="center">
                    <v-btn
                        text
                        class="blog-btn mt-12 px-15"
                        @click="openLink('https://overnight.fi/blog/')">
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
            return window.innerWidth <= 1100;
        },
    },

    async created() {

        await fetch('https://overnight.fi/blog/wp-json/wp/v2/posts/?orderby=date&per_page=3', {})
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

            let result = null;

            await fetch('https://overnight.fi/blog/wp-json/wp/v2/media?media_type=image&parent=' + id, {})
                .then(value => value.json())
                .then(value => {
                    result = value[0]['source_url'];
                }).catch(reason => {
                    console.log('Error get data: ' + reason);
                });

            return result;
        },

        visibilityChanged (isVisible, entry) {
            if (isVisible) {
                this.isVisible = true;
            }
        }
    },
}
</script>

<style scoped>
/* mobile */
@media only screen and (max-width: 1400px) {
    .blog-page-container {
        padding-top: 40px;
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
    .blog-page-container {
        padding-top: 150px;
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
    margin-bottom: 10% !important;
}

</style>