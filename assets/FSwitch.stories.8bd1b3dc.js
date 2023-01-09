var i=Object.defineProperty;var o=(t,e)=>i(t,"name",{value:e,configurable:!0});import{A as s,b as c,a as p,m as a,r as m}from"./vue.esm-bundler.a5c4e1bf.js";import{V as l}from"./VSwitch.94514388.js";import"./VSelectionControl.9b121a3d.js";import"./VIcon.5ca83e1b.js";import"./useRender.c7ecffde.js";import"./helpers.cec2c044.js";import"./color.43314d1d.js";import"./density.b3e2de9a.js";import"./proxiedModel.9639363f.js";import"./index.1b40d9d7.js";import"./VInput.34db0c3a.js";import"./locale.76e208ea.js";import"./VMessages.90062972.js";import"./index.628b3df7.js";import"./transition.c93b8895.js";import"./loader.7d1fab10.js";import"./rounded.a0c73c18.js";import"./VProgressCircular.ad6cc829.js";const n=s({name:"FSwitch",props:{outlined:{type:Boolean,default:!0}},setup(t){const e={inset:!0,ripple:!1,hideDetails:!0},r=c(()=>["f-switch",{"f-switch--outlined":t.outlined}]);return()=>p(l,a(e,{class:r.value}),null)}}),A={parameters:{storySource:{source:`import { ref } from "vue";
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
`,locationsMap:{default:{startLoc:{col:42,line:10},endLoc:{col:2,line:23},startBody:{col:42,line:10},endBody:{col:2,line:23}}}}},title:"Components/FSwitch",component:n},u=o(t=>({components:{FSwitch:n},setup(){const e=m(!1);return{args:t,switch1:e}},template:`
    <div>
      <FSwitch v-model="switch1" v-bind="args" />
      {{switch1}}
    </div>
  `}),"Template"),d=u.bind({});d.args={outlined:!0};const E=["Default"];export{d as Default,E as __namedExportsOrder,A as default};
//# sourceMappingURL=FSwitch.stories.8bd1b3dc.js.map
