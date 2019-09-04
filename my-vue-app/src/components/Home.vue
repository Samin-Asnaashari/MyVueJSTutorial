<template>
  <div>
    <!-- <div v-for="image in images" v-bind:key="image.id">
      <ImageItem v-if="image.url" :source="image.url" :next="image.nextUrl"/>
    </div> -->
  </div>
</template>

<script>
import ImageItem from "./ImageItem";
export default {
  name: "Home",
  data() {
    return {
      images: [
        {
          id: 0,
          url:
            "https://cataas.com/cat",
          nextUrl:
            "https://cataas.com/cat/says/hello"
        },
        {
          id: 1,
          url:
            "https://cataas.com/cat",
          nextUrl:
            "https://cataas.com/cat/says/hello"
        },
        {
          id: 2,
          url:
            "https://cataas.com/cat",
          nextUrl:
            "https://cataas.com/cat/says/hello"
        },
        {
          id: 3,
          url:
            "https://cataas.com/cat",
          nextUrl:
            "https://cataas.com/cat/says/hello"
        },
        {
          id: 4,
          url:
            "https://cataas.com/cat",
          nextUrl:
            "https://cataas.com/cat/says/hello"
        },
        {
          id: 5,
          url:
            "https://cataas.com/cat",
          nextUrl:
            "https://cataas.com/cat/says/hello"
        },
        {
          id: 6,
          url:
            "https://cataas.com/cat",
          nextUrl:
            "https://cataas.com/cat/says/hello"
        }
      ],
      imgObj: {
        src: "../assets/logo.png",
        error: "../assets/img/error.png",
        loading: "../assets/img/loader.gif"
      },
      imgUrl: "../assets/logo.png"
    };
  },
  components: {
    ImageItem
  }
};
</script>

<style scoped lang="scss">
</style>
