<script setup lang="ts">
import AppTitle from "../components/layout/AppTitle.vue";
import GoogleButton from "../components/auth/googleButton.vue";
import LoginForm from "../components/auth/loginForm.vue";
import { useRouter } from "vue-router";
import { appConfig } from "../api/config";
// import { useAuthStore } from "../store/authStore";

// const authStore = useAuthStore();

// const appStore = useAppStore();

const router = useRouter();
const config = appConfig();

function go_home() {
  router.push({ name: "home" });
}
</script>

<template>
  <div class="default-colors w-screen h-screen p-2 row-center transition-colors">
    <div
      class="w-7/12 bg-gray-100 dark:bg-neutral-100 h-full relative hidden sm:flex p-10 rounded-sm overflow-hidden shadow-sm"
    >
      <img :src="`/${config.splash}.svg`" alt="" class="z-30" />
      <img
        :src="`/${config.background}.svg`"
        alt=""
        class="z-10 absolute inset-0 w-full h-full object-cover"
      />
    </div>
    <div
      class="sm:w-5/12 w-full relative flex flex-col items-center justify-start h-full overflow-hidden"
    >
      <AppTitle />
      <Transition name="page-slide" mode="out-in">
        <div class="w-full flex flex-col items-center justify-center space-y-6">
          <div
            class="text-gray-600 dark:text-neutral-100 sm:text-xl 2xl:text-3xl text-xl font-bold"
          >
            <span>Bem vindo</span>
          </div>
          <GoogleButton />
          <div class="flex flex-row items-center space-x-2">
            <div class="content-[''] w-32 h-[1px] bg-gray-500 rounded-sm"></div>
            <span class="text-gray-500 text-xs">Ou</span>
            <div class="content-[''] w-32 h-[1px] bg-gray-500"></div>
          </div>
          <LoginForm @login="go_home" />
        </div>
        <!-- <div
          class="w-full flex flex-col items-center justify-center space-y-6"
          v-else
        >
          <div
            class="text-gray-600 dark:text-gray-100 sm:text-xl 2xl:text-3xl text-xl font-bold"
          >
            <div class="flex flex-col">
              <span
                class="tracking-tighter font-bold text-2xl sm:text-xl 2xl:text-3xl text-green-400"
                >Seja bem vindo!</span
              >
              <div class="flex flex-row items-center space-x-1">
                <span
                  class="tracking-tighter font-bold text-2xl sm:text-xl 2xl:text-2xl -mt-2"
                  >Crie a sua conta aqui</span
                >
              </div>
            </div>
          </div>
          <SignupForm />
        </div> -->
      </Transition>
      <footer class="mt-auto">
        <span class="text-xs"
          >© {{ config.author }} {{ config.year }}. Todos os direitos
          reservados.</span
        >
      </footer>
    </div>
  </div>
</template>
