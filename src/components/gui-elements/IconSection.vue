<template>
  <div class="w-full text-center">
    <div class="block mx-auto bg-gray-50 flex justify-center items-center rounded-full w-24 h-24 mb-5">
      <fa :icon="icon" class="" :size="huge ? '4x' : '3x'" :class="{'text-primary' : iconPrimary}"/>
    </div>
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