<template>
  <div class="rounded shadow-2xl mb-6 last:mb-0 p-6 md:grid grid-cols-3 gap-6">
    <g-link :to="`/w/${order.workshop._id}`" class="box p-2">
      <div class="mb-4">Workshop: {{order.workshop.title}} </div>
      <div v-for="date in order.event.dates">
        {{date.timeString}}
      </div>
    </g-link>
    <div class="box p-2">
      Betrag: {{order.price}} EURO <br>
      Datum: {{order.timestamp}}
    </div>
    <div>
      <button-template>Stornierung anfragen</button-template>
    </div>
  </div>
</template>
<script>
import ButtonTemplate from "../gui-elements/ButtonTemplate";

export default {
  components: { ButtonTemplate },
  props: {
    order: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
@import "src/assets/css/main";
</style>