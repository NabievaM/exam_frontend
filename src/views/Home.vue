<template>
  <section class="w-full">
    <div class="flex">
      <div class="w-[55%]">
        <img
          class="h-[515px]"
          src="../assets/images/course-selection.png"
          alt=""
        />
      </div>
      <div class="w-[45%]">
        <div
          class="text-center px-[30px] w-[30%] rounded-md my-[2px] font-bold text-xl text-blue-500 bg-gray-200"
        >
          <a href="/login">Login</a>
        </div>
        <div class="flex mt-10 justify-center mb-[35px]">
          <h2 class="uppercase text-[26px] font-[700]">Contact Us</h2>
        </div>
        <v-input
          type="text"
          label="First name"
          placeholder="Enter first name"
          variant="outlined"
          v-model="user.firstName"
          class="mb-5 w-[80%] p-1 border-2 border-blue-300 mx-auto rounded-md"
        />
        <v-input
          type="text"
          label="Last name"
          placeholder="Enter last name"
          variant="outlined"
          v-model="user.lastName"
          class="mb-5 w-[80%] p-1 border-2 border-blue-300 mx-auto rounded-md"
        />
        <v-input
          type="text"
          label="Phone"
          placeholder="Enter phone number"
          variant="outlined"
          v-model="user.phone"
          class="mb-5 w-[80%] p-1 border-2 border-blue-300 mx-auto rounded-md"
        />
        <v-input
          type="text"
          label="Telegram link"
          placeholder="Enter telegram link"
          variant="outlined"
          v-model="user.tg_link"
          class="mb-5 w-[80%] p-1 border-2 border-blue-300 mx-auto rounded-md"
        />
        <div
          class="mb-5 w-[80%] p-1 border-2 mx-auto border-blue-300 rounded-md"
        >
          <select class="w-full" v-model="user.course" name="">
            <option value="" disabled>Choose course</option>
            <option value="webdizayn">Web Design</option>
            <option value="fullstack">Full Stack</option>
            <option value="dotnet">DotNet</option>
            <option value="smm">SMM</option>
          </select>
        </div>
        <v-button
          @click="handleClick"
          :disabled="false"
          id="myBtn"
          class="uppercase mt-[40px] mx-auto bg-blue-500 px-5 py-2 rounded-md cursor-pointer"
          >Send</v-button
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useUser } from "../composables/user";
import { errorToast } from "../utils/toast";
import VButton from "../components/button.vue";
import VInput from "../components/input.vue";
import { reactive } from "vue";

const { onSubmit } = useUser();

const user = reactive({
  firstName: "",
  lastName: "",
  phone: "",
  tg_link: "",
  course: "",
});

const handleClick = () => {
  if (
    !user.firstName.length &&
    !user.lastName.length &&
    !user.phone.length &&
    !user.tg_link.length &&
    !user.course.length
  ) {
    errorToast("The entered staff did not pass validation");
    return;
  }

  onSubmit(user);
  user.firstName = "";
  user.lastName = "";
  user.phone = "";
  user.tg_link = "";
  user.course = "";
};
</script>
