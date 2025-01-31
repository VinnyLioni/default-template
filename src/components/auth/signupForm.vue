<script setup lang="ts">
  import authInput from './authInput.vue';
  import { useAppStore } from '../../store/appStore';
  import { ref } from 'vue';
  // import { useRouter } from 'vue-router';
  import { useAuthStore } from '../../store/authStore';

  const appStore = useAppStore()
  // const router = useRouter()

  const form = ref({
    email: '',
    password: '',
    displayName: ''
  })

  const authStore = useAuthStore()


</script>

<template>
  <form class="w-11/12 sm:w-8/12 space-y-6 sm:space-y-3 2xl:space-y-10" @submit.prevent="authStore.register(form)">
    <authInput title="Nome" type="text" v-model="form.displayName"/>
    <authInput title="E-mail" type="email" v-model="form.email"/>
    <authInput title="Senha" type="password" v-model="form.password"/>
    <authInput title="Confirme a Senha" type="password"/>
    <div class="flex flex-col space-y-4">
      <span class="text-gray-500 text-sm sm:text-xs 2xl:text-sm">Esqueceu a Senha?</span>
      <button class="bg-green-500 text-gray-100 py-2 sm:py-1 rounded shadow" type="submit">
        <span class="text-sm sm:text-xs 2xl:text-sm">Cadastrar</span>
      </button>
      <span class="text-gray-500 text-sm sm:text-xs 2xl:text-sm" @click="appStore.changeForm()">Voltar para Login</span>
    </div>
  </form>
</template>