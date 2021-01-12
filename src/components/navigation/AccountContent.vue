<template>
  <div class="text-black">
    <g-link class="link-no-break" to="/">Startseite</g-link>
    <g-link class="link-no-break" v-show="user" to="/account/orders">Buchungen</g-link>
    <g-link class="link-no-break" v-show="user" to="/account/details">Mein Konto</g-link>
    <button class="link-no-break" v-show="user" @click="signOut">Ausloggen</button>
    <button class="link-no-break" @click="$root.$emit('openContactForm')">Kontakt aufnehmen</button>
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
      import("../../firebase-client").then(({ auth }) => auth.signOut());
    },
  },
};
</script>
<style scoped lang="scss">
@import "src/assets/css/main";
</style>