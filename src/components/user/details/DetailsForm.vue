<template>
  <form @submit.prevent="save">

    <!-- first name -->
    <InputTemplate v-model="user.firstName" label="Vorname" required/>

    <!-- last name -->
    <InputTemplate v-model="user.lastName" label="Nachname" required/>

    <!-- occupation -->
    <InputTemplate v-model="user.occupation" label="Beschäftigung" required/>

    <!-- birthday -->
    <InputTemplate v-model="user.birthday" label="Geburtstag" required type="date"/>

    <p v-if="!user.organizer" class="mt-4">Du bist kein angemeldeter Kursleiter.
      <button class="text-primary" @click="$root.$emit('organizerPopup')">Klicke hier zum aktivieren.</button>
    </p>
    <p v-else class="mt-4">
      Du bist bei uns als Kursleiter angemeldet.
    </p>

    <OrganizerPopup v-if="user && !user.organizer" @organizer="user.organizer = true"/>

    <!-- disable button if currently saving or no changes have been done -->
    <button :disabled="saving || JSON.stringify(user) === JSON.stringify($store.state.authentication.user)"
            class="primary-button w-full mt-4 h-fit">
      <span v-if="!saving">Speichern</span>
      <Spinner v-else class="mx-auto"/>
    </button>

  </form>
</template>
<script>
import InputTemplate from "../../gui-elements/InputTemplate";
import OrganizerPopup from "./OrganizerPopup";
import { updateUserData } from "../../../plugins/graphql/graphql-client";
import Spinner from "../../gui-elements/Spinner";

export default {
  components: { Spinner, InputTemplate, OrganizerPopup },
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
<style lang="scss" scoped>
.line-margin {
  @apply mb-10;
}
</style>