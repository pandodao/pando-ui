var e=Object.defineProperty;var a=(o,t)=>e(o,"name",{value:t,configurable:!0});import{A as p,b as m,a as i,m as b}from"./vue.esm-bundler.330b8bcd.js";import{p as l}from"./useRender.b59b3e39.js";import{b as T,c}from"./VTabs.edd57fec.js";import"./helpers.6dbb45ef.js";import"./VIcon.c758310f.js";import"./color.66c7a00f.js";import"./VBtn.e55e9e37.js";import"./proxiedModel.815b9064.js";import"./border.8a30a617.js";import"./density.38f0f124.js";import"./elevation.b2f27a68.js";import"./rounded.257cff90.js";import"./variant.b259332f.js";import"./index.b967f916.js";import"./dimensions.6590eaa4.js";import"./loader.c202c022.js";import"./location.2cb2469d.js";import"./locale.0eda84ca.js";import"./anchor.7cdf4a4d.js";import"./position.03fcbfb6.js";import"./router.a6c113d7.js";import"./VProgressCircular.27e195cb.js";import"./easing.36b781ab.js";import"./index.a5e0d629.js";import"./display.b3319b10.js";const n=p({name:"FTabs",props:{narrow:Boolean},setup(o,{slots:t}){l({VTab:{ripple:!1}});const r={height:52},s=m(()=>["f-tabs",{"f-tabs--narrow":o.narrow}]);return()=>i(T,b(r,{class:s.value}),t)}}),G={parameters:{storySource:{source:`import { FTabs } from "./FTabs";
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
//# sourceMappingURL=FTabs.stories.a2247a71.js.map
