var r=Object.defineProperty;var n=(t,o)=>r(t,"name",{value:o,configurable:!0});import{u as s}from"./toast.7664692e.js";import"./vue.esm-bundler.80cafc0b.js";import"./FToast.ba94b24b.js";import"./VSnackbar.285c8d85.js";import"./VOverlay.a7e28035.js";import"./proxiedModel.dbd4de1d.js";import"./color.7ba4ffe3.js";import"./helpers.32675158.js";import"./easing.da2e9236.js";import"./anchor.5ba72fdd.js";import"./router.9241c2dd.js";import"./display.1ed39e23.js";import"./locale.68d0262d.js";import"./transition.b6a16e6c.js";import"./forwardRefs.34034356.js";import"./VProgressLinear.23574e13.js";import"./intersectionObserver.addd26f6.js";import"./rounded.b42653ce.js";import"./VIcon.ac9f05d6.js";import"./position.19a0d7a5.js";import"./variant.1e842247.js";import"./VDefaultsProvider.522cf1e0.js";import"./VDivider.7c8b3fdb.js";const E={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=toast.stories.5a557f4c.js.map
