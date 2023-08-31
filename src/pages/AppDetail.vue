<script setup>
  import { store } from "../store/store";
  import { useRoute } from 'vue-router';
  const route = useRoute();
  const car = store.carDetail = store.apiResults.filter(item => item.id == route.params.id)[0];
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
    <div class="p-5 flex flex-col md:flex-row gap-10">
      <div class="md:w-2/5">
        <img src="/img-placeholder.jpg" :alt="car.make + ' ' + car.model">
      </div>
      <div class="py-3">
        <h1 class="font-bold text-4xl">{{ car.make }} {{ car.model }}</h1>
        <p class="my-5"><span class="font-bold text-m">Description: </span><span>{{ car.description }}</span></p>
        <p class="my-5"><span class="font-bold text-m">Features: </span><span>{{ car.features }}</span></p>
        <p class="my-5"><span class="font-bold text-m">Mileage: </span><span>{{ car.mileage }}</span></p>
        <p class="my-5"><span class="font-bold text-m">Price: </span><span>{{ formatPrice(car.price) }}</span></p>
      </div>
    </div>
  </div>
</template>