<script setup>
  import SearchBar from '../components/SearchBar.vue';
  import { store } from '../store/store';
</script>

<template>
  <div class="container mx-auto my-5">
    <div>
      <h2 class="text-center text-3xl font-bold">Available Cars</h2>
      <ul v-if="store.isLoaded">
        <li v-for="car in store.apiResults" :key="car.id">
          <router-link :to="{name: 'detail', params:{ id: car.id }}">
            <span>{{ car.make }}</span>
            <span>{{ car.model }}</span>
            <span>{{ car.price }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>