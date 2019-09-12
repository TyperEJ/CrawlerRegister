import ApiService from "@/common/api.service";

const state = {
    boards:[]
};

const getters = {
    boards(state) {
        return state.boards;
    }
};

const actions = {
    fetchBoard(context) {
        return ApiService.get("board")
            .then(({data}) => {
                context.commit('setBoards', data);
                return data;
            });
    }
};

const mutations = {
    setBoards(state, data) {
        state.boards = data;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};