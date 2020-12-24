<template>
  <nav class="select-none">
    <g-link class="nav-element" v-if="user" to="/orders">Bestellungen</g-link>

    <!-- Auth section -->
    <a
      class="nav-element"
      v-if="user"
      href="/logout"
      title="Logout"
      @click.prevent="signOut"
      >Angemeldet als: {{ user.displayName || "Gast" }}</a
    >
    <g-link class="nav-element" to="/auth" v-else>Anmelden</g-link>
  </nav>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.authentication.currentUser;
    }
  },
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
  @apply py-2 px-4 inline-block border-b-2 border-light transition-all duration-200;
}
</style>