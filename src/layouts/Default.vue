<template>
  <div class="font-display">
    <header class="bg-red-500 py-4 md:py-12 text-white">
      <div class="lg:flex flex-row justify-between xl:container px-6">
        <div class="text-xl md:text-2xl">
          <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </div>
        <Navbar class="hidden md:block"/>
      </div>
    </header>
    <div class="xl:container container p-6">
      <slot/>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import "animate.css/animate.min.css"

export default {
  components: {Navbar},
  mounted() {
    this.$store.dispatch("subscribeUserChanges")
  }
}
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
  background-image: linear-gradient(to right, #e53e3e, #ef6b19, #e99800, #d2c300, #a8eb12);}
</style>