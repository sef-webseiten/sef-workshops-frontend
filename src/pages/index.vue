<template>
  <Layout>

    <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4" v-for="({node}) in $static.workshops.edges">

      <WorkshopCard :workshop="node"/>

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