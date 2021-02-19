<template>
  <form @submit.prevent="submit">

    <!-- left side -->
    <!--div-->
      <SliderInput v-model="form.organizerRating.friendly"/>

      <!-- button with loading indicator -->
      <!--button class="primary-button w-full mt-4" :disabled="state === 1 || state === 2">
        <span v-if="state === 0">Abschicken</span>
        <Spinner v-else-if="state === 1" class="mx-auto"/>
        <span v-else-if="state === 2">Erfolgreich abgeschickt</span>
        <span v-else-if="state === 3">Erneut versuchen</span>
      </button>

    </div-->

  </form>
</template>
<script>
import InputTemplate from "../../../gui-elements/InputTemplate";
import Spinner from "../../../gui-elements/Spinner";
import SliderInput from "../../../gui-elements/SliderInput";

export default {
  props: ["workshop"],
  data() {
    return {
      state: 0, // 0 = waiting, 1 = saving, 2 = done, 3 = error
      form: {
        workshop: this.workshop._id,

        organizerRating: {
          friendly: null,
          reliable: null,
          knowledge: null,
          patience: null,
          rating: { type: Number, required: true },
        },

        workshopRating: {
          recommendable: { type: Boolean, required: true },
          content: { type: Boolean, required: true },
          entertaining: { type: Boolean, required: true },
          rating: { type: Number, required: true }
        },

        text: { type: String },
        improveable: { type: String }

      }
    }
  },
  methods: {
    submit() {
      this.state = 1;

      const self = this;

      // ToDo: update
      fetch(process.env.GRIDSOME_BACKEND_NEWSLETTER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: this.form })
      })
          .then(() => self.state = 2)
          .catch(() => self.state = 3);

    }
  },
  components: { SliderInput, InputTemplate, Spinner }
}
</script>