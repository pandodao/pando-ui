var r=Object.defineProperty;var n=(t,o)=>r(t,"name",{value:o,configurable:!0});import{d as i}from"./vue.esm-bundler.03d0f9c2.js";import{F as e}from"./FSwitch.c74b1e1a.js";import"./VIcon.48347d4a.js";import"./useRender.4b8f74ab.js";import"./helpers.11996f79.js";import"./color.ec9b773d.js";import"./density.e2a6824c.js";import"./proxiedModel.12bae561.js";import"./index.71c8a79f.js";import"./VLabel.f4f94bb7.js";import"./locale.9f7d6233.js";import"./VMessages.cbf0f59f.js";import"./index.98b5e059.js";import"./transition.37736cb0.js";import"./loader.30593133.js";import"./VProgressCircular.3dc750a1.js";const M={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FSwitch.stories.669c080f.js.map
