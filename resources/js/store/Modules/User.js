const state = {
    userList:
        [

        ]

}

// getters
const getters = {}

// actions
const actions = {
    addUser({commit},data)
    {
        commit("ADD_USER", data);
    }
}

// mutations
const mutations = {
    ADD_USER(state, data)
    {
        state.userList.push(data)
    }
  }
export default {
    namespaced: true,
    strict: true,
    state,
    getters,
    actions,
    mutations
}
