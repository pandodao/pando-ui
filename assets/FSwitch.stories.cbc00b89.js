var i=Object.defineProperty;var o=(t,e)=>i(t,"name",{value:e,configurable:!0});import{D as s,b as p,a as c,m,r as a}from"./vue.esm-bundler.80cafc0b.js";import{V as l}from"./VSwitch.2c6a0c88.js";import"./index.b676db0f.js";import"./color.7ba4ffe3.js";import"./helpers.32675158.js";import"./VDefaultsProvider.522cf1e0.js";import"./VInput.44c51e7f.js";import"./locale.68d0262d.js";import"./proxiedModel.dbd4de1d.js";import"./VIcon.ac9f05d6.js";import"./VMessages.8e887dfb.js";import"./transition.b6a16e6c.js";import"./density.e2c1329b.js";import"./VSelectionControl.5045ffd3.js";import"./index.d4fa9fd4.js";import"./loader.5e66d0fd.js";import"./VProgressLinear.23574e13.js";import"./intersectionObserver.addd26f6.js";import"./anchor.5ba72fdd.js";import"./rounded.b42653ce.js";import"./VProgressCircular.fec55325.js";const n=s({name:"FSwitch",props:{outlined:{type:Boolean,default:!0}},setup(t){const e={inset:!0,ripple:!1,hideDetails:!0},r=p(()=>["f-switch",{"f-switch--outlined":t.outlined}]);return()=>c(l,m(e,{class:r.value}),null)}}),P={parameters:{storySource:{source:`import { ref } from "vue";
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
  `}),"Template"),d=u.bind({});d.args={outlined:!0};const $=["Default"];export{d as Default,$ as __namedExportsOrder,P as default};
//# sourceMappingURL=FSwitch.stories.cbc00b89.js.map
