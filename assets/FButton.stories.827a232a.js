var r=Object.defineProperty;var t=(n,e)=>r(n,"name",{value:e,configurable:!0});import{F as o}from"./FButton.7621db81.js";import"./vue.esm-bundler.b09b7c5a.js";import"./VBtn.7921a3d1.js";import"./border.6019dc9f.js";import"./color.7fbf1750.js";import"./helpers.4b349f1c.js";import"./density.6083b2d4.js";import"./elevation.12d4edaf.js";import"./rounded.28975b1c.js";import"./VIcon.bd07cc2b.js";import"./variant.fbd007cc.js";import"./proxiedModel.28fe5444.js";import"./index.eca3ba9a.js";import"./router.b8d53e34.js";import"./loader.a0162f6e.js";import"./location.b7cdffb8.js";import"./locale.88650f04.js";import"./anchor.b337e11f.js";import"./intersectionObserver.1e3a532e.js";import"./position.faf59b49.js";import"./VProgressCircular.7bee339a.js";const k={parameters:{storySource:{source:`import { FButton } from "./FButton";
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
`,locationsMap:{color:{startLoc:{col:42,line:9},endLoc:{col:2,line:15},startBody:{col:42,line:9},endBody:{col:2,line:15}},text:{startLoc:{col:45,line:22},endLoc:{col:2,line:30},startBody:{col:45,line:22},endBody:{col:2,line:30}},sizes:{startLoc:{col:46,line:33},endLoc:{col:2,line:44},startBody:{col:46,line:33},endBody:{col:2,line:44}},icons:{startLoc:{col:46,line:46},endLoc:{col:2,line:58},startBody:{col:46,line:46},endBody:{col:2,line:58}}}}},title:"Components/FButton",component:o},l=t(n=>({components:{FButton:o},setup(){return{args:n}},template:'<FButton v-bind="args" :rounded="false">It is a Button</FButton>'}),"Template"),i=l.bind({});i.args={color:"primary",disabled:!1,loading:!1};const $=t(()=>({components:{FButton:o},template:`
    <div style="display: flex; gap: 16px;">
      <FButton text>Button</FButton>
      <FButton text color="primary">Button</FButton>
    </div>
  `}),"Text"),M=t(()=>({components:{FButton:o},template:`
    <div>
      <FButton color="primary" size="x-small">x-small</FButton>
      <FButton color="primary" size="small">small</FButton>
      <FButton color="primary" size="default">default</FButton>
      <FButton color="primary" size="large">large</FButton>
      <FButton color="primary" size="x-large">x-large</FButton>
    </div>
  `}),"Sizes"),_=t(()=>({components:{FButton:o},template:`
    <div style="display: flex; gap: 16px;">
      <FButton icon size="32">
        <VIcon>$back</VIcon>
      </FButton>
      <FButton icon disabled size="32">
        <VIcon>$back</VIcon>
      </FButton>
    </div>
  `}),"Icons"),E=["Color","Text","Sizes","Icons"];export{i as Color,_ as Icons,M as Sizes,$ as Text,E as __namedExportsOrder,k as default};
//# sourceMappingURL=FButton.stories.827a232a.js.map
