<template>
  <div class="page-style-card">
    <WorkshopImageLarge :workshop="workshop"/>
    <OrderSuccessful :workshop="workshop"/>
  </div>
</template>
<script>
import WorkshopImageLarge from "../WorkshopImageLarge";
import OrderSuccessful from "../OrderSuccessful";

export default {
  components: {
    WorkshopImageLarge,
    OrderSuccessful
  },
  props: ["workshop"]
}
</script>