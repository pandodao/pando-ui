var i=Object.defineProperty;var t=(e,n)=>i(e,"name",{value:n,configurable:!0});import{r as a}from"./vue.esm-bundler.1ba604f9.js";import{F as c}from"./FPaymentModal.26ca23ef.js";import{F as s}from"./FButton.da03e124.js";import{u as p}from"./toast.40fc08b3.js";import{d as l}from"./VSelect.6bf3f57f.js";import"./mixin.87a49014.js";import"./FModal.3e0c2496.js";import"./VDialog.0f487f73.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.23143766.js";import"./useRender.965bd6aa.js";import"./helpers.bd7a8d83.js";import"./VOverlay.16609424.js";import"./dimensions.721a2e0b.js";import"./easing.36b781ab.js";import"./anchor.1637b665.js";import"./color.b891a321.js";import"./transition.ef0cc300.js";import"./router.ba883828.js";import"./display.de7ed398.js";import"./locale.fb27b96c.js";import"./variant.22bbbe86.js";import"./createSimpleFunctional.b271bf7a.js";import"./VIcon.518cdeb6.js";import"./density.8ac56fa2.js";import"./VAvatar.d7e1c088.js";import"./rounded.cb32523b.js";import"./VImg.2750fab4.js";import"./index.c125b6ad.js";import"./index.27517d48.js";import"./loader.c9437e89.js";import"./location.f6b6fb7b.js";import"./border.c2063388.js";import"./elevation.7428fb70.js";import"./position.747eb4b6.js";import"./FPayingModal.4745f0cd.js";import"./VBtn.156ed533.js";import"./VProgressCircular.6a9473f8.js";import"./FQRCode.190292f5.js";import"./qrious.25bbe2a8.js";import"./iframe.e47ed955.js";import"./FToast.ec3eff7d.js";import"./VSnackbar.f31880f4.js";import"./VDivider.7223c023.js";import"./VTextField.44316fe6.js";import"./VCounter.5f12ac31.js";import"./index.a7472254.js";import"./VInput.857b8225.js";import"./VMessages.11ef5b61.js";import"./VList.7218b974.js";import"./VListItem.d10786fb.js";import"./VSelectionControl.32a0df89.js";const Fn={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FPaymentModal.stories.3d57f603.js.map
