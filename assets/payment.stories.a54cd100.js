var m=Object.defineProperty;var e=(t,n)=>m(t,"name",{value:n,configurable:!0});import{N as s}from"./vue.esm-bundler.b09b7c5a.js";import"./FPaymentModal.8d1e9a4b.js";import{u as i}from"./toast.ca99ceb1.js";import"./mixin.87a49014.js";import"./FModal.edcf514e.js";import"./FButton.fd5dc93c.js";import"./VBtn.7a77eb8b.js";import"./border.6d45fe61.js";import"./useRender.5a19cee5.js";import"./helpers.4b349f1c.js";import"./density.43b8d8b2.js";import"./elevation.844f69c6.js";import"./rounded.ccd03645.js";import"./VIcon.81f7ecc0.js";import"./color.1fec8f8e.js";import"./variant.eababd72.js";import"./proxiedModel.f0d8de9f.js";import"./index.eca3ba9a.js";import"./dimensions.b549aab6.js";import"./loader.c496a144.js";import"./location.11c487f7.js";import"./locale.0dcd1420.js";import"./anchor.b337e11f.js";import"./intersectionObserver.8499cdfb.js";import"./position.6b49aae6.js";import"./router.524cabd1.js";import"./VProgressCircular.8c9797f0.js";import"./VDialog.f3d85c11.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.4718cec8.js";import"./easing.36b781ab.js";import"./transition.1a560eae.js";import"./display.fd968d5a.js";import"./createSimpleFunctional.06ddaa9a.js";import"./VAvatar.84448bc0.js";import"./VImg.be2c1e9b.js";import"./index.21842925.js";import"./FPayingModal.7fb55dbc.js";import"./FQRCode.90f45892.js";import"./qrious.569375d2.js";import"./iframe.4a282d59.js";import"./FToast.5b91172b.js";import"./VSnackbar.8d99b52c.js";import"./VDivider.a6c176d7.js";function a(){return s().appContext.config.globalProperties.$uikit.payment}e(a,"usePayment");const rt={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
import { usePayment } from "./payment";
import { useToast } from "./toast";

export default {
  title: "Plugin/Payment",
};

const Template: StoryFn = (args) => ({
  setup() {
    const toast = useToast();
    const payment = usePayment();
    const open = async () => {
      await payment.show({
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

      toast.success({ message: "check payment success" });
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
`,locationsMap:{default:{startLoc:{col:26,line:9},endLoc:{col:2,line:45},startBody:{col:26,line:9},endBody:{col:2,line:45}}}}},title:"Plugin/Payment"},c=e(t=>({setup(){const n=i(),o=a();return{open:e(async()=>{await o.show({assetId:"965e5c6e-434c-3fa9-b780-c50f43cd955c",scheme:"mixin://mock-payment-scheme",amount:"1",channel:t.channel,hideCheckingModal:!1,actions:{fennec:()=>Promise.resolve(!0),mvm:()=>Promise.resolve(!0)},checker:()=>new Promise((r,l)=>{setTimeout(()=>{r(!0)},5e3)})}),n.success({message:"check payment success"})},"open")}},template:`
    <FButton color="primary" @click="open">Show Payment Modal</FButton>
  `}),"Template"),p=c.bind({});p.args={channel:"mixin"};const mt=["Default"];export{p as Default,mt as __namedExportsOrder,rt as default};
//# sourceMappingURL=payment.stories.a54cd100.js.map
