<script setup>
  import { store } from "../store/store";
  import { useRoute } from 'vue-router';
  const route = useRoute();
  store.carDetail = store.apiResults.filter(item => item.id == route.params.id);
</script>

<template>
  <div class="container mx-auto my-5">
    {{ store.carDetail }}
  </div>
</template>