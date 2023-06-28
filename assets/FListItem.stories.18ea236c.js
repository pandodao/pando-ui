var r=Object.defineProperty;var o=(t,i)=>r(t,"name",{value:i,configurable:!0});import{F as n}from"./FListItem.c2eb778d.js";import"./vue.esm-bundler.b09b7c5a.js";import"./VListItem.f3bec281.js";import"./createSimpleFunctional.6499d319.js";import"./color.7fbf1750.js";import"./helpers.4b349f1c.js";import"./index.eca3ba9a.js";import"./variant.fbd007cc.js";import"./VIcon.bd07cc2b.js";import"./border.6019dc9f.js";import"./density.6083b2d4.js";import"./router.b8d53e34.js";import"./elevation.12d4edaf.js";import"./rounded.28975b1c.js";import"./proxiedModel.28fe5444.js";import"./VAvatar.95d7d85f.js";import"./VImg.11b5f250.js";import"./index.8137a4d7.js";import"./transition.d2bea911.js";const v={parameters:{storySource:{source:`import { FListItem } from "./FListItem";
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
`,locationsMap:{default:{startLoc:{col:44,line:9},endLoc:{col:2,line:15},startBody:{col:44,line:9},endBody:{col:2,line:15}},"without-icons":{startLoc:{col:44,line:9},endLoc:{col:2,line:15},startBody:{col:44,line:9},endBody:{col:2,line:15}},"without-subtitle":{startLoc:{col:44,line:9},endLoc:{col:2,line:15},startBody:{col:44,line:9},endBody:{col:2,line:15}}}}},title:"Components/FListItem",component:n},e=o(t=>({components:{FListItem:n},setup(){return{args:t}},template:'<FListItem border v-bind="args"></FListItem>'}),"Template"),s=e.bind({});s.args={title:"Title",subtitle:"Subtitle",appendIcon:"$next",prependIcon:"$FIconSetting"};const l=e.bind({});l.args={title:"Title",subtitle:"Subtitle"};const p=e.bind({});p.args={title:"Title"};const M=["Default","WithoutIcons","WithoutSubtitle"];export{s as Default,l as WithoutIcons,p as WithoutSubtitle,M as __namedExportsOrder,v as default};
//# sourceMappingURL=FListItem.stories.18ea236c.js.map
