import { createApp } from "vue";
import mitt from "mitt";
import App from "./App.vue";
import router from "./router/router";
import { VueWindowSizePlugin } from 'vue-window-size/option-api';

const app = createApp(App);
app.config.globalProperties.$emitter = mitt();
app.config.globalProperties.$newList = null;

app.use(router);
app.use(VueWindowSizePlugin);

app.mount("#app");
