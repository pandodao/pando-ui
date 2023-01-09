var r=Object.defineProperty;var n=(t,o)=>r(t,"name",{value:o,configurable:!0});import{u as s}from"./toast.d9382d0f.js";import"./vue.esm-bundler.a5c4e1bf.js";import"./FToast.f9ed9694.js";import"./VSnackbar.40a0d4da.js";import"./variant.b9606795.js";import"./useRender.c7ecffde.js";import"./helpers.cec2c044.js";import"./color.43314d1d.js";import"./position.d49ff30e.js";import"./locale.76e208ea.js";import"./proxiedModel.9639363f.js";import"./anchor.e4a88562.js";import"./rounded.a0c73c18.js";import"./scopeId.782553fc.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.74b7cee1.js";import"./dimensions.b6fbc401.js";import"./easing.36b781ab.js";import"./transition.c93b8895.js";import"./router.3d9f142b.js";import"./VDivider.c33525c0.js";import"./VIcon.5ca83e1b.js";const v={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
  `}),"Template"),a=e.bind({});a.args={};const E=["Default"];export{a as Default,E as __namedExportsOrder,v as default};
//# sourceMappingURL=toast.stories.3ffea779.js.map
