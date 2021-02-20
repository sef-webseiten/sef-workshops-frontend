<template>
  <div class="flex flex-col md:flex-row justify-between items-center">
    <div class="w-full mb-1 md:mb-0">
      <slot/>
    </div>

    <SliderInput v-if="type === 'slider'" :value="value" @input="$emit('input', $event)"/>
    <Stars v-if="type === 'stars'" :value="value" class="text-xl" clickable @input="$emit('input', $event)"/>
  </div>
</template>
<script>
import SliderInput from "./SliderInput";
import Stars from "../../../../gui-elements/Stars";

export default {
  components: { Stars, SliderInput },
  props: {
    type: {
      type: String,
      default: "slider"
    },
    value: {}
  },
}
</script>