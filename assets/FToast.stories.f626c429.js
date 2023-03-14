var a=Object.defineProperty;var n=(t,o)=>a(t,"name",{value:o,configurable:!0});import{r as i}from"./vue.esm-bundler.62cdaeff.js";import{F as e}from"./FToast.8c3293b9.js";import{F as p}from"./FButton.7a11c708.js";import"./VSnackbar.5cad11aa.js";import"./variant.cb074882.js";import"./useRender.bb8a5a4c.js";import"./helpers.f37785d0.js";import"./color.5ac0909d.js";import"./location.8179a009.js";import"./locale.b4680344.js";import"./proxiedModel.c2b98033.js";import"./anchor.4b6c6135.js";import"./position.daea1c07.js";import"./rounded.9945cf4e.js";import"./VOverlay.49a3aceb.js";import"./dimensions.c27e6138.js";import"./easing.36b781ab.js";import"./transition.28d05801.js";import"./router.19d79a04.js";import"./display.21f5d2fe.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.1215dc57.js";import"./VIcon.ddcbca9b.js";import"./VBtn.2cacbcac.js";import"./border.744ce806.js";import"./density.a1d89e9f.js";import"./elevation.79ced88b.js";import"./index.f175e2d9.js";import"./loader.c48359f5.js";import"./VProgressCircular.5a613386.js";const K={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FToast.stories.f626c429.js.map
