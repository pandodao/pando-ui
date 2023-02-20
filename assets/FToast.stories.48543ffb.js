var a=Object.defineProperty;var n=(t,o)=>a(t,"name",{value:o,configurable:!0});import{r as i}from"./vue.esm-bundler.06cbf4f3.js";import{F as e}from"./FToast.5a031a43.js";import{F as p}from"./FButton.042bb067.js";import"./VSnackbar.24cfd012.js";import"./variant.e4970577.js";import"./useRender.61aaf11b.js";import"./helpers.0ba19e05.js";import"./color.9c80aa54.js";import"./location.efb67ad2.js";import"./locale.7c7f5def.js";import"./proxiedModel.ffcb1955.js";import"./anchor.4d34e672.js";import"./position.f250096a.js";import"./rounded.ae3fe3ca.js";import"./VOverlay.99ed030c.js";import"./dimensions.f30e25d4.js";import"./easing.36b781ab.js";import"./transition.60048a78.js";import"./router.26e45b89.js";import"./display.f0408c25.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.9ab6906e.js";import"./VIcon.4e22765d.js";import"./VBtn.a6fb96e2.js";import"./border.386c98bf.js";import"./density.4e133a57.js";import"./elevation.906ca0d0.js";import"./index.0e1c0398.js";import"./loader.ff14b575.js";import"./VProgressCircular.32071c16.js";const K={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FToast.stories.48543ffb.js.map
