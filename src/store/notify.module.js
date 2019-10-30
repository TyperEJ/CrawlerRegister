import ApiService from "@/common/api.service";

const actions = {
    getNotifyUrl(context,payload) {
        const {url} = payload;

        return ApiService.query("notify/register",{
            params:{
                url:url
            }
        });
    },
    fetchNotifyCode(context,payload){
        const {code,url} = payload;

        return ApiService.query("notify/callback",{
            params:{
                code:code,
                url:url
            }
        });
    }
};

export default {
    actions,
};