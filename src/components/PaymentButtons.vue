<template>
  <div class="fixed bottom-0 right-0 w-screen md:w-1/2 xl:w-1/3 select-none z-30">
    <transition
        enter-active-class="animate__animated animate__slideInUp"
        leave-active-class="animate__animated animate__slideOutDown"
    >
      <div v-if="visible"
           class="relative bg-white rounded-t p-6 md:mx-6 shadow-2xl">

        <div class="group absolute right-0 top-0 -mt-14 p-6 pb-2" @click="resetPaymentButton">
          <fa :icon="['fas', 'chevron-down']" class="group-hover:bounce"/>
        </div>

        <!-- price -->
        <div class="between mb-4">
          <p>Gesamtbetrag </p>
          <p class="font-bold text-right text-lg">{{ event.price }} EUR</p>
        </div>

        <!-- workshop name -->
        <div class="between mb-4">
          <p>Kurs</p>
          <p class="font-bold text-right">{{ workshop.title }}</p>
        </div>

        <!-- organizer name -->
        <div class="between mb-4">
          <p>Kursgeber</p>
          <p class="text-right">{{ workshop.organizer.fullName }}</p>
        </div>

        <!-- date -->
        <div class="between-start mb-4">
          <p>Wann?</p>
          <p><span v-for="(date, index) in event.dates" :key="index" class="block text-right">{{ date.timeString }}</span></p>
        </div>

        <p v-if="!firebaseUser" class="text-primary mb-4 text-center" @click="$root.$emit('openAuthPopup'); scrollTo('header'); visible = false;">
          Damit du den Kurs buchen kannst, musst du dich
          zuerst anmelden. Klicke dafür hier.
        </p>

        <div class="text-sm text-center mb-4">
          Es gelten unsere <g-link target="_blank" title="AGB" to="/agb" class="text-primary">allgemeinen Geschäftsbedingungen</g-link>
          und unsere
          <g-link target="_blank" title="Datenschutzerklärung" to="/privacy" class="text-primary">Datenschutzerklärung</g-link>.
        </div>

        <!-- next button -->
        <button
            v-if="[1,2,4].includes(step)"
            :disabled="[2,4].includes(step) || !firebaseUser"
            class="w-full bg-primary p-2 font-bold text-white active:bg-light disabled:bg-gray-400 disabled:cursor-default rounded-sm"
            @click="step++">
          <span v-show="step === 1">Jetzt Kaufen</span>
          <Spinner v-show="[2,4].includes(step)" class="mx-auto"/>
        </button>

        <!-- paypal buttons -->
        <div v-show="step === 3" id="paypal-button-container"></div>

      </div>
    </transition>
  </div>
</template>
<script>
import Default from "../layouts/Default";
import Spinner from "./gui-elements/Spinner";
import { getAffiliateCode } from "../plugins/affiliate";
import { authenticationStoreComputers } from "../stores/authentication";
import { scrollTo } from "../plugins/scroll-to";

export default {
  components: { Spinner, Default },
  data() {
    return {
      visible: false,
      step: 1, // 1 if showing selection; 2 if waiting for details creation; 3 when buttons are shown; 4 waiting for capture
      workshop: null,
      event: null
    }
  },
  mounted() {
    // wait for openCheckoutProcess event
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

      let paypalScript = document.createElement('script');
      paypalScript.onload = this.createOrder;
      paypalScript.src = this.paypalUrl;
      document.body.appendChild(paypalScript);
    }
  },
  methods: {
    scrollTo,
    resetPaymentButton() {
      this.visible = false;
      this.step = 1;
      this.workshop = false;
      this.event = false;
      document.querySelector("#paypal-button-container").innerHTML = "";
    },
    createOrder() {
      let mutation = `
            mutation createOrder ($workshopID: ObjectId!, $eventID: ObjectId!, $participants: Int!, $affiliate: String) {
              createOrder (workshopID: $workshopID, eventID: $eventID, participants: $participants, affiliate: $affiliate)
            }`;

      this.$backend.request(
          mutation, {
            participants: 1,
            workshopID: this.workshop._id,
            eventID: this.event._id,
            affiliate: getAffiliateCode()
          }
      ).then(({ createOrder: orderNumber }) => this.setupPaypalButtons(orderNumber));
    },
    setupPaypalButtons(orderID) {

      this.step = 3;
      plausible('order-created');

      paypal.Buttons({

        style: {
          color: "black"
        },

        locale: 'de_DE',

        createOrder: () => orderID,

        onApprove: (data, actions) => {
          this.step = 4;
          plausible('payment-success');
          return actions.order.capture().then(() => {
            this.$root.$emit("payment-successful");
          });
        },

        onError: error => {
          alert("Error")
          console.error(error)
        },

        onCancel: () => {
          alert("Cancel")
        }

      }).render("#paypal-button-container");
    }
  },
  computed: {
    paypalUrl() {
      return `https://www.paypal.com/sdk/js?client-id=${process.env.GRIDSOME_PAYPAL_CLIENT_ID}&currency=EUR&disable-funding=giropay,card,sofort` //sepa,
    },
    ...authenticationStoreComputers
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

@variants group-hover {
  .bounce {
    animation: bounce 1s infinite;

    @keyframes bounce {
      0%, 100% {
        transform: translateY(-25%);
        animationTimingFunction: cubic-bezier(0.8, 0, 1, 1);
      }
      50% {
        transform: translateY(0);
        animationTimingFunction: cubic-bezier(0, 0, 0.2, 1);
      }
    }
  }
}
</style>