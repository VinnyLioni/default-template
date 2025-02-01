<script setup lang="ts">
import PageTitle from "../components/layout/PageTitle.vue";

import { testData } from "../api/test";
import { FloatLabel } from "primevue";

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
        <!-- <div class="card">
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
        </div> -->
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
            <SpeedDial
              :model="test.items"
              direction="right"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
