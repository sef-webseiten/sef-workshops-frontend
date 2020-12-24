<template>
  <div class="text-black">
    <g-link class="link" to="/orders">Bestellungen</g-link>
    <button class="link" @click="signOut">Ausloggen</button>
    <button class="link">Kontakt aufnehmen</button>
  </div>
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
      import("../../firebase-client").then(({ auth }) => auth.signOut());
    },
  },
};
</script>
<style scoped lang="scss">
@import "src/assets/css/main";

.link {
  @apply m-0 p-1 block transition-all duration-200 ease-in-out w-full text-left rounded-sm;
}

.link:focus {
  @apply outline-none;
}

.link:hover {
  @apply bg-gray-100;
}
</style>