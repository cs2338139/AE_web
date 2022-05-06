import { createApp } from 'vue'
import NavBar from './components/Templates/NavBar/NavBar.vue'
import router from './router/router.js'

const navBar = createApp(NavBar);
// app.use(router)

navBar.mount('#Nav-Bar');
