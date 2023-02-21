var P=Object.defineProperty;var r=(n,e)=>P(n,"name",{value:e,configurable:!0});import{A as h,r as u,b as d,d as I,o as k,a as t,e as f}from"./vue.esm-bundler.60beb779.js";import{O,P as D,l as A,n as F,s as g}from"./FTextarea.b8a51034.js";import{a as T}from"./base64.85ec081c.js";import{V as E}from"./VSheet.9fa4c914.js";import{V as x}from"./VIcon.ccd22ecd.js";import{V as w}from"./VAvatar.709f16cb.js";import{V}from"./VImg.79a3bf78.js";import"./VSnackbar.0e6f9429.js";import"./variant.f60f637f.js";import"./useRender.06ad421e.js";import"./helpers.f4a4e1c6.js";import"./color.7f161142.js";import"./location.3f71a5c2.js";import"./locale.656e3084.js";import"./proxiedModel.c4bc26c4.js";import"./anchor.46190ad2.js";import"./position.31a6f1c1.js";import"./rounded.08843391.js";import"./VOverlay.6564e1f3.js";import"./dimensions.71f8bcb1.js";import"./easing.36b781ab.js";import"./transition.d5d90e7e.js";import"./router.9cc51735.js";import"./display.49866675.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.7d468152.js";import"./VBtn.76288723.js";import"./border.84bdbe82.js";import"./density.3ab93966.js";import"./elevation.6146b715.js";import"./index.d3586bd0.js";import"./loader.3ab44f13.js";import"./VProgressCircular.1a876490.js";import"./VAppBar.ab11e628.js";import"./index.2f1043ab.js";import"./layout.be832025.js";import"./VLazy.dfd7813b.js";import"./index.41c719a2.js";import"./VList.3d3d7549.js";import"./VListItem.e48c8813.js";import"./createSimpleFunctional.057254cd.js";import"./VSpacer.15b61edb.js";import"./VMessages.e9237a13.js";import"./VForm.e274806a.js";import"./VInput.9d434e05.js";import"./mixin.87a49014.js";import"./VBottomNavigation.0e3622e8.js";import"./VTooltip.368e4bdc.js";import"./qrious.33faeaed.js";import"./iframe.95136ceb.js";import"./number.ea2b3954.js";import"./VTextField.8e117680.js";import"./VCounter.602ed76e.js";import"./VDialog.74ee3f5c.js";import"./index.5b5bc93e.js";import"./VSlider.2e6fa364.js";import"./VSwitch.402df17f.js";import"./VSelectionControl.abf62252.js";import"./VTabs.68b46e09.js";import"./VTextarea.cb177d13.js";const y=h({name:"Passport",props:{authOptions:{type:Object},paymentOptions:{type:Object}},setup(n){const e=u(""),a=u(""),c=u(null),i=u([]),o=O(),p=D(),l=d(()=>Boolean(e.value&&a.value));async function v(){const s=await o.auth(n.authOptions);e.value=s.token,a.value=s.channel,localStorage.setItem("token",s.token),localStorage.setItem("channel",s.channel)}r(v,"handleConnect");async function m(){e.value="",a.value="",localStorage.setItem("token",""),localStorage.setItem("channel","")}r(m,"handleDisconnect");async function b(){const s=T.v4(),S={...n.paymentOptions,traceId:s,checker:async()=>(await(await fetch("https://api.mixin.one/transfers/trace/"+s,{method:"GET",headers:{Authorization:`Bearer ${e.value}`}})).json()).data?(p.success({message:"Payment checked"}),!0):!1};o.payment(S)}return r(b,"handlePayment"),I(()=>e.value,async()=>{c.value=await o.getProfile(),i.value=await o.getAssets()}),k(()=>{e.value=localStorage.getItem("token")||"",a.value=localStorage.getItem("channel")||"",o.sync({token:e.value,channel:a.value})}),()=>t("div",{class:"passport-overvie-container"},[t("div",{class:"passport-overview"},[l.value?t(M,{profile:c.value,assets:i.value,onDisconnect:()=>m(),onPayment:()=>b()},null):t(C,{onConnect:()=>v()},null)])])}}),C=h({name:"Disconnected2",emits:{connect:()=>!0},setup(n,{emit:e}){return()=>t("div",{class:"passport-account-disconnected"},[t(x,null,{default:()=>[f("$FIconWalletAFill")]}),t("div",{class:"disconnected--hint"},[f("Please connect your wallet first")]),t(A,{color:"primary",onClick:()=>e("connect")},{default:()=>[f("Connect Wallet")]})])}}),M=h({name:"Connected",props:{profile:Object,assets:Array},emits:{disconnect:()=>!0,payment:()=>!0},setup(n,{emit:e}){const a=d(()=>{var o;return(o=n.profile)==null?void 0:o.full_name}),c=d(()=>{var o;return(o=n.profile)==null?void 0:o.avatar_url}),i=d(()=>{var p,l;const o=(l=(p=n.assets)==null?void 0:p.reduce((v,m)=>v+m.balance*m.price_usd,0))!=null?l:0;return new Intl.NumberFormat("en",{currency:"USD",style:"currency"}).formatToParts(o)});return()=>t("div",{class:"passport-account-connected"},[t(w,{size:"48"},{default:()=>[t(V,{src:c.value},null)]}),t("div",{class:"user-name mt-2"},[t("span",null,[a.value])]),t(E,{theme:"dark",class:"account-balance my-9"},{default:()=>[t("div",{class:"account-label mb-4"},[f("Wallet Assets")]),t(F,{parts:i.value},null)]}),t(g,{height:"56",title:"Disconnect",prependIcon:"$FIconDisconnect",class:"text-error px-0",onClick:()=>e("disconnect")},null),t(g,{height:"56",title:"Payment",prependIcon:"$FIconBorrow",class:"px-0",onClick:()=>e("payment")},null)])}}),Kt={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
    hooks: {
      beforeSignMessage: () => ({ statement: "This is statement" }),
      afterSignMessage: (data) => {
        console.log(data);
        return "asdfasfdas";
      },
    },
  },
  paymentOptions: {
    assetId: "965e5c6e-434c-3fa9-b780-c50f43cd955c",
    amount: "1",
    recipient: "fbd26bc6-3d04-4964-a7fe-a540432b16e2",
    memo: "Test",
  },
};
`,locationsMap:{default:{startLoc:{col:26,line:9},endLoc:{col:2,line:19},startBody:{col:26,line:9},endBody:{col:2,line:19}}}}},title:"Plugin/Passport",component:y},R=r(n=>({components:{Passport:y},setup(){return{args:n}},template:`
    <Passport v-bind="args" />
  `}),"Template"),N=R.bind({});N.args={authOptions:{origin:"FoxONE UIKit",authMethods:["mixin","fennec","metamask"],clientId:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",scope:"PROFILE:READ ASSETS:READ SNAPSHOTS:READ",pkce:!0,hooks:{beforeSignMessage:()=>({statement:"This is statement"}),afterSignMessage:n=>(console.log(n),"asdfasfdas")}},paymentOptions:{assetId:"965e5c6e-434c-3fa9-b780-c50f43cd955c",amount:"1",recipient:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",memo:"Test"}};const Gt=["Default"];export{N as Default,Gt as __namedExportsOrder,Kt as default};
//# sourceMappingURL=passport.stories.ca0e3c28.js.map
