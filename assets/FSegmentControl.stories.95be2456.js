var m=Object.defineProperty;var o=(t,e)=>m(t,"name",{value:e,configurable:!0});import{d as a}from"./vue.esm-bundler.0d7c29ee.js";import{F as n}from"./FSegmentControl.b096dbf1.js";import{F as l}from"./FButton.c94e3704.js";import"./color.a1d36358.js";import"./helpers.a29827d2.js";import"./useRender.9e1e1323.js";import"./VBtn.aebc80dd.js";import"./proxiedModel.0134c68c.js";import"./variant.f85b9fa5.js";import"./density.1812b102.js";import"./elevation.b2f78cc5.js";import"./VIcon.27b7c9a9.js";import"./index.9418ce7a.js";import"./dimensions.512da313.js";import"./loader.dd2f3ca6.js";import"./locale.6d395d7c.js";import"./anchor.cecbc02b.js";import"./router.e34e74ab.js";import"./VProgressCircular.c944d5ab.js";const _={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FSegmentControl.stories.95be2456.js.map
