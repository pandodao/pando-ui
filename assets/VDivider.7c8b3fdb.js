import{t as c,b as v,a as d}from"./vue.esm-bundler.80cafc0b.js";import{p as m,m as h,a as u,g,b as f,c as C,u as V}from"./color.7ba4ffe3.js";import{c as i}from"./helpers.32675158.js";const b=m({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...h(),...u()},"VDivider"),D=g()({name:"VDivider",props:b(),setup(e,a){let{attrs:t}=a;const{themeClasses:o}=f(e),{textColorClasses:s,textColorStyles:l}=C(c(e,"color")),n=v(()=>{const r={};return e.length&&(r[e.vertical?"maxHeight":"maxWidth"]=i(e.length)),e.thickness&&(r[e.vertical?"borderRightWidth":"borderTopWidth"]=i(e.thickness)),r});return V(()=>d("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},o.value,s.value,e.class],style:[n.value,l.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{D as V};
//# sourceMappingURL=VDivider.7c8b3fdb.js.map