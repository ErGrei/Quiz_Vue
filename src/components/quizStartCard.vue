<script setup>
import { defineProps } from "vue";

const { quiz } = defineProps(["quiz"]);


console.log(quiz);
</script>

<template>
  <div class="card">
    <img
      :src="quiz.img"
      alt="Абстракный человечек задумывается на фоне красного вопроса"
    />
    <div class="card-text">
      <h2>{{ quiz.name }}</h2>
      <p>{{ quiz.questions.length }} вопросов</p>
    </div>
  </div>
</template>

<style scoped>
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
