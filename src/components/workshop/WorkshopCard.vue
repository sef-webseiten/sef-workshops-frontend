<template>
  <div class="div rounded shadow-lg bg-white transition duration-200 hover:shadow-2xl">
    <img class="rounded-t w-full h-48 object-cover" draggable="false" :src="workshop.thumbnail"/>
    <div class="p-4">
      <h2 class="text-lg">{{workshop.title}}</h2>
      <p class="text-sm mt-3 text-justify break-word">{{workshop.description}}</p>
      <a class="w-full block mt-2 uppercase select-none text-sm text-right font-bold text-red-500" :href="workshop.path">Meht erfahren</a>
    </div>

  </div>
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