var I=Object.defineProperty;var r=(o,e)=>I(o,"name",{value:e,configurable:!0});import{A as h,r as u,b as d,d as S,o as O,a as t,e as f}from"./vue.esm-bundler.1ba604f9.js";import{O as k,P as D,l as A,n as F,s as y}from"./helper.ed2a7fa9.js";import{a as E}from"./base64.cc90f32e.js";import{V as x}from"./VSheet.9b6d37fc.js";import{V as T}from"./VIcon.518cdeb6.js";import{V as w}from"./VAvatar.d7e1c088.js";import{V}from"./VImg.2750fab4.js";import"./position.747eb4b6.js";import"./useRender.965bd6aa.js";import"./helpers.bd7a8d83.js";import"./color.b891a321.js";import"./VBtn.156ed533.js";import"./proxiedModel.23143766.js";import"./border.c2063388.js";import"./density.8ac56fa2.js";import"./elevation.7428fb70.js";import"./rounded.cb32523b.js";import"./variant.22bbbe86.js";import"./index.27517d48.js";import"./dimensions.721a2e0b.js";import"./loader.c9437e89.js";import"./location.f6b6fb7b.js";import"./locale.fb27b96c.js";import"./anchor.1637b665.js";import"./router.ba883828.js";import"./VProgressCircular.6a9473f8.js";import"./display.de7ed398.js";import"./VAppBar.eedffce1.js";import"./index.a7472254.js";import"./layout.e043ac0b.js";import"./VLazy.87923590.js";import"./transition.ef0cc300.js";import"./index.c125b6ad.js";import"./VList.7218b974.js";import"./VListItem.d10786fb.js";import"./createSimpleFunctional.b271bf7a.js";import"./VDivider.7223c023.js";import"./VSpacer.41a02cf9.js";import"./VMessages.11ef5b61.js";import"./VForm.70dc7f85.js";import"./VInput.857b8225.js";import"./forwardRefs.c003b6b8.js";import"./mixin.87a49014.js";import"./VBottomNavigation.951ff2f8.js";import"./VTooltip.9e0bd7e0.js";import"./VOverlay.16609424.js";import"./easing.36b781ab.js";import"./qrious.07917c37.js";import"./iframe.b82cb2ff.js";import"./number.ea2b3954.js";import"./VTextField.44316fe6.js";import"./VCounter.5f12ac31.js";import"./VDialog.0f487f73.js";import"./index.3387c84c.js";import"./VSlider.b140bb08.js";import"./VSwitch.8821cd9f.js";import"./VSelectionControl.32a0df89.js";import"./VTabs.631acfea.js";import"./VTextarea.a6ad8762.js";import"./VSnackbar.f31880f4.js";const b=h({name:"Passport",props:{authOptions:{type:Object},paymentOptions:{type:Object}},setup(o){const e=u(""),a=u(""),c=u(null),i=u([]),n=k(),p=D(),l=d(()=>Boolean(e.value&&a.value));async function v(){const s=await n.auth(o.authOptions);e.value=s.token,a.value=s.channel,localStorage.setItem("token",s.token),localStorage.setItem("channel",s.channel)}r(v,"handleConnect");async function m(){e.value="",a.value="",localStorage.setItem("token",""),localStorage.setItem("channel","")}r(m,"handleDisconnect");async function P(){const s=E.v4(),g={...o.paymentOptions,traceId:s,checker:async()=>(await(await fetch("https://api.mixin.one/transfers/trace/"+s,{method:"GET",headers:{Authorization:`Bearer ${e.value}`}})).json()).data?(p.success({message:"Payment checked"}),!0):!1};n.payment(g)}return r(P,"handlePayment"),S(()=>e.value,async()=>{c.value=await n.getProfile(),i.value=await n.getAssets()}),O(()=>{e.value=localStorage.getItem("token")||"",a.value=localStorage.getItem("channel")||"",n.sync({token:e.value,channel:a.value})}),()=>t("div",{class:"passport-overvie-container"},[t("div",{class:"passport-overview"},[l.value?t(R,{profile:c.value,assets:i.value,onDisconnect:()=>m(),onPayment:()=>P()},null):t(C,{onConnect:()=>v()},null)])])}}),C=h({name:"Disconnected2",emits:{connect:()=>!0},setup(o,{emit:e}){return()=>t("div",{class:"passport-account-disconnected"},[t(T,null,{default:()=>[f("$FIconWalletAFill")]}),t("div",{class:"disconnected--hint"},[f("Please connect your wallet first")]),t(A,{color:"primary",onClick:()=>e("connect")},{default:()=>[f("Connect Wallet")]})])}}),R=h({name:"Connected",props:{profile:Object,assets:Array},emits:{disconnect:()=>!0,payment:()=>!0},setup(o,{emit:e}){const a=d(()=>{var n;return(n=o.profile)==null?void 0:n.full_name}),c=d(()=>{var n;return(n=o.profile)==null?void 0:n.avatar_url}),i=d(()=>{var p,l;const n=(l=(p=o.assets)==null?void 0:p.reduce((v,m)=>v+m.balance*m.price_usd,0))!=null?l:0;return new Intl.NumberFormat("en",{currency:"USD",style:"currency"}).formatToParts(n)});return()=>t("div",{class:"passport-account-connected"},[t(w,{size:"48"},{default:()=>[t(V,{src:c.value},null)]}),t("div",{class:"user-name mt-2"},[t("span",null,[a.value])]),t(x,{theme:"dark",class:"account-balance my-9"},{default:()=>[t("div",{class:"account-label mb-4"},[f("Wallet Assets")]),t(F,{parts:i.value},null)]}),t(y,{height:"56",title:"Disconnect",prependIcon:"$FIconDisconnect",class:"text-error px-0",onClick:()=>e("disconnect")},null),t(y,{height:"56",title:"Payment",prependIcon:"$FIconBorrow",class:"px-0",onClick:()=>e("payment")},null)])}}),Kt={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=passport.stories.41b4ea74.js.map
