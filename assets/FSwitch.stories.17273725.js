var i=Object.defineProperty;var o=(t,e)=>i(t,"name",{value:e,configurable:!0});import{A as s,b as p,a as c,m,r as a}from"./vue.esm-bundler.60beb779.js";import{V as l}from"./VSwitch.402df17f.js";import"./VSelectionControl.abf62252.js";import"./VIcon.ccd22ecd.js";import"./useRender.06ad421e.js";import"./helpers.f4a4e1c6.js";import"./color.7f161142.js";import"./density.3ab93966.js";import"./proxiedModel.c4bc26c4.js";import"./index.d3586bd0.js";import"./VInput.9d434e05.js";import"./locale.656e3084.js";import"./VMessages.e9237a13.js";import"./index.2f1043ab.js";import"./transition.d5d90e7e.js";import"./loader.3ab44f13.js";import"./rounded.08843391.js";import"./location.3f71a5c2.js";import"./anchor.46190ad2.js";import"./VProgressCircular.1a876490.js";const n=s({name:"FSwitch",props:{outlined:{type:Boolean,default:!0}},setup(t){const e={inset:!0,ripple:!1,hideDetails:!0},r=p(()=>["f-switch",{"f-switch--outlined":t.outlined}]);return()=>c(l,m(e,{class:r.value}),null)}}),N={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FSwitch.stories.17273725.js.map
