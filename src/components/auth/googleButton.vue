<script setup lang="ts"></script>

<template>
  <button v-ripple
    class="bg-gray-600 dark:bg-gray-100 w-11/12 sm:w-8/12 px-2 py-2 sm:py-1 2xl:py-2 flex flex-row items-center justify-center cursor-pointer hover:scale-105 duration-150 rounded-xs"
  >
    <span
      class="tracking-tighter font-semibold text-gray-100 dark:text-gray-900 flex-1 ml-4 sm:text-sm 2xl:text-base"
      >Entrar com o Google</span
    >
    <div class="overflow-hidden w-6 flex items-center ml-auto">
      <img src="/google.svg" alt="" />
    </div>
  </button>
</template>
