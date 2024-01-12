import { useUserStore } from "../store/user";
import { useRoute, useRouter } from "vue-router";
import { user } from "../modules/interfaces";
export const useUser = () => {
  const router = useRouter();
  const route = useRoute();
  const { userData } = useUserStore();

  const onSubmit = async (user: user) => {
    try {
      await userData(user);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    router,
    route,
    onSubmit,
  };
};
