var d=Object.defineProperty;var n=(a,e)=>d(a,"name",{value:e,configurable:!0});import{a as r,F as v,b as s,u as l}from"./vue.esm-bundler.80cafc0b.js";import{p as m,y as g,z as y}from"./color.7ba4ffe3.js";const p=["elevated","flat","tonal","outlined","text","plain"];function V(a,e){return r(v,null,[a&&r("span",{key:"overlay",class:`${e}__overlay`},null),r("span",{key:"underlay",class:`${e}__underlay`},null)])}n(V,"genOverlays");const _=m({color:String,variant:{type:String,default:"elevated",validator:a=>p.includes(a)}},"variant");function $(a){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:g();const o=s(()=>{const{variant:t}=l(a);return`${e}--variant-${t}`}),{colorClasses:u,colorStyles:c}=y(s(()=>{const{variant:t,color:i}=l(a);return{[["elevated","flat"].includes(t)?"background":"text"]:i}}));return{colorClasses:u,colorStyles:c,variantClasses:o}}n($,"useVariant");export{V as g,_ as m,$ as u};
//# sourceMappingURL=variant.1e842247.js.map
