var I=Object.defineProperty;var c=(e,n)=>I(e,"name",{value:n,configurable:!0});import{z as y,r as i,b as d,d as T,o as O,a as t,e as f}from"./vue.esm-bundler.62cdaeff.js";import{O as A,P as D,l as x,n as F,s as b}from"./FTextarea.71df7075.js";import{a as E}from"./base64.c11e2199.js";import{V as w}from"./VSheet.d9eeea30.js";import{V as C}from"./VIcon.ddcbca9b.js";import{V as M}from"./VAvatar.8eec326e.js";import{V}from"./VImg.485a2281.js";import"./VSnackbar.5cad11aa.js";import"./variant.cb074882.js";import"./useRender.bb8a5a4c.js";import"./helpers.f37785d0.js";import"./color.5ac0909d.js";import"./location.8179a009.js";import"./locale.b4680344.js";import"./proxiedModel.c2b98033.js";import"./anchor.4b6c6135.js";import"./position.daea1c07.js";import"./rounded.9945cf4e.js";import"./VOverlay.49a3aceb.js";import"./dimensions.c27e6138.js";import"./easing.36b781ab.js";import"./transition.28d05801.js";import"./router.19d79a04.js";import"./display.21f5d2fe.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.1215dc57.js";import"./VBtn.2cacbcac.js";import"./border.744ce806.js";import"./density.a1d89e9f.js";import"./elevation.79ced88b.js";import"./index.f175e2d9.js";import"./loader.c48359f5.js";import"./VProgressCircular.5a613386.js";import"./VAppBar.255672c1.js";import"./index.31ee38b0.js";import"./ssrBoot.f1e306be.js";import"./VLazy.8ad79713.js";import"./index.68c608a7.js";import"./VList.0fe739a2.js";import"./VListItem.ad71f0c6.js";import"./createSimpleFunctional.f6324448.js";import"./VSpacer.c706d964.js";import"./VMessages.c418de83.js";import"./VForm.240bdb45.js";import"./VInput.7941d77b.js";import"./mixin.87a49014.js";import"./VBottomNavigation.bdd44eed.js";import"./VTooltip.71b83f94.js";import"./qrious.a8332774.js";import"./iframe.f8ff6e96.js";import"./number.ea2b3954.js";import"./VTextField.74d2a0fa.js";import"./VCounter.8bd4f380.js";import"./VDialog.8aa0eb51.js";import"./index.2f67cc41.js";import"./VSlider.a5077e9b.js";import"./VSwitch.481122cf.js";import"./VSelectionControl.04e0712f.js";import"./VTabs.6b3926ec.js";import"./VTextarea.108094e3.js";const S=y({name:"Passport",props:{authOptions:{type:Object},paymentOptions:{type:Object}},setup(e){const n=i(""),s=i(""),l=i(null),p=i([]),o=A(),m=D(),r=i(!1),h=d(()=>Boolean(n.value&&s.value));async function u(){try{const a=await o.auth(e.authOptions);n.value=a.token,s.value=a.channel,localStorage.setItem("token",a.token),localStorage.setItem("channel",a.channel)}catch(a){console.log(a)}}c(u,"handleConnect");async function P(){n.value="",s.value="",localStorage.setItem("token",""),localStorage.setItem("channel","")}c(P,"handleDisconnect");async function k(){const a=E.v4(),v={...e.paymentOptions,traceId:a,checker:async()=>(await(await fetch("https://api.mixin.one/transfers/trace/"+a,{method:"GET",headers:{Authorization:`Bearer ${n.value}`}})).json()).data?(m.success({message:"Payment checked"}),!0):!1};o.payment(v)}return c(k,"handlePayment"),T(()=>n.value,async()=>{l.value=await o.getProfile(),p.value=await o.getAssets()}),O(async()=>{try{r.value=!0;const a=localStorage.getItem("token")||"",v=localStorage.getItem("channel")||"",g=await o.sync({origin:"FoxONE UIKit",token:a,channel:v,refreshToken:!0});console.log("after sync"),n.value=g.token,s.value=g.channel,r.value=!1}catch(a){console.log(a)}}),()=>t("div",{class:"passport-overvie-container"},[r.value||t("div",{class:"passport-overview"},[h.value?t(R,{profile:l.value,assets:p.value,onDisconnect:()=>P(),onPayment:()=>k()},null):t(N,{onConnect:()=>u()},null)])])}}),N=y({name:"Disconnected2",emits:{connect:()=>!0},setup(e,{emit:n}){return()=>t("div",{class:"passport-account-disconnected"},[t(C,null,{default:()=>[f("$FIconWalletAFill")]}),t("div",{class:"disconnected--hint"},[f("Please connect your wallet first")]),t(x,{color:"primary",onClick:()=>n("connect")},{default:()=>[f("Connect Wallet")]})])}}),R=y({name:"Connected",props:{profile:Object,assets:Array},emits:{disconnect:()=>!0,payment:()=>!0},setup(e,{emit:n}){const s=d(()=>{var o;return(o=e.profile)==null?void 0:o.full_name}),l=d(()=>{var o;return(o=e.profile)==null?void 0:o.avatar_url}),p=d(()=>{var m,r;const o=(r=(m=e.assets)==null?void 0:m.reduce((h,u)=>h+u.balance*u.price_usd,0))!=null?r:0;return new Intl.NumberFormat("en",{currency:"USD",style:"currency"}).formatToParts(o)});return()=>t("div",{class:"passport-account-connected"},[t(M,{size:"48"},{default:()=>[t(V,{src:l.value},null)]}),t("div",{class:"user-name mt-2"},[t("span",null,[s.value])]),t(w,{theme:"dark",class:"account-balance my-9"},{default:()=>[t("div",{class:"account-label mb-4"},[f("Wallet Assets")]),t(F,{parts:p.value},null)]}),t(b,{height:"56",title:"Disconnect",prependIcon:"$FIconDisconnect",class:"text-error px-0",onClick:()=>n("disconnect")},null),t(b,{height:"56",title:"Payment",prependIcon:"$FIconBorrow",class:"px-0",onClick:()=>n("payment")},null)])}}),Gt={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=passport.stories.417cfd6c.js.map
