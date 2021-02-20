<template>
  <div :class="{'cursor-pointer' : clickable}" class="flex flex-row">
    <span class="icons-primary flex flex-row">
      <fa
          v-for="i in asNumber + 1"
          :key="i"
          :icon="['fas', 'star']"
          :size="size || '1x'"
          class="mr-1"
          @click="click(i)"
      ></fa>
    </span>
    <span class="icons-gray flex flex-row">
     <fa
         v-for="i in 5 - asNumber - 1"
         :key="i"
         :icon="['fas', 'star']"
         :size="size || '1x'"
         class="mr-1"
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
      if (isNaN(this.value))
        return 4;

      return Math.round(this.value / 25);
    }
  }
}
</script>
<style lang="scss" scoped>
.icons-primary svg {
  @apply text-light;
}

.icons-gray svg {
  @apply text-gray-200;
}
</style>