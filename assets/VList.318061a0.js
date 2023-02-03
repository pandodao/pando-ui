var ee=Object.defineProperty;var c=(e,l)=>ee(e,"name",{value:l,configurable:!0});import{t as m,b as I,a as f,f as te,v as le,m as O,r as R}from"./vue.esm-bundler.330b8bcd.js";import{V as ne}from"./index.a5e0d629.js";import{u as se,c as ae,d as re,e as j,V as N,m as oe,f as ie}from"./VListItem.4533e071.js";import{I as A,m as F}from"./VIcon.c758310f.js";import{V as ue,m as de}from"./variant.b259332f.js";import{d as K,a as q,b as T,u as $,p as ce}from"./useRender.b59b3e39.js";import{p as w,g as b}from"./helpers.6dbb45ef.js";import{u as ve,m as fe,p as me,a as pe}from"./color.66c7a00f.js";import{V as ye}from"./VDivider.a69cf6f1.js";import{m as ge,u as be}from"./border.8a30a617.js";import{m as he,u as Ce}from"./density.38f0f124.js";import{m as Ve,u as Pe}from"./dimensions.6590eaa4.js";import{m as Ie,u as ke}from"./elevation.b2f27a68.js";import{m as Se,u as xe}from"./rounded.257cff90.js";const Le=K({name:"VListGroupActivator",setup(e,l){let{slots:t}=l;return se(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),Ae=q({activeColor:String,color:String,collapseIcon:{type:A,default:"$collapse"},expandIcon:{type:A,default:"$expand"},prependIcon:A,appendIcon:A,fluid:Boolean,subgroup:Boolean,value:null,...F()},"v-list-group"),H=T()({name:"VListGroup",props:{title:String,...Ae()},setup(e,l){let{slots:t}=l;const{isOpen:n,open:o,id:a}=ae(m(e,"value"),!0),u=I(()=>`v-list-group--id-${String(a.value)}`),i=re();function v(y){o(!n.value,y)}c(v,"onClick");const V=I(()=>({onClick:v,class:"v-list-group__header",id:u.value})),p=I(()=>n.value?e.collapseIcon:e.expandIcon);return $(()=>{var y;return f(e.tag,{class:["v-list-group",{"v-list-group--prepend":i==null?void 0:i.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value}]},{default:()=>[t.activator&&f(ue,{defaults:{VListItem:{active:n.value,activeColor:e.activeColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&p.value,appendIcon:e.appendIcon||!e.subgroup&&p.value,title:e.title,value:e.value}}},{default:()=>[f(Le,null,{default:()=>[t.activator({props:V.value,isOpen:n})]})]}),f(ne,null,{default:()=>[te(f("div",{class:"v-list-group__items",role:"group","aria-labelledby":u.value},[(y=t.default)==null?void 0:y.call(t)]),[[le,n.value]])]})]})}),{}}});function _e(e){return w(e,Object.keys(H.props))}c(_e,"filterListGroupProps");const Be=K({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...F()},setup(e,l){let{slots:t}=l;const{textColorClasses:n,textColorStyles:o}=ve(m(e,"color"));return $(()=>{var a;const u=!!(t.default||e.title);return f(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value],style:{textColorStyles:o}},{default:()=>{var i;return[u&&f("div",{class:"v-list-subheader__text"},[(i=(a=t.default)==null?void 0:a.call(t))!=null?i:e.title])]}})}),{}}}),U=T()({name:"VListChildren",props:{items:Array},setup(e,l){let{slots:t}=l;return j(),()=>{var a;var n,o;return(a=(n=t.default)==null?void 0:n.call(t))!=null?a:(o=e.items)==null?void 0:o.map(u=>{var k,P;let{children:i,props:v,type:V,raw:p}=u;if(V==="divider"){var y;return(k=(y=t.divider)==null?void 0:y.call(t,{props:v}))!=null?k:f(ye,v,null)}if(V==="subheader"){var S;return(P=(S=t.subheader)==null?void 0:S.call(t,{props:v}))!=null?P:f(Be,v,{default:t.subheader})}const x={subtitle:t.subtitle?r=>{var s;return(s=t.subtitle)==null?void 0:s.call(t,{...r,item:p})}:void 0,prepend:t.prepend?r=>{var s;return(s=t.prepend)==null?void 0:s.call(t,{...r,item:p})}:void 0,append:t.append?r=>{var s;return(s=t.append)==null?void 0:s.call(t,{...r,item:p})}:void 0,default:t.default?r=>{var s;return(s=t.default)==null?void 0:s.call(t,{...r,item:p})}:void 0,title:t.title?r=>{var s;return(s=t.title)==null?void 0:s.call(t,{...r,item:p})}:void 0},[_,B]=_e(v);return i?f(H,O({value:v==null?void 0:v.value},_),{activator:r=>{let{props:s}=r;return t.header?t.header({...v,...s}):f(N,O(v,s),x)},default:()=>f(U,{items:i},t)}):t.item?t.item(v):f(N,v,x)})}}}),Fe=q({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function W(e,l){var i;const t=b(l,e.itemTitle,l),n=e.returnObject?l:b(l,e.itemValue,t),o=b(l,e.itemChildren),a=e.itemProps===!0?typeof l=="object"&&l!=null&&!Array.isArray(l)?"children"in l?w(l,["children"])[1]:l:void 0:b(l,e.itemProps),u={title:t,value:n,...a};return{title:String((i=u.title)!=null?i:""),value:u.value,props:u,children:Array.isArray(o)?z(e,o):void 0,raw:l}}c(W,"transformItem$1");function z(e,l){const t=[];for(const n of l)t.push(W(e,n));return t}c(z,"transformItems$1");function Me(e){const l=I(()=>z(e,e.items));function t(o){return o.map(a=>W(e,a))}c(t,"transformIn");function n(o){return o.map(a=>{let{props:u}=a;return u.value})}return c(n,"transformOut"),{items:l,transformIn:t,transformOut:n}}c(Me,"useItems");function Te(e,l){const t=b(l,e.itemType,"item"),n=typeof l=="string"?l:b(l,e.itemTitle),o=b(l,e.itemValue,void 0),a=b(l,e.itemChildren),u=e.itemProps===!0?w(l,["children"])[1]:b(l,e.itemProps),i={title:n,value:o,...u};return{type:t,title:i.title,value:i.value,props:i,children:t==="item"&&a?J(e,a):void 0,raw:l}}c(Te,"transformItem");function J(e,l){const t=[];for(const n of l)t.push(Te(e,n));return t}c(J,"transformItems");function $e(e){return{items:I(()=>J(e,e.items))}}c($e,"useListItems");const Qe=T()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...oe({selectStrategy:"single-leaf",openStrategy:"list"}),...ge(),...he(),...Ve(),...Ie(),itemType:{type:String,default:"type"},...Fe(),...Se(),...F(),...fe(),...de({variant:"text"})},emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:t}=l;const{items:n}=$e(e),{themeClasses:o}=me(e),{backgroundColorClasses:a,backgroundColorStyles:u}=pe(m(e,"bgColor")),{borderClasses:i}=be(e),{densityClasses:v}=Ce(e),{dimensionStyles:V}=Pe(e),{elevationClasses:p}=ke(e),{roundedClasses:y}=xe(e),{open:S,select:x}=ie(e),_=I(()=>e.lines?`v-list--${e.lines}-line`:void 0),B=m(e,"activeColor"),k=m(e,"color");j(),ce({VListGroup:{activeColor:B,color:k},VListItem:{activeClass:m(e,"activeClass"),activeColor:B,color:k,density:m(e,"density"),disabled:m(e,"disabled"),lines:m(e,"lines"),nav:m(e,"nav"),variant:m(e,"variant")}});const P=R(!1),r=R();function s(d){P.value=!0}c(s,"onFocusin");function M(d){P.value=!1}c(M,"onFocusout");function Q(d){var g;!P.value&&!(d.relatedTarget&&(g=r.value)!=null&&g.contains(d.relatedTarget))&&h()}c(Q,"onFocus");function X(d){if(!!r.value){if(d.key==="ArrowDown")h("next");else if(d.key==="ArrowUp")h("prev");else if(d.key==="Home")h("first");else if(d.key==="End")h("last");else return;d.preventDefault()}}c(X,"onKeydown");function h(d){if(!r.value)return;const g=[...r.value.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(C=>!C.hasAttribute("disabled")),Y=g.indexOf(document.activeElement);if(d)if(d==="first"){var G;(G=g[0])==null||G.focus()}else if(d==="last"){var E;(E=g.at(-1))==null||E.focus()}else{let C,L=Y;const Z=d==="next"?1:-1;do L+=Z,C=g[L];while((!C||C.offsetParent==null)&&L<g.length&&L>=0);C?C.focus():h(d==="next"?"first":"last")}else if(!r.value.contains(document.activeElement)){var D;(D=g[0])==null||D.focus()}}return c(h,"focus"),$(()=>f(e.tag,{ref:r,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},o.value,a.value,i.value,v.value,p.value,_.value,y.value],style:[u.value,V.value],role:"listbox","aria-activedescendant":void 0,onFocusin:s,onFocusout:M,onFocus:Q,onKeydown:X},{default:()=>[f(U,{items:n.value},t)]})),{open:S,select:x,focus:h}}});export{Qe as V,H as a,Be as b,Fe as m,W as t,Me as u};
//# sourceMappingURL=VList.318061a0.js.map