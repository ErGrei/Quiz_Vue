<script setup>
import questions from "./questionsQuiz.vue";
import headerQuiz from "./headerQuiz.vue";
import buttonQuiz from "./buttonQuiz.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";
import quizes from "../../data/quizes.json";

const router = useRoute();

const quizId = parseInt(router.params.id);

const currentQuizesId = ref(0);

const quiz = quizes.find((q) => q.id === quizId);

const questionsNumber = ref(`${currentQuizesId.value+1}`)

const nextQuestion = () => {
  if (currentQuizesId.value < quiz.questions.length - 1) {
    currentQuizesId.value++;
    questionsNumber.value = `${currentQuizesId.value+1}`  
  } else {
    router.push("/result");
  }
};


// console.log(quiz);
// console.log(quiz[currentQuizesId]);
</script>

<template>
  <div>
    <headerQuiz
      :quiz="quiz"
      :question="quiz.questions[currentQuizesId]"
      :questionsNumber="questionsNumber"
    />
    <div class="options-container">
      <questions :question="quiz.questions[currentQuizesId]" />
    </div>
    <buttonQuiz  @nextQuestion="nextQuestion"/>
  </div>
</template>

<style scoped>
.options-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  border: 1px, solid, #6ce7e9;
  padding: 10px;
  border-radius: 5px;
}
</style>
