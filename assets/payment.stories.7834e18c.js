var m=Object.defineProperty;var e=(t,n)=>m(t,"name",{value:n,configurable:!0});import{G as s}from"./vue.esm-bundler.80cafc0b.js";import"./mixin.779267f9.js";import"./FPaymentModal.62359887.js";import{u as i}from"./toast.7664692e.js";import"./FModal.ac7dde43.js";import"./FButton.5e8d1e13.js";import"./VBtn.ce544012.js";import"./border.b14058ef.js";import"./color.7ba4ffe3.js";import"./helpers.32675158.js";import"./density.e2c1329b.js";import"./elevation.8d0c61c6.js";import"./rounded.b42653ce.js";import"./VIcon.ac9f05d6.js";import"./variant.1e842247.js";import"./proxiedModel.dbd4de1d.js";import"./router.9241c2dd.js";import"./loader.5e66d0fd.js";import"./VProgressLinear.23574e13.js";import"./intersectionObserver.addd26f6.js";import"./locale.68d0262d.js";import"./anchor.5ba72fdd.js";import"./position.19a0d7a5.js";import"./index.d4fa9fd4.js";import"./VDefaultsProvider.522cf1e0.js";import"./VProgressCircular.fec55325.js";import"./VCard.a6ed511f.js";import"./VOverlay.a7e28035.js";import"./easing.da2e9236.js";import"./display.1ed39e23.js";import"./transition.b6a16e6c.js";import"./forwardRefs.34034356.js";import"./createSimpleFunctional.19425ddc.js";import"./VAvatar.7760fc0a.js";import"./VImg.78b97665.js";import"./index.f2b6c1e4.js";import"./FPayingModal.f4761d74.js";import"./FQRCode.ac9dc89e.js";import"./qrious.9df11314.js";import"./iframe.e1ac4337.js";import"./FToast.ba94b24b.js";import"./VSnackbar.285c8d85.js";import"./VDivider.7c8b3fdb.js";function a(){return s().appContext.config.globalProperties.$uikit.payment}e(a,"usePayment");const ot={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=payment.stories.7834e18c.js.map
