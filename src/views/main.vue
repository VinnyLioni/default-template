<script setup lang="ts">
import Clock from "../components/layout/Clock.vue";
import { appConfig } from "../api/config";
import { ref } from "vue";
import { useAppController } from "../controllers/appController";

const config = appConfig();
const appController = useAppController();
const currentDate = ref(new Date());

const formattedDate = currentDate.value.toLocaleDateString("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});
</script>

<template>
  <div class="flex flex-col items-start px-3 my-2">
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
    <div class="default-text w-full flex flex-col gap-2">
      <Button label="Teste" />
      <SelectButton
        v-model="appController.tableSize"
        :options="appController.sizeOptions"
        option-label="label"
        data-key="label"
      />
    </div>
  </div>
</template>
