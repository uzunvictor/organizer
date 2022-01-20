const state = {
    chosenDate: null,

}

const mutations = {
    updateChosenDate(state, payload) {
        state.chosenDate = payload;
    },
}

const actions = {}


export default {
    state,
    mutations,
    actions
}