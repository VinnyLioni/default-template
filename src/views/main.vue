<script setup lang="ts">
import Clock from "../components/layout/Clock.vue";
import { computed, ref } from "vue";
import { useAuthStore } from "../services/auth";

const authStore = useAuthStore();
const currentDate = ref(new Date());

const formattedDate = currentDate.value.toLocaleDateString("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

const userDisplayName = computed(() => {
  return authStore.userDetail?.displayName || 'Usuário';
});
</script>

<template>
  <div class="flex flex-col items-start px-3 my-2">
    <span class="-tracking-widest font-bold text-xl default-text"
      >Olá, {{ userDisplayName }}</span
    >
    <div class="flex flex-row gap-1">
      <span
        class="text-xs dark:text-neutral-400 text-gray-600 font-semibold tracking-tighter"
        >{{ formattedDate }}</span
      >
      <Clock />
    </div>
  </div>
</template>
