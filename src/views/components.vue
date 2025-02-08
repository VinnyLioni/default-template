<script setup lang="ts">
import PageTitle from "../components/layout/PageTitle.vue";

import { testData } from "../api/test";
import { FloatLabel } from "primevue";
import { onMounted, ref } from "vue";
import { FilterMatchMode } from "@primevue/core";
import { useToast } from "primevue/usetoast";
import { useConfirm } from "primevue/useconfirm";

const toast = useToast();
const confirm = useConfirm();

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
});
const selected_row = ref();
function onRowSelect(event: any) {
  toast.add({
    severity: "info",
    summary: "Product Selected",
    detail: "Name: " + event.data.name,
    life: 2000,
  });
}
function onRowUnselect(event: any) {
  toast.add({
    severity: "warn",
    summary: "Product Unselected",
    detail: "Name: " + event.data.name,
    life: 2000,
  });
}

const splititems = [
  {
    label: "Update",
    command: () => {
      toast.add({
        severity: "success",
        summary: "Updated",
        detail: "Data Updated",
        life: 3000,
      });
    },
  },
  {
    label: "Delete",
    command: () => {
      toast.add({
        severity: "warn",
        summary: "Delete",
        detail: "Data Deleted",
        life: 3000,
      });
    },
  },
  {
    separator: true,
  },
  {
    label: "Quit",
    command: () => {
      toast.add({
        severity: "warn",
        summary: "Exit",
        detail: "You Exited",
        life: 3000,
      });
    },
  },
];
function splitsave() {
  toast.add({
    severity: "success",
    summary: "Success",
    detail: "Data Saved",
    life: 3000,
  });
}

function confirm1() {
  confirm.require({
    message: "Are you sure you want to proceed?",
    header: "Confirmation",
    icon: "pi pi-exclamation-triangle",
    rejectProps: {
      label: "Cancel",
      severity: "secondary",
      outlined: true,
    },
    acceptProps: {
      label: "Save",
    },
    accept: () => {
      toast.add({
        severity: "info",
        summary: "Confirmed",
        detail: "You have accepted",
        life: 3000,
      });
    },
    reject: () => {
      toast.add({
        severity: "error",
        summary: "Rejected",
        detail: "You have rejected",
        life: 3000,
      });
    },
  });
}

function confirm2() {
  confirm.require({
    message: "Do you want to delete this record?",
    header: "Danger Zone",
    icon: "pi pi-info-circle",
    rejectLabel: "Cancel",
    rejectProps: {
      label: "Cancel",
      severity: "secondary",
      outlined: true,
    },
    acceptProps: {
      label: "Delete",
      severity: "danger",
    },
    accept: () => {
      toast.add({
        severity: "info",
        summary: "Confirmed",
        detail: "Record deleted",
        life: 3000,
      });
    },
    reject: () => {
      toast.add({
        severity: "error",
        summary: "Rejected",
        detail: "You have rejected",
        life: 3000,
      });
    },
  });
}

function popup1(event: any) {
  confirm.require({
    target: event.currentTarget,
    message: "Are you sure you want to proceed?",
    icon: "pi pi-exclamation-triangle",
    rejectProps: {
      label: "Cancel",
      severity: "secondary",
      outlined: true,
    },
    acceptProps: {
      label: "Save",
    },
    accept: () => {
      toast.add({
        severity: "info",
        summary: "Confirmed",
        detail: "You have accepted",
        life: 3000,
      });
    },
    reject: () => {
      toast.add({
        severity: "error",
        summary: "Rejected",
        detail: "You have rejected",
        life: 3000,
      });
    },
  });
}

function popup2(event: any) {
  confirm.require({
    target: event.currentTarget,
    message: "Do you want to delete this record?",
    icon: "pi pi-info-circle",
    rejectProps: {
      label: "Cancel",
      severity: "secondary",
      outlined: true,
    },
    acceptProps: {
      label: "Delete",
      severity: "danger",
    },
    accept: () => {
      toast.add({
        severity: "info",
        summary: "Confirmed",
        detail: "Record deleted",
        life: 3000,
      });
    },
    reject: () => {
      toast.add({
        severity: "error",
        summary: "Rejected",
        detail: "You have rejected",
        life: 3000,
      });
    },
  });
}

const visible = ref(false);
const drawer = ref(false);

const op = ref();
const members = ref([
  {
    name: "Amy Elsner",
    image: "amyelsner.png",
    email: "amy@email.com",
    role: "Owner",
  },
  {
    name: "Bernardo Dominic",
    image: "bernardodominic.png",
    email: "bernardo@email.com",
    role: "Editor",
  },
  {
    name: "Ioni Bowcher",
    image: "ionibowcher.png",
    email: "ioni@email.com",
    role: "Viewer",
  },
]);

function toggle(event: any) {
  op.value.toggle(event);
}

function onAdvancedUpload() {
  toast.add({
    severity: "info",
    summary: "Success",
    detail: "File Uploaded",
    life: 3000,
  });
}

//breadcrumb
const home = ref({
  icon: "pi pi-home",
});
const items = ref([
  { label: "Electronics" },
  { label: "Computer" },
  { label: "Accessories" },
  { label: "Keyboard" },
  { label: "Wireless" },
]);

