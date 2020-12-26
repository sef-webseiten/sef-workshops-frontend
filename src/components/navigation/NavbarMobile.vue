<template>
  <transition
      enter-active-class="animate__animated animate__faster animate__slideInLeft"
      leave-active-class="animate__animated animate__faster animate__slideOutLeft"
  >
    <div class="fixed top-0 left-0 z-30 w-screen h-screen" @click="$emit('close')">
      <div class="w-3/4 h-full shadow-2xl bg-white" @click.stop>

        <!-- orange section with username -->
        <div class="bg-primary w-full h-29 p-6 pt-16 text-xl">
          Hi{{ user ? `, ${user.displayName}` : "" }}!
        </div>

        <!-- authentication and menu items -->
        <div class="p-6">

          <AuthContent v-if="!user"/>
          <div v-if="!user" class="hr my-2"/>
          <AccountContent/>
          <div class="hr my-2"/>
          <FooterContent/>

        </div>

      </div>
    </div>
  </transition>
</template>
<script>
import AuthContent from "./AuthContent";
import AccountContent from "./AccountContent";
import FooterContent from "./FooterContent";

export default {
  components: { FooterContent, AccountContent, AuthContent },
  computed: {
    user() {
      return this.$store.state.authentication.currentUser;
    }
  }
}
</script>
<style lang="scss">
@import "src/assets/css/main";

.h-29 {
  height: 7.25rem;
}
</style>