<template>
  <div class="w-full flex flex-row justify-start items-center">
    <div class="w-12 h-12 border-primary border-2 text-primary rounded-full p-2 flex justify-center items-center mr-6 text-lg font-bold">
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
    }
  }
}
</script>