var I=Object.defineProperty;var c=(e,n)=>I(e,"name",{value:n,configurable:!0});import{z as y,r as i,b as d,d as T,o as O,a as t,e as f}from"./vue.esm-bundler.3b29098a.js";import{P as A,Q as D,l as x,n as F,t as b}from"./FTextarea.c4a0d03f.js";import{a as E}from"./base64.77e65e9f.js";import{V as w}from"./VSheet.e36e438d.js";import{V as C}from"./VIcon.c254d683.js";import{V as M}from"./VAvatar.ab09abd9.js";import{V}from"./VImg.78cc729b.js";import"./VSnackbar.d3ebbd55.js";import"./variant.be65e42d.js";import"./useRender.3ca1765f.js";import"./helpers.e1d6c4cc.js";import"./color.fef4ce02.js";import"./location.3a6dce64.js";import"./locale.eccdb440.js";import"./proxiedModel.67252d17.js";import"./anchor.c52c8661.js";import"./position.6cc3b816.js";import"./rounded.375414e4.js";import"./VOverlay.e2cb60a6.js";import"./dimensions.c2f0e23c.js";import"./easing.36b781ab.js";import"./transition.94342caf.js";import"./router.6cb3b155.js";import"./display.f5b0b65d.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.cb2315f4.js";import"./VBtn.7f6a0830.js";import"./border.d0444c35.js";import"./density.6dd2b9c7.js";import"./elevation.154beddf.js";import"./index.09e65b91.js";import"./loader.5b0d5ca4.js";import"./intersectionObserver.b06f0fb9.js";import"./VProgressCircular.c527f932.js";import"./VAppBar.873482c2.js";import"./index.f8ee2712.js";import"./ssrBoot.e29182c8.js";import"./VLazy.ef579524.js";import"./index.1414bb4a.js";import"./VList.ce24c533.js";import"./VListItem.aa6733a2.js";import"./createSimpleFunctional.b1ebbe28.js";import"./VSpacer.805c8e99.js";import"./VMessages.ff964b60.js";import"./VForm.31a8e481.js";import"./VInput.f50d7073.js";import"./mixin.87a49014.js";import"./VBottomNavigation.7e8ada0a.js";import"./v3-infinite-loading.2bf99b14.js";import"./VTooltip.57ebbf91.js";import"./qrious.de78998c.js";import"./iframe.e290c493.js";import"./number.ea2b3954.js";import"./VTextField.4378b041.js";import"./VCounter.66bfd87a.js";import"./VDialog.8fdf9bea.js";import"./index.bd986191.js";import"./VSlider.d3484e8b.js";import"./VSwitch.7943137e.js";import"./VSelectionControl.6249fa75.js";import"./VTabs.59482baf.js";import"./VTextarea.cb6e9f82.js";const S=y({name:"Passport",props:{authOptions:{type:Object},paymentOptions:{type:Object}},setup(e){const n=i(""),s=i(""),l=i(null),p=i([]),o=A(),m=D(),r=i(!1),h=d(()=>Boolean(n.value&&s.value));async function u(){try{const a=await o.auth(e.authOptions);n.value=a.token,s.value=a.channel,localStorage.setItem("token",a.token),localStorage.setItem("channel",a.channel)}catch(a){console.log(a)}}c(u,"handleConnect");async function P(){n.value="",s.value="",localStorage.setItem("token",""),localStorage.setItem("channel","")}c(P,"handleDisconnect");async function k(){const a=E.v4(),v={...e.paymentOptions,traceId:a,checker:async()=>(await(await fetch("https://api.mixin.one/transfers/trace/"+a,{method:"GET",headers:{Authorization:`Bearer ${n.value}`}})).json()).data?(m.success({message:"Payment checked"}),!0):!1};o.payment(v)}return c(k,"handlePayment"),T(()=>n.value,async()=>{l.value=await o.getProfile(),p.value=await o.getAssets()}),O(async()=>{try{r.value=!0;const a=localStorage.getItem("token")||"",v=localStorage.getItem("channel")||"",g=await o.sync({origin:"FoxONE UIKit",token:a,channel:v,refreshToken:!0});console.log("after sync"),n.value=g.token,s.value=g.channel,r.value=!1}catch(a){console.log(a)}}),()=>t("div",{class:"passport-overvie-container"},[r.value||t("div",{class:"passport-overview"},[h.value?t(R,{profile:l.value,assets:p.value,onDisconnect:()=>P(),onPayment:()=>k()},null):t(N,{onConnect:()=>u()},null)])])}}),N=y({name:"Disconnected2",emits:{connect:()=>!0},setup(e,{emit:n}){return()=>t("div",{class:"passport-account-disconnected"},[t(C,null,{default:()=>[f("$FIconWalletAFill")]}),t("div",{class:"disconnected--hint"},[f("Please connect your wallet first")]),t(x,{color:"primary",onClick:()=>n("connect")},{default:()=>[f("Connect Wallet")]})])}}),R=y({name:"Connected",props:{profile:Object,assets:Array},emits:{disconnect:()=>!0,payment:()=>!0},setup(e,{emit:n}){const s=d(()=>{var o;return(o=e.profile)==null?void 0:o.full_name}),l=d(()=>{var o;return(o=e.profile)==null?void 0:o.avatar_url}),p=d(()=>{var m,r;const o=(r=(m=e.assets)==null?void 0:m.reduce((h,u)=>h+u.balance*u.price_usd,0))!=null?r:0;return new Intl.NumberFormat("en",{currency:"USD",style:"currency"}).formatToParts(o)});return()=>t("div",{class:"passport-account-connected"},[t(M,{size:"48"},{default:()=>[t(V,{src:l.value},null)]}),t("div",{class:"user-name mt-2"},[t("span",null,[s.value])]),t(w,{theme:"dark",class:"account-balance my-9"},{default:()=>[t("div",{class:"account-label mb-4"},[f("Wallet Assets")]),t(F,{parts:p.value},null)]}),t(b,{height:"56",title:"Disconnect",prependIcon:"$FIconDisconnect",class:"text-error px-0",onClick:()=>n("disconnect")},null),t(b,{height:"56",title:"Payment",prependIcon:"$FIconBorrow",class:"px-0",onClick:()=>n("payment")},null)])}}),qt={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=passport.stories.2b158ed3.js.map
