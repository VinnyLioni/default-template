import { createApp } from "vue";
import { createPinia } from "pinia";
import approuter from "./router";
import "./style.css";
import App from "./App.vue";

import { registerPrimeVueComponents } from "./services/primevue-components";

// Crie a instância do Pinia
const pinia: any = createPinia();
const router: any = approuter;
const app = createApp(App);

// Registre os componentes do PrimeVue
registerPrimeVueComponents(app);

// Use o Pinia
app.use(pinia);

// Use o Router
app.use(router);

// Monte o aplicativo
app.mount("#app");
