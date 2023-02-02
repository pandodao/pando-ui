var r=Object.defineProperty;var o=(t,i)=>r(t,"name",{value:i,configurable:!0});import{F as n}from"./FListItem.bc4f8297.js";import"./vue.esm-bundler.1ba604f9.js";import"./VListItem.d10786fb.js";import"./createSimpleFunctional.b271bf7a.js";import"./useRender.965bd6aa.js";import"./helpers.bd7a8d83.js";import"./index.27517d48.js";import"./variant.22bbbe86.js";import"./color.b891a321.js";import"./VIcon.518cdeb6.js";import"./border.c2063388.js";import"./density.8ac56fa2.js";import"./dimensions.721a2e0b.js";import"./elevation.7428fb70.js";import"./rounded.cb32523b.js";import"./router.ba883828.js";import"./proxiedModel.23143766.js";import"./VAvatar.d7e1c088.js";import"./VImg.2750fab4.js";import"./index.c125b6ad.js";import"./transition.ef0cc300.js";const _={parameters:{storySource:{source:`import { FListItem } from "./FListItem";
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
//# sourceMappingURL=FListItem.stories.cec0cb09.js.map
