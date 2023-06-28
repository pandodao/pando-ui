var i=Object.defineProperty;var t=(o,n)=>i(o,"name",{value:n,configurable:!0});import{r as a}from"./vue.esm-bundler.b09b7c5a.js";import{F as e,a as l}from"./FFullscreenLoading.ccb73496.js";import{F as r}from"./FButton.7621db81.js";import"./VProgressCircular.7bee339a.js";import"./VIcon.bd07cc2b.js";import"./color.7fbf1750.js";import"./helpers.4b349f1c.js";import"./intersectionObserver.1e3a532e.js";import"./VOverlay.7cd76152.js";import"./router.b8d53e34.js";import"./easing.36b781ab.js";import"./anchor.b337e11f.js";import"./transition.d2bea911.js";import"./proxiedModel.28fe5444.js";import"./display.c2299c89.js";import"./locale.88650f04.js";import"./VBtn.7921a3d1.js";import"./border.6019dc9f.js";import"./density.6083b2d4.js";import"./elevation.12d4edaf.js";import"./rounded.28975b1c.js";import"./variant.fbd007cc.js";import"./index.eca3ba9a.js";import"./loader.a0162f6e.js";import"./location.b7cdffb8.js";import"./position.faf59b49.js";const H={parameters:{storySource:{source:`import { ref } from "vue";
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
  `}),"Template"),p=s.bind({});p.args={text:"Please Wait"};const c=s.bind({});c.args={text:"loading",processProps:{size:40,color:"success"}};const d=t(o=>({components:{FFullScreenLoading:l,FButton:r},setup(){const n=a(!1);return{args:o,loading:n,show:t(()=>{n.value=!0,setTimeout(()=>n.value=!1,3e3)},"show")}},template:`
    <div>
      <FFullscreenLoading v-model="loading" v-bind="args" />

      <FButton color="primary" @click="show">Show</FButton>
    </div>
  `}),"Template2"),m=d.bind({});m.args={text:"Please wait"};const I=["Default","ProcessProps","Fullscreen"];export{p as Default,m as Fullscreen,c as ProcessProps,I as __namedExportsOrder,H as default};
//# sourceMappingURL=FLoading.stories.a0a5df8a.js.map
