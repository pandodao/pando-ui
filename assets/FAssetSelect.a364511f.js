var m=Object.defineProperty;var r=(e,s)=>m(e,"name",{value:s,configurable:!0});import{A as i,a as t,U as c,d as p,b as f,m as F}from"./vue.esm-bundler.03d0f9c2.js";import{F as A}from"./FModal.2828546c.js";import{F as y}from"./FListItem.689549fe.js";import{F as v}from"./FAssetLogo.cc338389.js";import{a as b,V as g}from"./VLazy.17fb2cc6.js";import{F as S}from"./FAssetSelectField.ea09c97f.js";import{F as V}from"./FSearchInput.6dd3f7b5.js";import{d as L}from"./FInput.0625b872.js";import{a as j}from"./locale.9f7d6233.js";const _=i({name:"FAssetItem",props:{asset:{type:Object,default:null}},setup(e){return()=>t(b,{"min-height":52},{default:()=>[t(y,{title:e.asset.symbol,subtitle:e.asset.name,value:e.asset.id},{prepend:()=>t(v,{asset:e.asset,size:"28",class:"mr-2"},null)})]})}});function h(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!c(e)}r(h,"_isSlot");const I=i({name:"FAssetList",props:{assets:{type:Array,default:()=>[]}},emits:{select:e=>!0},setup(e,{emit:s}){return()=>{let l;return t(g,null,h(l=e.assets.map(o=>t(_,{asset:o,key:o.id,onClick:()=>s("select",o)},null)))?l:{default:()=>[l]})}}});const P=i({name:"FAssetSelect",props:{dialog:{type:Boolean,default:!1},asset:{type:Object,default:null},assets:{type:Array,default:()=>[]}},emits:{"update:asset":e=>!0,"update:dialog":e=>!0},setup(e,{emit:s,attrs:l}){const{t:o}=j(),u=p(""),n=f(()=>L(e.assets,u.value)),d=r(a=>{s("update:asset",a),s("update:dialog",!1)},"handleSelect");return()=>t(A,{title:o("$vuetify.uikit.select_asset"),modelValue:e.dialog,"onUpdate:modelValue":a=>s("update:dialog",a)},{activator:({props:a})=>t(S,F({asset:e.asset},a,l),null),default:()=>t("div",{class:"f-asset-select"},[t("div",{class:"px-4 mb-2"},[t(V,{modelValue:u.value,"onUpdate:modelValue":a=>u.value=a},null)]),t(I,{class:"f-asset-select__list",assets:n.value,onSelect:d},null)])})}});export{P as F,_ as a,I as b};
//# sourceMappingURL=FAssetSelect.a364511f.js.map
