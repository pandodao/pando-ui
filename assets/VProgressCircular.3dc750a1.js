var I=Object.defineProperty;var h=(e,a)=>I(e,"name",{value:a,configurable:!0});import{d as v,k as P,f as T,g as M,t as C,b as l,x as O,a as n}from"./vue.esm-bundler.03d0f9c2.js";import{a as V,m as E,u as B}from"./VIcon.48347d4a.js";import{m as U,p as $,u as y}from"./color.ec9b773d.js";import{u as A}from"./loader.30593133.js";import{I as D,d as F,u as W}from"./useRender.4b8f74ab.js";import{c as G}from"./helpers.11996f79.js";function j(e){const a=v(),s=v();if(D){const r=new ResizeObserver(t=>{e==null||e(t,r),t.length&&(s.value=t[0].contentRect)});P(()=>{r.disconnect()}),T(a,(t,o)=>{o&&(r.unobserve(o),s.value=void 0),t&&r.observe(t)},{flush:"post"})}return{resizeRef:a,contentRect:M(s)}}h(j,"useResizeObserver");const Y=F({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...V(),...E({tag:"div"}),...U()},setup(e,a){let{slots:s}=a;const r=20,t=2*Math.PI*r,o=v(),{themeClasses:b}=$(e),{sizeClasses:R,sizeStyles:d}=B(e),{textColorClasses:S,textColorStyles:w}=y(C(e,"color")),{textColorClasses:x,textColorStyles:k}=y(C(e,"bgColor")),{intersectionRef:p,isIntersecting:z}=A(),{resizeRef:N,contentRect:m}=j(),u=l(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),i=l(()=>Number(e.width)),f=l(()=>d.value?Number(e.size):m.value?m.value.width:Math.max(i.value,32)),c=l(()=>r/(1-i.value/f.value)*2),g=l(()=>i.value/f.value*c.value),_=l(()=>G((100-u.value)/100*t));return O(()=>{p.value=o.value,N.value=o.value}),W(()=>n(e.tag,{ref:o,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":z.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},b.value,R.value,S.value],style:[d.value,w.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:u.value},{default:()=>[n("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${c.value} ${c.value}`},[n("circle",{class:["v-progress-circular__underlay",x.value],style:k.value,fill:"transparent",cx:"50%",cy:"50%",r,"stroke-width":g.value,"stroke-dasharray":t,"stroke-dashoffset":0},null),n("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r,"stroke-width":g.value,"stroke-dasharray":t,"stroke-dashoffset":_.value},null)]),s.default&&n("div",{class:"v-progress-circular__content"},[s.default({value:u.value})])]})),{}}});export{Y as V,j as u};
//# sourceMappingURL=VProgressCircular.3dc750a1.js.map
