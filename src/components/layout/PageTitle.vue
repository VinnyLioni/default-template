<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "Page Title",
  },
  icon: {
    type: String,
    default: "pi pi-flag-fill",
  },
});
</script>

<template>
  <div class="row-center gap-2">
    <i :class="`pi ${props.icon} text-green-300`" style="font-size: 1.5rem"></i>
    <span class="text-2xl font-bold tracking-tighter">{{ props.title }}</span>
  </div>
</template>
