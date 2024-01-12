import { ADMIN } from "../../constants/layouts";
import { RT_USER_LIST, MT_USER_LIST } from "../../constants/routes/admin";

export default [
  {
    path: "/admin",
    name: RT_USER_LIST,
    component: () => import("../../views/Admin/UserList.vue"),
    meta: {
      title: MT_USER_LIST,
      requiresAuth: true,
      layout: ADMIN,
    },
  },
];
