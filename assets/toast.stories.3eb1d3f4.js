var r=Object.defineProperty;var n=(t,o)=>r(t,"name",{value:o,configurable:!0});import{u as s}from"./toast.388d9822.js";import"./vue.esm-bundler.57aa1454.js";import"./FToast.75200401.js";import"./VSnackbar.3bed6e44.js";import"./variant.58edd759.js";import"./useRender.0f3b6188.js";import"./helpers.ff98b59e.js";import"./color.5e70182f.js";import"./location.7ef01c4f.js";import"./locale.ce33eacd.js";import"./proxiedModel.aff93369.js";import"./anchor.8b678110.js";import"./position.6bb498a5.js";import"./rounded.638bf334.js";import"./VOverlay.2998aec7.js";import"./dimensions.2a6ee421.js";import"./easing.36b781ab.js";import"./transition.7787ec60.js";import"./router.359f3c68.js";import"./display.8ac49ecd.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.186db6a0.js";import"./VIcon.b7876f5b.js";const E={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=toast.stories.3eb1d3f4.js.map
