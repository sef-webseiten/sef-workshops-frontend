<template>
  <div class="w-full text-center">
    <fa :icon="icon" class="block mx-auto mb-5" size="3x" :class="{'text-primary' : iconPrimary}"/>
    <h3 class="text-2xl mb-4 font-bold">
      {{ title }}
    </h3>
    <p>
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
    title: String,
    iconPrimary: Boolean
  }
}
</script>