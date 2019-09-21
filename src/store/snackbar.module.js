const state = {
    snackbar:false,
    message:String,
    color:'primary',
};

const getters = {
    snackbar(state) {
        return state.snackbar;
    },
    snackbarMessage(state) {
        return state.message;
    },
    snackbarColor(state) {
        return state.color;
    }
};

const actions = {
    showSnackbar({commit},snackbar){
        commit('setSnackbar',snackbar.isShow);
        commit('setSnackbarMessage',snackbar.message);
        commit('setSnackbarColor',snackbar.type);

        return new Promise((resolve) => {
            setTimeout(() => {
                commit('setSnackbar',false);
                resolve()
            }, 1000)
        })
    }
}
;

const mutations = {
    setSnackbar(state, data) {
        state.snackbar = data;
    },
    setSnackbarMessage(state, data) {
        state.message = data;
    },
    setSnackbarColor(state, data) {
        state.color = data;
    }
};

export default {
    state,
    actions,
    getters,
    mutations,
};