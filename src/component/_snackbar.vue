<template>
    <v-snackbar
            v-model="snackbar"
            :color="snackbarColor"
            :timeout="3000"
    >
        {{ snackbarMessage }}

    </v-snackbar>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters(["snackbar","snackbarMessage","snackbarColor"])
        },
    }
</script>