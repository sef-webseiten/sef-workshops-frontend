<template>
  <Layout>
    <div class="md:flex justify-center items-center">

      <div class="w-full md:p-4">
        <WorkshopImageLarge  :img="$page.workshop.img" :title="$page.workshop.title" />

      </div>

      <div class="w-full pt-6 md:p-4">

        <h1 class="text-xl tracking-wider mb-4">{{$page.workshop.title}}</h1>

        <p class="w-full text-justify mb-4">{{$page.workshop.short}}</p>

        <p>Workshopler: {{$page.workshop.creator.name}}</p>

      </div>

    </div>

  </Layout>
</template>
<script>
import WorkshopImageLarge from "../components/workshop/WorkshopImageLarge";

export default {
  components: {WorkshopImageLarge},
  metaInfo: {
    title: 'Startseite'
  }
}
</script>
<page-query>
query Workshop ($id: ID!){
workshop: workshop(id: $id) {
title
id
short
img
content
creator {
name
}
}
}
</page-query>