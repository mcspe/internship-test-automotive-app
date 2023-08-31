<script setup>
  import { store } from '../store/store';
  import { useRouter } from 'vue-router';

  const route = useRouter();
  const currRoute = route.currentRoute._rawValue.name;

  const search = () => {
    console.log(store.searchText);
    if (currRoute != 'home' && store.searchText) {
      route.push({name: 'home'});
    }
    if(store.searchText) {
      store.isSearching = true;
      switch (store.searchCriteria) {
        case 'all':
          store.searchResults = store.apiResults.filter(item => {
            return (item.make.toLowerCase().includes(store.searchText.toLowerCase())) || (item.model.toLowerCase().includes(store.searchText.toLowerCase()));
          })
          break;
      
        case 'make':
          store.searchResults = store.apiResults.filter(item => {
            return (item.make.toLowerCase().includes(store.searchText.toLowerCase()));
          })
          break;
      
        case 'model':
          store.searchResults = store.apiResults.filter(item => {
            return (item.model.toLowerCase().includes(store.searchText.toLowerCase()));
          })
          break;
      }
      
    } else {
      store.isSearching = false;
    }
  }

  const refreshSearch = () => {
    search();
  }
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="relative">
      <input
        class="rounded-3xl py-2 pl-4 pr-10 w-80 bg-grey text-red placeholder:text-red border border-red focus:outline-none"
        type="text"
        placeholder="Type to search"
        id="searchBar"
        v-model="store.searchText"
        @keyup="search()">
      <label for="searchBar" class="absolute top-1/2 transform -translate-y-1/2 right-4 text-red"><i class="fa-solid fa-magnifying-glass text-xl"></i></label>
    </div>
    <div class="flex flex-row gap-3 ml-3 mt-3 text-red">
      <div>
        <input type="radio" id="all" value="all" v-model="store.searchCriteria" name="searchfilters" class="border-red peer" hidden @change="refreshSearch">
        <label for="all" class="cursor-pointer border border-red py-1 px-3 rounded-full hover:bg-red hover:text-grey peer-checked:bg-red peer-checked:text-grey">All</label>
      </div>
      <div>
        <input type="radio" id="make" value="make" v-model="store.searchCriteria" name="searchfilters" class="border-red peer" hidden @change="refreshSearch">
        <label for="make" class="cursor-pointer border border-red py-1 px-3 rounded-full hover:bg-red hover:text-grey peer-checked:bg-red peer-checked:text-grey">Make</label>
      </div>
      <div>
        <input type="radio" id="model" value="model" v-model="store.searchCriteria" name="searchfilters" class="border-red peer" hidden @change="refreshSearch">
        <label for="model" class="cursor-pointer border border-red py-1 px-3 rounded-full hover:bg-red hover:text-grey peer-checked:bg-red peer-checked:text-grey">Model</label>
      </div>
    </div>
  </div>
</template>