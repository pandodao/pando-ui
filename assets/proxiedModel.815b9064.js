var g=Object.defineProperty;var i=(t,e)=>g(t,"name",{value:e,configurable:!0});import{r as h,b as l,d as b}from"./vue.esm-bundler.330b8bcd.js";import{f as P,k as w}from"./useRender.b59b3e39.js";import{t as O}from"./helpers.6dbb45ef.js";function K(t,e,$){let d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:n=>n,f=arguments.length>4&&arguments[4]!==void 0?arguments[4]:n=>n;const o=P("useProxiedModel"),r=h(t[e]!==void 0?t[e]:$),s=O(e),u=s!==e?l(()=>{var n,a,m,c;return t[e],!!(((n=o.vnode.props)!=null&&n.hasOwnProperty(e)||(a=o.vnode.props)!=null&&a.hasOwnProperty(s))&&((m=o.vnode.props)!=null&&m.hasOwnProperty(`onUpdate:${e}`)||(c=o.vnode.props)!=null&&c.hasOwnProperty(`onUpdate:${s}`)))}):l(()=>{var n,a;return t[e],!!((n=o.vnode.props)!=null&&n.hasOwnProperty(e)&&(a=o.vnode.props)!=null&&a.hasOwnProperty(`onUpdate:${e}`))});w(()=>!u.value,()=>{b(()=>t[e],n=>{r.value=n})});const v=l({get(){return d(u.value?t[e]:r.value)},set(n){const a=f(n);(u.value?t[e]:r.value)===a||d(u.value?t[e]:r.value)===n||(r.value=a,o==null||o.emit(`update:${e}`,a))}});return Object.defineProperty(v,"externalValue",{get:()=>u.value?t[e]:r.value}),v}i(K,"useProxiedModel");export{K as u};
//# sourceMappingURL=proxiedModel.815b9064.js.map