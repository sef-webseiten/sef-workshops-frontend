<template>
  <Layout>
    <h2 class="h2 mb-6 text-center">
      <span v-if="this.$store.state.search.searchTerm">Ergebnisse für die Suche <span
          class="italic text-primary">{{ this.$store.state.search.searchTerm }}</span></span>
      <span v-else>Alle Kurse</span>
    </h2>
    <div v-if="searchResults.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
      <WorkshopCard
          v-for="workshop in searchResults"
          :key="workshop._id"
          :workshop="workshop"
      />
    </div>
    <div v-else class="my-16">
      <GhostWorkshopCard/>
      <h2 class="h2 text-center mt-4">Es gibt keine Kurse zu deiner Suche. </h2>
    </div>
  </Layout>
</template>
<script>
import WorkshopCard from "../components/workshop/WorkshopCard";
import GhostWorkshopCard from "../components/workshop/GhostWorkshopCard";

export default {
  components: { GhostWorkshopCard, WorkshopCard },
  metaInfo() {
    return {
      title: this.title,
    }
  },
  computed: {
    title() {
      return this.$store.state.search.searchTerm || "Alle Kurse"
    },
    workshops() {
      return this.$store.state.workshops.workshops || this.$static.workshops.edges.map(({ node: workshop }) => workshop);
    },
    searchResults() {
      return this.workshops.filter(workshop => {
        return workshop.title.toLowerCase().includes(this.$store.state.search.searchTerm.toLowerCase()) ||
            workshop.subTitle.toLowerCase().includes(this.$store.state.search.searchTerm.toLowerCase()) ||
            workshop.description.toLowerCase().includes(this.$store.state.search.searchTerm.toLowerCase())
      })
    }
  }
};
</script>
<static-query>
query {
workshops: allWorkshops(sortBy: "id", order: ASC) {
edges {
node {
title
subTitle
_id
thumbnail
organizer {
firstName
lastName
}
path
minPrice
nextDate
nextDuration
nextParticipants
}
}
}
}
</static-query>