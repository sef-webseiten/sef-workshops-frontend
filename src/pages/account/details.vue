<template>
  <Layout>
    <Heading>Benutzerkonto bearbeiten</Heading>

    <!-- first name -->
    <label v-if="user" class="mt-6">
      <input v-model="user.firstName">
    </label>

  </Layout>
</template>
<script>
import Heading from "../../components/gui-elements/Heading";
import { authenticationStoreComputers } from "../../stores/authentification";

export default {
  components: { Heading },
  computed: {
    ...authenticationStoreComputers
  },
}
</script>