(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5378"],{9418:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[r("v-toolbar-title",[t._v("Ptt會員登入")]),r("div",{staticClass:"flex-grow-1"})],1),r("v-card-text",[r("v-form",{ref:"form"},[r("v-text-field",{attrs:{label:"帳號",name:"account",type:"text"},model:{value:t.ptt.account,callback:function(e){t.$set(t.ptt,"account",e)},expression:"ptt.account"}}),r("v-text-field",{attrs:{label:"密碼",name:"password",type:"password",hint:"若無帳號或有安全疑慮可以選擇略過此步驟","persistent-hint":""},model:{value:t.ptt.password,callback:function(e){t.$set(t.ptt,"password",e)},expression:"ptt.password"}})],1)],1),r("v-card-actions",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-btn",{attrs:{color:"secondary",block:!0},on:{click:t.ignore}},[t._v("略過")])],1),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-btn",{attrs:{color:"primary",block:!0},on:{click:t.next}},[t._v("下一步")])],1)],1)],1)],1)],1)],1)],1)},o=[],n=r("2f62");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(r,!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l={data:function(){return{}},mounted:function(){var t=this;this.$store.dispatch("fetchPtt").catch((function(e){t.$swal.fire({type:"error",title:e.data})}))},methods:s({next:function(){var t=this;this.$refs.form.validate()&&this.$store.dispatch("updatePtt").then((function(){t.showSnackbar({isShow:!0,message:"註冊成功",type:"primary"}).then((function(){t.$router.push({name:"step_two"})}))}))},ignore:function(){this.$router.push({name:"step_two"})}},Object(n["b"])(["showSnackbar"])),computed:s({},Object(n["c"])(["ptt"]))},p=l,u=r("2877"),f=r("6544"),d=r.n(f),b=r("8336"),v=r("b0af"),h=r("99d9"),w=r("62ad"),m=r("a523"),y=r("4bd4"),O=r("0fd9"),g=r("8654"),j=r("71d9"),k=r("2a7f"),x=Object(u["a"])(p,a,o,!1,null,null,null);e["default"]=x.exports;d()(x,{VBtn:b["a"],VCard:v["a"],VCardActions:h["a"],VCardText:h["b"],VCol:w["a"],VContainer:m["a"],VForm:y["a"],VRow:O["a"],VTextField:g["a"],VToolbar:j["a"],VToolbarTitle:k["a"]})}}]);
//# sourceMappingURL=chunk-2d0e5378.43eec7a7.js.map