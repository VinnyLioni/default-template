<script setup lang="ts">
import { appConfig } from "../../api/config";

const config = appConfig();
</script>

<template>
  <header class="flex justify-center items-center mb-10">
    <div class="overflow-hidden rounded-full w-20 h-20 shiny">
      <img :src="`/${config.logo}.svg`" alt="" />
    </div>
    <div class="flex flex-col items-start justify-center">
      <span
        class="text-gray-800 dark:text-gray-100 capitalize text-3xl sm:text-5xl tracking-tighter font-bold flex flex-row"
        >{{ config.appTitle }}
        <p
          class="dark:text-green-300 text-gray-500 capitalize tracking-tighter font-bold"
        >
          {{ config.appDescriptor }}
        </p></span
      >
      <span
        class="text-gray-800 dark:text-gray-100 capitalize text-[0.7rem] sm:text-[0.8rem] sm:text-lg tracking-tighter ml-1 -mt-1 font-medium"
        >{{ config.appPhrase }}</span
      >
    </div>
  </header>
</template>
