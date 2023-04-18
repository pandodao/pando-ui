var a=Object.defineProperty;var n=(t,o)=>a(t,"name",{value:o,configurable:!0});import{r as i}from"./vue.esm-bundler.9500adb2.js";import{F as e}from"./FToast.7c2e60bc.js";import{F as p}from"./FButton.d61383cc.js";import"./VSnackbar.b37ed6f7.js";import"./variant.95637a5a.js";import"./useRender.44945942.js";import"./helpers.681e1792.js";import"./color.45246ddd.js";import"./location.c535e823.js";import"./locale.7efc9def.js";import"./proxiedModel.881d858e.js";import"./anchor.1afb8064.js";import"./position.427d9f74.js";import"./rounded.d16b72e9.js";import"./VOverlay.96b5c4e3.js";import"./dimensions.5f5b1dd8.js";import"./easing.36b781ab.js";import"./transition.10caf698.js";import"./router.6e1740fe.js";import"./display.9827c8ac.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.4dfba538.js";import"./VIcon.b10ecbaa.js";import"./VBtn.b26bd4ae.js";import"./border.eebb6db1.js";import"./density.0c8fab1e.js";import"./elevation.d906eb56.js";import"./index.1967ded9.js";import"./loader.4d40f77d.js";import"./intersectionObserver.10253e57.js";import"./VProgressCircular.8b82923d.js";const N={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FToast.stories.40067845.js.map
