<script setup>
import startPage from "../startPage/startPage.vue";
import { ref } from "vue";
// import quiz from "../quiz/quiz.vue";

const users = ref([]);

const currentUserId = ref(0);

const getUser = (obj) => {
  return users.value.find((user) => user.name === obj.name);
};

const setUser = (user) => {
  currentUserId.value = user.id;
  users.value.push(user);
};

const addUser = (obj) => {
  console.log("addUser component", obj);
  const existingUser = getUser(obj);
  if (existingUser) {
    currentUserId.value = existingUser.id;
  } else {
    setUser(obj);
  }
  console.log(users.value); 
};
</script>

<template>
  <startPage @addUser="addUser" />
  <!-- <quiz :currentUserId="currentUserId" :users="users" /> -->
</template>
