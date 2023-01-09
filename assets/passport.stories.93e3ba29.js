var I=Object.defineProperty;var r=(o,e)=>I(o,"name",{value:e,configurable:!0});import{A as h,r as u,b as d,w as S,o as O,a as t,d as f}from"./vue.esm-bundler.a5c4e1bf.js";import{O as k,P as D,l as A,V as F,n as E,s as y}from"./helper.f8aab96d.js";import{a as x}from"./base64.92b13f23.js";import{V as T}from"./VAvatar.da185431.js";import{V as w}from"./VIcon.5ca83e1b.js";import{V}from"./VImg.19441548.js";import"./border.0d2c7ad0.js";import"./useRender.c7ecffde.js";import"./helpers.cec2c044.js";import"./dimensions.b6fbc401.js";import"./elevation.52b4704c.js";import"./position.d49ff30e.js";import"./locale.76e208ea.js";import"./proxiedModel.9639363f.js";import"./anchor.e4a88562.js";import"./rounded.a0c73c18.js";import"./color.43314d1d.js";import"./VBtn.b5444450.js";import"./density.b3e2de9a.js";import"./variant.b9606795.js";import"./index.1b40d9d7.js";import"./loader.7d1fab10.js";import"./router.3d9f142b.js";import"./VProgressCircular.ad6cc829.js";import"./display.1bd9c9dd.js";import"./VAppBar.a5b38287.js";import"./index.628b3df7.js";import"./layout.6d881cfa.js";import"./VLazy.ecac20e0.js";import"./transition.c93b8895.js";import"./index.549b0914.js";import"./VList.f6b5b9eb.js";import"./VListItem.c102cb0b.js";import"./createSimpleFunctional.f00f4b71.js";import"./VDivider.c33525c0.js";import"./VSpacer.3c3f34f8.js";import"./VMessages.90062972.js";import"./VForm.b1ded583.js";import"./VInput.34db0c3a.js";import"./forwardRefs.c003b6b8.js";import"./mixin.87a49014.js";import"./VBottomNavigation.7efda0bc.js";import"./VTooltip.effd6529.js";import"./scopeId.782553fc.js";import"./VOverlay.74b7cee1.js";import"./easing.36b781ab.js";import"./qrious.20baccc9.js";import"./iframe.44f7c4d0.js";import"./number.ea2b3954.js";import"./VTextField.cc6d2074.js";import"./VCounter.536d06c5.js";import"./VDialog.8e3a7441.js";import"./index.b6a74731.js";import"./VSlider.7ff33036.js";import"./VSwitch.94514388.js";import"./VSelectionControl.9b121a3d.js";import"./VTabs.2ce52302.js";import"./VTextarea.677b10f1.js";import"./VSnackbar.40a0d4da.js";const b=h({name:"Passport",props:{authOptions:{type:Object},paymentOptions:{type:Object}},setup(o){const e=u(""),a=u(""),c=u(null),i=u([]),n=k(),p=D(),l=d(()=>Boolean(e.value&&a.value));async function v(){const s=await n.auth(o.authOptions);e.value=s.token,a.value=s.channel,localStorage.setItem("token",s.token),localStorage.setItem("channel",s.channel)}r(v,"handleConnect");async function m(){e.value="",a.value="",localStorage.setItem("token",""),localStorage.setItem("channel","")}r(m,"handleDisconnect");async function P(){const s=x.v4(),g={...o.paymentOptions,traceId:s,checker:async()=>(await(await fetch("https://api.mixin.one/transfers/trace/"+s,{method:"GET",headers:{Authorization:`Bearer ${e.value}`}})).json()).data?(p.success({message:"Payment checked"}),!0):!1};n.payment(g)}return r(P,"handlePayment"),S(()=>e.value,async()=>{c.value=await n.getProfile(),i.value=await n.getAssets()}),O(()=>{e.value=localStorage.getItem("token")||"",a.value=localStorage.getItem("channel")||"",n.sync({token:e.value,channel:a.value})}),()=>t("div",{class:"passport-overvie-container"},[t("div",{class:"passport-overview"},[l.value?t(R,{profile:c.value,assets:i.value,onDisconnect:()=>m(),onPayment:()=>P()},null):t(C,{onConnect:()=>v()},null)])])}}),C=h({name:"Disconnected2",emits:{connect:()=>!0},setup(o,{emit:e}){return()=>t("div",{class:"passport-account-disconnected"},[t(w,null,{default:()=>[f("$FIconWalletAFill")]}),t("div",{class:"disconnected--hint"},[f("Please connect your wallet first")]),t(A,{color:"primary",onClick:()=>e("connect")},{default:()=>[f("Connect Wallet")]})])}}),R=h({name:"Connected",props:{profile:Object,assets:Array},emits:{disconnect:()=>!0,payment:()=>!0},setup(o,{emit:e}){const a=d(()=>{var n;return(n=o.profile)==null?void 0:n.full_name}),c=d(()=>{var n;return(n=o.profile)==null?void 0:n.avatar_url}),i=d(()=>{var p,l;const n=(l=(p=o.assets)==null?void 0:p.reduce((v,m)=>v+m.balance*m.price_usd,0))!=null?l:0;return new Intl.NumberFormat("en",{currency:"USD",style:"currency"}).formatToParts(n)});return()=>t("div",{class:"passport-account-connected"},[t(T,{size:"48"},{default:()=>[t(V,{src:c.value},null)]}),t("div",{class:"user-name mt-2"},[t("span",null,[a.value])]),t(F,{theme:"dark",class:"account-balance my-9"},{default:()=>[t("div",{class:"account-label mb-4"},[f("Wallet Assets")]),t(E,{parts:i.value},null)]}),t(y,{height:"56",title:"Disconnect",prependIcon:"$FIconDisconnect",class:"text-error px-0",onClick:()=>e("disconnect")},null),t(y,{height:"56",title:"Payment",prependIcon:"$FIconBorrow",class:"px-0",onClick:()=>e("payment")},null)])}}),Ht={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
import { Passport } from "./Passport";

export default {
  title: "Plugin/Passport",
  component: Passport,
};

const Template: StoryFn = (args) => ({
  components: {
    Passport,
  },
  setup() {
    return { args };
  },
  template: \`
    <Passport v-bind="args" />
  \`,
});

export const Default = Template.bind({});

Default.args = {
  authOptions: {
    origin: "FoxONE UIKit",
    authMethods: ["mixin", "fennec", "metamask"],
    clientId: "fbd26bc6-3d04-4964-a7fe-a540432b16e2",
    scope: "PROFILE:READ ASSETS:READ SNAPSHOTS:READ",
    pkce: true,
  },
  paymentOptions: {
    assetId: "965e5c6e-434c-3fa9-b780-c50f43cd955c",
    amount: "1",
    recipient: "fbd26bc6-3d04-4964-a7fe-a540432b16e2",
    memo: "Test",
  },
};
`,locationsMap:{default:{startLoc:{col:26,line:9},endLoc:{col:2,line:19},startBody:{col:26,line:9},endBody:{col:2,line:19}}}}},title:"Plugin/Passport",component:b},N=r(o=>({components:{Passport:b},setup(){return{args:o}},template:`
    <Passport v-bind="args" />
  `}),"Template"),_=N.bind({});_.args={authOptions:{origin:"FoxONE UIKit",authMethods:["mixin","fennec","metamask"],clientId:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",scope:"PROFILE:READ ASSETS:READ SNAPSHOTS:READ",pkce:!0},paymentOptions:{assetId:"965e5c6e-434c-3fa9-b780-c50f43cd955c",amount:"1",recipient:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",memo:"Test"}};const Kt=["Default"];export{_ as Default,Kt as __namedExportsOrder,Ht as default};
//# sourceMappingURL=passport.stories.93e3ba29.js.map
