var r=Object.defineProperty;var n=(t,o)=>r(t,"name",{value:o,configurable:!0});import{u as s}from"./toast.ca99ceb1.js";import"./vue.esm-bundler.b09b7c5a.js";import"./FToast.5b91172b.js";import"./VSnackbar.8d99b52c.js";import"./variant.eababd72.js";import"./useRender.5a19cee5.js";import"./helpers.4b349f1c.js";import"./color.1fec8f8e.js";import"./location.11c487f7.js";import"./locale.0dcd1420.js";import"./proxiedModel.f0d8de9f.js";import"./anchor.b337e11f.js";import"./position.6b49aae6.js";import"./rounded.ccd03645.js";import"./VOverlay.4718cec8.js";import"./dimensions.b549aab6.js";import"./easing.36b781ab.js";import"./transition.1a560eae.js";import"./router.524cabd1.js";import"./display.fd968d5a.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.a6c176d7.js";import"./VIcon.81f7ecc0.js";const E={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=toast.stories.73f4085d.js.map
