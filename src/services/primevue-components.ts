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
import Editor from "primevue/editor";
import FloatLabel from "primevue/floatlabel";
import IconField from "primevue/iconfield";
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import InputIcon from "primevue/inputicon";
import InputMask from "primevue/inputmask";
import InputNumber from "primevue/inputnumber";
import InputText from "primevue/inputtext";
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
import SplitButton from "primevue/splitbutton";

//data
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Timeline from "primevue/timeline";

//panel
import Accordion from "primevue/accordion";
import AccordionPanel from "primevue/accordionpanel";
import AccordionHeader from "primevue/accordionheader";
import AccordionContent from "primevue/accordioncontent";
import Card from "primevue/card";
import Divider from "primevue/divider";
import Fieldset from "primevue/fieldset";
import Panel from "primevue/panel";
import Stepper from "primevue/stepper";
import StepList from "primevue/steplist";
import StepPanels from "primevue/steppanels";
import StepItem from "primevue/stepitem";
import Step from "primevue/step";
import StepPanel from "primevue/steppanel";
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";
import Toolbar from "primevue/toolbar";

//overlay
import ConfirmDialog from "primevue/confirmdialog";
import ConfirmPopup from "primevue/confirmpopup";
import Dialog from "primevue/dialog";
import Drawer from "primevue/drawer";
import Popover from "primevue/popover";
import Tooltip from "primevue/tooltip";

//file
import FileUpload from "primevue/fileupload";

//menu
import Breadcrumb from "primevue/breadcrumb";
import ContextMenu from "primevue/contextmenu";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import MegaMenu from "primevue/megamenu";

//chart
import Chart from "primevue/chart";

//message
import Message from "primevue/message";
import Toast from "primevue/toast";

//media
import Carousel from "primevue/carousel";
import Image from "primevue/image";

//Misc
import AnimateOnScroll from "primevue/animateonscroll";
import Avatar from "primevue/avatar";
import Badge from "primevue/badge";
import OverlayBadge from "primevue/overlaybadge";
import Chip from "primevue/chip";
import FocusTrap from "primevue/focustrap";
import Fluid from "primevue/fluid";
import MeterGroup from "primevue/metergroup";
import ProgressBar from "primevue/progressbar";
import ProgressSpinner from "primevue/progressspinner";
import ScrollTop from "primevue/scrolltop";
import ScrollPanel from "primevue/scrollpanel";
import Skeleton from "primevue/skeleton";
import Ripple from "primevue/ripple";
import Tag from "primevue/tag";

export function registerPrimeVueComponents(app: App) {
  //formm
  app.component("Checkbox", Checkbox);
  app.component("DatePicker", DatePicker);
  app.component("Editor", Editor);
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
  app.component("SplitButton", SplitButton);

  // data
  app.component("DataTable", DataTable);
  app.component("Column", Column);
  app.component("Timeline", Timeline);

  //panel
  app.component("Accordion", Accordion);
  app.component("AccordionPanel", AccordionPanel);
  app.component("AccordionHeader", AccordionHeader);
  app.component("AccordionContent", AccordionContent);
  app.component("Card", Card);
  app.component("Divider", Divider);
  app.component("Fieldset", Fieldset);
  app.component("Panel", Panel);
  app.component("Stepper", Stepper);
  app.component("StepList", StepList);
  app.component("StepPanels", StepPanels);
  app.component("StepItem", StepItem);
  app.component("Step", Step);
  app.component("StepPanel", StepPanel);
  app.component("Tabs", Tabs);
  app.component("TabList", TabList);
  app.component("Tab", Tab);
  app.component("TabPanels", TabPanels);
  app.component("TabPanel", TabPanel);
  app.component("Toolbar", Toolbar);

  //overlay
  app.component("ConfirmDialog", ConfirmDialog);
  app.component("ConfirmPopup", ConfirmPopup);
  app.component("Dialog", Dialog);
  app.component("Drawer", Drawer);
  app.component("Popover", Popover);
  app.directive("tooltip", Tooltip);

  //file
  app.component("FileUpload", FileUpload);

  //menu
  app.component("Breadcrumb", Breadcrumb);
  app.component("ContextMenu", ContextMenu);
  app.component("Menu", Menu);
  app.component("Menubar", Menubar);
  app.component("MegaMenu", MegaMenu);

  //chart
  app.component("Chart", Chart);

  //message
  app.component("Toast", Toast);
  app.component("Message", Message);

  //media
  app.component("Carousel", Carousel);
  app.component("Image", Image);

  //misc
  app.directive("animateonscroll", AnimateOnScroll);
  app.component("Avatar", Avatar);
  app.component("Badge", Badge);
  app.component("OverlayBadge", OverlayBadge);
  app.component("Chip", Chip);
  app.directive("focustrap", FocusTrap);
  app.component("Fluid", Fluid);
  app.component("MeterGroup", MeterGroup);
  app.component("ProgressBar", ProgressBar);
  app.component("ProgressSpinner", ProgressSpinner);
  app.component("ScrollTop", ScrollTop);
  app.component("ScrollPanel", ScrollPanel);
  app.component("Skeleton", Skeleton);
  app.directive("ripple", Ripple);
  app.component("Tag", Tag);

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
    ripple: true,
  });

  app.use(ConfirmationService);
  app.use(ToastService);
}
