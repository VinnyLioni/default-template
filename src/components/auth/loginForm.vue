<script setup lang="ts">
// import { useRouter } from "vue-router";
import authInput from "./authInput.vue";
// import { useAppStore } from '../../store/appStore';
import { ref } from "vue";
// import useAuthUser from '../../composables/useAuth';
// import { useRouter } from 'vue-router';
// import { useAuthStore } from '../../store/authStore';

// const appStore = useAppStore();
// const authStore = useAuthStore();

// const router = useRouter()
// const { login } = useAuthUser()

const form = ref({
  email: "",
  password: "",
});

const emits = defineEmits(["login"]);

function login() {
  emits("login", form);
}
</script>

<template>
  <form
    class="w-11/12 sm:w-8/12 space-y-6 sm:space-y-3 2xl:space-y-10"
    @submit.prevent="login"
  >
    <authInput title="E-mail" type="email" v-model="form.email" />
    <authInput title="Senha" type="password" v-model="form.password" />
    <div class="flex flex-col space-y-4">
      <span class="text-gray-500 text-sm sm:text-xs 2xl:text-sm"
        >Esqueceu a Senha?</span
      >
      <button
        class="bg-green-500 text-gray-100 py-2 sm:py-1 rounded-xs shadow default-hover cursor-pointer"
        type="submit"
      >
        <span class="text-sm sm:text-xs 2xl:text-sm">Entrar</span>
      </button>
      <span class="text-gray-500 text-sm sm:text-xs 2xl:text-sm"
        >Não possui conta? Cadastre-se aqui</span
      >
    </div>
  </form>
</template>
