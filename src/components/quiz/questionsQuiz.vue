<script setup>


import { defineProps } from "vue";
const { question } = defineProps(["question"]);




</script>

<template>
  <div>

      <div class="option"v-for="question in question.options" :key="question.id">
        <div class="option_number" >
          <p>{{ question.label}}</p>
        </div>
        <div class="option_answer">
          <p>{{question.text}}</p>
        </div>
      </div>
    </div>


</template>

<style scoped>

.option {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  border: 1px, solid, #6ce7e9;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.1s ease;
}

.option:hover {
  transform: scale(1.01);
  box-shadow: 1px 1px 15px #e0b159;
}

.option_number {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  border: 1px, solid, #6ce7e9;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;  
}

.option_answer {
  width: 100%;
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  border: 1px, solid, #6ce7e9;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}
</style>
