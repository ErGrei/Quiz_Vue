<script setup>
import quizes from "./data/quizes.json";
import { ref } from "vue";

const quizesRef = ref(quizes);
</script>

<template>
  <div class="container">
    <header>
      <h1>Quiz App</h1>
      <input type="text" placeholder="Search..." />
    </header>
    <div class="options-container">
      <div v-for="quiz in quizesRef"  :key="quiz.id" class="card">
        <img
          src="./assets/01_fishing _line.jpg"
          alt="Абстракный человечек задумывается на фоне красного вопроса"
        />
        <div class="card-text">
          <h2>{{quiz.name}}</h2>
          <p>{{quiz.questions.length}} вопросов</p>
        </div>
      </div>
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

.card {
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 15px #8de9e1;
  margin: 0, auto;
  cursor: pointer;
  transition: all 0.3s ease;
}

.card:hover {
  transform: scale(1.1);
  box-shadow: 1px 1px 25px #e0b159;
}

.card img {
  width: 100%;
  height: 190px;
  border: 1px solid #cccccc;
}

.card .card-text {
  padding: 0 5px;
  text-align: center;
}

.card .card-text h2 {
font-weight: bold;
}
</style>
