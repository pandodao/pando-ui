var i=Object.defineProperty;var t=(e,n)=>i(e,"name",{value:n,configurable:!0});import{r as a}from"./vue.esm-bundler.caa622c4.js";import{F as c}from"./FPaymentModal.1a850a8a.js";import{F as s}from"./FButton.b7201e41.js";import{u as p}from"./toast.448ab3d5.js";import{d as l}from"./VSelect.94dfbfb8.js";import"./mixin.87a49014.js";import"./FModal.a85ac45d.js";import"./VDialog.8fc91e8b.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.073d34a6.js";import"./useRender.15f4f58d.js";import"./helpers.83369341.js";import"./VOverlay.a16b5884.js";import"./dimensions.1a78e179.js";import"./easing.36b781ab.js";import"./anchor.57ff9838.js";import"./color.795eceb6.js";import"./transition.712d10eb.js";import"./router.f4dceb95.js";import"./display.ef8c62e1.js";import"./locale.312c25a1.js";import"./variant.6a05f8d1.js";import"./createSimpleFunctional.2286a9cd.js";import"./VIcon.f37f8177.js";import"./density.c07a8c02.js";import"./VAvatar.91a1aacd.js";import"./rounded.bd8ad820.js";import"./VImg.cbbbed87.js";import"./index.fc60a169.js";import"./index.4e4a2aa3.js";import"./loader.535d849b.js";import"./location.375c93f3.js";import"./border.ae4ccc68.js";import"./elevation.3fce6244.js";import"./position.6630ce12.js";import"./FPayingModal.72836279.js";import"./VBtn.abf41941.js";import"./VProgressCircular.9b7ebd22.js";import"./FQRCode.90b599ea.js";import"./qrious.3bdcbbc9.js";import"./iframe.1d791503.js";import"./FToast.857c1390.js";import"./VSnackbar.47bba482.js";import"./VDivider.18b197de.js";import"./VTextField.dbd49551.js";import"./VCounter.4d5defc1.js";import"./index.07e0e4c3.js";import"./VInput.353ca9d2.js";import"./VMessages.e864fdf2.js";import"./VList.a6d8b9f9.js";import"./VListItem.a560c4b3.js";import"./VSelectionControl.902a6c96.js";const Fn={parameters:{storySource:{source:`import { ref } from "vue";
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
  `}),"Template"),u=d.bind({});u.args={};const gn=["Default"];export{u as Default,gn as __namedExportsOrder,Fn as default};
//# sourceMappingURL=FPaymentModal.stories.0b1bf245.js.map
