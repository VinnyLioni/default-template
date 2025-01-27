import { createRouter, createWebHashHistory } from "vue-router";

const routes: any = [
  {
    path: "/",
    component: () => import("../views/login.vue"),
    name: "login",
  },
  {
    path: "/home",
    component: () => import("../views/home.vue"),
    name: "home",
    redirect: { name: "main" },
    children: [
      {
        path: "/home",
        component: () => import("../views/main.vue"),
        name: "main",
        meta: {
          title: "Início",
          showNav: true,
          module: "Home",
          parent: "Home",
          name: "Home",
          mode: "superadmin",
          icon: "pi-home",
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

export default router;
