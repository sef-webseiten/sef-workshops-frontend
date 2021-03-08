<template>
  <Layout withoutBorder>

    <!-- content if not paid -->
    <WorkshopPage v-if="!booked" :workshop="workshop"/>

    <!-- order successful card -->
    <WorkshopBookedPage v-else :workshop="workshop"/>

  </Layout>
</template>
<script>
import WorkshopPage from "../components/workshop/pages/WorkshopPage";
import WorkshopBookedPage from "../components/workshop/pages/WorkshopBookedPage";

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
      meta: [
        {property: 'og:title', content: this.workshop.title},
        {property: 'og:type', content: 'article'},
        {property: 'og:url', content: "https://of.courz.de" + this.workshop.path},
        {property: 'og:description', content: this.workshop.description},
        {name: 'description', content: this.workshop.description},
        {property: 'og:image', itemprop: "image", content: this.workshop.thumbnail},
        {property: 'og:image:secure_url', itemprop: "image", content: this.workshop.thumbnial},
        {property: 'twitter:image:src', content: this.workshop.thumbnail},
        {property: 'og:site_name', content: 'of.courz'}
      ]
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
fullName
birthday
occupation
profilePicture
}

description
takeaway
content
requirements

path

allPricesTheSame
minPrice
nextDate
averageRating
nextDuration

ratings {
text
improveable
author {_id firstName profilePicture}
organizerRating {friendly reliable knowledge patience rating}
workshopRating { recommendable content entertaining rating}
}

thumbnail
categories

events {
_id
maxParticipants
currentParticipants
price
publicLocation
dates {
timeString
}
}
}
}
</page-query>