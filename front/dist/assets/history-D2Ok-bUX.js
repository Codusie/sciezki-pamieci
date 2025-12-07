import{_ as E,H as I,I as T}from"./BaseLayout.vue_vue_type_script_setup_true_lang-ctAqLFSO.js";import{B as z,ak as L,c as p,o as u,F as B,A as M,m as d,a as l,e as y,f as $,P as g,W as k,q as D,h as K,w as _,g as O,x as f,j as N,v as w,a3 as F,I as H,y as R}from"./index-Dam8Q1TV.js";import{u as Y}from"./useQuery-1_cQ0crr.js";import{s as q,f as V,B as Q}from"./index-PGwHG8IR.js";import{u as W}from"./index-JraFiIXf.js";var G=`
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
`,U={root:function(e){var n=e.props;return["p-timeline p-component","p-timeline-"+n.align,"p-timeline-"+n.layout]},event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},J=z.extend({name:"timeline",style:G,classes:U}),X={name:"BaseTimeline",extends:q,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:J,provide:function(){return{$pcTimeline:this,$parentInstance:this}}};function h(t){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(t)}function S(t,e,n){return(e=Z(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Z(t){var e=ee(t,"string");return h(e)=="symbol"?e:e+""}function ee(t,e){if(h(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(h(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var C={name:"Timeline",extends:X,inheritAttrs:!1,methods:{getKey:function(e,n){return this.dataKey?L(e,this.dataKey):n},getPTOptions:function(e,n){return this.ptm(e,{context:{index:n,count:this.value.length}})}},computed:{dataP:function(){return V(S(S({},this.layout,this.layout),this.align,this.align))}}},te=["data-p"],ne=["data-p"],ie=["data-p"],re=["data-p"],ae=["data-p"],oe=["data-p"],le=["data-p"];function se(t,e,n,i,s,a){return u(),p("div",d({class:t.cx("root")},t.ptmi("root"),{"data-p":a.dataP}),[(u(!0),p(B,null,M(t.value,function(o,r){return u(),p("div",d({key:a.getKey(o,r),class:t.cx("event")},{ref_for:!0},a.getPTOptions("event",r),{"data-p":a.dataP}),[l("div",d({class:t.cx("eventOpposite",{index:r})},{ref_for:!0},a.getPTOptions("eventOpposite",r),{"data-p":a.dataP}),[y(t.$slots,"opposite",{item:o,index:r})],16,ie),l("div",d({class:t.cx("eventSeparator")},{ref_for:!0},a.getPTOptions("eventSeparator",r),{"data-p":a.dataP}),[y(t.$slots,"marker",{item:o,index:r},function(){return[l("div",d({class:t.cx("eventMarker")},{ref_for:!0},a.getPTOptions("eventMarker",r),{"data-p":a.dataP}),null,16,ae)]}),r!==t.value.length-1?y(t.$slots,"connector",{key:0,item:o,index:r},function(){return[l("div",d({class:t.cx("eventConnector")},{ref_for:!0},a.getPTOptions("eventConnector",r),{"data-p":a.dataP}),null,16,oe)]}):$("",!0)],16,re),l("div",d({class:t.cx("eventContent")},{ref_for:!0},a.getPTOptions("eventContent",r),{"data-p":a.dataP}),[y(t.$slots,"content",{item:o,index:r})],16,le)],16,ne)}),128))],16,te)}C.render=se;var ce=z.extend({name:"animateonscroll-directive"}),me=Q.extend({style:ce});function b(t){"@babel/helpers - typeof";return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(t)}function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?P(Object(n),!0).forEach(function(i){de(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function de(t,e,n){return(e=ue(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ue(t){var e=ve(t,"string");return b(e)=="symbol"?e:e+""}function ve(t,e){if(b(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(b(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function x(t,e){return be(t)||he(t,e)||fe(t,e)||pe()}function pe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fe(t,e){if(t){if(typeof t=="string")return A(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(t,e):void 0}}function A(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}function he(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,s,a,o,r=[],m=!0,v=!1;try{if(a=(n=n.call(t)).next,e!==0)for(;!(m=(i=a.call(n)).done)&&(r.push(i.value),r.length!==e);m=!0);}catch(c){v=!0,s=c}finally{try{if(!m&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(v)throw s}}return r}}function be(t){if(Array.isArray(t))return t}var ye=me.extend("animateonscroll",{created:function(){this.$value=this.$value||{},this.$el.style.opacity=this.$value.enterClass?"0":""},mounted:function(){this.$el.setAttribute("data-pd-animateonscroll",!0),this.bindIntersectionObserver()},unmounted:function(){this.unbindAnimationEvents(),this.unbindIntersectionObserver()},observer:void 0,resetObserver:void 0,isObserverActive:!1,animationState:void 0,animationEndListener:void 0,methods:{bindAnimationEvents:function(){var e=this;this.animationEndListener||(this.animationEndListener=function(){g(e.$el,[e.$value.enterClass,e.$value.leaveClass]),!e.$modifiers.once&&e.resetObserver.observe(e.$el),e.unbindAnimationEvents()},this.$el.addEventListener("animationend",this.animationEndListener))},bindIntersectionObserver:function(){var e=this,n=this.$value,i=n.root,s=n.rootMargin,a=n.threshold,o=a===void 0?.5:a,r={root:i,rootMargin:s,threshold:o};this.observer=new IntersectionObserver(function(m){var v=x(m,1),c=v[0];e.isObserverActive?c.boundingClientRect.top>0&&(c.isIntersecting?e.enter():e.leave()):c.isIntersecting&&e.enter(),e.isObserverActive=!0},r),setTimeout(function(){return e.observer.observe(e.$el)},0),this.resetObserver=new IntersectionObserver(function(m){var v=x(m,1),c=v[0];c.boundingClientRect.top>0&&!c.isIntersecting&&(e.$el.style.opacity=e.$value.enterClass?"0":"",g(e.$el,[e.$value.enterClass,e.$value.leaveClass]),e.resetObserver.unobserve(e.$el)),e.animationState=void 0},j(j({},r),{},{threshold:0}))},enter:function(){this.animationState!=="enter"&&this.$value.enterClass&&(this.$el.style.opacity="",g(this.$el,this.$value.leaveClass),k(this.$el,this.$value.enterClass),this.$modifiers.once&&this.unbindIntersectionObserver(this.$el),this.bindAnimationEvents(),this.animationState="enter")},leave:function(){this.animationState!=="leave"&&this.$value.leaveClass&&(this.$el.style.opacity=this.$value.enterClass?"0":"",g(this.$el,this.$value.enterClass),k(this.$el,this.$value.leaveClass),this.bindAnimationEvents(),this.animationState="leave")},unbindAnimationEvents:function(){this.animationEndListener&&(this.$el.removeEventListener("animationend",this.animationEndListener),this.animationEndListener=void 0)},unbindIntersectionObserver:function(){var e,n;(e=this.observer)===null||e===void 0||e.unobserve(this.$el),(n=this.resetObserver)===null||n===void 0||n.unobserve(this.$el),this.isObserverActive=!1}}});const ge={class:"history-container"},_e={class:"timeline-card"},Oe={key:0,class:"image-container"},$e=["src","alt"],ke={class:"card-content"},we={class:"visit-time"},Se={key:0,class:"empty-state"},Pe=D({__name:"history",setup(t){const e=ye,{data:n,isLoading:i}=Y({queryKey:["get-visits"],queryFn:async()=>{const{data:a}=await H.GET("/visits");return a}}),s=a=>W(a,"D MMMM YYYY, HH:mm").value;return(a,o)=>(u(),K(E,null,{default:_(()=>[O(I,{title:"Twoja historia",icon:"pi pi-compass"}),O(F,{"is-loading":f(i)},{default:_(()=>[l("div",ge,[O(f(C),{value:f(n)?.data,class:"custom-timeline"},{marker:_(()=>[O(T,{icon:"pi pi-map-marker",soft:""})]),content:_(r=>[N((u(),p("div",_e,[r.item.landmark.thumbnail_url?(u(),p("div",Oe,[l("img",{src:r.item.landmark.thumbnail_url,alt:r.item.landmark.name,loading:"lazy"},null,8,$e)])):$("",!0),l("div",ke,[l("h2",null,w(r.item.landmark.name),1),l("p",we,"Odwiedzono "+w(s(r.item.created_at)),1)])])),[[f(e),{enterClass:"fadein",leaveClass:"fadeout"}]])]),_:1},8,["value"]),f(n)?.data?.length?$("",!0):(u(),p("div",Se,[...o[0]||(o[0]=[l("i",{class:"pi pi-compass",style:{"font-size":"3rem"}},null,-1),l("p",null," Nie odwiedziłeś jeszcze żadnych miejsc. ",-1),l("p",null,[l("small",null," Odwieź miejsce z mapy z włączoną lokalizacją lub zeskanuj kod QR przy atrakcji. ")],-1)])]))])]),_:1},8,["is-loading"])]),_:1}))}}),Ee=R(Pe,[["__scopeId","data-v-cfdfa9e1"]]);export{Ee as default};
