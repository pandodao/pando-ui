var m=Object.defineProperty;var o=(t,e)=>m(t,"name",{value:e,configurable:!0});import{d as a}from"./vue.esm-bundler.03d0f9c2.js";import{F as n}from"./FSegmentControl.2c5abc7d.js";import{F as l}from"./FButton.2e1405fc.js";import"./color.ec9b773d.js";import"./helpers.11996f79.js";import"./useRender.4b8f74ab.js";import"./VBtn.a413b61a.js";import"./proxiedModel.12bae561.js";import"./variant.89df963d.js";import"./density.e2a6824c.js";import"./elevation.ef328fb6.js";import"./VIcon.48347d4a.js";import"./index.71c8a79f.js";import"./dimensions.4f68b75e.js";import"./loader.30593133.js";import"./locale.9f7d6233.js";import"./anchor.a0b334cc.js";import"./router.6303e2ed.js";import"./VProgressCircular.3dc750a1.js";const _={parameters:{storySource:{source:`import { ref } from "vue";
import { FSegmentControl } from "./FSegmentControl";
import { FButton } from "../FButton";
import { StoryFn, Meta } from "@storybook/vue3";

export default {
  name: "FSegmentControl",
  component: FSegmentControl,
} as Meta<typeof FSegmentControl>;

const Template: StoryFn<typeof FSegmentControl> = (args) => ({
  components: { FSegmentControl, FButton },
  setup() {
    const items = [
      { value: "week", text: "Week" },
      { value: "month", text: "Month" },
      { value: "year", text: "Year" },
    ];
    const current = ref("month");

    return { args, items, current };
  },
  template: \`
    <FSegmentControl v-model="current" :items="items" v-bind="args">
    </FSegmentControl>
    <div>{{current}}</div>
  \`,
});

export const Default = Template.bind({});
Default.args = { grow: false };
`,locationsMap:{default:{startLoc:{col:50,line:11},endLoc:{col:2,line:28},startBody:{col:50,line:11},endBody:{col:2,line:28}}}}},name:"FSegmentControl",component:n},i=o(t=>({components:{FSegmentControl:n,FButton:l},setup(){const e=[{value:"week",text:"Week"},{value:"month",text:"Month"},{value:"year",text:"Year"}],r=a("month");return{args:t,items:e,current:r}},template:`
    <FSegmentControl v-model="current" :items="items" v-bind="args">
    </FSegmentControl>
    <div>{{current}}</div>
  `}),"Template"),s=i.bind({});s.args={grow:!1};const L=["Default"];export{s as Default,L as __namedExportsOrder,_ as default};
//# sourceMappingURL=FSegmentControl.stories.f7dd7d3b.js.map
