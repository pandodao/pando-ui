var h=Object.defineProperty;var i=(n,e)=>h(n,"name",{value:e,configurable:!0});import{r as b,b as l,Q as P,d as w}from"./vue.esm-bundler.57aa1454.js";import{f as O,k as y}from"./useRender.0f3b6188.js";import{t as k}from"./helpers.ff98b59e.js";function I(n,e,f){let c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:t=>t,g=arguments.length>4&&arguments[4]!==void 0?arguments[4]:t=>t;const a=O("useProxiedModel"),r=b(n[e]!==void 0?n[e]:f),d=k(e),u=d!==e?l(()=>{var t,s,o,m;return n[e],!!((((t=a.vnode.props)==null?void 0:t.hasOwnProperty(e))||((s=a.vnode.props)==null?void 0:s.hasOwnProperty(d)))&&(((o=a.vnode.props)==null?void 0:o.hasOwnProperty(`onUpdate:${e}`))||((m=a.vnode.props)==null?void 0:m.hasOwnProperty(`onUpdate:${d}`))))}):l(()=>{var t,s;return n[e],!!(((t=a.vnode.props)==null?void 0:t.hasOwnProperty(e))&&((s=a.vnode.props)==null?void 0:s.hasOwnProperty(`onUpdate:${e}`)))});y(()=>!u.value,()=>{w(()=>n[e],t=>{r.value=t})});const v=l({get(){return c(u.value?n[e]:r.value)},set(t){const s=g(t),o=P(u.value?n[e]:r.value);o===s||c(o)===t||(r.value=s,a==null||a.emit(`update:${e}`,s))}});return Object.defineProperty(v,"externalValue",{get:()=>u.value?n[e]:r.value}),v}i(I,"useProxiedModel");export{I as u};
//# sourceMappingURL=proxiedModel.aff93369.js.map
