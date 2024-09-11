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

<style scoped>
.header {
  margin: 30px 0;
  text-align: center;
  background-color: #f2f2f2;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #6ce7e9;
  text-align: center;
}

.title__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 40px;
  margin-bottom: 20px;
}

.input {
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-bottom: 20px;
  border: 1px solid #6ce7e9;
}

.btn {
  display: block;
  width: 200px;
  padding: 10px;
  text-align: center;
  margin: 0 auto;
  border-radius: 5px;
  border: 1px solid #6ce7e9;
  cursor: pointer;
}

.btn:hover {
  transform: scale(1.01);
  box-shadow: 1px 1px 15px #e0b159;
}

.btn:active {
  transform: scale(0.98);
}
</style>