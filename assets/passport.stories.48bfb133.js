var I=Object.defineProperty;var c=(e,n)=>I(e,"name",{value:n,configurable:!0});import{z as y,r as i,b as d,d as T,o as O,a as t,e as f}from"./vue.esm-bundler.57aa1454.js";import{O as A,P as D,l as x,n as F,s as b}from"./FTextarea.8e6cc3e1.js";import{a as E}from"./base64.655b2a46.js";import{V as w}from"./VSheet.769ee728.js";import{V as C}from"./VIcon.b7876f5b.js";import{V as M}from"./VAvatar.01c8c686.js";import{V}from"./VImg.040b2a14.js";import"./VSnackbar.3bed6e44.js";import"./variant.58edd759.js";import"./useRender.0f3b6188.js";import"./helpers.ff98b59e.js";import"./color.5e70182f.js";import"./location.7ef01c4f.js";import"./locale.ce33eacd.js";import"./proxiedModel.aff93369.js";import"./anchor.8b678110.js";import"./position.6bb498a5.js";import"./rounded.638bf334.js";import"./VOverlay.2998aec7.js";import"./dimensions.2a6ee421.js";import"./easing.36b781ab.js";import"./transition.7787ec60.js";import"./router.359f3c68.js";import"./display.8ac49ecd.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.186db6a0.js";import"./VBtn.ab71924f.js";import"./border.72c41e60.js";import"./density.5fc65f23.js";import"./elevation.08bb2882.js";import"./index.17c04f25.js";import"./loader.538ed1c8.js";import"./VProgressCircular.ce5720de.js";import"./VAppBar.3926d01d.js";import"./index.5cb25ca4.js";import"./ssrBoot.38082b65.js";import"./VLazy.e8b6f832.js";import"./index.168f645e.js";import"./VList.8d2887de.js";import"./VListItem.f12d2f11.js";import"./createSimpleFunctional.3ee3a08b.js";import"./VSpacer.da6438ea.js";import"./VMessages.7f48a74b.js";import"./VForm.de873814.js";import"./VInput.a59f36d0.js";import"./mixin.87a49014.js";import"./VBottomNavigation.211552fb.js";import"./VTooltip.78003fdc.js";import"./qrious.3554cffb.js";import"./iframe.88348554.js";import"./number.ea2b3954.js";import"./VTextField.5738fd9a.js";import"./VCounter.03254f21.js";import"./VDialog.789dc96e.js";import"./index.1dd37f12.js";import"./VSlider.eb1a9a5a.js";import"./VSwitch.4b0e23e6.js";import"./VSelectionControl.d88669b3.js";import"./VTabs.1a404a6a.js";import"./VTextarea.a70e48eb.js";const S=y({name:"Passport",props:{authOptions:{type:Object},paymentOptions:{type:Object}},setup(e){const n=i(""),s=i(""),l=i(null),p=i([]),o=A(),m=D(),r=i(!1),h=d(()=>Boolean(n.value&&s.value));async function u(){try{const a=await o.auth(e.authOptions);n.value=a.token,s.value=a.channel,localStorage.setItem("token",a.token),localStorage.setItem("channel",a.channel)}catch(a){console.log(a)}}c(u,"handleConnect");async function P(){n.value="",s.value="",localStorage.setItem("token",""),localStorage.setItem("channel","")}c(P,"handleDisconnect");async function k(){const a=E.v4(),v={...e.paymentOptions,traceId:a,checker:async()=>(await(await fetch("https://api.mixin.one/transfers/trace/"+a,{method:"GET",headers:{Authorization:`Bearer ${n.value}`}})).json()).data?(m.success({message:"Payment checked"}),!0):!1};o.payment(v)}return c(k,"handlePayment"),T(()=>n.value,async()=>{l.value=await o.getProfile(),p.value=await o.getAssets()}),O(async()=>{try{r.value=!0;const a=localStorage.getItem("token")||"",v=localStorage.getItem("channel")||"",g=await o.sync({token:a,channel:v,refreshToken:!0});console.log("after sync"),n.value=g.token,s.value=g.channel,r.value=!1}catch(a){console.log(a)}}),()=>t("div",{class:"passport-overvie-container"},[r.value||t("div",{class:"passport-overview"},[h.value?t(N,{profile:l.value,assets:p.value,onDisconnect:()=>P(),onPayment:()=>k()},null):t(R,{onConnect:()=>u()},null)])])}}),R=y({name:"Disconnected2",emits:{connect:()=>!0},setup(e,{emit:n}){return()=>t("div",{class:"passport-account-disconnected"},[t(C,null,{default:()=>[f("$FIconWalletAFill")]}),t("div",{class:"disconnected--hint"},[f("Please connect your wallet first")]),t(x,{color:"primary",onClick:()=>n("connect")},{default:()=>[f("Connect Wallet")]})])}}),N=y({name:"Connected",props:{profile:Object,assets:Array},emits:{disconnect:()=>!0,payment:()=>!0},setup(e,{emit:n}){const s=d(()=>{var o;return(o=e.profile)==null?void 0:o.full_name}),l=d(()=>{var o;return(o=e.profile)==null?void 0:o.avatar_url}),p=d(()=>{var m,r;const o=(r=(m=e.assets)==null?void 0:m.reduce((h,u)=>h+u.balance*u.price_usd,0))!=null?r:0;return new Intl.NumberFormat("en",{currency:"USD",style:"currency"}).formatToParts(o)});return()=>t("div",{class:"passport-account-connected"},[t(M,{size:"48"},{default:()=>[t(V,{src:l.value},null)]}),t("div",{class:"user-name mt-2"},[t("span",null,[s.value])]),t(w,{theme:"dark",class:"account-balance my-9"},{default:()=>[t("div",{class:"account-label mb-4"},[f("Wallet Assets")]),t(F,{parts:p.value},null)]}),t(b,{height:"56",title:"Disconnect",prependIcon:"$FIconDisconnect",class:"text-error px-0",onClick:()=>n("disconnect")},null),t(b,{height:"56",title:"Payment",prependIcon:"$FIconBorrow",class:"px-0",onClick:()=>n("payment")},null)])}}),Gt={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
  `}),"Template"),j=_.bind({});j.args={authOptions:{origin:"FoxONE UIKit",authMethods:["mixin","fennec","metamask"],clientId:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",scope:"PROFILE:READ ASSETS:READ SNAPSHOTS:READ",pkce:!0,mvmAuthType:"MixinToken",hooks:{beforeSignMessage:()=>({statement:"This is statement"}),afterSignMessage:e=>(console.log(e),"asdfasfdas")}},paymentOptions:{assetId:"965e5c6e-434c-3fa9-b780-c50f43cd955c",amount:"1",recipient:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",memo:"Test"}};const qt=["Default"];export{j as Default,qt as __namedExportsOrder,Gt as default};
//# sourceMappingURL=passport.stories.48bfb133.js.map
