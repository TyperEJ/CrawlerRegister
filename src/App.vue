<template>
    <v-app>
        <v-content>
            <router-view/>
        </v-content>
        <loader/>
        <alert/>
    </v-app>
</template>

<script>
    import Loader from './component/_loader';
    import Snackbar from './component/_snackbar';

    export default {
        name: 'App',
        components:{'loader':Loader,'alert':Snackbar},
        data: () => ({
            //
        }),
    };
</script>