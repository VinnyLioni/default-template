<script setup lang="ts">
import Clock from "../components/layout/Clock.vue";
import { appConfig } from "../api/config";
import { ref } from "vue";
import { testData } from "../api/test";

const config = appConfig();
const test = testData()
const currentDate = ref(new Date());

const formattedDate = currentDate.value.toLocaleDateString("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});
</script>

<template>
  <div class="w-full h-full flex flex-col items-start px-3 my-2">
    <span class="-tracking-widest font-bold text-xl default-text"
      >Olá, {{ config.username }}</span
    >
    <div class="flex flex-row gap-1">
      <span
        class="text-xs dark:text-neutral-400 text-gray-600 font-semibold tracking-tighter"
        >{{ formattedDate }}</span
      >
      <Clock />
    </div>
    <div class="default-text h-full w-full row-center">
      <Button label="Teste"/>
      <DataTable :value="test.test" class="w-full m-4">
        <Column field="id" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </DataTable>
    </div>
  </div>
</template>
