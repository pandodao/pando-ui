var I=Object.defineProperty;var r=(o,e)=>I(o,"name",{value:e,configurable:!0});import{A as h,r as c,b as d,d as O,a as t,e as f}from"./vue.esm-bundler.b09b7c5a.js";import{Q as T,R as k,m as A,o as D,u as y}from"./FTextarea.3245f244.js";import{a as F}from"./base64.5ed57865.js";import{V as x}from"./VSheet.4ce38742.js";import{V as R}from"./VIcon.bd07cc2b.js";import{V as w}from"./VAvatar.95d7d85f.js";import{V as L}from"./VImg.11b5f250.js";import"./VSnackbar.9a9fe2a4.js";import"./variant.fbd007cc.js";import"./color.7fbf1750.js";import"./helpers.4b349f1c.js";import"./location.b7cdffb8.js";import"./locale.88650f04.js";import"./proxiedModel.28fe5444.js";import"./anchor.b337e11f.js";import"./position.faf59b49.js";import"./rounded.28975b1c.js";import"./VOverlay.7cd76152.js";import"./router.b8d53e34.js";import"./easing.36b781ab.js";import"./transition.d2bea911.js";import"./display.c2299c89.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.810676cd.js";import"./VBtn.7921a3d1.js";import"./border.6019dc9f.js";import"./density.6083b2d4.js";import"./elevation.12d4edaf.js";import"./index.eca3ba9a.js";import"./loader.a0162f6e.js";import"./intersectionObserver.1e3a532e.js";import"./VProgressCircular.7bee339a.js";import"./VAppBar.5964addb.js";import"./index.5cf6a3e8.js";import"./ssrBoot.4ecb96a7.js";import"./VLazy.ed808b3a.js";import"./index.8137a4d7.js";import"./VList.34423262.js";import"./VListItem.f3bec281.js";import"./createSimpleFunctional.6499d319.js";import"./VSpacer.749a101d.js";import"./VMessages.d6b13295.js";import"./VForm.02932278.js";import"./VInput.d8777c43.js";import"./mixin.779267f9.js";import"./VBottomNavigation.710ba8b7.js";import"./v3-infinite-loading.e708b6f4.js";import"./VTooltip.42cfaf74.js";import"./qrious.2ea5d61f.js";import"./iframe.cfadc77c.js";import"./bignumber.8dc24abd.js";import"./VTextField.a51746b8.js";import"./VCounter.0660ffdc.js";import"./VDialog.ac2f44e1.js";import"./index.fbbbfa40.js";import"./VSlider.f3bb0dfe.js";import"./VSwitch.0fc59f6e.js";import"./VSelectionControl.9c612953.js";import"./VTabs.83133aba.js";import"./VTextarea.12fcda91.js";const v=h({name:"Passport",props:{authOptions:{type:Object},paymentOptions:{type:Object}},setup(o){const e=c(""),a=c(""),i=c(null),p=c([]),n=T(),m=k(),l=c(!1),b=d(()=>Boolean(e.value&&a.value));async function u(){try{const s=await n.auth(o.authOptions);e.value=s.token||s.keystore,a.value=s.channel}catch(s){console.log(s)}}r(u,"handleConnect");async function E(){e.value="",a.value="",localStorage.setItem("token",""),localStorage.setItem("channel","")}r(E,"handleDisconnect");async function g(){const s=F.v4(),P={...o.paymentOptions,traceId:s,checker:async()=>(await(await fetch("https://api.mixin.one/transfers/trace/"+s,{method:"GET",headers:{Authorization:`Bearer ${e.value}`}})).json()).data?(m.success({message:"Payment checked"}),!0):!1};n.payment(P)}return r(g,"handlePayment"),O(()=>e.value,async()=>{try{i.value=await n.getProfile(),p.value=await n.getAssets([])}catch(s){console.log(s)}}),()=>t("div",{class:"passport-overvie-container"},[l.value||t("div",{class:"passport-overview"},[b.value?t(q,{profile:i.value,assets:p.value,onDisconnect:()=>E(),onPayment:()=>g()},null):t(V,{onConnect:()=>u()},null)])])}}),V=h({name:"Disconnected2",emits:{connect:()=>!0},setup(o,{emit:e}){return()=>t("div",{class:"passport-account-disconnected"},[t(R,null,{default:()=>[f("$FIconWalletAFill")]}),t("div",{class:"disconnected--hint"},[f("Please connect your wallet first")]),t(A,{color:"primary",onClick:()=>e("connect")},{default:()=>[f("Connect Wallet")]})])}}),q=h({name:"Connected",props:{profile:Object,assets:Array},emits:{disconnect:()=>!0,payment:()=>!0},setup(o,{emit:e}){const a=d(()=>{var n;return(n=o.profile)==null?void 0:n.full_name}),i=d(()=>{var n;return(n=o.profile)==null?void 0:n.avatar_url}),p=d(()=>{var m,l;const n=(l=(m=o.assets)==null?void 0:m.reduce((b,u)=>b+u.balance*u.price_usd,0))!=null?l:0;return new Intl.NumberFormat("en",{currency:"USD",style:"currency"}).formatToParts(n)});return()=>t("div",{class:"passport-account-connected"},[t(w,{size:"48"},{default:()=>[t(L,{src:i.value},null)]}),t("div",{class:"user-name mt-2"},[t("span",null,[a.value])]),t(x,{theme:"dark",class:"account-balance my-9"},{default:()=>[t("div",{class:"account-label mb-4"},[f("Wallet Assets")]),t(D,{parts:p.value},null)]}),t(y,{height:"56",title:"Disconnect",prependIcon:"$FIconDisconnect",class:"text-error px-0",onClick:()=>e("disconnect")},null),t(y,{height:"56",title:"Payment",prependIcon:"$FIconBorrow",class:"px-0",onClick:()=>e("payment")},null)])}}),$t={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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

export const Ed25519 = Template.bind({});

Ed25519.args = {
  authOptions: {
    origin: "FoxONE UIKit",
    authMethods: ["mixin"],
    clientId: "fbd26bc6-3d04-4964-a7fe-a540432b16e2",
    scope: "PROFILE:READ ASSETS:READ SNAPSHOTS:READ",
    pkce: true,
    useEd25519KeyStore: true,
    privateKey:
      "7nCu4fwxbTqYH5ymhEvincz8BbiMll8gnw6cSvfgp9OZo6pabLgeGhsTf3umWtj8jk-qSupIUsO4hulL6pVRTA",
    publicKey: "maOqWmy4HhobE397plrY_I5PqkrqSFLDuIbpS-qVUUw",
  },
  paymentOptions: {
    assetId: "965e5c6e-434c-3fa9-b780-c50f43cd955c",
    amount: "1",
    recipient: "fbd26bc6-3d04-4964-a7fe-a540432b16e2",
    memo: "Test",
  },
};
`,locationsMap:{default:{startLoc:{col:26,line:9},endLoc:{col:2,line:19},startBody:{col:26,line:9},endBody:{col:2,line:19}},"ed-25519":{startLoc:{col:26,line:9},endLoc:{col:2,line:19},startBody:{col:26,line:9},endBody:{col:2,line:19}}}}},title:"Plugin/Passport",component:v},S=r(o=>({components:{Passport:v},setup(){return{args:o}},template:`
    <Passport v-bind="args" />
  `}),"Template"),C=S.bind({});C.args={authOptions:{origin:"FoxONE UIKit",authMethods:["mixin","fennec","metamask"],clientId:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",scope:"PROFILE:READ ASSETS:READ SNAPSHOTS:READ",pkce:!0,customizeToken:!0,hooks:{beforeSignMessage:()=>Promise.resolve({statement:""}),onDistributeToken:()=>Promise.resolve({token:"dasfas"})}},paymentOptions:{assetId:"965e5c6e-434c-3fa9-b780-c50f43cd955c",amount:"1",recipient:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",memo:"Test"}};const N=S.bind({});N.args={authOptions:{origin:"FoxONE UIKit",authMethods:["mixin"],clientId:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",scope:"PROFILE:READ ASSETS:READ SNAPSHOTS:READ",pkce:!0,useEd25519KeyStore:!0,privateKey:"7nCu4fwxbTqYH5ymhEvincz8BbiMll8gnw6cSvfgp9OZo6pabLgeGhsTf3umWtj8jk-qSupIUsO4hulL6pVRTA",publicKey:"maOqWmy4HhobE397plrY_I5PqkrqSFLDuIbpS-qVUUw"},paymentOptions:{assetId:"965e5c6e-434c-3fa9-b780-c50f43cd955c",amount:"1",recipient:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",memo:"Test"}};const Yt=["Default","Ed25519"];export{C as Default,N as Ed25519,Yt as __namedExportsOrder,$t as default};
//# sourceMappingURL=passport.stories.b6d8e001.js.map
