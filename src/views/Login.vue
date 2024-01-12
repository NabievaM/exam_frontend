<template>
  <div
    class="w-screen bg-gray-300 h-screen relative bg-gradient-to-tr from-authBgS items-center to-authBgE flex justify-center"
  >
    <div class="card w-[500px] bg-gray-200 rounded-lg p-5 shadow-md">
      <div class="flex justify-center mb-[43px]">
        <h2 class="uppercase text-[32px] font-[700]">LOGIN</h2>
      </div>
      <div>
        <v-input
          type="email"
          label="Email"
          placeholder="Enter email"
          variant="outlined"
          v-model="email"
          class="mb-5 w-full p-1 rounded-md"
        />
        <v-input
          type="password"
          label="Password"
          placeholder="Enter password"
          variant="outlined"
          minlength="8"
          v-model="password"
          class="mb-5 w-full p-1 rounded-md"
        />
      </div>
      <v-button
        @click="onSubmit"
        :disabled="false"
        id="myBtn"
        class="uppercase w-100 mx-auto bg-blue-700 px-5 py-2 rounded-md cursor-pointer"
        >Sign in</v-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "../composables/auth";
import { ref } from "vue";

import VButton from "../components/button.vue";
import VInput from "../components/input.vue";

const { login } = useAuth();

const email = ref("");
const password = ref("");

async function onSubmit() {
  if (!email.value.length && !password.value.length) return;

  await login({
    email: email.value,
    password: password.value,
  });
}
</script>
