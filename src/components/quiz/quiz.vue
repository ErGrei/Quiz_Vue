<script setup>
import questions from "./questionsQuiz.vue";
import headerQuiz from "./headerQuiz.vue";
import buttonQuiz from "./buttonQuiz.vue";
import resultQize from "../results/resultQize.vue";
import { useRoute } from "vue-router";
import { ref, watch, computed, defineProps, defineEmits } from "vue";
import quizes from "../../data/quizes.json";

const emit = defineEmits(["getUser"]);

const router = useRoute();
const quizId = parseInt(router.params.id);
const currentQuizesId = ref(0);
const quiz = quizes.find((q) => q.id === quizId);

const quizResult = ref({
  name: "user.name",
  incorrect: 0,
  correct: 0,
  quizCompleted: false,
});



// console.log(currentUserId, users);
// const questionsNumber = ref(`${currentQuizesId.value + 1}`);

// watch(currentQuizesId, () => {
//   questionsNumber.value = `${currentQuizesId.value + 1}`;
// });

const questionsNumber = computed(() => {
  return `${currentQuizesId.value + 1}`;
});

const prosentProgress = computed(() => {
  return `${((currentQuizesId.value + 1) / quiz.questions.length) * 100}%`;
});

const nextQuestion = () => {
  skipQuestion();
  changeQuestionsNumber();
};

const changeQuestionsNumber = () => {
  if (currentQuizesId.value < quiz.questions.length - 1) {
    currentQuizesId.value++;
    // questionsNumber.value = `${currentQuizesId.value + 1}`
    return;
  }
};

const skipQuestion = () => {
  !quizResult.value.quizCompleted ? quizResult.value.incorrect++ : null;
  // console.log(quizResult.value.incorrect);
  if (currentQuizesId.value === quiz.questions.length - 1) {
    quizResult.value.quizCompleted = true;
  }
};

const getSelectedAnswer = (isCorrect) => {
  if (currentQuizesId.value < quiz.questions.length) {
    isCorrect ? quizResult.value.correct++ : quizResult.value.incorrect++;
  }
  if (currentQuizesId.value === quiz.questions.length - 1) {
    quizResult.value.quizCompleted = true;
  }
  changeQuestionsNumber();
};

// console.log(((currentQuizesId.value + 1) / quiz.questions.length-1) * 100);
// console.log(quiz.questions.length-1);
</script>

<template>
  <div>
    <headerQuiz
      :prosentProgress="prosentProgress"
      :quiz="quiz"
      :question="quiz.questions[currentQuizesId]"
      :questionsNumber="questionsNumber"
    />
    <div class="options-container">
      <questions
        v-if="!quizResult.quizCompleted"
        :question="quiz.questions[currentQuizesId]"
        @selectAnswer="getSelectedAnswer"
      />
      <resultQize v-else :quizResult="quizResult" />
    </div>
    <buttonQuiz
      @nextQuestion="nextQuestion"
      :quizCompleted="quizResult.quizCompleted"
    />
  </div>
</template>

<style scoped>
.options-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  border: 1px solid #6ce7e9;
  padding: 10px;
  border-radius: 5px;
}
</style>
