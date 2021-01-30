<template>
  <Layout withoutBorder>
    <div class="md:mt-8 mb-12 mx-auto lg:w-3/4 shadow-2xl md:rounded icons-red pb-4 md:pb-6">
      <WorkshopImageLarge :workshop="workshop"/>

      <div class="p-6 md:p-10 pb-0 md:pb-0">
        <!-- subtitle -->
        <div class="text-md">
          {{ workshop.subTitle }}
        </div>

        <!-- categories -->
        <div class="-ml-1 mt-8">
          <span
              v-for="category in workshop.categories"
              :key="category"
              class="m-1 px-4 py-1 bg-light text-white rounded inline-block"
          >{{ category }}</span
          >
        </div>

        <!-- container -->
        <div class="mt-6">

          <!-- ratings -->
          <div class="mt-2 p-2 box w-fit inline-block mr-4">
            <fa
                v-for="i in [1, 2, 3, 4, 5]"
                :icon="['fas', 'star']"
                :key="i"
                class="mr-1"
                size="lg"
            ></fa>
          </div>

          <!-- "starting at" price box -->
          <div class="mt-2 p-2 box w-fit inline-block mr-4">
            <fa :icon="['fas', 'tags']" class="mr-1" size="lg"/>
            ab {{ workshop.minPrice }} EURO
          </div>

          <!-- first event date -->
          <div class="mt-2 p-2 box w-fit inline-block">
            <fa :icon="['fas', 'calendar-day']" class="mr-1" size="lg"/>
            ab {{ nextDate }}
          </div>

        </div>

        <!-- organizer box -->
        <div class="mt-8 flex box p-4">
          <img
              class="w-16 h-16 md:w-24 md:h-24 rounded-full inline-block"
              :src="workshop.organizer.profilePicture"
              alt="Profilbild"
          />
          <div class="block ml-6 md:pt-6">
            <span class="text-xl">
              {{ workshop.organizer.firstName }}, {{ age }}</span
            ><br/>
            <span>{{ workshop.organizer.occupation }}</span>
          </div>
        </div>

        <!-- ToDo: Configure vue-markdown correctly -->

        <!-- description -->
        <div class="box mt-8 w-full p-4">
          <h2 class="text-lg mb-4">Beschreibung</h2>
          <vue-markdown :source="workshop.description" class="text-justify"/>
        </div>

        <!-- requirements -->
        <div v-if="workshop.requirements" class="box mt-8 w-full p-4">
          <h2 class="text-lg mb-4">Vorraussetzungen</h2>
          <vue-markdown :source="workshop.requirements" class="text-justify"/>
        </div>

        <!-- material -->
        <div v-if="workshop.material" class="box mt-8 w-full p-4">
          <h2 class="text-lg mb-4">Material</h2>
          <vue-markdown :source="workshop.material" class="text-justify"/>
        </div>

        <h2 class="heading my-8">Veranstaltungen</h2>
      </div>

      <!-- events -->
      <div
          v-for="(event, id) in workshop.events"
          :key="id"
          class="my-8 mx-4 md:mx-6 rounded shadow-xl flex flex-row"
      >
        <div
            class="p-4 grid grid-cols-1 md:grid-cols-3 gap-y-3 text-lg text-center flex-grow"
        >
          <div class="box p-2">
            <fa :icon="['fas', 'user-friends']" class="mr-2" size="lg"/>
            5/{{ event.maxParticipants }}
          </div>

          <div class="box p-2">
            <fa :icon="['fas', 'map-marker-alt']" class="mr-2" size="lg"/>
            {{ event.publicLocation }}
          </div>

          <!-- ToDo: format price like XX,YY EUROP -->
          <div class="box p-2">
            <fa :icon="['fas', 'tags']" class="mr-2" size="lg"/>
            {{ event.price }} EURO
          </div>

          <!-- dates -->
          <div class="box flex flex-row justify-center md:col-span-3">
            <fa :icon="['fas', 'calendar-day']" class="m-2" size="lg"/>
            <div class="p-2">
              <span
                  v-for="date in event.dates"
                  :key="date.startTime"
                  class="block"
              >{{ date.timeString }}</span
              >
            </div>
          </div>
        </div>

        <!-- cta -->
        <button
            class="p-4 text-white bg-primary font-lg font-bold rounded-r w-1/5"
            @click="
            $root.$emit('openCheckoutProcess', {
              workshop,
              event,
            })
          "
        >
          <span class="transform origin-bottom-right -translate-x-1/4 -rotate-90 block md:inline"
                style="">Teilnehmen</span>
        </button>
      </div>

      <div class="p-6 md:p-10">
        <h2 class="heading">
          Bewertungen
          <div class="inline-block md:float-right">
            <Stars :stars="workshop.averageRating" size="lg"/>
          </div>
        </h2>
      </div>

      <!-- individual ratings -->
      <div v-for="rating in workshop.ratings"
           class="mx-4 md:mx-6 rounded shadow-xl p-6 flex flex-row justify-between">
        <div>
          <div class="flex flex-row items-center w-full justify-start mb-6">
            <img class="h-16 w-16 mr-6 rounded-full" :src="rating.author.profilePicture" alt="Profilbild"/>
            <p class="font-bold">{{ rating.author.firstName }}</p>
          </div>
          <p>{{ rating.text }}</p>
        </div>
        <div class="ml-10 text-sm grid grid-cols-2 gap-4 text-center">

          <div>
            <p>Inhalt</p>
            <Stars :stars="rating.content"/>
          </div>

          <div>
            <p>Komposition</p>
            <Stars :stars="rating.composition"/>
          </div>

          <div>
            <p>Klarheit</p>
            <Stars :stars="rating.clarity"/>
          </div>

          <div>
            <p>Expertise</p>
            <Stars :stars="rating.expertise"/>
          </div>

          <div>
            <p>Zielerreichung</p>
            <Stars :stars="rating.goalAchievement"/>
          </div>
        </div>
      </div>

      <!-- ToDo: nicht angemeldet? -->
      <PaymentButtons/>
    </div>
  </Layout>
