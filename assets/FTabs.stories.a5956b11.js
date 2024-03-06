var e=Object.defineProperty;var a=(o,t)=>e(o,"name",{value:t,configurable:!0});import{D as p,b as m,a as i,m as b}from"./vue.esm-bundler.80cafc0b.js";import{h as l}from"./color.7ba4ffe3.js";import{V as T,a as c}from"./VTabs.c1889508.js";import"./helpers.32675158.js";import"./VBtn.ce544012.js";import"./border.b14058ef.js";import"./density.e2c1329b.js";import"./elevation.8d0c61c6.js";import"./rounded.b42653ce.js";import"./VIcon.ac9f05d6.js";import"./variant.1e842247.js";import"./proxiedModel.dbd4de1d.js";import"./router.9241c2dd.js";import"./loader.5e66d0fd.js";import"./VProgressLinear.23574e13.js";import"./intersectionObserver.addd26f6.js";import"./locale.68d0262d.js";import"./anchor.5ba72fdd.js";import"./position.19a0d7a5.js";import"./index.d4fa9fd4.js";import"./VDefaultsProvider.522cf1e0.js";import"./VProgressCircular.fec55325.js";import"./forwardRefs.34034356.js";import"./easing.da2e9236.js";import"./VSlideGroup.0c7c4a56.js";import"./index.b676db0f.js";import"./display.1ed39e23.js";const r=p({name:"FTabs",props:{narrow:Boolean},setup(o,{slots:t}){l({VTab:{ripple:!1}});const n={height:52},s=m(()=>["f-tabs",{"f-tabs--narrow":o.narrow}]);return()=>i(T,b(n,{class:s.value}),t)}}),I={parameters:{storySource:{source:`import { FTabs } from "./FTabs";
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
  `}),"Template"),u=f.bind({});u.args={grow:!1,narrow:!1};const J=["Default"];export{u as Default,J as __namedExportsOrder,I as default};
//# sourceMappingURL=FTabs.stories.a5956b11.js.map
