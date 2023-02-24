var i=Object.defineProperty;var t=(e,n)=>i(e,"name",{value:n,configurable:!0});import{r as a}from"./vue.esm-bundler.57aa1454.js";import{F as c}from"./FPaymentModal.7068d4bb.js";import{F as s}from"./FButton.95509114.js";import{u as p}from"./toast.388d9822.js";import{d as l}from"./VSelect.6939f842.js";import"./mixin.87a49014.js";import"./FModal.b075f7f6.js";import"./VDialog.789dc96e.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.aff93369.js";import"./useRender.0f3b6188.js";import"./helpers.ff98b59e.js";import"./VOverlay.2998aec7.js";import"./dimensions.2a6ee421.js";import"./easing.36b781ab.js";import"./anchor.8b678110.js";import"./color.5e70182f.js";import"./transition.7787ec60.js";import"./router.359f3c68.js";import"./display.8ac49ecd.js";import"./locale.ce33eacd.js";import"./variant.58edd759.js";import"./createSimpleFunctional.3ee3a08b.js";import"./VIcon.b7876f5b.js";import"./density.5fc65f23.js";import"./VAvatar.01c8c686.js";import"./rounded.638bf334.js";import"./VImg.040b2a14.js";import"./index.168f645e.js";import"./index.17c04f25.js";import"./loader.538ed1c8.js";import"./location.7ef01c4f.js";import"./border.72c41e60.js";import"./elevation.08bb2882.js";import"./position.6bb498a5.js";import"./FPayingModal.1e620246.js";import"./VBtn.ab71924f.js";import"./VProgressCircular.ce5720de.js";import"./FQRCode.4fe0941d.js";import"./qrious.c2064fb9.js";import"./iframe.e800e092.js";import"./FToast.75200401.js";import"./VSnackbar.3bed6e44.js";import"./VDivider.186db6a0.js";import"./VTextField.5738fd9a.js";import"./VCounter.03254f21.js";import"./index.5cb25ca4.js";import"./VInput.a59f36d0.js";import"./VMessages.7f48a74b.js";import"./VList.8d2887de.js";import"./VListItem.f12d2f11.js";import"./VSelectionControl.d88669b3.js";const Fn={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FPaymentModal.stories.4ede82d5.js.map
