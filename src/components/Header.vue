<script setup>
  // import { router } from '../router';
  import SearchBar from './SearchBar.vue'
</script>

<template>
  <header class="container mx-auto py-4 flex justify-center md:justify-between items-center">
    <router-link :to="{name: 'home'}" class="cursor-pointer">
      <img src="/logo.png" alt="LOGO" class="object-cover h-14">
    </router-link>
    <SearchBar class="hidden md:flex"/>
  </header>
</template>