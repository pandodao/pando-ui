var a=Object.defineProperty;var n=(t,o)=>a(t,"name",{value:o,configurable:!0});import{r as i}from"./vue.esm-bundler.60beb779.js";import{F as e}from"./FToast.60b04ff3.js";import{F as p}from"./FButton.7fb5afc5.js";import"./VSnackbar.0e6f9429.js";import"./variant.f60f637f.js";import"./useRender.06ad421e.js";import"./helpers.f4a4e1c6.js";import"./color.7f161142.js";import"./location.3f71a5c2.js";import"./locale.656e3084.js";import"./proxiedModel.c4bc26c4.js";import"./anchor.46190ad2.js";import"./position.31a6f1c1.js";import"./rounded.08843391.js";import"./VOverlay.6564e1f3.js";import"./dimensions.71f8bcb1.js";import"./easing.36b781ab.js";import"./transition.d5d90e7e.js";import"./router.9cc51735.js";import"./display.49866675.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.7d468152.js";import"./VIcon.ccd22ecd.js";import"./VBtn.76288723.js";import"./border.84bdbe82.js";import"./density.3ab93966.js";import"./elevation.6146b715.js";import"./index.d3586bd0.js";import"./loader.3ab44f13.js";import"./VProgressCircular.1a876490.js";const K={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FToast.stories.bfc43544.js.map
