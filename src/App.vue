<script setup>
  import axios from 'axios';
  import { onMounted } from 'vue';

  const apiUrl = 'https://gist.githubusercontent.com/joaofs/6a4eb62499572a29485ac5924a0c9e64/raw/97ac2191e65fb6d84f6f336dc8867efbc97410a3/cars.json';
  let apiRes;

  onMounted(()=>{
    axios.get(apiUrl)
    .then(result => {
      apiRes = result.data;
      console.log(apiRes);
    });
  })
</script>

<template>
  <div class="bg-gray-600 p-4">
    <h1 class="text-3xl font-bold underline">Hello World</h1>
    <div v-for="result in apiRes" :key="result.id">
      <h2>{{ result.make }} {{ result.model }}</h2>
    </div>
  </div>
</template>

<style scoped>

</style>
