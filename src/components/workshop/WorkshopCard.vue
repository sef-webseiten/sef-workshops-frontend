<template>
  <a
    :href="workshop.path"
    class="rounded shadow-lg bg-white transition duration-200 hover:shadow-2xl flex flex-col justify-between"
  >
    <div>
      <!-- thumbnail -->
      <img
        :src="workshop.thumbnail"
        class="rounded-t w-full h-48 object-cover"
        draggable="false"
      />

      <div class="p-4 pb-0">
        <!-- title -->
        <h2 class="text-lg mb-4">{{ workshop.title }}</h2>

        <!-- subtitle -->
        <p
          v-if="workshop.subTitle"
          class="my-4 text-sm border-l-2 border-red-400 pl-4 rounded-sm"
        >
          {{ workshop.subTitle }}
        </p>
      </div>
    </div>

    <div
      class="p-4 pt-3 z-20 bg-gray-100 text-center rounded-b-2xl grid grid-cols-2 gap-2 icons-red"
    >
      <!-- stars -->
      <p>
        <fa :icon="['fas', 'calendar-day']" class="mr-1" />
        ab <span class="highlight">{{ nextDate }}</span>
      </p>

      <!-- rating -->
      <div>
        <fa
          v-for="i in [1, 2, 3, 4, 5]"
          :key="i"
          :icon="['fas', 'star']"
          class="mr-1"
        />
      </div>

      <!-- duration -->
      <div>
        <fa :icon="['fas', 'clock']" class="mr-2" />
        <span class="highlight">{{ workshop.nextDuration }} Stunden</span>
      </div>

      <!-- min price -->
      <div>
        <fa :icon="['fas', 'tags']" class="mr-2" />
        <span class="highlight">ab {{ workshop.minPrice }},-</span>
      </div>
    </div>
  </a>
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
  computed: {
    nextDate() {
      let date = dayjs(this.workshop.nextDate);

      if (date.isSame(dayjs(), "year")) return date.format("D. MMMM");
      else return date.format("D. MMM YYYY");
    },
  },
};
</script>
<style lang="scss" scoped>
.highlight {
  @apply text-lg;
}

.icons-red svg {
  @apply text-red-400;
}
</style>