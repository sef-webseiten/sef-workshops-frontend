<template>
  <div>
    <heading2 class="text-center mb-6">
      Dich interessiert der Fortschritt bei of.courz? Melde dich bei unserem Newsletter an
    </heading2>
    <form class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6" @submit.prevent="submit">

      <!-- left side -->
      <div>
        <input-template label="Vorname" required v-model="form.firstName"/>
        <input-template label="E-Mail-Adresse" required v-model="form.mail"/>
        <input-template label="Ich akzeptiere die Datenschutzerklärung" required type="checkbox"/>
        <g-link class="text-sm text-primary" to="/privacy">Klicke hier um die Datenschutzerklärung einzusehen.</g-link>

        <!-- button with loading indicator -->
        <button-template class="mt-4" :disabled="state === 1 || state === 2">
          <span v-if="state === 0">Abschicken</span>
          <Spinner v-else-if="state === 1" class="mx-auto"/>
          <span v-else-if="state === 2">Erfolgreich abgeschickt</span>
          <span v-else-if="state === 3">Erneut versuchen</span>
        </button-template>

      </div>

      <!-- explanation text -->
      <div>
        <p class="mt-6">
          Wenn du wissen möchtest, was es für Neuerungen oder Angebote bei of.courz gibt, melde dich doch bei unserem
          Newsletter an. Du brauchst keine Sorgen zu haben - wir werden dir nicht unnötig häufig E-Mails schicken.
        </p>
        <p class="mt-4">
          Du kannst dich natürlich jederzeit von dem Newsletter abmelden. Dazu kannst du uns kontaktieren oder
          einfach in einer der Mails den Link öffnen.
        </p>
      </div>

    </form>
  </div>
</template>
<script>
import Heading2 from "../gui-elements/Heading2";
import InputTemplate from "../gui-elements/InputTemplate";
import ButtonTemplate from "../gui-elements/ButtonTemplate";
import Spinner from "../gui-elements/Spinner";

export default {
  data() {
    return {
      state: 0, // 0 = waiting, 1 = saving, 2 = done, 3 = error,
      form: {
        firstName: "",
        mail: ""
      }
    }
  },
  methods: {
    submit() {
      this.state = 1;

      const self = this;

      fetch(process.env.GRIDSOME_BACKEND_NEWSLETTER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: this.form })
      })
          .then(() => self.state = 2)
          .catch(() => self.state = 3);

    }
  },
  components: { ButtonTemplate, Heading2, InputTemplate, Spinner }
}
</script>