//contextmenu
const contextmenu = ref([
  {
    label: "Traduzir",
    icon: "pi pi-language",
  },
  {
    label: "Falar",
    icon: "pi pi-volume-up",
    items: [
      {
        label: "Iniciar",
        icon: "pi pi-caret-right",
      },
      {
        label: "Parar",
        icon: "pi pi-pause",
      },
    ],
  },
  {
    separator: true,
  },
  {
    label: "Imprimir",
    icon: "pi pi-print",
  },
]);
const menu = ref();
function onImageRightClick(event: any) {
  menu.value.show(event);
}

//menu
const menuitems = ref([
  {
    label: "Documents",
    items: [
      {
        label: "New",
        icon: "pi pi-plus",
      },
      {
        label: "Search",
        icon: "pi pi-search",
      },
    ],
  },
  {
    label: "Profile",
    items: [
      {
        label: "Settings",
        icon: "pi pi-cog",
      },
      {
        label: "Logout",
        icon: "pi pi-sign-out",
      },
    ],
  },
]);
const menupopup = ref();
function togglemenu(event: any) {
  menupopup.value.toggle(event);
}
const menubar = ref([
  {
    label: "Home",
    icon: "pi pi-home",
  },
  {
    label: "Features",
    icon: "pi pi-star",
  },
  {
    label: "Projects",
    icon: "pi pi-search",
    items: [
      {
        label: "Components",
        icon: "pi pi-bolt",
      },
      {
        label: "Blocks",
        icon: "pi pi-server",
      },
      {
        label: "UI Kit",
        icon: "pi pi-pencil",
      },
      {
        label: "Templates",
        icon: "pi pi-palette",
        items: [
          {
            label: "Apollo",
            icon: "pi pi-palette",
          },
          {
            label: "Ultima",
            icon: "pi pi-palette",
          },
        ],
      },
    ],
  },
  {
    label: "Contact",
    icon: "pi pi-envelope",
  },
]);
const megamenu = ref<any>([
  {
    label: "Furniture",
    icon: "pi pi-box",
    items: [
      [
        {
          label: "Living Room",
          items: [
            { label: "Accessories" },
            { label: "Armchair" },
            { label: "Coffee Table" },
            { label: "Couch" },
            { label: "TV Stand" },
          ],
        },
      ],
      [
        {
          label: "Kitchen",
          items: [
            { label: "Bar stool" },
            { label: "Chair" },
            { label: "Table" },
          ],
        },
        {
          label: "Bathroom",
          items: [{ label: "Accessories" }],
        },
      ],
      [
        {
          label: "Bedroom",
          items: [
            { label: "Bed" },
            { label: "Chaise lounge" },
            { label: "Cupboard" },
            { label: "Dresser" },
            { label: "Wardrobe" },
          ],
        },
      ],
      [
        {
          label: "Office",
          items: [
            { label: "Bookcase" },
            { label: "Cabinet" },
            { label: "Chair" },
            { label: "Desk" },
            { label: "Executive Chair" },
          ],
        },
      ],
    ],
  },
  {
    label: "Electronics",
    icon: "pi pi-mobile",
    items: [
      [
        {
          label: "Computer",
          items: [
            { label: "Monitor" },
            { label: "Mouse" },
            { label: "Notebook" },
            { label: "Keyboard" },
            { label: "Printer" },
            { label: "Storage" },
          ],
        },
      ],
      [
        {
          label: "Home Theater",
          items: [
            { label: "Projector" },
            { label: "Speakers" },
            { label: "TVs" },
          ],
        },
      ],
      [
        {
          label: "Gaming",
          items: [
            { label: "Accessories" },
            { label: "Console" },
            { label: "PC" },
            { label: "Video Games" },
          ],
        },
      ],
      [
        {
          label: "Appliances",
          items: [
            { label: "Coffee Machine" },
            { label: "Fridge" },
            { label: "Oven" },
            { label: "Vaccum Cleaner" },
            { label: "Washing Machine" },
          ],
        },
      ],
    ],
  },
  {
    label: "Sports",
    icon: "pi pi-clock",
    items: [
      [
        {
          label: "Football",
          items: [
            { label: "Kits" },
            { label: "Shoes" },
            { label: "Shorts" },
            { label: "Training" },
          ],
        },
      ],
      [
        {
          label: "Running",
          items: [
            { label: "Accessories" },
            { label: "Shoes" },
            { label: "T-Shirts" },
            { label: "Shorts" },
          ],
        },
      ],
      [
        {
          label: "Swimming",
          items: [
            { label: "Kickboard" },
            { label: "Nose Clip" },
            { label: "Swimsuits" },
            { label: "Paddles" },
          ],
        },
      ],
      [
        {
          label: "Tennis",
          items: [
            { label: "Balls" },
            { label: "Rackets" },
            { label: "Shoes" },
            { label: "Training" },
          ],
        },
      ],
    ],
  },
]);

