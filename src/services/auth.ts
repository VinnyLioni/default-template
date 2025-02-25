import { defineStore } from "pinia";
import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../api/firebase";
import { useRouter } from "vue-router";
import { useSessionStorage } from "@vueuse/core";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { appConfig } from "../api/config";
import { ref } from "vue";

export const useAuthStore = defineStore("authStore", () => {
  const router = useRouter();
  const config = appConfig();
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

  interface Userdetail {
    displayName: string;
    email: string;
    photoUrl: string;
    emailVerified: boolean;
    uid: string;
  }

  const user = <User | null>null;
  const userDetail = useSessionStorage<Userdetail>("userDetail", {
    displayName: "",
    email: "",
    photoUrl: "",
    uid: "",
    emailVerified: false,
  });

  async function login_google() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      if (result && result.user) {
        await handle_login(result.user);
        router.push({ name: "home" });
      }
    } catch (e: any) {
      console.error(e);
    }
  }

  async function handle_constraints(email: string) {
    for (const app_constraint of config.constraints) {
      const collectionRef = doc(
        db,
        "data",
        email,
        "constraints",
        app_constraint
      );
      await setDoc(collectionRef, {});
    }
  }

  async function handle_business(email: string) {
    for (const app_business of config.business) {
      const collectionRef = doc(
        db,
        "data",
        email,
        "business",
        app_business.name
      );
      await setDoc(collectionRef, app_business.meta);
    }
  }

  async function handle_login(user: any) {
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

    const data = { id: user.value.uid, account: user.value.email };
    const new_user = {
      id: user.value.uid,
      email: user.value.email,
      free: true,
    };

    const userDocRef = doc(db, "users", user.value.uid);
    const newUserDocRef = doc(db, "data", user.value.email);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      const userDataSnapshot = await getDoc(newUserDocRef);
      const businessRef = doc(
        db,
        "data",
        user.value.email,
        "business",
        "filial"
      );
      const businessSnap = await getDoc(businessRef);
      const constraintRef = collection(
        db,
        "data",
        user.value.email,
        "constraints"
      );
      const constraintSnap = await getDocs(constraintRef);
      if (constraintSnap.empty) {
        handle_constraints(user.value.email);
      }

      if (businessSnap.exists()) {
        handle_business(user.value.email);
      }

      if (userDataSnapshot.exists()) {
        const userData = userDataSnapshot.data();
        userData;
      }
    } else {
      try {
        await setDoc(userDocRef, data);
        await default_register(user.value.uid, user.value.email);
        await setDoc(newUserDocRef, new_user);
      } catch (e: any) {
        console.error(e);
      }
    }
  }

  async function init_user() {
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

  async function register_user(credentials: {
    email: string;
    password: string;
    displayName: string;
  }) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: credentials.displayName,
        });
        await sendEmailVerification(auth.currentUser);

        const data = {
          id: userCredential.user.uid,
          email: userCredential.user.email,
        };

        const newData = {
          id: userCredential.user.uid,
          email: userCredential.user.email,
          free: true,
        };

        const userDocRef = doc(db, "users", userCredential.user.uid);
        const userDataDocRef = doc(
          db,
          "data",
          userCredential.user.email || userCredential.user.uid
        );

        await setDoc(userDocRef, data);
        await setDoc(userDataDocRef, newData);
        default_register(
          userCredential.user.uid,
          userCredential.user.email || userCredential.user.uid
        );
      }
      router.replace({ name: "home" });
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async function default_register(uid: string, email: string) {
    try {
      const init = ref("1");
      const new_init = { maxCodi: "2" };
      const third_codi = { maxCodi: "3" };
      const codi_data = { maxCodi: "1" };

      for (const app_collection of config.defaultCollections) {
        const collectionRef = collection(
          db,
          "users",
          uid,
          app_collection.collectionName
        );
        const seqDocRef = doc(
          db,
          "data",
          email,
          "sequence",
          app_collection.collectionName
        );
        if (Array.isArray(app_collection.data)) {
          for (let i = 0; i < app_collection.data.length; i++) {
            await setDoc(
              doc(collectionRef, `${i + 1}`),
              app_collection.data[i]
            );
          }
          await setDoc(seqDocRef, third_codi);
        } else {
          await setDoc(doc(collectionRef, init.value), app_collection.data);
          await setDoc(seqDocRef, new_init);
        }
      }

      for (const app_sequences of config.sequences) {
        const seqDocRef = doc(db, "data", email, "sequence", app_sequences);
        await setDoc(seqDocRef, codi_data);
      }

      for (const app_parametes of config.parameters) {
        const parametersRef = doc(
          db,
          "data",
          email,
          "parameters",
          app_parametes.name
        );
        await setDoc(parametersRef, app_parametes.meta);
      }

      for (const app_business of config.business) {
        const businessRef = doc(
          db,
          "data",
          email,
          "business",
          app_business.name
        );
        await setDoc(businessRef, app_business.meta);
      }
    } catch (e: any) {
      console.error(e);
    }
  }

  async function login(credentials: { email: string; password: string }) {
    try {
      await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      router.replace({ name: "home" });
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async function log_out() {
    userDetail.value = null;
    await signOut(auth);
  }

  return {
    user,
    login_google,
    init_user,
    userDetail,
    log_out,
    register_user,
    login,
  };
});
