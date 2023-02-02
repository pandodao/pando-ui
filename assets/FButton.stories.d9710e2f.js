var l=Object.defineProperty;var t=(n,e)=>l(n,"name",{value:e,configurable:!0});import{F as o}from"./FButton.da03e124.js";import"./vue.esm-bundler.1ba604f9.js";import"./VBtn.156ed533.js";import"./proxiedModel.23143766.js";import"./useRender.965bd6aa.js";import"./helpers.bd7a8d83.js";import"./border.c2063388.js";import"./density.8ac56fa2.js";import"./elevation.7428fb70.js";import"./rounded.cb32523b.js";import"./VIcon.518cdeb6.js";import"./color.b891a321.js";import"./variant.22bbbe86.js";import"./index.27517d48.js";import"./dimensions.721a2e0b.js";import"./loader.c9437e89.js";import"./location.f6b6fb7b.js";import"./locale.fb27b96c.js";import"./anchor.1637b665.js";import"./position.747eb4b6.js";import"./router.ba883828.js";import"./VProgressCircular.6a9473f8.js";const $={parameters:{storySource:{source:`import { FButton } from "./FButton";
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
        <VIcon>$back</VIcon>
      </FButton>
      <FButton icon disabled size="32">
        <VIcon>$back</VIcon>
      </FButton>
    </div>
  \`,
});
`,locationsMap:{color:{startLoc:{col:42,line:9},endLoc:{col:2,line:15},startBody:{col:42,line:9},endBody:{col:2,line:15}},text:{startLoc:{col:45,line:22},endLoc:{col:2,line:30},startBody:{col:45,line:22},endBody:{col:2,line:30}},sizes:{startLoc:{col:46,line:33},endLoc:{col:2,line:44},startBody:{col:46,line:33},endBody:{col:2,line:44}},icons:{startLoc:{col:46,line:46},endLoc:{col:2,line:58},startBody:{col:46,line:46},endBody:{col:2,line:58}}}}},title:"Components/FButton",component:o},r=t(n=>({components:{FButton:o},setup(){return{args:n}},template:'<FButton v-bind="args" :rounded="false">It is a Button</FButton>'}),"Template"),i=r.bind({});i.args={color:"primary",disabled:!1,loading:!1};const M=t(()=>({components:{FButton:o},template:`
    <div style="display: flex; gap: 16px;">
      <FButton text>Button</FButton>
      <FButton text color="primary">Button</FButton>
    </div>
  `}),"Text"),_=t(()=>({components:{FButton:o},template:`
    <div style="display: flex; gap: 16px;">
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
//# sourceMappingURL=FButton.stories.d9710e2f.js.map
