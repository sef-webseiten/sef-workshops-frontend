<template>
  <nav class="select-none">
    <g-link class="nav-element" v-if="user" to="/orders">Bestellungen</g-link>

    <!-- Auth section -->
    <span class="relative">
      <button
          class="nav-element"
          v-if="user"
          @click="signOut"
      >Angemeldet als: {{ user.displayName || "Gast" }}</button
      >
      <button class="nav-element" @click.prevent="loginVisible = !loginVisible"
              v-else>Anmelden</button>

      <AuthPopup v-show="loginVisible"/>
    </span>
  </nav>
</template>
<script>
import AuthPopup from "./AuthPopup"

export default {
  components: { AuthPopup },
  comments: {
    AuthPopup
  },
  data() {
    return {
      loginVisible: false
    }
  },
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
  @apply py-2 px-4 inline-block border-b-2 border-light transition-all duration-200 cursor-pointer;
}
</style>