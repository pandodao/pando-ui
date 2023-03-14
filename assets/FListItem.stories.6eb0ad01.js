var r=Object.defineProperty;var o=(t,i)=>r(t,"name",{value:i,configurable:!0});import{F as n}from"./FListItem.2d41da5b.js";import"./vue.esm-bundler.62cdaeff.js";import"./VListItem.ad71f0c6.js";import"./createSimpleFunctional.f6324448.js";import"./useRender.bb8a5a4c.js";import"./helpers.f37785d0.js";import"./index.f175e2d9.js";import"./variant.cb074882.js";import"./color.5ac0909d.js";import"./VIcon.ddcbca9b.js";import"./border.744ce806.js";import"./density.a1d89e9f.js";import"./dimensions.c27e6138.js";import"./elevation.79ced88b.js";import"./rounded.9945cf4e.js";import"./router.19d79a04.js";import"./proxiedModel.c2b98033.js";import"./VAvatar.8eec326e.js";import"./VImg.485a2281.js";import"./index.68c608a7.js";import"./transition.28d05801.js";const _={parameters:{storySource:{source:`import { FListItem } from "./FListItem";
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
//# sourceMappingURL=FListItem.stories.6eb0ad01.js.map
