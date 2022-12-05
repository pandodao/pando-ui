var e=Object.defineProperty;var n=(t,o)=>e(t,"name",{value:o,configurable:!0});import{d as r}from"./vue.esm-bundler.0d7c29ee.js";import{F as s}from"./FToast.5b1fc8b0.js";import{F as i}from"./FButton.c94e3704.js";import{u as p}from"./toast.137985b1.js";import"./variant.f85b9fa5.js";import"./useRender.9e1e1323.js";import"./helpers.a29827d2.js";import"./color.a1d36358.js";import"./VBtn.aebc80dd.js";import"./proxiedModel.0134c68c.js";import"./density.1812b102.js";import"./elevation.b2f78cc5.js";import"./VIcon.27b7c9a9.js";import"./index.9418ce7a.js";import"./dimensions.512da313.js";import"./loader.dd2f3ca6.js";import"./locale.6d395d7c.js";import"./anchor.cecbc02b.js";import"./router.e34e74ab.js";import"./VProgressCircular.c944d5ab.js";import"./scopeId.7054761b.js";import"./forwardRefs.c5465513.js";import"./VOverlay.664db6e2.js";import"./easing.d7926d43.js";import"./transition.845f9488.js";import"./VDivider.23958762.js";const I={parameters:{storySource:{source:`import { ref } from "vue";
import { FToast } from "./FToast";
import { FButton } from "../FButton";
import { Meta, StoryFn } from "@storybook/vue3";
import { useToast } from "../../plugins/toast";

export default {
  name: "FToast",
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
      <FToast v-model="toast" v-bind="args">This is a toast</FToast>
    </div>
  \`,
});

export const Default = Template.bind({});
Default.args = { type: "success", action: { text: "Detail" } };

const Template2: StoryFn<typeof FToast> = (args) => ({
  setup() {
    const toast = useToast();
    const show = () =>
      toast.show({
        message: "This is a toast",
        type: ["success", "error", "warning"][
          Math.floor(Math.random() * 3)
        ] as any,
        ...args,
      });

    return { show, args };
  },
  template: \`
    <FButton color="primary" @click="show">Show</FButton>
  \`,
});

export const Functional = Template2.bind({});
Functional.args = {};
`,locationsMap:{default:{startLoc:{col:41,line:12},endLoc:{col:2,line:26},startBody:{col:41,line:12},endBody:{col:2,line:26}},functional:{startLoc:{col:42,line:31},endLoc:{col:2,line:48},startBody:{col:42,line:31},endBody:{col:2,line:48}}}}},name:"FToast",component:s},m=n(t=>({components:{FToast:s,FButton:i},setup(){const o=r(!1);return{args:t,toast:o,open:n(()=>o.value=!0,"open")}},template:`
    <div>
      <FButton color="primary" @click="open">Open</FButton>
      <FToast v-model="toast" v-bind="args">This is a toast</FToast>
    </div>
  `}),"Template"),c=m.bind({});c.args={type:"success",action:{text:"Detail"}};const l=n(t=>({setup(){const o=p();return{show:n(()=>o.show({message:"This is a toast",type:["success","error","warning"][Math.floor(Math.random()*3)],...t}),"show"),args:t}},template:`
    <FButton color="primary" @click="show">Show</FButton>
  `}),"Template2"),u=l.bind({});u.args={};const J=["Default","Functional"];export{c as Default,u as Functional,J as __namedExportsOrder,I as default};
//# sourceMappingURL=FToast.stories.c48ad7eb.js.map
