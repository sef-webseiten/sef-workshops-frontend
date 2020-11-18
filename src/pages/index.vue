<template>
  <Layout>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      <WorkshopCard v-for="({node: workshop}) in $static.workshops.edges" :key="workshop" :workshop="workshop"/>

    </div>

  </Layout>
</template>
<script>
import WorkshopCard from "../components/workshop/WorkshopCard";

export default {
  components: { WorkshopCard },
  metaInfo: {
    title: 'Startseite'
  }
}
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