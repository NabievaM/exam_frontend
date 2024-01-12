import { defineStore } from "pinia";
import { userAddData } from "../api/user";
import { errorToast, successToast } from "../utils/toast";
import axios from "axios";
import { user } from "../modules/interfaces";

export const useUserStore = defineStore("user", {
  state: () => {
    return {};
  },

  getters: {},

  actions: {
    async userData(newUser: user) {
      try {
        const res = await userAddData(newUser);
        if (res.status !== 201) {
          errorToast("Error occured in creating. Retry");
          return;
        }
        successToast("succesfully created!");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 400) {
            errorToast("Some field(s) is/are not valid");
            return;
          }
          errorToast(error.message);
        }
      }
    },
  },
});
