import ApiService from "@/common/api.service";

const state = {
    notify:{
        isRegistered:Boolean
    }
};

const getters = {
    notify(state) {
        return state.notify;
    }
};

const actions = {
    getNotifyUrl(context,payload) {
        const {url} = payload;

        return ApiService.query("notify/register",{
            params:{
                url:url
            }
        });
    },
    fetchNotifyCode(context,payload) {
        const {code,url} = payload;

        return ApiService.query("notify/callback",{
            params:{
                code:code,
                url:url
            }
        });
    },
    fetchNotifyRegistered(context) {
        return ApiService.get("notify/isRegistered")
            .then(({data}) => {
            context.commit('setNotifyRegister', data);
            return data;
        });
    }
};

const mutations = {
    setNotifyRegister(state, data) {
        state.notify.isRegistered = data;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};