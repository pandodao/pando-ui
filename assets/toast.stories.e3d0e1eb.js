var r=Object.defineProperty;var n=(t,o)=>r(t,"name",{value:o,configurable:!0});import{u as s}from"./toast.4a0832c2.js";import"./vue.esm-bundler.330b8bcd.js";import"./FToast.8c42eeda.js";import"./VSnackbar.1d57f851.js";import"./variant.b259332f.js";import"./useRender.b59b3e39.js";import"./helpers.6dbb45ef.js";import"./color.66c7a00f.js";import"./location.2cb2469d.js";import"./locale.0eda84ca.js";import"./proxiedModel.815b9064.js";import"./anchor.7cdf4a4d.js";import"./position.03fcbfb6.js";import"./rounded.257cff90.js";import"./VOverlay.d681ab18.js";import"./dimensions.6590eaa4.js";import"./easing.36b781ab.js";import"./transition.d91c432b.js";import"./router.a6c113d7.js";import"./display.b3319b10.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.a69cf6f1.js";import"./VIcon.c758310f.js";const E={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=toast.stories.e3d0e1eb.js.map
