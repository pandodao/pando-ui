var ce=Object.defineProperty;var f=(e,r)=>ce(e,"name",{value:r,configurable:!0});import{i as V,d as S,p as P,b as m,k as H,f as de,w as ve,r as me,a as g,A as fe}from"./vue.esm-bundler.03d0f9c2.js";import{c as K}from"./createSimpleFunctional.80c809ed.js";import{R as pe}from"./index.71c8a79f.js";import{a as ge,m as ye,b as Se,u as he,g as ke,V as G}from"./variant.89df963d.js";import{I as R,m as we,V as T}from"./VIcon.48347d4a.js";import{m as be,a as Ae,u as Ie,b as Ve}from"./density.e2a6824c.js";import{m as Pe,u as Ce}from"./dimensions.4f68b75e.js";import{m as Le,u as Me}from"./elevation.ef328fb6.js";import{m as Oe,u as _e}from"./router.6303e2ed.js";import{m as $e,p as Be}from"./color.ec9b773d.js";import{u as x}from"./proxiedModel.12bae561.js";import{a as De,c as Ne,g as Fe,b as Ge,u as Re}from"./useRender.4b8f74ab.js";import{V as E}from"./VAvatar.bb0c21d9.js";const M=Symbol.for("vuetify:list");function ut(){const e=V(M,{hasPrepend:S(!1),updateHasPrepend:()=>null}),r={hasPrepend:S(!1),updateHasPrepend:a=>{a&&(r.hasPrepend.value=a)}};return P(M,r),e}f(ut,"createList");function Te(){return V(M,null)}f(Te,"useList");const xe={open:e=>{let{id:r,value:a,opened:n,parents:l}=e;if(a){const t=new Set;t.add(r);let s=l.get(r);for(;s!=null;)t.add(s),s=l.get(s);return t}else return n.delete(r),n},select:()=>null},U={open:e=>{let{id:r,value:a,opened:n,parents:l}=e;if(a){let t=l.get(r);for(n.add(r);t!=null&&t!==r;)n.add(t),t=l.get(t);return n}else n.delete(r);return n},select:()=>null},Ee={open:U.open,select:e=>{let{id:r,value:a,opened:n,parents:l}=e;if(!a)return n;const t=[];let s=l.get(r);for(;s!=null;)t.push(s),s=l.get(s);return new Set(t)}},O=f(e=>{const r={select:a=>{let{id:n,value:l,selected:t}=a;if(e&&!l){const s=Array.from(t.entries()).reduce((v,y)=>{let[h,p]=y;return p==="on"?[...v,h]:v},[]);if(s.length===1&&s[0]===n)return t}return t.set(n,l?"on":"off"),t},in:(a,n,l)=>{let t=new Map;for(const s of a||[])t=r.select({id:s,value:!0,selected:new Map(t),children:n,parents:l});return t},out:a=>{const n=[];for(const[l,t]of a.entries())t==="on"&&n.push(l);return n}};return r},"independentSelectStrategy"),j=f(e=>{const r=O(e);return{select:n=>{let{selected:l,id:t,...s}=n;const v=l.has(t)?new Map([[t,l.get(t)]]):new Map;return r.select({...s,id:t,selected:v})},in:(n,l,t)=>{let s=new Map;return n!=null&&n.length&&(s=r.in(n.slice(0,1),l,t)),s},out:(n,l,t)=>r.out(n,l,t)}},"independentSingleSelectStrategy"),He=f(e=>{const r=O(e);return{select:n=>{let{id:l,selected:t,children:s,...v}=n;return s.has(l)?t:r.select({id:l,selected:t,children:s,...v})},in:r.in,out:r.out}},"leafSelectStrategy"),Ke=f(e=>{const r=j(e);return{select:n=>{let{id:l,selected:t,children:s,...v}=n;return s.has(l)?t:r.select({id:l,selected:t,children:s,...v})},in:r.in,out:r.out}},"leafSingleSelectStrategy"),Ue=f(e=>{const r={select:a=>{let{id:n,value:l,selected:t,children:s,parents:v}=a;const y=new Map(t),h=[n];for(;h.length;){const i=h.shift();t.set(i,l?"on":"off"),s.has(i)&&h.push(...s.get(i))}let p=v.get(n);for(;p;){const i=s.get(p),o=i.every(d=>t.get(d)==="on"),c=i.every(d=>!t.has(d)||t.get(d)==="off");t.set(p,o?"on":c?"off":"indeterminate"),p=v.get(p)}return e&&!l&&Array.from(t.entries()).reduce((o,c)=>{let[d,k]=c;return k==="on"?[...o,d]:o},[]).length===0?y:t},in:(a,n,l)=>{let t=new Map;for(const s of a||[])t=r.select({id:s,value:!0,selected:new Map(t),children:n,parents:l});return t},out:(a,n)=>{const l=[];for(const[t,s]of a.entries())s==="on"&&!n.has(t)&&l.push(t);return l}};return r},"classicSelectStrategy"),I=Symbol.for("vuetify:nested"),q={id:S(),root:{register:()=>null,unregister:()=>null,parents:S(new Map),children:S(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:S(new Set),selected:S(new Map),selectedValues:S([])}},ct=De({selectStrategy:[String,Function],openStrategy:[String,Function],opened:Array,selected:Array,mandatory:Boolean},"nested"),dt=f(e=>{let r=!1;const a=S(new Map),n=S(new Map),l=x(e,"opened",e.opened,i=>new Set(i),i=>[...i.values()]),t=m(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return Ke(e.mandatory);case"leaf":return He(e.mandatory);case"independent":return O(e.mandatory);case"single-independent":return j(e.mandatory);case"classic":default:return Ue(e.mandatory)}}),s=m(()=>{if(typeof e.openStrategy=="function")return e.openStrategy;switch(e.openStrategy){case"list":return Ee;case"single":return xe;case"multiple":default:return U}}),v=x(e,"selected",e.selected,i=>t.value.in(i,a.value,n.value),i=>t.value.out(i,a.value,n.value));H(()=>{r=!0});function y(i){const o=[];let c=i;for(;c!=null;)o.unshift(c),c=n.value.get(c);return o}f(y,"getPath");const h=Ne("nested"),p={id:S(),root:{opened:l,selected:v,selectedValues:m(()=>{const i=[];for(const[o,c]of v.value.entries())c==="on"&&i.push(o);return i}),register:(i,o,c)=>{o&&i!==o&&n.value.set(i,o),c&&a.value.set(i,[]),o!=null&&a.value.set(o,[...a.value.get(o)||[],i])},unregister:i=>{var c;if(r)return;a.value.delete(i);const o=n.value.get(i);if(o){const d=(c=a.value.get(o))!=null?c:[];a.value.set(o,d.filter(k=>k!==i))}n.value.delete(i),l.value.delete(i)},open:(i,o,c)=>{h.emit("click:open",{id:i,value:o,path:y(i),event:c});const d=s.value.open({id:i,value:o,opened:new Set(l.value),children:a.value,parents:n.value,event:c});d&&(l.value=d)},openOnSelect:(i,o,c)=>{const d=s.value.select({id:i,value:o,selected:new Map(v.value),opened:new Set(l.value),children:a.value,parents:n.value,event:c});d&&(l.value=d)},select:(i,o,c)=>{h.emit("click:select",{id:i,value:o,path:y(i),event:c});const d=t.value.select({id:i,value:o,selected:new Map(v.value),children:a.value,parents:n.value,event:c});d&&(v.value=d),p.root.openOnSelect(i,o,c)},children:a,parents:n}};return P(I,p),p.root},"useNested"),je=f((e,r)=>{const a=V(I,q),n=m(()=>{var t;return(t=e.value)!=null?t:Symbol(Fe())}),l={...a,id:n,open:(t,s)=>a.root.open(n.value,t,s),openOnSelect:(t,s)=>a.root.openOnSelect(n.value,t,s),isOpen:m(()=>a.root.opened.value.has(n.value)),parent:m(()=>a.root.parents.value.get(n.value)),select:(t,s)=>a.root.select(n.value,t,s),isSelected:m(()=>a.root.selected.value.get(n.value)==="on"),isIndeterminate:m(()=>a.root.selected.value.get(n.value)==="indeterminate"),isLeaf:m(()=>!a.root.children.value.get(n.value)),isGroupActivator:a.isGroupActivator};return!a.isGroupActivator&&a.root.register(n.value,a.id.value,r),H(()=>{!a.isGroupActivator&&a.root.unregister(n.value)}),r&&P(I,l),l},"useNestedItem"),vt=f(()=>{const e=V(I,q);P(I,{...e,isGroupActivator:!0})},"useNestedGroupActivator");const qe=K("v-list-item-subtitle"),ze=K("v-list-item-title"),Je=Ge()({name:"VListItem",directives:{Ripple:pe},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:R,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:R,subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,...ge(),...be(),...Pe(),...Le(),...Ae(),...Oe(),...we(),...$e(),...ye({variant:"text"})},emits:{click:e=>!0},setup(e,r){let{attrs:a,slots:n,emit:l}=r;const t=_e(e,a),s=m(()=>{var u;return(u=e.value)!=null?u:t.href.value}),{select:v,isSelected:y,isIndeterminate:h,isGroupActivator:p,root:i,parent:o,openOnSelect:c}=je(s,!1),d=Te(),k=m(()=>{var u;return e.active!==!1&&(e.active||((u=t.isActive)==null?void 0:u.value)||y.value)}),_=m(()=>e.link!==!1&&t.isLink.value),w=m(()=>!e.disabled&&e.link!==!1&&(e.link||t.isClickable.value||e.value!=null&&!!d)),z=m(()=>e.rounded||e.nav),J=m(()=>{var u;return{color:k.value&&(u=e.activeColor)!=null?u:e.color,variant:e.variant}});de(()=>{var u;return(u=t.isActive)==null?void 0:u.value},u=>{u&&o.value!=null&&i.open(o.value,!0),u&&c(u)},{immediate:!0});const{themeClasses:Q}=Be(e),{borderClasses:W}=Se(e),{colorClasses:X,colorStyles:Y,variantClasses:Z}=he(J),{densityClasses:ee}=Ie(e),{dimensionStyles:te}=Ce(e),{elevationClasses:ne}=Me(e),{roundedClasses:ae}=Ve(z),le=m(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),C=m(()=>({isActive:k.value,select:v,isSelected:y.value,isIndeterminate:h.value}));function $(u){var b;l("click",u),!(p||!w.value)&&((b=t.navigate)==null||b.call(t,u),e.value!=null&&v(!y.value,u))}f($,"onClick");function se(u){(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),$(u))}return f(se,"onKeyDown"),Re(()=>{var u,b,B,D,N;const ie=_.value?"a":e.tag,F=!d||y.value||k.value,re=n.title||e.title,oe=n.subtitle||e.subtitle,ue=!!(n.append||e.appendAvatar||e.appendIcon),L=!!(n.prepend||e.prependAvatar||e.prependIcon);return d==null||d.updateHasPrepend(L),ve(g(ie,{class:["v-list-item",{"v-list-item--active":k.value,"v-list-item--disabled":e.disabled,"v-list-item--link":w.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!L&&(d==null?void 0:d.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&k.value},Q.value,W.value,F?X.value:void 0,ee.value,ne.value,le.value,ae.value,Z.value],style:[F?Y.value:void 0,te.value],href:t.href.value,tabindex:w.value?0:void 0,onClick:$,onKeydown:w.value&&!_.value&&se},{default:()=>[ke(w.value||k.value,"v-list-item"),L&&g(G,{key:"prepend",defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>[g("div",{class:"v-list-item__prepend"},[e.prependAvatar&&g(E,{key:"prepend-avatar"},null),e.prependIcon&&g(T,{key:"prepend-icon"},null),(u=n.prepend)==null?void 0:u.call(n,C.value)])]}),g("div",{class:"v-list-item__content"},[re&&g(ze,{key:"title"},{default:()=>{var A;return[(A=(b=n.title)==null?void 0:b.call(n,{title:e.title}))!=null?A:e.title]}}),oe&&g(qe,{key:"subtitle"},{default:()=>{var A;return[(A=(B=n.subtitle)==null?void 0:B.call(n,{subtitle:e.subtitle}))!=null?A:e.subtitle]}}),(D=n.default)==null?void 0:D.call(n,C.value)]),ue&&g(G,{key:"append",defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>[g("div",{class:"v-list-item__append"},[(N=n.append)==null?void 0:N.call(n,C.value),e.appendIcon&&g(T,{key:"append-icon"},null),e.appendAvatar&&g(E,{key:"append-avatar"},null)])]})]}),[[me("ripple"),w.value]])}),{}}});const mt=fe({name:"FListItem",setup(e,{slots:r}){return()=>g(Je,{class:"f-list-item"},r)}});export{mt as F,Je as V,qe as a,ze as b,Te as c,vt as d,ut as e,dt as f,ct as m,je as u};
//# sourceMappingURL=FListItem.689549fe.js.map
