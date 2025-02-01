import type { App } from "vue";
import "primeicons/primeicons.css";
import PrimeVue from "primevue/config";
//@ts-ignore
import Aura from "@primevue/themes/aura";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";

import { locale } from "../api/primevue-locale-dictionary";
import GataTheme from "../assets/theme";

// form
import Checkbox from "primevue/checkbox";
import DatePicker from "primevue/datepicker";
import FloatLabel from "primevue/floatlabel";
import InputText from "primevue/inputtext";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import InputMask from "primevue/inputmask";
import InputNumber from "primevue/inputnumber";
import Listbox from "primevue/listbox";
import MultiSelect from "primevue/multiselect";
import Password from "primevue/password";
import RadioButton from "primevue/radiobutton";
import Rating from "primevue/rating";
import Select from "primevue/select";
import SelectButton from "primevue/selectbutton";
import Textarea from "primevue/textarea";
import ToggleSwitch from "primevue/toggleswitch";

// buttons
import Button from "primevue/button";
import SpeedDial from "primevue/speeddial";

import DataTable from "primevue/datatable";
import Column from "primevue/column";

export function registerPrimeVueComponents(app: App) {
  //formm
  app.component("Checkbox", Checkbox);
  app.component("DatePicker", DatePicker);
  app.component("FloatLabel", FloatLabel);
  app.component("InputText", InputText);
  app.component("IconField", IconField);
  app.component("InputIcon", InputIcon);
  app.component("InputGroup", InputGroup);
  app.component("InputGroupAddon", InputGroupAddon);
  app.component("InputMask", InputMask);
  app.component("InputNumber", InputNumber);
  app.component("Listbox", Listbox);
  app.component("MultiSelect", MultiSelect);
  app.component("Password", Password);
  app.component("RadioButton", RadioButton);
  app.component("Rating", Rating);
  app.component("Select", Select);
  app.component("SelectButton", SelectButton);
  app.component("Textarea", Textarea);
  app.component("ToggleSwitch", ToggleSwitch);

  //buttons
  app.component("Button", Button);
  app.component("SpeedDial", SpeedDial);

  app.component("DataTable", DataTable);
  app.component("Column", Column);

  app.use(PrimeVue, {
    locale,
    theme: {
      preset: GataTheme,
      options: {
        prefix: "p",
        darkModeSelector: ".dark",
        cssLayer: false,
      },
    },
  });

  app.use(ConfirmationService);
  app.use(ToastService);
}
