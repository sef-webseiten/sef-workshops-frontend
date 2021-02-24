<template>
  <Layout auth-middleware>
    <h1 class="h1 mb-10">Buchungen</h1>

    <order-row v-for="order in orders" :order="order"/>
    <Spinner v-if="!this.$store.state.initialized" :color="primary" class="mx-auto"/>
    <p v-else-if="orders.length === 0">Du hast noch keine Buchungen. </p>
  </Layout>
</template>
<script>
import OrderRow from "../../components/user/order/OrderRow";
import Spinner from "../../components/gui-elements/Spinner";
import tailwindConfig from "../../../tailwind.config";

export default {
  components: { OrderRow, Spinner },
  data() {
    return { primary: tailwindConfig.customColors.primary }
  },
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