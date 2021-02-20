<template>
  <div class="h-64 w-full relative">
    <img :alt="workshop.title" :src="workshop.thumbnail" class="w-full h-full object-cover absolute md:rounded-t" draggable="false"
         height="120" width="630"/>
    <h1 class="text-xl w-full tracking-wider p-6 md:px-10 absolute bottom-0 z-10 text-white bg-gray-900 bg-opacity-50">
      {{ workshop.title }}</h1>
  </div>
</template>
<script>
export default {
  props: ["workshop"],
}
</script>