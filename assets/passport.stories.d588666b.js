var I=Object.defineProperty;var r=(o,e)=>I(o,"name",{value:e,configurable:!0});import{D as h,r as i,b as d,d as O,a as t,e as f}from"./vue.esm-bundler.80cafc0b.js";import{Q as T,R as k,m as D,o as A,u as y}from"./FTextarea.bf2484ac.js";import{a as F}from"./base64.59bb57a4.js";import{V as x}from"./VSheet.010b6b19.js";import{V as R}from"./VIcon.ac9f05d6.js";import{V as w}from"./VAvatar.7760fc0a.js";import{V as L}from"./VImg.78b97665.js";import"./VSnackbar.285c8d85.js";import"./VOverlay.a7e28035.js";import"./proxiedModel.dbd4de1d.js";import"./color.7ba4ffe3.js";import"./helpers.32675158.js";import"./easing.da2e9236.js";import"./anchor.5ba72fdd.js";import"./router.9241c2dd.js";import"./display.1ed39e23.js";import"./locale.68d0262d.js";import"./transition.b6a16e6c.js";import"./forwardRefs.34034356.js";import"./VProgressLinear.23574e13.js";import"./intersectionObserver.addd26f6.js";import"./rounded.b42653ce.js";import"./position.19a0d7a5.js";import"./variant.1e842247.js";import"./VDefaultsProvider.522cf1e0.js";import"./VDivider.7c8b3fdb.js";import"./VBtn.ce544012.js";import"./border.b14058ef.js";import"./density.e2c1329b.js";import"./elevation.8d0c61c6.js";import"./loader.5e66d0fd.js";import"./index.d4fa9fd4.js";import"./VProgressCircular.fec55325.js";import"./VAppBar.dc4b7249.js";import"./index.b676db0f.js";import"./layout.c04eea67.js";import"./ssrBoot.e8acd638.js";import"./VLazy.d1caeda2.js";import"./index.f2b6c1e4.js";import"./VList.c8ed43d6.js";import"./VListItem.da04c970.js";import"./createSimpleFunctional.19425ddc.js";import"./VSpacer.beb84ecc.js";import"./VMessages.8e887dfb.js";import"./VForm.a180a23c.js";import"./VInput.44c51e7f.js";import"./mixin.779267f9.js";import"./VBottomNavigation.bf20c0ba.js";import"./v3-infinite-loading.46851eaf.js";import"./VTooltip.73d686bc.js";import"./qrious.9df11314.js";import"./iframe.e1ac4337.js";import"./bignumber.8dc24abd.js";import"./VTextField.be2090fb.js";import"./VField.59d98d58.js";import"./VCard.a6ed511f.js";import"./index.85be89f5.js";import"./VSlider.dec703cd.js";import"./VSwitch.2c6a0c88.js";import"./VSelectionControl.5045ffd3.js";import"./VTabs.c1889508.js";import"./VSlideGroup.0c7c4a56.js";import"./VTextarea.b7eb8810.js";const v=h({name:"Passport",props:{authOptions:{type:Object},paymentOptions:{type:Object}},setup(o){const e=i(""),a=i(""),c=i(null),p=i([]),n=T(),m=k(),l=i(!1),b=d(()=>Boolean(e.value&&a.value));async function u(){try{const s=await n.auth(o.authOptions);e.value=s.token||s.keystore,a.value=s.channel}catch(s){console.log(s)}}r(u,"handleConnect");async function E(){e.value="",a.value="",localStorage.setItem("token",""),localStorage.setItem("channel","")}r(E,"handleDisconnect");async function g(){const s=F.v4(),P={...o.paymentOptions,traceId:s,checker:async()=>(await(await fetch("https://api.mixin.one/transfers/trace/"+s,{method:"GET",headers:{Authorization:`Bearer ${e.value}`}})).json()).data?(m.success({message:"Payment checked"}),!0):!1};n.payment(P)}return r(g,"handlePayment"),O(()=>e.value,async()=>{try{c.value=await n.getProfile(),p.value=await n.getAssets([])}catch(s){console.log(s)}}),()=>t("div",{class:"passport-overvie-container"},[l.value||t("div",{class:"passport-overview"},[b.value?t(q,{profile:c.value,assets:p.value,onDisconnect:()=>E(),onPayment:()=>g()},null):t(V,{onConnect:()=>u()},null)])])}}),V=h({name:"Disconnected2",emits:{connect:()=>!0},setup(o,{emit:e}){return()=>t("div",{class:"passport-account-disconnected"},[t(R,null,{default:()=>[f("$FIconWalletAFill")]}),t("div",{class:"disconnected--hint"},[f("Please connect your wallet first")]),t(D,{color:"primary",onClick:()=>e("connect")},{default:()=>[f("Connect Wallet")]})])}}),q=h({name:"Connected",props:{profile:Object,assets:Array},emits:{disconnect:()=>!0,payment:()=>!0},setup(o,{emit:e}){const a=d(()=>{var n;return(n=o.profile)==null?void 0:n.full_name}),c=d(()=>{var n;return(n=o.profile)==null?void 0:n.avatar_url}),p=d(()=>{var m,l;const n=(l=(m=o.assets)==null?void 0:m.reduce((b,u)=>b+u.balance*u.price_usd,0))!=null?l:0;return new Intl.NumberFormat("en",{currency:"USD",style:"currency"}).formatToParts(n)});return()=>t("div",{class:"passport-account-connected"},[t(w,{size:"48"},{default:()=>[t(L,{src:c.value},null)]}),t("div",{class:"user-name mt-2"},[t("span",null,[a.value])]),t(x,{theme:"dark",class:"account-balance my-9"},{default:()=>[t("div",{class:"account-label mb-4"},[f("Wallet Assets")]),t(A,{parts:p.value},null)]}),t(y,{height:"56",title:"Disconnect",prependIcon:"$FIconDisconnect",class:"text-error px-0",onClick:()=>e("disconnect")},null),t(y,{height:"56",title:"Payment",prependIcon:"$FIconBorrow",class:"px-0",onClick:()=>e("payment")},null)])}}),Zt={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
  `}),"Template"),C=S.bind({});C.args={authOptions:{origin:"FoxONE UIKit",authMethods:["mixin","fennec","metamask"],clientId:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",scope:"PROFILE:READ ASSETS:READ SNAPSHOTS:READ",pkce:!0,customizeToken:!0,hooks:{beforeSignMessage:()=>Promise.resolve({statement:""}),onDistributeToken:()=>Promise.resolve({token:"dasfas"})}},paymentOptions:{assetId:"965e5c6e-434c-3fa9-b780-c50f43cd955c",amount:"1",recipient:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",memo:"Test"}};const N=S.bind({});N.args={authOptions:{origin:"FoxONE UIKit",authMethods:["mixin"],clientId:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",scope:"PROFILE:READ ASSETS:READ SNAPSHOTS:READ",pkce:!0,useEd25519KeyStore:!0,privateKey:"7nCu4fwxbTqYH5ymhEvincz8BbiMll8gnw6cSvfgp9OZo6pabLgeGhsTf3umWtj8jk-qSupIUsO4hulL6pVRTA",publicKey:"maOqWmy4HhobE397plrY_I5PqkrqSFLDuIbpS-qVUUw"},paymentOptions:{assetId:"965e5c6e-434c-3fa9-b780-c50f43cd955c",amount:"1",recipient:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",memo:"Test"}};const Qt=["Default","Ed25519"];export{C as Default,N as Ed25519,Qt as __namedExportsOrder,Zt as default};
//# sourceMappingURL=passport.stories.d588666b.js.map
