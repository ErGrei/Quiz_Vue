<script setup>
import { defineProps } from "vue";

const { quizResult } = defineProps(["quizResult"]);
// console.log(quizResult)
</script>

<template>
    <div>
        <div class="result">
            <h2>Ваш результат: </h2> 
            <h2>правильных ответов - {{ quizResult.correct }}</h2>
            <h2>не правильных ответов - {{ quizResult.incorrect }}</h2>
        </div>
    </div>
</template>

<style scoped>
.result {
text-align: center;
}

.result h2{
}

</style>