<script setup lang="ts">
const props = defineProps({
  icon: String,
  title: String,
  customClass: String,
});
</script>

<template>
  <div
    :class="props.customClass"
    class="w-full transition duration-150 ease-in-out flex items-center justify-start space-x-4 hover:bg-neutral-300 dark:hover:bg-gray-700 focus:bg-neutral-300 dark:focus:bg-gray-700 px-4 py-3 sm:py-2 2xl:py-3 rounded cursor-pointer"
  >
    <i
      :class="`pi ${props.icon} -mt-1 text-neutral-600 dark:text-green-300`"
      style="font-size: 1.5rem"
    ></i>
    <span class="text-lg 2xl:text-xl font-semibold tracking-tighter">
      {{ props.title }}
    </span>
  </div>
</template>
