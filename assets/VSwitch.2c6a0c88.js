var M=Object.defineProperty;var V=(e,c)=>M(e,"name",{value:c,configurable:!0});import{r as j,b as g,a as t,m as w,F as q}from"./vue.esm-bundler.80cafc0b.js";import{e as E}from"./index.b676db0f.js";import{V as G}from"./VDefaultsProvider.522cf1e0.js";import{m as H,u as J,V as y}from"./VInput.44c51e7f.js";import{m as K,V as b}from"./VSelectionControl.5045ffd3.js";import{u as O,L as Q}from"./loader.5e66d0fd.js";import{u as C}from"./proxiedModel.dbd4de1d.js";import{V as W}from"./VIcon.ac9f05d6.js";import{V as X}from"./VProgressCircular.fec55325.js";import{p as Y,g as Z,d as ee,u as te}from"./color.7ba4ffe3.js";import{f as ae}from"./helpers.32675158.js";const le=Y({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...H(),...K()},"VSwitch"),he=Z()({name:"VSwitch",inheritAttrs:!1,props:le(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,c){let{attrs:p,slots:a}=c;const i=C(e,"indeterminate"),o=C(e,"modelValue"),{loaderClasses:S}=O(e),{isFocused:P,focus:_,blur:x}=J(e),h=j(),F=g(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),I=ee(),A=g(()=>e.id||`switch-${I}`);function B(){i.value&&(i.value=!1)}V(B,"onChange");function z(n){var r,u;n.stopPropagation(),n.preventDefault(),(u=(r=h.value)==null?void 0:r.input)==null||u.click()}return V(z,"onTrackClick"),te(()=>{const[n,r]=ae(p),u=y.filterProps(e),D=b.filterProps(e);return t(y,w({class:["v-switch",{"v-switch--flat":e.flat},{"v-switch--inset":e.inset},{"v-switch--indeterminate":i.value},S.value,e.class]},n,u,{modelValue:o.value,"onUpdate:modelValue":d=>o.value=d,id:A.value,focused:P.value,style:e.style}),{...a,default:d=>{let{id:L,messagesId:U,isDisabled:N,isReadonly:R,isValid:k}=d;const m={model:o,isValid:k};return t(b,w({ref:h},D,{modelValue:o.value,"onUpdate:modelValue":[s=>o.value=s,B],id:L.value,"aria-describedby":U.value,type:"checkbox","aria-checked":i.value?"mixed":void 0,disabled:N.value,readonly:R.value,onFocus:_,onBlur:x},r),{...a,default:s=>{let{backgroundColorClasses:f,backgroundColorStyles:l}=s;return t("div",{class:["v-switch__track",...f.value],style:l.value,onClick:z},[a["track-true"]&&t("div",{key:"prepend",class:"v-switch__track-true"},[a["track-true"](m)]),a["track-false"]&&t("div",{key:"append",class:"v-switch__track-false"},[a["track-false"](m)])])},input:s=>{let{inputNode:f,icon:l,backgroundColorClasses:T,backgroundColorStyles:$}=s;return t(q,null,[f,t("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":l||e.loading},e.inset?void 0:T.value],style:e.inset?void 0:$.value},[a.thumb?t(G,{defaults:{VIcon:{icon:l,size:"x-small"}}},{default:()=>[a.thumb({...m,icon:l})]}):t(E,null,{default:()=>[e.loading?t(Q,{name:"v-switch",active:!0,color:k.value===!1?void 0:F.value},{default:v=>a.loader?a.loader(v):t(X,{active:v.isActive,color:v.color,indeterminate:!0,size:"16",width:"2"},null)}):l&&t(W,{key:String(l),icon:l,size:"x-small"},null)]})])])}})}})}),{}}});export{he as V};
//# sourceMappingURL=VSwitch.2c6a0c88.js.map
