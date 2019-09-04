<template>
  <div>
    <!-- Custom Directive -->
    <span>
      <figure v-lazyload class="image__wrapper">
        <ImageSpinner class="image__spinner"/>
        <img class="image__item" :data-url="source" alt="random image custom directive">
        Directive
      </figure>
    </span>
    <!-- VueLazyload Package-->
    <img v-lazy="source" alt="random image VueLazyload" class="my-image my-vue-lazy">
    VueLazyload
    <!-- <img v-lazy="'img.400px.jpg'" data-srcset="img.400px.jpg 400w, img.800px.jpg 800w, img.1200px.jpg 1200w"> -->
    <!-- v-lazy-image Package -->
    <span class="img-hover-zoom">
      <v-lazy-image
        :src="source"
        :src-placeholder="srcPlaceholder"
        alt="random image VLazyImagePlugin"
        class="my-image"
      />
      V-Lazy-Image
    </span>
    <!-- Dynamic image -->
    <img
      :src="myImage"
      alt="random image"
      class="my-image"
      @mouseover="myImage = next"
      @mouseout="myImage = source"
    >
    Dynamic Animation
  </div>

    <!-- <div
      v-lazy-container="{ selector: 'img', error: '../assets/img/error.png', loading: '../assets/img/loader.gif' }"
    >
      <img data-src="../assets/logo.png">
      <img data-src="../assets/logo.png">
      <img data-src="../assets/logo.png">
    </div>-->
</template>

<script>
import ImageSpinner from "./ImageSpinner";
import LazyLoadDirective from "../directives/LazyLoadDirective";

export default {
  name: "ImageItem",
  components: {
    ImageSpinner
  },
  directives: {
    lazyload: LazyLoadDirective
  },
  props: {
    source: {
      type: String,
      required: true
    },
    next: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      myImage: this.source,
      srcPlaceholder: require("../assets/img/loader.gif")
    };
  },
  mounted() {
    // this.$Lazyload.$on("loaded", function(listener) {
    //   console.table(this.$Lazyload.performance());
    // });
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.my-image {
  width: 200px;
}
.my-vue-lazy[lazy="loaded"] {
  position: relative;
  transform: translateX(-200%);
  animation: slide 1s forwards;
  animation-delay: 1s;
  @keyframes slide {
    100% {
      transform: translateX(0%);
    }
  }
}
.img-hover-zoom {
  height: 300px;
  overflow: hidden;
}
.img-hover-zoom img {
  transition: transform 0.5s ease;
}
.img-hover-zoom:hover img {
  transform: scale(1.3);
}
.v-lazy-image {
  opacity: 0;
  transform: scale3d(0.3, 0.3, 0.3);
  transition: opacity 0.5s, transform 0.5s;
}
.v-lazy-image-loaded {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.image {
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;

    &.loaded {
      .image {
        &__item {
          visibility: visible;
          opacity: 1;
          border: 0;
          width: "500px";
        }

        &__spinner {
          display: none;
          width: 100%;
        }
      }
    }
  }

  &__item {
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
    opacity: 0;
    visibility: hidden;
    width: 100px;
  }
}
</style>
