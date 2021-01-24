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
            class="rounded-t w-full h-32 object-cover"
            alt="Thumbnail"
            draggable="false"
        />

        <div class="p-4 pb-0">
          <!-- title -->
          <h2 class="text-base font-medium mb-4">{{ workshop.title }}</h2>

          <!-- subtitle -->
          <p
              v-if="workshop.subTitle"
              class="my-4 text-sm border-l-2 border-light pl-4 rounded-sm"
          >
            {{ workshop.subTitle }}
          </p>
        </div>
      </div>

      <div
          class="p-4 pt-3 z-20 bg-gray-50 text-center rounded-b-2xl grid grid-cols-2 gap-2 icons-red"
      >
        <!-- stars -->
        <div>
          <fa :icon="['fas', 'calendar-day']" class="mr-1"/>
          <span v-if="nextDate">ab {{ nextDate }}</span>
          <span v-else class="ml-1">-</span>
        </div>

        <!-- rating ToDo: Ratings -->
        <div v-if="true">
          <fa v-for="i in stars" :key="i" :icon="['fas', 'star']" class="mr-1"/>
          <div class="icons-gray inline">
            <fa
                v-for="i in 5 - stars"
                :key="i"
                :icon="['fas', 'star']"
                class="mr-1 icons-gray"
            />
          </div>
        </div>
        <div v-else class="icons-gray">
          -
          <fa :icon="['fas', 'star']" class="mx-1 icons-gray" />
          -
        </div>

        <!-- duration -->
        <div>
          <fa :icon="['fas', 'clock']" class="mr-2"/>
          <span v-if="workshop.nextDuration">{{ workshop.nextDuration }} Stunden</span>
          <span v-else>-</span>
        </div>

        <!-- min price -->
        <div>
          <fa :icon="['fas', 'tags']" class="mr-2"/>
          <span v-if="workshop.minPrice">ab {{ workshop.minPrice }},-</span>
          <span v-else>-</span>
        </div>
      </div>
    </g-link>
  </div>
</template>
<script>
import dayjs from "dayjs";
import "dayjs/locale/de";

dayjs.locale("de");

export default {
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
.icons-red svg {
  @apply text-light;
}

.icons-gray svg {
  @apply text-gray-200;
}
</style>