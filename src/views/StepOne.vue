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
                        <v-toolbar-title>Ptt會員登入</v-toolbar-title>
                        <div class="flex-grow-1"></div>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form">
                            <v-text-field
                                    label="帳號"
                                    name="account"
                                    type="text"
                                    v-model="ptt.account"
                                    :rules="accountRules"
                                    required
                            ></v-text-field>

                            <v-text-field
                                    label="密碼"
                                    name="password"
                                    type="password"
                                    v-model="ptt.password"
                                    hint="若無帳號或有安全疑慮可以選擇略過此步驟"
                                    :rules="passwordRules"
                                    persistent-hint
                                    required
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-row>
                            <v-col cols="12" sm="6">
                                <v-btn color="secondary" :block="true" @click="ignore">略過</v-btn>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-btn color="primary" :block="true" @click="next">下一步</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { mapGetters,mapActions } from 'vuex'

    export default {
        data:()=> {
            return {
                accountRules: [
                    value => !!value || '請輸入帳號.',
                ],
                passwordRules: [
                    value => !!value || '請輸入密碼.',
                ],
            }
        },
        mounted() {
            this.$store
                .dispatch('fetchPtt')
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

                this.$store.dispatch('updatePtt').then(()=>{

                    this.showSnackbar({
                        isShow:true,
                        message:'註冊成功',
                        type:'primary',
                    }).then(()=>{
                        this.$router.push({name:'step_two'});
                    });

                });
            },
            ignore(){
                this.$router.push({name:'step_two'});
            },
            ...mapActions([
                'showSnackbar'
            ]),
        },
        computed: {
            ...mapGetters(["ptt"])
        },
    };
</script>
