var r=Object.defineProperty;var t=(e,n)=>r(e,"name",{value:n,configurable:!0});import{P as m}from"./vue.esm-bundler.330b8bcd.js";import"./FPaymentModal.8f7248a7.js";import"./mixin.87a49014.js";import"./FModal.6bf61d27.js";import"./FButton.d034f6f2.js";import"./VBtn.e55e9e37.js";import"./proxiedModel.815b9064.js";import"./useRender.b59b3e39.js";import"./helpers.6dbb45ef.js";import"./border.8a30a617.js";import"./density.38f0f124.js";import"./elevation.b2f27a68.js";import"./rounded.257cff90.js";import"./VIcon.c758310f.js";import"./color.66c7a00f.js";import"./variant.b259332f.js";import"./index.b967f916.js";import"./dimensions.6590eaa4.js";import"./loader.c202c022.js";import"./location.2cb2469d.js";import"./locale.0eda84ca.js";import"./anchor.7cdf4a4d.js";import"./position.03fcbfb6.js";import"./router.a6c113d7.js";import"./VProgressCircular.27e195cb.js";import"./VDialog.a4bfe643.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.d681ab18.js";import"./easing.36b781ab.js";import"./transition.d91c432b.js";import"./display.b3319b10.js";import"./createSimpleFunctional.05bfccd4.js";import"./VAvatar.f79052e0.js";import"./VImg.9ee07324.js";import"./index.0fdd422f.js";import"./FPayingModal.7c2a8ce0.js";import"./FQRCode.a3a87d7a.js";import"./qrious.d817d78b.js";import"./iframe.13d762c3.js";function i(){return m().appContext.config.globalProperties.$uikit.payment}t(i,"usePayment");const X={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=payment.stories.e127e028.js.map
