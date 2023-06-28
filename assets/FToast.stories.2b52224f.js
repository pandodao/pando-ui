var a=Object.defineProperty;var n=(t,o)=>a(t,"name",{value:o,configurable:!0});import{r as i}from"./vue.esm-bundler.b09b7c5a.js";import{F as e}from"./FToast.3c9c610a.js";import{F as p}from"./FButton.7621db81.js";import"./VSnackbar.9a9fe2a4.js";import"./variant.fbd007cc.js";import"./color.7fbf1750.js";import"./helpers.4b349f1c.js";import"./location.b7cdffb8.js";import"./locale.88650f04.js";import"./proxiedModel.28fe5444.js";import"./anchor.b337e11f.js";import"./position.faf59b49.js";import"./rounded.28975b1c.js";import"./VOverlay.7cd76152.js";import"./router.b8d53e34.js";import"./easing.36b781ab.js";import"./transition.d2bea911.js";import"./display.c2299c89.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.810676cd.js";import"./VIcon.bd07cc2b.js";import"./VBtn.7921a3d1.js";import"./border.6019dc9f.js";import"./density.6083b2d4.js";import"./elevation.12d4edaf.js";import"./index.eca3ba9a.js";import"./loader.a0162f6e.js";import"./intersectionObserver.1e3a532e.js";import"./VProgressCircular.7bee339a.js";const J={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FToast.stories.2b52224f.js.map
