var r=Object.defineProperty;var n=(t,o)=>r(t,"name",{value:o,configurable:!0});import{u as s}from"./toast.01919607.js";import"./vue.esm-bundler.9500adb2.js";import"./FToast.7c2e60bc.js";import"./VSnackbar.b37ed6f7.js";import"./variant.95637a5a.js";import"./useRender.44945942.js";import"./helpers.681e1792.js";import"./color.45246ddd.js";import"./location.c535e823.js";import"./locale.7efc9def.js";import"./proxiedModel.881d858e.js";import"./anchor.1afb8064.js";import"./position.427d9f74.js";import"./rounded.d16b72e9.js";import"./VOverlay.96b5c4e3.js";import"./dimensions.5f5b1dd8.js";import"./easing.36b781ab.js";import"./transition.10caf698.js";import"./router.6e1740fe.js";import"./display.9827c8ac.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.4dfba538.js";import"./VIcon.b10ecbaa.js";const E={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
import { useToast } from "./toast";

export default {
  title: "Plugin/Toast",
};

const Template: StoryFn = (args) => ({
  setup() {
    const toast = useToast();
    const open = () => {
      toast.show({
        message: "This is a toast",
        type: ["success", "error", "warning"][
          Math.floor(Math.random() * 3)
        ] as any,
        ...args,
      });
    };

    return { open };
  },
  template: \`
    <FButton color="primary" @click="open">Show Toast Modal</FButton>
  \`,
});

export const Default = Template.bind({});
Default.args = {};
`,locationsMap:{default:{startLoc:{col:26,line:8},endLoc:{col:2,line:26},startBody:{col:26,line:8},endBody:{col:2,line:26}}}}},title:"Plugin/Toast"},e=n(t=>({setup(){const o=s();return{open:n(()=>{o.show({message:"This is a toast",type:["success","error","warning"][Math.floor(Math.random()*3)],...t})},"open")}},template:`
    <FButton color="primary" @click="open">Show Toast Modal</FButton>
  `}),"Template"),a=e.bind({});a.args={};const O=["Default"];export{a as Default,O as __namedExportsOrder,E as default};
//# sourceMappingURL=toast.stories.bbb93282.js.map
