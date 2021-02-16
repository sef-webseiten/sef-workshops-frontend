<template>
  <div class="w-full text-center">
    <fa :icon="icon" class="block mx-auto mb-5" :size="huge ? '4x' : '3x'" :class="{'text-primary' : iconPrimary}"/>
    <h3 class="text-3xl mb-4 font-bold">
      {{ title }}
    </h3>
    <p :class="{'text-lg': huge}">
      <slot/>
    </p>
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: Array,
      required: true
    },
    huge: Boolean,
    title: String,
    iconPrimary: Boolean
  }
}
</script>