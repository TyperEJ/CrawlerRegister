import Vue from "vue";
import axios from "@/common/interceptors.service";
import VueAxios from "vue-axios";
import JwtService from "@/common/jwt.service";

const ApiService = {
    init() {
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = 'https://ejlin.ga/api';
    },

    setHeader() {
        Vue.axios.defaults.headers.common[
            "Authorization"
            ] = `Bearer ${JwtService.getToken()}`;
    },

    query(resource, params) {
        return Vue.axios.get(resource, params).catch(error => {
            throw error.response;
        });
    },

    get(resource, slug = "") {
        return Vue.axios.get(`${resource}/${slug}`).catch(error => {
            throw error.response;
        });
    },

    post(resource, params) {
        return Vue.axios.post(`${resource}`, params).catch(error => {
            throw error.response;
        });
    },

    update(resource, slug, params) {
        return Vue.axios.post(`${resource}/${slug}`, params).catch(error => {
            throw error.response;
        });
    },

    put(resource, params) {
        return Vue.axios.put(`${resource}`, params).catch(error => {
            throw error.response;
        });
    },

    delete(resource) {
        return Vue.axios.delete(resource).catch(error => {
            throw error.response;
        });
    }
};

export default ApiService;
