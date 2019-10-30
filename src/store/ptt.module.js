import ApiService from "@/common/api.service";

const state = {
    ptt: {
        account:null,
        password:null
    }
};

const getters = {
    ptt(state) {
        return state.ptt;
    }
};

const actions = {
    fetchPtt(context) {
        return ApiService.get("ptt-account")
            .then(({data}) => {
                context.commit('setPtt', data);
                return data;
            });
    },
    updatePtt(){
        return ApiService.post("ptt-account", state.ptt);
    }
};

const mutations = {
    setPtt(state, data) {
        state.ptt.account = data.account;
        state.ptt.password = data.password;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};