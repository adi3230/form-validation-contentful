<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" :config="configuration"/>
  </div>
</template>

<script>
import { init, locations } from 'contentful-ui-extensions-sdk';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      configuration: '',
    };
  },
  mounted() {
    init((sdk) => {
      if (sdk.location.is(locations.LOCATION_APP_CONFIG)) {
        this.configuration = sdk;
      } else {
        sdk.window.startAutoResizer();
      }
    });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
