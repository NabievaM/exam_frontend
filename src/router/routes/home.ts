import { HOME } from "../../constants/layouts";
import { RT_HOME, MT_HOME } from "../../constants/routes/home";
export default [
  {
    path: "/home",
    name: RT_HOME,
    component: () => import("../../views/Home.vue"),
    meta: {
      layout: HOME,
      requiresAuth: false,
      title: MT_HOME,
    },
  },
];
