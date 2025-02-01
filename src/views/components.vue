<script setup lang="ts">
import PageTitle from "../components/layout/PageTitle.vue";

import { testData } from "../api/test";
import { FloatLabel } from "primevue";
import { ref } from "vue";
import { FilterMatchMode } from "@primevue/core";
import { useToast } from "primevue/usetoast";
const toast = useToast();
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

const test = testData();
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
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter">Divider</span>
            <span class="text-xs">Divider</span>
            <Divider type="solid" />
            <span class="text-xs">Divider</span>
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
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter"></span>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter"></span>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="font-semibold tracking-tighter"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
