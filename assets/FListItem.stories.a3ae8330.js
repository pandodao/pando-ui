var r=Object.defineProperty;var o=(t,i)=>r(t,"name",{value:i,configurable:!0});import{F as n}from"./FListItem.b2ca06e9.js";import"./vue.esm-bundler.80cafc0b.js";import"./VListItem.da04c970.js";import"./createSimpleFunctional.19425ddc.js";import"./color.7ba4ffe3.js";import"./helpers.32675158.js";import"./border.b14058ef.js";import"./density.e2c1329b.js";import"./router.9241c2dd.js";import"./elevation.8d0c61c6.js";import"./VIcon.ac9f05d6.js";import"./proxiedModel.dbd4de1d.js";import"./rounded.b42653ce.js";import"./variant.1e842247.js";import"./index.d4fa9fd4.js";import"./VAvatar.7760fc0a.js";import"./VImg.78b97665.js";import"./transition.b6a16e6c.js";import"./index.f2b6c1e4.js";import"./VDefaultsProvider.522cf1e0.js";const M={parameters:{storySource:{source:`import { FListItem } from "./FListItem";
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
`,locationsMap:{default:{startLoc:{col:44,line:9},endLoc:{col:2,line:15},startBody:{col:44,line:9},endBody:{col:2,line:15}},"without-icons":{startLoc:{col:44,line:9},endLoc:{col:2,line:15},startBody:{col:44,line:9},endBody:{col:2,line:15}},"without-subtitle":{startLoc:{col:44,line:9},endLoc:{col:2,line:15},startBody:{col:44,line:9},endBody:{col:2,line:15}}}}},title:"Components/FListItem",component:n},e=o(t=>({components:{FListItem:n},setup(){return{args:t}},template:'<FListItem border v-bind="args"></FListItem>'}),"Template"),s=e.bind({});s.args={title:"Title",subtitle:"Subtitle",appendIcon:"$next",prependIcon:"$FIconSetting"};const l=e.bind({});l.args={title:"Title",subtitle:"Subtitle"};const p=e.bind({});p.args={title:"Title"};const _=["Default","WithoutIcons","WithoutSubtitle"];export{s as Default,l as WithoutIcons,p as WithoutSubtitle,_ as __namedExportsOrder,M as default};
//# sourceMappingURL=FListItem.stories.a3ae8330.js.map
