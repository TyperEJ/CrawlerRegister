import axios from "axios";
import router from '@/router';
import store from '@/store'

const interceptor = axios.create();

interceptor.interceptors.request.use(function (config) {
    // Do something before request is sent
    store.commit('setLoading',true);
    return config;
}, function (error) {
    // Do something with request error
    store.commit('setLoading',false);
    return Promise.reject(error);
});


interceptor.interceptors.response.use(function(response) {

    store.commit('setLoading',false);

    return response
}, function(error) {

    if (error.response.status === 401) {
        store.dispatch('showSnackbar',{
            isShow:true,
            message:'驗證錯誤',
            type:'error',
        }).then(() => {
            router.push({
                name: 'index'
            });
        });

        store.commit('setLoading',false);
    }

    if (error.response.status === 404) {
        router.push({
            name: 'index'
        })
    }

    if (error.response.status === 418) {
        store.dispatch('showSnackbar',{
            isShow:true,
            message:error.response.data,
            type:'error',
        });

        store.commit('setLoading',false);
    }

    if (error.response.status === 422) {
        store.dispatch('showSnackbar',{
            isShow:true,
            message:'資料驗證錯誤',
            type:'error',
        });

        store.commit('setLoading',false);
    }

    return Promise.reject(error)
});

export default interceptor;