var H=Object.defineProperty;var i=(e,n)=>H(e,"name",{value:n,configurable:!0});import{r as g,B as $,o as j,j as C,Y as h,Z as x,_ as u,a as L,$ as m,a0 as p,y,d as _,n as N,a4 as O,a5 as V}from"./vue.esm-bundler.80cafc0b.js";const E=i((e,n)=>{const t=e.__vccOpts||e;for(const[o,l]of n)t[o]=l;return t},"E"),M={},R=i(e=>(O("data-v-259be2b2"),e=e(),V(),e),"j"),T={class:"container"},D=R(()=>p("div",{class:"spinner"},null,-1)),U=[D];function z(e,n){return h(),x("div",T,U)}i(z,"W");const A=E(M,[["render",z],["__scopeId","data-v-259be2b2"],["__file","/home/oumoussa/side-projects/infinite/src/components/Spinner.vue"]]),F=i(e=>({loading(){e.value="loading"},loaded(){e.value="loaded"},complete(){e.value="complete"},error(){e.value="error"}}),"U"),G=i((e,n,t)=>()=>{const o=t.parentEl||document.documentElement;t.prevHeight=o.scrollHeight,n.loading(),e("infinite",n)},"z"),K=i((e,n)=>{const t=e.getBoundingClientRect();if(!n)return t.top>=0&&t.bottom<=window.innerHeight;const o=n.getBoundingClientRect();return t.top>=o.top&&t.bottom<=o.bottom},"A"),b=i(e=>{e.parentEl=document.querySelector(e.target)||null;let n=`0px 0px ${e.distance}px 0px`;e.top&&(n=`${e.distance}px 0px 0px 0px`);const t=new IntersectionObserver(o=>{o[0].isIntersecting&&(e.firstload&&e.emit(),e.firstload=!0)},{root:e.parentEl,rootMargin:n});return t.observe(e.infiniteLoading.value),t},"y"),W={class:"state-error"},Y={__name:"InfiniteLoading",props:{top:{type:Boolean,required:!1},target:{type:[String,Boolean],required:!1},distance:{type:Number,required:!1,default:0},identifier:{required:!1},firstload:{type:Boolean,required:!1,default:!0},slots:{type:Object,required:!1}},emits:["infinite"],setup(e,{emit:n}){const t=e;let o=null;const l=g(null),a=g("ready"),{top:f,firstload:k,target:B,distance:I}=t,{identifier:v}=$(t),r={infiniteLoading:l,target:B,top:f,firstload:k,distance:I,prevHeight:0,parentEl:null};r.emit=G(n,F(a),r);const q=i(()=>_(a,async s=>{const d=r.parentEl||document.documentElement;await N(),s=="loaded"&&f&&(d.scrollTop=d.scrollHeight-r.prevHeight),s=="loaded"&&K(l.value,r.parentEl)&&r.emit(),s=="complete"&&o.disconnect()}),"k"),S=i(()=>_(v,()=>{a.value="ready",o.disconnect(),o=b(r)}),"q");return j(()=>{o=b(r),q(),v&&S()}),C(()=>{o.disconnect()}),(s,d)=>(h(),x("div",{ref_key:"infiniteLoading",ref:l},[a.value=="loading"?u(s.$slots,"spinner",{key:0},()=>[L(A)],!0):m("v-if",!0),a.value=="complete"?u(s.$slots,"complete",{key:1},()=>{var c;return[p("span",null,y(((c=e.slots)==null?void 0:c.complete)||"No more results!"),1)]},!0):m("v-if",!0),a.value=="error"?u(s.$slots,"error",{key:2,retry:r.emit},()=>{var c;return[p("span",W,[p("span",null,y(((c=e.slots)==null?void 0:c.error)||"Oops something went wrong!"),1),p("button",{class:"retry",onClick:d[0]||(d[0]=(...w)=>r.emit&&r.emit(...w))}," retry ")])]},!0):m("v-if",!0)],512))}},P=E(Y,[["__scopeId","data-v-9d82030b"],["__file","/home/oumoussa/side-projects/infinite/src/components/InfiniteLoading.vue"]]);export{P as K};
//# sourceMappingURL=v3-infinite-loading.46851eaf.js.map