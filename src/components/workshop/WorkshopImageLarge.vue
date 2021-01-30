<template>
  <div class="h-64 w-full relative">
    <img :src="workshop.thumbnail" width="630" height="120" class="w-full h-full object-cover absolute md:rounded-t" draggable="false" :alt="workshop.title"/>
    <h1 class="text-xl w-full tracking-wider p-6 md:px-10 absolute bottom-0 z-10 text-white bg-gray-900 bg-opacity-50">{{ workshop.title }}</h1>
  </div>
</template>
<script>
export default {
  props: ["workshop"],
}
</script>