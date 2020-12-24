<template>
  <transition
      enter-active-class="animate__animated animate__bounceInRight"
      leave-active-class="animate__animated animate__bounceOutRight"
  >
    <div class="absolute z-30 right-0">
      <div class="z-30 absolute right-0 bg-white w-4 h-4 transform rotate-45 translate-y-1/2 mr-12"></div>
      <div
          class="z-30 w-360px bg-white p-2  shadow-2xl rounded-sm mt-4">
        <div id="firebaseui-auth-container" lang="de"></div>
      </div>
    </div>
  </transition>
</template>
<script>

export default {
  mounted() {
    if (process.isServer) return;

    import("firebaseui/dist/firebaseui.css")
    import("../firebase-ui").then(({ ui, uiConfig }) => {
      ui.start("#firebaseui-auth-container", uiConfig);
    });
  },
};
</script>
<style lang="scss">
.firebaseui-container {
  @apply rounded;
}

.w-360px {
  min-width: 16rem;
  width: 16rem;
  max-width: 100%;
}

.mdl-shadow--2dp {
  box-shadow: unset !important;
}
</style>