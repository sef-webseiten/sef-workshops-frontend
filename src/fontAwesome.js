import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faCalendarDay,
    faClock,
    faMapMarkerAlt,
    faMinus,
    faPlus, faStar,
    faTags,
    faUserFriends,
    faSearch,
    faFilter
} from "@fortawesome/free-solid-svg-icons";

export function setupFontAwesome() {
    config.autoAddCss = false;
    library.add(faPlus, faMinus, faUserFriends, faFilter, faSearch, faCalendarDay, faTags, faClock, faMapMarkerAlt, faAngleDoubleRight, faAngleDoubleLeft, faStar)
}
