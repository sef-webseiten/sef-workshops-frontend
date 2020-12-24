<template>
  <div>
    <div id="firebaseui-auth-container" lang="de"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    import("firebaseui/dist/firebaseui.css")
    import("../../firebase-ui").then(({ ui, uiConfig }) => {
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