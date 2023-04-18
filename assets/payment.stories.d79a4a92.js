var m=Object.defineProperty;var e=(t,n)=>m(t,"name",{value:n,configurable:!0});import{N as s}from"./vue.esm-bundler.9500adb2.js";import"./FPaymentModal.ad677c83.js";import{u as i}from"./toast.01919607.js";import"./mixin.87a49014.js";import"./FModal.7ce358cf.js";import"./FButton.d61383cc.js";import"./VBtn.b26bd4ae.js";import"./border.eebb6db1.js";import"./useRender.44945942.js";import"./helpers.681e1792.js";import"./density.0c8fab1e.js";import"./elevation.d906eb56.js";import"./rounded.d16b72e9.js";import"./VIcon.b10ecbaa.js";import"./color.45246ddd.js";import"./variant.95637a5a.js";import"./proxiedModel.881d858e.js";import"./index.1967ded9.js";import"./dimensions.5f5b1dd8.js";import"./loader.4d40f77d.js";import"./location.c535e823.js";import"./locale.7efc9def.js";import"./anchor.1afb8064.js";import"./intersectionObserver.10253e57.js";import"./position.427d9f74.js";import"./router.6e1740fe.js";import"./VProgressCircular.8b82923d.js";import"./VDialog.38dab5f5.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.96b5c4e3.js";import"./easing.36b781ab.js";import"./transition.10caf698.js";import"./display.9827c8ac.js";import"./createSimpleFunctional.0b08b174.js";import"./VAvatar.9487a2f3.js";import"./VImg.6757be35.js";import"./index.91748bc9.js";import"./FPayingModal.9bcf65bd.js";import"./FQRCode.58288551.js";import"./qrious.a3727dde.js";import"./iframe.a0f2adfa.js";import"./FToast.7c2e60bc.js";import"./VSnackbar.b37ed6f7.js";import"./VDivider.4dfba538.js";function a(){return s().appContext.config.globalProperties.$uikit.payment}e(a,"usePayment");const rt={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=payment.stories.d79a4a92.js.map
