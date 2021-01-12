<template>
  <section class="full-width" :class="{'xl:container p-6': !withoutBorder}">
    <slot/>
  </section>
</template>
<script>
export default {
  props: {
    withoutBorder: {
      type: Boolean,
      default: false
    },
  }
}
</script>
<style scoped>
.full-width {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
</style>