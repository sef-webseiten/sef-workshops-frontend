<template>
  <Popup v-show="visible" @close="visible = false">
    <form name="general" @submit.prevent="submit">

      <Heading2>Kontaktieren Sie uns</Heading2>

      <!-- visible form fields -->
      <InputTemplate v-model="form.subject" label="Betreff" required/>
      <InputTemplate v-model="form.content" label="Inhalt" type="textarea" required/>

      <p class="mt-4">Wir kontaktieren dich zu deiner Anfrage unter <span
          class="text-primary">{{ form.email }}</span>.</p>

      <!-- button -->
      <button-template class="mt-4" :disabled="saving">
        <span v-if="!saving">Abschicken</span>
        <Spinner v-else class="mx-auto"/>
      </button-template>

      <p v-if="error" class="mt-4 text-center font-bold">Es ist ein Fehler entstanden, bitte probier es nochmal. </p>
    </form>
  </Popup>
</template>
<script>
import InputTemplate from "./gui-elements/InputTemplate";
import Heading2 from "./gui-elements/Heading2";
import { authenticationStoreComputers } from "../stores/authentication";
import ButtonTemplate from "./gui-elements/ButtonTemplate";
import Spinner from "./gui-elements/Spinner";

export default {
  components: { ButtonTemplate, Heading2, InputTemplate, Spinner },
  data() {
    return {
      visible: false,
      saving: false,
      error: false,
      form: {
        subject: "",
        content: "",
        email: ""
      }
    }
  },
  mounted() {
    const self = this;
    this.$root.$on('openContactForm', data => {
      self.visible = true;
      self.form.email = this.firebaseUser.email;

      if (!data)
        return;

      self.form.subject = data.subject;
      self.form.content = data.content;
    });
  },
  methods: {
    async submit() {
      function encode(data) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
      }

      const self = this;

      self.saving = true;
      self.error = false;

      try {
        const data = await fetch("/forms/general", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": "general",
            ...this.form,
            email: this.firebaseUser.email,
            userid: this.user._id
          })
        });

        if(!data.ok)
          throw new Error();

        self.saving = false;
      } catch (e) {
        self.saving = false;
        self.error = true;
      }
    }
  },
  computed: {
    ...authenticationStoreComputers
  }
}
</script>