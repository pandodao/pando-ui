var g=Object.defineProperty;var s=(e,o)=>g(e,"name",{value:o,configurable:!0});import{A as h,r as v,b as y,d as b,a,m as w}from"./vue.esm-bundler.9500adb2.js";import{F}from"./FModal.7ce358cf.js";import{F as M}from"./FButton.d61383cc.js";import{F as i}from"./FRender.72bf5493.js";import{a as _}from"./locale.7efc9def.js";import{u as x}from"./display.9827c8ac.js";const $=h({name:"FMessageModal",props:{title:{type:[String,Object],default:""},text:{type:[String,Object],default:""},cancel:{type:Object,default:()=>({})},confirm:{type:Object,default:()=>({})},actions:{type:Object},hideActions:{type:Boolean,default:!1},width:{type:[String,Number],default:420}},emits:{destroy:()=>!0},setup(e,{emit:o,expose:d}){const{t:n}=_(),{smAndDown:u}=x(),l=v(!1),m=y(()=>u.value?"100%":e.width),f=s(()=>l.value=!0,"show"),r=s(()=>l.value=!1,"close");b(()=>l.value,s(t=>{t||o("destroy")},"handleDialogChange")),d({show:f,close:r});const c=s(t=>t.show?a(M,w(t.props||{},{class:t.classes||"",onClick:()=>{l.value=!1,t.callback&&t.callback()}}),{default:()=>[t.text]}):null,"genAction");return()=>a(F,{modelValue:l.value,"onUpdate:modelValue":t=>l.value=t,title:a("div",{class:"f-msg-modal__title"},[a(i,{content:e.title},null)]),width:m.value,class:"f-msg-modal"},{default:()=>[a("div",{class:"f-msg-modal__body"},[a(i,{content:e.text},null),!e.hideActions&&a("div",{class:"f-msg-modal__actions"},[e.actions||[c({show:!0,text:n("$vuetify.uikit.cancel"),props:{variant:"plain"},...(e==null?void 0:e.cancel)||{}}),c({show:!0,text:n("$vuetify.uikit.continue"),props:{color:"greyscale_1"},...(e==null?void 0:e.confirm)||{}})]])])]})}});export{$ as F};
//# sourceMappingURL=FMessageModal.bda497fa.js.map
