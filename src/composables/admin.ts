import { useAdminStore } from "../store/admin";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "vue";

export const useAdmin = () => {
  const store = useAdminStore();
  const router = useRouter();
  const route = useRoute();
  const { userList, loading } = storeToRefs(store);
  const { fetchUserList } = useAdminStore();

  onMounted(async () => {
    await fetchUserList();
  });

  return {
    router,
    route,
    userList,
    loading,
    fetchUserList,
  };
};
