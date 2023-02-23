var i=Object.defineProperty;var o=(t,e)=>i(t,"name",{value:e,configurable:!0});import{z as s,b as p,a as c,m,r as a}from"./vue.esm-bundler.57aa1454.js";import{V as l}from"./VSwitch.4b0e23e6.js";import"./VSelectionControl.d88669b3.js";import"./VIcon.b7876f5b.js";import"./useRender.0f3b6188.js";import"./helpers.ff98b59e.js";import"./color.5e70182f.js";import"./density.5fc65f23.js";import"./proxiedModel.aff93369.js";import"./index.17c04f25.js";import"./VInput.a59f36d0.js";import"./locale.ce33eacd.js";import"./VMessages.7f48a74b.js";import"./index.5cb25ca4.js";import"./transition.7787ec60.js";import"./loader.538ed1c8.js";import"./rounded.638bf334.js";import"./location.7ef01c4f.js";import"./anchor.8b678110.js";import"./VProgressCircular.ce5720de.js";const n=s({name:"FSwitch",props:{outlined:{type:Boolean,default:!0}},setup(t){const e={inset:!0,ripple:!1,hideDetails:!0},r=p(()=>["f-switch",{"f-switch--outlined":t.outlined}]);return()=>c(l,m(e,{class:r.value}),null)}}),N={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FSwitch.stories.844208cc.js.map
