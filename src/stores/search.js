import abi from "../pages/abi";

export const searchStore = {
    state: {
        searchTerm: "",
        abiDate: {
            o1: false,
            o2: false,
            d: false
        }
    },
    mutations: {
        setSearchTerm(state, searchTerm) {
            state.searchTerm = searchTerm;

            if(searchTerm)
                this.state.router.push({ query: { s: searchTerm } })
            else
                if(this.state.router.currentRoute.fullPath !== "/kurse") this.state.router.push("/kurse");
        },
        setO1: (state) => state.abiDate.o1 = !state.abiDate.o1,
        setO2: (state) => state.abiDate.o2 = !state.abiDate.o2,
        setD: (state) => state.abiDate.d = !state.abiDate.d,
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

            if (found && Object.values(this.$store.state.search.abiDate).some(e => e)) {
                let abiFound = false;

                if (this.$store.state.search.abiDate.o1)
                    abiFound = abiFound || workshop.events.some(e => e.abiDate === "o1")
                if (this.$store.state.search.abiDate.o2)
                    abiFound = abiFound || workshop.events.some(e => e.abiDate === "o2")
                if (this.$store.state.search.abiDate.d)
                    abiFound = abiFound || workshop.events.some(e => e.abiDate === "d")

                found &= abiFound
            }

            return found;
        })
    }
}