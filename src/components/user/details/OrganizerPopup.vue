<template>
  <Popup v-if="visible" @close="visible = false">
    <h2 class="h2 mb-6">Starte jetzt durch als Kursleiter! Wir helfen dir dabei.</h2>
    <p class="mb-6">
      Als Kursleiter bei of.courz kannst ganz einfach als Trainer, Coach oder Experte starten, oder als erfahrener
      Experte die vielen Vorteile für deine Live-Kurse für dich nutzen.
    </p>
    <p class="mb-6">
      Wir übernehmen für dich Themen wie Abwicklung, Terminbuchung oder Stornierungen und du profitierst von unserem
      Marketing und dem Traffic auf der Plattform. Außerdem sammelst du auf der Plattform Bewertungen. Ein echter
      Qualitätsnachweis für potenzielle Teilnehmer.
    </p>
    <p class="mb-6">
      Lege jetzt los und erstelle deinen ersten Kurs!
    </p>
    <p class="mb-6">
      Mit der Anmeldung als Kurseleiter akzeptierst du unsere
      <g-link class="text-primary" to="/agb">Allgemeinen Geschäftsbedingungen</g-link>.
    </p>
    <button class="primary-button w-full" @click="$emit('organizer')">Anmelden</button>
  </Popup>
</template>
<script>
import { getParameters } from "../../../plugins/parameter";

export default {
  data() {
    return {
      visible: getParameters().hasOwnProperty("organizer")
    }
  },
  mounted() {
    const self = this;
    this.$root.$on("organizerPopup", () => {
      self.visible = true;
    });
  }
}
</script>