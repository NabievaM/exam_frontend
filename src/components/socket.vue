<script setup>
import { ref } from "vue";
import socket from "../socket";

const isJoined = ref(false);
const join = ref("");
const username = ref("");
const newMessage = ref("");
const messages = ref([]);

function onUserJoin() {
  if (!username.value.length) {
    alert("Please, add username");
    return;
  }
  socket.emit("join", `${username.value} joined`);
  isJoined.value = true;
}

function onNewMessage() {
  const message = {
    message: newMessage.value,
    sender: username.value,
  };
  socket.emit("message:sent", message);
  messages.value.push(message);
}

socket.on("user:joined", joinMessage => {
  join.value = joinMessage;
});

socket.on("message:received", message => {
  messages.value.push(message);
});
</script>

<template>
  <div v-if="!isJoined" class="welcome">
    <input
      v-model="username"
      class="join-input"
      type="text"
      placeholder="Username..."
    />
    <button class="join-btn" @click="onUserJoin">Join</button>
    <a href="#learn"></a>
  </div>
  <div v-else>
    <div id="learn"></div>
    <div v-if="join.length">{{ join }}</div>
    <div v-for="message of messages" :key="message.sender">
      <div
        class="message-wrapper"
        :class="{ 'self-message': message.sender === username }"
      >
        <div class="sender">
          {{ message.sender === username ? "O'zim" : message.sender }}
        </div>
        <div class="body">{{ message.message }}</div>
      </div>
    </div>
    <div class="message-input-wrapper">
      <input
        v-model="newMessage"
        class="message-input"
        type="text"
        placeholder="Message..."
        @keyup.enter="onNewMessage"
      />
    </div>
  </div>
</template>

<style scoped>
.welcome {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.join-input {
  margin-bottom: 15px;
  padding: 5px 7px;
}
.join-btn {
  padding: 5px 7px;
}
.message-input-wrapper {
  position: fixed;
  bottom: 20px;
  width: 90%;
  padding: 10px 15px;
}
.message-input {
  width: 100%;
  padding: 10px 15px;
}
.message-wrapper {
  padding: 10px;
  margin-bottom: 5px;
  border: 1px solid #333;
  border-radius: 7px;
  max-width: 70%;
  min-width: 40%;
}
.self-message {
  margin-left: auto;
}
.sender {
  font-weight: 700;
  font-size: 15px;
}
</style>
