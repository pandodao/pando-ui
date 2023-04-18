var i=Object.defineProperty;var t=(e,n)=>i(e,"name",{value:n,configurable:!0});import{r as a}from"./vue.esm-bundler.9500adb2.js";import{F as c}from"./FPaymentModal.ad677c83.js";import{F as s}from"./FButton.d61383cc.js";import{u as p}from"./toast.01919607.js";import{d as l}from"./VSelect.3728c706.js";import"./mixin.87a49014.js";import"./FModal.7ce358cf.js";import"./VDialog.38dab5f5.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.881d858e.js";import"./useRender.44945942.js";import"./helpers.681e1792.js";import"./VOverlay.96b5c4e3.js";import"./dimensions.5f5b1dd8.js";import"./easing.36b781ab.js";import"./anchor.1afb8064.js";import"./color.45246ddd.js";import"./transition.10caf698.js";import"./router.6e1740fe.js";import"./display.9827c8ac.js";import"./locale.7efc9def.js";import"./variant.95637a5a.js";import"./createSimpleFunctional.0b08b174.js";import"./VIcon.b10ecbaa.js";import"./density.0c8fab1e.js";import"./VAvatar.9487a2f3.js";import"./rounded.d16b72e9.js";import"./VImg.6757be35.js";import"./index.91748bc9.js";import"./index.1967ded9.js";import"./loader.4d40f77d.js";import"./location.c535e823.js";import"./intersectionObserver.10253e57.js";import"./border.eebb6db1.js";import"./elevation.d906eb56.js";import"./position.427d9f74.js";import"./FPayingModal.9bcf65bd.js";import"./VBtn.b26bd4ae.js";import"./VProgressCircular.8b82923d.js";import"./FQRCode.58288551.js";import"./qrious.a3727dde.js";import"./iframe.a0f2adfa.js";import"./FToast.7c2e60bc.js";import"./VSnackbar.b37ed6f7.js";import"./VDivider.4dfba538.js";import"./VTextField.73cde862.js";import"./VCounter.a1a93cec.js";import"./index.c2993bc7.js";import"./VInput.33e34f4e.js";import"./VMessages.a0bdae17.js";import"./VList.408dac73.js";import"./VListItem.492edb65.js";import"./VSelectionControl.41e38ffa.js";const gn={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FPaymentModal.stories.932c9ad2.js.map
