import { createApp } from 'vue'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCy4KAcDzQl25dpVXl6F64H5iv2fWsOJNI',
  authDomain: 'login-3d8d7.firebaseapp.com',
  databaseURL: 'https://login-3d8d7-default-rtdb.firebaseio.com',
  projectId: 'login-3d8d7',
  storageBucket: 'login-3d8d7.appspot.com',
  messagingSenderId: '857894651276',
  appId: '1:857894651276:web:3e8705a575b909d53ac2a9',
  measurementId: 'G-8FZCYCYTNH'
}

// Initialize Firebase
initializeApp(firebaseConfig)
const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
