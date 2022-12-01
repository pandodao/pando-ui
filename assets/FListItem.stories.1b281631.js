var r=Object.defineProperty;var o=(t,i)=>r(t,"name",{value:i,configurable:!0});import{F as n}from"./FListItem.689549fe.js";import"./vue.esm-bundler.03d0f9c2.js";import"./createSimpleFunctional.80c809ed.js";import"./useRender.4b8f74ab.js";import"./helpers.11996f79.js";import"./index.71c8a79f.js";import"./variant.89df963d.js";import"./color.ec9b773d.js";import"./VIcon.48347d4a.js";import"./density.e2a6824c.js";import"./dimensions.4f68b75e.js";import"./elevation.ef328fb6.js";import"./router.6303e2ed.js";import"./proxiedModel.12bae561.js";import"./VAvatar.bb0c21d9.js";import"./VImg.40b0c651.js";import"./index.7705c375.js";import"./transition.37736cb0.js";const $={parameters:{storySource:{source:`import { FListItem } from "./FListItem";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  name: "FListItem",
  component: FListItem,
} as Meta<typeof FListItem>;

const Template: StoryFn<typeof FListItem> = (args) => ({
  components: { FListItem },
  setup() {
    return { args };
  },
  template: \`<FListItem border v-bind="args"></FListItem>\`,
});

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  subtitle: "Subtitle",
  appendIcon: "$next",
  prependIcon: "$FIconSetting",
};

export const WithoutIcons = Template.bind({});
WithoutIcons.args = { title: "Title", subtitle: "Subtitle" };

export const WithoutSubtitle = Template.bind({});
WithoutSubtitle.args = { title: "Title" };
`,locationsMap:{default:{startLoc:{col:44,line:9},endLoc:{col:2,line:15},startBody:{col:44,line:9},endBody:{col:2,line:15}},"without-icons":{startLoc:{col:44,line:9},endLoc:{col:2,line:15},startBody:{col:44,line:9},endBody:{col:2,line:15}},"without-subtitle":{startLoc:{col:44,line:9},endLoc:{col:2,line:15},startBody:{col:44,line:9},endBody:{col:2,line:15}}}}},name:"FListItem",component:n},e=o(t=>({components:{FListItem:n},setup(){return{args:t}},template:'<FListItem border v-bind="args"></FListItem>'}),"Template"),s=e.bind({});s.args={title:"Title",subtitle:"Subtitle",appendIcon:"$next",prependIcon:"$FIconSetting"};const l=e.bind({});l.args={title:"Title",subtitle:"Subtitle"};const m=e.bind({});m.args={title:"Title"};const v=["Default","WithoutIcons","WithoutSubtitle"];export{s as Default,l as WithoutIcons,m as WithoutSubtitle,v as __namedExportsOrder,$ as default};
//# sourceMappingURL=FListItem.stories.1b281631.js.map
