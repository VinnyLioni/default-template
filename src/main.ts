import { createApp } from "vue";
import { createPinia } from "pinia";
import approuter from "./router";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";

//@ts-ignore
import Aura from "@primevue/themes/aura";
import Button from "primevue/button";
import "primeicons/primeicons.css";
import { locale } from "./api/primevue-locale-dictionary";

// Crie a instância do Pinia
const pinia: any = createPinia();
const router: any = approuter;
const app = createApp(App);

// Use o PrimeVue com o tema
app.use(
  PrimeVue,
  { locale },
  {
    theme: Aura, // Alterado para usar o tema corretamente
  }
);

// Registre o componente Button
app.component("Button", Button);

app.use(ConfirmationService);
app.use(ToastService);

// Use o Pinia
app.use(pinia);

// Use o Router
app.use(router);

// Monte o aplicativo
app.mount("#app");
