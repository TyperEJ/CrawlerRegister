import axios from "axios";
import router from '@/router';

const interceptor = axios.create();

interceptor.interceptors.response.use(function(response) {
    return response
}, function(error) {

    if (error.response.status === 401) {
        router.push({
            name: 'index'
        })
    }

    if (error.response.status === 404) {
        router.push({
            name: 'index'
        })
    }
    return Promise.reject(error)
});

export default interceptor;