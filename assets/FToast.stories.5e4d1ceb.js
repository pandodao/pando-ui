var a=Object.defineProperty;var n=(t,o)=>a(t,"name",{value:o,configurable:!0});import{r as i}from"./vue.esm-bundler.caa622c4.js";import{F as e}from"./FToast.857c1390.js";import{F as p}from"./FButton.b7201e41.js";import"./VSnackbar.47bba482.js";import"./variant.6a05f8d1.js";import"./useRender.15f4f58d.js";import"./helpers.83369341.js";import"./color.795eceb6.js";import"./location.375c93f3.js";import"./locale.312c25a1.js";import"./proxiedModel.073d34a6.js";import"./anchor.57ff9838.js";import"./position.6630ce12.js";import"./rounded.bd8ad820.js";import"./VOverlay.a16b5884.js";import"./dimensions.1a78e179.js";import"./easing.36b781ab.js";import"./transition.712d10eb.js";import"./router.f4dceb95.js";import"./display.ef8c62e1.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.18b197de.js";import"./VIcon.f37f8177.js";import"./VBtn.abf41941.js";import"./border.ae4ccc68.js";import"./density.c07a8c02.js";import"./elevation.3fce6244.js";import"./index.4e4a2aa3.js";import"./loader.535d849b.js";import"./VProgressCircular.9b7ebd22.js";const K={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FToast.stories.5e4d1ceb.js.map
