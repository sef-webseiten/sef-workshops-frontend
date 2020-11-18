<template>
  <a :href="workshop.path" class="block rounded shadow-lg bg-white transition duration-200 hover:shadow-2xl">

    <!-- thumbnail -->
    <img :src="workshop.thumbnail" class="rounded-t w-full h-48 object-cover" draggable="false"/>

    <div class="p-4 z-20">

      <!-- title -->
      <h2 class="text-lg mb-4">{{ workshop.title }}</h2>

      <!-- subtitle -->
      <p v-if="workshop.subTitle" class="my-4 text-sm border-l-2 border-red-400 pl-4 rounded-sm">
        {{ workshop.subTitle }}</p>

      <div class="block my-2 box w-full flex justify-content items-center flex-col icons-red">
        <p>
          <fa :icon="['fas', 'calendar-day']" class="mr-1"/>
          ab <span class="highlight">{{ nextDate }}</span>
        </p>
      </div>

      <div class="grid grid-cols-2 gap-2 my-2 mb-0 text-center icons-red ">

        <!-- duration -->
        <div class="box">
          <fa :icon="['fas', 'clock']" class="mr-2"/>
          <span class="highlight">{{ duration }}h</span>
        </div>

        <!-- participants -->
        <div class="box">
          <fa :icon="['fas', 'user-friends']" class="mr-2"/>
          <span class="highlight">10/{{ workshop.nextParticipants }}</span>
        </div>

        <!-- min price -->
        <div class="box">
          <fa :icon="['fas', 'tags']" class="mr-2"/>
          <span class="highlight">ab {{ workshop.minPrice }}€</span>
        </div>

        <!-- rating -->
        <div class="box">
          <fa v-for="i in [1,2,3,4,5]" :key="i" :icon="['fas', 'star']" class="mr-1"/>
        </div>

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
      required: true
    }
  },
  computed: {
    nextDate() {
      let date = dayjs(this.workshop.nextDate);

      if (date.isSame(dayjs(), "year"))
        return date.format("D. MMMM")
      else
        return date.format("D. MMMM YYYY")
    },
    duration() {
      return Math.floor(this.workshop.nextDuration / 1000 / 60);
    }
  }
}
</script>
<style lang="scss" scoped>
.highlight {
  @apply text-lg;
}

.icons-red svg {
  @apply text-red-400;
}

.box {
  @apply bg-gray-100 rounded-sm;
}
</style>