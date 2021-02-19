<template>
  <div class="flex flex-row justify-between items-center">
    <div><slot /></div>

    <SliderInput v-if="type === 'slider'" :value="value" @input="$emit('input', $event)" />
    <Stars v-if="type === 'stars'" class="text-lg" :value="value" @input="$emit('input', $event)" />
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
    value: { }
  },
}
</script>