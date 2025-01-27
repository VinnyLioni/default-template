import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("authStore", () => {
  const token = ref("");
  const username = ref("");
  const email = ref("");

  function set_token(new_token: string) {
    token.value = new_token;
  }

  function set_username(new_username: string) {
    username.value = new_username;
  }

  function set_email(new_email: string) {
    email.value = new_email;
  }

  const user = {
    id: "",
    name: "",
    mail: "",
    photo: "",
  };

  return {
    token,
    username,
    email,
    set_token,
    set_username,
    set_email,
    user,
  };
});
