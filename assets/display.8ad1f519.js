var S=Object.defineProperty;var l=(t,o)=>S(t,"name",{value:o,configurable:!0});import{d as h,z as U,x as B,H as O,i as k}from"./vue.esm-bundler.03d0f9c2.js";import{I as g,S as C}from"./useRender.4b8f74ab.js";import{m as E}from"./helpers.11996f79.js";const R=Symbol.for("vuetify:display"),w={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},H=l(function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:w;return E(w,t)},"parseDisplayOptions");function v(t){return g&&!t?window.innerWidth:0}l(v,"getClientWidth");function y(t){return g&&!t?window.innerHeight:0}l(y,"getClientHeight");function P(){const t=g?window.navigator.userAgent:"ssr";function o(m){return Boolean(t.match(m))}l(o,"match");const i=o(/android/i),p=o(/iphone|ipad|ipod/i),f=o(/cordova/i),d=o(/electron/i),n=o(/chrome/i),s=o(/edge/i),x=o(/firefox/i),e=o(/opera/i),r=o(/win/i),a=o(/mac/i),c=o(/linux/i),u=o(/ssr/i);return{android:i,ios:p,cordova:f,electron:d,chrome:n,edge:s,firefox:x,opera:e,win:r,mac:a,linux:c,touch:C,ssr:u}}l(P,"getPlatform");function T(t,o){const{thresholds:i,mobileBreakpoint:p}=H(t),f=h(y(o)),d=P(),n=U({}),s=h(v(o));function x(){f.value=y(),s.value=v()}return l(x,"update"),B(()=>{const e=s.value<i.sm,r=s.value<i.md&&!e,a=s.value<i.lg&&!(r||e),c=s.value<i.xl&&!(a||r||e),u=s.value<i.xxl&&!(c||a||r||e),m=s.value>=i.xxl,D=e?"xs":r?"sm":a?"md":c?"lg":u?"xl":"xxl",A=typeof p=="number"?p:i[p],b=d.ssr?d.android||d.ios||d.opera:s.value<A;n.xs=e,n.sm=r,n.md=a,n.lg=c,n.xl=u,n.xxl=m,n.smAndUp=!e,n.mdAndUp=!(e||r),n.lgAndUp=!(e||r||a),n.xlAndUp=!(e||r||a||c),n.smAndDown=!(a||c||u||m),n.mdAndDown=!(c||u||m),n.lgAndDown=!(u||m),n.xlAndDown=!m,n.name=D,n.height=f.value,n.width=s.value,n.mobile=b,n.mobileBreakpoint=p,n.platform=d,n.thresholds=i}),g&&window.addEventListener("resize",x,{passive:!0}),{...O(n),update:x}}l(T,"createDisplay");function V(){const t=k(R);if(!t)throw new Error("Could not find Vuetify display injection");return t}l(V,"useDisplay");export{R as D,T as c,V as u};
//# sourceMappingURL=display.8ad1f519.js.map
