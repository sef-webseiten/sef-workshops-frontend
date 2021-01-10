<template>
  <div class="md:mx-16 mt-4 lg:mt-0 flex-grow flex flex-row items-center">

    <!-- round search bar -->
    <div class="text-black rounded shadow relative flex-grow flex flex-row bg-white">

      <!-- search icon -->
      <div class="py-2 pl-4 z-20">
        <fa :icon="['fas', 'search']" class="text-light"/>
      </div>

      <!-- input field with placeholder -->
      <input
          class="bg-white pl-4 py-2 opacity-90 placeholder-opacity-75 rounded text-base w-full focus:outline-none flex-grow"
          placeholder="Suche..."
          type="text"
      />

      <!-- search button -->
      <button
          class="border-l border-gray-300 pl-4 pr-6 py-2 rounded-r focus:outline-none hover:bg-gray-100 select-none flex"
      >

        <span class="hidden md:block">
          <fa
              :icon="['fas', 'angle-double-right']"
              class="mr-2 text-light"
          />
        </span>
        <span>Suchen</span>

      </button>
    </div>

    <!-- desktop filter button -->
    <button class="hidden lg:block ml-4 p-2 cursor-pointer">
      <fa :icon="['fas', 'filter']" size="lg"/>
    </button>

  </div>
</template>