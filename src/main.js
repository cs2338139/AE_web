import { createApp } from 'vue'
import NavBar from './components/NavBar.vue'
import router from './router/router.js'

const navBar = createApp(NavBar);

// app.use(router)

navBar.mount('#Nav-Bar');
