<template>
  <div
      class="my-8 mx-4 md:mx-6 rounded shadow-xl flex flex-row"
  >
    <div
        class="p-4 grid grid-cols-1 md:grid-cols-3 gap-y-3 text-lg text-center flex-grow"
    >
      <div class="box p-2">
        <fa :icon="['fas', 'user-friends']" class="mr-2" size="lg"/>
        <span class="mr-2">{{ event.maxParticipants }}</span>
        <div class="inline-block w-4 h-4 rounded-full bg-green-400" v-if="utilization < 75"/>
        <div class="inline-block w-4 h-4 rounded-full bg-yellow-400" v-else-if="utilization < 100"/>
        <div class="inline-block w-4 h-4 rounded-full bg-red-400" v-else/>
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
                  class="block">
                {{ date.timeString }}
              </span>
          <div>
          </div>
        </div>
      </div>

      <p class="box text-center md:col-span-3"
        v-if="this.$store.state.orders.orders.filter(o => o.event._id === event._id).length > 0">
        Du bist bei dieser Veranstaltung angemeldet.
      </p>
    </div>

    <!-- cta -->
    <button
        :disabled="!event.bookable"
        class="p-4 text-white bg-primary disabled:bg-light disabled:cursor-not-allowed disabled:line-through font-lg font-bold rounded-r w-1/5"
        @click=" $root.$emit('openCheckoutProcess',{ workshop, event })">
          <span class="transform origin-bottom-right -translate-x-1/4 -rotate-90 block md:inline">
            Teilnehmen
          </span>
    </button>
  </div>
</template>
<script>
export default {
  props: ["workshop", "event"],
  computed: {
    utilization() {
      return this.event.currentParticipants / this.event.maxParticipants * 100;
    }
  }
}
</script>