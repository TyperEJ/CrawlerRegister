import ApiService from "@/common/api.service";

const state = {
    subscribes: [
        {
            board:null,
            keyword:null,
        }
    ]
};

const getters = {
    subscribes(state) {
        return state.subscribes;
    }
};

const actions = {
    fetchSubscribe(context) {
        return ApiService.get("subscribe")
            .then(({data}) => {
                context.commit('setSubscribe', data);
                return data;
            });
    },
    updateSubscribe(){
        return ApiService.post("subscribe", state);
    }
};

const mutations = {
    setSubscribe(state, data) {
        state.subscribes = data;
    },
    pushSubscribe(state, data){
        state.subscribes.push(data);
    },
    removeSubscribe(state, index){
        state.subscribes.splice(index,1);
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
