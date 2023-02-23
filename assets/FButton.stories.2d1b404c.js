var r=Object.defineProperty;var t=(n,e)=>r(n,"name",{value:e,configurable:!0});import{F as o}from"./FButton.95509114.js";import"./vue.esm-bundler.57aa1454.js";import"./VBtn.ab71924f.js";import"./border.72c41e60.js";import"./useRender.0f3b6188.js";import"./helpers.ff98b59e.js";import"./density.5fc65f23.js";import"./elevation.08bb2882.js";import"./rounded.638bf334.js";import"./VIcon.b7876f5b.js";import"./color.5e70182f.js";import"./variant.58edd759.js";import"./proxiedModel.aff93369.js";import"./index.17c04f25.js";import"./dimensions.2a6ee421.js";import"./loader.538ed1c8.js";import"./location.7ef01c4f.js";import"./locale.ce33eacd.js";import"./anchor.8b678110.js";import"./position.6bb498a5.js";import"./router.359f3c68.js";import"./VProgressCircular.ce5720de.js";const $={parameters:{storySource:{source:`import { FButton } from "./FButton";
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
//# sourceMappingURL=FButton.stories.2d1b404c.js.map
