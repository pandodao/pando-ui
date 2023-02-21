var ue=Object.defineProperty;var f=(e,r)=>ue(e,"name",{value:r,configurable:!0});import{j as V,r as S,p as I,b as m,l as x,d as ce,f as de,g as ve,a as y}from"./vue.esm-bundler.60beb779.js";import{c as F}from"./createSimpleFunctional.057254cd.js";import{R as me}from"./index.d3586bd0.js";import{m as fe,u as pe,g as ye,V as $}from"./variant.f60f637f.js";import{I as G,m as ge,V as R}from"./VIcon.ccd22ecd.js";import{m as Se,u as he}from"./border.84bdbe82.js";import{m as ke,u as we}from"./density.3ab93966.js";import{m as be,u as Ae}from"./dimensions.71f8bcb1.js";import{m as Pe,u as Ve}from"./elevation.6146b715.js";import{m as Ie,u as Ce}from"./rounded.08843391.js";import{m as Me,u as Oe}from"./router.9cc51735.js";import{m as Le,p as _e}from"./color.7f161142.js";import{u as T}from"./proxiedModel.c4bc26c4.js";import{a as Be,f as De,g as Ne,b as $e,u as Ge}from"./useRender.06ad421e.js";import{V as j}from"./VAvatar.709f16cb.js";import{E}from"./helpers.f4a4e1c6.js";const O=Symbol.for("vuetify:list");function ut(){const e=V(O,{hasPrepend:S(!1),updateHasPrepend:()=>null}),r={hasPrepend:S(!1),updateHasPrepend:l=>{l&&(r.hasPrepend.value=l)}};return I(O,r),e}f(ut,"createList");function Re(){return V(O,null)}f(Re,"useList");const Te={open:e=>{let{id:r,value:l,opened:n,parents:a}=e;if(l){const t=new Set;t.add(r);let s=a.get(r);for(;s!=null;)t.add(s),s=a.get(s);return t}else return n.delete(r),n},select:()=>null},H={open:e=>{let{id:r,value:l,opened:n,parents:a}=e;if(l){let t=a.get(r);for(n.add(r);t!=null&&t!==r;)n.add(t),t=a.get(t);return n}else n.delete(r);return n},select:()=>null},je={open:H.open,select:e=>{let{id:r,value:l,opened:n,parents:a}=e;if(!l)return n;const t=[];let s=a.get(r);for(;s!=null;)t.push(s),s=a.get(s);return new Set(t)}},L=f(e=>{const r={select:l=>{let{id:n,value:a,selected:t}=l;if(e&&!a){const s=Array.from(t.entries()).reduce((c,g)=>{let[h,p]=g;return p==="on"?[...c,h]:c},[]);if(s.length===1&&s[0]===n)return t}return t.set(n,a?"on":"off"),t},in:(l,n,a)=>{let t=new Map;for(const s of l||[])t=r.select({id:s,value:!0,selected:new Map(t),children:n,parents:a});return t},out:l=>{const n=[];for(const[a,t]of l.entries())t==="on"&&n.push(a);return n}};return r},"independentSelectStrategy"),K=f(e=>{const r=L(e);return{select:n=>{let{selected:a,id:t,...s}=n;const c=a.has(t)?new Map([[t,a.get(t)]]):new Map;return r.select({...s,id:t,selected:c})},in:(n,a,t)=>{let s=new Map;return n!=null&&n.length&&(s=r.in(n.slice(0,1),a,t)),s},out:(n,a,t)=>r.out(n,a,t)}},"independentSingleSelectStrategy"),Ee=f(e=>{const r=L(e);return{select:n=>{let{id:a,selected:t,children:s,...c}=n;return s.has(a)?t:r.select({id:a,selected:t,children:s,...c})},in:r.in,out:r.out}},"leafSelectStrategy"),xe=f(e=>{const r=K(e);return{select:n=>{let{id:a,selected:t,children:s,...c}=n;return s.has(a)?t:r.select({id:a,selected:t,children:s,...c})},in:r.in,out:r.out}},"leafSingleSelectStrategy"),Fe=f(e=>{const r={select:l=>{let{id:n,value:a,selected:t,children:s,parents:c}=l;const g=new Map(t),h=[n];for(;h.length;){const i=h.shift();t.set(i,a?"on":"off"),s.has(i)&&h.push(...s.get(i))}let p=c.get(n);for(;p;){const i=s.get(p),o=i.every(v=>t.get(v)==="on"),d=i.every(v=>!t.has(v)||t.get(v)==="off");t.set(p,o?"on":d?"off":"indeterminate"),p=c.get(p)}return e&&!a&&Array.from(t.entries()).reduce((o,d)=>{let[v,k]=d;return k==="on"?[...o,v]:o},[]).length===0?g:t},in:(l,n,a)=>{let t=new Map;for(const s of l||[])t=r.select({id:s,value:!0,selected:new Map(t),children:n,parents:a});return t},out:(l,n)=>{const a=[];for(const[t,s]of l.entries())s==="on"&&!n.has(t)&&a.push(t);return a}};return r},"classicSelectStrategy"),P=Symbol.for("vuetify:nested"),U={id:S(),root:{register:()=>null,unregister:()=>null,parents:S(new Map),children:S(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:S(new Set),selected:S(new Map),selectedValues:S([])}},ct=Be({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),dt=f(e=>{let r=!1;const l=S(new Map),n=S(new Map),a=T(e,"opened",e.opened,i=>new Set(i),i=>[...i.values()]),t=m(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return xe(e.mandatory);case"leaf":return Ee(e.mandatory);case"independent":return L(e.mandatory);case"single-independent":return K(e.mandatory);case"classic":default:return Fe(e.mandatory)}}),s=m(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return je;case"single":return Te;case"multiple":default:return H}}),c=T(e,"selected",e.selected,i=>t.value.in(i,l.value,n.value),i=>t.value.out(i,l.value,n.value));x(()=>{r=!0});function g(i){const o=[];let d=i;for(;d!=null;)o.unshift(d),d=n.value.get(d);return o}f(g,"getPath");const h=De("nested"),p={id:S(),root:{opened:a,selected:c,selectedValues:m(()=>{const i=[];for(const[o,d]of c.value.entries())d==="on"&&i.push(o);return i}),register:(i,o,d)=>{o&&i!==o&&n.value.set(i,o),d&&l.value.set(i,[]),o!=null&&l.value.set(o,[...l.value.get(o)||[],i])},unregister:i=>{var d;if(r)return;l.value.delete(i);const o=n.value.get(i);if(o){const v=(d=l.value.get(o))!=null?d:[];l.value.set(o,v.filter(k=>k!==i))}n.value.delete(i),a.value.delete(i)},open:(i,o,d)=>{h.emit("click:open",{id:i,value:o,path:g(i),event:d});const v=s.value.open({id:i,value:o,opened:new Set(a.value),children:l.value,parents:n.value,event:d});v&&(a.value=v)},openOnSelect:(i,o,d)=>{const v=s.value.select({id:i,value:o,selected:new Map(c.value),opened:new Set(a.value),children:l.value,parents:n.value,event:d});v&&(a.value=v)},select:(i,o,d)=>{h.emit("click:select",{id:i,value:o,path:g(i),event:d});const v=t.value.select({id:i,value:o,selected:new Map(c.value),children:l.value,parents:n.value,event:d});v&&(c.value=v),p.root.openOnSelect(i,o,d)},children:l,parents:n}};return I(P,p),p.root},"useNested"),He=f((e,r)=>{const l=V(P,U),n=Symbol(Ne()),a=m(()=>{var s;return(s=e.value)!=null?s:n}),t={...l,id:a,open:(s,c)=>l.root.open(a.value,s,c),openOnSelect:(s,c)=>l.root.openOnSelect(a.value,s,c),isOpen:m(()=>l.root.opened.value.has(a.value)),parent:m(()=>l.root.parents.value.get(a.value)),select:(s,c)=>l.root.select(a.value,s,c),isSelected:m(()=>l.root.selected.value.get(a.value)==="on"),isIndeterminate:m(()=>l.root.selected.value.get(a.value)==="indeterminate"),isLeaf:m(()=>!l.root.children.value.get(a.value)),isGroupActivator:l.isGroupActivator};return!l.isGroupActivator&&l.root.register(a.value,l.id.value,r),x(()=>{!l.isGroupActivator&&l.root.unregister(a.value)}),r&&I(P,t),t},"useNestedItem"),vt=f(()=>{const e=V(P,U);I(P,{...e,isGroupActivator:!0})},"useNestedGroupActivator");const Ke=F("v-list-item-subtitle"),Ue=F("v-list-item-title"),mt=$e()({name:"VListItem",directives:{Ripple:me},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:G,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:G,ripple:{type:Boolean,default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:E,onClickOnce:E,...Se(),...ke(),...be(),...Pe(),...Ie(),...Me(),...ge(),...Le(),...fe({variant:"text"})},emits:{click:e=>!0},setup(e,r){let{attrs:l,slots:n,emit:a}=r;const t=Oe(e,l),s=m(()=>{var u;return(u=e.value)!=null?u:t.href.value}),{select:c,isSelected:g,isIndeterminate:h,isGroupActivator:p,root:i,parent:o,openOnSelect:d}=He(s,!1),v=Re(),k=m(()=>{var u;return e.active!==!1&&(e.active||((u=t.isActive)==null?void 0:u.value)||g.value)}),_=m(()=>e.link!==!1&&t.isLink.value),w=m(()=>!e.disabled&&e.link!==!1&&(e.link||t.isClickable.value||e.value!=null&&!!v)),q=m(()=>e.rounded||e.nav),z=m(()=>{var u;return{color:k.value&&(u=e.activeColor)!=null?u:e.color,variant:e.variant}});ce(()=>{var u;return(u=t.isActive)==null?void 0:u.value},u=>{u&&o.value!=null&&i.open(o.value,!0),u&&d(u)},{immediate:!0});const{themeClasses:J}=_e(e),{borderClasses:Q}=he(e),{colorClasses:W,colorStyles:X,variantClasses:Y}=pe(z),{densityClasses:Z}=we(e),{dimensionStyles:ee}=Ae(e),{elevationClasses:te}=Ve(e),{roundedClasses:ne}=Ce(q),ae=m(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),C=m(()=>({isActive:k.value,select:c,isSelected:g.value,isIndeterminate:h.value}));function B(u){var b;a("click",u),!(p||!w.value)&&((b=t.navigate)==null||b.call(t,u),e.value!=null&&c(!g.value,u))}f(B,"onClick");function le(u){(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),B(u))}return f(le,"onKeyDown"),Ge(()=>{var u,b,D;const se=_.value?"a":e.tag,N=!v||g.value||k.value,ie=n.title||e.title,re=n.subtitle||e.subtitle,oe=!!(n.append||e.appendAvatar||e.appendIcon),M=!!(n.prepend||e.prependAvatar||e.prependIcon);return v==null||v.updateHasPrepend(M),de(y(se,{class:["v-list-item",{"v-list-item--active":k.value,"v-list-item--disabled":e.disabled,"v-list-item--link":w.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!M&&(v==null?void 0:v.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&k.value},J.value,Q.value,N?W.value:void 0,Z.value,te.value,ae.value,ne.value,Y.value],style:[N?X.value:void 0,ee.value],href:t.href.value,tabindex:w.value?0:void 0,onClick:B,onKeydown:w.value&&!_.value&&le},{default:()=>[ye(w.value||k.value,"v-list-item"),M&&y("div",{key:"prepend",class:"v-list-item__prepend"},[e.prependAvatar&&y(j,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&y(R,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null),n.prepend&&y($,{key:"prepend",defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>[n.prepend(C.value)]})]),y("div",{class:"v-list-item__content","data-no-activator":""},[ie&&y(Ue,{key:"title"},{default:()=>{var A;return[(A=(u=n.title)==null?void 0:u.call(n,{title:e.title}))!=null?A:e.title]}}),re&&y(Ke,{key:"subtitle"},{default:()=>{var A;return[(A=(b=n.subtitle)==null?void 0:b.call(n,{subtitle:e.subtitle}))!=null?A:e.subtitle]}}),(D=n.default)==null?void 0:D.call(n,C.value)]),oe&&y("div",{key:"append",class:"v-list-item__append"},[n.append&&y($,{key:"append",defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>[n.append(C.value)]}),e.appendIcon&&y(R,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&y(j,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])]}),[[ve("ripple"),w.value&&e.ripple]])}),{}}});export{mt as V,Ke as a,Ue as b,He as c,Re as d,ut as e,dt as f,ct as m,vt as u};
//# sourceMappingURL=VListItem.e48c8813.js.map
