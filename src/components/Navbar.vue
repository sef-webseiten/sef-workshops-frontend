<template>
  <nav>
    <g-link class="nav-element" to="/">Startseite</g-link>
    <g-link class="nav-element" to="/workshopler/">Workshop'ler werden</g-link>

    <!-- Auth section -->
    <a class="nav-element" v-if="$store.state.currentUser" href="/logout" title="Logout" @click.prevent="signOut">Angemeldet als: {{$store.state.currentUser.displayName || "Gast"}}</a>
    <g-link class="nav-element" to="/auth" v-else>Anmelden</g-link>

  </nav>
</template>
<script>

import {auth} from "../firebase-client";

export default {
  methods: {
    signOut() {
      auth.signOut()
    }
  }
}
</script>