var i=Object.defineProperty;var o=(t,e)=>i(t,"name",{value:e,configurable:!0});import{A as s,b as p,a as c,m,r as a}from"./vue.esm-bundler.330b8bcd.js";import{V as l}from"./VSwitch.a2da49a7.js";import"./VSelectionControl.d22e73c0.js";import"./VIcon.c758310f.js";import"./useRender.b59b3e39.js";import"./helpers.6dbb45ef.js";import"./color.66c7a00f.js";import"./density.38f0f124.js";import"./proxiedModel.815b9064.js";import"./index.b967f916.js";import"./VInput.3a20875e.js";import"./locale.0eda84ca.js";import"./VMessages.206e4d2e.js";import"./index.a5e0d629.js";import"./transition.d91c432b.js";import"./loader.c202c022.js";import"./rounded.257cff90.js";import"./location.2cb2469d.js";import"./anchor.7cdf4a4d.js";import"./VProgressCircular.27e195cb.js";const n=s({name:"FSwitch",props:{outlined:{type:Boolean,default:!0}},setup(t){const e={inset:!0,ripple:!1,hideDetails:!0},r=p(()=>["f-switch",{"f-switch--outlined":t.outlined}]);return()=>c(l,m(e,{class:r.value}),null)}}),N={parameters:{storySource:{source:`import { ref } from "vue";
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
  `}),"Template"),d=u.bind({});d.args={outlined:!0};const O=["Default"];export{d as Default,O as __namedExportsOrder,N as default};
//# sourceMappingURL=FSwitch.stories.224fbbdd.js.map
