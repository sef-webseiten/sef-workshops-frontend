<template>
  <Layout auth-middleware>
    <h1 class="h1 mb-6">Buchungen</h1>
    <div v-for="order in orders" v-if="orders.length >= 0">
      <order-row :order="order"/>
    </div>
    <p v-else>Du hast noch keine Buchungen. </p>
  </Layout>
</template>
<script>
import OrderRow from "../../components/user/order/OrderRow";

export default {
  components: { OrderRow },
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