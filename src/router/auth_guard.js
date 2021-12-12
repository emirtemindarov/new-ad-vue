import store from '../store'

export default function(next) {
    console.log(store.getters.isUserLoggedIn)
   if (store.getters.isUserLoggedIn) {
       next()
       
   } else {
       next('/login?loginError=true')
       //next('/')
   }
}
