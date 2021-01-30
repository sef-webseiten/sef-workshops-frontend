export const workshopsStore = {
    state: {
        workshops: null
    },
    mutations: {
        setWorkshops(state, workshops) {
            state.workshops = workshops;
        }
    }
}