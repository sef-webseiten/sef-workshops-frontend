<template>
  <div class="md:rounded p-6 md:p-10 card animate__animated animate__fadeInUp animate__fast">
    <p class="h2">Teilnahme bestätigt</p>
    <p class="h4 mt-2">{{ daysLeft() }} beginnt dein Kurs bei {{ workshop.organizer.fullName }}. </p>
    <p class="mt-6">
      Alle wichtigen Informationen zum Kurs findest du in der Buchungsbestätigung. Diese erhältst du in Kürze per E-Mail
      an {{ $store.state.authentication.user.email }}.
    </p>

    <p class="mt-6">
      Darin ist auch der genaue Ort enthalten, an dem der Kurs stattfindet. Sollte es sich um einen Online-Kurs handeln,
      sind stattdessen die Einwahlinformationen enthalten.
    </p>

    <p v-if="event.notes" class="mt-6">
      Hier noch eine Notiz von {{ workshop.organizer.fullName }}:
    </p>

    <p v-if="event.notes" class="mt-6">
      {{ event.notes }}
    </p>

    <p class="mt-6">
      Alle Details findest du auch nochmal unter deinen
      <g-link class="text-primary" to="/account/orders/">Buchungen.</g-link>
      Dort findest du auch die Möglichkeit {{ workshop.organizer.fullName }} zu kontaktieren.
    </p>

    <p class="mt-6">
      Falls du Fragen oder Probleme bezüglich des Buchungsprozesses hast, kannst du dich
      <button class="text-primary" @click="$root.$emit('openContactForm')">hier</button>
      auch an unseren Support wenden. Wir kümmern uns persönlich und zuverlässig um dein Anliegen.
    </p>

  </div>
</template>
<script>
export default {
  props: ["workshop", "event"],
  methods: {
    daysLeft() {
      let daysLeft = Math.floor((this.event.dates[0].startTime - Date.now()) / 1000 / 60 / 60 / 24);

      switch (daysLeft) {
        case 0:
          return "Heute";
        case 1:
          return "Morgen"
        case 2:
          return "Übermorgen";
        default:
          return `In ${daysLeft} Tagen`;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.card {
  @apply bg-white w-full;
}
</style>