var v=Object.defineProperty;var s=(o,n)=>v(o,"name",{value:n,configurable:!0});import{r as b,a as h}from"./vue.esm-bundler.57aa1454.js";import{h as R,i as V}from"./VInput.a59f36d0.js";import{f as F}from"./forwardRefs.c003b6b8.js";import{g as y,u as g}from"./useRender.0f3b6188.js";const x=y()({name:"VForm",props:{...R()},emits:{"update:modelValue":o=>!0,submit:o=>!0},setup(o,n){let{slots:m,emit:u}=n;const a=V(o),i=b();function l(t){t.preventDefault(),a.reset()}s(l,"onReset");function c(t){const r=t,e=a.validate();r.then=e.then.bind(e),r.catch=e.catch.bind(e),r.finally=e.finally.bind(e),u("submit",r),r.defaultPrevented||e.then(d=>{var f;let{valid:p}=d;p&&((f=i.value)==null||f.submit())}),r.preventDefault()}return s(c,"onSubmit"),g(()=>{var t;return h("form",{ref:i,class:"v-form",novalidate:!0,onReset:l,onSubmit:c},[(t=m.default)==null?void 0:t.call(m,a)])}),F(a,i)}});export{x as V};
//# sourceMappingURL=VForm.de873814.js.map