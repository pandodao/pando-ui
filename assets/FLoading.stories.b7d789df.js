var r=Object.defineProperty;var n=(t,o)=>r(t,"name",{value:o,configurable:!0});import{d as a}from"./vue.esm-bundler.0d7c29ee.js";import{F as e}from"./FLoading.8c48f266.js";import{F as i}from"./FButton.c94e3704.js";import"./VOverlay.664db6e2.js";import"./useRender.9e1e1323.js";import"./helpers.a29827d2.js";import"./dimensions.512da313.js";import"./easing.d7926d43.js";import"./anchor.cecbc02b.js";import"./color.a1d36358.js";import"./transition.845f9488.js";import"./router.e34e74ab.js";import"./proxiedModel.0134c68c.js";import"./locale.6d395d7c.js";import"./VProgressCircular.c944d5ab.js";import"./VIcon.27b7c9a9.js";import"./loader.dd2f3ca6.js";import"./density.1812b102.js";import"./VBtn.aebc80dd.js";import"./variant.f85b9fa5.js";import"./elevation.b2f78cc5.js";import"./index.9418ce7a.js";const E={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FLoading.stories.b7d789df.js.map
