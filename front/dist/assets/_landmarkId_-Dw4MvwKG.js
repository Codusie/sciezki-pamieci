import{B as k,c as p,o as l,r as y,a as x,b as h,m as d,t as G,n as L,d as $e,e as s,W as C,f as De,_ as Fe,g as A,h as He,i as m,w as g,j as Ce,k as M,l as P,T as O,p as Re,q as U,s as F,u as b,v as N,F as Z,P as T,x as je,y as Ve,z as _e,A as ue,C as de,D as pe,E as X,G as ce,H as re,I as Ue,J as Ne,R as Ke,K as fe,L as S,M as z,N as Q,O as We,$ as Ye,U as ee,Q as qe,S as Xe,Y as Ge,V as E,X as me,Z as Ze,a0 as Je,a1 as Qe,a2 as he,a3 as et}from"./index-4E9G_ebQ.js";import{H as tt}from"./Header-7dvsbwL2.js";import{L as nt}from"./Layout-Bdf5i-Zs.js";import{s as B,f as ke,B as rt,a as Y}from"./index-DyNroI4n.js";import{s as K,F as it,a as ot,b as at,u as ve,x as D,c as st,d as lt}from"./index-i9ZJzoCV.js";import{G as Se,u as ut}from"./useLandmarks-B6EHJ6ly.js";import{G as te}from"./twardowski-BOSaduA2.js";import"./Button-BKbHqqkW.js";import"./index-AQVWxiIX.js";var dt=`
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
`,pt={root:function(e){var n=e.props;return["p-avatar p-component",{"p-avatar-image":n.image!=null,"p-avatar-circle":n.shape==="circle","p-avatar-lg":n.size==="large","p-avatar-xl":n.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},ct=k.extend({name:"avatar",style:dt,classes:pt}),ft={name:"BaseAvatar",extends:B,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:ct,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function H(t){"@babel/helpers - typeof";return H=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(t)}function ge(t,e,n){return(e=mt(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function mt(t){var e=ht(t,"string");return H(e)=="symbol"?e:e+""}function ht(t,e){if(H(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(H(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ze={name:"Avatar",extends:ft,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}},computed:{dataP:function(){return ke(ge(ge({},this.shape,this.shape),this.size,this.size))}}},vt=["aria-labelledby","aria-label","data-p"],gt=["data-p"],bt=["data-p"],yt=["src","alt","data-p"];function wt(t,e,n,r,o,i){return l(),p("div",d({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root"),{"data-p":i.dataP}),[y(t.$slots,"default",{},function(){return[t.label?(l(),p("span",d({key:0,class:t.cx("label")},t.ptm("label"),{"data-p":i.dataP}),G(t.label),17,gt)):t.$slots.icon?(l(),x($e(t.$slots.icon),{key:1,class:L(t.cx("icon"))},null,8,["class"])):t.icon?(l(),p("span",d({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon"),{"data-p":i.dataP}),null,16,bt)):t.image?(l(),p("img",d({key:3,src:t.image,alt:t.ariaLabel,onError:e[0]||(e[0]=function(){return i.onError&&i.onError.apply(i,arguments)})},t.ptm("image"),{"data-p":i.dataP}),null,16,yt)):h("",!0)]})],16,vt)}ze.render=wt;var $t=`
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
`,Ct={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},_t=k.extend({name:"card",style:$t,classes:Ct}),kt={name:"BaseCard",extends:B,style:_t,provide:function(){return{$pcCard:this,$parentInstance:this}}},W={name:"Card",extends:kt,inheritAttrs:!1};function St(t,e,n,r,o,i){return l(),p("div",d({class:t.cx("root")},t.ptmi("root")),[t.$slots.header?(l(),p("div",d({key:0,class:t.cx("header")},t.ptm("header")),[y(t.$slots,"header")],16)):h("",!0),s("div",d({class:t.cx("body")},t.ptm("body")),[t.$slots.title||t.$slots.subtitle?(l(),p("div",d({key:0,class:t.cx("caption")},t.ptm("caption")),[t.$slots.title?(l(),p("div",d({key:0,class:t.cx("title")},t.ptm("title")),[y(t.$slots,"title")],16)):h("",!0),t.$slots.subtitle?(l(),p("div",d({key:1,class:t.cx("subtitle")},t.ptm("subtitle")),[y(t.$slots,"subtitle")],16)):h("",!0)],16)):h("",!0),s("div",d({class:t.cx("content")},t.ptm("content")),[y(t.$slots,"content")],16),t.$slots.footer?(l(),p("div",d({key:1,class:t.cx("footer")},t.ptm("footer")),[y(t.$slots,"footer")],16)):h("",!0)],16)],16)}W.render=St;var Le={name:"EyeIcon",extends:K};function zt(t){return It(t)||Bt(t)||xt(t)||Lt()}function Lt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xt(t,e){if(t){if(typeof t=="string")return ie(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ie(t,e):void 0}}function Bt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function It(t){if(Array.isArray(t))return ie(t)}function ie(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function At(t,e,n,r,o,i){return l(),p("svg",d({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),zt(e[0]||(e[0]=[s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z",fill:"currentColor"},null,-1)])),16)}Le.render=At;var xe={name:"RefreshIcon",extends:K};function Mt(t){return Ot(t)||Pt(t)||Tt(t)||Et()}function Et(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tt(t,e){if(t){if(typeof t=="string")return oe(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?oe(t,e):void 0}}function Pt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ot(t){if(Array.isArray(t))return oe(t)}function oe(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Dt(t,e,n,r,o,i){return l(),p("svg",d({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),Mt(e[0]||(e[0]=[s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.77051 5.96336C6.84324 5.99355 6.92127 6.00891 7.00002 6.00854C7.07877 6.00891 7.1568 5.99355 7.22953 5.96336C7.30226 5.93317 7.36823 5.88876 7.42357 5.83273L9.82101 3.43529C9.93325 3.32291 9.99629 3.17058 9.99629 3.01175C9.99629 2.85292 9.93325 2.70058 9.82101 2.5882L7.42357 0.190763C7.3687 0.131876 7.30253 0.0846451 7.22901 0.0518865C7.15549 0.019128 7.07612 0.00151319 6.99564 9.32772e-05C6.91517 -0.00132663 6.83523 0.0134773 6.7606 0.0436218C6.68597 0.0737664 6.61817 0.118634 6.56126 0.175548C6.50435 0.232462 6.45948 0.300257 6.42933 0.374888C6.39919 0.449519 6.38439 0.529456 6.38581 0.609933C6.38722 0.690409 6.40484 0.769775 6.4376 0.843296C6.47036 0.916817 6.51759 0.982986 6.57647 1.03786L7.95103 2.41241H6.99998C5.46337 2.41241 3.98969 3.02283 2.90314 4.10938C1.81659 5.19593 1.20618 6.66961 1.20618 8.20622C1.20618 9.74283 1.81659 11.2165 2.90314 12.3031C3.98969 13.3896 5.46337 14 6.99998 14C8.53595 13.9979 10.0084 13.3868 11.0945 12.3007C12.1806 11.2146 12.7917 9.74218 12.7938 8.20622C12.7938 8.04726 12.7306 7.89481 12.6182 7.78241C12.5058 7.67001 12.3534 7.60686 12.1944 7.60686C12.0355 7.60686 11.883 7.67001 11.7706 7.78241C11.6582 7.89481 11.5951 8.04726 11.5951 8.20622C11.5951 9.11504 11.3256 10.0035 10.8207 10.7591C10.3157 11.5148 9.59809 12.1037 8.75845 12.4515C7.9188 12.7993 6.99489 12.8903 6.10353 12.713C5.21217 12.5357 4.3934 12.0981 3.75077 11.4554C3.10813 10.8128 2.67049 9.99404 2.49319 9.10268C2.31589 8.21132 2.40688 7.2874 2.75468 6.44776C3.10247 5.60811 3.69143 4.89046 4.44709 4.38554C5.20275 3.88063 6.09116 3.61113 6.99998 3.61113H7.95098L6.57647 4.98564C6.46423 5.09802 6.40119 5.25035 6.40119 5.40918C6.40119 5.56801 6.46423 5.72035 6.57647 5.83273C6.63181 5.88876 6.69778 5.93317 6.77051 5.96336Z",fill:"currentColor"},null,-1)])),16)}xe.render=Dt;var Be={name:"SearchMinusIcon",extends:K};function Ft(t){return Vt(t)||jt(t)||Rt(t)||Ht()}function Ht(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rt(t,e){if(t){if(typeof t=="string")return ae(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ae(t,e):void 0}}function jt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Vt(t){if(Array.isArray(t))return ae(t)}function ae(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Ut(t,e,n,r,o,i){return l(),p("svg",d({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),Ft(e[0]||(e[0]=[s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.0208 12.0411C4.83005 12.0411 3.66604 11.688 2.67596 11.0265C1.68589 10.3649 0.914216 9.42464 0.458534 8.32452C0.00285271 7.22441 -0.116374 6.01388 0.11593 4.84601C0.348235 3.67813 0.921637 2.60537 1.76363 1.76338C2.60562 0.921393 3.67838 0.34799 4.84625 0.115686C6.01412 -0.116618 7.22466 0.00260857 8.32477 0.45829C9.42488 0.913972 10.3652 1.68564 11.0267 2.67572C11.6883 3.66579 12.0414 4.8298 12.0414 6.02056C12.0395 7.41563 11.5542 8.76029 10.6783 9.8305L13.8244 12.9765C13.9367 13.089 13.9997 13.2414 13.9997 13.4003C13.9997 13.5592 13.9367 13.7116 13.8244 13.8241C13.769 13.8801 13.703 13.9245 13.6302 13.9548C13.5575 13.985 13.4794 14.0003 13.4006 14C13.3218 14.0003 13.2437 13.985 13.171 13.9548C13.0982 13.9245 13.0322 13.8801 12.9768 13.8241L9.83082 10.678C8.76059 11.5539 7.4159 12.0393 6.0208 12.0411ZM6.0208 1.20731C5.07199 1.20731 4.14449 1.48867 3.35559 2.0158C2.56669 2.54292 1.95181 3.29215 1.58872 4.16874C1.22562 5.04532 1.13062 6.00989 1.31572 6.94046C1.50083 7.87104 1.95772 8.72583 2.62863 9.39674C3.29954 10.0676 4.15433 10.5245 5.0849 10.7096C6.01548 10.8947 6.98005 10.7997 7.85663 10.4367C8.73322 10.0736 9.48244 9.45868 10.0096 8.66978C10.5367 7.88088 10.8181 6.95337 10.8181 6.00457C10.8181 4.73226 10.3126 3.51206 9.41297 2.6124C8.51331 1.71274 7.29311 1.20731 6.0208 1.20731ZM4.00591 6.60422H8.00362C8.16266 6.60422 8.31518 6.54104 8.42764 6.42859C8.5401 6.31613 8.60328 6.1636 8.60328 6.00456C8.60328 5.84553 8.5401 5.693 8.42764 5.58054C8.31518 5.46809 8.16266 5.40491 8.00362 5.40491H4.00591C3.84687 5.40491 3.69434 5.46809 3.58189 5.58054C3.46943 5.693 3.40625 5.84553 3.40625 6.00456C3.40625 6.1636 3.46943 6.31613 3.58189 6.42859C3.69434 6.54104 3.84687 6.60422 4.00591 6.60422Z",fill:"currentColor"},null,-1)])),16)}Be.render=Ut;var Ie={name:"SearchPlusIcon",extends:K};function Nt(t){return qt(t)||Yt(t)||Wt(t)||Kt()}function Kt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wt(t,e){if(t){if(typeof t=="string")return se(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?se(t,e):void 0}}function Yt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function qt(t){if(Array.isArray(t))return se(t)}function se(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Xt(t,e,n,r,o,i){return l(),p("svg",d({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),Nt(e[0]||(e[0]=[s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.67596 11.0265C3.66604 11.688 4.83005 12.0411 6.0208 12.0411C6.81143 12.0411 7.59432 11.8854 8.32477 11.5828C8.86999 11.357 9.37802 11.0526 9.83311 10.6803L12.9768 13.8241C13.0322 13.8801 13.0982 13.9245 13.171 13.9548C13.2437 13.985 13.3218 14.0003 13.4006 14C13.4794 14.0003 13.5575 13.985 13.6302 13.9548C13.703 13.9245 13.769 13.8801 13.8244 13.8241C13.9367 13.7116 13.9997 13.5592 13.9997 13.4003C13.9997 13.2414 13.9367 13.089 13.8244 12.9765L10.6806 9.8328C11.0529 9.37773 11.3572 8.86972 11.5831 8.32452C11.8856 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0267 2.67572C10.3652 1.68564 9.42488 0.913972 8.32477 0.45829C7.22466 0.00260857 6.01412 -0.116618 4.84625 0.115686C3.67838 0.34799 2.60562 0.921393 1.76363 1.76338C0.921637 2.60537 0.348235 3.67813 0.11593 4.84601C-0.116374 6.01388 0.00285271 7.22441 0.458534 8.32452C0.914216 9.42464 1.68589 10.3649 2.67596 11.0265ZM3.35559 2.0158C4.14449 1.48867 5.07199 1.20731 6.0208 1.20731C7.29311 1.20731 8.51331 1.71274 9.41297 2.6124C10.3126 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5367 7.88088 10.0096 8.66978C9.48244 9.45868 8.73322 10.0736 7.85663 10.4367C6.98005 10.7997 6.01548 10.8947 5.0849 10.7096C4.15433 10.5245 3.29954 10.0676 2.62863 9.39674C1.95772 8.72583 1.50083 7.87104 1.31572 6.94046C1.13062 6.00989 1.22562 5.04532 1.58872 4.16874C1.95181 3.29215 2.56669 2.54292 3.35559 2.0158ZM6.00481 8.60309C5.84641 8.60102 5.69509 8.53718 5.58308 8.42517C5.47107 8.31316 5.40722 8.16183 5.40515 8.00344V6.60422H4.00591C3.84687 6.60422 3.69434 6.54104 3.58189 6.42859C3.46943 6.31613 3.40625 6.1636 3.40625 6.00456C3.40625 5.84553 3.46943 5.693 3.58189 5.58054C3.69434 5.46809 3.84687 5.40491 4.00591 5.40491H5.40515V4.00572C5.40515 3.84668 5.46833 3.69416 5.58079 3.5817C5.69324 3.46924 5.84577 3.40607 6.00481 3.40607C6.16385 3.40607 6.31637 3.46924 6.42883 3.5817C6.54129 3.69416 6.60447 3.84668 6.60447 4.00572V5.40491H8.00362C8.16266 5.40491 8.31518 5.46809 8.42764 5.58054C8.5401 5.693 8.60328 5.84553 8.60328 6.00456C8.60328 6.1636 8.5401 6.31613 8.42764 6.42859C8.31518 6.54104 8.16266 6.60422 8.00362 6.60422H6.60447V8.00344C6.60239 8.16183 6.53855 8.31316 6.42654 8.42517C6.31453 8.53718 6.1632 8.60102 6.00481 8.60309Z",fill:"currentColor"},null,-1)])),16)}Ie.render=Xt;var Ae={name:"UndoIcon",extends:K};function Gt(t){return en(t)||Qt(t)||Jt(t)||Zt()}function Zt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jt(t,e){if(t){if(typeof t=="string")return le(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?le(t,e):void 0}}function Qt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function en(t){if(Array.isArray(t))return le(t)}function le(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function tn(t,e,n,r,o,i){return l(),p("svg",d({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),Gt(e[0]||(e[0]=[s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.77042 5.96336C6.84315 5.99355 6.92118 6.00891 6.99993 6.00854C7.07868 6.00891 7.15671 5.99355 7.22944 5.96336C7.30217 5.93317 7.36814 5.88876 7.42348 5.83273C7.53572 5.72035 7.59876 5.56801 7.59876 5.40918C7.59876 5.25035 7.53572 5.09802 7.42348 4.98564L6.04897 3.61113H6.99998C7.9088 3.61113 8.79722 3.88063 9.55288 4.38554C10.3085 4.89046 10.8975 5.60811 11.2453 6.44776C11.5931 7.2874 11.6841 8.21132 11.5068 9.10268C11.3295 9.99404 10.8918 10.8128 10.2492 11.4554C9.60657 12.0981 8.7878 12.5357 7.89644 12.713C7.00508 12.8903 6.08116 12.7993 5.24152 12.4515C4.40188 12.1037 3.68422 11.5148 3.17931 10.7591C2.67439 10.0035 2.4049 9.11504 2.4049 8.20622C2.4049 8.04726 2.34175 7.89481 2.22935 7.78241C2.11695 7.67001 1.9645 7.60686 1.80554 7.60686C1.64658 7.60686 1.49413 7.67001 1.38172 7.78241C1.26932 7.89481 1.20618 8.04726 1.20618 8.20622C1.20829 9.74218 1.81939 11.2146 2.90548 12.3007C3.99157 13.3868 5.46402 13.9979 6.99998 14C8.5366 14 10.0103 13.3896 11.0968 12.3031C12.1834 11.2165 12.7938 9.74283 12.7938 8.20622C12.7938 6.66961 12.1834 5.19593 11.0968 4.10938C10.0103 3.02283 8.5366 2.41241 6.99998 2.41241H6.04892L7.42348 1.03786C7.48236 0.982986 7.5296 0.916817 7.56235 0.843296C7.59511 0.769775 7.61273 0.690409 7.61415 0.609933C7.61557 0.529456 7.60076 0.449519 7.57062 0.374888C7.54047 0.300257 7.49561 0.232462 7.43869 0.175548C7.38178 0.118634 7.31398 0.0737664 7.23935 0.0436218C7.16472 0.0134773 7.08478 -0.00132663 7.00431 9.32772e-05C6.92383 0.00151319 6.84447 0.019128 6.77095 0.0518865C6.69742 0.0846451 6.63126 0.131876 6.57638 0.190763L4.17895 2.5882C4.06671 2.70058 4.00366 2.85292 4.00366 3.01175C4.00366 3.17058 4.06671 3.32291 4.17895 3.43529L6.57638 5.83273C6.63172 5.88876 6.69769 5.93317 6.77042 5.96336Z",fill:"currentColor"},null,-1)])),16)}Ae.render=tn;var nn=`
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
`,rn={root:function(e){var n=e.props;return["p-image p-component",{"p-image-preview":n.preview}]},previewMask:"p-image-preview-mask",previewIcon:"p-image-preview-icon",mask:"p-image-mask p-overlay-mask p-overlay-mask-enter-active",toolbar:"p-image-toolbar",rotateRightButton:"p-image-action p-image-rotate-right-button",rotateLeftButton:"p-image-action p-image-rotate-left-button",zoomOutButton:function(e){var n=e.instance;return["p-image-action p-image-zoom-out-button",{"p-disabled":n.isZoomOutDisabled}]},zoomInButton:function(e){var n=e.instance;return["p-image-action p-image-zoom-in-button",{"p-disabled":n.isZoomInDisabled}]},closeButton:"p-image-action p-image-close-button",original:"p-image-original"},on=k.extend({name:"image",style:nn,classes:rn}),an={name:"BaseImage",extends:B,props:{preview:{type:Boolean,default:!1},class:{type:null,default:null},style:{type:null,default:null},imageStyle:{type:null,default:null},imageClass:{type:null,default:null},previewButtonProps:{type:null,default:null},indicatorIcon:{type:String,default:void 0},previewIcon:{type:String,default:void 0},zoomInDisabled:{type:Boolean,default:!1},zoomOutDisabled:{type:Boolean,default:!1}},style:on,provide:function(){return{$pcImage:this,$parentInstance:this}}},Me={name:"Image",extends:an,inheritAttrs:!1,emits:["show","hide","error"],mask:null,data:function(){return{maskVisible:!1,previewVisible:!1,rotate:0,scale:1}},beforeUnmount:function(){this.mask&&D.clear(this.container)},methods:{maskRef:function(e){this.mask=e},toolbarRef:function(e){this.toolbarRef=e},onImageClick:function(){var e=this;this.preview&&(st(),this.maskVisible=!0,setTimeout(function(){e.previewVisible=!0},25))},onPreviewImageClick:function(){this.previewClick=!0},onMaskClick:function(e){var n=Fe(e.target,"data-pc-section-group","action")||e.target.closest('[data-pc-section-group="action"]');!this.previewClick&&!n&&(this.previewVisible=!1,this.rotate=0,this.scale=1),this.previewClick=!1},onMaskKeydown:function(e){var n=this;switch(e.code){case"Escape":this.hidePreview(),setTimeout(function(){De(n.$refs.previewButton)},200),e.preventDefault();break}},onError:function(){this.$emit("error")},rotateRight:function(){this.rotate+=90,this.previewClick=!0},rotateLeft:function(){this.rotate-=90,this.previewClick=!0},zoomIn:function(){this.scale=this.scale+.1,this.previewClick=!0},zoomOut:function(){this.scale=this.scale-.1,this.previewClick=!0},onBeforeEnter:function(){D.set("modal",this.mask,this.$primevue.config.zIndex.modal)},onEnter:function(){this.focus(),this.$emit("show")},onBeforeLeave:function(){!this.isUnstyled&&C(this.mask,"p-overlay-mask-leave-active")},onLeave:function(){ve(),this.$emit("hide")},onAfterLeave:function(e){D.clear(e),this.maskVisible=!1},focus:function(){var e=this.mask.querySelector("[autofocus]");e&&e.focus()},hidePreview:function(){this.previewVisible=!1,this.rotate=0,this.scale=1,ve()}},computed:{containerClass:function(){return[this.cx("root"),this.class]},rotateClass:function(){return"p-image-preview-rotate-"+this.rotate},imagePreviewStyle:function(){return{transform:"rotate("+this.rotate+"deg) scale("+this.scale+")"}},isZoomInDisabled:function(){return this.zoomInDisabled||this.scale>=1.5},isZoomOutDisabled:function(){return this.zoomOutDisabled||this.scale<=.5},rightAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.rotateRight:void 0},leftAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.rotateLeft:void 0},zoomInAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.zoomIn:void 0},zoomOutAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.zoomOut:void 0},zoomImageAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.zoomImage:void 0},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{Portal:at,EyeIcon:Le,RefreshIcon:xe,UndoIcon:Ae,SearchMinusIcon:Be,SearchPlusIcon:Ie,TimesIcon:ot},directives:{focustrap:it}};function R(t){"@babel/helpers - typeof";return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(t)}function be(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?be(Object(n),!0).forEach(function(r){sn(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):be(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function sn(t,e,n){return(e=ln(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ln(t){var e=un(t,"string");return R(e)=="symbol"?e:e+""}function un(t,e){if(R(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(R(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var dn=["aria-label"],pn=["aria-modal"],cn=["aria-label"],fn=["aria-label"],mn=["disabled","aria-label"],hn=["disabled","aria-label"],vn=["aria-label"],gn=["src"];function bn(t,e,n,r,o,i){var a=A("RefreshIcon"),f=A("UndoIcon"),c=A("SearchMinusIcon"),u=A("SearchPlusIcon"),v=A("TimesIcon"),w=A("Portal"),$=He("focustrap");return l(),p("span",d({class:i.containerClass,style:t.style},t.ptmi("root")),[y(t.$slots,"image",{errorCallback:i.onError},function(){return[s("img",d({style:t.imageStyle,class:t.imageClass,onError:e[0]||(e[0]=function(){return i.onError&&i.onError.apply(i,arguments)})},q(q({},t.$attrs),t.ptm("image"))),null,16)]}),t.preview?(l(),p("button",d({key:0,ref:"previewButton","aria-label":i.zoomImageAriaLabel,type:"button",class:t.cx("previewMask"),onClick:e[1]||(e[1]=function(){return i.onImageClick&&i.onImageClick.apply(i,arguments)})},q(q({},t.previewButtonProps),t.ptm("previewMask"))),[y(t.$slots,t.$slots.previewicon?"previewicon":"indicatoricon",{},function(){return[(l(),x($e(t.previewIcon||t.indicatorIcon?"i":"EyeIcon"),d({class:[t.cx("previewIcon"),t.previewIcon]},t.ptm("previewIcon")),null,16,["class"]))]})],16,dn)):h("",!0),m(w,null,{default:g(function(){return[o.maskVisible?Ce((l(),p("div",d({key:0,ref:i.maskRef,role:"dialog",class:t.cx("mask"),"aria-modal":o.maskVisible,onClick:e[8]||(e[8]=function(){return i.onMaskClick&&i.onMaskClick.apply(i,arguments)}),onKeydown:e[9]||(e[9]=function(){return i.onMaskKeydown&&i.onMaskKeydown.apply(i,arguments)})},t.ptm("mask")),[s("div",d({class:t.cx("toolbar")},t.ptm("toolbar")),[s("button",d({class:t.cx("rotateRightButton"),onClick:e[2]||(e[2]=function(){return i.rotateRight&&i.rotateRight.apply(i,arguments)}),type:"button","aria-label":i.rightAriaLabel},t.ptm("rotateRightButton"),{"data-pc-group-section":"action"}),[y(t.$slots,"refresh",{},function(){return[m(a,M(P(t.ptm("rotateRightIcon"))),null,16)]})],16,cn),s("button",d({class:t.cx("rotateLeftButton"),onClick:e[3]||(e[3]=function(){return i.rotateLeft&&i.rotateLeft.apply(i,arguments)}),type:"button","aria-label":i.leftAriaLabel},t.ptm("rotateLeftButton"),{"data-pc-group-section":"action"}),[y(t.$slots,"undo",{},function(){return[m(f,M(P(t.ptm("rotateLeftIcon"))),null,16)]})],16,fn),s("button",d({class:t.cx("zoomOutButton"),onClick:e[4]||(e[4]=function(){return i.zoomOut&&i.zoomOut.apply(i,arguments)}),type:"button",disabled:i.isZoomOutDisabled,"aria-label":i.zoomOutAriaLabel},t.ptm("zoomOutButton"),{"data-pc-group-section":"action"}),[y(t.$slots,"zoomout",{},function(){return[m(c,M(P(t.ptm("zoomOutIcon"))),null,16)]})],16,mn),s("button",d({class:t.cx("zoomInButton"),onClick:e[5]||(e[5]=function(){return i.zoomIn&&i.zoomIn.apply(i,arguments)}),type:"button",disabled:i.isZoomInDisabled,"aria-label":i.zoomInAriaLabel},t.ptm("zoomInButton"),{"data-pc-group-section":"action"}),[y(t.$slots,"zoomin",{},function(){return[m(u,M(P(t.ptm("zoomInIcon"))),null,16)]})],16,hn),s("button",d({class:t.cx("closeButton"),type:"button",onClick:e[6]||(e[6]=function(){return i.hidePreview&&i.hidePreview.apply(i,arguments)}),"aria-label":i.closeAriaLabel,autofocus:""},t.ptm("closeButton"),{"data-pc-group-section":"action"}),[y(t.$slots,"close",{},function(){return[m(v,M(P(t.ptm("closeIcon"))),null,16)]})],16,vn)],16),m(O,d({name:"p-image-original",onBeforeEnter:i.onBeforeEnter,onEnter:i.onEnter,onLeave:i.onLeave,onBeforeLeave:i.onBeforeLeave,onAfterLeave:i.onAfterLeave},t.ptm("transition")),{default:g(function(){return[o.previewVisible?(l(),p("div",M(d({key:0},t.ptm("originalContainer"))),[y(t.$slots,t.$slots.original?"original":"preview",{class:L(t.cx("original")),style:Re(i.imagePreviewStyle),previewCallback:i.onPreviewImageClick},function(){return[s("img",d({src:t.$attrs.src,class:t.cx("original"),style:i.imagePreviewStyle,onClick:e[7]||(e[7]=function(){return i.onPreviewImageClick&&i.onPreviewImageClick.apply(i,arguments)})},t.ptm("original")),null,16,gn)]})],16)):h("",!0)]}),_:3},16,["onBeforeEnter","onEnter","onLeave","onBeforeLeave","onAfterLeave"])],16,pn)),[[$]]):h("",!0)]}),_:3})],16)}Me.render=bn;const yn=U({__name:"ChatMessage",props:{author:{type:String,required:!0},authorName:{type:String,required:!1},message:{type:String,required:!0},image:{type:String,required:!1},timestamp:{type:Date,required:!1},isLoading:{type:Boolean,required:!1,default:!1}},setup(t,{expose:e}){e();const n=t,r=F(!0),o=F(!1),i=b(()=>n.author==="user"),a=b(()=>n.author==="guide"),f=b(()=>n.author==="user"?"U":n.author==="guide"&&n.authorName?n.authorName.charAt(0).toUpperCase():"G"),c=b(()=>n.author==="user"?"pi pi-user":(n.author==="guide","pi pi-compass")),u=b(()=>{}),v=b(()=>({"user-avatar":i.value,"guide-avatar":a.value})),w=b(()=>({"user-card":i.value,"guide-card":a.value})),$=b(()=>n.timestamp?.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),J=b(()=>n.message.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>").replace(/\n/g,"<br>")),I={props:n,imageLoading:r,imageError:o,isUser:i,isGuide:a,avatarLabel:f,avatarIcon:c,avatarImage:u,avatarClass:v,messageCardClass:w,formattedTime:$,formattedMessage:J,get Avatar(){return ze},get Card(){return W},get Image(){return Me},GuideAvatar:Se};return Object.defineProperty(I,"__isScriptSetup",{enumerable:!1,value:!0}),I}}),wn={class:"chat-message"},$n={class:"message-avatar"},Cn={class:"message-content"},_n={class:"message-header"},kn={class:"message-author"},Sn={key:0,class:"message-time"},zn={key:0,class:"message-image"},Ln={key:0,class:"image-error"},xn={class:"message-text"},Bn=["innerHTML"];function In(t,e,n,r,o,i){return l(),p("div",{class:L(["chat-message-wrapper",{"user-message":r.isUser,"guide-message":r.isGuide}])},[m(O,{name:"message-fade",appear:""},{default:g(()=>[s("div",wn,[h(" Avatar "),s("div",$n,[r.isGuide?(l(),x(r.GuideAvatar,{key:0,size:"48px"})):(l(),x(r.Avatar,{key:1,label:r.avatarLabel,icon:r.avatarIcon,image:r.avatarImage,shape:"circle",size:"normal",class:L(r.avatarClass)},null,8,["label","icon","image","class"]))]),h(" Message Content "),s("div",Cn,[h(" Author and timestamp "),s("div",_n,[s("span",kn,G(r.isUser?"Ty":n.authorName??"Przewodnik"),1),n.timestamp?(l(),p("small",Sn,G(r.formattedTime),1)):h("v-if",!0)]),h(" Image message "),n.image&&!n.isLoading?(l(),p("div",zn,[m(r.Image,{src:n.image,alt:`Image from ${n.author}`,preview:"",class:L(["landmark-image",{"image-loading":r.imageLoading}]),onLoad:e[0]||(e[0]=a=>r.imageLoading=!1),onError:e[1]||(e[1]=a=>r.imageError=!0)},null,8,["src","alt","class"]),r.imageError?(l(),p("div",Ln,[...e[2]||(e[2]=[s("i",{class:"pi pi-exclamation-triangle"},null,-1),s("span",null,"Failed to load image",-1)])])):h("v-if",!0)])):n.message?(l(),p(Z,{key:1},[h(" Text message "),s("div",xn,[m(r.Card,{class:L(["message-card",r.messageCardClass])},{content:g(()=>[s("div",{class:"message-body",innerHTML:r.formattedMessage},null,8,Bn)]),_:1},8,["class"])])],2112)):h("v-if",!0)])])]),_:1})],2)}const An=N(yn,[["render",In],["__scopeId","data-v-8a04a727"],["__file","/usr/src/app/src/components/ChatMessage.vue"]]);var Mn=`
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
`,En={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},Tn=k.extend({name:"progressspinner",style:Mn,classes:En}),Pn={name:"BaseProgressSpinner",extends:B,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:Tn,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},Ee={name:"ProgressSpinner",extends:Pn,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},On=["fill","stroke-width"];function Dn(t,e,n,r,o,i){return l(),p("div",d({class:t.cx("root"),role:"progressbar"},t.ptmi("root")),[(l(),p("svg",d({class:t.cx("spin"),viewBox:"25 25 50 50",style:i.svgStyle},t.ptm("spin")),[s("circle",d({class:t.cx("circle"),cx:"50",cy:"50",r:"20",fill:t.fill,"stroke-width":t.strokeWidth,strokeMiterlimit:"10"},t.ptm("circle")),null,16,On)],16))],16)}Ee.render=Dn;var Fn=`
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
`,Hn={root:"p-scrollpanel p-component",contentContainer:"p-scrollpanel-content-container",content:"p-scrollpanel-content",barX:"p-scrollpanel-bar p-scrollpanel-bar-x",barY:"p-scrollpanel-bar p-scrollpanel-bar-y"},Rn=k.extend({name:"scrollpanel",style:Fn,classes:Hn}),jn={name:"BaseScrollPanel",extends:B,props:{step:{type:Number,default:5}},style:Rn,provide:function(){return{$pcScrollPanel:this,$parentInstance:this}}},Te={name:"ScrollPanel",extends:jn,inheritAttrs:!1,initialized:!1,documentResizeListener:null,documentMouseMoveListener:null,documentMouseUpListener:null,frame:null,scrollXRatio:null,scrollYRatio:null,isXBarClicked:!1,isYBarClicked:!1,lastPageX:null,lastPageY:null,timer:null,outsideClickListener:null,data:function(){return{orientation:"vertical",lastScrollTop:0,lastScrollLeft:0}},mounted:function(){this.$el.offsetParent&&this.initialize()},updated:function(){!this.initialized&&this.$el.offsetParent&&this.initialize()},beforeUnmount:function(){this.unbindDocumentResizeListener(),this.frame&&window.cancelAnimationFrame(this.frame)},methods:{initialize:function(){this.moveBar(),this.bindDocumentResizeListener(),this.calculateContainerHeight()},calculateContainerHeight:function(){var e=getComputedStyle(this.$el),n=getComputedStyle(this.$refs.xBar),r=je(this.$el)-parseInt(n.height,10);e["max-height"]!=="none"&&r===0&&(this.$refs.content.offsetHeight+parseInt(n.height,10)>parseInt(e["max-height"],10)?this.$el.style.height=e["max-height"]:this.$el.style.height=this.$refs.content.offsetHeight+parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth)+"px")},moveBar:function(){var e=this;if(this.$refs.content){var n=this.$refs.content.scrollWidth,r=this.$refs.content.clientWidth,o=(this.$el.clientHeight-this.$refs.xBar.clientHeight)*-1;this.scrollXRatio=r/n;var i=this.$refs.content.scrollHeight,a=this.$refs.content.clientHeight,f=(this.$el.clientWidth-this.$refs.yBar.clientWidth)*-1;this.scrollYRatio=a/i;var c=Math.max(this.scrollYRatio*100,10);this.frame=this.requestAnimationFrame(function(){e.$refs.xBar&&(e.scrollXRatio>=1?(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&C(e.$refs.xBar,"p-scrollpanel-hidden")):(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&T(e.$refs.xBar,"p-scrollpanel-hidden"),e.$refs.xBar.style.cssText="width:"+Math.max(e.scrollXRatio*100,10)+"%; inset-inline-start:"+Math.abs(e.$refs.content.scrollLeft)/n*100+"%;bottom:"+o+"px;")),e.$refs.yBar&&(e.scrollYRatio>=1?(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&C(e.$refs.yBar,"p-scrollpanel-hidden")):(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&T(e.$refs.yBar,"p-scrollpanel-hidden"),e.$refs.yBar.style.cssText="height:"+c+"%; top: calc("+e.$refs.content.scrollTop/(i-a)*(100-c)+"% - "+e.$refs.xBar.clientHeight+"px); inset-inline-end:"+f+"px;"))})}},onYBarMouseDown:function(e){this.isYBarClicked=!0,this.$refs.yBar.focus(),this.lastPageY=e.pageY,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&C(this.$refs.yBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&C(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onXBarMouseDown:function(e){this.isXBarClicked=!0,this.$refs.xBar.focus(),this.lastPageX=e.pageX,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&C(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&C(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onScroll:function(e){this.lastScrollLeft!==e.target.scrollLeft?(this.lastScrollLeft=e.target.scrollLeft,this.orientation="horizontal"):this.lastScrollTop!==e.target.scrollTop&&(this.lastScrollTop=e.target.scrollTop,this.orientation="vertical"),this.moveBar()},onKeyDown:function(e){if(this.orientation==="vertical")switch(e.code){case"ArrowDown":{this.setTimer("scrollTop",this.step),e.preventDefault();break}case"ArrowUp":{this.setTimer("scrollTop",this.step*-1),e.preventDefault();break}case"ArrowLeft":case"ArrowRight":{e.preventDefault();break}}else if(this.orientation==="horizontal")switch(e.code){case"ArrowRight":{this.setTimer("scrollLeft",this.step),e.preventDefault();break}case"ArrowLeft":{this.setTimer("scrollLeft",this.step*-1),e.preventDefault();break}case"ArrowDown":case"ArrowUp":{e.preventDefault();break}}},onKeyUp:function(){this.clearTimer()},repeat:function(e,n){this.$refs.content[e]+=n,this.moveBar()},setTimer:function(e,n){var r=this;this.clearTimer(),this.timer=setTimeout(function(){r.repeat(e,n)},40)},clearTimer:function(){this.timer&&clearTimeout(this.timer)},onDocumentMouseMove:function(e){this.isXBarClicked?this.onMouseMoveForXBar(e):this.isYBarClicked?this.onMouseMoveForYBar(e):(this.onMouseMoveForXBar(e),this.onMouseMoveForYBar(e))},onMouseMoveForXBar:function(e){var n=this,r=e.pageX-this.lastPageX;this.lastPageX=e.pageX,this.frame=this.requestAnimationFrame(function(){n.$refs.content.scrollLeft+=r/n.scrollXRatio})},onMouseMoveForYBar:function(e){var n=this,r=e.pageY-this.lastPageY;this.lastPageY=e.pageY,this.frame=this.requestAnimationFrame(function(){n.$refs.content.scrollTop+=r/n.scrollYRatio})},onFocus:function(e){this.$refs.xBar.isSameNode(e.target)?this.orientation="horizontal":this.$refs.yBar.isSameNode(e.target)&&(this.orientation="vertical")},onBlur:function(){this.orientation==="horizontal"&&(this.orientation="vertical")},onDocumentMouseUp:function(){this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&T(this.$refs.yBar,"p-scrollpanel-grabbed"),this.$refs.xBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&T(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&T(document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1},requestAnimationFrame:function(e){var n=window.requestAnimationFrame||this.timeoutFrame;return n(e)},refresh:function(){this.moveBar()},scrollTop:function(e){var n=this.$refs.content.scrollHeight-this.$refs.content.clientHeight;e=e>n?n:e>0?e:0,this.$refs.content.scrollTop=e},timeoutFrame:function(e){setTimeout(e,0)},bindDocumentMouseListeners:function(){var e=this;this.documentMouseMoveListener||(this.documentMouseMoveListener=function(n){e.onDocumentMouseMove(n)},document.addEventListener("mousemove",this.documentMouseMoveListener)),this.documentMouseUpListener||(this.documentMouseUpListener=function(n){e.onDocumentMouseUp(n)},document.addEventListener("mouseup",this.documentMouseUpListener))},unbindDocumentMouseListeners:function(){this.documentMouseMoveListener&&(document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)},bindDocumentResizeListener:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.moveBar()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentResizeListener:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}},computed:{contentId:function(){return this.$id+"_content"}}},Vn=["id"],Un=["aria-controls","aria-valuenow"],Nn=["aria-controls","aria-valuenow"];function Kn(t,e,n,r,o,i){return l(),p("div",d({class:t.cx("root")},t.ptmi("root")),[s("div",d({class:t.cx("contentContainer")},t.ptm("contentContainer")),[s("div",d({ref:"content",id:i.contentId,class:t.cx("content"),onScroll:e[0]||(e[0]=function(){return i.onScroll&&i.onScroll.apply(i,arguments)}),onMouseenter:e[1]||(e[1]=function(){return i.moveBar&&i.moveBar.apply(i,arguments)})},t.ptm("content")),[y(t.$slots,"default")],16,Vn)],16),s("div",d({ref:"xBar",class:t.cx("barx"),tabindex:"0",role:"scrollbar","aria-orientation":"horizontal","aria-controls":i.contentId,"aria-valuenow":o.lastScrollLeft,onMousedown:e[2]||(e[2]=function(){return i.onXBarMouseDown&&i.onXBarMouseDown.apply(i,arguments)}),onKeydown:e[3]||(e[3]=function(a){return i.onKeyDown(a)}),onKeyup:e[4]||(e[4]=function(){return i.onKeyUp&&i.onKeyUp.apply(i,arguments)}),onFocus:e[5]||(e[5]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:e[6]||(e[6]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)})},t.ptm("barx"),{"data-pc-group-section":"bar"}),null,16,Un),s("div",d({ref:"yBar",class:t.cx("bary"),tabindex:"0",role:"scrollbar","aria-orientation":"vertical","aria-controls":i.contentId,"aria-valuenow":o.lastScrollTop,onMousedown:e[7]||(e[7]=function(){return i.onYBarMouseDown&&i.onYBarMouseDown.apply(i,arguments)}),onKeydown:e[8]||(e[8]=function(a){return i.onKeyDown(a)}),onKeyup:e[9]||(e[9]=function(){return i.onKeyUp&&i.onKeyUp.apply(i,arguments)}),onFocus:e[10]||(e[10]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)})},t.ptm("bary"),{"data-pc-group-section":"bar"}),null,16,Nn)],16)}Te.render=Kn;const Wn=U({__name:"Chat",props:{messages:{type:Array,required:!0},isTyping:{type:Boolean,required:!0},isConnected:{type:Boolean,required:!0},guideName:{type:String,required:!1}},setup(t,{expose:e}){e();const r={props:t,ChatMessage:An,get Card(){return W},get ProgressSpinner(){return Ee},get ScrollPanel(){return Te},GuideAvatar:Se};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),Yn={class:"chat-container"},qn={key:0,class:"connection-status"},Xn={class:"status-content"},Gn={key:0,class:"chat-wrapper"},Zn={class:"messages-container"},Jn={key:0,class:"typing-indicator"},Qn={class:"typing-avatar"};function er(t,e,n,r,o,i){return l(),p("div",Yn,[h(" Connection Status "),m(O,{name:"status-fade"},{default:g(()=>[n.isConnected?h("v-if",!0):(l(),p("div",qn,[m(r.Card,{class:"status-card"},{content:g(()=>[s("div",Xn,[m(r.ProgressSpinner,{size:"2rem","stroke-width":"3"}),e[0]||(e[0]=s("span",null,"Łączenie z przewodnikiem...",-1))])]),_:1})]))]),_:1}),h(" Chat Messages Area "),m(O,{name:"chat-fade"},{default:g(()=>[n.isConnected?(l(),p("div",Gn,[m(r.ScrollPanel,{class:"chat-messages",pt:{wrapper:"chat-scroll-wrapper"}},{default:g(()=>[s("div",Zn,[m(Ve,{name:"message-list",tag:"div"},{default:g(()=>[(l(!0),p(Z,null,_e(r.props.messages,a=>(l(),x(r.ChatMessage,{key:a.id,author:a.author,"author-name":n.guideName,message:a.message,image:a.image,timestamp:a.timestamp},null,8,["author","author-name","message","image","timestamp"]))),128))]),_:1}),h(" Typing Indicator "),m(O,{name:"typing-fade"},{default:g(()=>[r.props.isTyping?(l(),p("div",Jn,[s("div",Qn,[m(r.GuideAvatar,{size:"32px"})]),m(r.Card,{class:"typing-card"},{content:g(()=>[...e[1]||(e[1]=[s("div",{class:"typing-animation"},[s("div",{class:"typing-dots"},[s("div",{class:"dot"}),s("div",{class:"dot"}),s("div",{class:"dot"})]),s("span",{class:"typing-text"},"Przewodnik pisze...")],-1)])]),_:1})])):h("v-if",!0)]),_:1})])]),_:1})])):h("v-if",!0)]),_:1})])}const tr=N(Wn,[["render",er],["__scopeId","data-v-1541a8d1"],["__file","/usr/src/app/src/components/Chat.vue"]]);var nr={name:"BaseEditableHolder",extends:B,emits:["update:modelValue","value-change"],props:{modelValue:{type:null,default:void 0},defaultValue:{type:null,default:void 0},name:{type:String,default:void 0},invalid:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},formControl:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0},$pcForm:{default:void 0},$pcFormField:{default:void 0}},data:function(){return{d_value:this.defaultValue!==void 0?this.defaultValue:this.modelValue}},watch:{modelValue:{deep:!0,handler:function(e){this.d_value=e}},defaultValue:function(e){this.d_value=e},$formName:{immediate:!0,handler:function(e){var n,r;this.formField=((n=this.$pcForm)===null||n===void 0||(r=n.register)===null||r===void 0?void 0:r.call(n,e,this.$formControl))||{}}},$formControl:{immediate:!0,handler:function(e){var n,r;this.formField=((n=this.$pcForm)===null||n===void 0||(r=n.register)===null||r===void 0?void 0:r.call(n,this.$formName,e))||{}}},$formDefaultValue:{immediate:!0,handler:function(e){this.d_value!==e&&(this.d_value=e)}},$formValue:{immediate:!1,handler:function(e){var n;(n=this.$pcForm)!==null&&n!==void 0&&n.getFieldState(this.$formName)&&e!==this.d_value&&(this.d_value=e)}}},formField:{},methods:{writeValue:function(e,n){var r,o;this.controlled&&(this.d_value=e,this.$emit("update:modelValue",e)),this.$emit("value-change",e),(r=(o=this.formField).onChange)===null||r===void 0||r.call(o,{originalEvent:n,value:e})},findNonEmpty:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.find(ue)}},computed:{$filled:function(){return ue(this.d_value)},$invalid:function(){var e,n;return!this.$formNovalidate&&this.findNonEmpty(this.invalid,(e=this.$pcFormField)===null||e===void 0||(e=e.$field)===null||e===void 0?void 0:e.invalid,(n=this.$pcForm)===null||n===void 0||(n=n.getFieldState(this.$formName))===null||n===void 0?void 0:n.invalid)},$formName:function(){var e;return this.$formNovalidate?void 0:this.name||((e=this.$formControl)===null||e===void 0?void 0:e.name)},$formControl:function(){var e;return this.formControl||((e=this.$pcFormField)===null||e===void 0?void 0:e.formControl)},$formNovalidate:function(){var e;return(e=this.$formControl)===null||e===void 0?void 0:e.novalidate},$formDefaultValue:function(){var e,n;return this.findNonEmpty(this.d_value,(e=this.$pcFormField)===null||e===void 0?void 0:e.initialValue,(n=this.$pcForm)===null||n===void 0||(n=n.initialValues)===null||n===void 0?void 0:n[this.$formName])},$formValue:function(){var e,n;return this.findNonEmpty((e=this.$pcFormField)===null||e===void 0||(e=e.$field)===null||e===void 0?void 0:e.value,(n=this.$pcForm)===null||n===void 0||(n=n.getFieldState(this.$formName))===null||n===void 0?void 0:n.value)},controlled:function(){return this.$inProps.hasOwnProperty("modelValue")||!this.$inProps.hasOwnProperty("modelValue")&&!this.$inProps.hasOwnProperty("defaultValue")},filled:function(){return this.$filled}}},rr={name:"BaseInput",extends:nr,props:{size:{type:String,default:null},fluid:{type:Boolean,default:null},variant:{type:String,default:null}},inject:{$parentInstance:{default:void 0},$pcFluid:{default:void 0}},computed:{$variant:function(){var e;return(e=this.variant)!==null&&e!==void 0?e:this.$primevue.config.inputStyle||this.$primevue.config.inputVariant},$fluid:function(){var e;return(e=this.fluid)!==null&&e!==void 0?e:!!this.$pcFluid},hasFluid:function(){return this.$fluid}}},ir=`
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
`,or={root:function(e){var n=e.instance,r=e.props;return["p-textarea p-component",{"p-filled":n.$filled,"p-textarea-resizable ":r.autoResize,"p-textarea-sm p-inputfield-sm":r.size==="small","p-textarea-lg p-inputfield-lg":r.size==="large","p-invalid":n.$invalid,"p-variant-filled":n.$variant==="filled","p-textarea-fluid":n.$fluid}]}},ar=k.extend({name:"textarea",style:ir,classes:or}),sr={name:"BaseTextarea",extends:rr,props:{autoResize:Boolean},style:ar,provide:function(){return{$pcTextarea:this,$parentInstance:this}}};function j(t){"@babel/helpers - typeof";return j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(t)}function lr(t,e,n){return(e=ur(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ur(t){var e=dr(t,"string");return j(e)=="symbol"?e:e+""}function dr(t,e){if(j(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(j(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Pe={name:"Textarea",extends:sr,inheritAttrs:!1,observer:null,mounted:function(){var e=this;this.autoResize&&(this.observer=new ResizeObserver(function(){requestAnimationFrame(function(){e.resize()})}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){if(this.$el.offsetParent){var e=this.$el.style.height,n=parseInt(e)||0,r=this.$el.scrollHeight,o=!n||r>n,i=n&&r<n;i?(this.$el.style.height="auto",this.$el.style.height="".concat(this.$el.scrollHeight,"px")):o&&(this.$el.style.height="".concat(r,"px"))}},onInput:function(e){this.autoResize&&this.resize(),this.writeValue(e.target.value,e)}},computed:{attrs:function(){return d(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return ke(lr({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},pr=["value","name","disabled","aria-invalid","data-p"];function cr(t,e,n,r,o,i){return l(),p("textarea",d({class:t.cx("root"),value:t.d_value,name:t.name,disabled:t.disabled,"aria-invalid":t.invalid||void 0,"data-p":i.dataP,onInput:e[0]||(e[0]=function(){return i.onInput&&i.onInput.apply(i,arguments)})},i.attrs),null,16,pr)}Pe.render=cr;var fr=`
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
`,mr={root:"p-inputgroup"},hr=k.extend({name:"inputgroup",style:fr,classes:mr}),vr={name:"BaseInputGroup",extends:B,style:hr,provide:function(){return{$pcInputGroup:this,$parentInstance:this}}},Oe={name:"InputGroup",extends:vr,inheritAttrs:!1};function gr(t,e,n,r,o,i){return l(),p("div",d({class:t.cx("root")},t.ptmi("root")),[y(t.$slots,"default")],16)}Oe.render=gr;const br=U({__name:"ChatInput",props:{modelValue:{type:String,required:!0},isTyping:{type:Boolean,required:!0}},emits:["update:modelValue","send"],setup(t,{expose:e,emit:n}){e();const r=t,o=n,i=b(()=>r.modelValue.trim().length>0&&!r.isTyping),c={props:r,emit:o,canSendMessage:i,handleSendMessage:()=>{i.value&&o("send")},addNewLine:()=>{o("update:modelValue",r.modelValue+`
`)},get Card(){return W},get Button(){return lt},get Textarea(){return Pe},get InputGroup(){return Oe}};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),yr={class:"chat-input-fixed"},wr={class:"input-container"};function $r(t,e,n,r,o,i){return l(),p("div",yr,[m(r.Card,{class:"input-card"},{content:g(()=>[s("div",wr,[m(r.InputGroup,null,{default:g(()=>[m(r.Textarea,{"model-value":n.modelValue,"onUpdate:modelValue":e[0]||(e[0]=a=>r.emit("update:modelValue",a)),placeholder:"Zapytaj o ten zabytek...",rows:1,"auto-resize":!0,"max-rows":4,class:"chat-input",onKeydown:[de(pe(r.handleSendMessage,["prevent"]),["enter"]),de(pe(r.addNewLine,["shift","prevent"]),["enter"])],disabled:n.isTyping,"aria-label":"Wpisz swoją wiadomość do przewodnika"},null,8,["model-value","onKeydown","disabled"]),m(r.Button,{icon:n.isTyping?"pi pi-spin pi-spinner":"pi pi-send",severity:"primary",class:"send-button",disabled:!r.canSendMessage,onClick:r.handleSendMessage,loading:n.isTyping},null,8,["icon","disabled","loading"])]),_:1}),e[1]||(e[1]=s("div",{class:"input-hints"},[s("small",{class:"hint-text"}," Zapytaj o historię, architekturę lub ciekawostki")],-1))])]),_:1})])}const Cr=N(br,[["render",$r],["__scopeId","data-v-4fef38d0"],["__file","/usr/src/app/src/components/ChatInput.vue"]]),_r=t=>{const{data:e,...n}=ut();return{data:b(()=>e.value?.find(r=>r.id===X(t))),...n}},ne=(t,e,n)=>({id:`user-${n?.getTime()??Date.now()}`,author:e,message:t,timestamp:n??new Date,type:"text"}),kr=t=>{const e=F([]),n=F(!1),{mutateAsync:r}=ce({mutationFn:async()=>{const{data:u}=await re.GET("/chats/{landmark}/history",{params:{path:{landmark:X(t).id}}});return u}}),o=async()=>{const{thumbnail_url:u,description:v}=X(t);u&&e.value.push({id:`initial-image-${Date.now()}`,author:"guide",message:"",image:u,type:"image"}),e.value.push({id:`initial-text-${Date.now()}`,author:"guide",message:"Cześć! Jestem Twoim przewodnikiem! Jak mogę Ci pomóc?",type:"text"});try{const J=(await r())?.map(I=>ne(I.message,I.sender==="agent"?"guide":"user",new Date(I.timestamp)));e.value.push(...J)}catch($){console.error("History failed to load:",$)}n.value=!0},{mutate:i,isPending:a}=ce({onMutate:u=>{const v=ne(u,"user");e.value.push(v)},mutationFn:async u=>{const{data:v}=await re.POST("/chats/{landmark}/message",{body:{message:u},params:{path:{landmark:X(t).id}}});return v},onSuccess:u=>{const v=ne(u?.message,"guide",new Date);e.value.push(v)}}),f=()=>{Ue(()=>{const u=document.querySelector(".p-scrollpanel-content");u&&u.scrollTo({top:u.scrollHeight,behavior:"smooth"})})},c=b(()=>e.value[e.value.length-1]?.id);return{messages:e,isTyping:a,isConnected:n,connect:o,sendMessage:i,scrollToBottom:f,lastMessageId:c}};function V(t){"@babel/helpers - typeof";return V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(t)}function Sr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function zr(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,xr(r.key),r)}}function Lr(t,e,n){return e&&zr(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function xr(t){var e=Br(t,"string");return V(e)=="symbol"?e:e+""}function Br(t,e){if(V(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(V(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var Ir=(function(){function t(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){};Sr(this,t),this.element=e,this.listener=n}return Lr(t,[{key:"bindScrollListener",value:function(){this.scrollableParents=Ne(this.element);for(var n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].addEventListener("scroll",this.listener)}},{key:"unbindScrollListener",value:function(){if(this.scrollableParents)for(var n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].removeEventListener("scroll",this.listener)}},{key:"destroy",value:function(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}])})(),Ar=`
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
`,Mr={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},Er=k.extend({name:"tooltip-directive",style:Ar,classes:Mr}),Tr=rt.extend({style:Er});function Pr(t,e){return Hr(t)||Fr(t,e)||Dr(t,e)||Or()}function Or(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dr(t,e){if(t){if(typeof t=="string")return ye(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ye(t,e):void 0}}function ye(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Fr(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,o,i,a,f=[],c=!0,u=!1;try{if(i=(n=n.call(t)).next,e!==0)for(;!(c=(r=i.call(n)).done)&&(f.push(r.value),f.length!==e);c=!0);}catch(v){u=!0,o=v}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return f}}function Hr(t){if(Array.isArray(t))return t}function we(t,e,n){return(e=Rr(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Rr(t){var e=jr(t,"string");return _(e)=="symbol"?e:e+""}function jr(t,e){if(_(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(_(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function _(t){"@babel/helpers - typeof";return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(t)}var Vr=Tr.extend("tooltip",{beforeMount:function(e,n){var r,o=this.getTarget(e);if(o.$_ptooltipModifiers=this.getModifiers(n),n.value){if(typeof n.value=="string")o.$_ptooltipValue=n.value,o.$_ptooltipDisabled=!1,o.$_ptooltipEscape=!0,o.$_ptooltipClass=null,o.$_ptooltipFitContent=!0,o.$_ptooltipIdAttr=Y("pv_id")+"_tooltip",o.$_ptooltipShowDelay=0,o.$_ptooltipHideDelay=0,o.$_ptooltipAutoHide=!0;else if(_(n.value)==="object"&&n.value){if(me(n.value.value)||n.value.value.trim()==="")return;o.$_ptooltipValue=n.value.value,o.$_ptooltipDisabled=!!n.value.disabled===n.value.disabled?n.value.disabled:!1,o.$_ptooltipEscape=!!n.value.escape===n.value.escape?n.value.escape:!0,o.$_ptooltipClass=n.value.class||"",o.$_ptooltipFitContent=!!n.value.fitContent===n.value.fitContent?n.value.fitContent:!0,o.$_ptooltipIdAttr=n.value.id||Y("pv_id")+"_tooltip",o.$_ptooltipShowDelay=n.value.showDelay||0,o.$_ptooltipHideDelay=n.value.hideDelay||0,o.$_ptooltipAutoHide=!!n.value.autoHide===n.value.autoHide?n.value.autoHide:!0}}else return;o.$_ptooltipZIndex=(r=n.instance.$primevue)===null||r===void 0||(r=r.config)===null||r===void 0||(r=r.zIndex)===null||r===void 0?void 0:r.tooltip,this.bindEvents(o,n),e.setAttribute("data-pd-tooltip",!0)},updated:function(e,n){var r=this.getTarget(e);if(r.$_ptooltipModifiers=this.getModifiers(n),this.unbindEvents(r),!!n.value){if(typeof n.value=="string")r.$_ptooltipValue=n.value,r.$_ptooltipDisabled=!1,r.$_ptooltipEscape=!0,r.$_ptooltipClass=null,r.$_ptooltipIdAttr=r.$_ptooltipIdAttr||Y("pv_id")+"_tooltip",r.$_ptooltipShowDelay=0,r.$_ptooltipHideDelay=0,r.$_ptooltipAutoHide=!0,this.bindEvents(r,n);else if(_(n.value)==="object"&&n.value)if(me(n.value.value)||n.value.value.trim()===""){this.unbindEvents(r,n);return}else r.$_ptooltipValue=n.value.value,r.$_ptooltipDisabled=!!n.value.disabled===n.value.disabled?n.value.disabled:!1,r.$_ptooltipEscape=!!n.value.escape===n.value.escape?n.value.escape:!0,r.$_ptooltipClass=n.value.class||"",r.$_ptooltipFitContent=!!n.value.fitContent===n.value.fitContent?n.value.fitContent:!0,r.$_ptooltipIdAttr=n.value.id||r.$_ptooltipIdAttr||Y("pv_id")+"_tooltip",r.$_ptooltipShowDelay=n.value.showDelay||0,r.$_ptooltipHideDelay=n.value.hideDelay||0,r.$_ptooltipAutoHide=!!n.value.autoHide===n.value.autoHide?n.value.autoHide:!0,this.bindEvents(r,n)}},unmounted:function(e,n){var r=this.getTarget(e);this.hide(e,0),this.remove(r),this.unbindEvents(r,n),r.$_ptooltipScrollHandler&&(r.$_ptooltipScrollHandler.destroy(),r.$_ptooltipScrollHandler=null)},timer:void 0,methods:{bindEvents:function(e,n){var r=this,o=e.$_ptooltipModifiers;o.focus?(e.$_ptooltipFocusEvent=function(i){return r.onFocus(i,n)},e.$_ptooltipBlurEvent=this.onBlur.bind(this),e.addEventListener("focus",e.$_ptooltipFocusEvent),e.addEventListener("blur",e.$_ptooltipBlurEvent)):(e.$_ptooltipMouseEnterEvent=function(i){return r.onMouseEnter(i,n)},e.$_ptooltipMouseLeaveEvent=this.onMouseLeave.bind(this),e.$_ptooltipClickEvent=this.onClick.bind(this),e.addEventListener("mouseenter",e.$_ptooltipMouseEnterEvent),e.addEventListener("mouseleave",e.$_ptooltipMouseLeaveEvent),e.addEventListener("click",e.$_ptooltipClickEvent)),e.$_ptooltipKeydownEvent=this.onKeydown.bind(this),e.addEventListener("keydown",e.$_ptooltipKeydownEvent),e.$_pWindowResizeEvent=this.onWindowResize.bind(this,e)},unbindEvents:function(e){var n=e.$_ptooltipModifiers;n.focus?(e.removeEventListener("focus",e.$_ptooltipFocusEvent),e.$_ptooltipFocusEvent=null,e.removeEventListener("blur",e.$_ptooltipBlurEvent),e.$_ptooltipBlurEvent=null):(e.removeEventListener("mouseenter",e.$_ptooltipMouseEnterEvent),e.$_ptooltipMouseEnterEvent=null,e.removeEventListener("mouseleave",e.$_ptooltipMouseLeaveEvent),e.$_ptooltipMouseLeaveEvent=null,e.removeEventListener("click",e.$_ptooltipClickEvent),e.$_ptooltipClickEvent=null),e.removeEventListener("keydown",e.$_ptooltipKeydownEvent),window.removeEventListener("resize",e.$_pWindowResizeEvent),e.$_ptooltipId&&this.remove(e)},bindScrollListener:function(e){var n=this;e.$_ptooltipScrollHandler||(e.$_ptooltipScrollHandler=new Ir(e,function(){n.hide(e)})),e.$_ptooltipScrollHandler.bindScrollListener()},unbindScrollListener:function(e){e.$_ptooltipScrollHandler&&e.$_ptooltipScrollHandler.unbindScrollListener()},onMouseEnter:function(e,n){var r=e.currentTarget,o=r.$_ptooltipShowDelay;this.show(r,n,o)},onMouseLeave:function(e){var n=e.currentTarget,r=n.$_ptooltipHideDelay,o=n.$_ptooltipAutoHide;if(o)this.hide(n,r);else{var i=E(e.target,"data-pc-name")==="tooltip"||E(e.target,"data-pc-section")==="arrow"||E(e.target,"data-pc-section")==="text"||E(e.relatedTarget,"data-pc-name")==="tooltip"||E(e.relatedTarget,"data-pc-section")==="arrow"||E(e.relatedTarget,"data-pc-section")==="text";!i&&this.hide(n,r)}},onFocus:function(e,n){var r=e.currentTarget,o=r.$_ptooltipShowDelay;this.show(r,n,o)},onBlur:function(e){var n=e.currentTarget,r=n.$_ptooltipHideDelay;this.hide(n,r)},onClick:function(e){var n=e.currentTarget,r=n.$_ptooltipHideDelay;this.hide(n,r)},onKeydown:function(e){var n=e.currentTarget,r=n.$_ptooltipHideDelay;e.code==="Escape"&&this.hide(e.currentTarget,r)},onWindowResize:function(e){Ge()||this.hide(e),window.removeEventListener("resize",e.$_pWindowResizeEvent)},tooltipActions:function(e,n){if(!(e.$_ptooltipDisabled||!qe(e)||!e.$_ptooltipPendingShow)){e.$_ptooltipPendingShow=!1;var r=this.create(e,n);this.align(e),!this.isUnstyled()&&Xe(r,250);var o=this;window.addEventListener("resize",e.$_pWindowResizeEvent),r.addEventListener("mouseleave",function i(){o.hide(e),r.removeEventListener("mouseleave",i),e.removeEventListener("mouseenter",e.$_ptooltipMouseEnterEvent),setTimeout(function(){return e.addEventListener("mouseenter",e.$_ptooltipMouseEnterEvent)},50)}),this.bindScrollListener(e),D.set("tooltip",r,e.$_ptooltipZIndex)}},show:function(e,n,r){var o=this;r!==void 0?(this.timer=setTimeout(function(){return o.tooltipActions(e,n)},r),e.$_ptooltipPendingShow=!0):(this.tooltipActions(e,n),e.$_ptooltipPendingShow=!1)},tooltipRemoval:function(e){this.remove(e),this.unbindScrollListener(e),window.removeEventListener("resize",e.$_pWindowResizeEvent)},hide:function(e,n){var r=this;clearTimeout(this.timer),e.$_ptooltipPendingShow=!1,n!==void 0?setTimeout(function(){return r.tooltipRemoval(e)},n):this.tooltipRemoval(e)},getTooltipElement:function(e){return document.getElementById(e.$_ptooltipId)},getArrowElement:function(e){var n=this.getTooltipElement(e);return fe(n,'[data-pc-section="arrow"]')},create:function(e){var n=e.$_ptooltipModifiers,r=ee("div",{class:!this.isUnstyled()&&this.cx("arrow"),"p-bind":this.ptm("arrow",{context:n})}),o=ee("div",{class:!this.isUnstyled()&&this.cx("text"),"p-bind":this.ptm("text",{context:n})});e.$_ptooltipEscape?(o.innerHTML="",o.appendChild(document.createTextNode(e.$_ptooltipValue))):o.innerHTML=e.$_ptooltipValue;var i=ee("div",we(we({id:e.$_ptooltipIdAttr,role:"tooltip",style:{display:"inline-block",width:e.$_ptooltipFitContent?"fit-content":void 0,pointerEvents:!this.isUnstyled()&&e.$_ptooltipAutoHide&&"none"},class:[!this.isUnstyled()&&this.cx("root"),e.$_ptooltipClass]},this.$attrSelector,""),"p-bind",this.ptm("root",{context:n})),r,o);return document.body.appendChild(i),e.$_ptooltipId=i.id,this.$el=i,i},remove:function(e){if(e){var n=this.getTooltipElement(e);n&&n.parentElement&&(D.clear(n),document.body.removeChild(n)),e.$_ptooltipId=null}},align:function(e){var n=e.$_ptooltipModifiers;n.top?(this.alignTop(e),this.isOutOfBounds(e)&&(this.alignBottom(e),this.isOutOfBounds(e)&&this.alignTop(e))):n.left?(this.alignLeft(e),this.isOutOfBounds(e)&&(this.alignRight(e),this.isOutOfBounds(e)&&(this.alignTop(e),this.isOutOfBounds(e)&&(this.alignBottom(e),this.isOutOfBounds(e)&&this.alignLeft(e))))):n.bottom?(this.alignBottom(e),this.isOutOfBounds(e)&&(this.alignTop(e),this.isOutOfBounds(e)&&this.alignBottom(e))):(this.alignRight(e),this.isOutOfBounds(e)&&(this.alignLeft(e),this.isOutOfBounds(e)&&(this.alignTop(e),this.isOutOfBounds(e)&&(this.alignBottom(e),this.isOutOfBounds(e)&&this.alignRight(e)))))},getHostOffset:function(e){var n=e.getBoundingClientRect(),r=n.left+We(),o=n.top+Ye();return{left:r,top:o}},alignRight:function(e){this.preAlign(e,"right");var n=this.getTooltipElement(e),r=this.getArrowElement(e),o=this.getHostOffset(e),i=o.left+S(e),a=o.top+(z(e)-z(n))/2;n.style.left=i+"px",n.style.top=a+"px",r.style.top="50%",r.style.right=null,r.style.bottom=null,r.style.left="0"},alignLeft:function(e){this.preAlign(e,"left");var n=this.getTooltipElement(e),r=this.getArrowElement(e),o=this.getHostOffset(e),i=o.left-S(n),a=o.top+(z(e)-z(n))/2;n.style.left=i+"px",n.style.top=a+"px",r.style.top="50%",r.style.right="0",r.style.bottom=null,r.style.left=null},alignTop:function(e){this.preAlign(e,"top");var n=this.getTooltipElement(e),r=this.getArrowElement(e),o=S(n),i=S(e),a=Q(),f=a.width,c=this.getHostOffset(e),u=c.left+(i-o)/2,v=c.top-z(n);u<0?u=0:u+o>f&&(u=Math.floor(c.left+i-o)),n.style.left=u+"px",n.style.top=v+"px";var w=c.left-this.getHostOffset(n).left+i/2;r.style.top=null,r.style.right=null,r.style.bottom="0",r.style.left=w+"px"},alignBottom:function(e){this.preAlign(e,"bottom");var n=this.getTooltipElement(e),r=this.getArrowElement(e),o=S(n),i=S(e),a=Q(),f=a.width,c=this.getHostOffset(e),u=c.left+(i-o)/2,v=c.top+z(e);u<0?u=0:u+o>f&&(u=Math.floor(c.left+i-o)),n.style.left=u+"px",n.style.top=v+"px";var w=c.left-this.getHostOffset(n).left+i/2;r.style.top="0",r.style.right=null,r.style.bottom=null,r.style.left=w+"px"},preAlign:function(e,n){var r=this.getTooltipElement(e);r.style.left="-999px",r.style.top="-999px",T(r,"p-tooltip-".concat(r.$_ptooltipPosition)),!this.isUnstyled()&&C(r,"p-tooltip-".concat(n)),r.$_ptooltipPosition=n,r.setAttribute("data-p-position",n)},isOutOfBounds:function(e){var n=this.getTooltipElement(e),r=n.getBoundingClientRect(),o=r.top,i=r.left,a=S(n),f=z(n),c=Q();return i+a>c.width||i<0||o<0||o+f>c.height},getTarget:function(e){var n;return Ke(e,"p-inputwrapper")&&(n=fe(e,"input"))!==null&&n!==void 0?n:e},getModifiers:function(e){return e.modifiers&&Object.keys(e.modifiers).length?e.modifiers:e.arg&&_(e.arg)==="object"?Object.entries(e.arg).reduce(function(n,r){var o=Pr(r,2),i=o[0],a=o[1];return(i==="event"||i==="position")&&(n[a]=!0),n},{}):{}}}});const Ur=U({__name:"GuidesStats",props:{rejewski_visits_count:{type:Number,required:!0},kazimierz_wielki_visits_count:{type:Number,required:!0},twardowski_visits_count:{type:Number,required:!0}},setup(t,{expose:e}){e();const n=t,r=b(()=>n.rejewski_visits_count+n.kazimierz_wielki_visits_count+n.twardowski_visits_count),o=c=>r.value===0?0:Math.round(c/r.value*100),i=`Liczba wizyt z przewodnikiem:
- Marian Rejewski: ${n.rejewski_visits_count}
- Król Kazimierz Wielki: ${n.kazimierz_wielki_visits_count}
- Pan Twardowski: ${n.twardowski_visits_count}
`,a=b(()=>[{label:"Marian Rejewski",visits:n.rejewski_visits_count,color:te.rejewski,percentage:o(n.rejewski_visits_count)},{label:"Król Kazimierz Wielki",visits:n.kazimierz_wielki_visits_count,color:te.kazimierz_wielki,percentage:o(n.kazimierz_wielki_visits_count)},{label:"Pan Twardowski",visits:n.twardowski_visits_count,color:te.twardowski,percentage:o(n.twardowski_visits_count)}].sort((c,u)=>u.visits-c.visits)),f={props:n,totalVisits:r,calcPercentage:o,tooltipText:i,items:a};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}}),Nr={class:"guides-stats"};function Kr(t,e,n,r,o,i){const a=Vr;return Ce((l(),p("div",Nr,[(l(!0),p(Z,null,_e(r.items,f=>(l(),p("div",{class:L(["guides-stats__item",`guides-stats__item--${f.color}`]),key:f.label},G(f.percentage.toFixed(0))+"% ",3))),128))])),[[a,r.tooltipText,void 0,{bottom:!0}]])}const Wr=N(Ur,[["render",Kr],["__scopeId","data-v-863e6646"],["__file","/usr/src/app/src/components/GuidesStats.vue"]]),Yr=U({__name:"[landmarkId]",setup(t,{expose:e}){e();const n=Ze(),r=Je(),o=b(()=>Number(n.params.landmarkId)),{data:i,isLoading:a}=_r(o),f=F(""),c=b(()=>{const $={rejewski:"Marian Rejewski",kazimierz_wielki:"Król Kazimierz Wielki",twardowski:"Pan Twardowski"};return r.guide?$[r.guide]:"Virtual Guide"}),u=kr(i),v=()=>{u&&f.value.trim()&&(u.sendMessage(f.value),f.value="",u.scrollToBottom())};Qe(()=>{n.query.visited&&re.POST("/visits",{body:{landmark_id:o.value}})}),he(u.lastMessageId,()=>{u.scrollToBottom()}),he(()=>i.value,$=>{$&&u.connect()},{immediate:!0});const w={route:n,authStore:r,landmarkId:o,landmark:i,isLoading:a,newMessage:f,guideName:c,chat:u,handleSendMessage:v,Header:tt,BaseLoading:et,Layout:nt,Chat:tr,ChatInput:Cr,get Card(){return W},GuidesStats:Wr};return Object.defineProperty(w,"__isScriptSetup",{enumerable:!1,value:!0}),w}}),qr={class:"landmark-view"},Xr={class:"landmark-content"},Gr={key:1,class:"chat-placeholder"};function Zr(t,e,n,r,o,i){return l(),p(Z,null,[m(r.Header,{title:r.landmark?.name||"Wczytywanie",subtitle:r.landmark?.localization_name,back:""},{default:g(()=>[m(r.GuidesStats,{kazimierz_wielki_visits_count:r.landmark?.kazimierz_wielki_visits_count??0,twardowski_visits_count:r.landmark?.twardowski_visits_count??0,rejewski_visits_count:r.landmark?.rejewski_visits_count??0},null,8,["kazimierz_wielki_visits_count","twardowski_visits_count","rejewski_visits_count"])]),_:1},8,["title","subtitle"]),m(r.Layout,null,{default:g(()=>[m(r.BaseLoading,{loading:r.isLoading},{default:g(()=>[s("div",qr,[s("div",Xr,[r.landmark&&r.chat?(l(),x(r.Chat,{key:0,messages:r.chat.messages.value,"guide-name":r.guideName,"is-typing":r.chat.isTyping.value,"is-connected":r.chat.isConnected.value},null,8,["messages","guide-name","is-typing","is-connected"])):(l(),p("div",Gr,[m(r.Card,null,{content:g(()=>[...e[1]||(e[1]=[s("div",{class:"placeholder-content"},[s("i",{class:"pi pi-comments"}),s("p",null,"Ładowanie interfejsu czatu...")],-1)])]),_:1})]))])])]),_:1},8,["loading"]),h(" Fixed Chat Input "),r.landmark&&r.chat?(l(),x(r.ChatInput,{key:0,modelValue:r.newMessage,"onUpdate:modelValue":e[0]||(e[0]=a=>r.newMessage=a),"is-typing":r.chat.isTyping.value,onSend:r.handleSendMessage},null,8,["modelValue","is-typing"])):h("v-if",!0)]),_:1})],64)}const si=N(Yr,[["render",Zr],["__scopeId","data-v-30cfab83"],["__file","/usr/src/app/src/pages/[landmarkId].vue"]]);export{si as default};
