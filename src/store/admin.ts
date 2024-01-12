import { defineStore } from "pinia";
import { getUserList, userAddData } from "../api/admin";
import { errorToast, successToast } from "../utils/toast";
import axios from "axios";
import { user } from "../modules/interfaces";

export const useAdminStore = defineStore("admin", {
  state: () => {
    return {
      userList: [],
      loading: false,
    };
  },

  getters: {},

  actions: {
    async fetchUserList() {
      this.loading = true;
      try {
        const res = await getUserList();

        if (res.status !== 200) {
          return;
        }
        this.loading = false;

        this.userList = res?.data;
      } catch (error) {
        if (error instanceof Error) {
          errorToast(error.message);
        }
        this.loading = false;
      } finally {
        this.loading = false;
      }
    },

    async userData(newUser: user) {
      try {
        const res = await userAddData(newUser);
        if (res.status !== 201) {
          errorToast("Error occured in creating. Retry");
          return;
        }
        console.log(res);
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
