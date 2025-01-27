<script setup lang="ts">
import Clock from "../components/layout/Clock.vue";
import { appConfig } from "../api/config";
import { ref } from "vue";

const config = appConfig();
const currentDate = ref(new Date());

const formattedDate = currentDate.value.toLocaleDateString("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});
</script>

<template>
  <div class="w-full h-full flex flex-col items-start px-3 my-2">
    <span class="-tracking-widest font-bold text-xl dark:text-slate-100 text-slate-800"
      >Olá, {{ config.username }}</span
    >
    <div class="flex flex-row gap-1">
      <span
        class="text-xs dark:text-slate-400 text-slate-600 font-semibold tracking-tighter"
        >{{ formattedDate }}</span
      >
      <Clock />
    </div>
  </div>
</template>
