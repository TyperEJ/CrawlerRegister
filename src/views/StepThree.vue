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
    export default {
        created() {
            this.init();
        },
        methods: {
            init() {
                if (!this.$route.query.code) {
                    this.redirectNotifyAuth();
                } else {
                    this.notifyDecode();
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
                        window.location = 'line://ti/p/@aov2473x';
                    })
                    .catch(() => {
                        window.location = window.location.href.split("?")[0];
                    });
            }
        }
    }
</script>

<style scoped>

</style>