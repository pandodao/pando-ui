import{A as c,b as f,a as s,e as u}from"./vue.esm-bundler.b09b7c5a.js";import{F as m}from"./FAssetLogo.0e70c9a8.js";import{a as r}from"./locale.88650f04.js";import{V as _}from"./VIcon.bd07cc2b.js";const h=c({name:"FAssetField",props:{showName:Boolean,disabled:Boolean,outlined:{type:Boolean,default:!0},selectable:{type:Boolean,default:!0},asset:{type:Object,default:null},logoBackgroundColor:{type:String,default:"greyscale_7"}},setup(e){const{t:i}=r(),n=f(()=>({"f-asset-field":!0,"f-asset-field--no-selectable":!e.selectable,"f-asset-field--outlined":e.outlined}));return()=>{var t,a,l,o,d;return s("div",{class:n.value},[e.asset?s(m,{size:"22",chainSize:"10",asset:e.asset},null):s("span",{class:"f-asset-field__placeholder"},[i("$vuetify.uikit.select_asset")]),e.asset&&s("div",{class:"f-asset-field__right"},[s("div",{class:["f-asset-field__symbol",{"f-asset-field__symbol--sm":((l=(a=(t=e.asset)==null?void 0:t.symbol)==null?void 0:a.length)!=null?l:0)>8}]},[(o=e.asset)==null?void 0:o.symbol]),e.showName&&s("div",{class:"f-asset-field__name text-greyscale_3"},[(d=e.asset)==null?void 0:d.name])]),e.selectable&&s(_,{size:"16",class:"f-asset-field__expend"},{default:()=>[u("$expand")]})])}}});export{h as F};
//# sourceMappingURL=FAssetSelectField.6f827bc0.js.map
