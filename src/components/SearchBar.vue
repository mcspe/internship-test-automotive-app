<template>
  <div class="items-center max-sm:flex-col">
    <div class="relative">
      <input class="rounded-3xl py-2 pl-4 pr-10 w-80 bg-grey text-red placeholder:text-red border border-red focus:outline-none" type="text" placeholder="Type to search" name="searchBar">
      <label for="searchBar" class="absolute top-1/2 transform -translate-y-1/2 right-4 text-red"><i class="fa-solid fa-magnifying-glass text-xl"></i></label>
    </div>
    <div class="flex flex-col max-sm:flex-row max-sm:gap-3 ml-3 max-sm:mt-3 text-red">
      <div>
        <input type="checkbox" name="all" class="border-red">
        <label for="all">All</label>
      </div>
      <div>
        <input type="checkbox" name="make" class="border-red">
        <label for="make">Make</label>
      </div>
      <div>
        <input type="checkbox" name="model" class="border-red">
        <label for="model">Model</label>
      </div>
    </div>
  </div>
</template>