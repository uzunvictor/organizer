const state = {
    tasks: [],
}

const mutations = {
    updateTasks(state, payload) {
        state.tasks.push(payload)
    }
}

export default {
    state,
    mutations
}