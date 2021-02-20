<template>
  <div>
    <h2 class="h2 text-center mb-6">
      {{ title }}
    </h2>
    <h3 class="h4 text-center mb-6" v-if="subTitle">
      {{ subTitle }}
    </h3>
    <form class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6" @submit.prevent="submit">

      <!-- left side -->
      <div>
        <input-template label="Vorname" required v-model="form.firstName" :color-name="colorName"/>
        <input-template label="E-Mail-Adresse" required v-model="form.mail" :color-name="colorName"/>
        <input-template label="Ich akzeptiere die Datenschutzerklärung" required type="checkbox"
                        :color-name="colorName"/>
        <g-link class="text-sm" :class="colorName === 'abi' ? 'text-abi' : 'text-primary'" to="/privacy">Klicke hier um
          die Datenschutzerklärung
          einzusehen.
        </g-link>

        <!-- button with loading indicator -->
        <button class="w-full mt-4" :class="`${colorName}-button`" :disabled="state === 1 || state === 2">
          <span v-if="state === 0">Abschicken</span>
          <Spinner v-else-if="state === 1" class="mx-auto"/>
          <span v-else-if="state === 2">Erfolgreich abgeschickt</span>
          <span v-else-if="state === 3">Erneut versuchen</span>
        </button>

      </div>

      <!-- explanation text -->
      <div>
        <slot/>
      </div>

    </form>
  </div>
</template>
<script>
import InputTemplate from "../gui-elements/InputTemplate";
import Spinner from "../gui-elements/Spinner";

export default {
  props: {
    title: String,
    subTitle: String,
    colorName: {
      type: String,
      default: "primary",
    }
  },
  data() {
    return {
      state: 0, // 0 = waiting, 1 = saving, 2 = done, 3 = error
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
  components: { InputTemplate, Spinner }
}
</script>