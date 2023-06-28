var r=Object.defineProperty;var n=(t,o)=>r(t,"name",{value:o,configurable:!0});import{u as s}from"./toast.fb53eb8f.js";import"./vue.esm-bundler.b09b7c5a.js";import"./FToast.3c9c610a.js";import"./VSnackbar.9a9fe2a4.js";import"./variant.fbd007cc.js";import"./color.7fbf1750.js";import"./helpers.4b349f1c.js";import"./location.b7cdffb8.js";import"./locale.88650f04.js";import"./proxiedModel.28fe5444.js";import"./anchor.b337e11f.js";import"./position.faf59b49.js";import"./rounded.28975b1c.js";import"./VOverlay.7cd76152.js";import"./router.b8d53e34.js";import"./easing.36b781ab.js";import"./transition.d2bea911.js";import"./display.c2299c89.js";import"./forwardRefs.c003b6b8.js";import"./VDivider.810676cd.js";import"./VIcon.bd07cc2b.js";const P={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
  `}),"Template"),a=e.bind({});a.args={};const v=["Default"];export{a as Default,v as __namedExportsOrder,P as default};
//# sourceMappingURL=toast.stories.42858850.js.map
