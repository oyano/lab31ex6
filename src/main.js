import Vue from 'vue';
import App from './App.vue';
import Generate from './components/addNewUser.vue';

Vue.component('generator-list', Generate);

new Vue({
    render: h => h(App),
}).$mount('#app')