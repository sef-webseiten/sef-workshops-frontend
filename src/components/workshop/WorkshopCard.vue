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
        <p>
          <fa :icon="['fas', 'calendar-day']" class="mr-1"/>
          ab <span>{{ nextDate }}</span>
        </p>

        <!-- rating -->
        <div>
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

        <!-- duration -->
        <div>
          <fa :icon="['fas', 'clock']" class="mr-2"/>
          <span>{{ workshop.nextDuration }} Stunden</span>
        </div>

        <!-- min price -->
        <div>
          <fa :icon="['fas', 'tags']" class="mr-2"/>
          <span>ab {{ workshop.minPrice }},-</span>
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
  @apply text-gray-100;
}
</style>