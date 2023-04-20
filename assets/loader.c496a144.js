var $=Object.defineProperty;var d=(e,r)=>$(e,"name",{value:r,configurable:!0});import{b as l,a,T as F}from"./vue.esm-bundler.b09b7c5a.js";import{m as z,u as M}from"./rounded.ccd03645.js";import{m as X}from"./VIcon.81f7ecc0.js";import{m as A,u as U}from"./location.11c487f7.js";import{m as j,p as q,u as D,a as C}from"./color.1fec8f8e.js";import{u as E}from"./intersectionObserver.8499cdfb.js";import{u as G}from"./proxiedModel.f0d8de9f.js";import{u as H}from"./locale.0dcd1420.js";import{g as J,u as K,b as Q,h as W}from"./useRender.5a19cee5.js";import{c as t}from"./helpers.4b349f1c.js";const Y=J()({name:"VProgressLinear",props:{absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...A({location:"top"}),...z(),...X(),...j()},emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:o}=r;const s=G(e,"modelValue"),{isRtl:k}=H(),{themeClasses:B}=q(e),{locationStyles:S}=U(e),{textColorClasses:_,textColorStyles:x}=D(e,"color"),{backgroundColorClasses:V,backgroundColorStyles:L}=C(l(()=>e.bgColor||e.color)),{backgroundColorClasses:b,backgroundColorStyles:h}=C(e,"color"),{roundedClasses:P}=M(e),{intersectionRef:c,isIntersecting:R}=E(),v=l(()=>parseInt(e.max,10)),n=l(()=>parseInt(e.height,10)),m=l(()=>parseFloat(e.bufferValue)/v.value*100),g=l(()=>parseFloat(s.value)/v.value*100),u=l(()=>k.value!==e.reverse),T=l(()=>e.indeterminate?"fade-transition":"slide-x-transition"),y=l(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function N(i){if(!c.value)return;const{left:w,right:I,width:f}=c.value.getBoundingClientRect(),O=u.value?f-i.clientX+(I-f):i.clientX-w;s.value=Math.round(O/f*v.value)}return d(N,"handleClick"),K(()=>a(e.tag,{ref:c,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&R.value,"v-progress-linear--reverse":u.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},P.value,B.value],style:{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?t(n.value):0,"--v-progress-linear-height":t(n.value),...S.value},role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:g.value,onClick:e.clickable&&N},{default:()=>[e.stream&&a("div",{key:"stream",class:["v-progress-linear__stream",_.value],style:{...x.value,[u.value?"left":"right"]:t(-n.value),borderTop:`${t(n.value/2)} dotted`,opacity:y.value,top:`calc(50% - ${t(n.value/4)})`,width:t(100-m.value,"%"),"--v-progress-linear-stream-to":t(n.value*(u.value?1:-1))}},null),a("div",{class:["v-progress-linear__background",V.value],style:[L.value,{opacity:y.value,width:t(e.stream?m.value:100,"%")}]},null),a(F,{name:T.value},{default:()=>[e.indeterminate?a("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(i=>a("div",{key:i,class:["v-progress-linear__indeterminate",i,b.value],style:h.value},null))]):a("div",{class:["v-progress-linear__determinate",b.value],style:[h.value,{width:t(g.value,"%")}]},null)]}),o.default&&a("div",{class:"v-progress-linear__content"},[o.default({value:g.value,buffer:m.value})])]})),{}}}),ue=Q({loading:[Boolean,String]},"loader");function de(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();return{loaderClasses:l(()=>({[`${r}--loading`]:e.loading}))}}d(de,"useLoader");function ce(e,r){var s;let{slots:o}=r;return a("div",{class:`${e.name}__loader`},[((s=o.default)==null?void 0:s.call(o,{color:e.color,isActive:e.active}))||a(Y,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}d(ce,"LoaderSlot");export{ce as L,Y as V,ue as m,de as u};
//# sourceMappingURL=loader.c496a144.js.map