import{z as c,r as o,b as u,o as i,w as l,a as f}from"./vue.esm-bundler.57aa1454.js";import{c as n}from"./helpers.ff98b59e.js";import{Q as d}from"./qrious.3554cffb.js";const p=c({name:"FQRCode",props:{text:{type:String,default:""},size:{type:Number,default:128}},setup(e){const t=o(),s=o(),r=u(()=>({width:n(e.size),height:n(e.size)}));return i(()=>{s.value=new d({size:e.size,element:t.value})}),l(()=>{var a;(a=s.value)==null||a.set({value:e.text})}),()=>f("canvas",{ref:t,class:"f-qrcode__canvas",style:r.value},null)}});export{p as F};
//# sourceMappingURL=FQRCode.fd493542.js.map