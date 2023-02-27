import{t,b as o,a as r}from"./vue.esm-bundler.57aa1454.js";import{m as h,u as C}from"./border.72c41e60.js";import{m as k,u as B}from"./density.5fc65f23.js";import{m as S,u as V}from"./elevation.08bb2882.js";import{b as P,u as N,e as T}from"./VBtn.ab71924f.js";import{a as z,u as I,b as R}from"./ssrBoot.38082b65.js";import{m as w,u as D}from"./rounded.638bf334.js";import{m as x}from"./VIcon.b7876f5b.js";import{m as E,b as G,a as L}from"./color.5e70182f.js";import{g as _,p as $,u as p}from"./useRender.0f3b6188.js";import{c as i}from"./helpers.ff98b59e.js";const Q=_()({name:"VBottomNavigation",props:{bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:e=>!e||["horizontal","shift"].includes(e)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...h(),...k(),...S(),...w(),...z({name:"bottom-navigation"}),...x({tag:"header"}),...P({modelValue:!0,selectedClass:"v-btn--selected"}),...E()},emits:{"update:modelValue":e=>!0},setup(e,m){let{slots:n}=m;const{themeClasses:l}=G(),{borderClasses:u}=C(e),{backgroundColorClasses:d,backgroundColorStyles:v}=L(t(e,"bgColor")),{densityClasses:c}=B(e),{elevationClasses:g}=V(e),{roundedClasses:b}=D(e),{ssrBootStyles:f}=I(),s=o(()=>Number(e.height)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0)),a=t(e,"active"),{layoutItemStyles:y}=R({id:e.name,order:o(()=>parseInt(e.order,10)),position:o(()=>"bottom"),layoutSize:o(()=>a.value?s.value:0),elementSize:s,active:a,absolute:t(e,"absolute")});return N(e,T),$({VBtn:{color:t(e,"color"),density:t(e,"density"),stacked:o(()=>e.mode!=="horizontal"),variant:"text"}},{scoped:!0}),p(()=>r(e.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":a.value,"v-bottom-navigation--grow":e.grow,"v-bottom-navigation--shift":e.mode==="shift"},l.value,d.value,u.value,c.value,g.value,b.value],style:[v.value,y.value,{height:i(s.value),transform:`translateY(${i(a.value?0:100,"%")})`},f.value]},{default:()=>[n.default&&r("div",{class:"v-bottom-navigation__content"},[n.default()])]})),{}}});export{Q as V};
//# sourceMappingURL=VBottomNavigation.211552fb.js.map