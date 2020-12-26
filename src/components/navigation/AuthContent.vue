<template>
  <div>
    <div ref="firebaseui"></div>
    <p class="text-black p-1" v-if="badInitialized">Seite bitte neuladen, es ist ein Fehler aufgetreten</p>
  </div>
</template>
<script>
import { smallBreakpoint } from "../../plugins/responsive";

export default {
  props: {
    desktop: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      badInitialized: false
    }
  },
  mounted() {
    this.badInitialized = (this.desktop && smallBreakpoint()) || (!this.desktop && !smallBreakpoint());

    if (this.badInitialized)
      return;

    import("firebaseui/dist/firebaseui.css")
    import("../../firebase-ui").then(({ ui, uiConfig }) => {
      ui.start(this.$refs.firebaseui, uiConfig);
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