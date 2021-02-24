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

    <p v-if="!user.organizer" class="mt-4">
      Du bist kein angemeldeter Kursleiter.
      <span class="text-primary" v-if="!allFieldsFilled">
        Fülle alle Felder aus, um dich als Kursleiter zu registrieren.
      </span>
      <button v-if="allFieldsFilled" class="text-primary" @click.prevent="$root.$emit('organizerPopup')">Klicke hier zum aktivieren.</button>
    </p>
    <p v-else class="mt-4">
      Du bist bei uns als Kursleiter angemeldet.
      <span v-if="JSON.stringify(user) !== JSON.stringify($store.state.authentication.user)" class="text-primary">
        Du musst nur noch speichern.
      </span>
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
  computed: {
    allFieldsFilled() {
      return this.user.firstName && this.user.lastName && this.user.occupation && this.user.birthday;
    }
  },
  methods: {
    async save() {
      this.saving = true;
      await updateUserData(this.user, this.$store);
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