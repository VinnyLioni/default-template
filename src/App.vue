<script setup lang="ts">
import SetDark from "./components/layout/SetDark.vue";
</script>

<template>
  <div>
    <SetDark />
    <Toast />
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
