import Vue from 'vue';
import App from './App';
import router from './router';
import vuefire from 'vuefire';
import firebase from 'firebase';
import 'vue-awesome/icons/exclamation-triangle';
import 'vue-awesome/icons/user-circle';
import Icon from 'vue-awesome/components/Icon';

Vue.use(vuefire);
Vue.config.productionTip = false;
Vue.component('icon', Icon);

var firebaseApp = firebase.initializeApp({
    databaseURL: "https://vue-chat-4802e.firebaseio.com",
});
var db = firebaseApp.database();

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { 
        App
    },
});
