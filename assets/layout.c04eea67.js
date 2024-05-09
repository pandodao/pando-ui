var te=Object.defineProperty;var h=(n,s)=>te(n,"name",{value:s,configurable:!0});import{u as oe}from"./VProgressCircular.fec55325.js";import{i as H,p as Z,s as D,I as ne,J as ae,b as u,z as se,r as ue,k as $,o as le}from"./vue.esm-bundler.80cafc0b.js";import{p as X,d as ie,t as q}from"./color.7ba4ffe3.js";import{c as O,L as re}from"./helpers.32675158.js";const A=Symbol.for("vuetify:layout"),F=Symbol.for("vuetify:layout-item"),U=1e3,ge=X({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),he=X({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Ie(){const n=H(A);if(!n)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:n.getLayoutItem,mainRect:n.mainRect,mainStyles:n.mainStyles}}h(Ie,"useLayout");function be(n){var f;const s=H(A);if(!s)throw new Error("[Vuetify] Could not find injected layout");const d=(f=n.id)!=null?f:`layout-item-${ie()}`,i=q("useLayoutItem");Z(F,{id:d});const a=D(!1);ne(()=>a.value=!0),ae(()=>a.value=!1);const{layoutItemStyles:r,layoutItemScrimStyles:c}=s.register(i,{...n,active:u(()=>a.value?!1:n.active.value),id:d});return se(()=>s.unregister(d)),{layoutItemStyles:r,layoutRect:s.layoutRect,layoutItemScrimStyles:c}}h(be,"useLayoutItem");const ce=h((n,s,d,i)=>{let a={top:0,left:0,right:0,bottom:0};const r=[{id:"",layer:{...a}}];for(const c of n){const f=s.get(c),g=d.get(c),R=i.get(c);if(!f||!g||!R)continue;const I={...a,[f.value]:parseInt(a[f.value],10)+(R.value?parseInt(g.value,10):0)};r.push({id:c,layer:I}),a=I}return r},"generateLayers");function xe(n){const s=H(A,null),d=u(()=>s?s.rootZIndex.value-100:U),i=ue([]),a=$(new Map),r=$(new Map),c=$(new Map),f=$(new Map),g=$(new Map),{resizeRef:R,contentRect:I}=oe(),J=u(()=>{var e;const t=new Map,l=(e=n.overlaps)!=null?e:[];for(const y of l.filter(o=>o.includes(":"))){const[o,v]=y.split(":");if(!i.value.includes(o)||!i.value.includes(v))continue;const m=a.get(o),w=a.get(v),L=r.get(o),M=r.get(v);!m||!w||!L||!M||(t.set(v,{position:m.value,amount:parseInt(L.value,10)}),t.set(o,{position:w.value,amount:-parseInt(M.value,10)}))}return t}),b=u(()=>{const t=[...new Set([...c.values()].map(e=>e.value))].sort((e,y)=>e-y),l=[];for(const e of t){const y=i.value.filter(o=>{var v;return((v=c.get(o))==null?void 0:v.value)===e});l.push(...y)}return ce(l,a,r,f)}),T=u(()=>!Array.from(g.values()).some(t=>t.value)),x=u(()=>b.value[b.value.length-1].layer),W=u(()=>({"--v-layout-left":O(x.value.left),"--v-layout-right":O(x.value.right),"--v-layout-top":O(x.value.top),"--v-layout-bottom":O(x.value.bottom),...T.value?void 0:{transition:"none"}})),S=u(()=>b.value.slice(1).map((t,l)=>{let{id:e}=t;const{layer:y}=b.value[l],o=r.get(e),v=a.get(e);return{id:e,...y,size:Number(o.value),position:v.value}})),j=h(t=>S.value.find(l=>l.id===t),"getLayoutItem"),C=q("createLayout"),k=D(!1);le(()=>{k.value=!0}),Z(A,{register:(t,l)=>{let{id:e,order:y,position:o,layoutSize:v,elementSize:m,active:w,disableTransitions:L,absolute:M}=l;c.set(e,y),a.set(e,o),r.set(e,v),f.set(e,w),L&&g.set(e,L);const B=re(F,C==null?void 0:C.vnode).indexOf(t);B>-1?i.value.splice(B,0,e):i.value.push(e);const K=u(()=>S.value.findIndex(z=>z.id===e)),P=u(()=>d.value+b.value.length*2-K.value*2),G=u(()=>{const z=o.value==="left"||o.value==="right",E=o.value==="right",ee=o.value==="bottom",N={[o.value]:0,zIndex:P.value,transform:`translate${z?"X":"Y"}(${(w.value?0:-110)*(E||ee?-1:1)}%)`,position:M.value||d.value!==U?"absolute":"fixed",...T.value?void 0:{transition:"none"}};if(!k.value)return N;const p=S.value[K.value];if(!p)throw new Error(`[Vuetify] Could not find layout item "${e}"`);const V=J.value.get(e);return V&&(p[V.position]+=V.amount),{...N,height:z?`calc(100% - ${p.top}px - ${p.bottom}px)`:m.value?`${m.value}px`:void 0,left:E?void 0:`${p.left}px`,right:E?`${p.right}px`:void 0,top:o.value!=="bottom"?`${p.top}px`:void 0,bottom:o.value!=="top"?`${p.bottom}px`:void 0,width:z?m.value?`${m.value}px`:void 0:`calc(100% - ${p.left}px - ${p.right}px)`}}),Q=u(()=>({zIndex:P.value-1}));return{layoutItemStyles:G,layoutItemScrimStyles:Q,zIndex:P}},unregister:t=>{c.delete(t),a.delete(t),r.delete(t),f.delete(t),g.delete(t),i.value=i.value.filter(l=>l!==t)},mainRect:x,mainStyles:W,getLayoutItem:j,items:S,layoutRect:I,rootZIndex:d});const Y=u(()=>["v-layout",{"v-layout--full-height":n.fullHeight}]),_=u(()=>({zIndex:s?d.value:void 0,position:s?"relative":void 0,overflow:s?"hidden":void 0}));return{layoutClasses:Y,layoutStyles:_,getLayoutItem:j,items:S,layoutRect:I,layoutRef:R}}h(xe,"createLayout");export{he as a,Ie as b,xe as c,ge as m,be as u};
//# sourceMappingURL=layout.c04eea67.js.map