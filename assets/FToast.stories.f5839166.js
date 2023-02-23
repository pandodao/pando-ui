var a=Object.defineProperty;var n=(t,o)=>a(t,"name",{value:o,configurable:!0});import{r as i}from"./vue.esm-bundler.57aa1454.js";import{F as e}from"./FToast.75200401.js";import{F as p}from"./FButton.95509114.js";import"./VSnackbar.3bed6e44.js";import"./variant.58edd759.js";import"./useRender.0f3b6188.js";import"./helpers.ff98b59e.js";import"./color.5e70182f.js";import"./location.7ef01c4f.js";import"./locale.ce33eacd.js";import"./proxiedModel.aff93369.js";import"./anchor.8b678110.js";import"./position.6bb498a5.js";import"./rounded.638bf334.js";import"./VOverlay.2998aec7.js";import"./dimensions.2a6ee421.js";import"./easing.36b781ab.js";import"./transition.7787ec60.js";import"./router.359f3c68.js";import"./display.8ac49ecd.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.186db6a0.js";import"./VIcon.b7876f5b.js";import"./VBtn.ab71924f.js";import"./border.72c41e60.js";import"./density.5fc65f23.js";import"./elevation.08bb2882.js";import"./index.17c04f25.js";import"./loader.538ed1c8.js";import"./VProgressCircular.ce5720de.js";const K={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FToast.stories.f5839166.js.map
