import{A as s,a as r,m as o}from"./vue.esm-bundler.b09b7c5a.js";import{V as i}from"./VProgressCircular.8c9797f0.js";import{V as p}from"./VOverlay.4718cec8.js";const l=s({name:"FLoading",props:{text:String,processProps:{type:Object,default:()=>({})}},setup(t,{slots:e}){return()=>{var n,a;return r("div",{class:"f-loading__content"},[r(i,o({width:3,indeterminate:!0},t.processProps),null),r("span",{class:"f-loading__text"},[(a=(n=e.text)==null?void 0:n.call(e))!=null?a:t.text])])}}}),m=s({name:"FFullscreenLoading",setup(t,{attrs:e}){return()=>r(p,{persistent:!0,class:"f-fullscreen-loading"},{default:()=>[r(l,e,null)]})}});export{l as F,m as a};
//# sourceMappingURL=FFullscreenLoading.efb66ac1.js.map