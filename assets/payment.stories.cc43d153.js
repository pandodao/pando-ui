var m=Object.defineProperty;var e=(t,n)=>m(t,"name",{value:n,configurable:!0});import{N as s}from"./vue.esm-bundler.62cdaeff.js";import"./FPaymentModal.436f2893.js";import{u as i}from"./toast.741ba85e.js";import"./mixin.87a49014.js";import"./FModal.e70a199e.js";import"./FButton.7a11c708.js";import"./VBtn.2cacbcac.js";import"./border.744ce806.js";import"./useRender.bb8a5a4c.js";import"./helpers.f37785d0.js";import"./density.a1d89e9f.js";import"./elevation.79ced88b.js";import"./rounded.9945cf4e.js";import"./VIcon.ddcbca9b.js";import"./color.5ac0909d.js";import"./variant.cb074882.js";import"./proxiedModel.c2b98033.js";import"./index.f175e2d9.js";import"./dimensions.c27e6138.js";import"./loader.c48359f5.js";import"./location.8179a009.js";import"./locale.b4680344.js";import"./anchor.4b6c6135.js";import"./position.daea1c07.js";import"./router.19d79a04.js";import"./VProgressCircular.5a613386.js";import"./VDialog.8aa0eb51.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.49a3aceb.js";import"./easing.36b781ab.js";import"./transition.28d05801.js";import"./display.21f5d2fe.js";import"./createSimpleFunctional.f6324448.js";import"./VAvatar.8eec326e.js";import"./VImg.485a2281.js";import"./index.68c608a7.js";import"./FPayingModal.68088ac9.js";import"./FQRCode.70775a67.js";import"./qrious.a8332774.js";import"./iframe.f8ff6e96.js";import"./FToast.8c3293b9.js";import"./VSnackbar.5cad11aa.js";import"./VDivider.1215dc57.js";function a(){return s().appContext.config.globalProperties.$uikit.payment}e(a,"usePayment");const ot={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=payment.stories.cc43d153.js.map
