var U=Object.defineProperty;var T=(e,t)=>U(e,"name",{value:t,configurable:!0});import{r as w,b as k,a as b,F as W,m as B,t as n}from"./vue.esm-bundler.80cafc0b.js";import{m as X,V as E}from"./VBtn.ce544012.js";import{p as z,g as R,c as Y,u as G,e as j,h as q}from"./color.7ba4ffe3.js";import{f as J}from"./forwardRefs.34034356.js";import{o as K,c as L,W as Q}from"./helpers.32675158.js";import{a as Z,s as ee}from"./easing.da2e9236.js";import{m as te,a as M}from"./VSlideGroup.0c7c4a56.js";import{m as ae,u as oe}from"./density.e2c1329b.js";import{u as se}from"./proxiedModel.dbd4de1d.js";import{m as le}from"./VIcon.ac9f05d6.js";const _=Symbol.for("vuetify:v-tabs"),re=z({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...K(X({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),ne=R()({name:"VTab",props:re(),setup(e,t){let{slots:s,attrs:g}=t;const{textColorClasses:h,textColorStyles:S}=Y(e,"sliderColor"),i=w(),v=w(),a=k(()=>e.direction==="horizontal"),l=k(()=>{var d,r,o;return(o=(r=(d=i.value)==null?void 0:d.group)==null?void 0:r.isSelected.value)!=null?o:!1});function D(d){var o,P;let{value:r}=d;if(r){const C=(P=(o=i.value)==null?void 0:o.$el.parentElement)==null?void 0:P.querySelector(".v-tab--selected .v-tab__slider"),V=v.value;if(!C||!V)return;const F=getComputedStyle(C).color,c=C.getBoundingClientRect(),u=V.getBoundingClientRect(),y=a.value?"x":"y",x=a.value?"X":"Y",$=a.value?"right":"bottom",m=a.value?"width":"height",A=c[y],H=u[y],f=A>H?c[$]-u[$]:c[y]-u[y],I=Math.sign(f)>0?a.value?"right":"bottom":Math.sign(f)<0?a.value?"left":"top":"center",N=(Math.abs(f)+(Math.sign(f)<0?c[m]:u[m]))/Math.max(c[m],u[m])||0,O=c[m]/u[m]||0,p=1.5;Z(V,{backgroundColor:[F,"currentcolor"],transform:[`translate${x}(${f}px) scale${x}(${O})`,`translate${x}(${f/p}px) scale${x}(${(N-1)/p+1})`,"none"],transformOrigin:Array(3).fill(I)},{duration:225,easing:ee})}}return T(D,"updateSlider"),G(()=>{const d=E.filterProps(e);return b(E,B({symbol:_,ref:i,class:["v-tab",e.class],style:e.style,tabindex:l.value?0:-1,role:"tab","aria-selected":String(l.value),active:!1},d,g,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":D}),{...s,default:()=>{var r,o;return b(W,null,[(o=(r=s.default)==null?void 0:r.call(s))!=null?o:e.text,!e.hideSlider&&b("div",{ref:v,class:["v-tab__slider",h.value],style:S.value},null)])}})}),J({},i)}});function ie(e){return e?e.map(t=>Q(t)?t:{text:t,value:t}):[]}T(ie,"parseItems");const de=z({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...te({mandatory:"force"}),...ae(),...le()},"VTabs"),Ve=R()({name:"VTabs",props:de(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:s}=t;const g=se(e,"modelValue"),h=k(()=>ie(e.items)),{densityClasses:S}=oe(e),{backgroundColorClasses:i,backgroundColorStyles:v}=j(n(e,"bgColor"));return q({VTab:{color:n(e,"color"),direction:n(e,"direction"),stacked:n(e,"stacked"),fixed:n(e,"fixedTabs"),sliderColor:n(e,"sliderColor"),hideSlider:n(e,"hideSlider")}}),G(()=>{const a=M.filterProps(e);return b(M,B(a,{modelValue:g.value,"onUpdate:modelValue":l=>g.value=l,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},S.value,i.value,e.class],style:[{"--v-tabs-height":L(e.height)},v.value,e.style],role:"tablist",symbol:_}),{default:()=>[s.default?s.default():h.value.map(l=>b(ne,B(l,{key:l.text}),null))]})}),{}}});export{Ve as V,ne as a};
//# sourceMappingURL=VTabs.c1889508.js.map