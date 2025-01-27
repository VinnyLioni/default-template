import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("appStore", () => {
  const sideBar = ref<boolean>(false);

  function sidebar_control() {
    sideBar.value = !sideBar.value;
  }

  return {
    sideBar,
    sidebar_control,
  };
});
