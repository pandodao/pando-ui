var i=Object.defineProperty;var o=(t,e)=>i(t,"name",{value:e,configurable:!0});import{A as s,b as p,a as c,m,r as a}from"./vue.esm-bundler.9500adb2.js";import{V as l}from"./VSwitch.fa31c210.js";import"./VSelectionControl.41e38ffa.js";import"./VIcon.b10ecbaa.js";import"./useRender.44945942.js";import"./helpers.681e1792.js";import"./color.45246ddd.js";import"./density.0c8fab1e.js";import"./proxiedModel.881d858e.js";import"./index.1967ded9.js";import"./VInput.33e34f4e.js";import"./locale.7efc9def.js";import"./VMessages.a0bdae17.js";import"./index.c2993bc7.js";import"./transition.10caf698.js";import"./loader.4d40f77d.js";import"./rounded.d16b72e9.js";import"./location.c535e823.js";import"./anchor.1afb8064.js";import"./intersectionObserver.10253e57.js";import"./VProgressCircular.8b82923d.js";const n=s({name:"FSwitch",props:{outlined:{type:Boolean,default:!0}},setup(t){const e={inset:!0,ripple:!1,hideDetails:!0},r=p(()=>["f-switch",{"f-switch--outlined":t.outlined}]);return()=>c(l,m(e,{class:r.value}),null)}}),O={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FSwitch.stories.ad0f8b63.js.map
