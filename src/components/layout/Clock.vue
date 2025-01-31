<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

defineProps({
  customClass: String,
});

const time = ref<string>("");

const updateTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  time.value = `${hours}:${minutes}:${seconds}`;
};

onMounted(() => {
  updateTime();
  const interval = setInterval(updateTime, 1000);
  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>

<template>
  <span
    class="text-xs w-10 dark:text-gray-400 text-gray-600 font-semibold tracking-tighter"
    >{{ time }}</span
  >
</template>
