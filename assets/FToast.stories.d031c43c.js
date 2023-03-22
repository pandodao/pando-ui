var a=Object.defineProperty;var n=(t,o)=>a(t,"name",{value:o,configurable:!0});import{r as i}from"./vue.esm-bundler.3b29098a.js";import{F as e}from"./FToast.53bd4d10.js";import{F as p}from"./FButton.72dd92af.js";import"./VSnackbar.d3ebbd55.js";import"./variant.be65e42d.js";import"./useRender.3ca1765f.js";import"./helpers.e1d6c4cc.js";import"./color.fef4ce02.js";import"./location.3a6dce64.js";import"./locale.eccdb440.js";import"./proxiedModel.67252d17.js";import"./anchor.c52c8661.js";import"./position.6cc3b816.js";import"./rounded.375414e4.js";import"./VOverlay.e2cb60a6.js";import"./dimensions.c2f0e23c.js";import"./easing.36b781ab.js";import"./transition.94342caf.js";import"./router.6cb3b155.js";import"./display.f5b0b65d.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.cb2315f4.js";import"./VIcon.c254d683.js";import"./VBtn.7f6a0830.js";import"./border.d0444c35.js";import"./density.6dd2b9c7.js";import"./elevation.154beddf.js";import"./index.09e65b91.js";import"./loader.5b0d5ca4.js";import"./intersectionObserver.b06f0fb9.js";import"./VProgressCircular.c527f932.js";const N={parameters:{storySource:{source:`import { ref } from "vue";
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
  `}),"Template"),r=s.bind({});r.args={type:"success",message:"This is toast",action:{text:"Detail"}};const m=s.bind({});m.args={...r.args,message:"This is a loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog toast"};const P=["Default","LongText"];export{r as Default,m as LongText,P as __namedExportsOrder,N as default};
//# sourceMappingURL=FToast.stories.d031c43c.js.map
