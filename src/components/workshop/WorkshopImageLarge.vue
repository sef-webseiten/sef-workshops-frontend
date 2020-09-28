<template>
  <div class="mx-auto shadow md:shadow-xl">
    <g-image :src="img" width="630" class="shadow-2xl w-full object-cover" draggable="false" :alt="title"/>
  </div>
</template>
<script>
export default {
  props: ["img", "title"],
}
</script>