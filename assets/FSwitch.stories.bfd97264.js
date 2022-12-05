var r=Object.defineProperty;var n=(t,o)=>r(t,"name",{value:o,configurable:!0});import{d as i}from"./vue.esm-bundler.0d7c29ee.js";import{F as e}from"./FSwitch.a0db7fb9.js";import"./VIcon.27b7c9a9.js";import"./useRender.9e1e1323.js";import"./helpers.a29827d2.js";import"./color.a1d36358.js";import"./density.1812b102.js";import"./proxiedModel.0134c68c.js";import"./index.9418ce7a.js";import"./VInput.76852b74.js";import"./locale.6d395d7c.js";import"./VMessages.5340d354.js";import"./index.e4eb9e0e.js";import"./transition.845f9488.js";import"./loader.dd2f3ca6.js";import"./VProgressCircular.c944d5ab.js";const M={parameters:{storySource:{source:`import { ref } from "vue";
import { FSwitch } from "./FSwitch";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  name: "FSwitch",
  component: FSwitch,
} as Meta<typeof FSwitch>;

const Template: StoryFn<typeof FSwitch> = (args) => ({
  components: { FSwitch },
  setup() {
    const switch1 = ref(false);

    return { args, switch1 };
  },
  template: \`
    <div>
      <FSwitch v-model="switch1" v-bind="args" />
      {{switch1}}
    </div>
  \`,
});

export const Default = Template.bind({});
Default.args = { outlined: true };
`,locationsMap:{default:{startLoc:{col:42,line:10},endLoc:{col:2,line:23},startBody:{col:42,line:10},endBody:{col:2,line:23}}}}},name:"FSwitch",component:e},s=n(t=>({components:{FSwitch:e},setup(){const o=i(!1);return{args:t,switch1:o}},template:`
    <div>
      <FSwitch v-model="switch1" v-bind="args" />
      {{switch1}}
    </div>
  `}),"Template"),c=s.bind({});c.args={outlined:!0};const T=["Default"];export{c as Default,T as __namedExportsOrder,M as default};
//# sourceMappingURL=FSwitch.stories.bfd97264.js.map
