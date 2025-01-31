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
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import SelectButton from "primevue/selectbutton";
import Checkbox from "primevue/checkbox";
import "primeicons/primeicons.css";

// Prime-vue customization
import { locale } from "./api/primevue-locale-dictionary";
import GataTheme from "../src/assets/theme.ts";

// Crie a instância do Pinia
const pinia: any = createPinia();
const router: any = approuter;
const app = createApp(App);

// Use o PrimeVue com o tema
app.use(PrimeVue, {
  locale,
  theme: {
    // preset: Aura,
    preset: GataTheme,
    options: {
      prefix: "p",
      darkModeSelector: ".dark",
      cssLayer: false,
    },
  },
});

// Registre de componentes
app.component("Button", Button);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("SelectButton", SelectButton);
app.component("Checkbox", Checkbox);

app.use(ConfirmationService);
app.use(ToastService);

// Use o Pinia
app.use(pinia);

// Use o Router
app.use(router);

// Monte o aplicativo
app.mount("#app");
