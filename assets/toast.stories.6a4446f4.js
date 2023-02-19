var r=Object.defineProperty;var n=(t,o)=>r(t,"name",{value:o,configurable:!0});import{u as s}from"./toast.448ab3d5.js";import"./vue.esm-bundler.caa622c4.js";import"./FToast.857c1390.js";import"./VSnackbar.47bba482.js";import"./variant.6a05f8d1.js";import"./useRender.15f4f58d.js";import"./helpers.83369341.js";import"./color.795eceb6.js";import"./location.375c93f3.js";import"./locale.312c25a1.js";import"./proxiedModel.073d34a6.js";import"./anchor.57ff9838.js";import"./position.6630ce12.js";import"./rounded.bd8ad820.js";import"./VOverlay.a16b5884.js";import"./dimensions.1a78e179.js";import"./easing.36b781ab.js";import"./transition.712d10eb.js";import"./router.f4dceb95.js";import"./display.ef8c62e1.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.18b197de.js";import"./VIcon.f37f8177.js";const E={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=toast.stories.6a4446f4.js.map
