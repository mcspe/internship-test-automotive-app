<script setup>
  import { store } from '../store/store';
  const formatPrice = price => {
    const euro = Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR',
    });
    return euro.format(price);
  }
</script>

<template>
  <div class="container mx-auto my-5">
    <div>
      <h2 class="text-center text-3xl font-bold my-3">Available Cars</h2>
      <ul v-if="store.isLoaded">
        <li v-for="car in store.apiResults" :key="car.id">
          <router-link :to="{name: 'detail', params:{ id: car.id }}" class="flex gap-3 md:gap-10 items-center p-5 hover:bg-red hover:text-grey transition-all duration-300 hover:duration-300">
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