var r=Object.defineProperty;var t=(e,n)=>r(e,"name",{value:n,configurable:!0});import{C as m}from"./vue.esm-bundler.a5c4e1bf.js";import"./FPaymentModal.fc5da7b4.js";import"./mixin.87a49014.js";import"./FModal.4fd09b84.js";import"./FButton.f3fc7c21.js";import"./VBtn.b5444450.js";import"./proxiedModel.9639363f.js";import"./useRender.c7ecffde.js";import"./helpers.cec2c044.js";import"./border.0d2c7ad0.js";import"./density.b3e2de9a.js";import"./elevation.52b4704c.js";import"./rounded.a0c73c18.js";import"./VIcon.5ca83e1b.js";import"./color.43314d1d.js";import"./variant.b9606795.js";import"./index.1b40d9d7.js";import"./dimensions.b6fbc401.js";import"./loader.7d1fab10.js";import"./locale.76e208ea.js";import"./position.d49ff30e.js";import"./anchor.e4a88562.js";import"./router.3d9f142b.js";import"./VProgressCircular.ad6cc829.js";import"./VDialog.8e3a7441.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.782553fc.js";import"./VOverlay.74b7cee1.js";import"./easing.36b781ab.js";import"./transition.c93b8895.js";import"./createSimpleFunctional.f00f4b71.js";import"./VAvatar.da185431.js";import"./VImg.19441548.js";import"./index.549b0914.js";import"./display.1bd9c9dd.js";import"./FPayingModal.c962507e.js";import"./FQRCode.8f456d01.js";import"./qrious.20baccc9.js";import"./iframe.44f7c4d0.js";function i(){return m().appContext.config.globalProperties.$uikit.payment}t(i,"usePayment");const X={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=payment.stories.c64da8b6.js.map
