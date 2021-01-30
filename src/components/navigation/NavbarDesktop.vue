<template>
  <nav class="select-none">

    <!-- Auth section -->
    <span class="relative">
      <button
          class="nav-element"
          v-if="firebaseUser"
          @click="delayedSet('accountVisible')"
      >Angemeldet als: {{ username }}</button
      >
      <button class="nav-element"
              @click="delayedSet('loginVisible')"
              v-else>Anmelden</button>

      <!-- Navbar popup content -->
      <NavbarPopup v-show="popup && (loginContent || accountContent)">

        <AuthContent v-show="loginContent" v-if="renderAuth" desktop/>
        <AccountContent v-show="accountContent"/>

      </NavbarPopup>

    </span>
  </nav>
</template>
<script>
import AuthContent from "./AuthContent"
import NavbarPopup from "./NavbarPopup";
import AccountContent from "./AccountContent";
import { authenticationStoreComputers } from "../../stores/authentication";

export default {
  components: { AccountContent, NavbarPopup, AuthContent },
  data() {
    return {
      loginVisible: false,
      accountVisible: false,
      popup: false,
      renderAuth: true
    }
  },
  methods: {
    delayedSet(what) {
      const self = this;

      if (self[what]) {
        self.popup = false;
        setTimeout(() => self[what] = false, 500);
      } else {
        self.popup = true;
        self[what] = true;
      }
    }
  },
  mounted() {
    const self = this;
    this.$root.$on("openAuthPopup", () => self.delayedSet("loginVisible"));
  },
  computed: {
    ...authenticationStoreComputers,
    loginContent() {
      return this.loginVisible && !this.firebaseUser;
    },
    accountContent() {
      return this.accountVisible && this.firebaseUser;
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