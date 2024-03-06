var T=Object.defineProperty;var d=(o,r)=>T(o,"name",{value:r,configurable:!0});import{K as x,T as g,h as p,E as b}from"./vue.esm-bundler.80cafc0b.js";import{g as m,p as V}from"./color.7ba4ffe3.js";const _=V({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function s(o,r,e){return m()({name:o,props:_({mode:e,origin:r}),setup(i,l){let{slots:a}=l;const t={onBeforeEnter(n){i.origin&&(n.style.transformOrigin=i.origin)},onLeave(n){if(i.leaveAbsolute){const{offsetTop:f,offsetLeft:c,offsetWidth:y,offsetHeight:u}=n;n._transitionInitialStyles={position:n.style.position,top:n.style.top,left:n.style.left,width:n.style.width,height:n.style.height},n.style.position="absolute",n.style.top=`${f}px`,n.style.left=`${c}px`,n.style.width=`${y}px`,n.style.height=`${u}px`}i.hideOnLeave&&n.style.setProperty("display","none","important")},onAfterLeave(n){if(i.leaveAbsolute&&(n==null?void 0:n._transitionInitialStyles)){const{position:f,top:c,left:y,width:u,height:S}=n._transitionInitialStyles;delete n._transitionInitialStyles,n.style.position=f||"",n.style.top=c||"",n.style.left=y||"",n.style.width=u||"",n.style.height=S||""}}};return()=>{const n=i.group?x:g;return p(n,{name:i.disabled?"":o,css:!i.disabled,...i.group?void 0:{mode:i.mode},...i.disabled?{}:t},a.default)}}})}d(s,"createCssTransition");function h(o,r){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return m()({name:o,props:{mode:{type:String,default:e},disabled:Boolean},setup(i,l){let{slots:a}=l;return()=>p(g,{name:i.disabled?"":o,css:!i.disabled,...i.disabled?{}:r},a.default)}})}d(h,"createJavascriptTransition");function v(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const e=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",i=b(`offset-${e}`);return{onBeforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[e]:t.style[e]}},onEnter(t){const n=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const f=`${t[i]}px`;t.style[e]="0",t.offsetHeight,t.style.transition=n.transition,o&&t._parent&&t._parent.classList.add(o),requestAnimationFrame(()=>{t.style[e]=f})},onAfterEnter:a,onEnterCancelled:a,onLeave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[e]:t.style[e]},t.style.overflow="hidden",t.style[e]=`${t[i]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[e]="0")},onAfterLeave:l,onLeaveCancelled:l};function l(t){o&&t._parent&&t._parent.classList.remove(o),a(t)}function a(t){const n=t._initialStyle[e];t.style.overflow=t._initialStyle.overflow,n!=null&&(t.style[e]=n),delete t._initialStyle}}d(v,"ExpandTransitionGenerator");const A=s("fab-transition","center center","out-in"),B=s("dialog-bottom-transition"),$=s("dialog-top-transition"),P=s("fade-transition"),C=s("scale-transition"),F=s("scroll-x-transition"),X=s("scroll-x-reverse-transition"),I=s("scroll-y-transition"),R=s("scroll-y-reverse-transition"),Y=s("slide-x-transition"),z=s("slide-x-reverse-transition"),H=s("slide-y-transition"),O=s("slide-y-reverse-transition"),k=h("expand-transition",v()),q=h("expand-x-transition",v("",!0));export{P as V,k as a,A as b,B as c,$ as d,C as e,F as f,X as g,I as h,R as i,Y as j,z as k,H as l,O as m,q as n};
//# sourceMappingURL=index.b676db0f.js.map
