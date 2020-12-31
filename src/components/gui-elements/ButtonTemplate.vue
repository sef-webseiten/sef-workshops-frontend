<template>
  <button class="px-2 py-2 text-white bg-primary disabled:bg-light disabled:cursor-default rounded-sm w-full" :disabled="disabled" @click.stop="$emit('click')">
    <slot/>
  </button>
</template>
<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>