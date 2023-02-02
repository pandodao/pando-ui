var a=Object.defineProperty;var n=(t,o)=>a(t,"name",{value:o,configurable:!0});import{r as i}from"./vue.esm-bundler.1ba604f9.js";import{F as e}from"./FToast.ec3eff7d.js";import{F as p}from"./FButton.da03e124.js";import"./VSnackbar.f31880f4.js";import"./variant.22bbbe86.js";import"./useRender.965bd6aa.js";import"./helpers.bd7a8d83.js";import"./color.b891a321.js";import"./location.f6b6fb7b.js";import"./locale.fb27b96c.js";import"./proxiedModel.23143766.js";import"./anchor.1637b665.js";import"./position.747eb4b6.js";import"./rounded.cb32523b.js";import"./VOverlay.16609424.js";import"./dimensions.721a2e0b.js";import"./easing.36b781ab.js";import"./transition.ef0cc300.js";import"./router.ba883828.js";import"./display.de7ed398.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.7223c023.js";import"./VIcon.518cdeb6.js";import"./VBtn.156ed533.js";import"./border.c2063388.js";import"./density.8ac56fa2.js";import"./elevation.7428fb70.js";import"./index.27517d48.js";import"./loader.c9437e89.js";import"./VProgressCircular.6a9473f8.js";const K={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FToast.stories.a2dd1ed5.js.map
