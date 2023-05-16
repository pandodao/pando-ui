import{t,b as o,a as r}from"./vue.esm-bundler.b09b7c5a.js";import{m as h,u as C}from"./border.6d45fe61.js";import{m as k,u as B}from"./density.43b8d8b2.js";import{m as S,u as V}from"./elevation.844f69c6.js";import{b as P,u as N,e as T}from"./VBtn.7a77eb8b.js";import{a as z,u as I,b as R}from"./ssrBoot.12750f3e.js";import{m as w,u as D}from"./rounded.ccd03645.js";import{m as x}from"./VIcon.81f7ecc0.js";import{m as E,b as G,a as L}from"./color.1fec8f8e.js";import{g as _,p as $,u as p}from"./useRender.5a19cee5.js";import{c as i}from"./helpers.4b349f1c.js";const Q=_()({name:"VBottomNavigation",props:{bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:e=>!e||["horizontal","shift"].includes(e)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...h(),...k(),...S(),...w(),...z({name:"bottom-navigation"}),...x({tag:"header"}),...P({modelValue:!0,selectedClass:"v-btn--selected"}),...E()},emits:{"update:modelValue":e=>!0},setup(e,m){let{slots:n}=m;const{themeClasses:l}=G(),{borderClasses:u}=C(e),{backgroundColorClasses:d,backgroundColorStyles:v}=L(t(e,"bgColor")),{densityClasses:c}=B(e),{elevationClasses:g}=V(e),{roundedClasses:b}=D(e),{ssrBootStyles:f}=I(),s=o(()=>Number(e.height)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0)),a=t(e,"active"),{layoutItemStyles:y}=R({id:e.name,order:o(()=>parseInt(e.order,10)),position:o(()=>"bottom"),layoutSize:o(()=>a.value?s.value:0),elementSize:s,active:a,absolute:t(e,"absolute")});return N(e,T),$({VBtn:{color:t(e,"color"),density:t(e,"density"),stacked:o(()=>e.mode!=="horizontal"),variant:"text"}},{scoped:!0}),p(()=>r(e.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":a.value,"v-bottom-navigation--grow":e.grow,"v-bottom-navigation--shift":e.mode==="shift"},l.value,d.value,u.value,c.value,g.value,b.value],style:[v.value,y.value,{height:i(s.value),transform:`translateY(${i(a.value?0:100,"%")})`},f.value]},{default:()=>[n.default&&r("div",{class:"v-bottom-navigation__content"},[n.default()])]})),{}}});export{Q as V};
//# sourceMappingURL=VBottomNavigation.631fa1b6.js.map