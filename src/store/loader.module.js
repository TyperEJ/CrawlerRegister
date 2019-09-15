const state = {
    loading:false
};

const getters = {
    loading(state) {
        return state.loading;
    }
};

const mutations = {
    setLoading(state, data) {
        state.loading = data;
    }
};

export default {
    state,
    mutations,
    getters
};