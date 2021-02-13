<template>
  <div class="md:mt-8 mb-12 mx-auto lg:w-3/4 shadow-2xl lg:rounded">
    <WorkshopImageLarge :workshop="workshop"/>
    <OrderSuccessful :workshop="workshop"/>
  </div>
</template>
<script>
import WorkshopImageLarge from "./WorkshopImageLarge";
import OrderSuccessful from "./OrderSuccessful";

export default {
  components: {
    WorkshopImageLarge,
    OrderSuccessful
  },
  props: ["workshop"]
}
</script>