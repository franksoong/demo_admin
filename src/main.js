// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css';
import App from '@/App';
import router from '@/router';
import DefaultLayout from '@/layout/DefaultLayout.vue'
import NewLayout from '@/layout/NewLayout.vue'

Vue.use(ElementUI);
Vue.component(DefaultLayout.name, DefaultLayout);
Vue.component(NewLayout.name, NewLayout);

// Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
