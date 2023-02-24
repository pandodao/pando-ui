var m=Object.defineProperty;var e=(t,n)=>m(t,"name",{value:n,configurable:!0});import{N as s}from"./vue.esm-bundler.57aa1454.js";import"./FPaymentModal.7068d4bb.js";import{u as i}from"./toast.388d9822.js";import"./mixin.87a49014.js";import"./FModal.b075f7f6.js";import"./FButton.95509114.js";import"./VBtn.ab71924f.js";import"./border.72c41e60.js";import"./useRender.0f3b6188.js";import"./helpers.ff98b59e.js";import"./density.5fc65f23.js";import"./elevation.08bb2882.js";import"./rounded.638bf334.js";import"./VIcon.b7876f5b.js";import"./color.5e70182f.js";import"./variant.58edd759.js";import"./proxiedModel.aff93369.js";import"./index.17c04f25.js";import"./dimensions.2a6ee421.js";import"./loader.538ed1c8.js";import"./location.7ef01c4f.js";import"./locale.ce33eacd.js";import"./anchor.8b678110.js";import"./position.6bb498a5.js";import"./router.359f3c68.js";import"./VProgressCircular.ce5720de.js";import"./VDialog.789dc96e.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.2998aec7.js";import"./easing.36b781ab.js";import"./transition.7787ec60.js";import"./display.8ac49ecd.js";import"./createSimpleFunctional.3ee3a08b.js";import"./VAvatar.01c8c686.js";import"./VImg.040b2a14.js";import"./index.168f645e.js";import"./FPayingModal.1e620246.js";import"./FQRCode.4fe0941d.js";import"./qrious.c2064fb9.js";import"./iframe.e800e092.js";import"./FToast.75200401.js";import"./VSnackbar.3bed6e44.js";import"./VDivider.186db6a0.js";function a(){return s().appContext.config.globalProperties.$uikit.payment}e(a,"usePayment");const ot={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=payment.stories.398f1449.js.map
