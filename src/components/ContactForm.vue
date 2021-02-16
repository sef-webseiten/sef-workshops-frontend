<template>
  <Popup v-show="visible" @close="visible = false">
    <form name="general" @submit.prevent="submit">

      <h2 class="h2">Kontaktiere uns</h2>

      <!-- visible form fields -->
      <InputTemplate v-show="notLoggedIn" v-model="form.name" label="Name" required/>
      <InputTemplate v-show="notLoggedIn" v-model="form.email" label="E-Mail" required/>
      <InputTemplate v-model="form.subject" label="Betreff" required/>
      <InputTemplate v-model="form.content" label="Inhalt" type="textarea" required/>

      <p class="mt-4">Wir kontaktieren dich zu deiner Anfrage unter <span
          class="text-primary">{{ form.email }}</span>.</p>

      <!-- button -->
      <button class="primary-button w-full mt-4" :disabled="saving">
        <span v-if="!saving">Abschicken</span>
        <Spinner v-else class="mx-auto"/>
      </button>

      <p v-if="error" class="mt-4 text-center font-bold">Es ist ein Fehler entstanden, bitte probier es nochmal. </p>
    </form>
  </Popup>
</template>
<script>
import InputTemplate from "./gui-elements/InputTemplate";
import { authenticationStoreComputers } from "../stores/authentication";
import Spinner from "./gui-elements/Spinner";

export default {
  components: { InputTemplate, Spinner },
  data() {
    return {
      visible: false,
      saving: false,
      error: false,
      notLoggedIn: true,
      form: {
        subject: "",
        content: "",
        email: "",
        name: ""
      }
    }
  },
  mounted() {
    const self = this;
    this.$root.$on('openContactForm', data => {
      self.notLoggedIn = !this.firebaseUser;
      self.visible = true;
      self.form.email = this.firebaseUser?.email;
      self.form.name = this.username;

      if (!data)
        return;

      self.form.subject = data.subject;
      self.form.content = data.content;
    });
  },
  methods: {
    close() {
      self.form = {
        subject: "",
        content: "",
        email: ""
      };
      self.visible = false;
      self.error = false;
      self.saving = false;
    },
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
            email: this.firebaseUser?.email,
            userid: this.user?._id
          })
        });

        if(!data.ok)
          throw new Error();

        this.close();
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