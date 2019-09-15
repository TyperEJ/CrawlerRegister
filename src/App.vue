<template>
    <v-app>
        <v-content>
            <router-view/>
        </v-content>
        <loader/>
    </v-app>
</template>

<script>
    import Loader from './component/_loader';

    export default {
        name: 'App',
        components:{Loader},
        data: () => ({
            //
        }),
    };
</script>