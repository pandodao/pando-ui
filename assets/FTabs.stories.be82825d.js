var e=Object.defineProperty;var a=(o,t)=>e(o,"name",{value:t,configurable:!0});import{A as p,b as m,a as i,m as b}from"./vue.esm-bundler.1ba604f9.js";import{p as l}from"./useRender.965bd6aa.js";import{b as T,c}from"./VTabs.631acfea.js";import"./helpers.bd7a8d83.js";import"./VIcon.518cdeb6.js";import"./color.b891a321.js";import"./VBtn.156ed533.js";import"./proxiedModel.23143766.js";import"./border.c2063388.js";import"./density.8ac56fa2.js";import"./elevation.7428fb70.js";import"./rounded.cb32523b.js";import"./variant.22bbbe86.js";import"./index.27517d48.js";import"./dimensions.721a2e0b.js";import"./loader.c9437e89.js";import"./location.f6b6fb7b.js";import"./locale.fb27b96c.js";import"./anchor.1637b665.js";import"./position.747eb4b6.js";import"./router.ba883828.js";import"./VProgressCircular.6a9473f8.js";import"./easing.36b781ab.js";import"./index.a7472254.js";import"./display.de7ed398.js";const n=p({name:"FTabs",props:{narrow:Boolean},setup(o,{slots:t}){l({VTab:{ripple:!1}});const r={height:52},s=m(()=>["f-tabs",{"f-tabs--narrow":o.narrow}]);return()=>i(T,b(r,{class:s.value}),t)}}),G={parameters:{storySource:{source:`import { FTabs } from "./FTabs";
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
//# sourceMappingURL=FTabs.stories.be82825d.js.map
