var u=Object.defineProperty;var i=(e,n)=>u(e,"name",{value:n,configurable:!0});import{r as f,k as v,d as I}from"./vue.esm-bundler.3b29098a.js";import{j as m}from"./useRender.3ca1765f.js";function R(e){const n=f(),o=f(!1);if(m){const r=new IntersectionObserver(s=>{e==null||e(s,r),o.value=!!s.find(t=>t.isIntersecting)});v(()=>{r.disconnect()}),I(n,(s,t)=>{t&&(r.unobserve(t),o.value=!1),s&&r.observe(s)},{flush:"post"})}return{intersectionRef:n,isIntersecting:o}}i(R,"useIntersectionObserver");export{R as u};
//# sourceMappingURL=intersectionObserver.b06f0fb9.js.map
