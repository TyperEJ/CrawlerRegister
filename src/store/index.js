import Vue from "vue";
import Vuex from "vuex";

import ptt from "./ptt.module";
import notify from "./notify.module";
import subscribe from "./subscribe.module";
import board from "./board.module";
import member from "./member.module";
import loader from "./loader.module";
import snackbar from "./snackbar.module";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        ptt,
        notify,
        subscribe,
        board,
        member,
        loader,
        snackbar,
    }
});