<template>
  <div class="rounded shadow-2xl mb-6 last:mb-0 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
    <div>
      <p class="text-center mb-2">Kurs</p>
      <div class="box block p-2">

        <!-- name and organizer -->
        <div class="mb-4">
          <span class="font-semibold">{{ order.workshop.title }}</span> bei
          <span class="font-semibold">{{ order.workshop.organizer.firstName }}</span>
        </div>

        <!-- dates -->
        <div class="mb-4">
          <span class="font-semibold">Wann? </span>
          <div v-for="date in order.event.dates">
            {{ date.timeString }}
          </div>
        </div>

        <!-- location -->
        <div>
          <p class="font-semibold">Wo? </p>
          {{ order.event.privateLocation || order.event.publicLocation }}
        </div>

      </div>
    </div>

    <div>
      <p class="text-center mb-2">Buchungsdetails</p>
      <div class="box block p-2">
        <span class="font-semibold">Preis</span>
        {{ order.price / 100 }} EURO <br>
        <span class="font-semibold mt-2">Datum</span>
        {{ order.timestamp }} <br>
        <span class="font-semibold mt-2">Teilnehmer</span>
        {{ order.participants }} <br>
        <span class="font-semibold mt-2">Status</span>
        {{ statusCodes[order.status] }}
      </div>
    </div>

    <div>
      <p class="text-center mb-2">Aktionen</p>
      <button class="primary-button w-full"
              @click="$root.$emit('openContactForm', { subject: `Stornierung von Bestellung ${order._id}`})">
        Stornierung anfragen
      </button>
      <g-link :to="`/w/${order.workshop._id}`" class="block text-center mt-2 primary-button w-full">
        Kurs öffnen
      </g-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      statusCodes: {
        PAYED: "Bezahlt",
        PENDING: "Bezahlung noch nicht eingegangen",
        REFUNDED: "Zurückerstattet",
        REVIEW: "Manuelle Überprüfung notwendig"
      }
    }
  }
}
</script>