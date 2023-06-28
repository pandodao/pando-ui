var oe=Object.defineProperty;var f=(e,r)=>oe(e,"name",{value:r,configurable:!0});import{i as C,r as S,p as M,Q as b,b as m,j as H,d as ce,f as de,g as ve,a as p}from"./vue.esm-bundler.b09b7c5a.js";import{c as K}from"./createSimpleFunctional.6499d319.js";import{R as me}from"./index.eca3ba9a.js";import{m as fe,u as ye,g as pe,V as T}from"./variant.fbd007cc.js";import{I as _,m as ge,V as j}from"./VIcon.bd07cc2b.js";import{m as Se,u as he}from"./border.6019dc9f.js";import{m as ke,u as we}from"./density.6083b2d4.js";import{m as be,a as Ae,b as Pe,u as Ve}from"./router.b8d53e34.js";import{m as Ie,u as Ce}from"./elevation.12d4edaf.js";import{m as Me,u as Oe}from"./rounded.28975b1c.js";import{d as Le,x as Be,c as De,g as Ne,m as Re,p as Ge,u as Te}from"./color.7fbf1750.js";import{u as x}from"./proxiedModel.28fe5444.js";import{V as E}from"./VAvatar.95d7d85f.js";import{E as F}from"./helpers.4b349f1c.js";const B=Symbol.for("vuetify:list");function rt(){const e=C(B,{hasPrepend:S(!1),updateHasPrepend:()=>null}),r={hasPrepend:S(!1),updateHasPrepend:l=>{l&&(r.hasPrepend.value=l)}};return M(B,r),e}f(rt,"createList");function _e(){return C(B,null)}f(_e,"useList");const je={open:e=>{let{id:r,value:l,opened:t,parents:a}=e;if(l){const n=new Set;n.add(r);let s=a.get(r);for(;s!=null;)n.add(s),s=a.get(s);return n}else return t.delete(r),t},select:()=>null},U={open:e=>{let{id:r,value:l,opened:t,parents:a}=e;if(l){let n=a.get(r);for(t.add(r);n!=null&&n!==r;)t.add(n),n=a.get(n);return t}else t.delete(r);return t},select:()=>null},xe={open:U.open,select:e=>{let{id:r,value:l,opened:t,parents:a}=e;if(!l)return t;const n=[];let s=a.get(r);for(;s!=null;)n.push(s),s=a.get(s);return new Set(n)}},D=f(e=>{const r={select:l=>{let{id:t,value:a,selected:n}=l;if(t=b(t),e&&!a){const s=Array.from(n.entries()).reduce((o,g)=>{let[h,y]=g;return y==="on"?[...o,h]:o},[]);if(s.length===1&&s[0]===t)return n}return n.set(t,a?"on":"off"),n},in:(l,t,a)=>{let n=new Map;for(const s of l||[])n=r.select({id:s,value:!0,selected:new Map(n),children:t,parents:a});return n},out:l=>{const t=[];for(const[a,n]of l.entries())n==="on"&&t.push(a);return t}};return r},"independentSelectStrategy"),$=f(e=>{const r=D(e);return{select:t=>{let{selected:a,id:n,...s}=t;n=b(n);const o=a.has(n)?new Map([[n,a.get(n)]]):new Map;return r.select({...s,id:n,selected:o})},in:(t,a,n)=>{let s=new Map;return t!=null&&t.length&&(s=r.in(t.slice(0,1),a,n)),s},out:(t,a,n)=>r.out(t,a,n)}},"independentSingleSelectStrategy"),Ee=f(e=>{const r=D(e);return{select:t=>{let{id:a,selected:n,children:s,...o}=t;return a=b(a),s.has(a)?n:r.select({id:a,selected:n,children:s,...o})},in:r.in,out:r.out}},"leafSelectStrategy"),Fe=f(e=>{const r=$(e);return{select:t=>{let{id:a,selected:n,children:s,...o}=t;return a=b(a),s.has(a)?n:r.select({id:a,selected:n,children:s,...o})},in:r.in,out:r.out}},"leafSingleSelectStrategy"),He=f(e=>{const r={select:l=>{let{id:t,value:a,selected:n,children:s,parents:o}=l;t=b(t);const g=new Map(n),h=[t];for(;h.length;){const i=h.shift();n.set(i,a?"on":"off"),s.has(i)&&h.push(...s.get(i))}let y=o.get(t);for(;y;){const i=s.get(y),u=i.every(d=>n.get(d)==="on"),c=i.every(d=>!n.has(d)||n.get(d)==="off");n.set(y,u?"on":c?"off":"indeterminate"),y=o.get(y)}return e&&!a&&Array.from(n.entries()).reduce((u,c)=>{let[d,k]=c;return k==="on"?[...u,d]:u},[]).length===0?g:n},in:(l,t,a)=>{let n=new Map;for(const s of l||[])n=r.select({id:s,value:!0,selected:new Map(n),children:t,parents:a});return n},out:(l,t)=>{const a=[];for(const[n,s]of l.entries())s==="on"&&!t.has(n)&&a.push(n);return a}};return r},"classicSelectStrategy"),I=Symbol.for("vuetify:nested"),Q={id:S(),root:{register:()=>null,unregister:()=>null,parents:S(new Map),children:S(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:S(new Set),selected:S(new Map),selectedValues:S([])}},ut=Le({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),ot=f(e=>{let r=!1;const l=S(new Map),t=S(new Map),a=x(e,"opened",e.opened,i=>new Set(i),i=>[...i.values()]),n=m(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return Fe(e.mandatory);case"leaf":return Ee(e.mandatory);case"independent":return D(e.mandatory);case"single-independent":return $(e.mandatory);case"classic":default:return He(e.mandatory)}}),s=m(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return xe;case"single":return je;case"multiple":default:return U}}),o=x(e,"selected",e.selected,i=>n.value.in(i,l.value,t.value),i=>n.value.out(i,l.value,t.value));H(()=>{r=!0});function g(i){const u=[];let c=i;for(;c!=null;)u.unshift(c),c=t.value.get(c);return u}f(g,"getPath");const h=Be("nested"),y={id:S(),root:{opened:a,selected:o,selectedValues:m(()=>{const i=[];for(const[u,c]of o.value.entries())c==="on"&&i.push(u);return i}),register:(i,u,c)=>{u&&i!==u&&t.value.set(i,u),c&&l.value.set(i,[]),u!=null&&l.value.set(u,[...l.value.get(u)||[],i])},unregister:i=>{var c;if(r)return;l.value.delete(i);const u=t.value.get(i);if(u){const d=(c=l.value.get(u))!=null?c:[];l.value.set(u,d.filter(k=>k!==i))}t.value.delete(i),a.value.delete(i)},open:(i,u,c)=>{h.emit("click:open",{id:i,value:u,path:g(i),event:c});const d=s.value.open({id:i,value:u,opened:new Set(a.value),children:l.value,parents:t.value,event:c});d&&(a.value=d)},openOnSelect:(i,u,c)=>{const d=s.value.select({id:i,value:u,selected:new Map(o.value),opened:new Set(a.value),children:l.value,parents:t.value,event:c});d&&(a.value=d)},select:(i,u,c)=>{h.emit("click:select",{id:i,value:u,path:g(i),event:c});const d=n.value.select({id:i,value:u,selected:new Map(o.value),children:l.value,parents:t.value,event:c});d&&(o.value=d),y.root.openOnSelect(i,u,c)},children:l,parents:t}};return M(I,y),y.root},"useNested"),Ke=f((e,r)=>{const l=C(I,Q),t=Symbol(De()),a=m(()=>{var s;return(s=e.value)!=null?s:t}),n={...l,id:a,open:(s,o)=>l.root.open(a.value,s,o),openOnSelect:(s,o)=>l.root.openOnSelect(a.value,s,o),isOpen:m(()=>l.root.opened.value.has(a.value)),parent:m(()=>l.root.parents.value.get(a.value)),select:(s,o)=>l.root.select(a.value,s,o),isSelected:m(()=>l.root.selected.value.get(b(a.value))==="on"),isIndeterminate:m(()=>l.root.selected.value.get(a.value)==="indeterminate"),isLeaf:m(()=>!l.root.children.value.get(a.value)),isGroupActivator:l.isGroupActivator};return!l.isGroupActivator&&l.root.register(a.value,l.id.value,r),H(()=>{!l.isGroupActivator&&l.root.unregister(a.value)}),r&&M(I,n),n},"useNestedItem"),ct=f(()=>{const e=C(I,Q);M(I,{...e,isGroupActivator:!0})},"useNestedGroupActivator");const Ue=K("v-list-item-subtitle"),$e=K("v-list-item-title"),dt=Ne()({name:"VListItem",directives:{Ripple:me},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:_,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:_,ripple:{type:Boolean,default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:F,onClickOnce:F,...Se(),...ke(),...be(),...Ie(),...Me(),...Ae(),...ge(),...Re(),...fe({variant:"text"})},emits:{click:e=>!0},setup(e,r){let{attrs:l,slots:t,emit:a}=r;const n=Pe(e,l),s=m(()=>{var v;return(v=e.value)!=null?v:n.href.value}),{select:o,isSelected:g,isIndeterminate:h,isGroupActivator:y,root:i,parent:u,openOnSelect:c}=Ke(s,!1),d=_e(),k=m(()=>{var v;return e.active!==!1&&(e.active||((v=n.isActive)==null?void 0:v.value)||g.value)}),N=m(()=>e.link!==!1&&n.isLink.value),w=m(()=>!e.disabled&&e.link!==!1&&(e.link||n.isClickable.value||e.value!=null&&!!d)),q=m(()=>e.rounded||e.nav),z=m(()=>{var v;return{color:k.value&&(v=e.activeColor)!=null?v:e.color,variant:e.variant}});ce(()=>{var v;return(v=n.isActive)==null?void 0:v.value},v=>{v&&u.value!=null&&i.open(u.value,!0),v&&c(v)},{immediate:!0});const{themeClasses:J}=Ge(e),{borderClasses:W}=he(e),{colorClasses:X,colorStyles:Y,variantClasses:Z}=ye(z),{densityClasses:ee}=we(e),{dimensionStyles:te}=Ve(e),{elevationClasses:ne}=Ce(e),{roundedClasses:ae}=Oe(q),le=m(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),O=m(()=>({isActive:k.value,select:o,isSelected:g.value,isIndeterminate:h.value}));function R(v){var A;a("click",v),!(y||!w.value)&&((A=n.navigate)==null||A.call(n,v),e.value!=null&&o(!g.value,v))}f(R,"onClick");function se(v){(v.key==="Enter"||v.key===" ")&&(v.preventDefault(),R(v))}return f(se,"onKeyDown"),Te(()=>{const v=N.value?"a":e.tag,A=!d||g.value||k.value,ie=t.title||e.title,re=t.subtitle||e.subtitle,ue=!!(t.append||e.appendAvatar||e.appendIcon),L=!!(t.prepend||e.prependAvatar||e.prependIcon);return d==null||d.updateHasPrepend(L),de(p(v,{class:["v-list-item",{"v-list-item--active":k.value,"v-list-item--disabled":e.disabled,"v-list-item--link":w.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!L&&(d==null?void 0:d.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&k.value},J.value,W.value,A?X.value:void 0,ee.value,ne.value,le.value,ae.value,Z.value],style:[A?Y.value:void 0,te.value],href:n.href.value,tabindex:w.value?0:void 0,onClick:R,onKeydown:w.value&&!N.value&&se},{default:()=>{var G;return[pe(w.value||k.value,"v-list-item"),L&&p("div",{key:"prepend",class:"v-list-item__prepend"},[e.prependAvatar&&p(E,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&p(j,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null),t.prepend&&p(T,{key:"prepend",defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>[t.prepend(O.value)]})]),p("div",{class:"v-list-item__content","data-no-activator":""},[ie&&p($e,{key:"title"},{default:()=>{var P,V;return[(V=(P=t.title)==null?void 0:P.call(t,{title:e.title}))!=null?V:e.title]}}),re&&p(Ue,{key:"subtitle"},{default:()=>{var P,V;return[(V=(P=t.subtitle)==null?void 0:P.call(t,{subtitle:e.subtitle}))!=null?V:e.subtitle]}}),(G=t.default)==null?void 0:G.call(t,O.value)]),ue&&p("div",{key:"append",class:"v-list-item__append"},[t.append&&p(T,{key:"append",defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>[t.append(O.value)]}),e.appendIcon&&p(j,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&p(E,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])]}}),[[ve("ripple"),w.value&&e.ripple]])}),{}}});export{dt as V,Ue as a,$e as b,_e as c,ct as d,rt as e,ot as f,ut as m,Ke as u};
//# sourceMappingURL=VListItem.f3bec281.js.map
