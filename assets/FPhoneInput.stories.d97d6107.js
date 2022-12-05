var m=Object.defineProperty;var n=(o,t)=>m(o,"name",{value:t,configurable:!0});import{F as e}from"./FPhoneInput.f53e0b4d.js";import{d as r}from"./vue.esm-bundler.0d7c29ee.js";import"./FInput.cc1e9cf7.js";import"./VCounter.af1b4b68.js";import"./index.e4eb9e0e.js";import"./useRender.9e1e1323.js";import"./helpers.a29827d2.js";import"./VInput.76852b74.js";import"./color.a1d36358.js";import"./VIcon.27b7c9a9.js";import"./density.1812b102.js";import"./proxiedModel.0134c68c.js";import"./locale.6d395d7c.js";import"./VMessages.5340d354.js";import"./transition.845f9488.js";import"./loader.dd2f3ca6.js";import"./easing.d7926d43.js";import"./index.da6e5ccf.js";import"./forwardRefs.c5465513.js";import"./FListItem.ffbaa156.js";import"./createSimpleFunctional.e0d25bf4.js";import"./index.9418ce7a.js";import"./variant.f85b9fa5.js";import"./dimensions.512da313.js";import"./elevation.b2f78cc5.js";import"./router.e34e74ab.js";import"./VAvatar.b52a6938.js";import"./VImg.c981533d.js";import"./FModal.1ffcee23.js";import"./FButton.c94e3704.js";import"./VBtn.aebc80dd.js";import"./anchor.cecbc02b.js";import"./VProgressCircular.c944d5ab.js";import"./scopeId.7054761b.js";import"./VOverlay.664db6e2.js";import"./display.8735be82.js";import"./FSearchInput.51b8ce83.js";import"./iframe.18542905.js";import"./VLazy.299616ae.js";import"./VDivider.23958762.js";const X={parameters:{storySource:{source:`import { FPhoneInput } from "./FPhoneInput";
import { Meta, StoryFn } from "@storybook/vue3";
import { ref } from "vue";

export default {
  name: "FPhoneInput",
  component: FPhoneInput,
} as Meta<typeof FPhoneInput>;

const Template: StoryFn<typeof FPhoneInput> = (args) => ({
  components: { FPhoneInput },
  setup() {
    const code = ref("86");
    const number = ref("");

    return { args, code, number };
  },
  template: \`<FPhoneInput v-model:code="code" v-model="number" />\`,
});

export const Default = Template.bind({});
Default.args = {};
`,locationsMap:{default:{startLoc:{col:46,line:10},endLoc:{col:2,line:19},startBody:{col:46,line:10},endBody:{col:2,line:19}}}}},name:"FPhoneInput",component:e},i=n(o=>({components:{FPhoneInput:e},setup(){const t=r("86"),p=r("");return{args:o,code:t,number:p}},template:'<FPhoneInput v-model:code="code" v-model="number" />'}),"Template"),s=i.bind({});s.args={};const Y=["Default"];export{s as Default,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=FPhoneInput.stories.d97d6107.js.map
