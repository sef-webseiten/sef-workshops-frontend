<template>
  <Layout>
    <heading class="mb-6">Bestellungen</heading>
    <div v-for="order in orders">
      <order-row :order="order" />
    </div>
  </Layout>
</template>
<script>
import OrderRow from "../../components/order/OrderRow";
import Heading from "../../components/gui-elements/Heading";

export default {
  components: { OrderRow, Heading },
  computed: {
    orders() {
      return this.$store.state.orders.orders;
    }
  }
}
</script>