var i=Object.defineProperty;var t=(e,n)=>i(e,"name",{value:n,configurable:!0});import{r as a}from"./vue.esm-bundler.62cdaeff.js";import{F as c}from"./FPaymentModal.436f2893.js";import{F as s}from"./FButton.7a11c708.js";import{u as p}from"./toast.741ba85e.js";import{d as l}from"./VSelect.0cad1bd1.js";import"./mixin.87a49014.js";import"./FModal.e70a199e.js";import"./VDialog.8aa0eb51.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.c2b98033.js";import"./useRender.bb8a5a4c.js";import"./helpers.f37785d0.js";import"./VOverlay.49a3aceb.js";import"./dimensions.c27e6138.js";import"./easing.36b781ab.js";import"./anchor.4b6c6135.js";import"./color.5ac0909d.js";import"./transition.28d05801.js";import"./router.19d79a04.js";import"./display.21f5d2fe.js";import"./locale.b4680344.js";import"./variant.cb074882.js";import"./createSimpleFunctional.f6324448.js";import"./VIcon.ddcbca9b.js";import"./density.a1d89e9f.js";import"./VAvatar.8eec326e.js";import"./rounded.9945cf4e.js";import"./VImg.485a2281.js";import"./index.68c608a7.js";import"./index.f175e2d9.js";import"./loader.c48359f5.js";import"./location.8179a009.js";import"./border.744ce806.js";import"./elevation.79ced88b.js";import"./position.daea1c07.js";import"./FPayingModal.68088ac9.js";import"./VBtn.2cacbcac.js";import"./VProgressCircular.5a613386.js";import"./FQRCode.70775a67.js";import"./qrious.a8332774.js";import"./iframe.f8ff6e96.js";import"./FToast.8c3293b9.js";import"./VSnackbar.5cad11aa.js";import"./VDivider.1215dc57.js";import"./VTextField.74d2a0fa.js";import"./VCounter.8bd4f380.js";import"./index.31ee38b0.js";import"./VInput.7941d77b.js";import"./VMessages.c418de83.js";import"./VList.0fe739a2.js";import"./VListItem.ad71f0c6.js";import"./VSelectionControl.04e0712f.js";const Fn={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FPaymentModal.stories.1bb7f966.js.map
