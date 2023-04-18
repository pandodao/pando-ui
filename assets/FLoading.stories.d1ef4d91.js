var i=Object.defineProperty;var t=(o,n)=>i(o,"name",{value:n,configurable:!0});import{r as a}from"./vue.esm-bundler.b09b7c5a.js";import{F as e,a as l}from"./FFullscreenLoading.efb66ac1.js";import{F as r}from"./FButton.fd5dc93c.js";import"./VProgressCircular.8c9797f0.js";import"./VIcon.81f7ecc0.js";import"./useRender.5a19cee5.js";import"./helpers.4b349f1c.js";import"./color.1fec8f8e.js";import"./intersectionObserver.8499cdfb.js";import"./VOverlay.4718cec8.js";import"./dimensions.b549aab6.js";import"./easing.36b781ab.js";import"./anchor.b337e11f.js";import"./transition.1a560eae.js";import"./router.524cabd1.js";import"./proxiedModel.f0d8de9f.js";import"./display.fd968d5a.js";import"./locale.0dcd1420.js";import"./VBtn.7a77eb8b.js";import"./border.6d45fe61.js";import"./density.43b8d8b2.js";import"./elevation.844f69c6.js";import"./rounded.ccd03645.js";import"./variant.eababd72.js";import"./index.eca3ba9a.js";import"./loader.c496a144.js";import"./location.11c487f7.js";import"./position.6b49aae6.js";const J={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FLoading.stories.d1ef4d91.js.map
