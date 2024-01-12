<template>
  <div class="text-center mt-[10px] font-bold text-2xl bg-blue-300 p-[10px]">
    Users data
  </div>
  <div class="w-[90%] px-10 py-4 mx-auto text-center right-0 left-0">
    <table class="justify-around w-full">
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Telegram Link</th>
          <th>Course</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.tg_link }}</td>
          <td>{{ user.course }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
type userObj = {
  id: string | number;
  firstName: string;
  lastName: string;
  phone: string;
  tg_link: string;
  course: string;
};

defineProps<{ users: userObj[] }>();
</script>
