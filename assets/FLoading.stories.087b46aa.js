var i=Object.defineProperty;var t=(o,n)=>i(o,"name",{value:n,configurable:!0});import{r as a}from"./vue.esm-bundler.9500adb2.js";import{F as e,a as l}from"./FFullscreenLoading.be4445bd.js";import{F as r}from"./FButton.d61383cc.js";import"./VProgressCircular.8b82923d.js";import"./VIcon.b10ecbaa.js";import"./useRender.44945942.js";import"./helpers.681e1792.js";import"./color.45246ddd.js";import"./intersectionObserver.10253e57.js";import"./VOverlay.96b5c4e3.js";import"./dimensions.5f5b1dd8.js";import"./easing.36b781ab.js";import"./anchor.1afb8064.js";import"./transition.10caf698.js";import"./router.6e1740fe.js";import"./proxiedModel.881d858e.js";import"./display.9827c8ac.js";import"./locale.7efc9def.js";import"./VBtn.b26bd4ae.js";import"./border.eebb6db1.js";import"./density.0c8fab1e.js";import"./elevation.d906eb56.js";import"./rounded.d16b72e9.js";import"./variant.95637a5a.js";import"./index.1967ded9.js";import"./loader.4d40f77d.js";import"./location.c535e823.js";import"./position.427d9f74.js";const J={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FLoading.stories.087b46aa.js.map
