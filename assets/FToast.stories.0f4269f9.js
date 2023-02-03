var a=Object.defineProperty;var n=(t,o)=>a(t,"name",{value:o,configurable:!0});import{r as i}from"./vue.esm-bundler.330b8bcd.js";import{F as e}from"./FToast.8c42eeda.js";import{F as p}from"./FButton.d034f6f2.js";import"./VSnackbar.1d57f851.js";import"./variant.b259332f.js";import"./useRender.b59b3e39.js";import"./helpers.6dbb45ef.js";import"./color.66c7a00f.js";import"./location.2cb2469d.js";import"./locale.0eda84ca.js";import"./proxiedModel.815b9064.js";import"./anchor.7cdf4a4d.js";import"./position.03fcbfb6.js";import"./rounded.257cff90.js";import"./VOverlay.d681ab18.js";import"./dimensions.6590eaa4.js";import"./easing.36b781ab.js";import"./transition.d91c432b.js";import"./router.a6c113d7.js";import"./display.b3319b10.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.a69cf6f1.js";import"./VIcon.c758310f.js";import"./VBtn.e55e9e37.js";import"./border.8a30a617.js";import"./density.38f0f124.js";import"./elevation.b2f27a68.js";import"./index.b967f916.js";import"./loader.c202c022.js";import"./VProgressCircular.27e195cb.js";const K={parameters:{storySource:{source:`import { ref } from "vue";
import { FToast } from "./FToast";
import { FButton } from "../FButton";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FToast",
  component: FToast,
} as Meta<typeof FToast>;

const Template: StoryFn<typeof FToast> = (args) => ({
  components: { FToast, FButton },
  setup() {
    const toast = ref(false);
    const open = () => (toast.value = true);

    return { args, toast, open };
  },
  template: \`
    <div>
      <FButton color="primary" @click="open">Open</FButton>
      <FToast v-model="toast" v-bind="args">{{args.message}}</FToast>
    </div>
  \`,
});

export const Default = Template.bind({});
Default.args = {
  type: "success",
  message: "This is toast",
  action: { text: "Detail" },
};

export const LongText = Template.bind({});
LongText.args = {
  ...Default.args,
  message:
    "This is a loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog toast",
};
`,locationsMap:{default:{startLoc:{col:41,line:11},endLoc:{col:2,line:25},startBody:{col:41,line:11},endBody:{col:2,line:25}},"long-text":{startLoc:{col:41,line:11},endLoc:{col:2,line:25},startBody:{col:41,line:11},endBody:{col:2,line:25}}}}},title:"Components/FToast",component:e},s=n(t=>({components:{FToast:e,FButton:p},setup(){const o=i(!1);return{args:t,toast:o,open:n(()=>o.value=!0,"open")}},template:`
    <div>
      <FButton color="primary" @click="open">Open</FButton>
      <FToast v-model="toast" v-bind="args">{{args.message}}</FToast>
    </div>
  `}),"Template"),r=s.bind({});r.args={type:"success",message:"This is toast",action:{text:"Detail"}};const m=s.bind({});m.args={...r.args,message:"This is a loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog toast"};const N=["Default","LongText"];export{r as Default,m as LongText,N as __namedExportsOrder,K as default};
//# sourceMappingURL=FToast.stories.0f4269f9.js.map
