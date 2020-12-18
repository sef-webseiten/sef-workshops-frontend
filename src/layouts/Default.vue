<template>
  <div class="font-display">
    <header class="bg-red-500 py-4 md:py-12 text-white">
      <div
          class="lg:flex flex-row justify-between items-center xl:container px-6"
      >
        <div class="text-xl md:text-2xl mr-2 text-center md:text-left">
          <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </div>
        <div class="lg:mx-16 mt-4 lg:mt-0 flex-grow flex flex-row items-center">
          <div class="text-black rounded shadow relative flex-grow">
            <div class="absolute left-0 py-2 pl-4 z-20">
              <fa :icon="['fas', 'search']" class="text-red-400"/>
            </div>
            <input
                class="bg-white pl-12 py-2 opacity-90 placeholder-opacity-75 rounded text-base w-full focus:outline-none"
                placeholder="Suche..."
                type="text"
            />
            <button
                class="border-l border-gray-300 pl-4 pr-6 py-2 absolute right-0 rounded-r focus:outline-none hover:bg-gray-200 select-none"
            >
              <span class="hidden md:inline ">
                <fa
                    :icon="['fas', 'angle-double-right']"
                    class="mr-2 text-red-400"
                />
              </span>

              Suchen
            </button>
          </div>
          <div class="hidden md:block ml-4 p-2 cursor-pointer">
            <fa :icon="['fas', 'filter']" size="lg"/>
          </div>
        </div>

        <Navbar class="hidden md:block"/>
      </div>
    </header>
    <div class="xl:container p-6">
      <slot/>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import "animate.css/animate.min.css";

export default {
  components: { Navbar },
  mounted() {
    this.$store.dispatch("subscribeUserChanges");
  },
};
</script>
<static-query>
query {
metadata {
siteName
}
}
</static-query>
<style lang="scss">
@import "src/assets/css/main";

html {
  @apply bg-gray-100;
}

.header-transition {
  background-image: linear-gradient(
          to right,
          #e53e3e,
          #ef6b19,
          #e99800,
          #d2c300,
          #a8eb12
  );
}
</style>