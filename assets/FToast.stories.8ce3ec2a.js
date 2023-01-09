var a=Object.defineProperty;var n=(t,o)=>a(t,"name",{value:o,configurable:!0});import{r as i}from"./vue.esm-bundler.a5c4e1bf.js";import{F as e}from"./FToast.f9ed9694.js";import{F as p}from"./FButton.f3fc7c21.js";import"./VSnackbar.40a0d4da.js";import"./variant.b9606795.js";import"./useRender.c7ecffde.js";import"./helpers.cec2c044.js";import"./color.43314d1d.js";import"./position.d49ff30e.js";import"./locale.76e208ea.js";import"./proxiedModel.9639363f.js";import"./anchor.e4a88562.js";import"./rounded.a0c73c18.js";import"./scopeId.782553fc.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.74b7cee1.js";import"./dimensions.b6fbc401.js";import"./easing.36b781ab.js";import"./transition.c93b8895.js";import"./router.3d9f142b.js";import"./VDivider.c33525c0.js";import"./VIcon.5ca83e1b.js";import"./VBtn.b5444450.js";import"./border.0d2c7ad0.js";import"./density.b3e2de9a.js";import"./elevation.52b4704c.js";import"./index.1b40d9d7.js";import"./loader.7d1fab10.js";import"./VProgressCircular.ad6cc829.js";const J={parameters:{storySource:{source:`import { ref } from "vue";
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
  `}),"Template"),r=s.bind({});r.args={type:"success",message:"This is toast",action:{text:"Detail"}};const m=s.bind({});m.args={...r.args,message:"This is a loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog toast"};const K=["Default","LongText"];export{r as Default,m as LongText,K as __namedExportsOrder,J as default};
//# sourceMappingURL=FToast.stories.8ce3ec2a.js.map
