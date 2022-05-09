import { createApp } from 'vue'
import NavBar from './components/Templates/NavBar/NavBar.vue'
import HomeNews from'./components/Templates/Home_News/Home_News.vue'
import VisitInformation from './components/Templates/Home_VisitInFormation/Home_VisitInformation.vue'
import FootBar from './components/Templates/FootBar/FootBar.vue'
import router from './router/router.js'

// app.use(router)
const navBar = createApp(NavBar).mount('#Nav-Bar');
const homeNews=createApp(HomeNews).mount('#Home-News');
const visitInformation=createApp(VisitInformation).mount('#Visit-Information');
const footBar=createApp(FootBar).mount('#Foot-Bar');
