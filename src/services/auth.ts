import { defineStore } from "pinia";
import {
  browserSessionPersistence,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../api/firebase";
import { useRouter } from "vue-router";
import { useSessionStorage } from "@vueuse/core";

export const useAuthStore = defineStore("authStore", () => {
  const router = useRouter();
  interface User {
    displayName: string;
    email: string;
    photoURL: string;
    uid: string;
    emailVerified: boolean;
    metadata: {
      creationTime: string;
      lastSignInTime: string;
    };
  }

  interface Userdetal {
    displayName: string;
    email: string;
    photoUrl: string;
    emailVerified: boolean;
    uid: string;
  }

  const user = <User | null>null;
  const userDetail = useSessionStorage<Userdetal>("userDetail", {
    displayName: "",
    email: "",
    photoUrl: "",
    uid: "",
    emailVerified: false,
  });

  async function loginGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      if (result && result.user) {
        await handleLogin(result.user);
        router.push({ name: "home" });
      }
    } catch (e: any) {
      console.error(e);
    }
  }

  async function handleLogin(user: any) {
    const userData: User = {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid,
      emailVerified: user.emailVerified,
      metadata: {
        lastSignInTime: user.metadata.lastSignInTime,
        creationTime: user.metadata.creationTime,
      },
    };

    user.value = userData;
  }

  async function initUser() {
    setPersistence(auth, browserSessionPersistence);
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        userDetail.value = {
          displayName: user.displayName || "",
          email: user.email || "",
          photoUrl: user.photoURL || "",
          uid: user.uid || "",
          emailVerified: user.emailVerified || false,
        };
      } else {
        router.replace({ name: "login" });
      }
    });
  }

  async function logout() {
    userDetail.value = null;
    await signOut(auth);
  }

  return {
    user,
    loginGoogle,
    initUser,
    userDetail,
    logout,
  };
});
