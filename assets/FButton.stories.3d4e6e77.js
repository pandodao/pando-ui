var r=Object.defineProperty;var t=(n,l)=>r(n,"name",{value:l,configurable:!0});import{F as o}from"./FButton.c94e3704.js";import"./vue.esm-bundler.0d7c29ee.js";import"./VBtn.aebc80dd.js";import"./proxiedModel.0134c68c.js";import"./useRender.9e1e1323.js";import"./helpers.a29827d2.js";import"./variant.f85b9fa5.js";import"./color.a1d36358.js";import"./density.1812b102.js";import"./elevation.b2f78cc5.js";import"./VIcon.27b7c9a9.js";import"./index.9418ce7a.js";import"./dimensions.512da313.js";import"./loader.dd2f3ca6.js";import"./locale.6d395d7c.js";import"./anchor.cecbc02b.js";import"./router.e34e74ab.js";import"./VProgressCircular.c944d5ab.js";const h={parameters:{storySource:{source:`import { FButton } from "./FButton";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  name: "FButton",
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
Color.args = { color: "primary" };

// disabled
export const Disabled = Template.bind({});
Disabled.args = { disabled: true, color: "primary" };

// loading
export const Loading = Template.bind({});
Loading.args = { loading: true, color: "primary" };

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
    <div style="display: flex; gap: 16px;">
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
        <VIcon>$FIconUpRightBold</VIcon>
      </FButton>
      <FButton icon disabled size="32">
        <VIcon>$FIconUpRightBold</VIcon>
      </FButton>
    </div>
  \`,
});
`,locationsMap:{color:{startLoc:{col:42,line:9},endLoc:{col:2,line:15},startBody:{col:42,line:9},endBody:{col:2,line:15}},disabled:{startLoc:{col:42,line:9},endLoc:{col:2,line:15},startBody:{col:42,line:9},endBody:{col:2,line:15}},loading:{startLoc:{col:42,line:9},endLoc:{col:2,line:15},startBody:{col:42,line:9},endBody:{col:2,line:15}},text:{startLoc:{col:45,line:30},endLoc:{col:2,line:38},startBody:{col:45,line:30},endBody:{col:2,line:38}},sizes:{startLoc:{col:46,line:41},endLoc:{col:2,line:52},startBody:{col:46,line:41},endBody:{col:2,line:52}},icons:{startLoc:{col:46,line:54},endLoc:{col:2,line:66},startBody:{col:46,line:54},endBody:{col:2,line:66}}}}},name:"FButton",component:o},e=t(n=>({components:{FButton:o},setup(){return{args:n}},template:'<FButton v-bind="args" :rounded="false">It is a Button</FButton>'}),"Template"),i=e.bind({});i.args={color:"primary"};const a=e.bind({});a.args={disabled:!0,color:"primary"};const s=e.bind({});s.args={loading:!0,color:"primary"};const C=t(()=>({components:{FButton:o},template:`
    <div style="display: flex; gap: 16px;">
      <FButton text>Button</FButton>
      <FButton text color="primary">Button</FButton>
    </div>
  `}),"Text"),D=t(()=>({components:{FButton:o},template:`
    <div style="display: flex; gap: 16px;">
      <FButton color="primary" size="x-small">x-small</FButton>
      <FButton color="primary" size="small">small</FButton>
      <FButton color="primary" size="default">default</FButton>
      <FButton color="primary" size="large">large</FButton>
      <FButton color="primary" size="x-large">x-large</FButton>
    </div>
  `}),"Sizes"),R=t(()=>({components:{FButton:o},template:`
    <div style="display: flex; gap: 16px;">
      <FButton icon size="32">
        <VIcon>$FIconUpRightBold</VIcon>
      </FButton>
      <FButton icon disabled size="32">
        <VIcon>$FIconUpRightBold</VIcon>
      </FButton>
    </div>
  `}),"Icons"),U=["Color","Disabled","Loading","Text","Sizes","Icons"];export{i as Color,a as Disabled,R as Icons,s as Loading,D as Sizes,C as Text,U as __namedExportsOrder,h as default};
//# sourceMappingURL=FButton.stories.3d4e6e77.js.map
