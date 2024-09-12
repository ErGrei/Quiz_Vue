<script setup>
import { RouterLink } from "vue-router";
import { defineEmits, defineProps } from "vue";

const { quizCompleted } = defineProps(["quizCompleted"]);
console.log(quizCompleted);

const emit = defineEmits(["nextQuestion"]);
const nextQuestion = () => {
  emit("nextQuestion");
  console.log(quizCompleted);
};
</script>

<template>
  <div>
    <div class="btn_container">
      <button class="next-btn" @click="nextQuestion" v-if="!quizCompleted">
        Пропустить вопрос
      </button>
      <RouterLink to="/Quiz_Vue/dist/home"
        ><button class="end-btn">Завершить</button></RouterLink
      >
    </div>
  </div>
</template>

<style scoped>
.btn_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border: 1px, solid, #6ce7e9;
  padding: 10px;
  border-radius: 5px;
}
.next-btn {
  width: 200px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #8de9e1;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.next-btn:hover {
  background-color: #e0b159;
}

.end-btn {
  width: 200px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #8de9e1;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.end-btn:hover {
  background-color: #eb4442;
}
</style>
