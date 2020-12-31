<template>
  <div>

    <!-- first name -->
    <InputTemplate v-model="user.firstName" label="Vorname"/>

    <!-- last name -->
    <InputTemplate v-model="user.lastName" label="Nachname"/>

    <!-- occupation -->
    <InputTemplate v-model="user.occupation" label="Beschäftigung"/>

    <!-- birthday -->
    <InputTemplate v-model="user.birthday" label="Geburtstag" type="date"/>

    <p v-if="!user.organizer" class="mt-4">Du bist kein angemeldeter Kursleiter.
      <button class="text-primary" @click="$root.$emit('organizerPopup')">Klicke hier zum aktivieren.</button>
    </p>
    <p v-else class="mt-4">
      Du bist bei uns als Kursleiter angemeldet.
    </p>

    <OrganizerPopup v-if="user && !user.organizer" @organizer="user.organizer = true"/>

    <!-- disable button if currently saving or no changes have been done -->
    <button-template @click="save" class="mt-4 h-fit" :disabled="saving || JSON.stringify(user) === JSON.stringify($store.state.authentication.user)">
      <span v-if="!saving">Speichern</span>
      <Spinner v-else class="mx-auto"/>
    </button-template>

  </div>
</template>
<script>
import InputTemplate from "../../gui-elements/InputTemplate";
import OrganizerPopup from "./OrganizerPopup";
import ButtonTemplate from "../../gui-elements/ButtonTemplate";
import { updateUserData } from "../../../graphql-client";
import Spinner from "../../gui-elements/Spinner";

export default {
  components: { Spinner, ButtonTemplate, InputTemplate, OrganizerPopup },
  data() {
    return {
      user: { ...this.$store.state.authentication.user },
      saving: false
    }
  },
  methods: {
    async save() {
      this.saving = true;
      await updateUserData(this.user);
      this.$store.commit('setUserDetails', this.user);
      this.saving = false;
    }
  }
}
</script>
<style scoped lang="scss">
.line-margin {
  @apply mb-10;
}
</style>