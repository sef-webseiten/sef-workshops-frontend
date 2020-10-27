<template>
  <div class="mx-auto">
    <g-image :src="img" width="630" height="120" class=" h-24 object-cover" draggable="false" :alt="title"/>
  </div>
</template>
<script>
export default {
  props: ["img", "title"],
}
</script>