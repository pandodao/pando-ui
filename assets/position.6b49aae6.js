var i=Object.defineProperty;var o=(t,s)=>i(t,"name",{value:s,configurable:!0});import{b as n}from"./vue.esm-bundler.b09b7c5a.js";import{b as e,h as a}from"./useRender.5a19cee5.js";const r=["static","relative","fixed","absolute","sticky"],l=e({position:{type:String,validator:t=>r.includes(t)}},"position");function d(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:a();return{positionClasses:n(()=>t.position?`${s}--${t.position}`:void 0)}}o(d,"usePosition");export{l as m,d as u};
//# sourceMappingURL=position.6b49aae6.js.map