<script setup lang="ts">
import SetDark from "./components/layout/SetDark.vue";
</script>

<template>
  <div
    class="h-screen w-screen bg-neutral-200 dark:bg-gray-800 relative duration-200 ease-in-out"
  >
    <SetDark />
    <RouterView v-slot="{ Component }" class="">
      <Transition name="router-slide" mode="out-in">
        <KeepAlive>
          <component :is="Component"></component>
        </KeepAlive>
      </Transition>
    </RouterView>
  </div>
</template>

<style scoped></style>
