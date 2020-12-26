<template>
  <div class="lg:mx-16 mt-4 lg:mt-0 flex-grow flex flex-row items-center">

    <!-- round search bar -->
    <div class="text-black rounded shadow relative flex-grow">

      <!-- search icon -->
      <div class="absolute left-0 py-2 pl-4 z-20">
        <fa :icon="['fas', 'search']" class="text-light"/>
      </div>

      <!-- input field with placeholder -->
      <label>
        <input
            class="bg-white pl-12 py-2 opacity-90 placeholder-opacity-75 rounded text-base w-full focus:outline-none"
            placeholder="Suche..."
            type="text"
        />
      </label>

      <!-- search button -->
      <button
          class="border-l border-gray-300 pl-4 pr-6 py-2 absolute right-0 rounded-r focus:outline-none hover:bg-gray-200 select-none"
      >
              <span class="hidden md:inline ">
                <fa
                    :icon="['fas', 'angle-double-right']"
                    class="mr-2 text-light"
                />
              </span>

        Suchen
      </button>
    </div>

    <!-- desktop filter button -->
    <button class="hidden md:block ml-4 p-2 cursor-pointer">
      <fa :icon="['fas', 'filter']" size="lg"/>
    </button>

  </div>
</template>