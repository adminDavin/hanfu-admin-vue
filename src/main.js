import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

import './assets/font/iconfont.css';
import './styles/index.less';

// 简单配置axios
import axios from 'axios';
Vue.use(ElementUI);

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
