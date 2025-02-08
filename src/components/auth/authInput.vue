<script setup lang="ts">
  defineProps({
    title: String,
    name: String,
    type: String
  })

  const model = defineModel()
</script>

<template>
  <div class="flex w-full flex-col items-start justify-center">
    <label :for="name" class=" text-gray-600 dark:text-gray-100 font-semibold tracking-tighter sm:text-sm 2xl:text-lg">{{ title }}</label>
    <input disabled placeholder="Em breve..." :name="name" :type="type" v-model="model" class="w-full text-gray-700 dark:text-gray-100 bg-neutral-300 dark:bg-gray-950 px-2 py-1 2xl:py-2 rounded-sm outline-0 border-2 border-gray-300 dark:border-gray-950 duration-200 dark:focus:border-green-300 focus:border-green-500 dark:focus:ring-green-300 focus:ring-green-500 dark:focus:shadow-green-300 focus:shadow-green-500">
  </div>
</template>