export const searchStore = {
    state: {
        searchTerm: ""
    },
    mutations: {
        setSearchTerm(state, searchTerm) {
            state.searchTerm = searchTerm;

            if(searchTerm)
                this.state.router.push({ query: { s: searchTerm } })
            else
                if(this.state.router.currentRoute.fullPath !== "/kurse") this.state.router.push("/kurse");
        }
    }
}