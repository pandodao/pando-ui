var $=Object.defineProperty;var u=(e,s)=>$(e,"name",{value:s,configurable:!0});import{b as m,r as z,a as t,m as f}from"./vue.esm-bundler.b09b7c5a.js";import{m as D,f as M,V as N}from"./VSelectionControl.9c612953.js";import{m as j,u as q,f as E,V as G}from"./VInput.d8777c43.js";import{u as H,L as J}from"./loader.a0162f6e.js";import{u as v}from"./proxiedModel.28fe5444.js";import{V as K}from"./VProgressCircular.7bee339a.js";import{g as O,c as Q,u as T}from"./color.7fbf1750.js";import{f as W}from"./helpers.4b349f1c.js";const re=O()({name:"VSwitch",inheritAttrs:!1,props:{indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...j(),...D()},emits:{"update:focused":e=>!0,"update:modelValue":()=>!0,"update:indeterminate":e=>!0},setup(e,s){let{attrs:V,slots:a}=s;const o=v(e,"indeterminate"),d=v(e,"modelValue"),{loaderClasses:h}=H(e),{isFocused:g,focus:C,blur:w}=q(e),p=m(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),b=Q(),k=m(()=>e.id||`switch-${b}`);function y(){o.value&&(o.value=!1)}return u(y,"onChange"),T(()=>{const[S,P]=W(V),[x,X]=E(e),[_,Y]=M(e),c=z();function A(){var l,i;(i=(l=c.value)==null?void 0:l.input)==null||i.click()}return u(A,"onClick"),t(G,f({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":o.value},h.value]},S,x,{id:k.value,focused:g.value}),{...a,default:l=>{let{id:i,messagesId:B,isDisabled:I,isReadonly:F,isValid:L}=l;return t(N,f({ref:c},_,{modelValue:d.value,"onUpdate:modelValue":[n=>d.value=n,y],id:i.value,"aria-describedby":B.value,type:"checkbox","aria-checked":o.value?"mixed":void 0,disabled:I.value,readonly:F.value,onFocus:C,onBlur:w},P),{...a,default:()=>t("div",{class:"v-switch__track",onClick:A},null),input:n=>{let{textColorClasses:R,textColorStyles:U}=n;return t("div",{class:["v-switch__thumb",R.value],style:U.value},[e.loading&&t(J,{name:"v-switch",active:!0,color:L.value===!1?void 0:p.value},{default:r=>a.loader?a.loader(r):t(K,{active:r.isActive,color:r.color,indeterminate:!0,size:"16",width:"2"},null)})])}})}})}),{}}});export{re as V};
//# sourceMappingURL=VSwitch.0fc59f6e.js.map
