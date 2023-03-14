var r=Object.defineProperty;var n=(t,o)=>r(t,"name",{value:o,configurable:!0});import{u as s}from"./toast.741ba85e.js";import"./vue.esm-bundler.62cdaeff.js";import"./FToast.8c3293b9.js";import"./VSnackbar.5cad11aa.js";import"./variant.cb074882.js";import"./useRender.bb8a5a4c.js";import"./helpers.f37785d0.js";import"./color.5ac0909d.js";import"./location.8179a009.js";import"./locale.b4680344.js";import"./proxiedModel.c2b98033.js";import"./anchor.4b6c6135.js";import"./position.daea1c07.js";import"./rounded.9945cf4e.js";import"./VOverlay.49a3aceb.js";import"./dimensions.c27e6138.js";import"./easing.36b781ab.js";import"./transition.28d05801.js";import"./router.19d79a04.js";import"./display.21f5d2fe.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.1215dc57.js";import"./VIcon.ddcbca9b.js";const E={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=toast.stories.ae1fe384.js.map
