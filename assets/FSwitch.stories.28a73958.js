var i=Object.defineProperty;var o=(t,e)=>i(t,"name",{value:e,configurable:!0});import{A as s,b as p,a as c,m,r as a}from"./vue.esm-bundler.1ba604f9.js";import{V as l}from"./VSwitch.8821cd9f.js";import"./VSelectionControl.32a0df89.js";import"./VIcon.518cdeb6.js";import"./useRender.965bd6aa.js";import"./helpers.bd7a8d83.js";import"./color.b891a321.js";import"./density.8ac56fa2.js";import"./proxiedModel.23143766.js";import"./index.27517d48.js";import"./VInput.857b8225.js";import"./locale.fb27b96c.js";import"./VMessages.11ef5b61.js";import"./index.a7472254.js";import"./transition.ef0cc300.js";import"./loader.c9437e89.js";import"./rounded.cb32523b.js";import"./location.f6b6fb7b.js";import"./anchor.1637b665.js";import"./VProgressCircular.6a9473f8.js";const n=s({name:"FSwitch",props:{outlined:{type:Boolean,default:!0}},setup(t){const e={inset:!0,ripple:!1,hideDetails:!0},r=p(()=>["f-switch",{"f-switch--outlined":t.outlined}]);return()=>c(l,m(e,{class:r.value}),null)}}),N={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FSwitch.stories.28a73958.js.map
