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
                        <v-toolbar-title>訂閱項目</v-toolbar-title>
                        <div class="flex-grow-1"></div>
                    </v-toolbar>
                    <v-card-text>
                        <v-form v-model="valid" :lazy-validation="true" ref="form">
                            <v-row no-gutters>
                                <v-col :cols="4">
                                    <v-select
                                            :items="boardOptions"
                                            v-model="board"
                                            label="訂閱看板"
                                            :rules="[v => !!v || '請選擇看板']"
                                    ></v-select>
                                </v-col>
                                <v-col :cols="7">
                                    <v-combobox
                                            v-model="keywords"
                                            label="關鍵字"
                                            :multiple="true"
                                            :small-chips="true"
                                            :deletable-chips="true"
                                            :rules="comboboxRule"
                                            :append-icon="null"
                                    >
                                    </v-combobox>
                                </v-col>
                                <v-col :cols="1" class="d-flex align-center justify-center">
                                    <v-tooltip v-model="showHint" top>
                                        <template v-slot:activator="{ on }">
                                    <v-btn icon color="primary" :class="{ shake: showHint }" @click="addKeyword">
                                        <v-icon>mdi-plus</v-icon>
                                    </v-btn>
                                        </template>
                                        <span>點擊新增項目</span>
                                    </v-tooltip>
                                </v-col>
                            </v-row>
                            <v-row v-show="!items.length">
                                <v-col :cols="12">
                                    <p class="headline font-weight-bold text-center">訂閱項目為空</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters v-for="(item,index) in items" :key='index'>
                                <v-col :cols="4">
                                    <p class="text--primary">{{ item.board }}</p>
                                </v-col>
                                <v-col :cols="7">
                                    <p class="text--primary">{{ item.keyword }}</p>
                                </v-col>
                                <v-col :cols="1" class="d-flex align-center justify-center">
                                    <v-btn icon color="error" @click="removeKeyword(index)">
                                        <v-icon>mdi-minus</v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-row v-if="!notify.isRegistered">
                            <v-col cols="12" sm="6">
                                <v-btn color="secondary" :block="true" @click="warnPrev">上一步</v-btn>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-btn color="primary" :block="true" @click="subscribe">訂閱</v-btn>
                            </v-col>
                        </v-row>
                        <v-row v-else>
                            <v-col cols="12" sm="4">
                                <v-btn color="secondary" :block="true" @click="warnPrev">上一步</v-btn>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-btn color="primary" :block="true" @click="rebind">重新綁定通知</v-btn>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-btn color="primary" :block="true" @click="subscribe">訂閱</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        data: () => {
            return {
                board: null,
                keywords: [],
                valid: false,
                comboboxRule:[function(v){
                    if(!v.length){
                        return "請輸入關鍵字";
                    }
                    return true;
                }],
                isSubscribed:false,
                showHint:false,
            };
        },
        mounted() {
            this.$store
                .dispatch('fetchNotifyRegistered')
                .catch((response) => {
                    this.$swal.fire({
                        type: 'error',
                        title: response.data,
                    });
                });

            this.$store
                .dispatch('fetchBoard')
                .catch((response) => {
                this.$swal.fire({
                    type: 'error',
                    title: response.data,
                });
            });

            this.$store
                .dispatch('fetchSubscribe')
                .catch((response) => {
                    this.$swal.fire({
                        type: 'error',
                        title: response.data,
                    });
                });
        },
        methods: {
            addKeyword() {
                if(!this.$refs.form.validate())
                {
                    return ;
                }

                if(this.showHint)
                {
                    this.showHint = false;
                }

                let obj = {
                    'board': String,
                    'keyword': String
                };

                obj['board'] = this.board;
                obj['keyword'] = this.keywords.join('&');

                this.$store.commit('pushSubscribe',obj);
                this.resetItem();
            },
            removeKeyword(index) {
                this.$store.commit('removeSubscribe',index);
            },
            resetItem() {
                this.$refs.form.reset();
            },
            subscribe() {
                if(this.board && this.keywords)
                {
                    this.showHint = true;

                    return;
                }

                if(!this.items.length){
                    this.$swal.fire({
                        type: 'warning',
                        title: '目前項目為空，請問是否清空訂閱？',
                        showCancelButton: true,
                        confirmButtonText:'確定',
                        cancelButtonText:'取消',
                        confirmButtonColor: '#00c300',
                        focusCancel:true,
                    }).then((result) => {
                        if(result.value){
                            this.$store
                                .dispatch('updateSubscribe')
                                .then(() => {
                                    this.$swal.fire({
                                        type: 'success',
                                        title: '已無任何訂閱',
                                        confirmButtonText:'好的',
                                        confirmButtonColor: '#00c300',
                                    }).then(() => {
                                        this.$router.push({name:'step_three'});
                                    });
                                });
                        }else{
                            this.showHint = true;
                        }
                    });

                }else{
                    this.$store
                        .dispatch('updateSubscribe')
                        .then(() => {
                            this.$swal.fire({
                                type: 'success',
                                title: '訂閱成功',
                                confirmButtonText: '確認',
                                confirmButtonColor: '#00c300',
                            }).then(() => {
                                this.$router.push({name:'step_three'});
                            });
                        });
                }

                this.isSubscribed = true;
            },
            warnPrev(){
              if(this.isSubscribed)
              {
                  this.$router.push({name:'step_one'});
              }else{
                  this.$swal.fire({
                      type:'warning',
                      title:'尚未儲存資料，是否離開頁面？',
                      showCancelButton: true,
                      confirmButtonText:'確定',
                      cancelButtonText:'取消',
                      focusCancel:true,
                      reverseButtons:true,
                      confirmButtonColor: '#00c300',
                  }).then((result)=>{
                      if (result.value) {
                          this.$router.push({name:'step_one'});
                      }
                  });
              }
            },
            rebind(){
                this.$store.commit('setNotifyRebind',true);

                this.subscribe();
            }
        },
        computed: {
            ...mapGetters({
                items: 'subscribes',
                boardOptions: 'boards',
                notify: 'notify',
            })
        },
    };
</script>

<style scoped>
    .shake {
        animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
    }

    @keyframes shake {
        10%, 90% {
            transform: translate3d(-1px, 0, 0);
        }

        20%, 80% {
            transform: translate3d(2px, 0, 0);
        }

        30%, 50%, 70% {
            transform: translate3d(-4px, 0, 0);
        }

        40%, 60% {
            transform: translate3d(4px, 0, 0);
        }
    }
</style>