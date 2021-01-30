<template>
  <div>
    <span class="icons-primary">
      <fa
          v-for="i in asNumber + 1"
          :key="i"
          :icon="['fas', 'star']"
          class="mr-1"
          :size="size"
      ></fa>
    </span>
    <span class="icons-gray">
     <fa
         v-for="i in 5 - asNumber - 1"
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
  },
  computed: {
    asNumber() {
      if(isNaN(this.stars))
        return 4;

      return Math.round(this.stars / 25);
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