var m=Object.defineProperty;var a=(o,n)=>m(o,"name",{value:n,configurable:!0});import{u as p}from"./locale.88650f04.js";import{b as u}from"./vue.esm-bundler.b09b7c5a.js";import{p as g}from"./anchor.b337e11f.js";import{d as h}from"./color.7fbf1750.js";const i={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},L=h({location:String},"location");function R(o){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=arguments.length>2?arguments[2]:void 0;const{isRtl:c}=p();return{locationStyles:u(()=>{if(!o.location)return{};const{side:e,align:r}=g(o.location.split(" ").length>1?o.location:`${o.location} center`,c.value);function l(f){return s?s(f):0}a(l,"getOffset");const t={};return e!=="center"&&(n?t[i[e]]=`calc(100% - ${l(e)}px)`:t[e]=0),r!=="center"?n?t[i[r]]=`calc(100% - ${l(r)}px)`:t[r]=0:(e==="center"?t.top=t.left="50%":t[{top:"left",bottom:"left",left:"top",right:"top"}[e]]="50%",t.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[e]),t})}}a(R,"useLocation");export{L as m,R as u};
//# sourceMappingURL=location.b7cdffb8.js.map
