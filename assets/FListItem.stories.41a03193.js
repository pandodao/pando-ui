var r=Object.defineProperty;var o=(t,i)=>r(t,"name",{value:i,configurable:!0});import{F as n}from"./FListItem.39459486.js";import"./vue.esm-bundler.57aa1454.js";import"./VListItem.f12d2f11.js";import"./createSimpleFunctional.3ee3a08b.js";import"./useRender.0f3b6188.js";import"./helpers.ff98b59e.js";import"./index.17c04f25.js";import"./variant.58edd759.js";import"./color.5e70182f.js";import"./VIcon.b7876f5b.js";import"./border.72c41e60.js";import"./density.5fc65f23.js";import"./dimensions.2a6ee421.js";import"./elevation.08bb2882.js";import"./rounded.638bf334.js";import"./router.359f3c68.js";import"./proxiedModel.aff93369.js";import"./VAvatar.01c8c686.js";import"./VImg.040b2a14.js";import"./index.168f645e.js";import"./transition.7787ec60.js";const _={parameters:{storySource:{source:`import { FListItem } from "./FListItem";
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
//# sourceMappingURL=FListItem.stories.41a03193.js.map
