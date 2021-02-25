<template>
  <Layout>
    <full-width-section class="-mt-6 mb-8 bg-gray-100">

    </full-width-section>
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
import FullWidthSection from "../components/gui-elements/FullWidthSection";

export default {
  components: { FullWidthSection, GhostWorkshopCard, WorkshopCard },
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
        if (workshop.categories.includes("Demo"))
          return false;

        let found = true, keywords = this.$store.state.search.searchTerm.toLowerCase().split(' ');

        console.log(keywords)

        for (const keyword of keywords) {
          console.log(keyword, (workshop.title.toLowerCase().includes(keyword) ||
              workshop.subTitle.toLowerCase().includes(keyword) ||
              workshop.description.toLowerCase().includes(keyword)))
          found &= (workshop.title.toLowerCase().includes(keyword) ||
              workshop.subTitle.toLowerCase().includes(keyword) ||
              workshop.description.toLowerCase().includes(keyword));

          if(!found)
            break;
        }

        return found;
      })
    }
  },
  mounted() {
    this.$store.commit("setSearchTerm", this.$router.currentRoute.query?.s)
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