(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d237511"],{fb32:function(t,i,o){"use strict";o.r(i);var e=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-progress-circular",{attrs:{size:100,width:8,color:"#00c300",indeterminate:""}})],1)],1)},n=[],r={created:function(){this.init()},methods:{init:function(){this.$route.query.code?this.notifyDecode():this.redirectNotifyAuth()},redirectNotifyAuth:function(){var t=this;this.$store.dispatch("getNotifyUrl",{url:window.location.href}).then((function(t){var i=t.data;window.location=i})).catch((function(i){t.$swal.fire({type:"error",title:i.data})}))},notifyDecode:function(){var t={url:window.location.href.split("?")[0],code:this.$route.query.code};this.$store.dispatch("fetchNotifyCode",t).then((function(){window.location="line://ti/p/@aov2473x"})).catch((function(){window.location=window.location.href.split("?")[0]}))}}},c=r,a=o("2877"),s=o("6544"),l=o.n(s),u=o("a523"),d=o("490a"),f=o("0fd9"),h=Object(a["a"])(c,e,n,!1,null,"a72035b8",null);i["default"]=h.exports;l()(h,{VContainer:u["a"],VProgressCircular:d["a"],VRow:f["a"]})}}]);
//# sourceMappingURL=chunk-2d237511.45543f9b.js.map