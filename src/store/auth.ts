import { defineStore } from "pinia";
import { signin } from "../api/auth";
import { errorToast, successToast } from "../utils/toast";
import { loginCredentials } from "../modules/types";
import router from "../router";
import { RT_LOGIN } from "../constants/routes/auth";
import { RT_DASHBOARD } from "../constants/routes/admin";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      user: {},
      loading: false,
    };
  },

  actions: {
    async login(payload: loginCredentials) {
      this.loading = true;
      const res = await signin(payload);
      if (!res.data?.access_token && res.status !== 201) {
        errorToast("Error");
        return;
      }
      localStorage.setItem("access_token", res.data.access_token);
      this.user = res.data;
      router.push({ name: RT_DASHBOARD });
      successToast("Succesfully signin");
    },

    logout() {
      this.user = {};
      localStorage.removeItem("access_token");
      router.push({ name: RT_LOGIN });
      successToast("Succesfully logout");
    },
  },
});
