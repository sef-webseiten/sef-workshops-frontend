<template>
  <section class="full-width">
    <div :class="{'xl:container mx-auto p-6': !withoutBorder}" class="z-10 relative">
      <slot/>
    </div>
    <div class="absolute top-0 left-0 w-full h-full">
      <slot name="fullwidth"/>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    withoutBorder: {
      type: Boolean,
      default: false
    }
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