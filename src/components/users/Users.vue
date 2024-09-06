<script setup>
import startPage from "../startPage/startPage.vue";
import { ref } from "vue";
import quiz from "../quiz/quiz.vue";

const users = [];

const currentUserId = ref(0);

const getUser = (obj) => {
  users.forEach((user) => {
    if (user.name === obj.name) {
      currentUserId = user.id;
      return user;
    }
    return false;
  });
};

const setUser = (user) => {
  currentUserId = user.id;
  users.push(user);
  return users;
};

function addUser(obj) {
  getUser(obj) ? getUser(obj) : setUser(obj);
  console.log(users);
}
</script>

<template>
  <startPage @addUser="addUser" />
  <quiz :currentUserId="currentUserId" :users="users"  />
</template>
