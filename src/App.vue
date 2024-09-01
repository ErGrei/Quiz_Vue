<script setup>
import quizes from "./data/quizes.json";
import { ref } from "vue";
import Card from "./components/quizStartCard.vue";

const quizesRef = ref(quizes);
</script>

<template>
  <div class="container">
    <header>
      <h1>Quiz App</h1>
      <input type="text" placeholder="Search..." />
    </header>
    <div class="options-container">
     <Card v-for="quiz in quizesRef" :key="quiz.id" :quiz="quiz" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0px auto;
}

header {
  margin: 30px 0;
  text-align: center;
  background-color: #f2f2f2;
  padding: 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
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
