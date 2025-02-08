<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <button
    class="fixed z-50 cursor-pointer hidden sm:flex items-center hover:scale-120 duration-150 justify-center right-4 top-5 p-2 bg-white shadow shadow-gray-400 dark:shadow-gray-900 text-gray-700 dark:bg-gray-700 dark:text-green-300 rounded-full"
    @click="toggleDark()"
  >
    <i v-if="isDark" class="pi pi-moon"></i>
    <i v-else class="pi pi-sun"></i>
  </button>
</template>
