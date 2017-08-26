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
    apiKey: "AIzaSyBehBUfqLgYRPqLkEHNz0y3_b2D58GXC-w",
    authDomain: "vue-chat-4802e.firebaseapp.com",
    databaseURL: "https://vue-chat-4802e.firebaseio.com",
    projectId: "vue-chat-4802e",
    storageBucket: "vue-chat-4802e.appspot.com",
    messagingSenderId: "603474117582",
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
