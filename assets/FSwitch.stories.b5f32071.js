var i=Object.defineProperty;var o=(t,e)=>i(t,"name",{value:e,configurable:!0});import{A as s,b as p,a as c,m,r as a}from"./vue.esm-bundler.caa622c4.js";import{V as l}from"./VSwitch.6ceb663f.js";import"./VSelectionControl.902a6c96.js";import"./VIcon.f37f8177.js";import"./useRender.15f4f58d.js";import"./helpers.83369341.js";import"./color.795eceb6.js";import"./density.c07a8c02.js";import"./proxiedModel.073d34a6.js";import"./index.4e4a2aa3.js";import"./VInput.353ca9d2.js";import"./locale.312c25a1.js";import"./VMessages.e864fdf2.js";import"./index.07e0e4c3.js";import"./transition.712d10eb.js";import"./loader.535d849b.js";import"./rounded.bd8ad820.js";import"./location.375c93f3.js";import"./anchor.57ff9838.js";import"./VProgressCircular.9b7ebd22.js";const n=s({name:"FSwitch",props:{outlined:{type:Boolean,default:!0}},setup(t){const e={inset:!0,ripple:!1,hideDetails:!0},r=p(()=>["f-switch",{"f-switch--outlined":t.outlined}]);return()=>c(l,m(e,{class:r.value}),null)}}),N={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FSwitch.stories.b5f32071.js.map
