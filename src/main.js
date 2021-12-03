import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'
import fb from 'firebase'

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router:router,
  store,
    created(){
      const firebaseConfig = {
        apiKey: "AIzaSyBJ1Bc2sTxB6QpcxmEZVnrkEcv-Kdf7pwo",
        authDomain: "new-ad-vue.firebaseapp.com",
        projectId: "new-ad-vue",
        storageBucket: "new-ad-vue.appspot.com",
        messagingSenderId: "768766598951",
        appId: "1:768766598951:web:5798cd0439179bb858d302",
        measurementId: "G-6VN5BY1ZHF"
      };
      // Initialize Firebase
    fb.initializeApp(firebaseConfig);
    fb.analytics();
  }
}).$mount('#app')
