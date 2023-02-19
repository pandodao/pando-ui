var r=Object.defineProperty;var t=(e,n)=>r(e,"name",{value:n,configurable:!0});import{P as m}from"./vue.esm-bundler.caa622c4.js";import"./FPaymentModal.1a850a8a.js";import"./mixin.87a49014.js";import"./FModal.a85ac45d.js";import"./FButton.b7201e41.js";import"./VBtn.abf41941.js";import"./proxiedModel.073d34a6.js";import"./useRender.15f4f58d.js";import"./helpers.83369341.js";import"./border.ae4ccc68.js";import"./density.c07a8c02.js";import"./elevation.3fce6244.js";import"./rounded.bd8ad820.js";import"./VIcon.f37f8177.js";import"./color.795eceb6.js";import"./variant.6a05f8d1.js";import"./index.4e4a2aa3.js";import"./dimensions.1a78e179.js";import"./loader.535d849b.js";import"./location.375c93f3.js";import"./locale.312c25a1.js";import"./anchor.57ff9838.js";import"./position.6630ce12.js";import"./router.f4dceb95.js";import"./VProgressCircular.9b7ebd22.js";import"./VDialog.8fc91e8b.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.a16b5884.js";import"./easing.36b781ab.js";import"./transition.712d10eb.js";import"./display.ef8c62e1.js";import"./createSimpleFunctional.2286a9cd.js";import"./VAvatar.91a1aacd.js";import"./VImg.cbbbed87.js";import"./index.fc60a169.js";import"./FPayingModal.72836279.js";import"./FQRCode.90b599ea.js";import"./qrious.3bdcbbc9.js";import"./iframe.1d791503.js";function i(){return m().appContext.config.globalProperties.$uikit.payment}t(i,"usePayment");const X={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
import { usePayment } from "./payment";

export default {
  title: "Plugin/Payment",
};

const Template: StoryFn = (args) => ({
  setup() {
    const payment = usePayment();
    const open = () => {
      payment.show({
        assetId: "965e5c6e-434c-3fa9-b780-c50f43cd955c",
        scheme: "mixin://mock-payment-scheme",
        amount: "1",
        channel: args.channel,
        hideCheckingModal: false,
        actions: {
          fennec: () => {
            return Promise.resolve(true);
          },
          mvm: () => {
            return Promise.resolve(true);
          },
        },
        checker: () => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(true);
            }, 5000);
          });
        },
      });
    };

    return { open };
  },
  template: \`
    <FButton color="primary" @click="open">Show Payment Modal</FButton>
  \`,
});

export const Default = Template.bind({});
Default.args = {
  channel: "mixin",
};
`,locationsMap:{default:{startLoc:{col:26,line:8},endLoc:{col:2,line:41},startBody:{col:26,line:8},endBody:{col:2,line:41}}}}},title:"Plugin/Payment"},p=t(e=>({setup(){const n=i();return{open:t(()=>{n.show({assetId:"965e5c6e-434c-3fa9-b780-c50f43cd955c",scheme:"mixin://mock-payment-scheme",amount:"1",channel:e.channel,hideCheckingModal:!1,actions:{fennec:()=>Promise.resolve(!0),mvm:()=>Promise.resolve(!0)},checker:()=>new Promise((o,s)=>{setTimeout(()=>{o(!0)},5e3)})})},"open")}},template:`
    <FButton color="primary" @click="open">Show Payment Modal</FButton>
  `}),"Template"),a=p.bind({});a.args={channel:"mixin"};const Y=["Default"];export{a as Default,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=payment.stories.226f966d.js.map
