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
        {{ order.price / 100 }} EUR <br>
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

      <div :class="numOfColumns" class="grid gap-1 mt-2 font-semibold text-center text-sm md:text-base">

        <!-- contact on whatsapp -->
        <a v-if="order.workshop.organizer.contact.whatsapp" :href="order.workshop.organizer.contact.whatsapp"
           class="rounded-sm text-white p-1 md:p-2 block"
           rel="noopener" style="background-color: #25D366" target="_blank" title="WhatsApp">
          <fa :icon="['fab', 'whatsapp']"/>
          <br> WhatsApp
        </a>

        <!-- contact on facebook messenger -->
        <a v-if="order.workshop.organizer.contact.messenger" :href="order.workshop.organizer.contact.messenger"
           class="rounded-sm text-white p-1 md:p-2 block"
           rel="noopener" style="background-color: #0078FF" target="_blank" title="Messenger">
          <fa :icon="['fab', 'facebook-messenger']"/>
          <br> Messenger
        </a>

        <!-- mailto button -->
        <a :href="`mailto:${order.workshop.organizer.email}`"
           class="rounded-sm text-white bg-gray-700 p-1 md:p-2 block" rel="noopener" target="_blank" title="E-Mail">
          <fa :icon="['fas', 'at']"/>
          <br>E-Mail
        </a>
      </div>
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
  computed: {
    numOfColumns() {
      if (this.order.workshop.organizer.contact.whatsapp && this.order.workshop.organizer.contact.messenger)
        return "grid-cols-3";
      else if (this.order.workshop.organizer.contact.whatsapp || this.order.workshop.organizer.contact.messenger)
        return "grid-cols-2";
      else
        return "grid-cols-1";
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