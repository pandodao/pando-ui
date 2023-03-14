var e=Object.defineProperty;var a=(o,t)=>e(o,"name",{value:t,configurable:!0});import{z as p,b as m,a as i,m as b}from"./vue.esm-bundler.62cdaeff.js";import{p as l}from"./useRender.bb8a5a4c.js";import{b as T,c}from"./VTabs.6b3926ec.js";import"./helpers.f37785d0.js";import"./VIcon.ddcbca9b.js";import"./color.5ac0909d.js";import"./VBtn.2cacbcac.js";import"./border.744ce806.js";import"./density.a1d89e9f.js";import"./elevation.79ced88b.js";import"./rounded.9945cf4e.js";import"./variant.cb074882.js";import"./proxiedModel.c2b98033.js";import"./index.f175e2d9.js";import"./dimensions.c27e6138.js";import"./loader.c48359f5.js";import"./location.8179a009.js";import"./locale.b4680344.js";import"./anchor.4b6c6135.js";import"./position.daea1c07.js";import"./router.19d79a04.js";import"./VProgressCircular.5a613386.js";import"./easing.36b781ab.js";import"./index.31ee38b0.js";import"./display.21f5d2fe.js";const n=p({name:"FTabs",props:{narrow:Boolean},setup(o,{slots:t}){l({VTab:{ripple:!1}});const r={height:52},s=m(()=>["f-tabs",{"f-tabs--narrow":o.narrow}]);return()=>i(T,b(r,{class:s.value}),t)}}),G={parameters:{storySource:{source:`import { FTabs } from "./FTabs";
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
//# sourceMappingURL=FTabs.stories.6d7ff3aa.js.map
