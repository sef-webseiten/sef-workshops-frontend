<template>
  <div>
    <transition
        enter-active-class="animate__animated animate__faster animate__fadeIn"
        leave-active-class="animate__animated animate__faster animate__fadeOut"
    >
      <div v-show="navbarMobileVisible"
           class="fixed top-0 left-0 z-30 w-screen h-screen w-full h-full w-full h-full bg-black bg-opacity-70" @click="$emit('close')"/>
    </transition>

    <transition
        enter-active-class="animate__animated animate__faster animate__slideInLeft"
        leave-active-class="animate__animated animate__faster animate__slideOutLeft"
    >
      <div
          v-show="navbarMobileVisible"
          class="w-66vw h-screen fixed top-0 left-0 shadow-2xl z-40 bg-white">

        <!-- orange section with username -->
        <div class="bg-primary w-full h-29 p-6 pt-16 text-xl">
          Hi{{ username ? ` ${username}` : "" }}!
        </div>

        <!-- authentication and menu items -->
        <div class="p-6">

          <AuthContent v-if="!firebaseUser"/>
          <div v-if="!firebaseUser" class="hr my-2"/>
          <AccountContent/>
          <div class="hr my-2"/>
          <FooterContent/>

        </div>

      </div>
    </transition>
  </div>
</template>
<script>
import AuthContent from "./AuthContent";
import AccountContent from "./AccountContent";
import FooterContent from "./FooterContent";
import { authenticationStoreComputers } from "../../stores/authentication";

export default {
  components: { FooterContent, AccountContent, AuthContent },
  props: ["navbarMobileVisible"],
  computed: {
    ...authenticationStoreComputers
  },
}
</script>
<style lang="scss">
@import "src/assets/css/main";

.h-29 {
  height: 7.25rem;
}

.w-66vw {
  width: 75vw;
}
</style>