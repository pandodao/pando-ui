import{t as c,b as v,a as d}from"./vue.esm-bundler.3b29098a.js";import{m,p as u,u as h}from"./color.fef4ce02.js";import{g,u as f}from"./useRender.3ca1765f.js";import{c as i}from"./helpers.e1d6c4cc.js";const T=g()({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...m()},setup(e,o){let{attrs:t}=o;const{themeClasses:a}=u(e),{textColorClasses:l,textColorStyles:s}=h(c(e,"color")),n=v(()=>{const r={};return e.length&&(r[e.vertical?"maxHeight":"maxWidth"]=i(e.length)),e.thickness&&(r[e.vertical?"borderRightWidth":"borderTopWidth"]=i(e.thickness)),r});return f(()=>d("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},a.value,l.value],style:[n.value,s.value],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{T as V};
//# sourceMappingURL=VDivider.cb2315f4.js.map