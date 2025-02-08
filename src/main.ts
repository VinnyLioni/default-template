import { createApp } from "vue";
import { createPinia } from "pinia";
import { useAuthStore } from "./services/auth";
import approuter from "./router";
import "./style.css";
import App from "./App.vue";
import { createHead } from "@unhead/vue";
import { registerPrimeVueComponents } from "./services/primevue-components";

// Crie a isntância do usehead
const head = createHead();

// Crie a instância do Pinia
const pinia: any = createPinia();
const router: any = approuter;
const app = createApp(App);

// Registre os componentes do PrimeVue
registerPrimeVueComponents(app);

// Registre o head
app.use(head);

// Use o Pinia
app.use(pinia);

// Use o Router
app.use(router);

// Consuma a instância de auth
const authStore = useAuthStore();
authStore.initUser();

// Monte o aplicativo
app.mount("#app");
