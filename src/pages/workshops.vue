<template>
  <Layout>
    <Heading2 class="mb-6 text-center">Alle Workshops</Heading2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
      <WorkshopCard
          v-for="{ node: workshop } in $static.workshops.edges"
          :key="workshop._id"
          :workshop="workshop"
      />
    </div>
  </Layout>
</template>
<script>
import WorkshopCard from "../components/workshop/WorkshopCard";
import Heading2 from "../components/gui-elements/Heading2";

export default {
  components: { Heading2, WorkshopCard },
  metaInfo: {
    title: "Startseite",
  },
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