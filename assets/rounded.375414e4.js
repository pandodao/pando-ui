var o=Object.defineProperty;var t=(e,s)=>o(e,"name",{value:s,configurable:!0});import{b as d,P as a}from"./vue.esm-bundler.3b29098a.js";import{b as m,h as f}from"./useRender.3ca1765f.js";const p=m({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function h(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:f();return{roundedClasses:d(()=>{const n=a(e)?e.value:e.rounded,r=[];if(n===!0||n==="")r.push(`${s}--rounded`);else if(typeof n=="string"||n===0)for(const u of String(n).split(" "))r.push(`rounded-${u}`);return r})}}t(h,"useRounded");export{p as m,h as u};
//# sourceMappingURL=rounded.375414e4.js.map