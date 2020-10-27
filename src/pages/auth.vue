<template>
  <Layout>
    <div id="firebaseui-auth-container" lang="de"></div>
  </Layout>
</template>
<script>
import {ui, uiConfig} from "../firebase-client";
import "firebaseui/dist/firebaseui.css"

export default {
  mounted() {
    ui.start('#firebaseui-auth-container', uiConfig);
  }
}
</script>
<style lang="scss">
.firebaseui-container {
  @apply rounded;
}
</style>