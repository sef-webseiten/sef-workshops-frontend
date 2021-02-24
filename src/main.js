import DefaultLayout from '~/layouts/Default.vue';
import { store } from "./stores";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { setupFontAwesome } from "./plugins/font-awesome";
import { client, loadWorkshops } from "./plugins/graphql/graphql-client";
import { initAffiliate } from "./plugins/affiliate";
import Popup from "./components/gui-elements/Popup";

require("typeface-poppins");
require("typeface-dancing-script");

setupFontAwesome();

function loadFrontendStuff({ router, store }) {
    store.commit("setRouter", router);
    loadWorkshops(store);
}

export default function (Vue, { router, isClient, appOptions }) {
    Vue.component('Layout', DefaultLayout);
    Vue.component('fa', FontAwesomeIcon);
    Vue.component('Popup', Popup);

    initAffiliate(router);

    Vue.prototype.$backend = client;

    appOptions.store = store;

    if (isClient)
        loadFrontendStuff({ store, router });
}