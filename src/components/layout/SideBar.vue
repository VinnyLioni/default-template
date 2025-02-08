<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useAppStore } from "../../store/appStore";
import { useAuthStore } from "../../services/auth";
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
  authStore.logout();
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
      route_name: item.name,
      showNav: item.meta?.showNav,
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
        ? 'w-full h-full dark:bg-gray-900/80 bg-neutral-300/50 overflow-hidden fixed top-0 z-30 duration-200 ease-in'
        : 'z-30 duration-200 ease-in'
    "
  >
    <aside
      id="sidebar"
      class="h-full bg-white dark:bg-gray-800 shadow-sm text-gray-900 dark:text-gray-100 fixed top-0 transition-all duration-200 ease-in flex flex-col"
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
              :src="authStore.userDetail?.photoUrl || '/gataticos.webp'"
              alt=""
              class="rounded-full transition-all my-4 duration-200 ml-2 border-2 border-gray-700 dark:border-green-300 w-14 h-14"
              :class="appStore.sideBar ? 'sm:w-16 sm:h-14' : 'sm:w-10 sm:h-10'"
            />
            <transition name="fade">
              <div
                class="w-full flex flex-col items-start tracking-tighter font-semibold -space-y-1"
                v-if="appStore.sideBar"
              >
                <div
                  class="truncate transition-all sm:text-2xl duration-200 ease-in text-xl border-gray-700 dark:text-green-300 -tracking-widest"
                >
                  {{ authStore.userDetail?.displayName || "Seja bem Vindo!" }}
                </div>
                <div
                  class="truncate transition-all duration-200 ease-in sm:text-base text-sm"
                >
                  {{ authStore.userDetail?.email }}
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
          <div
            class="w-8 h-[4px] rounded-sm bg-gray-700 dark:bg-green-300"
          ></div>
          <div
            class="w-8 h-[4px] rounded-sm bg-gray-700 dark:bg-green-300"
          ></div>
          <div
            class="w-8 h-[4px] rounded-sm bg-gray-700 dark:bg-green-300"
          ></div>
        </div>
      </transition>
      <transition name="fade">
        <div class="w-full flex justify-center pt-6" v-if="appStore.sideBar">
          <div
            class="w-10/12 h-[2px] rounded-sm bg-neutral-400 dark:bg-gray-700"
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
            <template v-for="options in filterNavs" :key="options">
              <SideOption
                :title="options.title"
                :icon="options.icon"
                :custom-class="
                  currentRoute == options.name
                    ? 'bg-neutral-300 dark:bg-green-300/80 hover:bg-neutral-400/70 hover:dark:bg-green-300/70'
                    : ''
                "
                @click="changeRoute(options.route_name)"
              />
            </template>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <footer
          class="mt-auto transition-all duration-200 flex justify-center"
          v-if="appStore.sideBar"
        >
          <button
            v-ripple
            @click="logoff"
            class="bg-neutral-300 dark:bg-gray-700 text-gray-700 dark:text-gray-100 w-full p-2 m-2 rounded-sm shadow-sm font-semibold tracking-tighter text-lg hover:scale-102 duration-150 cursor-pointer"
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
  transition: opacity 0.1s cubic-bezier(0.455, 0.03, 0.515, 0.955),
              transform 0.1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

.fast-fade-enter-from,
.fast-fade-leave-to {
  opacity: 0;
  transform: translateY(20px); /* Move o elemento 20px para a esquerda */

}
</style>
