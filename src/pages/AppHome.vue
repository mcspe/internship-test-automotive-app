<script setup>
  import { computed } from 'vue';
  import { store } from '../store/store';

  const displayResults = computed(() => {
    return (store.isSearching) ? store.searchResults : store.apiResults;
  });
  
  const formatPrice = price => {
    const euro = Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR',
    });
    return euro.format(price);
  }
</script>

<template>
  <div v-if="store.isError" class="container mx-auto my-5">
    <h2 class="text-center text-3xl font-bold my-3">{{ store.errorMsg }}</h2>
  </div>
  <div v-else class="container mx-auto my-5">
    <div>
      <h2 class="text-center text-3xl font-bold my-3">Available Cars</h2>
      <ul class="flex flex-col md:flex-row flex-wrap">
        <li class="w-full md:w-1/2 p-3" v-for="car in displayResults" :key="car.id">
          <router-link :to="{name: 'detail', params:{ id: car.id }}" class="flex gap-3 md:gap-10 items-center p-5 hover:border hover:border-red hover:text-red">
            <div class="w-2/5 max-w-xs">
              <img src="/img-placeholder.jpg" :alt="car.make + ' ' + car.model">
            </div>
            <div class="flex flex-col gap-3 md:gap-5">
              <h3 class="text-2xl font-bold">{{ car.make }}</h3>
              <h4 class="text-xl font-bold">{{ car.model }}</h4>
              <span>{{ formatPrice(car.price) }}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>