<template>
  <WithoutBorderLayout>
    <div class="md:mt-8 mb-12 mx-auto lg:w-3/4 shadow-2xl rounded icons-red">

      <WorkshopImageLarge :img="$page.workshop.thumbnail" :title="$page.workshop.title"/>

      <div class="p-6 md:p-10">

        <!-- subtitle -->
        <div class="text-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at corporis dolorem eveniet magni rerum
          sequi sit voluptate. Esse illo impedit magni maxime nulla numquam tenetur! Enim eveniet fugit molestias!
        </div>

        <!-- categories -->
        <div class="-ml-1 mt-8">
          <span v-for="category in $page.workshop.categories"
                class="m-1 px-4 py-1 bg-red-400 text-white rounded inline-block">{{ category }}</span>
        </div>

        <!-- ratings -->
        <div class="mt-8 p-2 box w-fit inline-block mr-4">
          <fa v-for="i in [1,2,3,4,5]" :icon="['fas', 'star']" class="mr-1" size="lg"></fa>
        </div>

        <!-- "starting at" price box -->
        <div class="mt-8 p-2 box w-fit inline-block mr-4">
          <fa :icon="['fas', 'tags']" class="mr-1" size="lg"/>
          ab 15 EURO
        </div>

        <!-- first event date -->
        <div class="mt-8 p-2 box w-fit inline-block">
          <fa :icon="['fas', 'calendar-day']" class="mr-1" size="lg"/>
          ab 17.11.2020
        </div>

        <!-- organizer box -->
        <div class="mt-8 flex box p-4">
          <img class="w-16 h-16 md:w-24 md:h-24 rounded-full inline-block" src="/eric.jpg">
          <div class="block ml-6 pt-6">
            <span class="text-xl">Eric Feltgen, 19 {{ "" /*$page.workshop.organizer.name*/ }}</span><br>
            <span>Informatik Student an der RWTH Aachen</span>
          </div>
        </div>

        <!-- description -->
        <div class="box mt-8 w-full p-4">
          <h2 class="text-lg mb-4">Beschreibung</h2>
          <vue-markdown :source="$page.workshop.description" class="text-justify"/>
        </div>

        <div class="box mt-8 w-full p-4">
          <h2 class="text-lg mb-4">Vorraussetzungen</h2>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.         </div>

        <div class="box mt-8 w-full p-4">
          <h2 class="text-lg mb-4">Material</h2>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.         </div>

        <h2 class="heading my-8">Veranstaltungen</h2>

        <!-- list of all events -->
        <div v-for="daterow in $page.workshop.daterows" >

          <!-- ToDo: Hintergrundfarbe passend machen -->

          <div class="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-5 text-lg text-center">

            <div class="box p-2">
              <fa :icon="['fas', 'user-friends']" class="mr-2" size="lg"/>
              5/15
            </div>

            <div class="box p-2">
              <fa :icon="['fas', 'map-marker-alt']" class="mr-2" size="lg"/>
              {{ daterow.publicLocation }}
            </div>

            <div class="box p-2">
              <fa :icon="['fas', 'tags']" class="mr-2" size="lg"/>
              {{ daterow.price }} EURO
            </div>

            <!-- dates -->
            <div class="box flex flex-row justify-center md:col-span-2">
              <fa :icon="['fas', 'calendar-day']" class="m-2" size="lg"/>
              <div class="p-2">

                <span v-for="date in daterow.dates" class="block">{{ timeString(date) }}</span>

              </div>
            </div>

            <!-- cta -->
            <button class=" p-4 text-white bg-red-500 font-lg font-bold rounded-sm"
                    @click="$root.$emit('openCheckoutProcess')">
              <fa :icon="['fas', 'angle-double-right']"/>
              Teilnehmen
              <fa :icon="['fas', 'angle-double-left']"/>
            </button>

          </div>

        </div>

        <h2 class="heading my-8 hidden">
          Bewertungen
          <div class="inline-block md:float-right"><fa v-for="i in [1,2,3,4,5]" :icon="['fas', 'star']" class="mr-1" size="lg"></fa></div>
        </h2>



      </div>

      <PaymentButtons/>
    </div>
  </WithoutBorderLayout>
</template>
<script>
import WorkshopImageLarge from "../components/workshop/WorkshopImageLarge";
import VueMarkdown from 'vue-markdown';
import dayjs from "dayjs";
import PaymentButtons from "@/components/PaymentButtons";
import WithoutBorderLayout from "../layouts/WithoutBorder";

export default {
  components: {WorkshopImageLarge, VueMarkdown, PaymentButtons, WithoutBorderLayout},
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
<style scoped>
.box {
  @apply bg-gray-200 rounded-sm;
}

.icons-red svg {
  @apply text-red-400;
}

.heading {
  @apply text-xl font-bold;
}
</style>
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