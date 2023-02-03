var I=Object.defineProperty;var r=(o,e)=>I(o,"name",{value:e,configurable:!0});import{A as h,r as u,b as d,d as S,o as O,a as t,e as f}from"./vue.esm-bundler.330b8bcd.js";import{O as k,P as D,l as A,n as F,s as y}from"./FTextarea.e250dee5.js";import{a as E}from"./base64.b4cf6823.js";import{V as x}from"./VSheet.ef584a68.js";import{V as T}from"./VIcon.c758310f.js";import{V as w}from"./VAvatar.f79052e0.js";import{V}from"./VImg.9ee07324.js";import"./VSnackbar.1d57f851.js";import"./variant.b259332f.js";import"./useRender.b59b3e39.js";import"./helpers.6dbb45ef.js";import"./color.66c7a00f.js";import"./location.2cb2469d.js";import"./locale.0eda84ca.js";import"./proxiedModel.815b9064.js";import"./anchor.7cdf4a4d.js";import"./position.03fcbfb6.js";import"./rounded.257cff90.js";import"./VOverlay.d681ab18.js";import"./dimensions.6590eaa4.js";import"./easing.36b781ab.js";import"./transition.d91c432b.js";import"./router.a6c113d7.js";import"./display.b3319b10.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.a69cf6f1.js";import"./VBtn.e55e9e37.js";import"./border.8a30a617.js";import"./density.38f0f124.js";import"./elevation.b2f27a68.js";import"./index.b967f916.js";import"./loader.c202c022.js";import"./VProgressCircular.27e195cb.js";import"./VAppBar.93174cfe.js";import"./index.a5e0d629.js";import"./layout.9962ba12.js";import"./VLazy.fba54de2.js";import"./index.0fdd422f.js";import"./VList.318061a0.js";import"./VListItem.4533e071.js";import"./createSimpleFunctional.05bfccd4.js";import"./VSpacer.1ee3d07f.js";import"./VMessages.206e4d2e.js";import"./VForm.fb77d1c1.js";import"./VInput.3a20875e.js";import"./mixin.87a49014.js";import"./VBottomNavigation.92569875.js";import"./VTooltip.069fa7d0.js";import"./qrious.d817d78b.js";import"./iframe.13d762c3.js";import"./number.ea2b3954.js";import"./VTextField.d9025984.js";import"./VCounter.a5b91a3f.js";import"./VDialog.a4bfe643.js";import"./index.3c90877f.js";import"./VSlider.31ee0424.js";import"./VSwitch.a2da49a7.js";import"./VSelectionControl.d22e73c0.js";import"./VTabs.edd57fec.js";import"./VTextarea.9cbdaf41.js";const b=h({name:"Passport",props:{authOptions:{type:Object},paymentOptions:{type:Object}},setup(o){const e=u(""),a=u(""),c=u(null),i=u([]),n=k(),p=D(),l=d(()=>Boolean(e.value&&a.value));async function v(){const s=await n.auth(o.authOptions);e.value=s.token,a.value=s.channel,localStorage.setItem("token",s.token),localStorage.setItem("channel",s.channel)}r(v,"handleConnect");async function m(){e.value="",a.value="",localStorage.setItem("token",""),localStorage.setItem("channel","")}r(m,"handleDisconnect");async function P(){const s=E.v4(),g={...o.paymentOptions,traceId:s,checker:async()=>(await(await fetch("https://api.mixin.one/transfers/trace/"+s,{method:"GET",headers:{Authorization:`Bearer ${e.value}`}})).json()).data?(p.success({message:"Payment checked"}),!0):!1};n.payment(g)}return r(P,"handlePayment"),S(()=>e.value,async()=>{c.value=await n.getProfile(),i.value=await n.getAssets()}),O(()=>{e.value=localStorage.getItem("token")||"",a.value=localStorage.getItem("channel")||"",n.sync({token:e.value,channel:a.value})}),()=>t("div",{class:"passport-overvie-container"},[t("div",{class:"passport-overview"},[l.value?t(R,{profile:c.value,assets:i.value,onDisconnect:()=>m(),onPayment:()=>P()},null):t(C,{onConnect:()=>v()},null)])])}}),C=h({name:"Disconnected2",emits:{connect:()=>!0},setup(o,{emit:e}){return()=>t("div",{class:"passport-account-disconnected"},[t(T,null,{default:()=>[f("$FIconWalletAFill")]}),t("div",{class:"disconnected--hint"},[f("Please connect your wallet first")]),t(A,{color:"primary",onClick:()=>e("connect")},{default:()=>[f("Connect Wallet")]})])}}),R=h({name:"Connected",props:{profile:Object,assets:Array},emits:{disconnect:()=>!0,payment:()=>!0},setup(o,{emit:e}){const a=d(()=>{var n;return(n=o.profile)==null?void 0:n.full_name}),c=d(()=>{var n;return(n=o.profile)==null?void 0:n.avatar_url}),i=d(()=>{var p,l;const n=(l=(p=o.assets)==null?void 0:p.reduce((v,m)=>v+m.balance*m.price_usd,0))!=null?l:0;return new Intl.NumberFormat("en",{currency:"USD",style:"currency"}).formatToParts(n)});return()=>t("div",{class:"passport-account-connected"},[t(w,{size:"48"},{default:()=>[t(V,{src:c.value},null)]}),t("div",{class:"user-name mt-2"},[t("span",null,[a.value])]),t(x,{theme:"dark",class:"account-balance my-9"},{default:()=>[t("div",{class:"account-label mb-4"},[f("Wallet Assets")]),t(F,{parts:i.value},null)]}),t(y,{height:"56",title:"Disconnect",prependIcon:"$FIconDisconnect",class:"text-error px-0",onClick:()=>e("disconnect")},null),t(y,{height:"56",title:"Payment",prependIcon:"$FIconBorrow",class:"px-0",onClick:()=>e("payment")},null)])}}),Kt={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
  `}),"Template"),_=N.bind({});_.args={authOptions:{origin:"FoxONE UIKit",authMethods:["mixin","fennec","metamask"],clientId:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",scope:"PROFILE:READ ASSETS:READ SNAPSHOTS:READ",pkce:!0},paymentOptions:{assetId:"965e5c6e-434c-3fa9-b780-c50f43cd955c",amount:"1",recipient:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",memo:"Test"}};const Gt=["Default"];export{_ as Default,Gt as __namedExportsOrder,Kt as default};
//# sourceMappingURL=passport.stories.c14738ce.js.map
