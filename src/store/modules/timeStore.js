const state = {
    today: null,
    month: null,
    year: null,
    interval: null,
}

const mutations = {  
    update(state) {
        state.date = new Date();
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

// state: {
//     date: null,
//         interval: null,
//   },
// mutations: {
//     start(state) {
//         if (!state.interval) {
//             state.interval = setInterval(() => this.commit('update'), 1000);
//         }
//     },
//     update(state) {
//         state.date = new Date();
//     },
// },