var i=Object.defineProperty;var t=(o,n)=>i(o,"name",{value:n,configurable:!0});import{r as a}from"./vue.esm-bundler.80cafc0b.js";import{F as e,a as l}from"./FFullscreenLoading.a267953c.js";import{F as r}from"./FButton.5e8d1e13.js";import"./VProgressCircular.fec55325.js";import"./color.7ba4ffe3.js";import"./helpers.32675158.js";import"./intersectionObserver.addd26f6.js";import"./VIcon.ac9f05d6.js";import"./VOverlay.a7e28035.js";import"./proxiedModel.dbd4de1d.js";import"./easing.da2e9236.js";import"./anchor.5ba72fdd.js";import"./router.9241c2dd.js";import"./display.1ed39e23.js";import"./locale.68d0262d.js";import"./transition.b6a16e6c.js";import"./VBtn.ce544012.js";import"./border.b14058ef.js";import"./density.e2c1329b.js";import"./elevation.8d0c61c6.js";import"./rounded.b42653ce.js";import"./variant.1e842247.js";import"./loader.5e66d0fd.js";import"./VProgressLinear.23574e13.js";import"./position.19a0d7a5.js";import"./index.d4fa9fd4.js";import"./VDefaultsProvider.522cf1e0.js";const I={parameters:{storySource:{source:`import { ref } from "vue";
import { FLoading } from "./FLoading";
import { FFullScreenLoading } from "./FFullscreenLoading";
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
  components: { FFullScreenLoading, FButton },
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
      <FFullScreenLoading v-model="loading" v-bind="args" />

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
  `}),"Template"),p=s.bind({});p.args={text:"Please Wait"};const c=s.bind({});c.args={text:"loading",processProps:{size:40,color:"success"}};const d=t(o=>({components:{FFullScreenLoading:l,FButton:r},setup(){const n=a(!1);return{args:o,loading:n,show:t(()=>{n.value=!0,setTimeout(()=>n.value=!1,3e3)},"show")}},template:`
    <div>
      <FFullScreenLoading v-model="loading" v-bind="args" />

      <FButton color="primary" @click="show">Show</FButton>
    </div>
  `}),"Template2"),m=d.bind({});m.args={text:"Please wait"};const J=["Default","ProcessProps","Fullscreen"];export{p as Default,m as Fullscreen,c as ProcessProps,J as __namedExportsOrder,I as default};
//# sourceMappingURL=FLoading.stories.9ae08126.js.map
