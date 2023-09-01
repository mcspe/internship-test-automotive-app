<script setup>
  import axios from 'axios';
  import { onMounted } from 'vue';
  import { store } from './store/store';
  import Header from './components/Header.vue';

  // INITIALIZE APIURL CONST WITH PROVIDED URL
  const apiUrl = 'https://gist.githubusercontent.com/joaofs/6a4eb62499572a29485ac5924a0c9e64/raw/97ac2191e65fb6d84f6f336dc8867efbc97410a3/cars.json';

  onMounted(()=>{
    // ON MUNUTED GET RESULTS THROUGH API CALL USING AXIOS
    axios.get(apiUrl)
    .then(result => {
      store.apiResults = result.data;
      store.isError = false;
    })
    // HERE ERRORS CAN BE HANDLED ACCORDING TO ERROR STATUS RECEIVED
    .catch(error => {
      console.log(error);
      store.isError = true;
    });
  })
</script>

<template>
  <!-- DISPLAY HEADER AS PART OF GENERAL LAYOUT -->
  <Header />
  <!-- DISPLAY DIFFERENT PAGES ACCORDING TO ROUTER SETTINGS -->
  <router-view></router-view>
</template>
