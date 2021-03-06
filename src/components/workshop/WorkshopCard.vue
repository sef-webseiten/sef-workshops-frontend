<template>
  <div>
    <g-link
        :to="workshop.path"
        class="rounded shadow-lg bg-white transition duration-200 hover:shadow-2xl flex flex-col justify-between h-full"
    >
      <div>
        <!-- thumbnail -->
        <img
            :src="workshop.thumbnail"
            alt="Thumbnail"
            class="rounded-t w-full h-32 object-cover"
            draggable="false"
        />

        <div class="p-4 pt-4 pb-0 relative">

          <img
              :src="workshop.organizer.profilePicture" alt="Profilbild"
              class="w-16 h-16 rounded-full absolute right-0 top-0 -mt-8 mr-4">

          <span class="block text-xs text-gray-400 mr-12">{{ workshop.organizer.fullName }}</span>

          <!-- title -->
          <h2 class="text-base font-medium mb-4">{{ workshop.title }}</h2>

          <!-- subtitle -->
          <p
              v-if="workshop.subTitle"
              class="my-4 text-sm border-l-2 border-light pl-4"
          >
            {{ workshop.subTitle }}
          </p>

        </div>
      </div>

      <div
          class="p-4 pt-3 z-20 bg-gray-50 text-center rounded-b-2xl grid grid-cols-2 gap-2 icons-primary-light"
      >
        <!-- stars -->
        <div>
          <fa :icon="['fas', 'calendar-day']" class="mr-1"/>
          <span v-if="nextDate">ab {{ nextDate }}</span>
          <span v-else class="ml-1">-</span>
        </div>

        <!-- ratings -->
        <div v-if="!isNaN(workshop.averageRating)">
          <Stars class="mx-auto w-fit" :value="workshop.averageRating" />
        </div>
        <!-- no ratings available -->
        <div v-else class="icons-gray">
          -
          <fa :icon="['fas', 'star']" class="mx-1 icons-gray"/>
          -
        </div>

        <!-- duration -->
        <div>
          <fa :icon="['fas', 'clock']" class="mr-1"/>
          <span v-if="workshop.nextDuration">{{ workshop.nextDuration }} Stunden</span>
          <span v-else>-</span>
        </div>

        <!-- min price -->
        <div>
          <fa :icon="['fas', 'tags']" class="mr-1"/>
          <span v-if="workshop.minPrice">
            {{ workshop.allPricesTheSame ? '' : 'ab' }} {{ workshop.minPrice }} EUR
          </span>
          <span v-else>-</span>
        </div>
      </div>
    </g-link>
  </div>
</template>
<script>
import dayjs from "dayjs";
import "dayjs/locale/de";
import Stars from "../gui-elements/Stars";

dayjs.locale("de");

export default {
  components: { Stars },
  props: {
    workshop: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      stars: Math.round(Math.random() * 2) + 3,
    };
  },
  computed: {
    nextDate() {
      if (!this.workshop.nextDate)
        return null;

      let date = dayjs(this.workshop.nextDate);

      if (date.isSame(dayjs(), "year")) return date.format("D. MMMM");
      else return date.format("D. MMM YY");
    },
  },
};
</script>
<style lang="scss" scoped>
.icons-gray svg {
  @apply text-gray-200;
}
</style>