import abi from "../pages/abi";

export const searchStore = {
    state: {
        searchTerm: "",
        abiDate: "all"
    },
    mutations: {
        setSearchTerm(state, searchTerm) {
            state.searchTerm = searchTerm;

            if(searchTerm)
                this.state.router.push({ query: { s: searchTerm } })
            else
                if(this.state.router.currentRoute.fullPath !== "/kurse") this.state.router.push("/kurse");
        },
        setAbiDate: (state, abiDate) => state.abiDate = abiDate
    }
}

export const searchStoreComputers = {
    abiDate: {
        get() {
            return this.$store.state.search.abiDate;
        },
        set(abiDate) {
            this.$store.commit("setAbiDate", abiDate)
        }
    },
    searchResults() {
        return this.workshops.filter(workshop => {
            if (workshop.categories?.includes("Demo"))
                return false;

            let found = true, keywords = this.$store.state.search.searchTerm?.toLowerCase()?.split(' ') || [];

            for (const keyword of keywords) {
                found &= (workshop.title.toLowerCase()?.includes(keyword) ||
                    workshop.subTitle.toLowerCase()?.includes(keyword) ||
                    workshop.description.toLowerCase()?.includes(keyword));

                if (!found)
                    break;
            }

            if (found && this.$store.state.search.abiDate !== "all") {
                found &= workshop.events.some(e => e.abiDate === this.$store.state.search.abiDate)
            }

            return found;
        })
    }
}