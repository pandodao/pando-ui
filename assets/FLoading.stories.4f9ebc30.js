var r=Object.defineProperty;var n=(t,o)=>r(t,"name",{value:o,configurable:!0});import{d as a}from"./vue.esm-bundler.03d0f9c2.js";import{F as e}from"./FLoading.9af3fe25.js";import{F as i}from"./FButton.2e1405fc.js";import"./VProgressCircular.3dc750a1.js";import"./VIcon.48347d4a.js";import"./useRender.4b8f74ab.js";import"./helpers.11996f79.js";import"./color.ec9b773d.js";import"./loader.30593133.js";import"./density.e2a6824c.js";import"./proxiedModel.12bae561.js";import"./locale.9f7d6233.js";import"./VOverlay.07008e41.js";import"./dimensions.4f68b75e.js";import"./easing.d7926d43.js";import"./anchor.a0b334cc.js";import"./transition.37736cb0.js";import"./router.6303e2ed.js";import"./VBtn.a413b61a.js";import"./variant.89df963d.js";import"./elevation.ef328fb6.js";import"./index.71c8a79f.js";const E={parameters:{storySource:{source:`import { ref } from "vue";
import { FLoading } from "./FLoading";
import { FButton } from "../FButton";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  name: "FLoading",
  component: FLoading,
} as Meta<typeof FLoading>;

const Template: StoryFn<typeof FLoading> = (args) => ({
  components: { FLoading, FButton },
  setup() {
    const loading = ref(false);
    const show = () => {
      loading.value = true;

      setTimeout(() => (loading.value = false), 3000);
    };

    return { args, loading, show };
  },
  template: \`
    <div>
      <FLoading v-model="loading" v-bind="args" />  

      <FButton color="primary" @click="show">Show</FButton>
    </div>
  \`,
});

export const Default = Template.bind({});
Default.args = { fullscreen: true, text: "Please Wait" };
`,locationsMap:{default:{startLoc:{col:43,line:11},endLoc:{col:2,line:30},startBody:{col:43,line:11},endBody:{col:2,line:30}}}}},name:"FLoading",component:e},m=n(t=>({components:{FLoading:e,FButton:i},setup(){const o=a(!1);return{args:t,loading:o,show:n(()=>{o.value=!0,setTimeout(()=>o.value=!1,3e3)},"show")}},template:`
    <div>
      <FLoading v-model="loading" v-bind="args" />  

      <FButton color="primary" @click="show">Show</FButton>
    </div>
  `}),"Template"),s=m.bind({});s.args={fullscreen:!0,text:"Please Wait"};const O=["Default"];export{s as Default,O as __namedExportsOrder,E as default};
//# sourceMappingURL=FLoading.stories.4f9ebc30.js.map
