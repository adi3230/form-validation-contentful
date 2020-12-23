import Vue from 'vue';
import { init, locations } from 'contentful-ui-extensions-sdk';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
