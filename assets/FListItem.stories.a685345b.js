var r=Object.defineProperty;var o=(t,i)=>r(t,"name",{value:i,configurable:!0});import{F as n}from"./FListItem.cae78cf5.js";import"./vue.esm-bundler.a5c4e1bf.js";import"./VListItem.c102cb0b.js";import"./createSimpleFunctional.f00f4b71.js";import"./useRender.c7ecffde.js";import"./helpers.cec2c044.js";import"./index.1b40d9d7.js";import"./variant.b9606795.js";import"./color.43314d1d.js";import"./VIcon.5ca83e1b.js";import"./border.0d2c7ad0.js";import"./density.b3e2de9a.js";import"./dimensions.b6fbc401.js";import"./elevation.52b4704c.js";import"./rounded.a0c73c18.js";import"./router.3d9f142b.js";import"./proxiedModel.9639363f.js";import"./VAvatar.da185431.js";import"./VImg.19441548.js";import"./index.549b0914.js";import"./transition.c93b8895.js";const _={parameters:{storySource:{source:`import { FListItem } from "./FListItem";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FListItem",
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
`,locationsMap:{default:{startLoc:{col:44,line:9},endLoc:{col:2,line:15},startBody:{col:44,line:9},endBody:{col:2,line:15}},"without-icons":{startLoc:{col:44,line:9},endLoc:{col:2,line:15},startBody:{col:44,line:9},endBody:{col:2,line:15}},"without-subtitle":{startLoc:{col:44,line:9},endLoc:{col:2,line:15},startBody:{col:44,line:9},endBody:{col:2,line:15}}}}},title:"Components/FListItem",component:n},e=o(t=>({components:{FListItem:n},setup(){return{args:t}},template:'<FListItem border v-bind="args"></FListItem>'}),"Template"),s=e.bind({});s.args={title:"Title",subtitle:"Subtitle",appendIcon:"$next",prependIcon:"$FIconSetting"};const l=e.bind({});l.args={title:"Title",subtitle:"Subtitle"};const p=e.bind({});p.args={title:"Title"};const w=["Default","WithoutIcons","WithoutSubtitle"];export{s as Default,l as WithoutIcons,p as WithoutSubtitle,w as __namedExportsOrder,_ as default};
//# sourceMappingURL=FListItem.stories.a685345b.js.map
