import DefaultLayout from '~/layouts/Default.vue';
import Vuex from 'vuex';
import { store } from "./stores";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { setupFontAwesome } from "./fontAwesome";
import { client } from "./graphql-client";
import { initAffiliate } from "./plugins/affiliate";
import Popup from "./components/gui-elements/Popup";

require("typeface-poppins");

setupFontAwesome();

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.component('Layout', DefaultLayout);
  Vue.component('fa', FontAwesomeIcon);
  Vue.component('Popup', Popup);

  Vue.use(Vuex);

  initAffiliate(router);

  Vue.prototype.$backend = client;

  appOptions.store = new Vuex.Store(store);
}