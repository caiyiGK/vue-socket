import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './vuex/store'
import routes from './router'
import App from 'containers/App'

// 模块化机制编程
Vue.use(VueRouter);

const router = new VueRouter({
    routes
})

new Vue({
  router,
  store,
  render: createElement => createElement(App)
}).$mount('#app');
