<template>
  <Popup v-if="visible" @close="visible = false">
    <form netlify name="general" @submit.prevent="submit">

      <Heading2>Kontaktieren Sie uns</Heading2>

      <!-- visible form fields -->
      <InputTemplate v-model="form.subject" label="Betreff" required/>
      <InputTemplate v-model="form.content" label="Inhalt" type="textarea" required/>

      <p class="mt-4">Wir kontaktieren dich zu deiner Anfrage unter <span
          class="text-primary">{{ firebaseUser.email }}</span>.</p>

      <!-- button -->
      <button-template class="mt-4">Abschicken</button-template>
    </form>
  </Popup>
</template>
<script>
import InputTemplate from "./gui-elements/InputTemplate";
import Heading2 from "./gui-elements/Heading2";
import { authenticationStoreComputers } from "../stores/authentication";
import ButtonTemplate from "./gui-elements/ButtonTemplate";

export default {
  components: { ButtonTemplate, Heading2, InputTemplate },
  data() {
    return {
      visible: false,
      form: {
        subject: "",
        content: "",
      }
    }
  },
  mounted() {
    const self = this;
    this.$root.$on('openContactForm', ({ subject, content }) => {
      self.visible = true
      self.form.subject = subject;
      self.form.content = content;
    });
  },
  methods: {
    submit() {
      function encode(data) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
      }

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "general",
          ...this.form,
          email: this.firebaseUser.email,
          userid: this.user._id
        })
      })//.then(() => ).catch(error => alert(error))
    }
  },
  computed: {
    ...authenticationStoreComputers
  }
}
</script>