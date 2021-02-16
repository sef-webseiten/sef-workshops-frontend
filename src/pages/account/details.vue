<template>
  <Layout auth-middleware>
    <h1 class="h1 mb-10">Benutzerkonto bearbeiten</h1>

    <DetailsForm v-if="user"/>
    <Spinner v-else-if="!this.$store.state.initialized" :color="primary" class="mx-auto"/>
    <p v-else>Dein Konto wurde noch nicht korrekt eingerichtet. Komme in ein paar Minuten wieder. </p>
  </Layout>
</template>
<script>
import DetailsForm from "../../components/user/details/DetailsForm";
import { authenticationStoreComputers } from "../../stores/authentication";
import Spinner from "../../components/gui-elements/Spinner";
import tailwindConfig from "../../../tailwind.config";

export default {
  components: { Spinner, DetailsForm },
  data() {
    return { primary: tailwindConfig.customColors.primary }
  },
  metaInfo: {
    title: "Konto bearbeiten",
  },
  computed: {
    ...authenticationStoreComputers
  }
}
</script>