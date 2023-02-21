var m=Object.defineProperty;var e=(t,n)=>m(t,"name",{value:n,configurable:!0});import{N as s}from"./vue.esm-bundler.60beb779.js";import"./FPaymentModal.c9594dd1.js";import{u as i}from"./toast.72c8ac80.js";import"./mixin.87a49014.js";import"./FModal.e9ae3117.js";import"./FButton.7fb5afc5.js";import"./VBtn.76288723.js";import"./border.84bdbe82.js";import"./useRender.06ad421e.js";import"./helpers.f4a4e1c6.js";import"./density.3ab93966.js";import"./elevation.6146b715.js";import"./rounded.08843391.js";import"./VIcon.ccd22ecd.js";import"./color.7f161142.js";import"./variant.f60f637f.js";import"./proxiedModel.c4bc26c4.js";import"./index.d3586bd0.js";import"./dimensions.71f8bcb1.js";import"./loader.3ab44f13.js";import"./location.3f71a5c2.js";import"./locale.656e3084.js";import"./anchor.46190ad2.js";import"./position.31a6f1c1.js";import"./router.9cc51735.js";import"./VProgressCircular.1a876490.js";import"./VDialog.74ee3f5c.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.6564e1f3.js";import"./easing.36b781ab.js";import"./transition.d5d90e7e.js";import"./display.49866675.js";import"./createSimpleFunctional.057254cd.js";import"./VAvatar.709f16cb.js";import"./VImg.79a3bf78.js";import"./index.41c719a2.js";import"./FPayingModal.4db1b30a.js";import"./FQRCode.b1d635de.js";import"./qrious.33faeaed.js";import"./iframe.95136ceb.js";import"./FToast.60b04ff3.js";import"./VSnackbar.0e6f9429.js";import"./VDivider.7d468152.js";function a(){return s().appContext.config.globalProperties.$uikit.payment}e(a,"usePayment");const ot={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
  `}),"Template"),p=c.bind({});p.args={channel:"mixin"};const rt=["Default"];export{p as Default,rt as __namedExportsOrder,ot as default};
//# sourceMappingURL=payment.stories.cc09e38c.js.map
