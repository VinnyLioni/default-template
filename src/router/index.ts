import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import { appConfig } from "../api/config";
import { useAuthStore } from "../services/auth";

const config = appConfig();

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../views/login.vue"),
    name: "login",
  },
  {
    path: "/app",
    component: () => import("../views/home.vue"),
    name: "home",
    redirect: { name: "main" },
    children: [
      {
        path: "home",
        component: () => import("../views/main.vue"),
        name: "main",
        meta: {
          title: "Início",
          showNav: true,
          module: "Home",
          name: "Home",
          icon: "pi-home",
        },
      },
      {
        path: "components",
        component: () => import("../views/components.vue"),
        name: "components",
        meta: {
          title: "Componentes",
          showNav: config.isTemplate,
          module: "Components",
          name: "Components",
          icon: "pi-star",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach(() => {
  const auth = useAuthStore();
  if (auth.userDetail.uid !== null) {
  } else {
    return { name: "login" };
  }
});

export default router;
