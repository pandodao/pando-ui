import{A as d,r as c,b as o,a as l,m as p}from"./vue.esm-bundler.b09b7c5a.js";import{F as m}from"./FInput.463127f6.js";import{F as f}from"./assets.d285e4c2.js";import"./FAssetSelectField.6f827bc0.js";const F=d({name:"FAssetAmountInput",props:{fullfilled:{type:Boolean,default:!1},amount:{type:String,default:""},asset:{type:Object,default:null},assets:{type:Array,default:()=>[]},themeColor:{type:String,default:"primary"},showRecords:{type:Boolean,default:!1},records:{type:Object,default:()=>[]},selectable:{type:Boolean,deafult:!0}},emits:{"update:asset":e=>!0,"update:amount":e=>!0,"update:records":e=>!0,"clear:records":()=>!0},setup(e,{emit:a,slots:r}){const s=c(!1),u=o(()=>({reverse:!0,type:"number",precision:8})),n=o(()=>["f-asset-amount-input",{"f-asset-amount-input--filled":e.fullfilled}]);return()=>l(m,p(u.value,{modelValue:e.amount,class:n.value,"onUpdate:modelValue":t=>a("update:amount",t)}),{...r,"prepend-inner":()=>l(f,{dialog:s.value,"onUpdate:dialog":t=>s.value=t,outlined:!1,asset:e.asset,assets:e.assets,records:e.records,themeColor:e.themeColor,showRecords:e.showRecords,selectable:e.selectable,"onUpdate:asset":t=>a("update:asset",t),"onUpdate:records":t=>a("update:records",t),"onClear:records":()=>a("clear:records")},null)})}});export{F};
//# sourceMappingURL=FAssetAmountInput.80acd3d1.js.map
