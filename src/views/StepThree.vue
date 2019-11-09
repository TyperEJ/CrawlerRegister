<template>
    <v-container
            class="fill-height"
            fluid
    >
        <v-row align="center" justify="center">
            <v-progress-circular
                    :size="100"
                    :width="8"
                    color="#00c300"
                    indeterminate
            ></v-progress-circular>
        </v-row>
    </v-container>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        mounted() {
            this.$store
                .dispatch('fetchNotifyRegistered')
                .then(() => {
                    this.init();
                })
                .catch((response) => {
                    this.$swal.fire({
                        type: 'error',
                        title: response.data,
                    });
                });
        },
        methods: {
            init() {

                if(this.$route.query.code)
                {
                    this.notifyDecode();
                }else if (!this.notify.isRegistered) {

                    this.$swal.fire({
                        type: 'warning',
                        title: '首次綁定請選擇',
                        text: '透過1對1聊天接收LINE Notify的通知',
                        confirmButtonText: '好的',
                        confirmButtonColor: '#00c300',
                    }).then(() => {
                        this.redirectNotifyAuth();
                    });

                }else if(this.notify.rebind) {
                    this.redirectNotifyAuth();
                }else {
                    this.redirectToPttBot();
                }
            },
            redirectNotifyAuth() {
                this.$store
                    .dispatch('getNotifyUrl', {url: window.location.href})
                    .then(({data}) => {
                        window.location = data;
                    })
                    .catch((response) => {
                        this.$swal.fire({
                            type: 'error',
                            title: response.data,
                        });
                    });
            },
            notifyDecode() {
                const params = {
                    url: window.location.href.split("?")[0],
                    code: this.$route.query.code,
                };

                this.$store
                    .dispatch('fetchNotifyCode', params)
                    .then(() => {
                        this.redirectToPttBot();
                    })
                    .catch(() => {
                        window.location = window.location.href.split("?")[0];
                    });
            },
            redirectToPttBot() {
                window.location = 'line://ti/p/@aov2473x';
            }
        },
        computed: {
            ...mapGetters({
                notify: 'notify'
            })
        },
    }
</script>

<style scoped>

</style>