const state = {
    tasks: [],
    isTask: false
}

const mutations = {
    updateTasks(state, payload) {
        state.tasks.push(payload)
    },
    
    changeIsTask(state) {
        state.isTask = !state.isTask
    }
}

export default {
    state,
    mutations
}