const state = {
    chosenDate: null,

}

const mutations = {
    updateChosenDate(state, payload) {
        state.chosenDate = payload;
    },
}

const actions = {
    start(state) {
        if (!state.interval) {
            state.interval = setInterval(() => this.commit('update'), 1000);
        }
    }
}

export default {
    state,
    mutations,
    actions
}