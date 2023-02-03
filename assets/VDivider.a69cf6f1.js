import{t as d,b as c,a as v}from"./vue.esm-bundler.330b8bcd.js";import{m,p as u,a as h}from"./color.66c7a00f.js";import{d as g,u as f}from"./useRender.b59b3e39.js";import{c as i}from"./helpers.6dbb45ef.js";const V=g({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...m()},setup(e,a){let{attrs:t}=a;const{themeClasses:o}=u(e),{backgroundColorClasses:n,backgroundColorStyles:l}=h(d(e,"color")),s=c(()=>{const r={};return e.length&&(r[e.vertical?"maxHeight":"maxWidth"]=i(e.length)),e.thickness&&(r[e.vertical?"borderRightWidth":"borderTopWidth"]=i(e.thickness)),r});return f(()=>v("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},o.value,n.value],style:[s.value,l.value],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{V};
//# sourceMappingURL=VDivider.a69cf6f1.js.map