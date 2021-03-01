<template>
  <div class="font-display" id="navbar">

    <!-- header -->
    <header class="bg-primary p-4 md:p-10 text-white md:flex flex-row justify-between items-center">

      <!-- title and burger menu -->
      <div class="text-xl relative md:text-2xl md:mr-2 text-center md:text-left">
        <BurgerIcon class="absolute left-0 md:hidden" @click="navbarMobileVisible = true"/>
        <g-link to="/">
          <img alt="Logo" class="h-6 md:h-8 mx-auto" src="../assets/img/logo/logo.svg"/>
        </g-link>
      </div>

      <!-- search bar -->
      <Searchbar/>

      <!-- mobile and desktop navbar navbar -->
      <NavbarMobile :navbarMobileVisible="navbarMobileVisible" class="block md:hidden"
                    @close="navbarMobileVisible = false"/>
      <NavbarDesktop class="hidden md:block"/>

    </header>

    <!-- actual page content -->
    <div :class="{'p-6' : !withoutBorder}" class="xl:container">
      <slot/>
    </div>

    <!-- footer on desktop, hidden on mobile -->
    <DesktopFooter class="hidden md:block"/>

    <ContactForm/>

  </div>
</template>
<script>
import NavbarDesktop from "../components/navigation/NavbarDesktop";
import "animate.css/animate.min.css";
import Searchbar from "../components/navigation/Searchbar";
import NavbarMobile from "../components/navigation/NavbarMobile";
import BurgerIcon from "../components/navigation/BurgerIcon";
import DesktopFooter from "../components/navigation/DesktopFooter";
import ContactForm from "../components/ContactForm";

export default {
  components: { ContactForm, DesktopFooter, BurgerIcon, NavbarMobile, Searchbar, NavbarDesktop },
  props: {
    withoutBorder: {
      type: Boolean,
      default: false
    },
    authMiddleware: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      navbarMobileVisible: false
    }
  },
  mounted() {
    this.$store.dispatch("subscribeUserChanges", this.authMiddleware);
    const self = this;
    this.$root.$on("openAuthPopup", () => self.navbarMobileVisible = true);
  }
};
</script>
<static-query>
query {
metadata {
siteName
}
}
</static-query>
<style lang="scss">
@import "src/assets/css/main";

html {
  @apply bg-gray-100 overflow-x-hidden;
}

body {
  @apply bg-gray-50;
}
</style>