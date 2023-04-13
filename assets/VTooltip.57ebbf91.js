import{b as e,r as h,m as d,a as y}from"./vue.esm-bundler.3b29098a.js";import{u as O}from"./proxiedModel.67252d17.js";import{d as S,e as x,h as T,V as w}from"./VOverlay.e2cb60a6.js";import{f as A}from"./forwardRefs.c003b6b8.js";import{g as C,a as I,u as R}from"./useRender.3ca1765f.js";import{o as U}from"./helpers.e1d6c4cc.js";const N=C()({name:"VTooltip",props:{id:String,text:String,...U(S({closeOnBack:!1,location:"end",locationStrategy:"connected",minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent","eager"])},emits:{"update:modelValue":t=>!0},setup(t,m){let{slots:o}=m;const r=O(t,"modelValue"),{scopeId:v}=x(),f=I(),n=e(()=>t.id||`v-tooltip-${f}`),l=h(),g=e(()=>t.location.split(" ").length>1?t.location:t.location+" center"),V=e(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),p=e(()=>t.transition?t.transition:r.value?"scale-transition":"fade-transition"),P=e(()=>d({"aria-describedby":n.value},t.activatorProps));return R(()=>{const[b]=T(t);return y(w,d({ref:l,class:["v-tooltip"],id:n.value},b,{modelValue:r.value,"onUpdate:modelValue":a=>r.value=a,transition:p.value,absolute:!0,location:g.value,origin:V.value,persistent:!0,role:"tooltip",eager:!0,activatorProps:P.value,_disableGlobalStack:!0},v),{activator:o.activator,default:function(){var c,u;for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(u=(c=o.default)==null?void 0:c.call(o,...s))!=null?u:t.text}})}),A({},l)}});export{N as V};
//# sourceMappingURL=VTooltip.57ebbf91.js.map