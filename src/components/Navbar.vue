<template>
  <nav>
    <g-link class="nav-element" to="/">Startseite</g-link>
    <g-link class="nav-element" to="/workshopler/">Workshop'ler werden</g-link>

    <!-- Auth section -->
    <a
      class="nav-element"
      v-if="$store.state.currentUser"
      href="/logout"
      title="Logout"
      @click.prevent="signOut"
      >Angemeldet als: {{ $store.state.currentUser.displayName || "Gast" }}</a
    >
    <g-link class="nav-element" to="/auth" v-else>Anmelden</g-link>
  </nav>
</template>
<script>
export default {
  methods: {
    signOut() {
      import("../firebase-client").then(({ auth }) => auth.signOut());
    },
  },
};
</script>
<style scoped>
.nav-element:hover {
  @apply border-white;
}

.nav-element {
  @apply py-2 px-4 inline-block border-b-2 border-red-500 transition-all duration-200;
}
</style>