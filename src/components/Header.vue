<script setup>
  import SearchBar from './SearchBar.vue'
</script>

<template>
  <header class="container mx-auto py-4 flex flex-col max-md:gap-5 md:flex-row justify-center md:justify-between items-center">
    <!-- HOME LOGO LINK -->
    <router-link :to="{name: 'home'}" class="cursor-pointer">
      <img src="/logo.png" alt="LOGO" class="object-cover h-14">
    </router-link>
    <SearchBar />
  </header>
</template>