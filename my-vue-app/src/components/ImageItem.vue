<template>
  <div class="img-hover-zoom">
    <!-- <figure v-lazyload class="image__wrapper"> -->
    <!-- <ImageSpinner class="image__spinner"/> -->
    <!-- <img class="image__item" :data-url="source" alt="random image"> -->
    <!-- </figure> -->
    <img v-lazy="source" alt="random image" class="test">
  </div>
</template>

<script>
// import ImageSpinner from "./ImageSpinner";
// import LazyLoadDirective from "../directives/LazyLoadDirective";

export default {
  name: "ImageItem",
  components: {
    // ImageSpinner
  },
  directives: {
    // lazyload: LazyLoadDirective
  },
  props: {
    source: {
      type: String,
      required: true
    }
  },
  mounted() {
    // this.$Lazyload.$on("loaded", function(listener) {
    //   console.table(this.$Lazyload.performance());
    // });
  }
};
</script>

<style scoped lang="scss">
.test {
  width: 500px;
}
img[lazy="loaded"] {
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

// .image {
//   &__wrapper {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 4px;

//     &.loaded {
//       .image {
//         &__item {
//           visibility: visible;
//           opacity: 1;
//           border: 0;
//           width: "500px";
//         }

//         &__spinner {
//           display: none;
//           width: 100%;
//         }
//       }
//     }
//   }

//   &__item {
//     // width: 100%;
//     border-radius: 4px;
//     transition: all 0.4s ease-in-out;
//     opacity: 0;
//     visibility: hidden;
//     width: 500px;
//   }
// }
</style>
