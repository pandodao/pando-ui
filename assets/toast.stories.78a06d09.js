var r=Object.defineProperty;var n=(t,o)=>r(t,"name",{value:o,configurable:!0});import{u as s}from"./toast.94d26868.js";import"./vue.esm-bundler.06cbf4f3.js";import"./FToast.5a031a43.js";import"./VSnackbar.24cfd012.js";import"./variant.e4970577.js";import"./useRender.61aaf11b.js";import"./helpers.0ba19e05.js";import"./color.9c80aa54.js";import"./location.efb67ad2.js";import"./locale.7c7f5def.js";import"./proxiedModel.ffcb1955.js";import"./anchor.4d34e672.js";import"./position.f250096a.js";import"./rounded.ae3fe3ca.js";import"./VOverlay.99ed030c.js";import"./dimensions.f30e25d4.js";import"./easing.36b781ab.js";import"./transition.60048a78.js";import"./router.26e45b89.js";import"./display.f0408c25.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.9ab6906e.js";import"./VIcon.4e22765d.js";const E={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=toast.stories.78a06d09.js.map
