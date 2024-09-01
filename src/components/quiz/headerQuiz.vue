<script setup>
import { defineProps } from "vue";

const { quiz, question, questionsNumber } = defineProps([
  "quiz",
  "question",
  "questionsNumber",
]);
// console.log(quiz)
</script>

<template>
  <div>
    <header>
      <h2>{{ quiz.name }}</h2>
      <div class="progress-bar">
        <div class="progress"></div>
      </div>
      <h3>вопрос {{ questionsNumber }} из {{ quiz.questions.length }}</h3>
      <div class="question">
        <p>{{ question.text }}</p>
      </div>
    </header>
  </div>
</template>

<style scoped>
header {
  margin: 30px 0;
  text-align: center;
  background-color: #f2f2f2;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #6ce7e9;
}

h2 {
  margin-bottom: 10px;
}

h3 {
  margin-bottom: 10px;
  font-weight: bold;
}

.progress-bar {
  width: 100%;
  height: 10px;

  margin-bottom: 10px;
  border: 1px, solid, #6ce7e9;
}

.progress {
  width: 10%;
  height: 100%;
  background-color: #6ce7e9;
}

.question {
  margin-bottom: 10px;
  border: 1px, solid, #6ce7e9;
  padding: 10px;
  border-radius: 5px;
}
</style>
