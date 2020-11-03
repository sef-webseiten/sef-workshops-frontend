<template>
  <div class="fixed bottom-0 right-0 w-full md:w-1/2 lg:w-1/3 select-none">
    <div class="relative bg-white rounded-t p-6 md:mx-6 shadow-2xl animate__animated animate__slideInUp" v-show="visible">

      <div class="flex justify-between items-center flex-row mb-4">
        <p>Teilnehmer</p>
        <div>

          <!-- minus icon -->
          <div @click="participants--" v-show="participants > 1" class="p-1 inline-block">
            <fa :icon="['fas', 'minus']" />
          </div>

          <!-- number -->
          <span class="mx-2 font-medium text-lg">
            {{ participants }}
          </span>

          <!-- plus icon -->
          <div @click="participants++" class="p-1 inline-block">
            <fa :icon="['fas', 'plus']" />
          </div>

        </div>
      </div>

      <div class="flex flex-row justify-between items-center mb-4">

        <p>Gesammtbetrag </p>
        <p class="font-bold text-lg">{{10 * participants}} EUR</p>

      </div>

      <div id="paypal-button-container"></div>

      <div class="text-blue-800 text-center mt-2">
        <g-link to="/agb" target="_blank" title="AGB">AGB</g-link> ·
        <g-link to="/datenschutzerklaerung" target="_blank" title="Datenschutzerklärung">Datenschutzerklärung</g-link> ·
        <a @click="visible = false" class="cursor-pointer">Schließen</a>
      </div>

    </div>
  </div>
</template>
<script>
import Default from "../layouts/Default";
export default {
  components: {Default},
  data() {
    return {
      visible: false,
      participants: 1
    }
  },
  mounted() {
    // ToDo: implement with idle callback

    let paypaylScript = document.createElement('script')
    paypaylScript.onload = this.setupPaypalButtons
    paypaylScript.src = this.paypalUrl
    document.body.appendChild(paypaylScript)

    this.$root.$on("openCheckoutProcess", () => this.visible = true );
  },
  methods: {
    setupPaypalButtons() {
      paypal.Buttons({

        style: {
          color: "black"
        },

        locale: 'de_DE',

        createOrder: (data, actions) => {

          return actions.order.create({
            purchase_units: [{
              amount: {
                value: "10.00",
                currency_code: 'EUR'
              },
            }]
          });
        },

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
      return `https://www.paypal.com/sdk/js?client-id=${process.env.GRIDSOME_PAYPAL_CLIENT_ID}&currency=EUR` //sepa,
    }
  }
}
</script>