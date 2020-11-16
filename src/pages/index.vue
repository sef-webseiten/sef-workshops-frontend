<template>
  <Layout>

    <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4" >

      <WorkshopCard v-for="({node: workshop}) in $static.workshops.edges" :workshop="workshop" :key="workshop"/>

    </div>

  </Layout>
</template>
<script>
import WorkshopCard from "../components/workshop/WorkshopCard";

export default {
  components: {WorkshopCard},
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
        id
description
thumbnail
path

      }
    }
  }
}
</static-query>