<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useAppStore } from "../../store/appStore";
import { useAuthStore } from "../../store/authStore";
import SideOption from "./SideOption.vue";
import { useDark, useToggle } from "@vueuse/core";
import { computed, onMounted, ref } from "vue";

const isDark = useDark();
useToggle(isDark);

const appStore = useAppStore();
const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

const changeRoute = (payload: string) => {
  router.push({ name: payload });
  appStore.sidebar_control();
};

const logoff = async () => {
  router.push({ name: "login" });
};

const optionsNav = ref<any>([]);

const filterNavs = computed(() => {
  return optionsNav.value.filter((item: any) => {
    return item.showNav;
  });
});

const currentRoute = computed(() => {
  return route.meta.module;
});

onMounted(() => {
  optionsNav.value = router.options.routes[1].children?.map((item) => {
    return {
      title: item.meta?.title,
      name: item.meta?.name,
      route: item.path,
      mode: item.meta?.mode,
      showNav: item.meta?.showNav,
      parent: item.meta?.parent,
      icon: item.meta?.icon,
    };
  });

  console.log(optionsNav.value);
  console.log("rota atual", currentRoute.value, optionsNav.value[0].name);
});
</script>

<template>
  <div
    class="duration-200 ease-in transition-all"
    :class="
      appStore.sideBar
        ? 'w-full h-full dark:bg-slate-900/80 bg-neutral-300/50 overflow-hidden fixed top-0 z-30 duration-200 ease-in'
        : 'z-30 duration-200 ease-in'
    "
  >
    <aside
      id="sidebar"
      class="h-full bg-neutral-100 dark:bg-slate-900 shadow text-slate-900 dark:text-slate-100 fixed top-0 transition-all duration-200 ease-in flex flex-col"
      :class="appStore.sideBar ? 'sm:w-96 w-10/12' : 'sm:w-14 w-0'"
    >
      <transition name="fade">
        <header
          class="flex justify-center flex-row relative w-full items-center pt-3 duration-200 ease-in transition-all"
          :class="appStore.sideBar ? '' : 'opacity-0 sm:opacity-100'"
        >
          <div
            class="flex flex-row justify-start items-center space-x-2 w-full"
          >
            <img
              :src="authStore.user?.photo || '/gataticos.webp'"
              alt=""
              class="rounded-full transition-all my-4 duration-200 ml-2 border-2 border-slate-700 dark:border-green-300 w-14 h-14"
              :class="appStore.sideBar ? 'sm:w-16 sm:h-14' : 'sm:w-10 sm:h-10'"
            />
            <transition name="fade">
              <div
                class="w-full flex flex-col items-start tracking-tighter font-semibold -space-y-1"
                v-if="appStore.sideBar"
              >
                <div
                  class="truncate transition-all sm:text-2xl duration-200 ease-in text-xl border-slate-700 dark:text-green-300 -tracking-widest"
                >
                  {{ authStore.user?.name || "Seja bem Vindo!" }}
                </div>
                <div
                  class="truncate transition-all duration-200 ease-in sm:text-base text-sm"
                >
                  {{ authStore.user?.mail }}
                </div>
              </div>
            </transition>
          </div>
          <transition name="fade">
            <button
              @click="appStore.sidebar_control()"
              class="sm:hidden ml-auto flex flex-col justify-center items-center pr-2"
              v-if="appStore.sideBar"
            ></button>
          </transition>
        </header>
      </transition>
      <transition name="fast-fade">
        <div
          class="fixed hidden sm:flex flex-col cursor-pointer items-center justify-center space-y-1 transition-all duration-200 top-20 left-3"
          @click="appStore.sidebar_control()"
          v-if="!appStore.sideBar"
          :class="appStore.sideBar ? '' : 'bg-transparent duration-75'"
        >
          <div class="w-8 h-[4px] rounded bg-slate-700 dark:bg-green-300"></div>
          <div class="w-8 h-[4px] rounded bg-slate-700 dark:bg-green-300"></div>
          <div class="w-8 h-[4px] rounded bg-slate-700 dark:bg-green-300"></div>
        </div>
      </transition>
      <transition name="fade">
        <div class="w-full flex justify-center pt-6" v-if="appStore.sideBar">
          <div
            class="w-10/12 h-[2px] rounded bg-neutral-400 dark:bg-slate-700"
          />
        </div>
      </transition>
      <transition name="fade">
        <div
          class="h-full w-full mt-3 sm:mt-6 2xl:mt-10 truncate"
          v-if="appStore.sideBar"
        >
          <div
            class="w-full flex flex-col pb-8 items-center justify-start space-y-1 sm:space-y-2 sm:px-4 px-2 h-full overflow-y-auto overflow-x-hidden"
          >
            <template v-for="(options) in filterNavs" :key="options">
              <SideOption
                :title="options.name"
                :icon="options.icon"
                :custom-class="
                  currentRoute == options.name ? 'bg-neutral-300 dark:bg-slate-700' : ''
                "
              />
            </template>
            <!-- <SideOption
              icon="home"
              title="Início"
              @click="changeRoute('home')"
            />
            <SideOption
              icon="inventory_2"
              title="Area de Produtos"
              @click="changeRoute('items-index')"
            />
            <SideOption
              icon="handshake"
              title="Parceiros de Negócios"
              @click="changeRoute('partners-index')"
            />
            <SideOption
              icon="shopping_cart"
              title="Painel de Vendas"
              @click="changeRoute('seller-index')"
            />
            <SideOption
              icon="local_shipping"
              title="Painel de Compras"
              @click="changeRoute('buyer-index')"
            />
            <SideOption
              icon="package_2"
              title="Área de Estoque"
              @click="changeRoute('warehouse-index')"
            />
            <SideOption
              icon="monitoring"
              title="Painel Financeiro"
              @click="changeRoute('finance-index')"
            />
            <SideOption
              icon="settings"
              title="Ajustes"
              @click="changeRoute('support-index')"
            /> -->
            <!-- <div
              class="w-full flex items-center justify-start space-x-4 hover:bg-neutral-300 dark:hover:bg-slate-700 px-4 py-3 rounded cursor-pointer duration-200 ease-in-out transition"
            >
              <div
                class="flex flex-row items-center space-x-2"
              >
                <span
                  class="material-symbols-rounded text-slate-700 dark:text-green-300 mr-3"
                  v-if="!isDark"
                  >light_mode</span
                >
                <span
                  class="material-symbols-rounded text-slate-700 dark:text-green-300 mr-3"
                  v-else
                  >dark_mode</span
                >
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    class="sr-only peer"
                    v-model="isDark"
                  />
                  <div
                    class="relative w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-neutral-300 dark:peer-focus:ring-slate-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-green-300 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-slate-100 dark:after:bg-slate-700 after:border-green-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-green-300"
                  ></div>
                </label>
              </div>
            </div> -->
          </div>
        </div>
      </transition>
      <transition name="fade">
        <footer
          class="mt-auto transition-all duration-200 flex justify-center"
          v-if="appStore.sideBar"
        >
          <button
            @click="logoff"
            class="bg-neutral-300 dark:bg-slate-700 text-slate-700 dark:text-slate-100 w-full p-2 m-2 rounded shadow font-semibold tracking-tighter text-lg hover:scale-102 duration-150 cursor-pointer"
          >
            <span>Sair</span>
          </button>
        </footer>
      </transition>
    </aside>
  </div>
</template>

<style>
@reference "tailwindcss/theme";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fast-fade-enter-active,
.fast-fade-leave-active {
  transition: opacity 0.1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

.fast-fade-enter-from,
.fast-fade-leave-to {
  opacity: 0;
}

</style>
