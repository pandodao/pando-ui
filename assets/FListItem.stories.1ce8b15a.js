var r=Object.defineProperty;var o=(t,i)=>r(t,"name",{value:i,configurable:!0});import{F as n}from"./FListItem.f16980b8.js";import"./vue.esm-bundler.06cbf4f3.js";import"./VListItem.52553c7c.js";import"./createSimpleFunctional.917a427b.js";import"./useRender.61aaf11b.js";import"./helpers.0ba19e05.js";import"./index.0e1c0398.js";import"./variant.e4970577.js";import"./color.9c80aa54.js";import"./VIcon.4e22765d.js";import"./border.386c98bf.js";import"./density.4e133a57.js";import"./dimensions.f30e25d4.js";import"./elevation.906ca0d0.js";import"./rounded.ae3fe3ca.js";import"./router.26e45b89.js";import"./proxiedModel.ffcb1955.js";import"./VAvatar.d0341de2.js";import"./VImg.601fba1e.js";import"./index.667911d0.js";import"./transition.60048a78.js";const _={parameters:{storySource:{source:`import { FListItem } from "./FListItem";
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
//# sourceMappingURL=FListItem.stories.1ce8b15a.js.map