//chart
const chartData = ref();
const chartOptions = ref();
function setChartData() {
  const documentStyle = getComputedStyle(document.documentElement);

  return {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: documentStyle.getPropertyValue("--p-cyan-500"),
        borderColor: documentStyle.getPropertyValue("--p-cyan-500"),
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "My Second dataset",
        backgroundColor: documentStyle.getPropertyValue("--p-gray-500"),
        borderColor: documentStyle.getPropertyValue("--p-gray-500"),
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  };
}
function setChartOptions() {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--p-text-color");
  const textColorSecondary = documentStyle.getPropertyValue(
    "--p-text-muted-color"
  );
  const surfaceBorder = documentStyle.getPropertyValue(
    "--p-content-border-color"
  );

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
          font: {
            weight: 500,
          },
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
          drawBorder: false,
        },
      },
    },
  };
}
const doughnutData = ref();
const doughnutOptions = ref();
function setDoughnutData() {
  const documentStyle = getComputedStyle(document.body);

  return {
    labels: ["A", "B", "C"],
    datasets: [
      {
        data: [540, 325, 702],
        backgroundColor: [
          documentStyle.getPropertyValue("--p-cyan-500"),
          documentStyle.getPropertyValue("--p-orange-500"),
          documentStyle.getPropertyValue("--p-gray-500"),
        ],
        hoverBackgroundColor: [
          documentStyle.getPropertyValue("--p-cyan-400"),
          documentStyle.getPropertyValue("--p-orange-400"),
          documentStyle.getPropertyValue("--p-gray-400"),
        ],
      },
    ],
  };
}
function setDoughnutOptions() {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--p-text-color");

  return {
    plugins: {
      legend: {
        labels: {
          cutout: "60%",
          color: textColor,
        },
      },
    },
  };
}

//messages
function show() {
  toast.add({
    severity: "info",
    summary: "Info",
    detail: "Message Content",
    life: 3000,
  });
}

//media
function getSeverity(status: any) {
  switch (status) {
    case "INSTOCK":
      return "success";

    case "LOWSTOCK":
      return "warn";

    case "OUTOFSTOCK":
      return "danger";

    default:
      return undefined;
  }
}
const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
]);

//misc
const metergroup = ref([
  { label: "Apps", color: "#34d399", value: 16 },
  { label: "Messages", color: "#fbbf24", value: 8 },
  { label: "Media", color: "#60a5fa", value: 24 },
  { label: "System", color: "#c084fc", value: 10 },
]);

const test = testData();

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
  doughnutData.value = setDoughnutData();
  doughnutOptions.value = setDoughnutOptions();
});
</script>

