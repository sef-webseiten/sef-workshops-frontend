<template>
  <div class="relative page-style-card icons-primary-light pb-6">
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
          <div v-if="!isNaN(workshop.averageRating)">
            <Stars :value="workshop.averageRating" class="border-box" size="lg"/>
          </div>
          <div v-else>
            -
            <fa :icon="['fas', 'star']" class="mx-1 icons-gray" size="lg"/>
            -
          </div>
        </div>

        <!-- "starting at" price box -->
        <div class="mt-2 p-2 box w-fit inline-block mr-4">
          <fa :icon="['fas', 'tags']" class="mr-1" size="lg"/>
          ab {{ workshop.minPrice || '-' }} EURO
        </div>

        <!-- first event date -->
        <div class="mt-2 p-2 box w-fit inline-block mr-4">
          <fa :icon="['fas', 'calendar-day']" class="mr-1" size="lg"/>
          {{ nextDate.localeCompare("Invalid Date") !== 0 ? `ab ${nextDate}` : "kein Termin geplant" }}
        </div>

        <!-- first event date -->
        <div class="mt-2 p-2 box w-fit inline-block">
          <fa :icon="['fas', 'clock']" class="mr-1" size="lg"/>
          {{ workshop.nextDuration ? `${workshop.nextDuration} Stunden` : "-" }}
        </div>

      </div>

      <!-- organizer box -->
      <div class="mt-8 flex flex-row items-center box p-4">
        <img
            :src="workshop.organizer.profilePicture"
            alt="Profilbild"
            class="w-16 h-16 md:w-24 md:h-24 rounded-full inline-block"
        />
        <div class="block ml-6 h-fit">
          <p class="text-xl mb-1">
            {{ workshop.organizer.fullName }}, {{ age }}
          </p>
          <p>{{ workshop.organizer.occupation }}</p>
          <p>E-Mail: {{ workshop.organizer.email }}</p>
        </div>
      </div>

      <!-- ToDo: enable and configure vue-markdown correctly -->

      <!-- takeaway -->
      <div class="box mt-8 w-full p-4">
        <h2 class="text-lg mb-4">Das nimmst du mit</h2>
        <span class="text-justify">{{ workshop.takeaway }}</span>
        <!--vue-markdown :source="" class="text-justify"/-->
      </div>

      <!-- description -->
      <div class="box mt-8 w-full p-4">
        <h2 class="text-lg mb-4">Beschreibung</h2>
        <span class="text-justify">{{ workshop.description }}</span>
        <!--vue-markdown :source="" class="text-justify"/-->
      </div>

      <!-- requirements -->
      <div v-if="workshop.requirements" class="box mt-8 w-full p-4">
        <h2 class="text-lg mb-4">Voraussetzungen</h2>
        <span class="text-justify">{{ workshop.requirements }}</span>
        <!--vue-markdown :source="" class="text-justify"/-->
      </div>

      <!-- content -->
      <div v-if="workshop.content" class="box mt-8 w-full p-4">
        <h2 class="text-lg mb-4">Inhalte</h2>
        <span class="text-justify">{{ workshop.content }}</span>
        <!--vue-markdown :source="" class="text-justify"/-->
      </div>

      <h2 class="h3 my-8">Veranstaltungen</h2>
    </div>

    <!-- events -->
    <WorkshopEventsSection v-for="event in visibleEvents" :key="event._id" :event="event" :workshop="workshop"/>
    <p v-if="visibleEvents.length === 0" class="mx-10">Keine geplanten Veranstaltungen. </p>

    <WorkshopRatingSection :workshop="workshop"/>

    <PaymentButtons/>
  </div>
</template>
<script>
import WorkshopImageLarge from "../WorkshopImageLarge";
import VueMarkdown from "vue-markdown";
import dayjs from "dayjs";
import Stars from "../../gui-elements/Stars";
import PaymentButtons from "../../PaymentButtons";
import WorkshopRatingSection from "../sections/ratings/WorkshopRatingSection";
import WorkshopEventsSection from "../sections/events/WorkshopEventsSection";

export default {
  props: ["workshop"],
  components: {
    WorkshopEventsSection,
    WorkshopRatingSection,
    Stars,
    WorkshopImageLarge,
    VueMarkdown,
    PaymentButtons,
  },
  computed: {
    nextDate() {
      return dayjs(this.workshop.nextDate).format("DD.MM.YYYY");
    },
    visibleEvents() {
      const self = this;
      return this.workshop.events.filter(event => {
        const exists = self.$store.state.orders.orders.filter(o => o.event._id === event._id).length > 0;
        return event.visible && event.bookable || exists
      });
    },
    age() {
      return dayjs().diff(dayjs(this.workshop.organizer.birthday), "year");
    }
  },
};
</script>