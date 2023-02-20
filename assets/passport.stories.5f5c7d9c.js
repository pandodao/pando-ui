var P=Object.defineProperty;var r=(n,e)=>P(n,"name",{value:e,configurable:!0});import{A as h,r as u,b as d,d as I,o as k,a as t,e as f}from"./vue.esm-bundler.06cbf4f3.js";import{O,P as D,l as A,n as F,s as g}from"./FTextarea.ea93ff0e.js";import{a as T}from"./base64.a2866935.js";import{V as E}from"./VSheet.f5d47f51.js";import{V as x}from"./VIcon.4e22765d.js";import{V as w}from"./VAvatar.d0341de2.js";import{V}from"./VImg.601fba1e.js";import"./VSnackbar.24cfd012.js";import"./variant.e4970577.js";import"./useRender.61aaf11b.js";import"./helpers.0ba19e05.js";import"./color.9c80aa54.js";import"./location.efb67ad2.js";import"./locale.7c7f5def.js";import"./proxiedModel.ffcb1955.js";import"./anchor.4d34e672.js";import"./position.f250096a.js";import"./rounded.ae3fe3ca.js";import"./VOverlay.99ed030c.js";import"./dimensions.f30e25d4.js";import"./easing.36b781ab.js";import"./transition.60048a78.js";import"./router.26e45b89.js";import"./display.f0408c25.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.9ab6906e.js";import"./VBtn.a6fb96e2.js";import"./border.386c98bf.js";import"./density.4e133a57.js";import"./elevation.906ca0d0.js";import"./index.0e1c0398.js";import"./loader.ff14b575.js";import"./VProgressCircular.32071c16.js";import"./VAppBar.2d2bab6d.js";import"./index.b7dbf2f4.js";import"./layout.81015a34.js";import"./VLazy.617c76cf.js";import"./index.667911d0.js";import"./VList.ed5b86d0.js";import"./VListItem.52553c7c.js";import"./createSimpleFunctional.917a427b.js";import"./VSpacer.680927fa.js";import"./VMessages.4767cc10.js";import"./VForm.8d553834.js";import"./VInput.747c82dc.js";import"./mixin.87a49014.js";import"./VBottomNavigation.0ef11847.js";import"./VTooltip.354f2661.js";import"./qrious.11100b76.js";import"./iframe.58795953.js";import"./number.ea2b3954.js";import"./VTextField.d88de585.js";import"./VCounter.19239368.js";import"./VDialog.89f04ef5.js";import"./index.54b0f902.js";import"./VSlider.b8854940.js";import"./VSwitch.423773c0.js";import"./VSelectionControl.ee3c2fe2.js";import"./VTabs.293a7e10.js";import"./VTextarea.99b3f5e7.js";const y=h({name:"Passport",props:{authOptions:{type:Object},paymentOptions:{type:Object}},setup(n){const e=u(""),a=u(""),c=u(null),i=u([]),o=O(),p=D(),l=d(()=>Boolean(e.value&&a.value));async function v(){const s=await o.auth(n.authOptions);e.value=s.token,a.value=s.channel,localStorage.setItem("token",s.token),localStorage.setItem("channel",s.channel)}r(v,"handleConnect");async function m(){e.value="",a.value="",localStorage.setItem("token",""),localStorage.setItem("channel","")}r(m,"handleDisconnect");async function b(){const s=T.v4(),S={...n.paymentOptions,traceId:s,checker:async()=>(await(await fetch("https://api.mixin.one/transfers/trace/"+s,{method:"GET",headers:{Authorization:`Bearer ${e.value}`}})).json()).data?(p.success({message:"Payment checked"}),!0):!1};o.payment(S)}return r(b,"handlePayment"),I(()=>e.value,async()=>{c.value=await o.getProfile(),i.value=await o.getAssets()}),k(()=>{e.value=localStorage.getItem("token")||"",a.value=localStorage.getItem("channel")||"",o.sync({token:e.value,channel:a.value})}),()=>t("div",{class:"passport-overvie-container"},[t("div",{class:"passport-overview"},[l.value?t(M,{profile:c.value,assets:i.value,onDisconnect:()=>m(),onPayment:()=>b()},null):t(C,{onConnect:()=>v()},null)])])}}),C=h({name:"Disconnected2",emits:{connect:()=>!0},setup(n,{emit:e}){return()=>t("div",{class:"passport-account-disconnected"},[t(x,null,{default:()=>[f("$FIconWalletAFill")]}),t("div",{class:"disconnected--hint"},[f("Please connect your wallet first")]),t(A,{color:"primary",onClick:()=>e("connect")},{default:()=>[f("Connect Wallet")]})])}}),M=h({name:"Connected",props:{profile:Object,assets:Array},emits:{disconnect:()=>!0,payment:()=>!0},setup(n,{emit:e}){const a=d(()=>{var o;return(o=n.profile)==null?void 0:o.full_name}),c=d(()=>{var o;return(o=n.profile)==null?void 0:o.avatar_url}),i=d(()=>{var p,l;const o=(l=(p=n.assets)==null?void 0:p.reduce((v,m)=>v+m.balance*m.price_usd,0))!=null?l:0;return new Intl.NumberFormat("en",{currency:"USD",style:"currency"}).formatToParts(o)});return()=>t("div",{class:"passport-account-connected"},[t(w,{size:"48"},{default:()=>[t(V,{src:c.value},null)]}),t("div",{class:"user-name mt-2"},[t("span",null,[a.value])]),t(E,{theme:"dark",class:"account-balance my-9"},{default:()=>[t("div",{class:"account-label mb-4"},[f("Wallet Assets")]),t(F,{parts:i.value},null)]}),t(g,{height:"56",title:"Disconnect",prependIcon:"$FIconDisconnect",class:"text-error px-0",onClick:()=>e("disconnect")},null),t(g,{height:"56",title:"Payment",prependIcon:"$FIconBorrow",class:"px-0",onClick:()=>e("payment")},null)])}}),Kt={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=passport.stories.5f5c7d9c.js.map
