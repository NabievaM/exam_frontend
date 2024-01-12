<template>
  <div v-if="loading" class="relative text-center">
    <Loading />
  </div>
  <div v-else>
    <div v-if="!userList.length">
      <NotFound />
    </div>
    <div v-else>
      <VTable :users="userList" />
    </div>
  </div>
</template>

<script setup lang="ts">
import VTable from "../../components/user-table.vue";
import Loading from "../../components/loading.vue";
import NotFound from "../../components/empty-list.vue";

import { useAdmin } from "../../composables/admin";
const { userList, loading } = useAdmin();
</script>
