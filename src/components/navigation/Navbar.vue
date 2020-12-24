<template>
  <nav class="select-none">

    <!-- Auth section -->
    <span class="relative">
      <button
          class="nav-element"
          v-if="user"
          @click="accountVisible = !accountVisible"
      >Angemeldet als: {{ user.displayName || "Gast" }}</button
      >
      <button class="nav-element"
              @click.prevent="loginVisible = !loginVisible"
              v-else>Anmelden</button>

      <!-- Navbar popup content -->
      <NavbarPopup v-show="accountContent || loginContent">

        <AuthContent v-show="loginContent"/>
        <AccountContent v-show="accountContent"/>

      </NavbarPopup>

    </span>
  </nav>
</template>
<script>
import AuthContent from "./AuthContent"
import NavbarPopup from "./NavbarPopup";
import AccountContent from "./AccountContent";

export default {
  components: { AccountContent, NavbarPopup, AuthContent },
  data() {
    return {
      loginVisible: false,
      accountVisible: false
    }
  },
  computed: {
    user() {
      return this.$store.state.authentication.currentUser;
    },
    loginContent() {
      return this.loginVisible && !this.user;
    },
    accountContent() {
      return this.accountVisible && this.user;
    }
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