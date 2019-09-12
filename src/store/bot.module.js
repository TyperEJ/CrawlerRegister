import ApiService from "@/common/api.service";

const state = {
    bot: {
        channelSecret:null,
        channelToken:null
    }
};

const getters = {
    bot(state) {
        return state.bot;
    }
};

const actions = {
    fetchBot(context) {
        return ApiService.get("bot")
            .then(({data}) => {
                context.commit('setBot', data);
                return data;
            });
    },
    updateBot(){
        return ApiService.post("bot", state.bot);
    }
};

const mutations = {
    setBot(state, data) {
        state.bot.channelSecret = data.channel_secret;
        state.bot.channelToken = data.channel_token;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};