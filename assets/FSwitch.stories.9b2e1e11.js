var i=Object.defineProperty;var o=(t,e)=>i(t,"name",{value:e,configurable:!0});import{A as s,b as p,a as c,m,r as a}from"./vue.esm-bundler.b09b7c5a.js";import{V as l}from"./VSwitch.0fc59f6e.js";import"./VSelectionControl.9c612953.js";import"./VIcon.bd07cc2b.js";import"./color.7fbf1750.js";import"./helpers.4b349f1c.js";import"./density.6083b2d4.js";import"./proxiedModel.28fe5444.js";import"./index.eca3ba9a.js";import"./VInput.d8777c43.js";import"./locale.88650f04.js";import"./VMessages.d6b13295.js";import"./index.5cf6a3e8.js";import"./transition.d2bea911.js";import"./loader.a0162f6e.js";import"./rounded.28975b1c.js";import"./location.b7cdffb8.js";import"./anchor.b337e11f.js";import"./intersectionObserver.1e3a532e.js";import"./VProgressCircular.7bee339a.js";const n=s({name:"FSwitch",props:{outlined:{type:Boolean,default:!0}},setup(t){const e={inset:!0,ripple:!1,hideDetails:!0},r=p(()=>["f-switch",{"f-switch--outlined":t.outlined}]);return()=>c(l,m(e,{class:r.value}),null)}}),N={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FSwitch.stories.9b2e1e11.js.map
