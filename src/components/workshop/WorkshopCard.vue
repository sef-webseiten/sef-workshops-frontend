<template>
  <a :href="workshop.path" class="block rounded shadow-lg bg-white transition duration-200 hover:shadow-2xl">
    <img :src="workshop.thumbnail" class="rounded-t w-full h-48 object-cover" draggable="false"/>
    <div class="p-4 z-20">

      <!-- Überschrift -->
      <h2 class="text-lg mb-4">{{ workshop.title }}</h2>

      <!-- Untertitle -->
      <p class="my-4 text-sm border-l-2 border-red-400 pl-4 rounded-sm">Wie baue ich eine Hundehütte mit
        Baumarktutensilien? </p>

      <div class="block my-2 box w-full flex justify-content items-center flex-col icons-red">
        <p>
          <fa :icon="['fas', 'calendar-day']" class="mr-1"/>
          ab <span class="highlight">21. Oktober</span>
        </p>
      </div>

      <div class="grid grid-cols-2 gap-2 my-2 mb-0 text-center icons-red ">

        <div class="box">
          <fa :icon="['fas', 'clock']" class="mr-2"/>
          <span class="highlight">8h</span>
        </div>
        <div class="box">
          <fa :icon="['fas', 'user-friends']" class="mr-2"/>
          <span class="highlight">10/22</span>
        </div>
        <div class="box">
          <fa :icon="['fas', 'tags']" class="mr-2"/>
          <span class="highlight">ab 10€</span>
        </div>
        <div class="box">
          <fa v-for="i in [1,2,3,4,5]" :key="i" :icon="['fas', 'star']" class="mr-1" />
        </div>


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
  @apply text-lg;
}

.icons-red svg {
  @apply text-red-400;
}

.box {
  @apply bg-gray-100 rounded-sm;
}
</style>