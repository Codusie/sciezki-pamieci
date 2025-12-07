import{H as Ft}from"./Header-CtRXHROP.js";import{B as S,c,o as a,r as y,a as A,b as $,m as u,t as G,n as x,d as wt,e as s,W as _,f as Ht,_ as Rt,g as I,h as jt,i as m,w as g,j as Ct,k as M,l as O,T as F,p as Vt,q as N,s as R,u as b,v as f,x as W,P,y as Ut,z as Kt,F as st,A as kt,C as ut,D as dt,E as pt,G as ct,H as et,I as Nt,J as Wt,R as Yt,K as ft,L,M as B,N as q,O as Xt,$ as Zt,U as J,Q as Gt,S as qt,Y as Jt,V as T,X as mt,Z as Qt,a0 as te,a1 as ee,a2 as ht,a3 as ne}from"./index-Crr1jn8N.js";import{L as ie}from"./Layout-u0HuJ3dE.js";import{s as E,f as _t,B as re,a as X}from"./index-BmHFrUOG.js";import{s as Y,F as oe,a as ae,b as se,u as vt,x as H,c as le,d as ue}from"./index-Be2fRE-G.js";import{G as zt,u as de}from"./useLandmarks-RQiu47DW.js";import{G as Q}from"./twardowski-DDWYMZXs.js";import"./Button-i461WrsC.js";import"./index-BaTA1TSy.js";var pe=`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`,ce={root:function(t){var n=t.props;return["p-avatar p-component",{"p-avatar-image":n.image!=null,"p-avatar-circle":n.shape==="circle","p-avatar-lg":n.size==="large","p-avatar-xl":n.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},fe=S.extend({name:"avatar",style:pe,classes:ce}),me={name:"BaseAvatar",extends:E,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:fe,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function j(e){"@babel/helpers - typeof";return j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(e)}function gt(e,t,n){return(t=he(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function he(e){var t=ve(e,"string");return j(t)=="symbol"?t:t+""}function ve(e,t){if(j(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t);if(j(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var St={name:"Avatar",extends:me,inheritAttrs:!1,emits:["error"],methods:{onError:function(t){this.$emit("error",t)}},computed:{dataP:function(){return _t(gt(gt({},this.shape,this.shape),this.size,this.size))}}},ge=["aria-labelledby","aria-label","data-p"],be=["data-p"],ye=["data-p"],$e=["src","alt","data-p"];function we(e,t,n,i,o,r){return a(),c("div",u({class:e.cx("root"),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptmi("root"),{"data-p":r.dataP}),[y(e.$slots,"default",{},function(){return[e.label?(a(),c("span",u({key:0,class:e.cx("label")},e.ptm("label"),{"data-p":r.dataP}),G(e.label),17,be)):e.$slots.icon?(a(),A(wt(e.$slots.icon),{key:1,class:x(e.cx("icon"))},null,8,["class"])):e.icon?(a(),c("span",u({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon"),{"data-p":r.dataP}),null,16,ye)):e.image?(a(),c("img",u({key:3,src:e.image,alt:e.ariaLabel,onError:t[0]||(t[0]=function(){return r.onError&&r.onError.apply(r,arguments)})},e.ptm("image"),{"data-p":r.dataP}),null,16,$e)):$("",!0)]})],16,ge)}St.render=we;var Ce=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,ke={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},_e=S.extend({name:"card",style:Ce,classes:ke}),ze={name:"BaseCard",extends:E,style:_e,provide:function(){return{$pcCard:this,$parentInstance:this}}},D={name:"Card",extends:ze,inheritAttrs:!1};function Se(e,t,n,i,o,r){return a(),c("div",u({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(a(),c("div",u({key:0,class:e.cx("header")},e.ptm("header")),[y(e.$slots,"header")],16)):$("",!0),s("div",u({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(a(),c("div",u({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(a(),c("div",u({key:0,class:e.cx("title")},e.ptm("title")),[y(e.$slots,"title")],16)):$("",!0),e.$slots.subtitle?(a(),c("div",u({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[y(e.$slots,"subtitle")],16)):$("",!0)],16)):$("",!0),s("div",u({class:e.cx("content")},e.ptm("content")),[y(e.$slots,"content")],16),e.$slots.footer?(a(),c("div",u({key:1,class:e.cx("footer")},e.ptm("footer")),[y(e.$slots,"footer")],16)):$("",!0)],16)],16)}D.render=Se;var Lt={name:"EyeIcon",extends:Y};function Le(e){return Ee(e)||Ae(e)||xe(e)||Be()}function Be(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xe(e,t){if(e){if(typeof e=="string")return nt(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?nt(e,t):void 0}}function Ae(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ee(e){if(Array.isArray(e))return nt(e)}function nt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}function Ie(e,t,n,i,o,r){return a(),c("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),Le(t[0]||(t[0]=[s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z",fill:"currentColor"},null,-1)])),16)}Lt.render=Ie;var Bt={name:"RefreshIcon",extends:Y};function Me(e){return Oe(e)||De(e)||Pe(e)||Te()}function Te(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pe(e,t){if(e){if(typeof e=="string")return it(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?it(e,t):void 0}}function De(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Oe(e){if(Array.isArray(e))return it(e)}function it(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}function Fe(e,t,n,i,o,r){return a(),c("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),Me(t[0]||(t[0]=[s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.77051 5.96336C6.84324 5.99355 6.92127 6.00891 7.00002 6.00854C7.07877 6.00891 7.1568 5.99355 7.22953 5.96336C7.30226 5.93317 7.36823 5.88876 7.42357 5.83273L9.82101 3.43529C9.93325 3.32291 9.99629 3.17058 9.99629 3.01175C9.99629 2.85292 9.93325 2.70058 9.82101 2.5882L7.42357 0.190763C7.3687 0.131876 7.30253 0.0846451 7.22901 0.0518865C7.15549 0.019128 7.07612 0.00151319 6.99564 9.32772e-05C6.91517 -0.00132663 6.83523 0.0134773 6.7606 0.0436218C6.68597 0.0737664 6.61817 0.118634 6.56126 0.175548C6.50435 0.232462 6.45948 0.300257 6.42933 0.374888C6.39919 0.449519 6.38439 0.529456 6.38581 0.609933C6.38722 0.690409 6.40484 0.769775 6.4376 0.843296C6.47036 0.916817 6.51759 0.982986 6.57647 1.03786L7.95103 2.41241H6.99998C5.46337 2.41241 3.98969 3.02283 2.90314 4.10938C1.81659 5.19593 1.20618 6.66961 1.20618 8.20622C1.20618 9.74283 1.81659 11.2165 2.90314 12.3031C3.98969 13.3896 5.46337 14 6.99998 14C8.53595 13.9979 10.0084 13.3868 11.0945 12.3007C12.1806 11.2146 12.7917 9.74218 12.7938 8.20622C12.7938 8.04726 12.7306 7.89481 12.6182 7.78241C12.5058 7.67001 12.3534 7.60686 12.1944 7.60686C12.0355 7.60686 11.883 7.67001 11.7706 7.78241C11.6582 7.89481 11.5951 8.04726 11.5951 8.20622C11.5951 9.11504 11.3256 10.0035 10.8207 10.7591C10.3157 11.5148 9.59809 12.1037 8.75845 12.4515C7.9188 12.7993 6.99489 12.8903 6.10353 12.713C5.21217 12.5357 4.3934 12.0981 3.75077 11.4554C3.10813 10.8128 2.67049 9.99404 2.49319 9.10268C2.31589 8.21132 2.40688 7.2874 2.75468 6.44776C3.10247 5.60811 3.69143 4.89046 4.44709 4.38554C5.20275 3.88063 6.09116 3.61113 6.99998 3.61113H7.95098L6.57647 4.98564C6.46423 5.09802 6.40119 5.25035 6.40119 5.40918C6.40119 5.56801 6.46423 5.72035 6.57647 5.83273C6.63181 5.88876 6.69778 5.93317 6.77051 5.96336Z",fill:"currentColor"},null,-1)])),16)}Bt.render=Fe;var xt={name:"SearchMinusIcon",extends:Y};function He(e){return Ue(e)||Ve(e)||je(e)||Re()}function Re(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function je(e,t){if(e){if(typeof e=="string")return rt(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?rt(e,t):void 0}}function Ve(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ue(e){if(Array.isArray(e))return rt(e)}function rt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}function Ke(e,t,n,i,o,r){return a(),c("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),He(t[0]||(t[0]=[s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.0208 12.0411C4.83005 12.0411 3.66604 11.688 2.67596 11.0265C1.68589 10.3649 0.914216 9.42464 0.458534 8.32452C0.00285271 7.22441 -0.116374 6.01388 0.11593 4.84601C0.348235 3.67813 0.921637 2.60537 1.76363 1.76338C2.60562 0.921393 3.67838 0.34799 4.84625 0.115686C6.01412 -0.116618 7.22466 0.00260857 8.32477 0.45829C9.42488 0.913972 10.3652 1.68564 11.0267 2.67572C11.6883 3.66579 12.0414 4.8298 12.0414 6.02056C12.0395 7.41563 11.5542 8.76029 10.6783 9.8305L13.8244 12.9765C13.9367 13.089 13.9997 13.2414 13.9997 13.4003C13.9997 13.5592 13.9367 13.7116 13.8244 13.8241C13.769 13.8801 13.703 13.9245 13.6302 13.9548C13.5575 13.985 13.4794 14.0003 13.4006 14C13.3218 14.0003 13.2437 13.985 13.171 13.9548C13.0982 13.9245 13.0322 13.8801 12.9768 13.8241L9.83082 10.678C8.76059 11.5539 7.4159 12.0393 6.0208 12.0411ZM6.0208 1.20731C5.07199 1.20731 4.14449 1.48867 3.35559 2.0158C2.56669 2.54292 1.95181 3.29215 1.58872 4.16874C1.22562 5.04532 1.13062 6.00989 1.31572 6.94046C1.50083 7.87104 1.95772 8.72583 2.62863 9.39674C3.29954 10.0676 4.15433 10.5245 5.0849 10.7096C6.01548 10.8947 6.98005 10.7997 7.85663 10.4367C8.73322 10.0736 9.48244 9.45868 10.0096 8.66978C10.5367 7.88088 10.8181 6.95337 10.8181 6.00457C10.8181 4.73226 10.3126 3.51206 9.41297 2.6124C8.51331 1.71274 7.29311 1.20731 6.0208 1.20731ZM4.00591 6.60422H8.00362C8.16266 6.60422 8.31518 6.54104 8.42764 6.42859C8.5401 6.31613 8.60328 6.1636 8.60328 6.00456C8.60328 5.84553 8.5401 5.693 8.42764 5.58054C8.31518 5.46809 8.16266 5.40491 8.00362 5.40491H4.00591C3.84687 5.40491 3.69434 5.46809 3.58189 5.58054C3.46943 5.693 3.40625 5.84553 3.40625 6.00456C3.40625 6.1636 3.46943 6.31613 3.58189 6.42859C3.69434 6.54104 3.84687 6.60422 4.00591 6.60422Z",fill:"currentColor"},null,-1)])),16)}xt.render=Ke;var At={name:"SearchPlusIcon",extends:Y};function Ne(e){return Ze(e)||Xe(e)||Ye(e)||We()}function We(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ye(e,t){if(e){if(typeof e=="string")return ot(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ot(e,t):void 0}}function Xe(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ze(e){if(Array.isArray(e))return ot(e)}function ot(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}function Ge(e,t,n,i,o,r){return a(),c("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),Ne(t[0]||(t[0]=[s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.67596 11.0265C3.66604 11.688 4.83005 12.0411 6.0208 12.0411C6.81143 12.0411 7.59432 11.8854 8.32477 11.5828C8.86999 11.357 9.37802 11.0526 9.83311 10.6803L12.9768 13.8241C13.0322 13.8801 13.0982 13.9245 13.171 13.9548C13.2437 13.985 13.3218 14.0003 13.4006 14C13.4794 14.0003 13.5575 13.985 13.6302 13.9548C13.703 13.9245 13.769 13.8801 13.8244 13.8241C13.9367 13.7116 13.9997 13.5592 13.9997 13.4003C13.9997 13.2414 13.9367 13.089 13.8244 12.9765L10.6806 9.8328C11.0529 9.37773 11.3572 8.86972 11.5831 8.32452C11.8856 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0267 2.67572C10.3652 1.68564 9.42488 0.913972 8.32477 0.45829C7.22466 0.00260857 6.01412 -0.116618 4.84625 0.115686C3.67838 0.34799 2.60562 0.921393 1.76363 1.76338C0.921637 2.60537 0.348235 3.67813 0.11593 4.84601C-0.116374 6.01388 0.00285271 7.22441 0.458534 8.32452C0.914216 9.42464 1.68589 10.3649 2.67596 11.0265ZM3.35559 2.0158C4.14449 1.48867 5.07199 1.20731 6.0208 1.20731C7.29311 1.20731 8.51331 1.71274 9.41297 2.6124C10.3126 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5367 7.88088 10.0096 8.66978C9.48244 9.45868 8.73322 10.0736 7.85663 10.4367C6.98005 10.7997 6.01548 10.8947 5.0849 10.7096C4.15433 10.5245 3.29954 10.0676 2.62863 9.39674C1.95772 8.72583 1.50083 7.87104 1.31572 6.94046C1.13062 6.00989 1.22562 5.04532 1.58872 4.16874C1.95181 3.29215 2.56669 2.54292 3.35559 2.0158ZM6.00481 8.60309C5.84641 8.60102 5.69509 8.53718 5.58308 8.42517C5.47107 8.31316 5.40722 8.16183 5.40515 8.00344V6.60422H4.00591C3.84687 6.60422 3.69434 6.54104 3.58189 6.42859C3.46943 6.31613 3.40625 6.1636 3.40625 6.00456C3.40625 5.84553 3.46943 5.693 3.58189 5.58054C3.69434 5.46809 3.84687 5.40491 4.00591 5.40491H5.40515V4.00572C5.40515 3.84668 5.46833 3.69416 5.58079 3.5817C5.69324 3.46924 5.84577 3.40607 6.00481 3.40607C6.16385 3.40607 6.31637 3.46924 6.42883 3.5817C6.54129 3.69416 6.60447 3.84668 6.60447 4.00572V5.40491H8.00362C8.16266 5.40491 8.31518 5.46809 8.42764 5.58054C8.5401 5.693 8.60328 5.84553 8.60328 6.00456C8.60328 6.1636 8.5401 6.31613 8.42764 6.42859C8.31518 6.54104 8.16266 6.60422 8.00362 6.60422H6.60447V8.00344C6.60239 8.16183 6.53855 8.31316 6.42654 8.42517C6.31453 8.53718 6.1632 8.60102 6.00481 8.60309Z",fill:"currentColor"},null,-1)])),16)}At.render=Ge;var Et={name:"UndoIcon",extends:Y};function qe(e){return en(e)||tn(e)||Qe(e)||Je()}function Je(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qe(e,t){if(e){if(typeof e=="string")return at(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?at(e,t):void 0}}function tn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function en(e){if(Array.isArray(e))return at(e)}function at(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}function nn(e,t,n,i,o,r){return a(),c("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),qe(t[0]||(t[0]=[s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.77042 5.96336C6.84315 5.99355 6.92118 6.00891 6.99993 6.00854C7.07868 6.00891 7.15671 5.99355 7.22944 5.96336C7.30217 5.93317 7.36814 5.88876 7.42348 5.83273C7.53572 5.72035 7.59876 5.56801 7.59876 5.40918C7.59876 5.25035 7.53572 5.09802 7.42348 4.98564L6.04897 3.61113H6.99998C7.9088 3.61113 8.79722 3.88063 9.55288 4.38554C10.3085 4.89046 10.8975 5.60811 11.2453 6.44776C11.5931 7.2874 11.6841 8.21132 11.5068 9.10268C11.3295 9.99404 10.8918 10.8128 10.2492 11.4554C9.60657 12.0981 8.7878 12.5357 7.89644 12.713C7.00508 12.8903 6.08116 12.7993 5.24152 12.4515C4.40188 12.1037 3.68422 11.5148 3.17931 10.7591C2.67439 10.0035 2.4049 9.11504 2.4049 8.20622C2.4049 8.04726 2.34175 7.89481 2.22935 7.78241C2.11695 7.67001 1.9645 7.60686 1.80554 7.60686C1.64658 7.60686 1.49413 7.67001 1.38172 7.78241C1.26932 7.89481 1.20618 8.04726 1.20618 8.20622C1.20829 9.74218 1.81939 11.2146 2.90548 12.3007C3.99157 13.3868 5.46402 13.9979 6.99998 14C8.5366 14 10.0103 13.3896 11.0968 12.3031C12.1834 11.2165 12.7938 9.74283 12.7938 8.20622C12.7938 6.66961 12.1834 5.19593 11.0968 4.10938C10.0103 3.02283 8.5366 2.41241 6.99998 2.41241H6.04892L7.42348 1.03786C7.48236 0.982986 7.5296 0.916817 7.56235 0.843296C7.59511 0.769775 7.61273 0.690409 7.61415 0.609933C7.61557 0.529456 7.60076 0.449519 7.57062 0.374888C7.54047 0.300257 7.49561 0.232462 7.43869 0.175548C7.38178 0.118634 7.31398 0.0737664 7.23935 0.0436218C7.16472 0.0134773 7.08478 -0.00132663 7.00431 9.32772e-05C6.92383 0.00151319 6.84447 0.019128 6.77095 0.0518865C6.69742 0.0846451 6.63126 0.131876 6.57638 0.190763L4.17895 2.5882C4.06671 2.70058 4.00366 2.85292 4.00366 3.01175C4.00366 3.17058 4.06671 3.32291 4.17895 3.43529L6.57638 5.83273C6.63172 5.88876 6.69769 5.93317 6.77042 5.96336Z",fill:"currentColor"},null,-1)])),16)}Et.render=nn;var rn=`
    .p-image-mask {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-image-preview {
        position: relative;
        display: inline-flex;
        line-height: 0;
    }

    .p-image-preview-mask {
        position: absolute;
        inset-inline-start: 0;
        inset-block-start: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        border: 0 none;
        padding: 0;
        cursor: pointer;
        background: transparent;
        color: dt('image.preview.mask.color');
        transition: background dt('image.transition.duration');
    }

    .p-image-preview:hover > .p-image-preview-mask,
    .p-image-preview-mask:focus-visible {
        opacity: 1;
        cursor: pointer;
        background: dt('image.preview.mask.background');
        outline: 0 none;
    }

    .p-image-preview-icon {
        font-size: dt('image.preview.icon.size');
        width: dt('image.preview.icon.size');
        height: dt('image.preview.icon.size');
    }

    .p-image-toolbar {
        position: absolute;
        inset-block-start: dt('image.toolbar.position.top');
        inset-inline-end: dt('image.toolbar.position.right');
        inset-inline-start: dt('image.toolbar.position.left');
        inset-block-end: dt('image.toolbar.position.bottom');
        display: flex;
        z-index: 1;
        padding: dt('image.toolbar.padding');
        background: dt('image.toolbar.background');
        backdrop-filter: blur(dt('image.toolbar.blur'));
        border-color: dt('image.toolbar.border.color');
        border-style: solid;
        border-width: dt('image.toolbar.border.width');
        border-radius: dt('image.toolbar.border.radius');
        gap: dt('image.toolbar.gap');
    }

    .p-image-action {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        color: dt('image.action.color');
        background: transparent;
        width: dt('image.action.size');
        height: dt('image.action.size');
        margin: 0;
        padding: 0;
        border: 0 none;
        cursor: pointer;
        user-select: none;
        border-radius: dt('image.action.border.radius');
        outline-color: transparent;
        transition:
            background dt('image.transition.duration'),
            color dt('image.transition.duration'),
            outline-color dt('image.transition.duration'),
            box-shadow dt('image.transition.duration');
    }

    .p-image-action:hover {
        color: dt('image.action.hover.color');
        background: dt('image.action.hover.background');
    }

    .p-image-action:focus-visible {
        box-shadow: dt('image.action.focus.ring.shadow');
        outline: dt('image.action.focus.ring.width') dt('image.action.focus.ring.style') dt('image.action.focus.ring.color');
        outline-offset: dt('image.action.focus.ring.offset');
    }

    .p-image-action .p-icon {
        font-size: dt('image.action.icon.size');
        width: dt('image.action.icon.size');
        height: dt('image.action.icon.size');
    }

    .p-image-action.p-disabled {
        pointer-events: auto;
    }

    .p-image-original {
        max-width: 100vw;
        max-height: 100vh;
        transition: transform 300ms;
    }

    .p-image-original-enter-active {
        animation: p-animate-image-original-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-image-original-leave-active {
        animation: p-animate-image-original-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    @keyframes p-animate-image-original-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-image-original-leave {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`,on={root:function(t){var n=t.props;return["p-image p-component",{"p-image-preview":n.preview}]},previewMask:"p-image-preview-mask",previewIcon:"p-image-preview-icon",mask:"p-image-mask p-overlay-mask p-overlay-mask-enter-active",toolbar:"p-image-toolbar",rotateRightButton:"p-image-action p-image-rotate-right-button",rotateLeftButton:"p-image-action p-image-rotate-left-button",zoomOutButton:function(t){var n=t.instance;return["p-image-action p-image-zoom-out-button",{"p-disabled":n.isZoomOutDisabled}]},zoomInButton:function(t){var n=t.instance;return["p-image-action p-image-zoom-in-button",{"p-disabled":n.isZoomInDisabled}]},closeButton:"p-image-action p-image-close-button",original:"p-image-original"},an=S.extend({name:"image",style:rn,classes:on}),sn={name:"BaseImage",extends:E,props:{preview:{type:Boolean,default:!1},class:{type:null,default:null},style:{type:null,default:null},imageStyle:{type:null,default:null},imageClass:{type:null,default:null},previewButtonProps:{type:null,default:null},indicatorIcon:{type:String,default:void 0},previewIcon:{type:String,default:void 0},zoomInDisabled:{type:Boolean,default:!1},zoomOutDisabled:{type:Boolean,default:!1}},style:an,provide:function(){return{$pcImage:this,$parentInstance:this}}},It={name:"Image",extends:sn,inheritAttrs:!1,emits:["show","hide","error"],mask:null,data:function(){return{maskVisible:!1,previewVisible:!1,rotate:0,scale:1}},beforeUnmount:function(){this.mask&&H.clear(this.container)},methods:{maskRef:function(t){this.mask=t},toolbarRef:function(t){this.toolbarRef=t},onImageClick:function(){var t=this;this.preview&&(le(),this.maskVisible=!0,setTimeout(function(){t.previewVisible=!0},25))},onPreviewImageClick:function(){this.previewClick=!0},onMaskClick:function(t){var n=Rt(t.target,"data-pc-section-group","action")||t.target.closest('[data-pc-section-group="action"]');!this.previewClick&&!n&&(this.previewVisible=!1,this.rotate=0,this.scale=1),this.previewClick=!1},onMaskKeydown:function(t){var n=this;switch(t.code){case"Escape":this.hidePreview(),setTimeout(function(){Ht(n.$refs.previewButton)},200),t.preventDefault();break}},onError:function(){this.$emit("error")},rotateRight:function(){this.rotate+=90,this.previewClick=!0},rotateLeft:function(){this.rotate-=90,this.previewClick=!0},zoomIn:function(){this.scale=this.scale+.1,this.previewClick=!0},zoomOut:function(){this.scale=this.scale-.1,this.previewClick=!0},onBeforeEnter:function(){H.set("modal",this.mask,this.$primevue.config.zIndex.modal)},onEnter:function(){this.focus(),this.$emit("show")},onBeforeLeave:function(){!this.isUnstyled&&_(this.mask,"p-overlay-mask-leave-active")},onLeave:function(){vt(),this.$emit("hide")},onAfterLeave:function(t){H.clear(t),this.maskVisible=!1},focus:function(){var t=this.mask.querySelector("[autofocus]");t&&t.focus()},hidePreview:function(){this.previewVisible=!1,this.rotate=0,this.scale=1,vt()}},computed:{containerClass:function(){return[this.cx("root"),this.class]},rotateClass:function(){return"p-image-preview-rotate-"+this.rotate},imagePreviewStyle:function(){return{transform:"rotate("+this.rotate+"deg) scale("+this.scale+")"}},isZoomInDisabled:function(){return this.zoomInDisabled||this.scale>=1.5},isZoomOutDisabled:function(){return this.zoomOutDisabled||this.scale<=.5},rightAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.rotateRight:void 0},leftAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.rotateLeft:void 0},zoomInAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.zoomIn:void 0},zoomOutAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.zoomOut:void 0},zoomImageAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.zoomImage:void 0},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{Portal:se,EyeIcon:Lt,RefreshIcon:Bt,UndoIcon:Et,SearchMinusIcon:xt,SearchPlusIcon:At,TimesIcon:ae},directives:{focustrap:oe}};function V(e){"@babel/helpers - typeof";return V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(e)}function bt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,i)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bt(Object(n),!0).forEach(function(i){ln(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bt(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function ln(e,t,n){return(t=un(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function un(e){var t=dn(e,"string");return V(t)=="symbol"?t:t+""}function dn(e,t){if(V(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t);if(V(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var pn=["aria-label"],cn=["aria-modal"],fn=["aria-label"],mn=["aria-label"],hn=["disabled","aria-label"],vn=["disabled","aria-label"],gn=["aria-label"],bn=["src"];function yn(e,t,n,i,o,r){var d=I("RefreshIcon"),h=I("UndoIcon"),l=I("SearchMinusIcon"),p=I("SearchPlusIcon"),v=I("TimesIcon"),w=I("Portal"),k=jt("focustrap");return a(),c("span",u({class:r.containerClass,style:e.style},e.ptmi("root")),[y(e.$slots,"image",{errorCallback:r.onError},function(){return[s("img",u({style:e.imageStyle,class:e.imageClass,onError:t[0]||(t[0]=function(){return r.onError&&r.onError.apply(r,arguments)})},Z(Z({},e.$attrs),e.ptm("image"))),null,16)]}),e.preview?(a(),c("button",u({key:0,ref:"previewButton","aria-label":r.zoomImageAriaLabel,type:"button",class:e.cx("previewMask"),onClick:t[1]||(t[1]=function(){return r.onImageClick&&r.onImageClick.apply(r,arguments)})},Z(Z({},e.previewButtonProps),e.ptm("previewMask"))),[y(e.$slots,e.$slots.previewicon?"previewicon":"indicatoricon",{},function(){return[(a(),A(wt(e.previewIcon||e.indicatorIcon?"i":"EyeIcon"),u({class:[e.cx("previewIcon"),e.previewIcon]},e.ptm("previewIcon")),null,16,["class"]))]})],16,pn)):$("",!0),m(w,null,{default:g(function(){return[o.maskVisible?Ct((a(),c("div",u({key:0,ref:r.maskRef,role:"dialog",class:e.cx("mask"),"aria-modal":o.maskVisible,onClick:t[8]||(t[8]=function(){return r.onMaskClick&&r.onMaskClick.apply(r,arguments)}),onKeydown:t[9]||(t[9]=function(){return r.onMaskKeydown&&r.onMaskKeydown.apply(r,arguments)})},e.ptm("mask")),[s("div",u({class:e.cx("toolbar")},e.ptm("toolbar")),[s("button",u({class:e.cx("rotateRightButton"),onClick:t[2]||(t[2]=function(){return r.rotateRight&&r.rotateRight.apply(r,arguments)}),type:"button","aria-label":r.rightAriaLabel},e.ptm("rotateRightButton"),{"data-pc-group-section":"action"}),[y(e.$slots,"refresh",{},function(){return[m(d,M(O(e.ptm("rotateRightIcon"))),null,16)]})],16,fn),s("button",u({class:e.cx("rotateLeftButton"),onClick:t[3]||(t[3]=function(){return r.rotateLeft&&r.rotateLeft.apply(r,arguments)}),type:"button","aria-label":r.leftAriaLabel},e.ptm("rotateLeftButton"),{"data-pc-group-section":"action"}),[y(e.$slots,"undo",{},function(){return[m(h,M(O(e.ptm("rotateLeftIcon"))),null,16)]})],16,mn),s("button",u({class:e.cx("zoomOutButton"),onClick:t[4]||(t[4]=function(){return r.zoomOut&&r.zoomOut.apply(r,arguments)}),type:"button",disabled:r.isZoomOutDisabled,"aria-label":r.zoomOutAriaLabel},e.ptm("zoomOutButton"),{"data-pc-group-section":"action"}),[y(e.$slots,"zoomout",{},function(){return[m(l,M(O(e.ptm("zoomOutIcon"))),null,16)]})],16,hn),s("button",u({class:e.cx("zoomInButton"),onClick:t[5]||(t[5]=function(){return r.zoomIn&&r.zoomIn.apply(r,arguments)}),type:"button",disabled:r.isZoomInDisabled,"aria-label":r.zoomInAriaLabel},e.ptm("zoomInButton"),{"data-pc-group-section":"action"}),[y(e.$slots,"zoomin",{},function(){return[m(p,M(O(e.ptm("zoomInIcon"))),null,16)]})],16,vn),s("button",u({class:e.cx("closeButton"),type:"button",onClick:t[6]||(t[6]=function(){return r.hidePreview&&r.hidePreview.apply(r,arguments)}),"aria-label":r.closeAriaLabel,autofocus:""},e.ptm("closeButton"),{"data-pc-group-section":"action"}),[y(e.$slots,"close",{},function(){return[m(v,M(O(e.ptm("closeIcon"))),null,16)]})],16,gn)],16),m(F,u({name:"p-image-original",onBeforeEnter:r.onBeforeEnter,onEnter:r.onEnter,onLeave:r.onLeave,onBeforeLeave:r.onBeforeLeave,onAfterLeave:r.onAfterLeave},e.ptm("transition")),{default:g(function(){return[o.previewVisible?(a(),c("div",M(u({key:0},e.ptm("originalContainer"))),[y(e.$slots,e.$slots.original?"original":"preview",{class:x(e.cx("original")),style:Vt(r.imagePreviewStyle),previewCallback:r.onPreviewImageClick},function(){return[s("img",u({src:e.$attrs.src,class:e.cx("original"),style:r.imagePreviewStyle,onClick:t[7]||(t[7]=function(){return r.onPreviewImageClick&&r.onPreviewImageClick.apply(r,arguments)})},e.ptm("original")),null,16,bn)]})],16)):$("",!0)]}),_:3},16,["onBeforeEnter","onEnter","onLeave","onBeforeLeave","onAfterLeave"])],16,cn)),[[k]]):$("",!0)]}),_:3})],16)}It.render=yn;const $n={class:"chat-message"},wn={class:"message-avatar"},Cn={class:"message-content"},kn={class:"message-header"},_n={class:"message-author"},zn={key:0,class:"message-time"},Sn={key:0,class:"message-image"},Ln={key:0,class:"image-error"},Bn={key:1,class:"message-text"},xn=["innerHTML"],An=N({__name:"ChatMessage",props:{author:{},authorName:{},message:{},image:{},timestamp:{},isLoading:{type:Boolean,default:!1}},setup(e){const t=e,n=R(!0),i=R(!1),o=b(()=>t.author==="user"),r=b(()=>t.author==="guide"),d=b(()=>t.author==="user"?"U":t.author==="guide"&&t.authorName?t.authorName.charAt(0).toUpperCase():"G"),h=b(()=>t.author==="user"?"pi pi-user":(t.author==="guide","pi pi-compass")),l=b(()=>{}),p=b(()=>({"user-avatar":o.value,"guide-avatar":r.value})),v=b(()=>({"user-card":o.value,"guide-card":r.value})),w=b(()=>t.timestamp?.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),k=b(()=>t.message.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>").replace(/\n/g,"<br>"));return(lt,C)=>(a(),c("div",{class:x(["chat-message-wrapper",{"user-message":o.value,"guide-message":r.value}])},[m(F,{name:"message-fade",appear:""},{default:g(()=>[s("div",$n,[s("div",wn,[r.value?(a(),A(zt,{key:0,size:"48px"})):(a(),A(f(St),{key:1,label:d.value,icon:h.value,image:l.value,shape:"circle",size:"normal",class:x(p.value)},null,8,["label","icon","image","class"]))]),s("div",Cn,[s("div",kn,[s("span",_n,G(o.value?"Ty":e.authorName??"Przewodnik"),1),e.timestamp?(a(),c("small",zn,G(w.value),1)):$("",!0)]),e.image&&!e.isLoading?(a(),c("div",Sn,[m(f(It),{src:e.image,alt:`Image from ${e.author}`,preview:"",class:x(["landmark-image",{"image-loading":n.value}]),onLoad:C[0]||(C[0]=Ot=>n.value=!1),onError:C[1]||(C[1]=Ot=>i.value=!0)},null,8,["src","alt","class"]),i.value?(a(),c("div",Ln,[...C[2]||(C[2]=[s("i",{class:"pi pi-exclamation-triangle"},null,-1),s("span",null,"Failed to load image",-1)])])):$("",!0)])):e.message?(a(),c("div",Bn,[m(f(D),{class:x(["message-card",v.value])},{content:g(()=>[s("div",{class:"message-body",innerHTML:k.value},null,8,xn)]),_:1},8,["class"])])):$("",!0)])])]),_:1})],2))}}),En=W(An,[["__scopeId","data-v-28870c3e"]]);var In=`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`,Mn={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},Tn=S.extend({name:"progressspinner",style:In,classes:Mn}),Pn={name:"BaseProgressSpinner",extends:E,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:Tn,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},Mt={name:"ProgressSpinner",extends:Pn,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},Dn=["fill","stroke-width"];function On(e,t,n,i,o,r){return a(),c("div",u({class:e.cx("root"),role:"progressbar"},e.ptmi("root")),[(a(),c("svg",u({class:e.cx("spin"),viewBox:"25 25 50 50",style:r.svgStyle},e.ptm("spin")),[s("circle",u({class:e.cx("circle"),cx:"50",cy:"50",r:"20",fill:e.fill,"stroke-width":e.strokeWidth,strokeMiterlimit:"10"},e.ptm("circle")),null,16,Dn)],16))],16)}Mt.render=On;var Fn=`
    .p-scrollpanel-content-container {
        overflow: hidden;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
        float: left;
    }

    .p-scrollpanel-content {
        height: calc(100% + calc(2 * dt('scrollpanel.bar.size')));
        width: calc(100% + calc(2 * dt('scrollpanel.bar.size')));
        padding-inline: 0 calc(2 * dt('scrollpanel.bar.size'));
        padding-block: 0 calc(2 * dt('scrollpanel.bar.size'));
        position: relative;
        overflow: auto;
        box-sizing: border-box;
        scrollbar-width: none;
    }

    .p-scrollpanel-content::-webkit-scrollbar {
        display: none;
    }

    .p-scrollpanel-bar {
        position: relative;
        border-radius: dt('scrollpanel.bar.border.radius');
        z-index: 2;
        cursor: pointer;
        opacity: 0;
        outline-color: transparent;
        background: dt('scrollpanel.bar.background');
        border: 0 none;
        transition:
            outline-color dt('scrollpanel.transition.duration'),
            opacity dt('scrollpanel.transition.duration');
    }

    .p-scrollpanel-bar:focus-visible {
        box-shadow: dt('scrollpanel.bar.focus.ring.shadow');
        outline: dt('scrollpanel.barfocus.ring.width') dt('scrollpanel.bar.focus.ring.style') dt('scrollpanel.bar.focus.ring.color');
        outline-offset: dt('scrollpanel.barfocus.ring.offset');
    }

    .p-scrollpanel-bar-y {
        width: dt('scrollpanel.bar.size');
        inset-block-start: 0;
    }

    .p-scrollpanel-bar-x {
        height: dt('scrollpanel.bar.size');
        inset-block-end: 0;
    }

    .p-scrollpanel-hidden {
        visibility: hidden;
    }

    .p-scrollpanel:hover .p-scrollpanel-bar,
    .p-scrollpanel:active .p-scrollpanel-bar {
        opacity: 1;
    }

    .p-scrollpanel-grabbed {
        user-select: none;
    }
`,Hn={root:"p-scrollpanel p-component",contentContainer:"p-scrollpanel-content-container",content:"p-scrollpanel-content",barX:"p-scrollpanel-bar p-scrollpanel-bar-x",barY:"p-scrollpanel-bar p-scrollpanel-bar-y"},Rn=S.extend({name:"scrollpanel",style:Fn,classes:Hn}),jn={name:"BaseScrollPanel",extends:E,props:{step:{type:Number,default:5}},style:Rn,provide:function(){return{$pcScrollPanel:this,$parentInstance:this}}},Tt={name:"ScrollPanel",extends:jn,inheritAttrs:!1,initialized:!1,documentResizeListener:null,documentMouseMoveListener:null,documentMouseUpListener:null,frame:null,scrollXRatio:null,scrollYRatio:null,isXBarClicked:!1,isYBarClicked:!1,lastPageX:null,lastPageY:null,timer:null,outsideClickListener:null,data:function(){return{orientation:"vertical",lastScrollTop:0,lastScrollLeft:0}},mounted:function(){this.$el.offsetParent&&this.initialize()},updated:function(){!this.initialized&&this.$el.offsetParent&&this.initialize()},beforeUnmount:function(){this.unbindDocumentResizeListener(),this.frame&&window.cancelAnimationFrame(this.frame)},methods:{initialize:function(){this.moveBar(),this.bindDocumentResizeListener(),this.calculateContainerHeight()},calculateContainerHeight:function(){var t=getComputedStyle(this.$el),n=getComputedStyle(this.$refs.xBar),i=Ut(this.$el)-parseInt(n.height,10);t["max-height"]!=="none"&&i===0&&(this.$refs.content.offsetHeight+parseInt(n.height,10)>parseInt(t["max-height"],10)?this.$el.style.height=t["max-height"]:this.$el.style.height=this.$refs.content.offsetHeight+parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth)+"px")},moveBar:function(){var t=this;if(this.$refs.content){var n=this.$refs.content.scrollWidth,i=this.$refs.content.clientWidth,o=(this.$el.clientHeight-this.$refs.xBar.clientHeight)*-1;this.scrollXRatio=i/n;var r=this.$refs.content.scrollHeight,d=this.$refs.content.clientHeight,h=(this.$el.clientWidth-this.$refs.yBar.clientWidth)*-1;this.scrollYRatio=d/r;var l=Math.max(this.scrollYRatio*100,10);this.frame=this.requestAnimationFrame(function(){t.$refs.xBar&&(t.scrollXRatio>=1?(t.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","true"),!t.isUnstyled&&_(t.$refs.xBar,"p-scrollpanel-hidden")):(t.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","false"),!t.isUnstyled&&P(t.$refs.xBar,"p-scrollpanel-hidden"),t.$refs.xBar.style.cssText="width:"+Math.max(t.scrollXRatio*100,10)+"%; inset-inline-start:"+Math.abs(t.$refs.content.scrollLeft)/n*100+"%;bottom:"+o+"px;")),t.$refs.yBar&&(t.scrollYRatio>=1?(t.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","true"),!t.isUnstyled&&_(t.$refs.yBar,"p-scrollpanel-hidden")):(t.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","false"),!t.isUnstyled&&P(t.$refs.yBar,"p-scrollpanel-hidden"),t.$refs.yBar.style.cssText="height:"+l+"%; top: calc("+t.$refs.content.scrollTop/(r-d)*(100-l)+"% - "+t.$refs.xBar.clientHeight+"px); inset-inline-end:"+h+"px;"))})}},onYBarMouseDown:function(t){this.isYBarClicked=!0,this.$refs.yBar.focus(),this.lastPageY=t.pageY,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&_(this.$refs.yBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&_(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),t.preventDefault()},onXBarMouseDown:function(t){this.isXBarClicked=!0,this.$refs.xBar.focus(),this.lastPageX=t.pageX,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&_(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&_(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),t.preventDefault()},onScroll:function(t){this.lastScrollLeft!==t.target.scrollLeft?(this.lastScrollLeft=t.target.scrollLeft,this.orientation="horizontal"):this.lastScrollTop!==t.target.scrollTop&&(this.lastScrollTop=t.target.scrollTop,this.orientation="vertical"),this.moveBar()},onKeyDown:function(t){if(this.orientation==="vertical")switch(t.code){case"ArrowDown":{this.setTimer("scrollTop",this.step),t.preventDefault();break}case"ArrowUp":{this.setTimer("scrollTop",this.step*-1),t.preventDefault();break}case"ArrowLeft":case"ArrowRight":{t.preventDefault();break}}else if(this.orientation==="horizontal")switch(t.code){case"ArrowRight":{this.setTimer("scrollLeft",this.step),t.preventDefault();break}case"ArrowLeft":{this.setTimer("scrollLeft",this.step*-1),t.preventDefault();break}case"ArrowDown":case"ArrowUp":{t.preventDefault();break}}},onKeyUp:function(){this.clearTimer()},repeat:function(t,n){this.$refs.content[t]+=n,this.moveBar()},setTimer:function(t,n){var i=this;this.clearTimer(),this.timer=setTimeout(function(){i.repeat(t,n)},40)},clearTimer:function(){this.timer&&clearTimeout(this.timer)},onDocumentMouseMove:function(t){this.isXBarClicked?this.onMouseMoveForXBar(t):this.isYBarClicked?this.onMouseMoveForYBar(t):(this.onMouseMoveForXBar(t),this.onMouseMoveForYBar(t))},onMouseMoveForXBar:function(t){var n=this,i=t.pageX-this.lastPageX;this.lastPageX=t.pageX,this.frame=this.requestAnimationFrame(function(){n.$refs.content.scrollLeft+=i/n.scrollXRatio})},onMouseMoveForYBar:function(t){var n=this,i=t.pageY-this.lastPageY;this.lastPageY=t.pageY,this.frame=this.requestAnimationFrame(function(){n.$refs.content.scrollTop+=i/n.scrollYRatio})},onFocus:function(t){this.$refs.xBar.isSameNode(t.target)?this.orientation="horizontal":this.$refs.yBar.isSameNode(t.target)&&(this.orientation="vertical")},onBlur:function(){this.orientation==="horizontal"&&(this.orientation="vertical")},onDocumentMouseUp:function(){this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&P(this.$refs.yBar,"p-scrollpanel-grabbed"),this.$refs.xBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&P(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&P(document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1},requestAnimationFrame:function(t){var n=window.requestAnimationFrame||this.timeoutFrame;return n(t)},refresh:function(){this.moveBar()},scrollTop:function(t){var n=this.$refs.content.scrollHeight-this.$refs.content.clientHeight;t=t>n?n:t>0?t:0,this.$refs.content.scrollTop=t},timeoutFrame:function(t){setTimeout(t,0)},bindDocumentMouseListeners:function(){var t=this;this.documentMouseMoveListener||(this.documentMouseMoveListener=function(n){t.onDocumentMouseMove(n)},document.addEventListener("mousemove",this.documentMouseMoveListener)),this.documentMouseUpListener||(this.documentMouseUpListener=function(n){t.onDocumentMouseUp(n)},document.addEventListener("mouseup",this.documentMouseUpListener))},unbindDocumentMouseListeners:function(){this.documentMouseMoveListener&&(document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)},bindDocumentResizeListener:function(){var t=this;this.documentResizeListener||(this.documentResizeListener=function(){t.moveBar()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentResizeListener:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}},computed:{contentId:function(){return this.$id+"_content"}}},Vn=["id"],Un=["aria-controls","aria-valuenow"],Kn=["aria-controls","aria-valuenow"];function Nn(e,t,n,i,o,r){return a(),c("div",u({class:e.cx("root")},e.ptmi("root")),[s("div",u({class:e.cx("contentContainer")},e.ptm("contentContainer")),[s("div",u({ref:"content",id:r.contentId,class:e.cx("content"),onScroll:t[0]||(t[0]=function(){return r.onScroll&&r.onScroll.apply(r,arguments)}),onMouseenter:t[1]||(t[1]=function(){return r.moveBar&&r.moveBar.apply(r,arguments)})},e.ptm("content")),[y(e.$slots,"default")],16,Vn)],16),s("div",u({ref:"xBar",class:e.cx("barx"),tabindex:"0",role:"scrollbar","aria-orientation":"horizontal","aria-controls":r.contentId,"aria-valuenow":o.lastScrollLeft,onMousedown:t[2]||(t[2]=function(){return r.onXBarMouseDown&&r.onXBarMouseDown.apply(r,arguments)}),onKeydown:t[3]||(t[3]=function(d){return r.onKeyDown(d)}),onKeyup:t[4]||(t[4]=function(){return r.onKeyUp&&r.onKeyUp.apply(r,arguments)}),onFocus:t[5]||(t[5]=function(){return r.onFocus&&r.onFocus.apply(r,arguments)}),onBlur:t[6]||(t[6]=function(){return r.onBlur&&r.onBlur.apply(r,arguments)})},e.ptm("barx"),{"data-pc-group-section":"bar"}),null,16,Un),s("div",u({ref:"yBar",class:e.cx("bary"),tabindex:"0",role:"scrollbar","aria-orientation":"vertical","aria-controls":r.contentId,"aria-valuenow":o.lastScrollTop,onMousedown:t[7]||(t[7]=function(){return r.onYBarMouseDown&&r.onYBarMouseDown.apply(r,arguments)}),onKeydown:t[8]||(t[8]=function(d){return r.onKeyDown(d)}),onKeyup:t[9]||(t[9]=function(){return r.onKeyUp&&r.onKeyUp.apply(r,arguments)}),onFocus:t[10]||(t[10]=function(){return r.onFocus&&r.onFocus.apply(r,arguments)})},e.ptm("bary"),{"data-pc-group-section":"bar"}),null,16,Kn)],16)}Tt.render=Nn;const Wn={class:"chat-container"},Yn={key:0,class:"connection-status"},Xn={class:"status-content"},Zn={key:0,class:"chat-wrapper"},Gn={class:"messages-container"},qn={key:0,class:"typing-indicator"},Jn={class:"typing-avatar"},Qn=N({__name:"Chat",props:{messages:{},isTyping:{type:Boolean},isConnected:{type:Boolean},guideName:{}},setup(e){const t=e;return(n,i)=>(a(),c("div",Wn,[m(F,{name:"status-fade"},{default:g(()=>[e.isConnected?$("",!0):(a(),c("div",Yn,[m(f(D),{class:"status-card"},{content:g(()=>[s("div",Xn,[m(f(Mt),{size:"2rem","stroke-width":"3"}),i[0]||(i[0]=s("span",null,"Łączenie z przewodnikiem...",-1))])]),_:1})]))]),_:1}),m(F,{name:"chat-fade"},{default:g(()=>[e.isConnected?(a(),c("div",Zn,[m(f(Tt),{class:"chat-messages",pt:{wrapper:"chat-scroll-wrapper"}},{default:g(()=>[s("div",Gn,[m(Kt,{name:"message-list",tag:"div"},{default:g(()=>[(a(!0),c(st,null,kt(t.messages,o=>(a(),A(En,{key:o.id,author:o.author,"author-name":e.guideName,message:o.message,image:o.image,timestamp:o.timestamp},null,8,["author","author-name","message","image","timestamp"]))),128))]),_:1}),m(F,{name:"typing-fade"},{default:g(()=>[t.isTyping?(a(),c("div",qn,[s("div",Jn,[m(zt,{size:"32px"})]),m(f(D),{class:"typing-card"},{content:g(()=>[...i[1]||(i[1]=[s("div",{class:"typing-animation"},[s("div",{class:"typing-dots"},[s("div",{class:"dot"}),s("div",{class:"dot"}),s("div",{class:"dot"})]),s("span",{class:"typing-text"},"Przewodnik pisze...")],-1)])]),_:1})])):$("",!0)]),_:1})])]),_:1})])):$("",!0)]),_:1})]))}}),ti=W(Qn,[["__scopeId","data-v-9b5a45ad"]]);var ei={name:"BaseEditableHolder",extends:E,emits:["update:modelValue","value-change"],props:{modelValue:{type:null,default:void 0},defaultValue:{type:null,default:void 0},name:{type:String,default:void 0},invalid:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},formControl:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0},$pcForm:{default:void 0},$pcFormField:{default:void 0}},data:function(){return{d_value:this.defaultValue!==void 0?this.defaultValue:this.modelValue}},watch:{modelValue:{deep:!0,handler:function(t){this.d_value=t}},defaultValue:function(t){this.d_value=t},$formName:{immediate:!0,handler:function(t){var n,i;this.formField=((n=this.$pcForm)===null||n===void 0||(i=n.register)===null||i===void 0?void 0:i.call(n,t,this.$formControl))||{}}},$formControl:{immediate:!0,handler:function(t){var n,i;this.formField=((n=this.$pcForm)===null||n===void 0||(i=n.register)===null||i===void 0?void 0:i.call(n,this.$formName,t))||{}}},$formDefaultValue:{immediate:!0,handler:function(t){this.d_value!==t&&(this.d_value=t)}},$formValue:{immediate:!1,handler:function(t){var n;(n=this.$pcForm)!==null&&n!==void 0&&n.getFieldState(this.$formName)&&t!==this.d_value&&(this.d_value=t)}}},formField:{},methods:{writeValue:function(t,n){var i,o;this.controlled&&(this.d_value=t,this.$emit("update:modelValue",t)),this.$emit("value-change",t),(i=(o=this.formField).onChange)===null||i===void 0||i.call(o,{originalEvent:n,value:t})},findNonEmpty:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return n.find(ut)}},computed:{$filled:function(){return ut(this.d_value)},$invalid:function(){var t,n;return!this.$formNovalidate&&this.findNonEmpty(this.invalid,(t=this.$pcFormField)===null||t===void 0||(t=t.$field)===null||t===void 0?void 0:t.invalid,(n=this.$pcForm)===null||n===void 0||(n=n.getFieldState(this.$formName))===null||n===void 0?void 0:n.invalid)},$formName:function(){var t;return this.$formNovalidate?void 0:this.name||((t=this.$formControl)===null||t===void 0?void 0:t.name)},$formControl:function(){var t;return this.formControl||((t=this.$pcFormField)===null||t===void 0?void 0:t.formControl)},$formNovalidate:function(){var t;return(t=this.$formControl)===null||t===void 0?void 0:t.novalidate},$formDefaultValue:function(){var t,n;return this.findNonEmpty(this.d_value,(t=this.$pcFormField)===null||t===void 0?void 0:t.initialValue,(n=this.$pcForm)===null||n===void 0||(n=n.initialValues)===null||n===void 0?void 0:n[this.$formName])},$formValue:function(){var t,n;return this.findNonEmpty((t=this.$pcFormField)===null||t===void 0||(t=t.$field)===null||t===void 0?void 0:t.value,(n=this.$pcForm)===null||n===void 0||(n=n.getFieldState(this.$formName))===null||n===void 0?void 0:n.value)},controlled:function(){return this.$inProps.hasOwnProperty("modelValue")||!this.$inProps.hasOwnProperty("modelValue")&&!this.$inProps.hasOwnProperty("defaultValue")},filled:function(){return this.$filled}}},ni={name:"BaseInput",extends:ei,props:{size:{type:String,default:null},fluid:{type:Boolean,default:null},variant:{type:String,default:null}},inject:{$parentInstance:{default:void 0},$pcFluid:{default:void 0}},computed:{$variant:function(){var t;return(t=this.variant)!==null&&t!==void 0?t:this.$primevue.config.inputStyle||this.$primevue.config.inputVariant},$fluid:function(){var t;return(t=this.fluid)!==null&&t!==void 0?t:!!this.$pcFluid},hasFluid:function(){return this.$fluid}}},ii=`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`,ri={root:function(t){var n=t.instance,i=t.props;return["p-textarea p-component",{"p-filled":n.$filled,"p-textarea-resizable ":i.autoResize,"p-textarea-sm p-inputfield-sm":i.size==="small","p-textarea-lg p-inputfield-lg":i.size==="large","p-invalid":n.$invalid,"p-variant-filled":n.$variant==="filled","p-textarea-fluid":n.$fluid}]}},oi=S.extend({name:"textarea",style:ii,classes:ri}),ai={name:"BaseTextarea",extends:ni,props:{autoResize:Boolean},style:oi,provide:function(){return{$pcTextarea:this,$parentInstance:this}}};function U(e){"@babel/helpers - typeof";return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(e)}function si(e,t,n){return(t=li(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function li(e){var t=ui(e,"string");return U(t)=="symbol"?t:t+""}function ui(e,t){if(U(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t);if(U(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Pt={name:"Textarea",extends:ai,inheritAttrs:!1,observer:null,mounted:function(){var t=this;this.autoResize&&(this.observer=new ResizeObserver(function(){requestAnimationFrame(function(){t.resize()})}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){if(this.$el.offsetParent){var t=this.$el.style.height,n=parseInt(t)||0,i=this.$el.scrollHeight,o=!n||i>n,r=n&&i<n;r?(this.$el.style.height="auto",this.$el.style.height="".concat(this.$el.scrollHeight,"px")):o&&(this.$el.style.height="".concat(i,"px"))}},onInput:function(t){this.autoResize&&this.resize(),this.writeValue(t.target.value,t)}},computed:{attrs:function(){return u(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return _t(si({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},di=["value","name","disabled","aria-invalid","data-p"];function pi(e,t,n,i,o,r){return a(),c("textarea",u({class:e.cx("root"),value:e.d_value,name:e.name,disabled:e.disabled,"aria-invalid":e.invalid||void 0,"data-p":r.dataP,onInput:t[0]||(t[0]=function(){return r.onInput&&r.onInput.apply(r,arguments)})},r.attrs),null,16,di)}Pt.render=pi;var ci=`
    .p-inputgroup,
    .p-inputgroup .p-iconfield,
    .p-inputgroup .p-floatlabel,
    .p-inputgroup .p-iftalabel {
        display: flex;
        align-items: stretch;
        width: 100%;
    }

    .p-inputgroup .p-inputtext,
    .p-inputgroup .p-inputwrapper {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-inputgroupaddon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: dt('inputgroup.addon.padding');
        background: dt('inputgroup.addon.background');
        color: dt('inputgroup.addon.color');
        border-block-start: 1px solid dt('inputgroup.addon.border.color');
        border-block-end: 1px solid dt('inputgroup.addon.border.color');
        min-width: dt('inputgroup.addon.min.width');
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroupaddon + .p-inputgroupaddon {
        border-inline-start: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:last-child {
        border-inline-end: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:has(.p-button) {
        padding: 0;
        overflow: hidden;
    }

    .p-inputgroupaddon .p-button {
        border-radius: 0;
    }

    .p-inputgroup > .p-component,
    .p-inputgroup > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iconfield > .p-component,
    .p-inputgroup > .p-floatlabel > .p-component,
    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel > .p-component,
    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
        border-radius: 0;
        margin: 0;
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroup > .p-component:first-child,
    .p-inputgroup > .p-inputwrapper:first-child > .p-component,
    .p-inputgroup > .p-iconfield:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroupaddon:last-child,
    .p-inputgroup > .p-component:last-child,
    .p-inputgroup > .p-inputwrapper:last-child > .p-component,
    .p-inputgroup > .p-iconfield:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup .p-component:focus,
    .p-inputgroup .p-component.p-focus,
    .p-inputgroup .p-inputwrapper-focus,
    .p-inputgroup .p-component:focus ~ label,
    .p-inputgroup .p-component.p-focus ~ label,
    .p-inputgroup .p-inputwrapper-focus ~ label {
        z-index: 1;
    }

    .p-inputgroup > .p-button:not(.p-button-icon-only) {
        width: auto;
    }

    .p-inputgroup .p-iconfield + .p-iconfield .p-inputtext {
        border-inline-start: 0;
    }
`,fi={root:"p-inputgroup"},mi=S.extend({name:"inputgroup",style:ci,classes:fi}),hi={name:"BaseInputGroup",extends:E,style:mi,provide:function(){return{$pcInputGroup:this,$parentInstance:this}}},Dt={name:"InputGroup",extends:hi,inheritAttrs:!1};function vi(e,t,n,i,o,r){return a(),c("div",u({class:e.cx("root")},e.ptmi("root")),[y(e.$slots,"default")],16)}Dt.render=vi;const gi={class:"chat-input-fixed"},bi={class:"input-container"},yi=N({__name:"ChatInput",props:{modelValue:{},isTyping:{type:Boolean}},emits:["update:modelValue","send"],setup(e,{emit:t}){const n=e,i=t,o=b(()=>n.modelValue.trim().length>0&&!n.isTyping),r=()=>{o.value&&i("send")},d=()=>{i("update:modelValue",n.modelValue+`
`)};return(h,l)=>(a(),c("div",gi,[m(f(D),{class:"input-card"},{content:g(()=>[s("div",bi,[m(f(Dt),null,{default:g(()=>[m(f(Pt),{"model-value":e.modelValue,"onUpdate:modelValue":l[0]||(l[0]=p=>i("update:modelValue",p)),placeholder:"Zapytaj o ten zabytek...",rows:1,"auto-resize":!0,"max-rows":4,class:"chat-input",onKeydown:[dt(pt(r,["prevent"]),["enter"]),dt(pt(d,["shift","prevent"]),["enter"])],disabled:e.isTyping,"aria-label":"Wpisz swoją wiadomość do przewodnika"},null,8,["model-value","onKeydown","disabled"]),m(f(ue),{icon:e.isTyping?"pi pi-spin pi-spinner":"pi pi-send",severity:"primary",class:"send-button",disabled:!o.value,onClick:r,loading:e.isTyping},null,8,["icon","disabled","loading"])]),_:1}),l[1]||(l[1]=s("div",{class:"input-hints"},[s("small",{class:"hint-text"}," Zapytaj o historię, architekturę lub ciekawostki")],-1))])]),_:1})]))}}),$i=W(yi,[["__scopeId","data-v-c5338547"]]),wi=e=>{const{data:t,...n}=de();return{data:b(()=>t.value?.find(i=>i.id===f(e))),...n}},tt=(e,t,n)=>({id:`user-${n?.getTime()??Date.now()}`,author:t,message:e,timestamp:n??new Date,type:"text"}),Ci=e=>{const t=R([]),n=R(!1),{mutateAsync:i}=ct({mutationFn:async()=>{const{data:p}=await et.GET("/chats/{landmark}/history",{params:{path:{landmark:f(e).id}}});return p}}),o=async()=>{const{thumbnail_url:p,description:v}=f(e);p&&t.value.push({id:`initial-image-${Date.now()}`,author:"guide",message:"",image:p,type:"image"}),t.value.push({id:`initial-text-${Date.now()}`,author:"guide",message:"Cześć! Jestem Twoim przewodnikiem! Jak mogę Ci pomóc?",type:"text"});try{const lt=(await i())?.map(C=>tt(C.message,C.sender==="agent"?"guide":"user",new Date(C.timestamp)));t.value.push(...lt)}catch(k){console.error("History failed to load:",k)}n.value=!0},{mutate:r,isPending:d}=ct({onMutate:p=>{const v=tt(p,"user");t.value.push(v)},mutationFn:async p=>{const{data:v}=await et.POST("/chats/{landmark}/message",{body:{message:p},params:{path:{landmark:f(e).id}}});return v},onSuccess:p=>{const v=tt(p?.message,"guide",new Date);t.value.push(v)}}),h=()=>{Nt(()=>{const p=document.querySelector(".p-scrollpanel-content");p&&p.scrollTo({top:p.scrollHeight,behavior:"smooth"})})},l=b(()=>t.value[t.value.length-1]?.id);return{messages:t,isTyping:d,isConnected:n,connect:o,sendMessage:r,scrollToBottom:h,lastMessageId:l}};function K(e){"@babel/helpers - typeof";return K=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(e)}function ki(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,Si(i.key),i)}}function zi(e,t,n){return t&&_i(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Si(e){var t=Li(e,"string");return K(t)=="symbol"?t:t+""}function Li(e,t){if(K(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t);if(K(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Bi=(function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){};ki(this,e),this.element=t,this.listener=n}return zi(e,[{key:"bindScrollListener",value:function(){this.scrollableParents=Wt(this.element);for(var n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].addEventListener("scroll",this.listener)}},{key:"unbindScrollListener",value:function(){if(this.scrollableParents)for(var n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].removeEventListener("scroll",this.listener)}},{key:"destroy",value:function(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}])})(),xi=`
    .p-tooltip {
        position: absolute;
        display: none;
        max-width: dt('tooltip.max.width');
    }

    .p-tooltip-right,
    .p-tooltip-left {
        padding: 0 dt('tooltip.gutter');
    }

    .p-tooltip-top,
    .p-tooltip-bottom {
        padding: dt('tooltip.gutter') 0;
    }

    .p-tooltip-text {
        white-space: pre-line;
        word-break: break-word;
        background: dt('tooltip.background');
        color: dt('tooltip.color');
        padding: dt('tooltip.padding');
        box-shadow: dt('tooltip.shadow');
        border-radius: dt('tooltip.border.radius');
    }

    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }

    .p-tooltip-right .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter') 0;
        border-right-color: dt('tooltip.background');
    }

    .p-tooltip-left .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') 0 dt('tooltip.gutter') dt('tooltip.gutter');
        border-left-color: dt('tooltip.background');
    }

    .p-tooltip-top .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') 0 dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }

    .p-tooltip-bottom .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: 0 dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }
`,Ai={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},Ei=S.extend({name:"tooltip-directive",style:xi,classes:Ai}),Ii=re.extend({style:Ei});function Mi(e,t){return Oi(e)||Di(e,t)||Pi(e,t)||Ti()}function Ti(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pi(e,t){if(e){if(typeof e=="string")return yt(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?yt(e,t):void 0}}function yt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}function Di(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var i,o,r,d,h=[],l=!0,p=!1;try{if(r=(n=n.call(e)).next,t!==0)for(;!(l=(i=r.call(n)).done)&&(h.push(i.value),h.length!==t);l=!0);}catch(v){p=!0,o=v}finally{try{if(!l&&n.return!=null&&(d=n.return(),Object(d)!==d))return}finally{if(p)throw o}}return h}}function Oi(e){if(Array.isArray(e))return e}function $t(e,t,n){return(t=Fi(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fi(e){var t=Hi(e,"string");return z(t)=="symbol"?t:t+""}function Hi(e,t){if(z(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t);if(z(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function z(e){"@babel/helpers - typeof";return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(e)}var Ri=Ii.extend("tooltip",{beforeMount:function(t,n){var i,o=this.getTarget(t);if(o.$_ptooltipModifiers=this.getModifiers(n),n.value){if(typeof n.value=="string")o.$_ptooltipValue=n.value,o.$_ptooltipDisabled=!1,o.$_ptooltipEscape=!0,o.$_ptooltipClass=null,o.$_ptooltipFitContent=!0,o.$_ptooltipIdAttr=X("pv_id")+"_tooltip",o.$_ptooltipShowDelay=0,o.$_ptooltipHideDelay=0,o.$_ptooltipAutoHide=!0;else if(z(n.value)==="object"&&n.value){if(mt(n.value.value)||n.value.value.trim()==="")return;o.$_ptooltipValue=n.value.value,o.$_ptooltipDisabled=!!n.value.disabled===n.value.disabled?n.value.disabled:!1,o.$_ptooltipEscape=!!n.value.escape===n.value.escape?n.value.escape:!0,o.$_ptooltipClass=n.value.class||"",o.$_ptooltipFitContent=!!n.value.fitContent===n.value.fitContent?n.value.fitContent:!0,o.$_ptooltipIdAttr=n.value.id||X("pv_id")+"_tooltip",o.$_ptooltipShowDelay=n.value.showDelay||0,o.$_ptooltipHideDelay=n.value.hideDelay||0,o.$_ptooltipAutoHide=!!n.value.autoHide===n.value.autoHide?n.value.autoHide:!0}}else return;o.$_ptooltipZIndex=(i=n.instance.$primevue)===null||i===void 0||(i=i.config)===null||i===void 0||(i=i.zIndex)===null||i===void 0?void 0:i.tooltip,this.bindEvents(o,n),t.setAttribute("data-pd-tooltip",!0)},updated:function(t,n){var i=this.getTarget(t);if(i.$_ptooltipModifiers=this.getModifiers(n),this.unbindEvents(i),!!n.value){if(typeof n.value=="string")i.$_ptooltipValue=n.value,i.$_ptooltipDisabled=!1,i.$_ptooltipEscape=!0,i.$_ptooltipClass=null,i.$_ptooltipIdAttr=i.$_ptooltipIdAttr||X("pv_id")+"_tooltip",i.$_ptooltipShowDelay=0,i.$_ptooltipHideDelay=0,i.$_ptooltipAutoHide=!0,this.bindEvents(i,n);else if(z(n.value)==="object"&&n.value)if(mt(n.value.value)||n.value.value.trim()===""){this.unbindEvents(i,n);return}else i.$_ptooltipValue=n.value.value,i.$_ptooltipDisabled=!!n.value.disabled===n.value.disabled?n.value.disabled:!1,i.$_ptooltipEscape=!!n.value.escape===n.value.escape?n.value.escape:!0,i.$_ptooltipClass=n.value.class||"",i.$_ptooltipFitContent=!!n.value.fitContent===n.value.fitContent?n.value.fitContent:!0,i.$_ptooltipIdAttr=n.value.id||i.$_ptooltipIdAttr||X("pv_id")+"_tooltip",i.$_ptooltipShowDelay=n.value.showDelay||0,i.$_ptooltipHideDelay=n.value.hideDelay||0,i.$_ptooltipAutoHide=!!n.value.autoHide===n.value.autoHide?n.value.autoHide:!0,this.bindEvents(i,n)}},unmounted:function(t,n){var i=this.getTarget(t);this.hide(t,0),this.remove(i),this.unbindEvents(i,n),i.$_ptooltipScrollHandler&&(i.$_ptooltipScrollHandler.destroy(),i.$_ptooltipScrollHandler=null)},timer:void 0,methods:{bindEvents:function(t,n){var i=this,o=t.$_ptooltipModifiers;o.focus?(t.$_ptooltipFocusEvent=function(r){return i.onFocus(r,n)},t.$_ptooltipBlurEvent=this.onBlur.bind(this),t.addEventListener("focus",t.$_ptooltipFocusEvent),t.addEventListener("blur",t.$_ptooltipBlurEvent)):(t.$_ptooltipMouseEnterEvent=function(r){return i.onMouseEnter(r,n)},t.$_ptooltipMouseLeaveEvent=this.onMouseLeave.bind(this),t.$_ptooltipClickEvent=this.onClick.bind(this),t.addEventListener("mouseenter",t.$_ptooltipMouseEnterEvent),t.addEventListener("mouseleave",t.$_ptooltipMouseLeaveEvent),t.addEventListener("click",t.$_ptooltipClickEvent)),t.$_ptooltipKeydownEvent=this.onKeydown.bind(this),t.addEventListener("keydown",t.$_ptooltipKeydownEvent),t.$_pWindowResizeEvent=this.onWindowResize.bind(this,t)},unbindEvents:function(t){var n=t.$_ptooltipModifiers;n.focus?(t.removeEventListener("focus",t.$_ptooltipFocusEvent),t.$_ptooltipFocusEvent=null,t.removeEventListener("blur",t.$_ptooltipBlurEvent),t.$_ptooltipBlurEvent=null):(t.removeEventListener("mouseenter",t.$_ptooltipMouseEnterEvent),t.$_ptooltipMouseEnterEvent=null,t.removeEventListener("mouseleave",t.$_ptooltipMouseLeaveEvent),t.$_ptooltipMouseLeaveEvent=null,t.removeEventListener("click",t.$_ptooltipClickEvent),t.$_ptooltipClickEvent=null),t.removeEventListener("keydown",t.$_ptooltipKeydownEvent),window.removeEventListener("resize",t.$_pWindowResizeEvent),t.$_ptooltipId&&this.remove(t)},bindScrollListener:function(t){var n=this;t.$_ptooltipScrollHandler||(t.$_ptooltipScrollHandler=new Bi(t,function(){n.hide(t)})),t.$_ptooltipScrollHandler.bindScrollListener()},unbindScrollListener:function(t){t.$_ptooltipScrollHandler&&t.$_ptooltipScrollHandler.unbindScrollListener()},onMouseEnter:function(t,n){var i=t.currentTarget,o=i.$_ptooltipShowDelay;this.show(i,n,o)},onMouseLeave:function(t){var n=t.currentTarget,i=n.$_ptooltipHideDelay,o=n.$_ptooltipAutoHide;if(o)this.hide(n,i);else{var r=T(t.target,"data-pc-name")==="tooltip"||T(t.target,"data-pc-section")==="arrow"||T(t.target,"data-pc-section")==="text"||T(t.relatedTarget,"data-pc-name")==="tooltip"||T(t.relatedTarget,"data-pc-section")==="arrow"||T(t.relatedTarget,"data-pc-section")==="text";!r&&this.hide(n,i)}},onFocus:function(t,n){var i=t.currentTarget,o=i.$_ptooltipShowDelay;this.show(i,n,o)},onBlur:function(t){var n=t.currentTarget,i=n.$_ptooltipHideDelay;this.hide(n,i)},onClick:function(t){var n=t.currentTarget,i=n.$_ptooltipHideDelay;this.hide(n,i)},onKeydown:function(t){var n=t.currentTarget,i=n.$_ptooltipHideDelay;t.code==="Escape"&&this.hide(t.currentTarget,i)},onWindowResize:function(t){Jt()||this.hide(t),window.removeEventListener("resize",t.$_pWindowResizeEvent)},tooltipActions:function(t,n){if(!(t.$_ptooltipDisabled||!Gt(t)||!t.$_ptooltipPendingShow)){t.$_ptooltipPendingShow=!1;var i=this.create(t,n);this.align(t),!this.isUnstyled()&&qt(i,250);var o=this;window.addEventListener("resize",t.$_pWindowResizeEvent),i.addEventListener("mouseleave",function r(){o.hide(t),i.removeEventListener("mouseleave",r),t.removeEventListener("mouseenter",t.$_ptooltipMouseEnterEvent),setTimeout(function(){return t.addEventListener("mouseenter",t.$_ptooltipMouseEnterEvent)},50)}),this.bindScrollListener(t),H.set("tooltip",i,t.$_ptooltipZIndex)}},show:function(t,n,i){var o=this;i!==void 0?(this.timer=setTimeout(function(){return o.tooltipActions(t,n)},i),t.$_ptooltipPendingShow=!0):(this.tooltipActions(t,n),t.$_ptooltipPendingShow=!1)},tooltipRemoval:function(t){this.remove(t),this.unbindScrollListener(t),window.removeEventListener("resize",t.$_pWindowResizeEvent)},hide:function(t,n){var i=this;clearTimeout(this.timer),t.$_ptooltipPendingShow=!1,n!==void 0?setTimeout(function(){return i.tooltipRemoval(t)},n):this.tooltipRemoval(t)},getTooltipElement:function(t){return document.getElementById(t.$_ptooltipId)},getArrowElement:function(t){var n=this.getTooltipElement(t);return ft(n,'[data-pc-section="arrow"]')},create:function(t){var n=t.$_ptooltipModifiers,i=J("div",{class:!this.isUnstyled()&&this.cx("arrow"),"p-bind":this.ptm("arrow",{context:n})}),o=J("div",{class:!this.isUnstyled()&&this.cx("text"),"p-bind":this.ptm("text",{context:n})});t.$_ptooltipEscape?(o.innerHTML="",o.appendChild(document.createTextNode(t.$_ptooltipValue))):o.innerHTML=t.$_ptooltipValue;var r=J("div",$t($t({id:t.$_ptooltipIdAttr,role:"tooltip",style:{display:"inline-block",width:t.$_ptooltipFitContent?"fit-content":void 0,pointerEvents:!this.isUnstyled()&&t.$_ptooltipAutoHide&&"none"},class:[!this.isUnstyled()&&this.cx("root"),t.$_ptooltipClass]},this.$attrSelector,""),"p-bind",this.ptm("root",{context:n})),i,o);return document.body.appendChild(r),t.$_ptooltipId=r.id,this.$el=r,r},remove:function(t){if(t){var n=this.getTooltipElement(t);n&&n.parentElement&&(H.clear(n),document.body.removeChild(n)),t.$_ptooltipId=null}},align:function(t){var n=t.$_ptooltipModifiers;n.top?(this.alignTop(t),this.isOutOfBounds(t)&&(this.alignBottom(t),this.isOutOfBounds(t)&&this.alignTop(t))):n.left?(this.alignLeft(t),this.isOutOfBounds(t)&&(this.alignRight(t),this.isOutOfBounds(t)&&(this.alignTop(t),this.isOutOfBounds(t)&&(this.alignBottom(t),this.isOutOfBounds(t)&&this.alignLeft(t))))):n.bottom?(this.alignBottom(t),this.isOutOfBounds(t)&&(this.alignTop(t),this.isOutOfBounds(t)&&this.alignBottom(t))):(this.alignRight(t),this.isOutOfBounds(t)&&(this.alignLeft(t),this.isOutOfBounds(t)&&(this.alignTop(t),this.isOutOfBounds(t)&&(this.alignBottom(t),this.isOutOfBounds(t)&&this.alignRight(t)))))},getHostOffset:function(t){var n=t.getBoundingClientRect(),i=n.left+Xt(),o=n.top+Zt();return{left:i,top:o}},alignRight:function(t){this.preAlign(t,"right");var n=this.getTooltipElement(t),i=this.getArrowElement(t),o=this.getHostOffset(t),r=o.left+L(t),d=o.top+(B(t)-B(n))/2;n.style.left=r+"px",n.style.top=d+"px",i.style.top="50%",i.style.right=null,i.style.bottom=null,i.style.left="0"},alignLeft:function(t){this.preAlign(t,"left");var n=this.getTooltipElement(t),i=this.getArrowElement(t),o=this.getHostOffset(t),r=o.left-L(n),d=o.top+(B(t)-B(n))/2;n.style.left=r+"px",n.style.top=d+"px",i.style.top="50%",i.style.right="0",i.style.bottom=null,i.style.left=null},alignTop:function(t){this.preAlign(t,"top");var n=this.getTooltipElement(t),i=this.getArrowElement(t),o=L(n),r=L(t),d=q(),h=d.width,l=this.getHostOffset(t),p=l.left+(r-o)/2,v=l.top-B(n);p<0?p=0:p+o>h&&(p=Math.floor(l.left+r-o)),n.style.left=p+"px",n.style.top=v+"px";var w=l.left-this.getHostOffset(n).left+r/2;i.style.top=null,i.style.right=null,i.style.bottom="0",i.style.left=w+"px"},alignBottom:function(t){this.preAlign(t,"bottom");var n=this.getTooltipElement(t),i=this.getArrowElement(t),o=L(n),r=L(t),d=q(),h=d.width,l=this.getHostOffset(t),p=l.left+(r-o)/2,v=l.top+B(t);p<0?p=0:p+o>h&&(p=Math.floor(l.left+r-o)),n.style.left=p+"px",n.style.top=v+"px";var w=l.left-this.getHostOffset(n).left+r/2;i.style.top="0",i.style.right=null,i.style.bottom=null,i.style.left=w+"px"},preAlign:function(t,n){var i=this.getTooltipElement(t);i.style.left="-999px",i.style.top="-999px",P(i,"p-tooltip-".concat(i.$_ptooltipPosition)),!this.isUnstyled()&&_(i,"p-tooltip-".concat(n)),i.$_ptooltipPosition=n,i.setAttribute("data-p-position",n)},isOutOfBounds:function(t){var n=this.getTooltipElement(t),i=n.getBoundingClientRect(),o=i.top,r=i.left,d=L(n),h=B(n),l=q();return r+d>l.width||r<0||o<0||o+h>l.height},getTarget:function(t){var n;return Yt(t,"p-inputwrapper")&&(n=ft(t,"input"))!==null&&n!==void 0?n:t},getModifiers:function(t){return t.modifiers&&Object.keys(t.modifiers).length?t.modifiers:t.arg&&z(t.arg)==="object"?Object.entries(t.arg).reduce(function(n,i){var o=Mi(i,2),r=o[0],d=o[1];return(r==="event"||r==="position")&&(n[d]=!0),n},{}):{}}}});const ji={class:"guides-stats"},Vi=N({__name:"GuidesStats",props:{rejewski_visits_count:{},kazimierz_wielki_visits_count:{},twardowski_visits_count:{}},setup(e){const t=e,n=b(()=>t.rejewski_visits_count+t.kazimierz_wielki_visits_count+t.twardowski_visits_count),i=d=>n.value===0?0:Math.round(d/n.value*100),o=`Liczba wizyt z przewodnikiem:
- Marian Rejewski: ${t.rejewski_visits_count}
- Król Kazimierz Wielki: ${t.kazimierz_wielki_visits_count}
- Pan Twardowski: ${t.twardowski_visits_count}
`,r=b(()=>[{label:"Marian Rejewski",visits:t.rejewski_visits_count,color:Q.rejewski,percentage:i(t.rejewski_visits_count)},{label:"Król Kazimierz Wielki",visits:t.kazimierz_wielki_visits_count,color:Q.kazimierz_wielki,percentage:i(t.kazimierz_wielki_visits_count)},{label:"Pan Twardowski",visits:t.twardowski_visits_count,color:Q.twardowski,percentage:i(t.twardowski_visits_count)}].sort((d,h)=>h.visits-d.visits));return(d,h)=>{const l=Ri;return Ct((a(),c("div",ji,[(a(!0),c(st,null,kt(r.value,p=>(a(),c("div",{class:x(["guides-stats__item",`guides-stats__item--${p.color}`]),key:p.label},G(p.percentage.toFixed(0))+"% ",3))),128))])),[[l,o,void 0,{bottom:!0}]])}}}),Ui=W(Vi,[["__scopeId","data-v-4b81f3ad"]]),Ki={class:"landmark-view"},Ni={class:"landmark-content"},Wi={key:1,class:"chat-placeholder"},Yi=N({__name:"[landmarkId]",setup(e){const t=te(),n=Qt(),i=b(()=>Number(t.params.landmarkId)),{data:o,isLoading:r}=wi(i),d=R(""),h=b(()=>{const v={rejewski:"Marian Rejewski",kazimierz_wielki:"Król Kazimierz Wielki",twardowski:"Pan Twardowski"};return n.guide?v[n.guide]:"Virtual Guide"}),l=Ci(o),p=()=>{l&&d.value.trim()&&(l.sendMessage(d.value),d.value="",l.scrollToBottom())};return ee(()=>{t.query.visited&&et.POST("/visits",{body:{landmark_id:i.value}})}),ht(l.lastMessageId,()=>{l.scrollToBottom()}),ht(()=>o.value,v=>{v&&l.connect()},{immediate:!0}),(v,w)=>(a(),c(st,null,[m(Ft,{title:f(o)?.name||"Wczytywanie",subtitle:f(o)?.localization_name,back:""},{default:g(()=>[m(Ui,{kazimierz_wielki_visits_count:f(o)?.kazimierz_wielki_visits_count??0,twardowski_visits_count:f(o)?.twardowski_visits_count??0,rejewski_visits_count:f(o)?.rejewski_visits_count??0},null,8,["kazimierz_wielki_visits_count","twardowski_visits_count","rejewski_visits_count"])]),_:1},8,["title","subtitle"]),m(ie,null,{default:g(()=>[m(ne,{loading:f(r)},{default:g(()=>[s("div",Ki,[s("div",Ni,[f(o)&&f(l)?(a(),A(ti,{key:0,messages:f(l).messages.value,"guide-name":h.value,"is-typing":f(l).isTyping.value,"is-connected":f(l).isConnected.value},null,8,["messages","guide-name","is-typing","is-connected"])):(a(),c("div",Wi,[m(f(D),null,{content:g(()=>[...w[1]||(w[1]=[s("div",{class:"placeholder-content"},[s("i",{class:"pi pi-comments"}),s("p",null,"Ładowanie interfejsu czatu...")],-1)])]),_:1})]))])])]),_:1},8,["loading"]),f(o)&&f(l)?(a(),A($i,{key:0,modelValue:d.value,"onUpdate:modelValue":w[0]||(w[0]=k=>d.value=k),"is-typing":f(l).isTyping.value,onSend:p},null,8,["modelValue","is-typing"])):$("",!0)]),_:1})],64))}}),ir=W(Yi,[["__scopeId","data-v-1d8e9558"]]);export{ir as default};
