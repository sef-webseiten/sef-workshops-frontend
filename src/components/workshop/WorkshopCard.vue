<template>
  <a class="block rounded shadow-lg bg-white transition duration-200 hover:shadow-2xl" :href="workshop.path">
    <img class="rounded-t w-full h-48 object-cover" draggable="false" :src="workshop.thumbnail"/>
    <div class="p-4 bg-white bg-opacity-50 z-20">

      <!-- Überschrift -->
      <h2 class="text-lg mb-4">{{workshop.title}}</h2>

      <!-- Untertitle -->
      <p class="my-4 text-sm border-l-2 border-red-400 pl-4 rounded-sm">Wie baue ich eine Hundehütte mit Baumarktutensilien? </p>

      <div class="block my-2 box w-full flex justify-content items-center flex-col">
        <p>
          ab <span class="highlight">21. Oktober</span>
        </p>
      </div>

      <div class="grid grid-cols-2 gap-2 my-2 mb-0 text-center">

        <div class="box">Dauer: <span class="highlight">8h</span></div>
        <div class="box">freie Plätze: <span class="highlight">10/22</span></div>
        <div class="box">Preis: <span class="highlight">ab 10€</span></div>
        <div class="box">4.6 von 5 ⭐</div>


      </div>
    </div>

  </a>
</template>
<script>
export default {
  props: {
    workshop: {
      type: Object,
      required: true
    }
  },
}
</script>
<style lang="scss">
hr {
  @apply h-px w-full bg-gray-200 rounded-full;
}

.highlight {
  @apply font-bold text-lg;
}

.box {
  @apply bg-gray-100 rounded-sm;
}
</style>