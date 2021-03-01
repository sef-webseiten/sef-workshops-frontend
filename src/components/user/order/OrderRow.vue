<template>
  <div class="rounded shadow-2xl mb-6 last:mb-0 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
    <div>
      <p class="text-center mb-2">Kurs</p>
      <div class="box block p-2">

        <!-- name and organizer -->
        <div class="mb-4">
          <span class="font-semibold">{{ order.workshop.title }}</span> bei
          <span class="font-semibold">{{ order.workshop.organizer.fullName }}</span>
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
        <span class="font-semibold mt-2">Status</span>
        {{ statusCodes[order.status] }} <br>
        <span class="font-semibold mt-2">Buchungsnummer</span>
        {{ order._id }}
      </div>
    </div>

    <div class="text-center">
      <p class="mb-2">Aktionen</p>

      <!-- request refund -->
      <button class="primary-border-button w-full"
              @click="$root.$emit('openContactForm', { subject: `Stornierung von Bestellung ${order._id}`})">
        Stornierung anfragen
      </button>

      <!-- open workshop -->
      <g-link :to="`/w/${order.workshop._id}`" class="block mt-2 primary-border-button w-full">
        Kurs öffnen
      </g-link>

      <!-- contact on whatsapp -->
      <a :href="order.workshop.organizer.contact.whatsapp" v-if="order.workshop.organizer.contact.whatsapp"
         class="primary-border-button mt-2 w-full block" target="_blank" rel="noopener" title="WhatsApp">
        {{ order.workshop.organizer.firstName }} auf WhatsApp kontaktieren
      </a>

      <!-- contact on facebook messenger -->
      <a :href="order.workshop.organizer.contact.messenger" v-if="order.workshop.organizer.contact.messenger"
         class="primary-border-button mt-2 w-full block" target="_blank" rel="noopener" title="Messenger">
        {{ order.workshop.organizer.firstName }} beim Facebook Messenger kontaktieren
      </a>

      <!-- mailto button -->
      <a :href="`mailto:${order.workshop.organizer.email}`"
         class="primary-border-button mt-2 w-full block" target="_blank" rel="noopener" title="E-Mail">
        {{ order.workshop.organizer.firstName }} eine E-Mail schreiben
      </a>
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