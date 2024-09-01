<script setup>
import { RouterLink } from "vue-router";
import { defineProps } from "vue";

const { quiz, question } = defineProps(["quiz", "question"]);
</script>

<template>
  <div>
    <header>
      <h2>название уровня</h2>
      <div class="progress-bar">
        <div class="progress"></div>
      </div>
      <h3>вопрос 1 из 10</h3>
      <div class="question">
        <p>техт вопроса</p>
      </div>
    </header>
    <div class="options-container">
      <div class="option">
        <div class="option_answer">
          <p>вариант 1</p>
        </div>
        <div class="option_answer">
          <p>ответ</p>
        </div>
      </div>
    </div>
    <div class="btn_container">
      <button class="next-btn">Следующий вопрос</button>
      <RouterLink to="/"><button class="end-btn">Завершить</button></RouterLink>
    </div>
  </div>
</template>

<style scoped>
header {
  margin: 30px 0;
  text-align: center;
  background-color: #f2f2f2;
  padding: 8px;
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
.options-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  border: 1px, solid, #6ce7e9;
  padding: 10px;
  border-radius: 5px;
}
.option {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  border: 1px, solid, #6ce7e9;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.option:hover {
  /* transform: scale(1.1); */
  box-shadow: 1px 1px 10px #e0b159;
}

.option_answer {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  border: 1px, solid, #6ce7e9;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

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
