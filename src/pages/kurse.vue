<template>
  <Layout>
    <Heading2 class="mb-6 text-center">
      <span v-if="this.$store.state.search.searchTerm">Ergebnisse für die Suche <span class="italic text-primary">{{this.$store.state.search.searchTerm}}</span></span>
      <span v-else>Alle Kurse</span>
    </Heading2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8" v-if="searchResults.length > 0">
      <WorkshopCard
          v-for="{ node: workshop } in searchResults"
          :key="workshop._id"
          :workshop="workshop"
      />
    </div>
    <div class="my-16" v-else>
      <GhostWorkshopCard />
      <Heading2 class="text-center text-text-gray mt-4">Es gibt keine Kurse zu deiner Suche. </Heading2>
    </div>
  </Layout>
</template>
<script>
import WorkshopCard from "../components/workshop/WorkshopCard";
import Heading2 from "../components/gui-elements/Heading2";
import GhostWorkshopCard from "../components/workshop/GhostWorkshopCard";

export default {
  components: { GhostWorkshopCard, Heading2, WorkshopCard },
  metaInfo() {
    return {
      title: this.title,
    }
  },
  computed: {
    title() {
      return this.$store.state.search.searchTerm || "Alle Kurse"
    },
    searchResults() {
      return this.$static.workshops.edges.filter(({ node: workshop }) => {
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