<script setup>
import { RouterView } from "vue-router";
// import startPage from './components/startPage/startPage.vue';
</script>

<template>
  <div class="container">
    <!-- <startPage /> -->
    <RouterView/>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0px auto;
}
</style>
