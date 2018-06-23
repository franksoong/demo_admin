/*
 * @Author: soong
 * @Date: 2017-11-17 10:52:11
 * @Last Modified by: soong
 * @Last Modified time: 2017-11-17 10:52:42
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import ElementUI from 'element-ui';
import '@/styles/bootstrap-override.scss';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@/styles/element-override.scss';
import 'font-awesome/css/font-awesome.min.css';
import App from '@/App';
import router from '@/router';

import Mock from '@/mock';

Mock.initilizeMock();

Vue.use(BootstrapVue);
Vue.use(ElementUI);
// Vue.component(DefaultLayout.name, DefaultLayout);
// Vue.component(NewLayout.name, NewLayout);

// Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
});
