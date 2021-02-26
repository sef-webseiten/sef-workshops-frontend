<template>
  <Layout>

    <!-- abi dropdown -->
    <full-width-section class="-mt-6 mb-8 bg-gray-100">
      <div>
        <label for="dates" class="block h4 mb-4">Termin wählen</label>
        <select id="dates" class="rounded-sm border border-primary w-full p-1" name="dates" v-model="abiDate">
          <option value="all">Bitte eine Option auswählen</option>
          <option value="o1">Anfang der Osterferien (29. - 31. März)</option>
          <option value="o2">Ende der Osterferien (9. - 11. April)</option>
          <option value="d">Woche nach den Osterferien (13. - 15. April)</option>
        </select>
      </div>
    </full-width-section>

    <!-- title -->
    <!--h2 class="h2 mb-6 text-center">
      <span v-if="this.$store.state.search.searchTerm">Ergebnisse für die Suche <span
          class="italic text-primary">{{ this.$store.state.search.searchTerm }}</span></span>
      <span v-else>Alle Kurse</span>
    </h2-->

    <!-- results -->
    <div v-if="searchResults.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
      <WorkshopCard
          v-for="workshop in searchResults"
          :key="workshop._id"
          :workshop="workshop"
      />
    </div>

    <!-- ghost card if no courses are found -->
    <div v-else class="my-16">
      <GhostWorkshopCard/>
      <h2 class="h3 text-center mt-8">Es gibt keine Kurse zu deiner Suche. </h2>
    </div>
  </Layout>
</template>
<script>
import WorkshopCard from "../components/workshop/WorkshopCard";
import GhostWorkshopCard from "../components/workshop/GhostWorkshopCard";
import FullWidthSection from "../components/gui-elements/FullWidthSection";
import { searchStoreComputers } from "../stores/search";

export default {
  components: { FullWidthSection, GhostWorkshopCard, WorkshopCard },
  metaInfo() {
    return {
      title: this.title,
    }
  },
  computed: {
    ...searchStoreComputers,
    title() {
      return this.$store.state.search.searchTerm || "Alle Kurse"
    },
    workshops() {
      return this.$store.state.workshops.workshops || this.$static.workshops.edges.map(({ node: workshop }) => workshop);
    },
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