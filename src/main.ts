import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import {
    gripApp,
    getKeplrAccountProvider
  } from "@stakeordie/griptape.js";
  
const restUrl = 'https://api.pulsar.griptapejs.com';
const provider = getKeplrAccountProvider();

const app = createApp(App);

app.use(router);
function runApp() {
    app.mount("#app");
}

gripApp(restUrl, provider, runApp);
