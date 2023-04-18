var I=Object.defineProperty;var c=(e,n)=>I(e,"name",{value:n,configurable:!0});import{A as y,r as i,b as d,d as T,o as A,a as t,e as f}from"./vue.esm-bundler.9500adb2.js";import{P as O,Q as D,l as x,n as F,t as b}from"./FTextarea.69a68efd.js";import{a as E}from"./base64.7ab69042.js";import{V as w}from"./VSheet.42da64d7.js";import{V as C}from"./VIcon.b10ecbaa.js";import{V as M}from"./VAvatar.9487a2f3.js";import{V}from"./VImg.6757be35.js";import"./VSnackbar.b37ed6f7.js";import"./variant.95637a5a.js";import"./useRender.44945942.js";import"./helpers.681e1792.js";import"./color.45246ddd.js";import"./location.c535e823.js";import"./locale.7efc9def.js";import"./proxiedModel.881d858e.js";import"./anchor.1afb8064.js";import"./position.427d9f74.js";import"./rounded.d16b72e9.js";import"./VOverlay.96b5c4e3.js";import"./dimensions.5f5b1dd8.js";import"./easing.36b781ab.js";import"./transition.10caf698.js";import"./router.6e1740fe.js";import"./display.9827c8ac.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.4dfba538.js";import"./VBtn.b26bd4ae.js";import"./border.eebb6db1.js";import"./density.0c8fab1e.js";import"./elevation.d906eb56.js";import"./index.1967ded9.js";import"./loader.4d40f77d.js";import"./intersectionObserver.10253e57.js";import"./VProgressCircular.8b82923d.js";import"./VAppBar.876e0a94.js";import"./index.c2993bc7.js";import"./ssrBoot.cad34dc3.js";import"./VLazy.d4a61acd.js";import"./index.91748bc9.js";import"./VList.408dac73.js";import"./VListItem.492edb65.js";import"./createSimpleFunctional.0b08b174.js";import"./VSpacer.0edf83e3.js";import"./VMessages.a0bdae17.js";import"./VForm.34f916b2.js";import"./VInput.33e34f4e.js";import"./mixin.87a49014.js";import"./VBottomNavigation.f76a89f4.js";import"./v3-infinite-loading.5611ca76.js";import"./VTooltip.3ad21be9.js";import"./qrious.a3727dde.js";import"./iframe.a0f2adfa.js";import"./number.d5e09512.js";import"./VTextField.73cde862.js";import"./VCounter.a1a93cec.js";import"./VDialog.38dab5f5.js";import"./index.04a8352d.js";import"./VSlider.dde1f04d.js";import"./VSwitch.fa31c210.js";import"./VSelectionControl.41e38ffa.js";import"./VTabs.71560ffc.js";import"./VTextarea.8588669b.js";const S=y({name:"Passport",props:{authOptions:{type:Object},paymentOptions:{type:Object}},setup(e){const n=i(""),s=i(""),l=i(null),p=i([]),o=O(),m=D(),r=i(!1),h=d(()=>Boolean(n.value&&s.value));async function u(){try{const a=await o.auth(e.authOptions);n.value=a.token,s.value=a.channel,localStorage.setItem("token",a.token),localStorage.setItem("channel",a.channel)}catch(a){console.log(a)}}c(u,"handleConnect");async function P(){n.value="",s.value="",localStorage.setItem("token",""),localStorage.setItem("channel","")}c(P,"handleDisconnect");async function k(){const a=E.v4(),v={...e.paymentOptions,traceId:a,checker:async()=>(await(await fetch("https://api.mixin.one/transfers/trace/"+a,{method:"GET",headers:{Authorization:`Bearer ${n.value}`}})).json()).data?(m.success({message:"Payment checked"}),!0):!1};o.payment(v)}return c(k,"handlePayment"),T(()=>n.value,async()=>{l.value=await o.getProfile(),p.value=await o.getAssets()}),A(async()=>{try{r.value=!0;const a=localStorage.getItem("token")||"",v=localStorage.getItem("channel")||"",g=await o.sync({origin:"FoxONE UIKit",token:a,channel:v,refreshToken:!0});console.log("after sync"),n.value=g.token,s.value=g.channel,r.value=!1}catch(a){console.log(a)}}),()=>t("div",{class:"passport-overvie-container"},[r.value||t("div",{class:"passport-overview"},[h.value?t(R,{profile:l.value,assets:p.value,onDisconnect:()=>P(),onPayment:()=>k()},null):t(N,{onConnect:()=>u()},null)])])}}),N=y({name:"Disconnected2",emits:{connect:()=>!0},setup(e,{emit:n}){return()=>t("div",{class:"passport-account-disconnected"},[t(C,null,{default:()=>[f("$FIconWalletAFill")]}),t("div",{class:"disconnected--hint"},[f("Please connect your wallet first")]),t(x,{color:"primary",onClick:()=>n("connect")},{default:()=>[f("Connect Wallet")]})])}}),R=y({name:"Connected",props:{profile:Object,assets:Array},emits:{disconnect:()=>!0,payment:()=>!0},setup(e,{emit:n}){const s=d(()=>{var o;return(o=e.profile)==null?void 0:o.full_name}),l=d(()=>{var o;return(o=e.profile)==null?void 0:o.avatar_url}),p=d(()=>{var m,r;const o=(r=(m=e.assets)==null?void 0:m.reduce((h,u)=>h+u.balance*u.price_usd,0))!=null?r:0;return new Intl.NumberFormat("en",{currency:"USD",style:"currency"}).formatToParts(o)});return()=>t("div",{class:"passport-account-connected"},[t(M,{size:"48"},{default:()=>[t(V,{src:l.value},null)]}),t("div",{class:"user-name mt-2"},[t("span",null,[s.value])]),t(w,{theme:"dark",class:"account-balance my-9"},{default:()=>[t("div",{class:"account-label mb-4"},[f("Wallet Assets")]),t(F,{parts:p.value},null)]}),t(b,{height:"56",title:"Disconnect",prependIcon:"$FIconDisconnect",class:"text-error px-0",onClick:()=>n("disconnect")},null),t(b,{height:"56",title:"Payment",prependIcon:"$FIconBorrow",class:"px-0",onClick:()=>n("payment")},null)])}}),qt={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
    mvmAuthType: "MixinToken",
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
`,locationsMap:{default:{startLoc:{col:26,line:9},endLoc:{col:2,line:19},startBody:{col:26,line:9},endBody:{col:2,line:19}}}}},title:"Plugin/Passport",component:S},_=c(e=>({components:{Passport:S},setup(){return{args:e}},template:`
    <Passport v-bind="args" />
  `}),"Template"),j=_.bind({});j.args={authOptions:{origin:"FoxONE UIKit",authMethods:["mixin","fennec","metamask"],clientId:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",scope:"PROFILE:READ ASSETS:READ SNAPSHOTS:READ",pkce:!0,mvmAuthType:"MixinToken",hooks:{beforeSignMessage:()=>({statement:"This is statement"}),afterSignMessage:e=>(console.log(e),"asdfasfdas")}},paymentOptions:{assetId:"965e5c6e-434c-3fa9-b780-c50f43cd955c",amount:"1",recipient:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",memo:"Test"}};const Jt=["Default"];export{j as Default,Jt as __namedExportsOrder,qt as default};
//# sourceMappingURL=passport.stories.9945cc46.js.map
