<template>
    <img
            class="hovering-image"
            :src="picture"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            @click="openLink(link)"
    >
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "HoverImg",
    props: {
        link: {
            type: String,
            default: null,
        },

        img: {
            type: String,
            default: null,
        },

        hoverImg: {
            type: String,
            default: null,
        },
    },

    computed: {
        ...mapGetters([]),

        picture() {
            return this.hover ? this.hoverImg : this.img;
        }
    },

    data: () => ({
        hover: false,
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

.img-container {
    z-index: 100 !important;
}

.hovering-image {
    /*width: 100% !important;*/
    cursor: pointer !important;
}

</style>
