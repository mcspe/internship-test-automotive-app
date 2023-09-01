<script setup>
  import { computed } from 'vue';
  import { store } from '../store/store';

  // COMPUTED FUNCTION DISPLAY RESULTS RETURN FULL RESULTS ARRAY OR PARTIAL SEARCH RESULTS ARRAY ACCORDING TO SEARCHING FLAG STATUS
  const displayResults = computed(() => {
    return (store.isSearching) ? store.searchResults : store.apiResults;
  });

  // COMPUTED FUNCTION SEARCH SUCCESS CHECK IF SEARCHBAR RECEIVED AN INPUT AND RETURN TRUE OR FALSE DEPENDING ON WHETHER THE SEARCH PRODUCES RESULTS OTHERWISE RETURNS TRUE
  const searchSuccess = computed(() => {
    if (store.isSearching) {
      return (store.searchResults.length) ? true : false;
    } else {
      return true;
    }
  });

  // FORMAT PRICE FUNCTION, RECEIVE PRICE VALUE TO FORMAT IT USING LOCAL AND CURRENCY SETTINGS
  const formatPrice = price => {
    const euro = Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR',
    });
    return euro.format(price);
  }
</script>

<template>
  <!-- DISPLAY AN ERROR MESSAGE WHEN API CALL IS NOT SUCCESSFUL -->
  <div v-if="store.isError" class="container mx-auto my-5">
    <h2 class="text-center text-3xl font-bold my-3">{{ store.errorMsg }}</h2>
  </div>
  <!-- IF API CALL IS SUCCESSFUL DISPLAY RESULTS -->
  <div v-else class="container mx-auto my-5">
    <!-- DISPLAY RESULTS LAYOUT DEPENDING ON SEARCH SUCCESS STATUS -->
    <div v-if="searchSuccess">
      <h2 class="text-center text-3xl font-bold my-3">Available Cars</h2>
      <ul class="flex flex-col md:flex-row flex-wrap">
        <!-- CYCLE ARRAY RECEIVED CALLING DIPLAY RESULTS COMPUTED FUNCTION -->
        <li class="w-full md:w-1/2 p-3" v-for="car in displayResults" :key="car.id">
          <router-link :to="{name: 'detail', params:{ id: car.id }}" class="flex gap-3 md:gap-10 items-center p-5 hover:text-red">
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
    <!-- IN CASE SEARCH SUCCESS RETURNS FALSE DIPLAY RELATIVE MESSAGE -->
    <div v-else>
      <h2 class="text-center text-3xl font-bold my-3">No results available for "<em>{{ store.searchText }}</em>". Please try again with a different text.</h2>
    </div>
  </div>
</template>