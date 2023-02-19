var P=Object.defineProperty;var r=(n,e)=>P(n,"name",{value:e,configurable:!0});import{A as h,r as u,b as d,d as I,o as k,a as t,e as f}from"./vue.esm-bundler.caa622c4.js";import{O,P as D,l as A,n as F,s as g}from"./FTextarea.6e6f4ec9.js";import{a as T}from"./base64.7073daa1.js";import{V as E}from"./VSheet.772f011e.js";import{V as x}from"./VIcon.f37f8177.js";import{V as w}from"./VAvatar.91a1aacd.js";import{V}from"./VImg.cbbbed87.js";import"./VSnackbar.47bba482.js";import"./variant.6a05f8d1.js";import"./useRender.15f4f58d.js";import"./helpers.83369341.js";import"./color.795eceb6.js";import"./location.375c93f3.js";import"./locale.312c25a1.js";import"./proxiedModel.073d34a6.js";import"./anchor.57ff9838.js";import"./position.6630ce12.js";import"./rounded.bd8ad820.js";import"./VOverlay.a16b5884.js";import"./dimensions.1a78e179.js";import"./easing.36b781ab.js";import"./transition.712d10eb.js";import"./router.f4dceb95.js";import"./display.ef8c62e1.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.18b197de.js";import"./VBtn.abf41941.js";import"./border.ae4ccc68.js";import"./density.c07a8c02.js";import"./elevation.3fce6244.js";import"./index.4e4a2aa3.js";import"./loader.535d849b.js";import"./VProgressCircular.9b7ebd22.js";import"./VAppBar.b57ea4d4.js";import"./index.07e0e4c3.js";import"./layout.d0c53e40.js";import"./VLazy.387ee881.js";import"./index.fc60a169.js";import"./VList.a6d8b9f9.js";import"./VListItem.a560c4b3.js";import"./createSimpleFunctional.2286a9cd.js";import"./VSpacer.20cf6c63.js";import"./VMessages.e864fdf2.js";import"./VForm.790bea20.js";import"./VInput.353ca9d2.js";import"./mixin.87a49014.js";import"./VBottomNavigation.9c059bee.js";import"./VTooltip.583dae81.js";import"./qrious.3bdcbbc9.js";import"./iframe.1d791503.js";import"./number.ea2b3954.js";import"./VTextField.dbd49551.js";import"./VCounter.4d5defc1.js";import"./VDialog.8fc91e8b.js";import"./index.d591be74.js";import"./VSlider.1aa7b2b7.js";import"./VSwitch.6ceb663f.js";import"./VSelectionControl.902a6c96.js";import"./VTabs.43fc2bf0.js";import"./VTextarea.93298019.js";const y=h({name:"Passport",props:{authOptions:{type:Object},paymentOptions:{type:Object}},setup(n){const e=u(""),a=u(""),c=u(null),i=u([]),o=O(),p=D(),l=d(()=>Boolean(e.value&&a.value));async function v(){const s=await o.auth(n.authOptions);e.value=s.token,a.value=s.channel,localStorage.setItem("token",s.token),localStorage.setItem("channel",s.channel)}r(v,"handleConnect");async function m(){e.value="",a.value="",localStorage.setItem("token",""),localStorage.setItem("channel","")}r(m,"handleDisconnect");async function b(){const s=T.v4(),S={...n.paymentOptions,traceId:s,checker:async()=>(await(await fetch("https://api.mixin.one/transfers/trace/"+s,{method:"GET",headers:{Authorization:`Bearer ${e.value}`}})).json()).data?(p.success({message:"Payment checked"}),!0):!1};o.payment(S)}return r(b,"handlePayment"),I(()=>e.value,async()=>{c.value=await o.getProfile(),i.value=await o.getAssets()}),k(()=>{e.value=localStorage.getItem("token")||"",a.value=localStorage.getItem("channel")||"",o.sync({token:e.value,channel:a.value})}),()=>t("div",{class:"passport-overvie-container"},[t("div",{class:"passport-overview"},[l.value?t(M,{profile:c.value,assets:i.value,onDisconnect:()=>m(),onPayment:()=>b()},null):t(C,{onConnect:()=>v()},null)])])}}),C=h({name:"Disconnected2",emits:{connect:()=>!0},setup(n,{emit:e}){return()=>t("div",{class:"passport-account-disconnected"},[t(x,null,{default:()=>[f("$FIconWalletAFill")]}),t("div",{class:"disconnected--hint"},[f("Please connect your wallet first")]),t(A,{color:"primary",onClick:()=>e("connect")},{default:()=>[f("Connect Wallet")]})])}}),M=h({name:"Connected",props:{profile:Object,assets:Array},emits:{disconnect:()=>!0,payment:()=>!0},setup(n,{emit:e}){const a=d(()=>{var o;return(o=n.profile)==null?void 0:o.full_name}),c=d(()=>{var o;return(o=n.profile)==null?void 0:o.avatar_url}),i=d(()=>{var p,l;const o=(l=(p=n.assets)==null?void 0:p.reduce((v,m)=>v+m.balance*m.price_usd,0))!=null?l:0;return new Intl.NumberFormat("en",{currency:"USD",style:"currency"}).formatToParts(o)});return()=>t("div",{class:"passport-account-connected"},[t(w,{size:"48"},{default:()=>[t(V,{src:c.value},null)]}),t("div",{class:"user-name mt-2"},[t("span",null,[a.value])]),t(E,{theme:"dark",class:"account-balance my-9"},{default:()=>[t("div",{class:"account-label mb-4"},[f("Wallet Assets")]),t(F,{parts:i.value},null)]}),t(g,{height:"56",title:"Disconnect",prependIcon:"$FIconDisconnect",class:"text-error px-0",onClick:()=>e("disconnect")},null),t(g,{height:"56",title:"Payment",prependIcon:"$FIconBorrow",class:"px-0",onClick:()=>e("payment")},null)])}}),Kt={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=passport.stories.c9f0d1c4.js.map
