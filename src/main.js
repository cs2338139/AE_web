import { createApp } from "vue";
import mitt from "mitt";
import App from "./App.vue";
import router from "./router/router";
import { VueWindowSizePlugin } from "vue-window-size/option-api";

const app = createApp(App);
app.config.globalProperties.$emitter = mitt();
app.config.globalProperties.$newList = null;
app.config.globalProperties.$2xl = 1440;
app.config.globalProperties.$xl = 1279;
app.config.globalProperties.$lg = 1023;
app.config.globalProperties.$md = 767;
app.config.globalProperties.$sm = 639;

app.use(router);
app.use(VueWindowSizePlugin);

app.mount("#app");
