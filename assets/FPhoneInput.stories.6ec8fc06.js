var m=Object.defineProperty;var n=(o,t)=>m(o,"name",{value:t,configurable:!0});import{F as r}from"./FPhoneInput.ad1f378f.js";import{d as e}from"./vue.esm-bundler.03d0f9c2.js";import"./FInput.0625b872.js";import"./index.98b5e059.js";import"./useRender.4b8f74ab.js";import"./helpers.11996f79.js";import"./VLabel.f4f94bb7.js";import"./VIcon.48347d4a.js";import"./color.ec9b773d.js";import"./density.e2a6824c.js";import"./proxiedModel.12bae561.js";import"./locale.9f7d6233.js";import"./VMessages.cbf0f59f.js";import"./transition.37736cb0.js";import"./loader.30593133.js";import"./easing.d7926d43.js";import"./index.7705c375.js";import"./forwardRefs.c5465513.js";import"./FListItem.689549fe.js";import"./createSimpleFunctional.80c809ed.js";import"./index.71c8a79f.js";import"./variant.89df963d.js";import"./dimensions.4f68b75e.js";import"./elevation.ef328fb6.js";import"./router.6303e2ed.js";import"./VAvatar.bb0c21d9.js";import"./VImg.40b0c651.js";import"./FModal.2828546c.js";import"./FButton.2e1405fc.js";import"./VBtn.a413b61a.js";import"./anchor.a0b334cc.js";import"./VProgressCircular.3dc750a1.js";import"./scopeId.adb6c097.js";import"./VOverlay.07008e41.js";import"./display.8ad1f519.js";import"./FSearchInput.6dd3f7b5.js";import"./iframe.79a2f9a8.js";import"./VLazy.17fb2cc6.js";import"./VDivider.19c63c46.js";const W={parameters:{storySource:{source:`import { FPhoneInput } from "./FPhoneInput";
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
`,locationsMap:{default:{startLoc:{col:46,line:10},endLoc:{col:2,line:19},startBody:{col:46,line:10},endBody:{col:2,line:19}}}}},name:"FPhoneInput",component:r},i=n(o=>({components:{FPhoneInput:r},setup(){const t=e("86"),p=e("");return{args:o,code:t,number:p}},template:'<FPhoneInput v-model:code="code" v-model="number" />'}),"Template"),s=i.bind({});s.args={};const X=["Default"];export{s as Default,X as __namedExportsOrder,W as default};
//# sourceMappingURL=FPhoneInput.stories.6ec8fc06.js.map