<template>
  <div class="flex flex-col items-start px-3 my-2">
    <PageTitle title="Componentes" icon="pi-lightbulb" />

    <div class="flex flex-col items-start my-6">
      <div class="text-xl font-semibold tracking-tighter">Forms</div>
      <div class="flex flex-row flex-wrap gap-x-4 gap-y-0">
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tight">Checkbox</span>
            <div class="flex items-center justify-start gap-2">
              <Checkbox
                v-model="test.checked"
                inputId="ingredient1"
                name="checkbox"
                value="checkbox"
              />
              <label for="ingredient1">Checkbox</label>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tight">DatePicker</span>
            <DatePicker
              v-model="test.date"
              showIcon
              fluid
              :showOnFocus="true"
            />
          </div>
        </div>
        <div class="w-full">
          <div class="card">
            <div class="card-content">
              <span class="font-semibold tracking-tight">Editor</span>
              <Editor editorStyle="height: 320px" class="w-full" />
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tight">FloatLabel</span>
            <FloatLabel variant="on">
              <InputText id="username" v-model="test.floatlabel" />
              <label for="username">FloatLabel</label>
            </FloatLabel>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tight">IconField</span>
            <FloatLabel variant="on">
              <IconField>
                <InputIcon class="pi pi-search" />
                <InputText v-model="test.iconfield" />
              </IconField>
              <label for="on_label">InputGroup</label>
            </FloatLabel>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tight">InputGroup</span>
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-user"></i>
              </InputGroupAddon>
              <FloatLabel variant="on">
                <InputText id="on_label" v-model="test.inputgroup" />
                <label for="on_label">InputGroup</label>
              </FloatLabel>
            </InputGroup>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tight">InputGroup-Button</span>
            <InputGroup>
              <Button label="Search" />
              <FloatLabel variant="on">
                <InputText id="on_label" v-model="test.inputgroup" />
                <label for="on_label">InputGroup</label>
              </FloatLabel>
            </InputGroup>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tight">InputMask</span>
            <FloatLabel variant="on">
              <InputMask
                id="on_label"
                v-model="test.inputmask"
                mask="(99) 99999-9999"
              />
            </FloatLabel>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tight">InputNumber</span>
            <FloatLabel variant="on">
              <InputNumber
                v-model="test.inputnumber"
                inputId="minmaxfraction"
                :minFractionDigits="2"
                :maxFractionDigits="5"
                fluid
              />
              <label for="on_label">InputNumber</label>
            </FloatLabel>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tight"
              >InputNumber-Currency</span
            >
            <FloatLabel variant="on">
              <InputNumber
                v-model="test.inputcurrency"
                inputId="currency"
                mode="currency"
                currency="BRL"
                locale="pt-BR"
                fluid
              />
              <label for="currency-us">R$ Currency (BRL)</label>
            </FloatLabel>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tight">InputNumber-%</span>
            <FloatLabel variant="on">
              <InputNumber
                v-model="test.inputpercentage"
                inputId="percent"
                prefix="%"
                :minFractionDigits="2"
                fluid
              />
              <label for="percent">% Percent</label>
            </FloatLabel>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tight"
              >InputNumber-Quantity</span
            >
            <FloatLabel variant="on">
              <InputNumber
                v-model="test.inputquantity"
                inputId="horizontal-buttons"
                showButtons
                buttonLayout="horizontal"
                :minFractionDigits="2"
                :step="0.25"
                mode="decimal"
                fluid
              >
                <template #incrementicon>
                  <span class="pi pi-plus" />
                </template>
                <template #decrementicon>
                  <span class="pi pi-minus" />
                </template>
              </InputNumber>
              <label for="horizontal-buttons">Quantity</label>
            </FloatLabel>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tight">InputText</span>
            <InputText type="text" v-model="test.inputtext" />
          </div>
        </div>
        <div class="w-full">
          <div class="card w-1/5">
            <div class="card-content">
              <span class="font-semibold tracking-tight">ListBox</span>
              <Listbox
                v-model="test.selectedcity"
                :options="test.cities"
                filter
                optionLabel="name"
                class="w-full md:w-56"
              />
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tight">MultiSelect</span>
            <MultiSelect
              v-model="test.selectedcities"
              display="chip"
              :options="test.cities"
              optionLabel="name"
              filter
              placeholder="Select Cities"
              :maxSelectedLabels="3"
              class="w-full md:w-80"
            />
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tight">Password</span>
            <FloatLabel variant="on">
              <Password v-model="test.password" inputId="on_label" toggleMask />
              <label for="on_label">Password</label>
            </FloatLabel>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tight">RadioButton</span>
            <div class="flex flex-wrap gap-4">
              <div class="flex items-center gap-2">
                <RadioButton
                  v-model="test.radiobutton"
                  inputId="option1"
                  name="pizza"
                  value="Cheese"
                />
                <label for="option1">Cheese</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton
                  v-model="test.radiobutton"
                  inputId="option2"
                  name="pizza"
                  value="Mushroom"
                  disabled
                />
                <label for="option2">Mushroom</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton
                  v-model="test.radiobutton"
                  inputId="option3"
                  name="pizza"
                  value="Pepper"
                />
                <label for="option3">Pepper</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton
                  v-model="test.radiobutton"
                  inputId="option4"
                  name="pizza"
                  value="Onion"
                />
                <label for="option4">Onion</label>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tight">Rating</span>
            <Rating v-model="test.rating" />
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tight">Select</span>
            <Select
              filter
              checkmark
              v-model="test.selectedcity"
              :options="test.cities"
              optionLabel="name"
              placeholder="Select a City"
              class="w-full md:w-56"
            />
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tight">Select Button</span>
            <SelectButton
              v-model="test.selected"
              :options="test.select_options"
            />
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tight">Textarea</span>
            <FloatLabel variant="on">
              <Textarea
                id="over_label"
                v-model="test.textarea"
                rows="2"
                cols="30"
              />
              <label for="on_label">Textarea</label>
            </FloatLabel>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tight">ToggleSwitch</span>
            <ToggleSwitch v-model="test.checked" />
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-start my-6">
      <div class="text-xl font-semibold tracking-tighter">Buttons</div>
      <div class="flex flex-row flex-wrap gap-x-4 gap-y-0">
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tight">Button</span>
            <Button label="Submit" />
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tight">SpeedDial</span>
            <SpeedDial :model="test.items" direction="right" />
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tight">SplitButton</span>
            <SplitButton label="Save" @click="splitsave" :model="splititems" />
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-start my-6">
      <div class="text-xl font-semibold tracking-tighter">Data</div>
      <div class="flex flex-row flex-wrap gap-x-4 gap-y-0">
        <div class="card w-full">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">DataTable</span>
            <DataTable
              :value="test.test"
              v-model:filters="filters"
              v-model:selection="selected_row"
              class="w-full px-4"
              sortField="id"
              removableSort
              :sortOrder="-1"
              dataKey="id"
              filterDisplay="row"
              paginator
              selection-mode="single"
              :meta-key-selection="false"
              :rows="5"
              :rows-per-page-options="[5, 10, 15]"
              @rowSelect="onRowSelect"
              @rowUnselect="onRowUnselect"
            >
              <template #header>
                <div class="flex justify-end">
                  <IconField>
                    <InputIcon>
                      <i class="pi pi-search" />
                    </InputIcon>
                    <InputText
                      v-model="filters['global'].value"
                      placeholder="Keyword Search"
                    />
                  </IconField>
                </div>
              </template>
              <Column field="id" :sortable="true" header="Code"></Column>
              <Column field="name" sortable header="Name"></Column>
              <Column field="category" sortable header="Category"></Column>
              <Column field="quantity" sortable header="Quantity"></Column>
              <Column
                field="active"
                header="Status"
                dataType="boolean"
                sortable
                style="min-width: 6rem"
              >
                <template #body="{ data }">
                  <div
                    class="flex flex-row items-center justify-start gap-1 text-sm"
                  >
                    <i
                      class="pi"
                      :class="{
                        'pi-check-circle text-green-500': data.active,
                        'pi-times-circle text-red-400': !data.active,
                      }"
                    />
                    <span>
                      {{ data.active ? "Active" : "Inactive" }}
                    </span>
                  </div>
                </template>
              </Column>
            </DataTable>
          </div>
        </div>
        <div class="card w-full">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">DataTable-Scroll</span>
            <DataTable
              :value="test.test"
              v-model:filters="filters"
              v-model:selection="selected_row"
              class="w-full px-4"
              sortField="id"
              removableSort
              :sortOrder="-1"
              dataKey="id"
              filterDisplay="row"
              selection-mode="single"
              :meta-key-selection="false"
              @rowSelect="onRowSelect"
              @rowUnselect="onRowUnselect"
              scrollable
              scrollHeight="400px"
            >
              <template #header>
                <div class="flex justify-end">
                  <IconField>
                    <InputIcon>
                      <i class="pi pi-search" />
                    </InputIcon>
                    <InputText
                      v-model="filters['global'].value"
                      placeholder="Keyword Search"
                    />
                  </IconField>
                </div>
              </template>
              <Column field="id" :sortable="true" header="Code"></Column>
              <Column field="name" sortable header="Name"></Column>
              <Column field="category" sortable header="Category"></Column>
              <Column field="quantity" sortable header="Quantity"></Column>
              <Column
                field="active"
                header="Status"
                dataType="boolean"
                sortable
                style="min-width: 6rem"
              >
                <template #body="{ data }">
                  <div
                    class="flex flex-row items-center justify-start gap-1 text-sm"
                  >
                    <i
                      class="pi"
                      :class="{
                        'pi-check-circle text-green-500': data.active,
                        'pi-times-circle text-red-400': !data.active,
                      }"
                    />
                    <span>
                      {{ data.active ? "Active" : "Inactive" }}
                    </span>
                  </div>
                </template>
              </Column>
            </DataTable>
          </div>
        </div>
        <div class="card w-full">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Timeline</span>
            <Timeline
              :value="test.events"
              class="flex w-full"
              layout="horizontal"
              align="left"
            >
              <template #content="slotProps">
                {{ slotProps.item }}
              </template>
            </Timeline>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-start my-6">
      <div class="text-xl font-semibold tracking-tighter">Panel</div>
      <div class="flex flex-row flex-wrap gap-x-4 gap-y-0">
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Accordion</span>
            <Accordion value="0">
              <AccordionPanel
                v-for="tab in test.tabs"
                :key="tab.title"
                :value="tab.value"
              >
                <AccordionHeader>{{ tab.title }}</AccordionHeader>
                <AccordionContent>
                  <p class="m-0">{{ tab.content }}</p>
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Card</span>
            <Card class="text-start">
              <template #title>Simple Card</template>
              <template #content>
                <p class="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Inventore sed consequuntur error repudiandae numquam deserunt
                  quisquam repellat libero asperiores earum nam nobis, culpa
                  ratione quam perferendis esse, cupiditate neque quas!
                </p>
              </template>
            </Card>
          </div>
        </div>
        <div class="w-full">
          <div class="card">
            <div class="card-content">
              <span class="font-semibold tracking-tighter">Divider</span>
              <span class="text-xs">Divider</span>
              <Divider type="solid" />
              <span class="text-xs">Divider</span>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Fieldset</span>
            <Fieldset legend="Header" :toggleable="true" class="text-start">
              <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Fieldset>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Panel</span>
            <Panel header="Header" toggleable class="text-start">
              <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Panel>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Stepper</span>
            <Stepper value="1">
              <StepList>
                <Step value="1">Header I</Step>
                <Step value="2">Header II</Step>
                <Step value="3">Header III</Step>
              </StepList>
              <StepPanels>
                <StepPanel v-slot="{ activateCallback }" value="1">
                  <div class="flex flex-col h-48">
                    <div
                      class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                      Content I
                    </div>
                  </div>
                  <div class="flex pt-6 justify-end">
                    <Button
                      label="Next"
                      icon="pi pi-arrow-right"
                      iconPos="right"
                      @click="activateCallback('2')"
                    />
                  </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="2">
                  <div class="flex flex-col h-48">
                    <div
                      class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                      Content II
                    </div>
                  </div>
                  <div class="flex pt-6 justify-between">
                    <Button
                      label="Back"
                      severity="secondary"
                      icon="pi pi-arrow-left"
                      @click="activateCallback('1')"
                    />
                    <Button
                      label="Next"
                      icon="pi pi-arrow-right"
                      iconPos="right"
                      @click="activateCallback('3')"
                    />
                  </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="3">
                  <div class="flex flex-col h-48">
                    <div
                      class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                      Content III
                    </div>
                  </div>
                  <div class="pt-6">
                    <Button
                      label="Back"
                      severity="secondary"
                      icon="pi pi-arrow-left"
                      @click="activateCallback('2')"
                    />
                  </div>
                </StepPanel>
              </StepPanels>
            </Stepper>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Tabs</span>
            <Tabs value="0">
              <TabList>
                <Tab value="0">Header I</Tab>
                <Tab value="1">Header II</Tab>
                <Tab value="2">Header III</Tab>
              </TabList>
              <TabPanels>
                <TabPanel value="0">
                  <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </TabPanel>
                <TabPanel value="1">
                  <p class="m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Consectetur, adipisci
                    velit, sed quia non numquam eius modi.
                  </p>
                </TabPanel>
                <TabPanel value="2">
                  <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga. Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore, cum soluta nobis est
                    eligendi optio cumque nihil impedit quo minus.
                  </p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Toolbar</span>
            <Toolbar>
              <template #start>
                <Button
                  icon="pi pi-plus"
                  class="mr-2"
                  severity="secondary"
                  text
                />
                <Button
                  icon="pi pi-print"
                  class="mr-2"
                  severity="secondary"
                  text
                />
                <Button icon="pi pi-upload" severity="secondary" text />
              </template>

              <template #center>
                <IconField>
                  <InputIcon>
                    <i class="pi pi-search" />
                  </InputIcon>
                  <InputText placeholder="Search" />
                </IconField>
              </template>

              <template #end>
                <SplitButton label="Save" :model="splititems"></SplitButton
              ></template>
            </Toolbar>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-start my-6">
      <div class="text-xl font-semibold tracking-tighter">Overlay</div>
      <div class="flex flex-row flex-wrap gap-x-4 gap-y-0">
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">ConfirmDialog</span>
            <ConfirmDialog></ConfirmDialog>
            <Button @click="confirm1()" label="Save" outlined></Button>
            <Button
              @click="confirm2()"
              label="Delete"
              severity="danger"
              outlined
            ></Button>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">ConfirmPopup</span>
            <ConfirmPopup></ConfirmPopup>
            <div class="card flex flex-wrap gap-2 justify-center">
              <Button @click="popup1($event)" label="Save" outlined></Button>
              <Button
                @click="popup2($event)"
                label="Delete"
                severity="danger"
                outlined
              ></Button>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Dialog</span>
            <div class="card flex justify-center">
              <Button label="Show" @click="visible = true" />
              <Dialog
                v-model:visible="visible"
                modal
                header="Edit Profile"
                :style="{ width: '25rem' }"
              >
                <span class="text-surface-500 dark:text-surface-400 block mb-8"
                  >Update your information.</span
                >
                <div class="flex items-center gap-4 mb-4">
                  <label for="username" class="font-semibold w-24"
                    >Username</label
                  >
                  <InputText
                    id="username"
                    class="flex-auto"
                    autocomplete="off"
                  />
                </div>
                <div class="flex items-center gap-4 mb-8">
                  <label for="email" class="font-semibold w-24">Email</label>
                  <InputText id="email" class="flex-auto" autocomplete="off" />
                </div>
                <div class="flex justify-end gap-2">
                  <Button
                    type="button"
                    label="Cancel"
                    severity="secondary"
                    @click="visible = false"
                  ></Button>
                  <Button
                    type="button"
                    label="Save"
                    @click="visible = false"
                  ></Button>
                </div>
              </Dialog>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Drawer</span>
            <div class="card flex justify-center">
              <Drawer v-model:visible="drawer" header="Drawer">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Drawer>
              <Button icon="pi pi-arrow-right" @click="drawer = true" />
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Popover</span>
            <Button
              type="button"
              icon="pi pi-share-alt"
              label="Share"
              @click="toggle"
            />
            <Popover ref="op">
              <div class="flex flex-col gap-4 w-[25rem]">
                <div>
                  <span class="font-medium block mb-2"
                    >Share this document</span
                  >
                  <InputGroup>
                    <InputText
                      value="https://primevue.org/12323ff26t2g243g423g234gg52hy25XADXAG3"
                      readonly
                      class="w-[25rem]"
                    ></InputText>
                    <InputGroupAddon>
                      <i class="pi pi-copy"></i>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
                <div>
                  <span class="font-medium block mb-2">Invite Member</span>
                  <InputGroup>
                    <InputText disabled />
                    <Button label="Invite" icon="pi pi-users"></Button>
                  </InputGroup>
                </div>
                <div>
                  <span class="font-medium block mb-2">Team Members</span>
                  <ul class="list-none p-0 m-0 flex flex-col gap-4">
                    <li
                      v-for="member in members"
                      :key="member.name"
                      class="flex items-center gap-2"
                    >
                      <img
                        :src="`https://primefaces.org/cdn/primevue/images/avatar/${member.image}`"
                        style="width: 32px"
                      />
                      <div>
                        <span class="font-medium">{{ member.name }}</span>
                        <div
                          class="text-sm text-surface-500 dark:text-surface-400"
                        >
                          {{ member.email }}
                        </div>
                      </div>
                      <div
                        class="flex items-center gap-2 text-surface-500 dark:text-surface-400 ml-auto text-sm"
                      >
                        <span>{{ member.role }}</span>
                        <i class="pi pi-angle-down"></i>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Popover>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Tooltip</span>
            <InputText
              v-tooltip.top="'Enter your username'"
              type="text"
              placeholder="Top"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-start my-6">
      <div class="text-xl font-semibold tracking-tighter">File</div>
      <div class="flex flex-row flex-wrap gap-x-4 gap-y-0">
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Upload</span>
            <FileUpload
              name="demo[]"
              url="/api/upload"
              @upload="onAdvancedUpload()"
              :multiple="true"
              accept="image/*"
              :maxFileSize="1000000"
            >
              <template #empty>
                <span>Arraste e solte imagens aqui para fazer o upload.</span>
              </template>
            </FileUpload>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-start my-6">
      <div class="text-xl font-semibold tracking-tighter">Menu</div>
      <div class="flex flex-row flex-wrap gap-x-4 gap-y-0">
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Breadcrumb</span>
            <Breadcrumb :home="home" :model="items" />
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter" aria-haspopup="true"
              >ContextMenu</span
            >
            <p class="mb-0" @contextmenu="onImageRightClick">
              Clique com o botão direito para enxergar o ContextMenu.
            </p>
            <ContextMenu ref="menu" :model="contextmenu" />
          </div>
        </div>
        <div class="card mr-[100%]">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Menu</span>
            <Menu :model="menuitems" />
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Menu-Popup</span>
            <div>
              <Button
                type="button"
                icon="pi pi-ellipsis-v"
                @click="togglemenu"
                aria-haspopup="true"
                aria-controls="overlay_menu"
              />
              <Menu
                ref="menupopup"
                id="overlay_menu"
                :model="menuitems"
                :popup="true"
              />
            </div>
          </div>
        </div>
        <div class="card mr-[100%]">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Menubar</span>
            <Menubar :model="menubar" />
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Megamenu</span>
            <MegaMenu :model="megamenu" />
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-start my-6">
      <div class="text-xl font-semibold tracking-tighter">Chart</div>
      <div class="flex flex-row flex-wrap gap-x-4 gap-y-0">
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Bars</span>
            <Chart
              type="bar"
              :data="chartData"
              :options="chartOptions"
              class="w-[1100px] h-[30rem]"
            />
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Doughnut</span>
            <Chart
              type="doughnut"
              :data="doughnutData"
              :options="doughnutOptions"
              class="h-full"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-start my-6">
      <div class="text-xl font-semibold tracking-tighter">Messages</div>
      <div class="flex flex-row flex-wrap gap-x-4 gap-y-0">
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Message</span>
            <div class="flex flex-row gap-2">
              <Message severity="success">Success Message</Message>
              <Message severity="info">Info Message</Message>
              <Message severity="warn">Warn Message</Message>
              <Message severity="error">Error Message</Message>
              <Message severity="secondary">Secondary Message</Message>
              <Message severity="contrast">Contrast Message</Message>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Toast</span>
            <Button label="Show" @click="show()" />
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-start my-6">
      <div class="text-xl font-semibold tracking-tighter">Media</div>
      <div class="flex flex-row flex-wrap gap-x-4 gap-y-0">
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Carousel</span>
            <Carousel
              :value="test.products"
              :numVisible="3"
              :numScroll="3"
              :responsiveOptions="responsiveOptions"
            >
              <template #item="slotProps">
                <div
                  class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4"
                >
                  <div class="mb-4">
                    <div class="relative mx-auto">
                      <img
                        :src="
                          'https://primefaces.org/cdn/primevue/images/product/' +
                          slotProps.data.image
                        "
                        :alt="slotProps.data.name"
                        class="w-full rounded"
                      />
                      <Tag
                        :value="slotProps.data.inventoryStatus"
                        :severity="getSeverity(slotProps.data.inventoryStatus)"
                        class="absolute"
                        style="left: 5px; top: 5px"
                      />
                    </div>
                  </div>
                  <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
                  <div class="flex justify-between items-center">
                    <div class="mt-0 font-semibold text-xl">
                      ${{ slotProps.data.price }}
                    </div>
                    <span>
                      <Button
                        icon="pi pi-heart"
                        severity="secondary"
                        outlined
                      />
                      <Button icon="pi pi-shopping-cart" class="ml-2" />
                    </span>
                  </div>
                </div>
              </template>
            </Carousel>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Image</span>
            <Image
              src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg"
              alt="Image"
              width="250"
              preview
            />
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-start my-6">
      <div class="text-xl font-semibold tracking-tighter">Misc</div>
      <div class="flex flex-row flex-wrap gap-x-4 gap-y-0">
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">AnimateOnScroll</span>
            <div
              class="default-colors p-4 rounded-lg"
              v-animateonscroll="{
                enterClass: 'animescroll',
                leaveClass: 'animate-fadeout',
              }"
            >
              ease-in-out
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Avatar</span>
            <Avatar
              label="V"
              class="mr-2"
              size="large"
              style="background-color: #ece9fc; color: #2a1261"
              shape="circle"
            />
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Badge</span>
            <div class="flex flex-row gap-2">
              <Badge value="2"></Badge>
              <Badge value="6" severity="secondary"></Badge>
              <Badge value="8" severity="success"></Badge>
              <Badge value="4" severity="info"></Badge>
              <Badge value="9" severity="warn"></Badge>
              <Badge value="3" severity="danger"></Badge>
              <Badge value="5" severity="contrast"></Badge>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">OverlayBadge</span>
            <div class="flex flex-row gap-2">
              <OverlayBadge value="2">
                <i class="pi pi-bell" style="font-size: 2rem" />
              </OverlayBadge>
              <OverlayBadge value="4" severity="danger">
                <i class="pi pi-calendar" style="font-size: 2rem" />
              </OverlayBadge>
              <OverlayBadge severity="danger">
                <i class="pi pi-envelope" style="font-size: 2rem" />
              </OverlayBadge>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Chip</span>
            <div class="flex flex-row gap-2">
              <Chip label="Apple" icon="pi pi-apple" />
              <Chip label="Facebook" icon="pi pi-facebook" />
              <Chip label="Google" icon="pi pi-google" />
              <Chip label="Microsoft" icon="pi pi-microsoft" removable />
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">FocusTrap</span>
            <div v-focustrap class="w-full sm:w-80 flex flex-col gap-6">
              <IconField>
                <InputIcon>
                  <i class="pi pi-user" />
                </InputIcon>
                <InputText
                  id="input"
                  type="text"
                  placeholder="Name"
                  autofocus
                  fluid
                />
              </IconField>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Fluid</span>
            <Fluid>
              <span class="font-bold mb-2 block">Fluid Container</span>
              <div class="grid grid-cols-2 gap-4">
                <div><InputText /></div>
                <div><InputText /></div>
                <div class="col-span-full"><InputText /></div>
                <div><InputText :fluid="false" placeholder="Non-Fluid" /></div>
              </div>
            </Fluid>
          </div>
        </div>
        <div class="w-full">
          <div class="card">
            <div class="w-full">
              <span class="font-semibold tracking-tighter">MeterGroup</span>
              <div>
                <MeterGroup :value="metergroup" />
              </div>
            </div>
          </div>
        </div>
        <div class="w-full">
          <div class="card">
            <div class="w-full">
              <span class="font-semibold tracking-tighter">ProgressBar</span>
              <ProgressBar
                mode="indeterminate"
                style="height: 6px"
              ></ProgressBar>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold">ProgressSpiner</span>
            <ProgressSpinner
              strokeWidth="3"
              fill="transparent"
              animationDuration=".7s"
              aria-label="Custom ProgressSpinner"
            />
          </div>
        </div>
        <div class="card">
          <div>
            <span class="font-semibold tracking-tighter">ScrollToTop</span>
            <div class="flex justify-center">
              <ScrollPanel style="width: 250px; height: 200px">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor
                  magna eget est lorem. Amet consectetur adipiscing elit ut. Nam
                  libero justo laoreet sit amet. Pharetra massa massa ultricies
                  mi quis hendrerit dolor magna. Est ultricies integer quis
                  auctor elit sed vulputate. Consequat ac felis donec et. Tellus
                  orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar
                  proin gravida hendrerit lectus a. Tincidunt arcu non sodales
                  neque sodales. Metus aliquam eleifend mi in nulla posuere
                  sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl
                  purus. Cursus sit amet dictum sit amet. Tristique senectus et
                  netus et malesuada fames ac turpis egestas. Et tortor
                  consequat id porta nibh venenatis cras sed. Diam maecenas
                  ultricies mi eget mauris. Eget egestas purus viverra accumsan
                  in nisl nisi. Suscipit adipiscing bibendum est ultricies
                  integer. Mattis aliquam faucibus purus in massa tempor nec.
                </p>
                <ScrollTop
                  target="parent"
                  :threshold="100"
                  icon="pi pi-arrow-up"
                  :buttonProps="{
                    severity: 'contrast',
                    raised: true,
                    rounded: true,
                  }"
                />
              </ScrollPanel>
            </div>
          </div>
        </div>
        <div class="w-full">
          <div class="card">
            <div class="card-content">
              <span class="font-semibold tracking-tighter">Skeleton</span>
              <div class="flex flex-wrap">
                <div class="w-full xl:w-6/12 p-4">
                  <h5>Rectangle</h5>
                  <Skeleton class="mb-2"></Skeleton>
                  <Skeleton width="10rem" class="mb-2"></Skeleton>
                  <Skeleton width="5rem" class="mb-2"></Skeleton>
                  <Skeleton height="2rem" class="mb-2"></Skeleton>
                  <Skeleton width="10rem" height="4rem"></Skeleton>
                </div>
                <div class="w-full xl:w-6/12 p-4">
                  <h5>Rounded</h5>
                  <Skeleton class="mb-2" borderRadius="16px"></Skeleton>
                  <Skeleton
                    width="10rem"
                    class="mb-2"
                    borderRadius="16px"
                  ></Skeleton>
                  <Skeleton
                    width="5rem"
                    borderRadius="16px"
                    class="mb-2"
                  ></Skeleton>
                  <Skeleton
                    height="2rem"
                    class="mb-2"
                    borderRadius="16px"
                  ></Skeleton>
                  <Skeleton
                    width="10rem"
                    height="4rem"
                    borderRadius="16px"
                  ></Skeleton>
                </div>
                <div class="w-full xl:w-6/12 p-4">
                  <h5 class="mt-4">Square</h5>
                  <div class="flex items-end">
                    <Skeleton size="2rem" class="mr-2"></Skeleton>
                    <Skeleton size="3rem" class="mr-2"></Skeleton>
                    <Skeleton size="4rem" class="mr-2"></Skeleton>
                    <Skeleton size="5rem"></Skeleton>
                  </div>
                </div>
                <div class="w-full xl:w-6/12 p-4">
                  <h5 class="mt-4">Circle</h5>
                  <div class="flex items-end">
                    <Skeleton
                      shape="circle"
                      size="2rem"
                      class="mr-2"
                    ></Skeleton>
                    <Skeleton
                      shape="circle"
                      size="3rem"
                      class="mr-2"
                    ></Skeleton>
                    <Skeleton
                      shape="circle"
                      size="4rem"
                      class="mr-2"
                    ></Skeleton>
                    <Skeleton shape="circle" size="5rem"></Skeleton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Ripple</span>
            <div v-ripple class="ripple-box">Default</div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Tag</span>
            <div class="flex gap-2">
              <Tag value="Primary"></Tag>
              <Tag severity="secondary" value="Secondary"></Tag>
              <Tag severity="success" value="Success"></Tag>
              <Tag severity="info" value="Info"></Tag>
              <Tag severity="warn" value="Warn"></Tag>
              <Tag severity="danger" value="Danger"></Tag>
              <Tag severity="contrast" value="Contrast"></Tag>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-content">
        <span class="font-semibold tracking-tighter"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ripple-box {
  display: flex;
  user-select: none;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  font-weight: bold;
  background: var(--p-content-background);
  border: 1px solid var(--p-content-border-color);
  border-radius: var(--p-content-border-radius);
}
</style>
