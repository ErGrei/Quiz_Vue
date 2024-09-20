<script setup>
import quizes from "../../data/quizes.json";
import { ref } from "vue";
import quizCard from "./homeCard.vue";
import { useUsersStore } from "../../stores/usersStore";

const quizesRef = ref(quizes);
const usersStore = useUsersStore();
const currentUser = usersStore.currentUser;
</script>
<template>
  <header>
    <h1>Quiz App</h1>
    <h2>{{ currentUser.name }}</h2>
    <!-- <input type="text" placeholder="Поиск..." /> -->
  </header>
  <div class="options-container">
    <quizCard v-for="quiz in quizesRef" :key="quiz.id" :quiz="quiz" />
  </div>
</template>

<style scoped>
header {
  margin: 30px 0;
  text-align: center;
  background-color: #f2f2f2;
  padding: 8px;
  border-radius: 4px;
  /* display: flex; */
  align-items: center;
  /* justify-content: center; */
}

header h1 {
  display: block;
  font-weight: bold;
 margin: 0 auto;
 font-size: 40px;
}

header h2 {
 display: block;
  font-weight: normal;
  font-size: 30px;
  margin: 0 auto;
}

header input {
  border: none;

  background-color: #a5f0f5;
  padding: 10px;
  border-radius: 4px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  justify-content: center;
  gap: 20px;
}
</style>
