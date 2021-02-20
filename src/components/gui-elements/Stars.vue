<template>
  <div class="flex flex-row" :class="{'cursor-pointer' : clickable}">
    <span class="icons-primary flex flex-row">
      <fa
          v-for="i in asNumber + 1"
          :key="i"
          :icon="['fas', 'star']"
          class="mr-1"
          :size="size || '1x'"
          @click="click(i)"
      ></fa>
    </span>
    <span class="icons-gray flex flex-row">
     <fa
         v-for="i in 5 - asNumber - 1"
         :key="i"
         :icon="['fas', 'star']"
         class="mr-1"
         :size="size || '1x'"
         @click="click(asNumber + 1 + i)"
     ></fa>
   </span>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Number,
      default: 5
    },
    size: {
      type: String,
      default: ""
    },
    clickable: Boolean
  },
  methods: {
    click(id) {
      this.$emit('input', (id - 1) * 25)
    }
  },
  computed: {
    asNumber() {
      if(isNaN(this.value))
        return 4;

      return Math.round(this.value / 25);
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