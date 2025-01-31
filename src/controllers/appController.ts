import { defineStore } from "pinia";
import { ref } from "vue";
import { useStorage } from "@vueuse/core";

export const useAppController = defineStore("appController", () => {
  const tableSize = useStorage("table-size", {
    label: "Normal",
    value: undefined,
  });

  const sizeOptions = ref([
    {
      label: "Pequena",
      value: "small",
    },
    {
      label: "Normal",
      value: undefined,
    },
    {
      label: "Grande",
      value: "large",
    },
  ]);

  return {
    tableSize,
    sizeOptions,
  };
});
