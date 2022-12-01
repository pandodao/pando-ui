var e=Object.defineProperty;var n=(t,o)=>e(t,"name",{value:o,configurable:!0});import{d as r}from"./vue.esm-bundler.03d0f9c2.js";import{F as s,u as i}from"./toast.1a8a22f2.js";import{F as p}from"./FButton.2e1405fc.js";import"./variant.89df963d.js";import"./useRender.4b8f74ab.js";import"./helpers.11996f79.js";import"./color.ec9b773d.js";import"./VBtn.a413b61a.js";import"./proxiedModel.12bae561.js";import"./density.e2a6824c.js";import"./elevation.ef328fb6.js";import"./VIcon.48347d4a.js";import"./index.71c8a79f.js";import"./dimensions.4f68b75e.js";import"./loader.30593133.js";import"./locale.9f7d6233.js";import"./anchor.a0b334cc.js";import"./router.6303e2ed.js";import"./VProgressCircular.3dc750a1.js";import"./scopeId.adb6c097.js";import"./forwardRefs.c5465513.js";import"./VOverlay.07008e41.js";import"./easing.d7926d43.js";import"./transition.37736cb0.js";import"./VDivider.19c63c46.js";const H={parameters:{storySource:{source:`import { ref } from "vue";
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
`,locationsMap:{default:{startLoc:{col:41,line:12},endLoc:{col:2,line:26},startBody:{col:41,line:12},endBody:{col:2,line:26}},functional:{startLoc:{col:42,line:31},endLoc:{col:2,line:48},startBody:{col:42,line:31},endBody:{col:2,line:48}}}}},name:"FToast",component:s},m=n(t=>({components:{FToast:s,FButton:p},setup(){const o=r(!1);return{args:t,toast:o,open:n(()=>o.value=!0,"open")}},template:`
    <div>
      <FButton color="primary" @click="open">Open</FButton>
      <FToast v-model="toast" v-bind="args">This is a toast</FToast>
    </div>
  `}),"Template"),c=m.bind({});c.args={type:"success",action:{text:"Detail"}};const l=n(t=>({setup(){const o=i();return{show:n(()=>o.show({message:"This is a toast",type:["success","error","warning"][Math.floor(Math.random()*3)],...t}),"show"),args:t}},template:`
    <FButton color="primary" @click="show">Show</FButton>
  `}),"Template2"),u=l.bind({});u.args={};const I=["Default","Functional"];export{c as Default,u as Functional,I as __namedExportsOrder,H as default};
//# sourceMappingURL=FToast.stories.c890f2b6.js.map
