<template>
  <div class="w-full flex flex-row justify-start items-center">
    <div
        :class="colorName === 'abi' ? 'border-abi text-abi' : 'border-primary text-primary'"
        class="w-12 h-12 border-2 rounded-full p-2 flex justify-center items-center mr-6 text-lg font-bold">
      {{ number }}
    </div>
    <slot/>
  </div>
</template>
<script>
export default {
  props: {
    number: {
      type: Number,
      required: true
    },
    colorName: {
      type: String,
      default: "border-primary"
    }
  }
}
</script>