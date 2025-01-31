<script setup lang="ts">
import { useAppStore } from "../../store/appStore";

const appStore = useAppStore();
</script>

<template>
  <button
    class="sm:hidden ml-auto space-y-2 rounded openBar flex flex-col"
    @click="appStore.sidebar_control()"
  >
    <div
      class="content-[''] w-8 h-1 rounded-md bg-gray-500 dark:bg-green-300 duration-200 ease-in openBar transition-all"
      :class="appStore.sideBar ? ' rotate-6' : ''"
    ></div>
    <div
      class="content-[''] w-8 h-1 rounded-md bg-gray-500 dark:bg-green-300 duration-200 ease-in openBar transition-all"
      :class="appStore.sideBar ? '' : ''"
    ></div>
    <div
      class="content-[''] w-8 h-1 rounded-md bg-gray-500 dark:bg-green-300 duration-200 ease-in openBar transition-all"
      :class="appStore.sideBar ? ' -rotate-6' : ''"
    ></div>
  </button>
</template>
