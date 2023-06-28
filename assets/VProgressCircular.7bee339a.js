var I=Object.defineProperty;var h=(e,s)=>I(e,"name",{value:s,configurable:!0});import{r as v,j as P,d as T,C as M,t as C,b as l,w as O,a as n}from"./vue.esm-bundler.b09b7c5a.js";import{a as V,m as E,u as B}from"./VIcon.bd07cc2b.js";import{I as U,g as $,m as A,p as D,b as y,u as F}from"./color.7fbf1750.js";import{u as W}from"./intersectionObserver.1e3a532e.js";import{c as j}from"./helpers.4b349f1c.js";function G(e){const s=v(),a=v();if(U){const r=new ResizeObserver(t=>{e==null||e(t,r),t.length&&(a.value=t[0].contentRect)});P(()=>{r.disconnect()}),T(s,(t,o)=>{o&&(r.unobserve(o),a.value=void 0),t&&r.observe(t)},{flush:"post"})}return{resizeRef:s,contentRect:M(a)}}h(G,"useResizeObserver");const X=$()({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...V(),...E({tag:"div"}),...A()},setup(e,s){let{slots:a}=s;const r=20,t=2*Math.PI*r,o=v(),{themeClasses:b}=D(e),{sizeClasses:R,sizeStyles:d}=B(e),{textColorClasses:w,textColorStyles:S}=y(C(e,"color")),{textColorClasses:x,textColorStyles:z}=y(C(e,"bgColor")),{intersectionRef:N,isIntersecting:p}=W(),{resizeRef:k,contentRect:m}=G(),u=l(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),i=l(()=>Number(e.width)),f=l(()=>d.value?Number(e.size):m.value?m.value.width:Math.max(i.value,32)),c=l(()=>r/(1-i.value/f.value)*2),g=l(()=>i.value/f.value*c.value),_=l(()=>j((100-u.value)/100*t));return O(()=>{N.value=o.value,k.value=o.value}),F(()=>n(e.tag,{ref:o,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":p.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},b.value,R.value,w.value],style:[d.value,S.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:u.value},{default:()=>[n("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${c.value} ${c.value}`},[n("circle",{class:["v-progress-circular__underlay",x.value],style:z.value,fill:"transparent",cx:"50%",cy:"50%",r,"stroke-width":g.value,"stroke-dasharray":t,"stroke-dashoffset":0},null),n("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r,"stroke-width":g.value,"stroke-dasharray":t,"stroke-dashoffset":_.value},null)]),a.default&&n("div",{class:"v-progress-circular__content"},[a.default({value:u.value})])]})),{}}});export{X as V,G as u};
//# sourceMappingURL=VProgressCircular.7bee339a.js.map
