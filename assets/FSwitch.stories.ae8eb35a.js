var i=Object.defineProperty;var o=(t,e)=>i(t,"name",{value:e,configurable:!0});import{z as s,b as p,a as c,m,r as a}from"./vue.esm-bundler.62cdaeff.js";import{V as l}from"./VSwitch.481122cf.js";import"./VSelectionControl.04e0712f.js";import"./VIcon.ddcbca9b.js";import"./useRender.bb8a5a4c.js";import"./helpers.f37785d0.js";import"./color.5ac0909d.js";import"./density.a1d89e9f.js";import"./proxiedModel.c2b98033.js";import"./index.f175e2d9.js";import"./VInput.7941d77b.js";import"./locale.b4680344.js";import"./VMessages.c418de83.js";import"./index.31ee38b0.js";import"./transition.28d05801.js";import"./loader.c48359f5.js";import"./rounded.9945cf4e.js";import"./location.8179a009.js";import"./anchor.4b6c6135.js";import"./VProgressCircular.5a613386.js";const n=s({name:"FSwitch",props:{outlined:{type:Boolean,default:!0}},setup(t){const e={inset:!0,ripple:!1,hideDetails:!0},r=p(()=>["f-switch",{"f-switch--outlined":t.outlined}]);return()=>c(l,m(e,{class:r.value}),null)}}),N={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FSwitch.stories.ae8eb35a.js.map
