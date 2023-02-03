var oe=Object.defineProperty;var b=(e,v)=>oe(e,"name",{value:v,configurable:!0});import{a as r,m as V,T as _,b as $,r as q,j as se,p as ie,d as w,f as re,g as de,n as ue}from"./vue.esm-bundler.330b8bcd.js";import{f as j}from"./forwardRefs.c003b6b8.js";import{u as U}from"./proxiedModel.815b9064.js";import{d as H,e as N,f as L,h as W,V as X}from"./VOverlay.d681ab18.js";import{o as ce}from"./helpers.6dbb45ef.js";import{V as x,m as ve,u as me,g as fe}from"./variant.b259332f.js";import{d as I,b as Y,g as pe,u as C,p as ge,I as he}from"./useRender.b59b3e39.js";import{c as E}from"./createSimpleFunctional.05bfccd4.js";import{I as A,m as ye}from"./VIcon.c758310f.js";import{m as z,u as be}from"./density.38f0f124.js";import{V as O}from"./VAvatar.f79052e0.js";import{R as Ve}from"./index.b967f916.js";import{m as xe,a as Ce,L as Pe}from"./loader.c202c022.js";import{m as Se,u as Ae}from"./border.8a30a617.js";import{m as Ie,u as ke}from"./dimensions.6590eaa4.js";import{m as $e,u as we}from"./elevation.b2f27a68.js";import{m as Ee,u as Te}from"./location.2cb2469d.js";import{m as Be,u as De}from"./position.03fcbfb6.js";import{m as _e,u as Le}from"./rounded.257cff90.js";import{m as Oe,u as Re}from"./router.a6c113d7.js";import{m as Fe,p as Me}from"./color.66c7a00f.js";import{V as qe}from"./VImg.9ee07324.js";import{a as S,d as je,s as R,b as Ue,n as He}from"./easing.36b781ab.js";const G=I({name:"VDialogTransition",props:{target:Object},setup(e,v){let{slots:a}=v;const t={onBeforeEnter(o){o.style.pointerEvents="none",o.style.visibility="hidden"},async onEnter(o,u){var c;await new Promise(m=>requestAnimationFrame(m)),await new Promise(m=>requestAnimationFrame(m)),o.style.visibility="";const{x:s,y:n,sx:d,sy:f,speed:i}=M(e.target,o),l=S(o,[{transform:`translate(${s}px, ${n}px) scale(${d}, ${f})`,opacity:0},{}],{duration:225*i,easing:je});(c=F(o))==null||c.forEach(m=>{S(m,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*i,easing:R})}),l.finished.then(()=>u())},onAfterEnter(o){o.style.removeProperty("pointer-events")},onBeforeLeave(o){o.style.pointerEvents="none"},async onLeave(o,u){var c;await new Promise(m=>requestAnimationFrame(m));const{x:s,y:n,sx:d,sy:f,speed:i}=M(e.target,o);S(o,[{},{transform:`translate(${s}px, ${n}px) scale(${d}, ${f})`,opacity:0}],{duration:125*i,easing:Ue}).finished.then(()=>u()),(c=F(o))==null||c.forEach(m=>{S(m,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*i,easing:R})})},onAfterLeave(o){o.style.removeProperty("pointer-events")}};return()=>e.target?r(_,V({name:"dialog-transition"},t,{css:!1}),a):r(_,{name:"dialog-transition"},a)}});function F(e){var v;const a=(v=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:v.children;return a&&[...a]}b(F,"getChildren");function M(e,v){const a=e.getBoundingClientRect(),t=He(v),[o,u]=getComputedStyle(v).transformOrigin.split(" ").map(k=>parseFloat(k)),[c,s]=getComputedStyle(v).getPropertyValue("--v-overlay-anchor-origin").split(" ");let n=a.left+a.width/2;c==="left"||s==="left"?n-=a.width/2:(c==="right"||s==="right")&&(n+=a.width/2);let d=a.top+a.height/2;c==="top"||s==="top"?d-=a.height/2:(c==="bottom"||s==="bottom")&&(d+=a.height/2);const f=a.width/t.width,i=a.height/t.height,l=Math.max(1,f,i),m=f/l||0,g=i/l||0,p=t.width*t.height/(window.innerWidth*window.innerHeight),h=p>.12?Math.min(1.5,(p-.12)*10+1):1;return{x:n-(o+t.left),y:d-(u+t.top),sx:m,sy:g,speed:h}}b(M,"getDimensions");const bt=Y()({name:"VMenu",props:{id:String,...ce(H({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:G}}),["absolute"])},emits:{"update:modelValue":e=>!0},setup(e,v){let{slots:a}=v;const t=U(e,"modelValue"),{scopeId:o}=N(),u=pe(),c=$(()=>e.id||`v-menu-${u}`),s=q(),n=se(L,null);let d=0;ie(L,{register(){++d},unregister(){--d},closeParents(){setTimeout(()=>{d||(t.value=!1,n==null||n.closeParents())},40)}}),w(t,i=>{i?n==null||n.register():n==null||n.unregister()});function f(){n==null||n.closeParents()}return b(f,"onClickOutside"),C(()=>{const[i]=W(e);return r(X,V({ref:s,class:["v-menu"]},i,{modelValue:t.value,"onUpdate:modelValue":l=>t.value=l,absolute:!0,activatorProps:V({"aria-haspopup":"menu","aria-expanded":String(t.value),"aria-owns":c.value},e.activatorProps),"onClick:outside":f},o),{activator:a.activator,default:function(){for(var l,m=arguments.length,g=new Array(m),p=0;p<m;p++)g[p]=arguments[p];return r(x,{root:!0},{default:()=>[(l=a.default)==null?void 0:l.call(a,...g)]})}})}),j({id:c},s)}});const Ne=I({name:"VCardActions",setup(e,v){let{slots:a}=v;return ge({VBtn:{variant:"text"}}),C(()=>{var t;return r("div",{class:"v-card-actions"},[(t=a.default)==null?void 0:t.call(a)])}),{}}}),We=E("v-card-subtitle"),Xe=E("v-card-title"),Ye=I({name:"VCardItem",props:{appendAvatar:String,appendIcon:A,prependAvatar:String,prependIcon:A,subtitle:String,title:String,...z()},setup(e,v){let{slots:a}=v;return C(()=>{var t,o,u,c,s;const n=!!(e.prependAvatar||e.prependIcon||a.prepend),d=!!(e.appendAvatar||e.appendIcon||a.append),f=!!(e.title||a.title),i=!!(e.subtitle||a.subtitle);return r("div",{class:"v-card-item"},[n&&r(x,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>{var l;return[r("div",{class:"v-card-item__prepend"},[(l=(t=a.prepend)==null?void 0:t.call(a))!=null?l:r(O,null,null)])]}}),r("div",{class:"v-card-item__content"},[f&&r(Xe,{key:"title"},{default:()=>{var l;return[(l=(o=a.title)==null?void 0:o.call(a))!=null?l:e.title]}}),i&&r(We,{key:"subtitle"},{default:()=>{var l;return[(l=(u=a.subtitle)==null?void 0:u.call(a))!=null?l:e.subtitle]}}),(c=a.default)==null?void 0:c.call(a)]),d&&r(x,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>{var l;return[r("div",{class:"v-card-item__append"},[(l=(s=a.append)==null?void 0:s.call(a))!=null?l:r(O,null,null)])]}})])}),{}}}),ze=E("v-card-text"),Vt=I({name:"VCard",directives:{Ripple:Ve},props:{appendAvatar:String,appendIcon:A,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:A,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...Fe(),...Se(),...z(),...Ie(),...$e(),...xe(),...Ee(),...Be(),..._e(),...Oe(),...ye(),...ve({variant:"elevated"})},setup(e,v){let{attrs:a,slots:t}=v;const{themeClasses:o}=Me(e),{borderClasses:u}=Ae(e),{colorClasses:c,colorStyles:s,variantClasses:n}=me(e),{densityClasses:d}=be(e),{dimensionStyles:f}=ke(e),{elevationClasses:i}=we(e),{loaderClasses:l}=Ce(e),{locationStyles:m}=Te(e),{positionClasses:g}=De(e),{roundedClasses:p}=Le(e),h=Re(e,a),k=$(()=>e.link!==!1&&h.isLink.value),P=$(()=>!e.disabled&&e.link!==!1&&(e.link||h.isClickable.value));return C(()=>{var T,B,D;const J=k.value?"a":e.tag,K=!!(t.title||e.title),Q=!!(t.subtitle||e.subtitle),Z=K||Q,ee=!!(t.append||e.appendAvatar||e.appendIcon),te=!!(t.prepend||e.prependAvatar||e.prependIcon),ae=!!(t.image||e.image),ne=Z||te||ee,le=!!(t.text||e.text);return re(r(J,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":P.value},o.value,u.value,c.value,d.value,i.value,l.value,g.value,p.value,n.value],style:[s.value,f.value,m.value],href:h.href.value,onClick:P.value&&h.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[ae&&r(x,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>{var y;return[r("div",{class:"v-card__image"},[(y=(T=t.image)==null?void 0:T.call(t))!=null?y:r(qe,null,null)])]}}),r(Pe,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),ne&&r(Ye,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),le&&r(ze,{key:"text"},{default:()=>{var y;return[(y=(B=t.text)==null?void 0:B.call(t))!=null?y:e.text]}}),(D=t.default)==null?void 0:D.call(t),t.actions&&r(Ne,null,{default:t.actions}),fe(P.value,"v-card")]}),[[de("ripple"),P.value&&e.ripple]])}),{}}});const xt=Y()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...H({origin:"center center",scrollStrategy:"block",transition:{component:G},zIndex:2400})},emits:{"update:modelValue":e=>!0},setup(e,v){let{slots:a}=v;const t=U(e,"modelValue"),{scopeId:o}=N(),u=q();function c(s){var n,d;const f=s.relatedTarget,i=s.target;if(f!==i&&(n=u.value)!=null&&n.contentEl&&(d=u.value)!=null&&d.globalTop&&![document,u.value.contentEl].includes(i)&&!u.value.contentEl.contains(i)){const l=[...u.value.contentEl.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter(p=>!p.hasAttribute("disabled")&&!p.matches('[tabindex="-1"]'));if(!l.length)return;const m=l[0],g=l[l.length-1];f===m?g.focus():m.focus()}}return b(c,"onFocusin"),he&&w(()=>t.value&&e.retainFocus,s=>{s?document.addEventListener("focusin",c):document.removeEventListener("focusin",c)},{immediate:!0}),w(t,async s=>{if(await ue(),s){var n;(n=u.value.contentEl)==null||n.focus({preventScroll:!0})}else{var d;(d=u.value.activatorEl)==null||d.focus({preventScroll:!0})}}),C(()=>{const[s]=W(e);return r(X,V({ref:u,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable}]},s,{modelValue:t.value,"onUpdate:modelValue":n=>t.value=n,"aria-role":"dialog","aria-modal":"true",activatorProps:V({"aria-haspopup":"dialog","aria-expanded":String(t.value)},e.activatorProps)},o),{activator:a.activator,default:function(){for(var n,d=arguments.length,f=new Array(d),i=0;i<d;i++)f[i]=arguments[i];return r(x,{root:!0},{default:()=>[(n=a.default)==null?void 0:n.call(a,...f)]})}})}),j({},u)}});export{bt as V,Vt as a,Ne as b,Ye as c,We as d,ze as e,Xe as f,xt as g,G as h};
//# sourceMappingURL=VDialog.a4bfe643.js.map