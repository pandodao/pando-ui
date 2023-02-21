var r=Object.defineProperty;var t=(n,e)=>r(n,"name",{value:e,configurable:!0});import{F as o}from"./FButton.7fb5afc5.js";import"./vue.esm-bundler.60beb779.js";import"./VBtn.76288723.js";import"./border.84bdbe82.js";import"./useRender.06ad421e.js";import"./helpers.f4a4e1c6.js";import"./density.3ab93966.js";import"./elevation.6146b715.js";import"./rounded.08843391.js";import"./VIcon.ccd22ecd.js";import"./color.7f161142.js";import"./variant.f60f637f.js";import"./proxiedModel.c4bc26c4.js";import"./index.d3586bd0.js";import"./dimensions.71f8bcb1.js";import"./loader.3ab44f13.js";import"./location.3f71a5c2.js";import"./locale.656e3084.js";import"./anchor.46190ad2.js";import"./position.31a6f1c1.js";import"./router.9cc51735.js";import"./VProgressCircular.1a876490.js";const $={parameters:{storySource:{source:`import { FButton } from "./FButton";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FButton",
  component: FButton,
} as Meta<typeof FButton>;

const Template: StoryFn<typeof FButton> = (args) => ({
  components: { FButton },
  setup() {
    return { args };
  },
  template: '<FButton v-bind="args" :rounded="false">It is a Button</FButton>',
});

// color
export const Color = Template.bind({});
Color.args = { color: "primary", disabled: false, loading: false };

// style
export const Text: StoryFn<typeof FButton> = () => ({
  components: { FButton },
  template: \`
    <div style="display: flex; gap: 16px;">
      <FButton text>Button</FButton>
      <FButton text color="primary">Button</FButton>
    </div>
  \`,
});

// size
export const Sizes: StoryFn<typeof FButton> = () => ({
  components: { FButton },
  template: \`
    <div>
      <FButton color="primary" size="x-small">x-small</FButton>
      <FButton color="primary" size="small">small</FButton>
      <FButton color="primary" size="default">default</FButton>
      <FButton color="primary" size="large">large</FButton>
      <FButton color="primary" size="x-large">x-large</FButton>
    </div>
  \`,
});

export const Icons: StoryFn<typeof FButton> = () => ({
  components: { FButton },
  template: \`
    <div style="display: flex; gap: 16px;">
      <FButton icon size="32">
        <VIcon>$back</VIcon>
      </FButton>
      <FButton icon disabled size="32">
        <VIcon>$back</VIcon>
      </FButton>
    </div>
  \`,
});
`,locationsMap:{color:{startLoc:{col:42,line:9},endLoc:{col:2,line:15},startBody:{col:42,line:9},endBody:{col:2,line:15}},text:{startLoc:{col:45,line:22},endLoc:{col:2,line:30},startBody:{col:45,line:22},endBody:{col:2,line:30}},sizes:{startLoc:{col:46,line:33},endLoc:{col:2,line:44},startBody:{col:46,line:33},endBody:{col:2,line:44}},icons:{startLoc:{col:46,line:46},endLoc:{col:2,line:58},startBody:{col:46,line:46},endBody:{col:2,line:58}}}}},title:"Components/FButton",component:o},l=t(n=>({components:{FButton:o},setup(){return{args:n}},template:'<FButton v-bind="args" :rounded="false">It is a Button</FButton>'}),"Template"),i=l.bind({});i.args={color:"primary",disabled:!1,loading:!1};const M=t(()=>({components:{FButton:o},template:`
    <div style="display: flex; gap: 16px;">
      <FButton text>Button</FButton>
      <FButton text color="primary">Button</FButton>
    </div>
  `}),"Text"),_=t(()=>({components:{FButton:o},template:`
    <div>
      <FButton color="primary" size="x-small">x-small</FButton>
      <FButton color="primary" size="small">small</FButton>
      <FButton color="primary" size="default">default</FButton>
      <FButton color="primary" size="large">large</FButton>
      <FButton color="primary" size="x-large">x-large</FButton>
    </div>
  `}),"Sizes"),E=t(()=>({components:{FButton:o},template:`
    <div style="display: flex; gap: 16px;">
      <FButton icon size="32">
        <VIcon>$back</VIcon>
      </FButton>
      <FButton icon disabled size="32">
        <VIcon>$back</VIcon>
      </FButton>
    </div>
  `}),"Icons"),O=["Color","Text","Sizes","Icons"];export{i as Color,E as Icons,_ as Sizes,M as Text,O as __namedExportsOrder,$ as default};
//# sourceMappingURL=FButton.stories.9f793b6d.js.map
