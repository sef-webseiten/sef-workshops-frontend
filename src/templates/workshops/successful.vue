<template>
  <Layout withoutBorder>
    <div class="md:mt-8 mb-12 mx-auto lg:w-3/4 shadow-2xl md:rounded">
      <WorkshopImageLarge :workshop="workshop"/>
      <OrderSuccessful :workshop="workshop"/>
    </div>
  </Layout>
</template>
<script>
import WorkshopImageLarge from "../../components/workshop/WorkshopImageLarge";
import OrderSuccessful from "../../components/workshop/OrderSuccessful";

export default {
  components: {
    OrderSuccessful,
    WorkshopImageLarge,
  },
  metaInfo() {
    return {
      title: "Buchung erfolgreich",
    }
  },
  computed: {
    workshop() {
      return this.$store.state.workshops.workshops?.filter(workshop => workshop._id == this.$router.currentRoute.params._id)[0] || this.$page.workshop;
    }
  },
};
</script>
<page-query>
query Workshop ($id: ID!){
workshop: workshops(id: $id) {
_id
title
subTitle
thumbnail
}
}

</page-query>