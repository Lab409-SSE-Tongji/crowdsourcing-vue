import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import Notification  from 'element-ui';
import VueResource from 'vue-resource';
import axios from 'axios';
Vue.use(VueResource);
// import 'element-ui/lib/theme-default/index.css';    // 默认主题
import '../static/css/theme-green/index.css';       // 浅绿色主题
import "babel-polyfill";
// 
// import '../static/css/bootstrap.min.css'
// import '../static/css/font-awesome/css/font-awesome.css'
// import '../static/css/animate.css'
// import '../static/css/style.css'


Vue.use(ElementUI);
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
