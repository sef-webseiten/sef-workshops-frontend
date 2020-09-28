<template>
  <Layout>
    <div class="md:flex justify-center items-center mb-12">

      <div class="w-full md:p-4">
        <WorkshopImageLarge :img="$page.workshop.thumbnail" :title="$page.workshop.title"/>

      </div>

      <div class="w-full pt-6 md:p-4">

        <h1 class="text-xl tracking-wider mb-4">{{ $page.workshop.title }}</h1>

        <vue-markdown :source="$page.workshop.description" class="w-full text-justify mb-4"/>

        <p class="mb-4">Workshopler: {{$page.workshop.organizer.name}}</p>

        <p>Kategorien: <span>{{$page.workshop.categories.join(" · ")}}</span> </p>

      </div>

    </div>

    <h2 class="text-xl font-bold text-center mb-8">Terminreihen</h2>

    <div v-for="daterow in $page.workshop.daterows" class="mb-4 py-4 px-6 flex justify-between items-center last:mb-0 bg-gray-300 rounded">
      <span>Teilnehmer: 12 / {{daterow.maxParticipants}}</span>
      <span>Preis: {{daterow.price}}</span>
      <span class="w-1/4">Standort: {{daterow.publicLocation}} <br> Einen genauen Standort bekommst du nach der Buchung zugeschickt. </span>
      <div>

        <h3 class="block font-bold">Termine</h3>

        <span v-for="date in daterow.dates">{{timeString(date)}}</span>
      </div>
    </div>

  </Layout>
</template>
<script>
import WorkshopImageLarge from "../components/workshop/WorkshopImageLarge";
import VueMarkdown from 'vue-markdown';
import dayjs from "dayjs";

export default {
  components: {WorkshopImageLarge, VueMarkdown},
  metaInfo: {
    title: 'Startseite'
  },
  methods: {
    timeString(date) {
      let formatTemplate = "DD.MM.YYYY HH:mm";
      let dates = [dayjs(date.startTime),dayjs(date.endTime)]
      let sameDay = dates[0].isSame(dates[1], "day");

      if (sameDay)
        return `${dates[0].format(formatTemplate)} - ${dates[1].format("HH:mm")}`
      else
        return `${dates[0].format(formatTemplate)} - ${dates[1].format(formatTemplate)}`
    }
  }
}
</script>
<page-query>
query Workshop ($id: ID!){
workshop: workshops(id: $id) {
title
description
thumbnail
organizer {name}
categories
daterows {
  maxParticipants
minParticipants
price
publicLocation
dates {
  startTime
endTime
}
}
}
}

</page-query>