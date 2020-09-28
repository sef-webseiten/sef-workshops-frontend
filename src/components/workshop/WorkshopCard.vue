<template>
  <div class="div rounded shadow-lg bg-white transition duration-200 hover:shadow-2xl">
    <img class="rounded-t" draggable="false" src="https://pixabay.com/get/53e4d04a4355ae14f6da8c7dda353678153edee052517240_1280.jpg"/>
    <div class="p-4">
      <h2 class="text-lg">{{workshop.title}}</h2>
      <p class="text-sm mt-3 text-justify break-word">{{workshop.short}}</p>
      <a class="w-full block mt-2 uppercase select-none text-sm text-right font-bold text-red-500" :href="url">Meht erfahren</a>
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
  computed: {
    url() {
      return '/w/' + this.workshop.id;
    }
  }
}
</script>