var S=Object.defineProperty;var c=(a,e)=>S(a,"name",{value:e,configurable:!0});import{A as b,r as i,b as d,d as D,o as O,a as t,e as f}from"./vue.esm-bundler.b09b7c5a.js";import{Q as T,R as A,m as F,o as E,u as g}from"./FTextarea.ad1db853.js";import{a as x}from"./base64.4a4ed42a.js";import{V as w}from"./VSheet.1b973688.js";import{V as C}from"./VIcon.81f7ecc0.js";import{V}from"./VAvatar.84448bc0.js";import{V as R}from"./VImg.be2c1e9b.js";import"./VSnackbar.8d99b52c.js";import"./variant.eababd72.js";import"./useRender.5a19cee5.js";import"./helpers.4b349f1c.js";import"./color.1fec8f8e.js";import"./location.11c487f7.js";import"./locale.0dcd1420.js";import"./proxiedModel.f0d8de9f.js";import"./anchor.b337e11f.js";import"./position.6b49aae6.js";import"./rounded.ccd03645.js";import"./VOverlay.4718cec8.js";import"./dimensions.b549aab6.js";import"./easing.36b781ab.js";import"./transition.1a560eae.js";import"./router.524cabd1.js";import"./display.fd968d5a.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.a6c176d7.js";import"./VBtn.7a77eb8b.js";import"./border.6d45fe61.js";import"./density.43b8d8b2.js";import"./elevation.844f69c6.js";import"./index.eca3ba9a.js";import"./loader.c496a144.js";import"./intersectionObserver.8499cdfb.js";import"./VProgressCircular.8c9797f0.js";import"./VAppBar.33483872.js";import"./index.38f7dd54.js";import"./ssrBoot.12750f3e.js";import"./VLazy.292cd780.js";import"./index.21842925.js";import"./VList.eb773df7.js";import"./VListItem.679e6b02.js";import"./createSimpleFunctional.06ddaa9a.js";import"./VSpacer.14317ba5.js";import"./VMessages.02e1bfc3.js";import"./VForm.e0fb62d4.js";import"./VInput.c9d6b09b.js";import"./mixin.87a49014.js";import"./VBottomNavigation.631fa1b6.js";import"./v3-infinite-loading.e708b6f4.js";import"./VTooltip.e9edb427.js";import"./qrious.af770f26.js";import"./iframe.40e0ff7a.js";import"./number.d5e09512.js";import"./VTextField.32fb86ed.js";import"./VCounter.d53e5345.js";import"./VDialog.f3d85c11.js";import"./index.9ef2c901.js";import"./VSlider.5d68b977.js";import"./VSwitch.db6dbdd6.js";import"./VSelectionControl.096d7ba1.js";import"./VTabs.a098426b.js";import"./VTextarea.dc6d8184.js";const k=b({name:"Passport",props:{authOptions:{type:Object},paymentOptions:{type:Object}},setup(a){const e=i(""),s=i(""),l=i(null),p=i([]),o=T(),m=A(),r=i(!1),v=d(()=>Boolean(e.value&&s.value));async function u(){try{const n=await o.auth(a.authOptions);e.value=n.token,s.value=n.channel,localStorage.setItem("token",n.token),localStorage.setItem("channel",n.channel)}catch(n){console.log(n)}}c(u,"handleConnect");async function P(){e.value="",s.value="",localStorage.setItem("token",""),localStorage.setItem("channel","")}c(P,"handleDisconnect");async function I(){const n=x.v4(),h={...a.paymentOptions,traceId:n,checker:async()=>(await(await fetch("https://api.mixin.one/transfers/trace/"+n,{method:"GET",headers:{Authorization:`Bearer ${e.value}`}})).json()).data?(m.success({message:"Payment checked"}),!0):!1};o.payment(h)}return c(I,"handlePayment"),D(()=>e.value,async()=>{l.value=await o.getProfile(),p.value=await o.getAssets()}),O(async()=>{try{r.value=!0;const n=localStorage.getItem("token")||"",h=localStorage.getItem("channel")||"",y=await o.sync({origin:"FoxONE UIKit",token:n,channel:h,customizeToken:!0});console.log("after sync"),e.value=y.token,s.value=y.channel,r.value=!1}catch(n){console.log(n)}}),()=>t("div",{class:"passport-overvie-container"},[r.value||t("div",{class:"passport-overview"},[v.value?t(_,{profile:l.value,assets:p.value,onDisconnect:()=>P(),onPayment:()=>I()},null):t(N,{onConnect:()=>u()},null)])])}}),N=b({name:"Disconnected2",emits:{connect:()=>!0},setup(a,{emit:e}){return()=>t("div",{class:"passport-account-disconnected"},[t(C,null,{default:()=>[f("$FIconWalletAFill")]}),t("div",{class:"disconnected--hint"},[f("Please connect your wallet first")]),t(F,{color:"primary",onClick:()=>e("connect")},{default:()=>[f("Connect Wallet")]})])}}),_=b({name:"Connected",props:{profile:Object,assets:Array},emits:{disconnect:()=>!0,payment:()=>!0},setup(a,{emit:e}){const s=d(()=>{var o;return(o=a.profile)==null?void 0:o.full_name}),l=d(()=>{var o;return(o=a.profile)==null?void 0:o.avatar_url}),p=d(()=>{var m,r;const o=(r=(m=a.assets)==null?void 0:m.reduce((v,u)=>v+u.balance*u.price_usd,0))!=null?r:0;return new Intl.NumberFormat("en",{currency:"USD",style:"currency"}).formatToParts(o)});return()=>t("div",{class:"passport-account-connected"},[t(V,{size:"48"},{default:()=>[t(R,{src:l.value},null)]}),t("div",{class:"user-name mt-2"},[t("span",null,[s.value])]),t(w,{theme:"dark",class:"account-balance my-9"},{default:()=>[t("div",{class:"account-label mb-4"},[f("Wallet Assets")]),t(E,{parts:p.value},null)]}),t(g,{height:"56",title:"Disconnect",prependIcon:"$FIconDisconnect",class:"text-error px-0",onClick:()=>e("disconnect")},null),t(g,{height:"56",title:"Payment",prependIcon:"$FIconBorrow",class:"px-0",onClick:()=>e("payment")},null)])}}),qt={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
  `}),"Template"),B=j.bind({});B.args={authOptions:{origin:"FoxONE UIKit",authMethods:["mixin","fennec","metamask"],clientId:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",scope:"PROFILE:READ ASSETS:READ SNAPSHOTS:READ",pkce:!0,customizeToken:!0,hooks:{beforeSignMessage:()=>Promise.resolve({statement:""}),onDistributeToken:()=>Promise.resolve({token:"dasfas"})}},paymentOptions:{assetId:"965e5c6e-434c-3fa9-b780-c50f43cd955c",amount:"1",recipient:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",memo:"Test"}};const Jt=["Default"];export{B as Default,Jt as __namedExportsOrder,qt as default};
//# sourceMappingURL=passport.stories.8e5bff10.js.map
