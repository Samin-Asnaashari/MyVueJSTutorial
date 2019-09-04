<template>
  <div>
    <p>
      <a @click="prev">Previous</a> ||
      <a @click="next">Next</a>
    </p>
    <div v-for="number in [currentNumber]" transition="fade" :key="number">
      <img :src="images[Math.abs(currentNumber) % images.length].url">
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        {
          id: 0,
          url: "",
          nextUrl: ""
        },
        {
          id: 1,
          url: "",
          nextUrl: ""
        },
        {
          id: 2,
          url: "",
          nextUrl: ""
        },
        {
          id: 3,
          url: "",
          nextUrl: ""
        }
      ],
      currentNumber: 0,
      timer: null
    };
  },
  components: {},
  mounted: function() {
    this.startRotation();
  },
  methods: {
    startRotation: function() {
      this.timer = setInterval(this.next, 3000);
    },
    stopRotation: function() {
      clearTimeout(this.timer);
      this.timer = null;
    },
    next: function() {
      this.currentNumber += 1;
    },
    prev: function() {
      this.currentNumber -= 1;
    }
  }
};
</script>

<style scoped lang="scss">
.fade-transition {
  transition: all 0.8s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: absolute;
}
.fade-enter,
.fade-leave {
  opacity: 0;
  visibility: hidden;
}
</style>
