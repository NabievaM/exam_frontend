import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
} from "vue-router";
import { layoutMiddleware } from "./middlewares";

import authRoutes from "./routes/auth.ts";
import homeRoutes from "./routes/home.ts";
import adminRoutes from "./routes/admin.ts";

import { HOME } from "../constants/layouts.js";
import { RT_LOGIN } from "../constants/routes/auth.js";
import { MT_NOTFOUND, RT_NOTFOUND } from "../constants/routes/notFound.js";

const routes = [
  ...authRoutes,
  ...homeRoutes,
  ...adminRoutes,
  {
    path: "/:pathMatch(.*)*",
    name: RT_NOTFOUND,
    component: () => import("../views/NotFound.vue"),
    meta: {
      layout: HOME,
      title: MT_NOTFOUND,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("access_token");
  if (to.name !== RT_LOGIN && !token && to.meta.requiresAuth) {
    next({ name: RT_LOGIN });
  } else if (token && to.name === RT_LOGIN) {
    if (!from.name) {
      next({ name: RT_NOTFOUND });
    } else {
      next({ name: from.name });
    }
  } else {
    next();
  }
});

router.beforeResolve(async (to: RouteLocationNormalized, _) => {
  await layoutMiddleware(to);
  if (typeof to.meta.title === "string") {
    updateMeta(to?.meta?.title);
  }
});

function updateMeta(title: string) {
  document.title = title;
}

export { updateMeta };
export default router;
