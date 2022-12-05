var r=Object.defineProperty;var o=(t,i)=>r(t,"name",{value:i,configurable:!0});import{F as n}from"./FListItem.ffbaa156.js";import"./vue.esm-bundler.0d7c29ee.js";import"./createSimpleFunctional.e0d25bf4.js";import"./useRender.9e1e1323.js";import"./helpers.a29827d2.js";import"./index.9418ce7a.js";import"./variant.f85b9fa5.js";import"./color.a1d36358.js";import"./VIcon.27b7c9a9.js";import"./density.1812b102.js";import"./dimensions.512da313.js";import"./elevation.b2f78cc5.js";import"./router.e34e74ab.js";import"./proxiedModel.0134c68c.js";import"./VAvatar.b52a6938.js";import"./VImg.c981533d.js";import"./index.da6e5ccf.js";import"./transition.845f9488.js";const $={parameters:{storySource:{source:`import { FListItem } from "./FListItem";
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
//# sourceMappingURL=FListItem.stories.f0521270.js.map
