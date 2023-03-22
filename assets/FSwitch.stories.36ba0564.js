var i=Object.defineProperty;var o=(t,e)=>i(t,"name",{value:e,configurable:!0});import{z as s,b as p,a as c,m,r as a}from"./vue.esm-bundler.3b29098a.js";import{V as l}from"./VSwitch.7943137e.js";import"./VSelectionControl.6249fa75.js";import"./VIcon.c254d683.js";import"./useRender.3ca1765f.js";import"./helpers.e1d6c4cc.js";import"./color.fef4ce02.js";import"./density.6dd2b9c7.js";import"./proxiedModel.67252d17.js";import"./index.09e65b91.js";import"./VInput.f50d7073.js";import"./locale.eccdb440.js";import"./VMessages.ff964b60.js";import"./index.f8ee2712.js";import"./transition.94342caf.js";import"./loader.5b0d5ca4.js";import"./rounded.375414e4.js";import"./location.3a6dce64.js";import"./anchor.c52c8661.js";import"./intersectionObserver.b06f0fb9.js";import"./VProgressCircular.c527f932.js";const n=s({name:"FSwitch",props:{outlined:{type:Boolean,default:!0}},setup(t){const e={inset:!0,ripple:!1,hideDetails:!0},r=p(()=>["f-switch",{"f-switch--outlined":t.outlined}]);return()=>c(l,m(e,{class:r.value}),null)}}),O={parameters:{storySource:{source:`import { ref } from "vue";
import { FSwitch } from "./FSwitch";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FSwitch",
  component: FSwitch,
} as Meta<typeof FSwitch>;

const Template: StoryFn<typeof FSwitch> = (args) => ({
  components: { FSwitch },
  setup() {
    const switch1 = ref(false);

    return { args, switch1 };
  },
  template: \`
    <div>
      <FSwitch v-model="switch1" v-bind="args" />
      {{switch1}}
    </div>
  \`,
});

export const Default = Template.bind({});
Default.args = { outlined: true };
`,locationsMap:{default:{startLoc:{col:42,line:10},endLoc:{col:2,line:23},startBody:{col:42,line:10},endBody:{col:2,line:23}}}}},title:"Components/FSwitch",component:n},u=o(t=>({components:{FSwitch:n},setup(){const e=a(!1);return{args:t,switch1:e}},template:`
    <div>
      <FSwitch v-model="switch1" v-bind="args" />
      {{switch1}}
    </div>
  `}),"Template"),d=u.bind({});d.args={outlined:!0};const P=["Default"];export{d as Default,P as __namedExportsOrder,O as default};
//# sourceMappingURL=FSwitch.stories.36ba0564.js.map
