var e=Object.defineProperty;var a=(o,t)=>e(o,"name",{value:t,configurable:!0});import{z as p,b as m,a as i,m as b}from"./vue.esm-bundler.3b29098a.js";import{p as l}from"./useRender.3ca1765f.js";import{b as T,c}from"./VTabs.59482baf.js";import"./helpers.e1d6c4cc.js";import"./VIcon.c254d683.js";import"./color.fef4ce02.js";import"./VBtn.7f6a0830.js";import"./border.d0444c35.js";import"./density.6dd2b9c7.js";import"./elevation.154beddf.js";import"./rounded.375414e4.js";import"./variant.be65e42d.js";import"./proxiedModel.67252d17.js";import"./index.09e65b91.js";import"./dimensions.c2f0e23c.js";import"./loader.5b0d5ca4.js";import"./location.3a6dce64.js";import"./locale.eccdb440.js";import"./anchor.c52c8661.js";import"./intersectionObserver.b06f0fb9.js";import"./position.6cc3b816.js";import"./router.6cb3b155.js";import"./VProgressCircular.c527f932.js";import"./easing.36b781ab.js";import"./index.f8ee2712.js";import"./display.f5b0b65d.js";const r=p({name:"FTabs",props:{narrow:Boolean},setup(o,{slots:t}){l({VTab:{ripple:!1}});const n={height:52},s=m(()=>["f-tabs",{"f-tabs--narrow":o.narrow}]);return()=>i(T,b(n,{class:s.value}),t)}}),H={parameters:{storySource:{source:`import { FTabs } from "./FTabs";
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
`,locationsMap:{default:{startLoc:{col:40,line:10},endLoc:{col:2,line:25},startBody:{col:40,line:10},endBody:{col:2,line:25}}}}},title:"Components/FTabs",component:r},f=a(o=>({components:{FTabs:r,VTab:c},setup(){return{args:o}},template:`
    <FTabs v-bind="args">
      <VTab>
        <span>Supply</span>
      </VTab>
      <VTab>
        <span>Borrow</span>
      </VTab>
    </FTabs>
  `}),"Template"),u=f.bind({});u.args={grow:!1,narrow:!1};const I=["Default"];export{u as Default,I as __namedExportsOrder,H as default};
//# sourceMappingURL=FTabs.stories.958f061e.js.map
