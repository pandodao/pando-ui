var u=Object.defineProperty;var i=(e,a)=>u(e,"name",{value:a,configurable:!0});import{f as m,g as d,a as n}from"./vue.esm-bundler.330b8bcd.js";import{m as f,u as c}from"./dimensions.6590eaa4.js";import{m as p}from"./VIcon.c758310f.js";import{m as v,M as y}from"./transition.d91c432b.js";import{u as V}from"./proxiedModel.815b9064.js";import{I as g}from"./index.0fdd422f.js";import{d as D,u as M}from"./useRender.b59b3e39.js";const L=D({name:"VLazy",directives:{intersect:g},props:{modelValue:Boolean,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},...f(),...p(),...v({transition:"fade-transition"})},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:s}=a;const{dimensionStyles:r}=c(e),o=V(e,"modelValue");function l(t){o.value||(o.value=t)}return i(l,"onIntersect"),M(()=>{var t;return m(n(e.tag,{class:"v-lazy",style:r.value},{default:()=>[o.value&&n(y,{transition:e.transition,appear:!0},{default:()=>[(t=s.default)==null?void 0:t.call(s)]})]}),[[d("intersect"),l,e.options]])}),{}}});export{L as V};
//# sourceMappingURL=VLazy.fba54de2.js.map