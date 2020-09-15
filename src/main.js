import firebase from 'firebase'
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA365DFhVAAH_WLASehC8uBYi6R25xkfB0",
    authDomain: "chat-app-1715d.firebaseapp.com",
    databaseURL: "https://chat-app-1715d.firebaseio.com",
    projectId: "chat-app-1715d",
    storageBucket: "chat-app-1715d.appspot.com",
    messagingSenderId: "239344260010",
    appId: "1:239344260010:web:bfdae543d4531602dbd1d3"
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})