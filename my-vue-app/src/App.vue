<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Image handling / lazyLoading options"/>
    <Home/>
    <!-- <Slider/> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Home from "./components/Home";
import Slider from "./components/Slider";

export default {
  name: "app",
  components: {
    HelloWorld,
    Home,
    Slider
  }
  // methods: {
  //   handler(component) {
  //     console.log(component + " this component is showing");
  //   }
  // }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

