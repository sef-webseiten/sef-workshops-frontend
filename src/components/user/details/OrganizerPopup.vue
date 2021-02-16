<template>
  <Popup v-if="visible" @close="visible = false">
    <h2 class="h2 mb-6">Du möchtest selber Kurse geben? Wir unterstützen dich dabei!</h2>
    <p class="mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores consectetur cum
      dolores earum error esse exercitationem illum libero molestias nihil nulla omnis placeat quidem ratione sint,
      tempora tenetur vero.</p>
    <p class="mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores consectetur cum
      dolores earum error esse exercitationem illum libero molestias nihil nulla omnis placeat quidem ratione sint,
      tempora tenetur vero.</p>
    <button class="primary-button w-full" @click="$emit('organizer')">Anmelden</button>
  </Popup>
</template>
<script>
import { getParameters } from "../../../plugins/parameter";

export default {
  data() {
    return {
      visible: getParameters().hasOwnProperty("organizer")
    }
  },
  mounted() {
    const self = this;
    this.$root.$on("organizerPopup", () => {
      self.visible = true;
    });
  }
}
</script>