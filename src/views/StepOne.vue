<template>
    <v-container
            class="fill-height"
            fluid
    >
        <v-row
                align="center"
                justify="center"
        >
            <v-col
                    cols="12"
                    sm="8"
                    md="4"
            >
                <v-card class="elevation-12">
                    <v-toolbar
                            color="primary"
                            dark
                            flat
                    >
                        <v-toolbar-title>Line Bot 註冊</v-toolbar-title>
                        <div class="flex-grow-1"></div>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form">
                            <v-text-field
                                    label="Channel Secret"
                                    name="channel_id"
                                    type="text"
                                    v-model="bot.channelSecret"
                                    :rules="secretRules"
                            ></v-text-field>

                            <v-text-field
                                    label="Channel Token"
                                    name="password"
                                    type="text"
                                    v-model="bot.channelToken"
                                    :rules="tokenRules"
                                    required
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <div class="flex-grow-1"></div>
                        <v-btn @click="register">申請機器人</v-btn>
                        <v-btn color="primary" @click="next">下一步</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        data:()=> {
            return {
                secretRules: [
                    value => !!value || '請輸入Channel Secret.',
                    value => (value || '').length > 10 || '請檢查格式',
                    value => (value || '').length <= 35 || '請檢查格式',
                ],
                tokenRules: [
                    value => !!value || '請輸入Channel Token.',
                    value => (value || '').length > 40 || '請檢查格式',
                ],
            }
        },
        mounted() {
            this.$store
                .dispatch('fetchBot')
                .catch((response) => {
                    this.$swal.fire({
                        type: 'error',
                        title: response.data,
                    });
                });
        },
        methods:{
            next(){
                if(!this.$refs.form.validate())
                {
                    return ;
                }

                this.$store.dispatch('updateBot').then(()=>{

                    this.$swal.fire({
                        type: 'success',
                        title: '註冊成功',
                    }).then(() => {
                        this.$router.push('step_two');
                    });


                });
            },
            register(){
                window.open('https://developers.line.biz/console/register/messaging-api/provider/?openExternalBrowser=1','_blank');
            },
        },
        computed: {
            ...mapGetters(["bot"])
        },
    };
</script>
