<script setup lang="ts">
import SetDark from "./components/layout/SetDark.vue";
import { useSeoMeta } from "@unhead/vue";
import { appConfig } from "./api/config";

const config = appConfig();

useSeoMeta({
  title: `${config.appTitle}-${config.appDescriptor}`,
  description: "My about page",
  ogDescription: "Still about my about page",
  twitterCard: "summary_large_image",
});
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
