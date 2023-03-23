var i=Object.defineProperty;var t=(e,n)=>i(e,"name",{value:n,configurable:!0});import{r as a}from"./vue.esm-bundler.3b29098a.js";import{F as c}from"./FPaymentModal.c702d996.js";import{F as s}from"./FButton.72dd92af.js";import{u as p}from"./toast.c619c36f.js";import{d as l}from"./VSelect.5299d9be.js";import"./mixin.87a49014.js";import"./FModal.4db458cf.js";import"./VDialog.8fdf9bea.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.67252d17.js";import"./useRender.3ca1765f.js";import"./helpers.e1d6c4cc.js";import"./VOverlay.e2cb60a6.js";import"./dimensions.c2f0e23c.js";import"./easing.36b781ab.js";import"./anchor.c52c8661.js";import"./color.fef4ce02.js";import"./transition.94342caf.js";import"./router.6cb3b155.js";import"./display.f5b0b65d.js";import"./locale.eccdb440.js";import"./variant.be65e42d.js";import"./createSimpleFunctional.b1ebbe28.js";import"./VIcon.c254d683.js";import"./density.6dd2b9c7.js";import"./VAvatar.ab09abd9.js";import"./rounded.375414e4.js";import"./VImg.78cc729b.js";import"./index.1414bb4a.js";import"./index.09e65b91.js";import"./loader.5b0d5ca4.js";import"./location.3a6dce64.js";import"./intersectionObserver.b06f0fb9.js";import"./border.d0444c35.js";import"./elevation.154beddf.js";import"./position.6cc3b816.js";import"./FPayingModal.25156288.js";import"./VBtn.7f6a0830.js";import"./VProgressCircular.c527f932.js";import"./FQRCode.1606e2de.js";import"./qrious.5aa0560b.js";import"./iframe.1cf228a3.js";import"./FToast.53bd4d10.js";import"./VSnackbar.d3ebbd55.js";import"./VDivider.cb2315f4.js";import"./VTextField.4378b041.js";import"./VCounter.66bfd87a.js";import"./index.f8ee2712.js";import"./VInput.f50d7073.js";import"./VMessages.ff964b60.js";import"./VList.ce24c533.js";import"./VListItem.aa6733a2.js";import"./VSelectionControl.6249fa75.js";const gn={parameters:{storySource:{source:`import { ref } from "vue";
import { VSelect } from "vuetify/components";
import { FPaymentModal } from "./FPaymentModal";
import { FButton } from "../FButton";
import { Meta, StoryFn } from "@storybook/vue3";
import { useToast } from "../../plugins/toast";

export default {
  title: "Components/FPaymentModal",
  component: FPaymentModal,
} as Meta<typeof FPaymentModal>;

const Template: StoryFn<typeof FPaymentModal> = (args) => ({
  components: { FPaymentModal, FButton, VSelect },

  setup() {
    const dialog = ref();
    const toast = useToast();
    const channel = ref("mixin");

    const channels = ["mixin", "metamask", "fenenc"];

    const open = async () => {
      try {
        await dialog.value.show({
          assetId: "965e5c6e-434c-3fa9-b780-c50f43cd955c",
          scheme: "mixin://mock-payment-scheme",
          amount: "1",
          channel: channel.value,
          hideCheckingModal: false,
          actions: {
            fennec: () => {
              console.log("fennec payment called");
            },
            mvm: () => {
              console.log("mvm payment called");
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

        toast.success({ message: "payment checked" });
      } catch (error) {
        toast.error({ message: "" + error });
      }
    };

    return { args, channel, channels, dialog, open };
  },

  template: \`
    <div>
      <VSelect v-model="channel" :items="channels" class="mb-8" />

      <FButton color="primary" @click="open">Mock Payment</FButton>

      <FPaymentModal ref="dialog" v-bind="args" />
    </div>
  \`,
});

export const Default = Template.bind({});
Default.args = {};
`,locationsMap:{default:{startLoc:{col:48,line:13},endLoc:{col:2,line:66},startBody:{col:48,line:13},endBody:{col:2,line:66}}}}},title:"Components/FPaymentModal",component:c},d=t(e=>({components:{FPaymentModal:c,FButton:s,VSelect:l},setup(){const n=a(),m=p(),r=a("mixin");return{args:e,channel:r,channels:["mixin","metamask","fenenc"],dialog:n,open:t(async()=>{try{await n.value.show({assetId:"965e5c6e-434c-3fa9-b780-c50f43cd955c",scheme:"mixin://mock-payment-scheme",amount:"1",channel:r.value,hideCheckingModal:!1,actions:{fennec:()=>{console.log("fennec payment called")},mvm:()=>{console.log("mvm payment called")}},checker:()=>new Promise((o,h)=>{setTimeout(()=>{o(!0)},5e3)})}),m.success({message:"payment checked"})}catch(o){m.error({message:""+o})}},"open")}},template:`
    <div>
      <VSelect v-model="channel" :items="channels" class="mb-8" />

      <FButton color="primary" @click="open">Mock Payment</FButton>

      <FPaymentModal ref="dialog" v-bind="args" />
    </div>
  `}),"Template"),u=d.bind({});u.args={};const vn=["Default"];export{u as Default,vn as __namedExportsOrder,gn as default};
//# sourceMappingURL=FPaymentModal.stories.828314ba.js.map
