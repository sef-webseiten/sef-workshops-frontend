<template>
  <Layout withoutBorder>

    <!-- content if not paid -->
    <WorkshopPage v-if="!booked" :workshop="workshop"/>

    <!-- order successful card -->
    <WorkshopBookedPage v-else :workshop="workshop"/>

  </Layout>
</template>
<script>
import WorkshopPage from "../../components/workshop/WorkshopPage";
import WorkshopBookedPage from "../../components/workshop/WorkshopBookedPage";

export default {
  components: {
    WorkshopBookedPage,
    WorkshopPage,
  },
  data() {
    return {
      booked: false
    }
  },
  mounted() {
    this.$root.$on("payment-successful", () => this.booked = true);
  },
  metaInfo() {
    return {
      title: this.workshop.title,
    }
  },
  computed: {
    workshop() {
      return this.$store.state.workshops.workshops?.filter(workshop => workshop._id == this.$router.currentRoute.params._id)[0] || this.$page.workshop;
    },
  },
};
</script>
<page-query>
query Workshop ($id: ID!){
workshop: workshops(id: $id) {
_id
title
subTitle

organizer {
firstName
birthday
occupation
profilePicture
}

description
material
requirements

minPrice
nextDate
averageRating

ratings {
text
improveable
author {firstName profilePicture}
organizerRating {friendly reliable knowledge patience rating}
workshopRating { recommendable content entertaining rating}
}

thumbnail
categories

events {
_id
maxParticipants
price
publicLocation
dates {
timeString
}
}
}
}
</page-query>