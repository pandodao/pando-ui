var P=Object.defineProperty;var r=(n,e)=>P(n,"name",{value:e,configurable:!0});import{z as h,r as u,b as d,d as I,o as k,a as t,e as f}from"./vue.esm-bundler.57aa1454.js";import{O,P as D,l as A,n as F,s as g}from"./FTextarea.db61ceba.js";import{a as T}from"./base64.71553064.js";import{V as E}from"./VSheet.769ee728.js";import{V as x}from"./VIcon.b7876f5b.js";import{V as w}from"./VAvatar.01c8c686.js";import{V}from"./VImg.040b2a14.js";import"./VSnackbar.3bed6e44.js";import"./variant.58edd759.js";import"./useRender.0f3b6188.js";import"./helpers.ff98b59e.js";import"./color.5e70182f.js";import"./location.7ef01c4f.js";import"./locale.ce33eacd.js";import"./proxiedModel.aff93369.js";import"./anchor.8b678110.js";import"./position.6bb498a5.js";import"./rounded.638bf334.js";import"./VOverlay.2998aec7.js";import"./dimensions.2a6ee421.js";import"./easing.36b781ab.js";import"./transition.7787ec60.js";import"./router.359f3c68.js";import"./display.8ac49ecd.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.186db6a0.js";import"./VBtn.ab71924f.js";import"./border.72c41e60.js";import"./density.5fc65f23.js";import"./elevation.08bb2882.js";import"./index.17c04f25.js";import"./loader.538ed1c8.js";import"./VProgressCircular.ce5720de.js";import"./VAppBar.3926d01d.js";import"./index.5cb25ca4.js";import"./ssrBoot.38082b65.js";import"./VLazy.e8b6f832.js";import"./index.168f645e.js";import"./VList.8d2887de.js";import"./VListItem.f12d2f11.js";import"./createSimpleFunctional.3ee3a08b.js";import"./VSpacer.da6438ea.js";import"./VMessages.7f48a74b.js";import"./VForm.de873814.js";import"./VInput.a59f36d0.js";import"./mixin.87a49014.js";import"./VBottomNavigation.211552fb.js";import"./VTooltip.78003fdc.js";import"./qrious.c2064fb9.js";import"./iframe.e800e092.js";import"./number.ea2b3954.js";import"./VTextField.5738fd9a.js";import"./VCounter.03254f21.js";import"./VDialog.789dc96e.js";import"./index.e8f0fe08.js";import"./VSlider.eb1a9a5a.js";import"./VSwitch.4b0e23e6.js";import"./VSelectionControl.d88669b3.js";import"./VTabs.1a404a6a.js";import"./VTextarea.a70e48eb.js";const y=h({name:"Passport",props:{authOptions:{type:Object},paymentOptions:{type:Object}},setup(n){const e=u(""),a=u(""),c=u(null),i=u([]),o=O(),p=D(),l=d(()=>Boolean(e.value&&a.value));async function v(){const s=await o.auth(n.authOptions);e.value=s.token,a.value=s.channel,localStorage.setItem("token",s.token),localStorage.setItem("channel",s.channel)}r(v,"handleConnect");async function m(){e.value="",a.value="",localStorage.setItem("token",""),localStorage.setItem("channel","")}r(m,"handleDisconnect");async function b(){const s=T.v4(),S={...n.paymentOptions,traceId:s,checker:async()=>(await(await fetch("https://api.mixin.one/transfers/trace/"+s,{method:"GET",headers:{Authorization:`Bearer ${e.value}`}})).json()).data?(p.success({message:"Payment checked"}),!0):!1};o.payment(S)}return r(b,"handlePayment"),I(()=>e.value,async()=>{c.value=await o.getProfile(),i.value=await o.getAssets()}),k(()=>{e.value=localStorage.getItem("token")||"",a.value=localStorage.getItem("channel")||"",o.sync({token:e.value,channel:a.value})}),()=>t("div",{class:"passport-overvie-container"},[t("div",{class:"passport-overview"},[l.value?t(M,{profile:c.value,assets:i.value,onDisconnect:()=>m(),onPayment:()=>b()},null):t(C,{onConnect:()=>v()},null)])])}}),C=h({name:"Disconnected2",emits:{connect:()=>!0},setup(n,{emit:e}){return()=>t("div",{class:"passport-account-disconnected"},[t(x,null,{default:()=>[f("$FIconWalletAFill")]}),t("div",{class:"disconnected--hint"},[f("Please connect your wallet first")]),t(A,{color:"primary",onClick:()=>e("connect")},{default:()=>[f("Connect Wallet")]})])}}),M=h({name:"Connected",props:{profile:Object,assets:Array},emits:{disconnect:()=>!0,payment:()=>!0},setup(n,{emit:e}){const a=d(()=>{var o;return(o=n.profile)==null?void 0:o.full_name}),c=d(()=>{var o;return(o=n.profile)==null?void 0:o.avatar_url}),i=d(()=>{var p,l;const o=(l=(p=n.assets)==null?void 0:p.reduce((v,m)=>v+m.balance*m.price_usd,0))!=null?l:0;return new Intl.NumberFormat("en",{currency:"USD",style:"currency"}).formatToParts(o)});return()=>t("div",{class:"passport-account-connected"},[t(w,{size:"48"},{default:()=>[t(V,{src:c.value},null)]}),t("div",{class:"user-name mt-2"},[t("span",null,[a.value])]),t(E,{theme:"dark",class:"account-balance my-9"},{default:()=>[t("div",{class:"account-label mb-4"},[f("Wallet Assets")]),t(F,{parts:i.value},null)]}),t(g,{height:"56",title:"Disconnect",prependIcon:"$FIconDisconnect",class:"text-error px-0",onClick:()=>e("disconnect")},null),t(g,{height:"56",title:"Payment",prependIcon:"$FIconBorrow",class:"px-0",onClick:()=>e("payment")},null)])}}),Kt={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=passport.stories.239b0a7f.js.map
