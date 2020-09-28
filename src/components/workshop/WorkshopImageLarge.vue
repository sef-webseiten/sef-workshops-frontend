<template>
  <div class="mx-auto shadow md:shadow-xl">
    <g-image :src="imgUrl" width="630" class="shadow-2xl" :alt="title"/>
  </div>
</template>
<script>
export default {
  props: ["img", "title"],
  computed: {
    imgUrl() {
      return require('!!assets-loader?width=630!~/assets/img/' + this.img)
    }
  }
}
</script>