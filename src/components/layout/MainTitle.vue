<script setup lang="ts">
import { appConfig } from "../../api/config";

const config = appConfig();
</script>

<template>
  <header class="flex">
    <img
      :src="`/${config.logo}.svg`"
      loading="lazy"
      class="w-12 sm:w-20 drop-shadow-xl shadow-gray-800"
    />
    <div class="flex flex-col items-start justify-center">
      <span
        class="capitalize text-3xl sm:text-4xl tracking-tighter font-bold flex flex-row text-gray-800 dark:text-gray-100"
        >{{ config.appTitle }}
        <p
          class="dark:text-green-300 text-gray-500 capitalize tracking-tighter font-bold"
        >
          {{ config.appDescriptor }}
        </p></span
      >
      <span
        class="text-gray-800 dark:text-gray-100 capitalize text-[0.7rem] sm:text-sm tracking-tighter ml-1 -mt-1 font-semibold"
        >{{ config.appPhrase }}</span
      >
    </div>
  </header>
</template>
