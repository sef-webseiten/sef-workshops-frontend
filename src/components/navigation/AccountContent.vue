<template>
  <div class="text-black">
    <g-link class="link-no-break" to="/">Startseite</g-link>
    <g-link v-show="firebaseUser" class="link-no-break" to="/account/orders/">Buchungen</g-link>
    <g-link v-show="firebaseUser" class="link-no-break" to="/account/details/">Mein Konto</g-link>
    <button v-show="firebaseUser" class="link-no-break" @click="signOut">Ausloggen</button>
    <button class="link-no-break" @click="$root.$emit('openContactForm')">Support kontaktieren</button>
  </div>
</template>
<script>
import { authenticationStoreComputers } from "../../stores/authentication";

export default {
  computed: {
    ...authenticationStoreComputers
  },
  methods: {
    signOut() {
      import("../../plugins/firebase/firebase-client").then(({ auth }) => auth.signOut());
    },
  },
};
</script>