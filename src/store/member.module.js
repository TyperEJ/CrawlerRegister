import ApiService from "@/common/api.service";
import JwtService from "@/common/jwt.service";

const state = {
    token:String,
    isAuth:false,
};

const getters = {
    token(state){
        return state.token;
    }
};

const actions = {
    getLoginUrl(context,payload) {
        const {url} = payload;

        return ApiService.query("register",{
            params:{
                url:url
            }
        });
    },
    fetchToken(context,payload){
        const {code,url} = payload;

        return ApiService.query("callback",{
            params:{
                code:code,
                url:url
            }
        }).then(({data}) => {
            const {token} = data;

            JwtService.saveToken(token);

            context.commit('setToken', token);

            return data;
        });
    },
    checkAuth(context){
        if(JwtService.getToken()){

            ApiService.setHeader();

            context.commit('setAuth',true);
            return true;
        }

        context.commit('setAuth',false);
        return false;
    }
};

const mutations = {
    setToken(state, data) {
        state.token = data;
    },
    setAuth(state, data){
        state.isAuth = data;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};