var r=Object.defineProperty;var t=(e,n)=>r(e,"name",{value:n,configurable:!0});import{P as m}from"./vue.esm-bundler.06cbf4f3.js";import"./FPaymentModal.e6f2fa36.js";import"./mixin.87a49014.js";import"./FModal.af77241e.js";import"./FButton.042bb067.js";import"./VBtn.a6fb96e2.js";import"./proxiedModel.ffcb1955.js";import"./useRender.61aaf11b.js";import"./helpers.0ba19e05.js";import"./border.386c98bf.js";import"./density.4e133a57.js";import"./elevation.906ca0d0.js";import"./rounded.ae3fe3ca.js";import"./VIcon.4e22765d.js";import"./color.9c80aa54.js";import"./variant.e4970577.js";import"./index.0e1c0398.js";import"./dimensions.f30e25d4.js";import"./loader.ff14b575.js";import"./location.efb67ad2.js";import"./locale.7c7f5def.js";import"./anchor.4d34e672.js";import"./position.f250096a.js";import"./router.26e45b89.js";import"./VProgressCircular.32071c16.js";import"./VDialog.89f04ef5.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.99ed030c.js";import"./easing.36b781ab.js";import"./transition.60048a78.js";import"./display.f0408c25.js";import"./createSimpleFunctional.917a427b.js";import"./VAvatar.d0341de2.js";import"./VImg.601fba1e.js";import"./index.667911d0.js";import"./FPayingModal.8eb7b855.js";import"./FQRCode.8702dc6f.js";import"./qrious.11100b76.js";import"./iframe.58795953.js";function i(){return m().appContext.config.globalProperties.$uikit.payment}t(i,"usePayment");const X={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=payment.stories.b18d1002.js.map
