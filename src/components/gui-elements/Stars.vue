<template>
  <div>
    <span class="icons-primary">
      <fa
          v-for="i in Math.round(stars / 25) + 1"
          :key="i"
          :icon="['fas', 'star']"
          class="mr-1"
          :size="size"
      ></fa>
    </span>
    <span class="icons-gray">
     <fa
         v-for="i in 5 - Math.round(stars / 25) - 1"
         :key="i"
         :icon="['fas', 'star']"
         class="mr-1"
         :size="size"
     ></fa>
   </span>
  </div>
</template>
<script>
export default {
  props: {
    stars: {
      type: Number,
      default: 5
    },
    size: {
      type: String,
      default: ""
    }
  }
}
</script>
<style scoped lang="scss">
.icons-primary svg {
  @apply text-light;
}

.icons-gray svg {
  @apply text-gray-200;
}
</style>