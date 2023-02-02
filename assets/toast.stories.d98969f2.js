var r=Object.defineProperty;var n=(t,o)=>r(t,"name",{value:o,configurable:!0});import{u as s}from"./toast.40fc08b3.js";import"./vue.esm-bundler.1ba604f9.js";import"./FToast.ec3eff7d.js";import"./VSnackbar.f31880f4.js";import"./variant.22bbbe86.js";import"./useRender.965bd6aa.js";import"./helpers.bd7a8d83.js";import"./color.b891a321.js";import"./location.f6b6fb7b.js";import"./locale.fb27b96c.js";import"./proxiedModel.23143766.js";import"./anchor.1637b665.js";import"./position.747eb4b6.js";import"./rounded.cb32523b.js";import"./VOverlay.16609424.js";import"./dimensions.721a2e0b.js";import"./easing.36b781ab.js";import"./transition.ef0cc300.js";import"./router.ba883828.js";import"./display.de7ed398.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.7223c023.js";import"./VIcon.518cdeb6.js";const E={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=toast.stories.d98969f2.js.map
