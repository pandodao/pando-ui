var e=Object.defineProperty;var a=(o,t)=>e(o,"name",{value:t,configurable:!0});import{z as p,b as m,a as i,m as b}from"./vue.esm-bundler.57aa1454.js";import{p as l}from"./useRender.0f3b6188.js";import{b as T,c}from"./VTabs.1a404a6a.js";import"./helpers.ff98b59e.js";import"./VIcon.b7876f5b.js";import"./color.5e70182f.js";import"./VBtn.ab71924f.js";import"./border.72c41e60.js";import"./density.5fc65f23.js";import"./elevation.08bb2882.js";import"./rounded.638bf334.js";import"./variant.58edd759.js";import"./proxiedModel.aff93369.js";import"./index.17c04f25.js";import"./dimensions.2a6ee421.js";import"./loader.538ed1c8.js";import"./location.7ef01c4f.js";import"./locale.ce33eacd.js";import"./anchor.8b678110.js";import"./position.6bb498a5.js";import"./router.359f3c68.js";import"./VProgressCircular.ce5720de.js";import"./easing.36b781ab.js";import"./index.5cb25ca4.js";import"./display.8ac49ecd.js";const n=p({name:"FTabs",props:{narrow:Boolean},setup(o,{slots:t}){l({VTab:{ripple:!1}});const r={height:52},s=m(()=>["f-tabs",{"f-tabs--narrow":o.narrow}]);return()=>i(T,b(r,{class:s.value}),t)}}),G={parameters:{storySource:{source:`import { FTabs } from "./FTabs";
import { VTab } from "vuetify/components";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FTabs",
  component: FTabs,
} as Meta<typeof FTabs>;

const Template: StoryFn<typeof FTabs> = (args) => ({
  components: { FTabs, VTab },
  setup() {
    return { args };
  },
  template: \`
    <FTabs v-bind="args">
      <VTab>
        <span>Supply</span>
      </VTab>
      <VTab>
        <span>Borrow</span>
      </VTab>
    </FTabs>
  \`,
});

export const Default = Template.bind({});
Default.args = { grow: false, narrow: false };
`,locationsMap:{default:{startLoc:{col:40,line:10},endLoc:{col:2,line:25},startBody:{col:40,line:10},endBody:{col:2,line:25}}}}},title:"Components/FTabs",component:n},f=a(o=>({components:{FTabs:n,VTab:c},setup(){return{args:o}},template:`
    <FTabs v-bind="args">
      <VTab>
        <span>Supply</span>
      </VTab>
      <VTab>
        <span>Borrow</span>
      </VTab>
    </FTabs>
  `}),"Template"),u=f.bind({});u.args={grow:!1,narrow:!1};const H=["Default"];export{u as Default,H as __namedExportsOrder,G as default};
//# sourceMappingURL=FTabs.stories.a86f1fcc.js.map
