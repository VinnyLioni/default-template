<script setup lang="ts">
import { onMounted } from "vue";

import SideBar from "../components/layout/SideBar.vue";
import MainTitle from "../components/layout/MainTitle.vue";
import { useAppStore } from "../store/appStore";
import BarsButton from "../components/layout/BarsButton.vue";

const appStore = useAppStore();

const handleClick = (event: MouseEvent) => {
  const sidebar = document.getElementById("sidebar");
  const target = event.target as HTMLElement;

  if (
    sidebar &&
    !sidebar.contains(target) &&
    appStore.sideBar &&
    !target.classList.contains("openBar")
  ) {
    appStore.sidebar_control();
  }
};

onMounted(() => {
  document.addEventListener("click", handleClick);
});
</script>

<template>
  <div class="flex">
    <SideBar />
    <div class="h-full w-full flex-col sm:ml-16 p-2 justify-start items-start relative">
      <MainTitle />
      <div class="ml-auto p-2 absolute right-2 top-2">
        <BarsButton />
      </div>
      <RouterView />
    </div>
  </div>
</template>
