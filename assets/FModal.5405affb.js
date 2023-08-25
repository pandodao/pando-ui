var V=Object.defineProperty;var s=(t,a)=>V(t,"name",{value:a,configurable:!0});import{A as h,b as n,a as l,m as k,e as i}from"./vue.esm-bundler.b09b7c5a.js";import{F as r}from"./FButton.7621db81.js";import{V as v,g as C,f as _,e as b,a as g}from"./VDialog.ac2f44e1.js";import{u as B}from"./display.c2299c89.js";import{V as m}from"./VIcon.bd07cc2b.js";const w=h({name:"FModal",props:{hideClose:Boolean,hideBack:{type:Boolean,default:!0},title:{type:[String,Object],default:""},desktop:{type:String,default:"dialog"},modelValue:{type:Boolean,default:!1}},emits:{"update:modelValue":t=>!0,back:()=>!0},setup(t,{slots:a,emit:u,attrs:c}){const{smAndDown:d}=B(),o=n(()=>{const e=!d.value&&t.desktop==="menu";return{isMenu:e,hasTitle:!e&&(t.title||a.title),hasClose:t.hideClose||c.persistent||e,wrapper:e?v:C,presets:d.value?{transition:"dialog-bottom-transition"}:{maxWidth:600}}}),f=n(()=>({"f-modal":!0,"f-modal-menu":o.value.isMenu,"f-bottom-sheet":d.value})),p=s(()=>l(g,{class:"f-modal__content"},{default:()=>[!t.hideBack&&l(r,{icon:!0,size:"24",class:"f-modal__back",onClick:e=>u("back")},{default:()=>[l(m,{size:"18"},{default:()=>[i("$back")]})]}),!o.value.hasClose&&l(r,{icon:!0,size:"24",class:"f-modal__close",onClick:e=>{u("update:modelValue",!1)}},{default:()=>[l(m,{size:"18"},{default:()=>[i("$close")]})]}),o.value.hasTitle&&l(_,{class:"f-modal__title"},{default:()=>{var e;return[t.title||((e=a.title)==null?void 0:e.call(a))]}}),l(b,{class:"f-modal__text"},{default:()=>{var e;return[(e=a.default)==null?void 0:e.call(a)]}})]}),"content");return()=>l(o.value.wrapper,k({modelValue:t.modelValue},o.value.presets,{class:f.value,"onUpdate:modelValue":e=>u("update:modelValue",e)}),{...a,default:()=>p()})}});export{w as F};
//# sourceMappingURL=FModal.5405affb.js.map
