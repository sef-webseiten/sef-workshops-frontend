<template>
  <Layout>
    <Heading class="mb-10">Benutzerkonto bearbeiten</Heading>

    <DetailsForm v-if="user"/>
    <Spinner v-else :color="primary" class="mx-auto"/>
  </Layout>
</template>
<script>
import Heading from "../../components/gui-elements/Heading";
import DetailsForm from "../../components/user/details/DetailsForm";
import { authenticationStoreComputers } from "../../stores/authentication";
import Spinner from "../../components/gui-elements/Spinner";
import tailwindConfig from "../../../tailwind.config";

export default {
  components: { Spinner, DetailsForm, Heading },
  data() {
    return { primary: tailwindConfig.customColors.primary }
  },
  computed: {
    ...authenticationStoreComputers
  }
}
</script>