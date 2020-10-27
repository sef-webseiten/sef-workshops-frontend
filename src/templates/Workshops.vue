<template>
  <Layout>
    <div class=" mb-12 mx-auto w-2/3 shadow-2xl px-6 my-6 pb-48">
      <div>

        <div class="w-full md:p-4">
          <WorkshopImageLarge :img="$page.workshop.thumbnail" :title="$page.workshop.title"/>

        </div>

        <div class="w-full pt-6 md:p-4">

          <h1 class="text-xl tracking-wider mb-4">{{ $page.workshop.title }}</h1>

          <vue-markdown :source="$page.workshop.description" class="w-full text-justify mb-4"/>

          <p class="mb-4">Workshopler: {{ $page.workshop.organizer.name }}</p>

          <p>Kategorien: <span>{{ $page.workshop.categories.join(" · ") }}</span></p>

        </div>

      </div>

      <h2 class="text-xl font-bold text-center mb-8">Terminreihen</h2>

      <div class="mb-4 py-4 px-6 flex justify-around items-center last:mb-0 bg-gray-300 rounded"
           v-for="daterow in $page.workshop.daterows">
        <span class="text-center"> <fa class="text-red-400 mb-2" :icon="['fas', 'user-friends']" size="2x"/><br>12 / {{ daterow.maxParticipants }}</span>
        <span class="text-center"><fa class="text-red-400 mb-2" :icon="['fas', 'tags']" size="2x"/><br> {{ daterow.price }} EUR</span>
        <span class="text-center"><fa class="text-red-400 mb-2" :icon="['fas', 'map-marker-alt']" size="2x"/><br> {{ daterow.publicLocation }} </span>
        <div class="text-center">

          <fa class="text-red-400 mb-2" :icon="['fas', 'calendar-day']" size="2x"/><br>

          <span class="block" v-for="date in daterow.dates">{{ timeString(date) }}</span>
        </div>

        <button @click="$root.$emit('openCheckoutProcess')"
                class=" p-4 text-white bg-red-500 font-lg font-bold rounded"><fa :icon="['fas', 'angle-double-right']" /> Teilnehmen
        </button>

      </div>



      <PaymentButtons/>
    </div>
  </Layout>
</template>
<script>
import WorkshopImageLarge from "../components/workshop/WorkshopImageLarge";
import VueMarkdown from 'vue-markdown';
import dayjs from "dayjs";
import PaymentButtons from "@/components/PaymentButtons";

export default {
  components: {WorkshopImageLarge, VueMarkdown, PaymentButtons},
  metaInfo: {
    title: 'Startseite'
  },
  methods: {
    timeString(date) {
      let formatTemplate = "DD.MM.YYYY HH:mm";
      let dates = [dayjs(date.startTime), dayjs(date.endTime)]
      let sameDay = dates[0].isSame(dates[1], "day");

      return "12.3.2020 8-16 Uhr"

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