<template>
    <v-container
            class="fill-height"
            fluid
    >
        <v-row align="center" justify="center">
            <v-img
                    src="../assets/logo.png"
                    max-width="300"
                    aspect-ratio="1"
            ></v-img>
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
                    this.redirectLogin();
                } else {
                    this.decode();
                }
            },
            redirectLogin() {
                this.$store
                    .dispatch('getLoginUrl', {url: window.location.href})
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
            decode() {
                const params = {
                    url: window.location.href.split("?")[0],
                    code: this.$route.query.code,
                };

                this.$store
                    .dispatch('fetchToken', params)
                    .then(() => {
                        this.$router.push('step_one');
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