var i=Object.defineProperty;var o=(t,e)=>i(t,"name",{value:e,configurable:!0});import{A as s,b as p,a as c,m,r as a}from"./vue.esm-bundler.06cbf4f3.js";import{V as l}from"./VSwitch.423773c0.js";import"./VSelectionControl.ee3c2fe2.js";import"./VIcon.4e22765d.js";import"./useRender.61aaf11b.js";import"./helpers.0ba19e05.js";import"./color.9c80aa54.js";import"./density.4e133a57.js";import"./proxiedModel.ffcb1955.js";import"./index.0e1c0398.js";import"./VInput.747c82dc.js";import"./locale.7c7f5def.js";import"./VMessages.4767cc10.js";import"./index.b7dbf2f4.js";import"./transition.60048a78.js";import"./loader.ff14b575.js";import"./rounded.ae3fe3ca.js";import"./location.efb67ad2.js";import"./anchor.4d34e672.js";import"./VProgressCircular.32071c16.js";const n=s({name:"FSwitch",props:{outlined:{type:Boolean,default:!0}},setup(t){const e={inset:!0,ripple:!1,hideDetails:!0},r=p(()=>["f-switch",{"f-switch--outlined":t.outlined}]);return()=>c(l,m(e,{class:r.value}),null)}}),N={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FSwitch.stories.234e0d01.js.map
