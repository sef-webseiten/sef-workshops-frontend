import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faCalendarDay,
    faFire,
    faClock,
    faMapMarkerAlt,
    faMinus,
    faEllipsisH,
    faPlus, faStar,
    faTags,
    faUserFriends,
    faSearch,
    faFilter,
    faChevronDown
} from "@fortawesome/free-solid-svg-icons";

export function setupFontAwesome() {
    config.autoAddCss = false;
    library.add(faPlus, faMinus, faEllipsisH, faFire, faUserFriends, faFilter, faSearch, faCalendarDay, faTags, faClock, faMapMarkerAlt, faAngleDoubleRight, faAngleDoubleLeft, faStar, faChevronDown);
}
