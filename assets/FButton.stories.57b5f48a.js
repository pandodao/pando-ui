var l=Object.defineProperty;var t=(n,e)=>l(n,"name",{value:e,configurable:!0});import{F as o}from"./FButton.042bb067.js";import"./vue.esm-bundler.06cbf4f3.js";import"./VBtn.a6fb96e2.js";import"./proxiedModel.ffcb1955.js";import"./useRender.61aaf11b.js";import"./helpers.0ba19e05.js";import"./border.386c98bf.js";import"./density.4e133a57.js";import"./elevation.906ca0d0.js";import"./rounded.ae3fe3ca.js";import"./VIcon.4e22765d.js";import"./color.9c80aa54.js";import"./variant.e4970577.js";import"./index.0e1c0398.js";import"./dimensions.f30e25d4.js";import"./loader.ff14b575.js";import"./location.efb67ad2.js";import"./locale.7c7f5def.js";import"./anchor.4d34e672.js";import"./position.f250096a.js";import"./router.26e45b89.js";import"./VProgressCircular.32071c16.js";const $={parameters:{storySource:{source:`import { FButton } from "./FButton";
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
//# sourceMappingURL=FButton.stories.57b5f48a.js.map