</template>
<script>
import WorkshopImageLarge from "../components/workshop/WorkshopImageLarge";
import VueMarkdown from "vue-markdown";
import dayjs from "dayjs";
import PaymentButtons from "@/components/PaymentButtons";
import Stars from "../components/gui-elements/Stars";

export default {
  components: {
    Stars,
    WorkshopImageLarge,
    VueMarkdown,
    PaymentButtons,
  },
  metaInfo() {
    return {
      title: this.workshop.title,
    }
  },
  computed: {
    workshop() {
      return this.$store.state.workshops.workshops?.filter(workshop => workshop._id == this.$router.currentRoute.params._id)[0] || this.$page.workshop;

    },
    nextDate() {
      return dayjs(this.workshop.nextDate).format("DD.MM.YYYY");
    },
    age() {
      return dayjs().diff(dayjs(this.workshop.organizer.birthday), "year");
    }
  },
};
</script>
<style scoped lang="scss">
@import "src/assets/css/main";

.icons-red svg {
  @apply text-light;
}

.icons-gray svg {
  @apply text-gray-200;
}

.heading {
  @apply text-xl font-bold;
}
</style>
<page-query>
query Workshop ($id: ID!){
workshop: workshops(id: $id) {
_id
title
subTitle

organizer {
firstName
birthday
occupation
profilePicture
}

description
material
requirements

minPrice
nextDate
averageRating

ratings {
content
composition
clarity
expertise
goalAchievement
text
average
author {
firstName
profilePicture
}
}

thumbnail
categories

events {
_id
maxParticipants
price
publicLocation
dates {
timeString
}
}
}
}

</page-query>