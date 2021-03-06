<template>
  <Layout>

    <!-- abi date selection -->
    <full-width-section class="-mt-6 mb-8 bg-gray-100 select-none">
      <div>
        <p class="h4">Wann hast du Zeit?</p>

        <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-4">
          <label class="flex items-center">
            <input :value="o1" @change="$store.commit('setO1')" class="h-5 w-5 text-primary" type="checkbox">
            <span class="ml-2">1. Woche Osterferien</span>
          </label>

          <label class="flex items-center">
            <input :value="o2" @change="$store.commit('setO2')"  class="h-5 w-5 text-primary" type="checkbox">
            <span class="ml-2">2. Woche Osterferien</span>
          </label>

          <label class="flex items-center">
            <input :value="d" @change="$store.commit('setD')" class="h-5 w-5 text-primary" type="checkbox">
            <span class="ml-2">Woche nach Osterferien</span>
          </label>
        </div>

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
import { mapState } from "vuex";

export default {
  components: { FullWidthSection, GhostWorkshopCard, WorkshopCard },
  metaInfo() {
    return {
      title: this.title,
    }
  },
  computed: {
    ...searchStoreComputers,
    ...mapState({
      o1: state => state.search.abiDate.o1,
      o2: state => state.search.abiDate.o2,
      d: state => state.search.abiDate.d,
    }),
    title() {
      return this.$store.state.search.searchTerm || "Alle Kurse"
    },
    workshops() {
      if(this.$store.state.workshops.workshops) {
        const ids = this.$static.workshops.edges.map(({ node: workshop }) => workshop._id);
        return this.$store.state.workshops.workshops.filter(w => ids.includes(w._id));
      } else
        return this.$static.workshops.edges.map(({ node: workshop }) => workshop);
    },
  },
  mounted() {
    if (this.$router.currentRoute.query?.s)
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
allPricesTheSame
}
}
}
}
</static-query>