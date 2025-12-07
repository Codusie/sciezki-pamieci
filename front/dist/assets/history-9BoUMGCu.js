import{B as A,ak as C,c as p,o as u,F as E,z as T,m as d,a as l,e as b,f as O,P as y,W as $,q as I,a3 as L,I as B,t as D,h as M,w as g,g as _,j as K,x as k}from"./index-BOXtCE_W.js";import{H as F,B as H,I as N}from"./BaseLayout-Di4Mtr-0.js";import{u as R}from"./useQuery-DtBE_wle.js";import{s as Y,f as q,B as V}from"./index-lWTQhquF.js";import{u as Q}from"./index-CChGEUri.js";import"./Button-FHp6hW5j.js";var W=`
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        direction: ltr;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical .p-timeline-event-opposite,
    .p-timeline-vertical .p-timeline-event-content {
        padding: dt('timeline.vertical.event.content.padding');
    }

    .p-timeline-vertical .p-timeline-event-connector {
        width: dt('timeline.event.connector.size');
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: dt('timeline.event.min.height');
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
    }

    .p-timeline-event-content {
        flex: 1;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        align-self: baseline;
        border-width: dt('timeline.event.marker.border.width');
        border-style: solid;
        border-color: dt('timeline.event.marker.border.color');
        border-radius: dt('timeline.event.marker.border.radius');
        width: dt('timeline.event.marker.size');
        height: dt('timeline.event.marker.size');
        background: dt('timeline.event.marker.background');
    }

    .p-timeline-event-marker::before {
        content: ' ';
        border-radius: dt('timeline.event.marker.content.border.radius');
        width: dt('timeline.event.marker.content.size');
        height: dt('timeline.event.marker.content.size');
        background: dt('timeline.event.marker.content.background');
    }

    .p-timeline-event-marker::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('timeline.event.marker.border.radius');
        box-shadow: dt('timeline.event.marker.content.inset.shadow');
    }

    .p-timeline-event-connector {
        flex-grow: 1;
        background: dt('timeline.event.connector.color');
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
        height: dt('timeline.event.connector.size');
    }

    .p-timeline-horizontal .p-timeline-event-opposite,
    .p-timeline-horizontal .p-timeline-event-content {
        padding: dt('timeline.horizontal.event.content.padding');
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }
`,G={root:function(e){var n=e.props;return["p-timeline p-component","p-timeline-"+n.align,"p-timeline-"+n.layout]},event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},U=A.extend({name:"timeline",style:W,classes:G}),J={name:"BaseTimeline",extends:Y,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:U,provide:function(){return{$pcTimeline:this,$parentInstance:this}}};function f(t){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(t)}function S(t,e,n){return(e=X(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function X(t){var e=Z(t,"string");return f(e)=="symbol"?e:e+""}function Z(t,e){if(f(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(f(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var z={name:"Timeline",extends:J,inheritAttrs:!1,methods:{getKey:function(e,n){return this.dataKey?C(e,this.dataKey):n},getPTOptions:function(e,n){return this.ptm(e,{context:{index:n,count:this.value.length}})}},computed:{dataP:function(){return q(S(S({},this.layout,this.layout),this.align,this.align))}}},ee=["data-p"],te=["data-p"],ne=["data-p"],ie=["data-p"],re=["data-p"],ae=["data-p"],oe=["data-p"];function le(t,e,n,i,s,a){return u(),p("div",d({class:t.cx("root")},t.ptmi("root"),{"data-p":a.dataP}),[(u(!0),p(E,null,T(t.value,function(o,r){return u(),p("div",d({key:a.getKey(o,r),class:t.cx("event")},{ref_for:!0},a.getPTOptions("event",r),{"data-p":a.dataP}),[l("div",d({class:t.cx("eventOpposite",{index:r})},{ref_for:!0},a.getPTOptions("eventOpposite",r),{"data-p":a.dataP}),[b(t.$slots,"opposite",{item:o,index:r})],16,ne),l("div",d({class:t.cx("eventSeparator")},{ref_for:!0},a.getPTOptions("eventSeparator",r),{"data-p":a.dataP}),[b(t.$slots,"marker",{item:o,index:r},function(){return[l("div",d({class:t.cx("eventMarker")},{ref_for:!0},a.getPTOptions("eventMarker",r),{"data-p":a.dataP}),null,16,re)]}),r!==t.value.length-1?b(t.$slots,"connector",{key:0,item:o,index:r},function(){return[l("div",d({class:t.cx("eventConnector")},{ref_for:!0},a.getPTOptions("eventConnector",r),{"data-p":a.dataP}),null,16,ae)]}):O("",!0)],16,ie),l("div",d({class:t.cx("eventContent")},{ref_for:!0},a.getPTOptions("eventContent",r),{"data-p":a.dataP}),[b(t.$slots,"content",{item:o,index:r})],16,oe)],16,te)}),128))],16,ee)}z.render=le;var se=A.extend({name:"animateonscroll-directive"}),ce=V.extend({style:se});function h(t){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(t)}function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?w(Object(n),!0).forEach(function(i){me(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function me(t,e,n){return(e=de(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function de(t){var e=ue(t,"string");return h(e)=="symbol"?e:e+""}function ue(t,e){if(h(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(h(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function j(t,e){return he(t)||fe(t,e)||pe(t,e)||ve()}function ve(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pe(t,e){if(t){if(typeof t=="string")return x(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(t,e):void 0}}function x(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}function fe(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,s,a,o,r=[],m=!0,v=!1;try{if(a=(n=n.call(t)).next,e!==0)for(;!(m=(i=a.call(n)).done)&&(r.push(i.value),r.length!==e);m=!0);}catch(c){v=!0,s=c}finally{try{if(!m&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(v)throw s}}return r}}function he(t){if(Array.isArray(t))return t}var be=ce.extend("animateonscroll",{created:function(){this.$value=this.$value||{},this.$el.style.opacity=this.$value.enterClass?"0":""},mounted:function(){this.$el.setAttribute("data-pd-animateonscroll",!0),this.bindIntersectionObserver()},unmounted:function(){this.unbindAnimationEvents(),this.unbindIntersectionObserver()},observer:void 0,resetObserver:void 0,isObserverActive:!1,animationState:void 0,animationEndListener:void 0,methods:{bindAnimationEvents:function(){var e=this;this.animationEndListener||(this.animationEndListener=function(){y(e.$el,[e.$value.enterClass,e.$value.leaveClass]),!e.$modifiers.once&&e.resetObserver.observe(e.$el),e.unbindAnimationEvents()},this.$el.addEventListener("animationend",this.animationEndListener))},bindIntersectionObserver:function(){var e=this,n=this.$value,i=n.root,s=n.rootMargin,a=n.threshold,o=a===void 0?.5:a,r={root:i,rootMargin:s,threshold:o};this.observer=new IntersectionObserver(function(m){var v=j(m,1),c=v[0];e.isObserverActive?c.boundingClientRect.top>0&&(c.isIntersecting?e.enter():e.leave()):c.isIntersecting&&e.enter(),e.isObserverActive=!0},r),setTimeout(function(){return e.observer.observe(e.$el)},0),this.resetObserver=new IntersectionObserver(function(m){var v=j(m,1),c=v[0];c.boundingClientRect.top>0&&!c.isIntersecting&&(e.$el.style.opacity=e.$value.enterClass?"0":"",y(e.$el,[e.$value.enterClass,e.$value.leaveClass]),e.resetObserver.unobserve(e.$el)),e.animationState=void 0},P(P({},r),{},{threshold:0}))},enter:function(){this.animationState!=="enter"&&this.$value.enterClass&&(this.$el.style.opacity="",y(this.$el,this.$value.leaveClass),$(this.$el,this.$value.enterClass),this.$modifiers.once&&this.unbindIntersectionObserver(this.$el),this.bindAnimationEvents(),this.animationState="enter")},leave:function(){this.animationState!=="leave"&&this.$value.leaveClass&&(this.$el.style.opacity=this.$value.enterClass?"0":"",y(this.$el,this.$value.enterClass),$(this.$el,this.$value.leaveClass),this.bindAnimationEvents(),this.animationState="leave")},unbindAnimationEvents:function(){this.animationEndListener&&(this.$el.removeEventListener("animationend",this.animationEndListener),this.animationEndListener=void 0)},unbindIntersectionObserver:function(){var e,n;(e=this.observer)===null||e===void 0||e.unobserve(this.$el),(n=this.resetObserver)===null||n===void 0||n.unobserve(this.$el),this.isObserverActive=!1}}});const ye=I({__name:"history",setup(t,{expose:e}){e();const n=be,{data:i,isLoading:s}=R({queryKey:["get-visits"],queryFn:async()=>{const{data:r}=await B.GET("/visits");return r}}),o={vAnimateonscroll:n,data:i,isLoading:s,formatFullDate:r=>Q(r,"D MMMM YYYY, HH:mm").value,Icon:N,BaseLayout:H,BaseLoading:L,Header:F,get Timeline(){return z}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),ge={class:"history-container"},_e={class:"timeline-card"},Oe={key:0,class:"image-container"},$e=["src","alt"],ke={class:"card-content"},Se={class:"visit-time"},we={key:0,class:"empty-state"};function Pe(t,e,n,i,s,a){return u(),M(i.BaseLayout,null,{default:g(()=>[_(i.Header,{title:"Twoja historia",icon:"pi pi-compass"}),_(i.BaseLoading,{"is-loading":i.isLoading},{default:g(()=>[l("div",ge,[_(i.Timeline,{value:i.data?.data,class:"custom-timeline"},{marker:g(()=>[_(i.Icon,{icon:"pi pi-map-marker",soft:""})]),content:g(o=>[K((u(),p("div",_e,[o.item.landmark.thumbnail_url?(u(),p("div",Oe,[l("img",{src:o.item.landmark.thumbnail_url,alt:o.item.landmark.name,loading:"lazy"},null,8,$e)])):O("v-if",!0),l("div",ke,[l("h2",null,k(o.item.landmark.name),1),l("p",Se,"Odwiedzono "+k(i.formatFullDate(o.item.created_at)),1)])])),[[i.vAnimateonscroll,{enterClass:"fadein",leaveClass:"fadeout"}]])]),_:1},8,["value"]),i.data?.data?.length?O("v-if",!0):(u(),p("div",we,[...e[0]||(e[0]=[l("i",{class:"pi pi-compass",style:{"font-size":"3rem"}},null,-1),l("p",null," Nie odwiedziłeś jeszcze żadnych miejsc. ",-1),l("p",null,[l("small",null," Odwieź miejsce z mapy z włączoną lokalizacją lub zeskanuj kod QR przy atrakcji. ")],-1)])]))])]),_:1},8,["is-loading"])]),_:1})}const Te=D(ye,[["render",Pe],["__scopeId","data-v-5b08ab79"],["__file","/usr/src/app/src/pages/history.vue"]]);export{Te as default};
