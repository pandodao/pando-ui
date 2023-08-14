var S=Object.defineProperty;var c=(a,e)=>S(a,"name",{value:e,configurable:!0});import{A as b,r as i,b as d,d as D,o as O,a as t,e as f}from"./vue.esm-bundler.b09b7c5a.js";import{Q as T,R as A,m as F,o as E,u as g}from"./FTextarea.a7959a65.js";import{a as x}from"./base64.9a27521e.js";import{V as w}from"./VSheet.4ce38742.js";import{V as C}from"./VIcon.bd07cc2b.js";import{V}from"./VAvatar.95d7d85f.js";import{V as R}from"./VImg.11b5f250.js";import"./VSnackbar.9a9fe2a4.js";import"./variant.fbd007cc.js";import"./color.7fbf1750.js";import"./helpers.4b349f1c.js";import"./location.b7cdffb8.js";import"./locale.88650f04.js";import"./proxiedModel.28fe5444.js";import"./anchor.b337e11f.js";import"./position.faf59b49.js";import"./rounded.28975b1c.js";import"./VOverlay.7cd76152.js";import"./router.b8d53e34.js";import"./easing.36b781ab.js";import"./transition.d2bea911.js";import"./display.c2299c89.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.810676cd.js";import"./VBtn.7921a3d1.js";import"./border.6019dc9f.js";import"./density.6083b2d4.js";import"./elevation.12d4edaf.js";import"./index.eca3ba9a.js";import"./loader.a0162f6e.js";import"./intersectionObserver.1e3a532e.js";import"./VProgressCircular.7bee339a.js";import"./VAppBar.5964addb.js";import"./index.5cf6a3e8.js";import"./ssrBoot.4ecb96a7.js";import"./VLazy.ed808b3a.js";import"./index.8137a4d7.js";import"./VList.34423262.js";import"./VListItem.f3bec281.js";import"./createSimpleFunctional.6499d319.js";import"./VSpacer.749a101d.js";import"./VMessages.d6b13295.js";import"./VForm.02932278.js";import"./VInput.d8777c43.js";import"./mixin.f972a917.js";import"./VBottomNavigation.710ba8b7.js";import"./v3-infinite-loading.e708b6f4.js";import"./VTooltip.42cfaf74.js";import"./qrious.ed951bce.js";import"./iframe.90d49179.js";import"./number.d5e09512.js";import"./VTextField.a51746b8.js";import"./VCounter.0660ffdc.js";import"./VDialog.ac2f44e1.js";import"./index.3e8e0277.js";import"./VSlider.f3bb0dfe.js";import"./VSwitch.0fc59f6e.js";import"./VSelectionControl.9c612953.js";import"./VTabs.83133aba.js";import"./VTextarea.12fcda91.js";const k=b({name:"Passport",props:{authOptions:{type:Object},paymentOptions:{type:Object}},setup(a){const e=i(""),s=i(""),l=i(null),p=i([]),o=T(),m=A(),r=i(!1),v=d(()=>Boolean(e.value&&s.value));async function u(){try{const n=await o.auth(a.authOptions);e.value=n.token,s.value=n.channel,localStorage.setItem("token",n.token),localStorage.setItem("channel",n.channel)}catch(n){console.log(n)}}c(u,"handleConnect");async function P(){e.value="",s.value="",localStorage.setItem("token",""),localStorage.setItem("channel","")}c(P,"handleDisconnect");async function I(){const n=x.v4(),h={...a.paymentOptions,traceId:n,checker:async()=>(await(await fetch("https://api.mixin.one/transfers/trace/"+n,{method:"GET",headers:{Authorization:`Bearer ${e.value}`}})).json()).data?(m.success({message:"Payment checked"}),!0):!1};o.payment(h)}return c(I,"handlePayment"),D(()=>e.value,async()=>{l.value=await o.getProfile(),p.value=await o.getAssets()}),O(async()=>{try{r.value=!0;const n=localStorage.getItem("token")||"",h=localStorage.getItem("channel")||"",y=await o.sync({origin:"FoxONE UIKit",token:n,channel:h,customizeToken:!0});console.log("after sync"),e.value=y.token,s.value=y.channel,r.value=!1}catch(n){console.log(n)}}),()=>t("div",{class:"passport-overvie-container"},[r.value||t("div",{class:"passport-overview"},[v.value?t(_,{profile:l.value,assets:p.value,onDisconnect:()=>P(),onPayment:()=>I()},null):t(N,{onConnect:()=>u()},null)])])}}),N=b({name:"Disconnected2",emits:{connect:()=>!0},setup(a,{emit:e}){return()=>t("div",{class:"passport-account-disconnected"},[t(C,null,{default:()=>[f("$FIconWalletAFill")]}),t("div",{class:"disconnected--hint"},[f("Please connect your wallet first")]),t(F,{color:"primary",onClick:()=>e("connect")},{default:()=>[f("Connect Wallet")]})])}}),_=b({name:"Connected",props:{profile:Object,assets:Array},emits:{disconnect:()=>!0,payment:()=>!0},setup(a,{emit:e}){const s=d(()=>{var o;return(o=a.profile)==null?void 0:o.full_name}),l=d(()=>{var o;return(o=a.profile)==null?void 0:o.avatar_url}),p=d(()=>{var m,r;const o=(r=(m=a.assets)==null?void 0:m.reduce((v,u)=>v+u.balance*u.price_usd,0))!=null?r:0;return new Intl.NumberFormat("en",{currency:"USD",style:"currency"}).formatToParts(o)});return()=>t("div",{class:"passport-account-connected"},[t(V,{size:"48"},{default:()=>[t(R,{src:l.value},null)]}),t("div",{class:"user-name mt-2"},[t("span",null,[s.value])]),t(w,{theme:"dark",class:"account-balance my-9"},{default:()=>[t("div",{class:"account-label mb-4"},[f("Wallet Assets")]),t(E,{parts:p.value},null)]}),t(g,{height:"56",title:"Disconnect",prependIcon:"$FIconDisconnect",class:"text-error px-0",onClick:()=>e("disconnect")},null),t(g,{height:"56",title:"Payment",prependIcon:"$FIconBorrow",class:"px-0",onClick:()=>e("payment")},null)])}}),Gt={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
    customizeToken: true,
    hooks: {
      beforeSignMessage: () => Promise.resolve({ statement: "" }),
      onDistributeToken: () => {
        return Promise.resolve({ token: "dasfas" });
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
`,locationsMap:{default:{startLoc:{col:26,line:9},endLoc:{col:2,line:19},startBody:{col:26,line:9},endBody:{col:2,line:19}}}}},title:"Plugin/Passport",component:k},j=c(a=>({components:{Passport:k},setup(){return{args:a}},template:`
    <Passport v-bind="args" />
  `}),"Template"),B=j.bind({});B.args={authOptions:{origin:"FoxONE UIKit",authMethods:["mixin","fennec","metamask"],clientId:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",scope:"PROFILE:READ ASSETS:READ SNAPSHOTS:READ",pkce:!0,customizeToken:!0,hooks:{beforeSignMessage:()=>Promise.resolve({statement:""}),onDistributeToken:()=>Promise.resolve({token:"dasfas"})}},paymentOptions:{assetId:"965e5c6e-434c-3fa9-b780-c50f43cd955c",amount:"1",recipient:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",memo:"Test"}};const Qt=["Default"];export{B as Default,Qt as __namedExportsOrder,Gt as default};
//# sourceMappingURL=passport.stories.3090cb0a.js.map
