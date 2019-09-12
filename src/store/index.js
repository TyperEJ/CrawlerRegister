import Vue from "vue";
import Vuex from "vuex";

import bot from "./bot.module";
import subscribe from "./subscribe.module";
import board from "./board.module";
import member from "./member.module";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        bot,
        subscribe,
        board,
        member,
    }
});