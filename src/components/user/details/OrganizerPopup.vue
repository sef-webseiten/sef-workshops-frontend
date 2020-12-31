<template>
  <Popup v-if="visible" @close="visible = false">
    <Heading2 class="mb-6">Du möchtest selber Kurse geben? Wir unterstützen dich dabei!</Heading2>
    <p class="mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores consectetur cum
      dolores earum error esse exercitationem illum libero molestias nihil nulla omnis placeat quidem ratione sint,
      tempora tenetur vero.</p>
    <p class="mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores consectetur cum
      dolores earum error esse exercitationem illum libero molestias nihil nulla omnis placeat quidem ratione sint,
      tempora tenetur vero.</p>
    <button-template @click="$emit('organizer')">Anmelden</button-template>
  </Popup>
</template>
<script>
import Heading2 from "../../gui-elements/Heading2";
import ButtonTemplate from "../../gui-elements/ButtonTemplate";
import { getParameters } from "../../../plugins/parameter";

export default {
  components: { ButtonTemplate, Heading2 },
  data() {
    return {
      visible: getParameters().hasOwnProperty("organizer")
    }
  },
  mounted() {
    const self = this;
    this.$root.$on("organizerPopup", () => {
      self.visible = true;
      console.log(self.visible)

    });
  }
}
</script>