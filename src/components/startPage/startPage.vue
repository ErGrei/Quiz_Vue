<script setup>
import { RouterLink } from "vue-router";
import { defineEmits, ref } from "vue";
import{useUsersStore} from "../../stores/usersStore";

const usersStore = useUsersStore();

const usersRef = ref(usersStore.users);

const addUser = usersStore.addUser;

const users = ref({
  id: Date.now(),
  name: "",
  resultsQuiz: [],
});

// const emit = defineEmits(["addUser"]);

const validateUser = (users) => {
   
  if (users.name) {
    addUser(users);
  } else {
    console.error("Имя пользователя не может быть пустым");
  }
};

</script>

<template>
  <div class="start-page">
    <header class="header">
      <h1 class="title">Quiz App</h1>
      <h3 class="title">{{usersStore.users}}</h3>
    </header>
    <div class="title__container">
      <input
        class="input"
        type="text"
        placeholder="Введите имя"
        v-model="users.name"
      />
    </div>
    <RouterLink to="/home" class="btn" @click="validateUser(users)">Начать</RouterLink>
  </div>
</template>

<style scoped>
/* .start-page {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
} */

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
