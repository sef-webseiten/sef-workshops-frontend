<template>
  <div>
    <header class="bg-red-500 py-12 text-white">
      <div class="lg:flex flex-row justify-between container">
        <div class="text-2xl">
          <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </div>
        <Navbar/>
      </div>
    </header>
    <div class="container my-6">
      <slot/>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar";

export default {
  components: {Navbar}
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

.nav-element:hover {
  @apply border-white;
}

.nav-element {
  @apply py-2 px-4 inline-block border-b-2 border-red-500 transition-all duration-200;
}

.header-transition {
  background-image: linear-gradient(to right, #e53e3e, #ef6b19, #e99800, #d2c300, #a8eb12);}
</style>