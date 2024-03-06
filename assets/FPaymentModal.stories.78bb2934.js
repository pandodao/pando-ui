var c=Object.defineProperty;var t=(e,n)=>c(e,"name",{value:n,configurable:!0});import{r as a}from"./vue.esm-bundler.80cafc0b.js";import{F as i}from"./FPaymentModal.bb48ad4c.js";import{F as s}from"./FButton.5e8d1e13.js";import{u as p}from"./toast.7664692e.js";import{d as l}from"./VSelect.def7eec8.js";import"./mixin.779267f9.js";import"./FModal.ac7dde43.js";import"./VCard.a6ed511f.js";import"./VOverlay.a7e28035.js";import"./proxiedModel.dbd4de1d.js";import"./color.7ba4ffe3.js";import"./helpers.32675158.js";import"./easing.da2e9236.js";import"./anchor.5ba72fdd.js";import"./router.9241c2dd.js";import"./display.1ed39e23.js";import"./locale.68d0262d.js";import"./transition.b6a16e6c.js";import"./forwardRefs.34034356.js";import"./VDefaultsProvider.522cf1e0.js";import"./createSimpleFunctional.19425ddc.js";import"./density.e2c1329b.js";import"./VIcon.ac9f05d6.js";import"./VAvatar.7760fc0a.js";import"./rounded.b42653ce.js";import"./variant.1e842247.js";import"./VImg.78b97665.js";import"./index.f2b6c1e4.js";import"./border.b14058ef.js";import"./elevation.8d0c61c6.js";import"./loader.5e66d0fd.js";import"./VProgressLinear.23574e13.js";import"./intersectionObserver.addd26f6.js";import"./position.19a0d7a5.js";import"./index.d4fa9fd4.js";import"./FPayingModal.f4761d74.js";import"./VBtn.ce544012.js";import"./VProgressCircular.fec55325.js";import"./FQRCode.76df491d.js";import"./qrious.5b00c41b.js";import"./iframe.b9577b0c.js";import"./FToast.ba94b24b.js";import"./VSnackbar.285c8d85.js";import"./VDivider.7c8b3fdb.js";import"./VTextField.be2090fb.js";import"./VField.59d98d58.js";import"./index.b676db0f.js";import"./VInput.44c51e7f.js";import"./VMessages.8e887dfb.js";import"./VList.c8ed43d6.js";import"./VListItem.da04c970.js";import"./ssrBoot.e8acd638.js";import"./VSelectionControl.5045ffd3.js";import"./VSlideGroup.0c7c4a56.js";const vn={parameters:{storySource:{source:`import { ref } from "vue";
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
`,locationsMap:{default:{startLoc:{col:48,line:13},endLoc:{col:2,line:66},startBody:{col:48,line:13},endBody:{col:2,line:66}}}}},title:"Components/FPaymentModal",component:i},d=t(e=>({components:{FPaymentModal:i,FButton:s,VSelect:l},setup(){const n=a(),m=p(),r=a("mixin");return{args:e,channel:r,channels:["mixin","metamask","fenenc"],dialog:n,open:t(async()=>{try{await n.value.show({assetId:"965e5c6e-434c-3fa9-b780-c50f43cd955c",scheme:"mixin://mock-payment-scheme",amount:"1",channel:r.value,hideCheckingModal:!1,actions:{fennec:()=>{console.log("fennec payment called")},mvm:()=>{console.log("mvm payment called")}},checker:()=>new Promise((o,h)=>{setTimeout(()=>{o(!0)},5e3)})}),m.success({message:"payment checked"})}catch(o){m.error({message:""+o})}},"open")}},template:`
    <div>
      <VSelect v-model="channel" :items="channels" class="mb-8" />

      <FButton color="primary" @click="open">Mock Payment</FButton>

      <FPaymentModal ref="dialog" v-bind="args" />
    </div>
  `}),"Template"),u=d.bind({});u.args={};const Mn=["Default"];export{u as Default,Mn as __namedExportsOrder,vn as default};
//# sourceMappingURL=FPaymentModal.stories.78bb2934.js.map
