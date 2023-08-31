<script setup>
  import Header from './components/Header.vue';
  import axios from 'axios';
  import { onMounted } from 'vue';
  import { store } from './store/store';

  const apiUrl = 'https://gist.githubusercontent.com/joaofs/6a4eb62499572a29485ac5924a0c9e64/raw/97ac2191e65fb6d84f6f336dc8867efbc97410a3/cars.json';

  onMounted(()=>{
    axios.get(apiUrl)
    .then(result => {
      store.apiResults = result.data;
      store.isError = false;
    })
    .catch(error => {
      console.log(error);
      store.isError = true;
    });
  })
</script>

<template>
  <Header />
  <router-view></router-view>
</template>

<style scoped>

</style>
