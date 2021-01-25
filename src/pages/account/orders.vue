<template>
  <Layout>
    <heading class="mb-6">Buchungen</heading>
    <div v-for="order in orders">
      <order-row :order="order" />
    </div>
    <p v-if="orders.length === 0">Du hast noch keine Buchungen. </p>
  </Layout>
</template>
<script>
import OrderRow from "../../components/user/order/OrderRow";
import Heading from "../../components/gui-elements/Heading";

export default {
  components: { OrderRow, Heading },
  metaInfo: {
    title: "Buchungen",
  },
  computed: {
    orders() {
      return this.$store.state.orders.orders;
    }
  }
}
</script>