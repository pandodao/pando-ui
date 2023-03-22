var i=Object.defineProperty;var t=(o,n)=>i(o,"name",{value:n,configurable:!0});import{r as a}from"./vue.esm-bundler.3b29098a.js";import{F as e,a as l}from"./FFullscreenLoading.25afd438.js";import{F as r}from"./FButton.72dd92af.js";import"./VProgressCircular.c527f932.js";import"./VIcon.c254d683.js";import"./useRender.3ca1765f.js";import"./helpers.e1d6c4cc.js";import"./color.fef4ce02.js";import"./intersectionObserver.b06f0fb9.js";import"./VOverlay.e2cb60a6.js";import"./dimensions.c2f0e23c.js";import"./easing.36b781ab.js";import"./anchor.c52c8661.js";import"./transition.94342caf.js";import"./router.6cb3b155.js";import"./proxiedModel.67252d17.js";import"./display.f5b0b65d.js";import"./locale.eccdb440.js";import"./VBtn.7f6a0830.js";import"./border.d0444c35.js";import"./density.6dd2b9c7.js";import"./elevation.154beddf.js";import"./rounded.375414e4.js";import"./variant.be65e42d.js";import"./index.09e65b91.js";import"./loader.5b0d5ca4.js";import"./location.3a6dce64.js";import"./position.6cc3b816.js";const J={parameters:{storySource:{source:`import { ref } from "vue";
import { FLoading } from "./FLoading";
import { FFullscreenLoading } from "./FFullscreenLoading";
import { FButton } from "../FButton";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FLoading",
  component: FLoading,
} as Meta<typeof FLoading>;

const Template: StoryFn<typeof FLoading> = (args) => ({
  components: { FLoading, FButton },
  setup() {
    return { args };
  },
  template: \`
    <div style="padding: 60px;">
      <FLoading v-bind="args" />
    </div>
  \`,
});

export const Default = Template.bind({});
Default.args = { text: "Please Wait" };

export const ProcessProps = Template.bind({});
ProcessProps.args = {
  text: "loading",
  processProps: { size: 40, color: "success" },
};

const Template2: StoryFn<typeof FLoading> = (args) => ({
  components: { FFullscreenLoading, FButton },
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
      <FFullscreenLoading v-model="loading" v-bind="args" />

      <FButton color="primary" @click="show">Show</FButton>
    </div>
  \`,
});

export const Fullscreen = Template2.bind({});
Fullscreen.args = {
  text: "Please wait",
};
`,locationsMap:{default:{startLoc:{col:43,line:12},endLoc:{col:2,line:22},startBody:{col:43,line:12},endBody:{col:2,line:22}},"process-props":{startLoc:{col:43,line:12},endLoc:{col:2,line:22},startBody:{col:43,line:12},endBody:{col:2,line:22}},fullscreen:{startLoc:{col:44,line:33},endLoc:{col:2,line:52},startBody:{col:44,line:33},endBody:{col:2,line:52}}}}},title:"Components/FLoading",component:e},s=t(o=>({components:{FLoading:e,FButton:r},setup(){return{args:o}},template:`
    <div style="padding: 60px;">
      <FLoading v-bind="args" />
    </div>
  `}),"Template"),p=s.bind({});p.args={text:"Please Wait"};const c=s.bind({});c.args={text:"loading",processProps:{size:40,color:"success"}};const d=t(o=>({components:{FFullscreenLoading:l,FButton:r},setup(){const n=a(!1);return{args:o,loading:n,show:t(()=>{n.value=!0,setTimeout(()=>n.value=!1,3e3)},"show")}},template:`
    <div>
      <FFullscreenLoading v-model="loading" v-bind="args" />

      <FButton color="primary" @click="show">Show</FButton>
    </div>
  `}),"Template2"),m=d.bind({});m.args={text:"Please wait"};const K=["Default","ProcessProps","Fullscreen"];export{p as Default,m as Fullscreen,c as ProcessProps,K as __namedExportsOrder,J as default};
//# sourceMappingURL=FLoading.stories.99aba148.js.map
