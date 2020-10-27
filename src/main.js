// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import Vuex from 'vuex';
import {store} from "./stores";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import {faPlus, faMinus, faUserFriends, faTags, faCalendarDay, faMapMarkerAlt, faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons"
import '@fortawesome/fontawesome-svg-core/styles.css'

require("typeface-poppins");
config.autoAddCss = false;
library.add(faPlus, faMinus, faUserFriends, faCalendarDay, faTags, faMapMarkerAlt, faAngleDoubleRight)

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.component('Layout', DefaultLayout);
  Vue.component('fa', FontAwesomeIcon)

  Vue.use(Vuex);

  appOptions.store = new Vuex.Store(store);
}
