<template>
  <div class="fixed bottom-0 right-0 w-full md:w-1/2 lg:w-1/3 select-none z-30">
    <div v-if="visible"
         class="relative bg-white rounded-t p-6 md:mx-6 shadow-2xl animate__animated animate__slideInUp">

      <div class="between mb-4">
        <p>Teilnehmer</p>
        <div>

          <!-- minus icon -->
          <div v-show="participants > 1" class="p-1 inline-block" @click="participants--" v-if="step === 1">
            <fa :icon="['fas', 'minus']"/>
          </div>

          <!-- number -->
          <span class="mx-2 font-medium text-lg">
            {{ participants }}
          </span>

          <!-- plus icon -->
          <div class="p-1 inline-block" @click="participants++" v-if="step === 1">
            <fa :icon="['fas', 'plus']"/>
          </div>

        </div>
      </div>

      <!-- price -->
      <div class="between mb-4">
        <p>Gesammtbetrag </p>
        <p class="font-bold text-lg">{{ event.price * participants }} EUR</p>
      </div>

      <!-- workshop name -->
      <div class="between mb-4">
        <p>Workshop</p>
        <p class="font-bold">{{ workshop.title }}</p>
      </div>

      <!-- date -->
      <div class="between-start mb-4">
        <p>Wann?</p>
        <p><span v-for="(date, index) in event.dates" :key="index" class="block">{{ date.timeString }}</span></p>
      </div>

      <!-- next button -->
      <button class="w-full bg-red-500 p-2 font-bold text-white active:bg-red-400 disabled:bg-gray-400 disabled:cursor-default rounded-sm"
              @click="step++" v-if="[1,2].includes(step)" :disabled="step === 2">
        <span v-show="step === 1">Weiter</span>
        <Spinner v-show="step === 2" class="mx-auto"/>
      </button>

      <!-- paypal buttons -->
      <div id="paypal-button-container" v-show="step === 3"></div>

      <div class="text-blue-800 text-center mt-2">
        <g-link target="_blank" title="AGB" to="/agb">AGB</g-link>
        ·
        <g-link target="_blank" title="Datenschutzerklärung" to="/datenschutzerklaerung">Datenschutzerklärung</g-link>
        ·
        <a class="cursor-pointer" @click="resetPaymentButton">Schließen</a>
      </div>

    </div>
  </div>
</template>
<script>
import Default from "../layouts/Default";
import gql from "graphql-tag";
import Spinner from "./Spinner";

export default {
  components: { Spinner, Default },
  data() {
    return {
      visible: false,
      step: 1, // 1 if showing selection; 2 if waiting for order creation; 3 when buttons are shown
      participants: 1,
      workshop: null,
      event: null
    }
  },
  mounted() {
    // ToDo: implement with idle callback

    this.$root.$on("openCheckoutProcess", (options) => {
      this.visible = true;
      this.workshop = options.workshop;
      this.event = options.event;
    });
  },
  watch: {
    step() {
      if (this.step !== 2)
        return;

      let paypaylScript = document.createElement('script')
      paypaylScript.onload = this.createOrder
      paypaylScript.src = this.paypalUrl
      document.body.appendChild(paypaylScript)
    }
  },
  methods: {
    resetPaymentButton() {
      this.visible = false;
      this.step = 1;
      this.workshop = false;
      this.event = false;
      document.querySelector("#paypal-button-container").innerHTML = "";
    },
    createOrder() {
      let mutation = gql`
            mutation createOrder ($workshopID: String!, $eventID: String!, $participants: Int!, $affiliate: String) {
              createOrder (workshopID: $workshopID, eventID: $eventID, participants: $participants, affiliate: $affiliate)
            }`;

      this.$apollo.mutate({
        mutation, variables: {
          participants: this.participants,
          workshopID: this.workshop._id,
          eventID: this.event._id,
          affiliate: document.cookie.split(";").filter(cookie => cookie.match(/a=.*/))[0].replace("a=", "")
        }
      }).then((data) => this.setupPaypalButtons(data.data.createOrder));
    },
    setupPaypalButtons(orderID) {

      this.step = 3;

      paypal.Buttons({

        style: {
          color: "black"
        },

        locale: 'de_DE',

        createOrder: () => orderID,

        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert("Transaction completed by " + details.payer.name.given_name);
          });
        },

        onError: error => {
          alert("Error")
          console.error(error)
        },

        onCancel: (data) => {
          alert("Cancel")
        }

      }).render("#paypal-button-container");
    }
  },
  computed: {
    paypalUrl() {
      return `https://www.paypal.com/sdk/js?client-id=${process.env.GRIDSOME_PAYPAL_CLIENT_ID}&currency=EUR&disable-funding=giropay,card,sofort` //sepa,
    }
  }
}
</script>
<style lang="scss" scoped>
.between {
  @apply flex flex-row justify-between items-center;
}

.between-start {
  @apply flex flex-row justify-between items-start;
}
</style>