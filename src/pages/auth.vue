<template>
  <Layout>
    <div id="firebaseui-auth-container" lang="de"></div>
  </Layout>
</template>
<script>
import "firebaseui/dist/firebaseui.css";

export default {
  mounted() {
    if (process.isServer) return;

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
</style>