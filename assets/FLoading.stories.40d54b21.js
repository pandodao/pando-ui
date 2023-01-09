var c=Object.defineProperty;var t=(n,o)=>c(n,"name",{value:o,configurable:!0});import{A as i,a as e,m as d,r as m}from"./vue.esm-bundler.a5c4e1bf.js";import{V as u}from"./VProgressCircular.ad6cc829.js";import{V as g}from"./VOverlay.74b7cee1.js";import{F as l}from"./FButton.f3fc7c21.js";import"./VIcon.5ca83e1b.js";import"./useRender.c7ecffde.js";import"./helpers.cec2c044.js";import"./color.43314d1d.js";import"./loader.7d1fab10.js";import"./rounded.a0c73c18.js";import"./proxiedModel.9639363f.js";import"./locale.76e208ea.js";import"./dimensions.b6fbc401.js";import"./easing.36b781ab.js";import"./anchor.e4a88562.js";import"./transition.c93b8895.js";import"./router.3d9f142b.js";import"./VBtn.b5444450.js";import"./border.0d2c7ad0.js";import"./density.b3e2de9a.js";import"./elevation.52b4704c.js";import"./variant.b9606795.js";import"./index.1b40d9d7.js";import"./position.d49ff30e.js";const s=i({name:"FLoading",props:{text:String,processProps:{type:Object,default:()=>({})}},setup(n,{slots:o}){return()=>{var r,a;return e("div",{class:"f-loading__content"},[e(u,d({width:3,indeterminate:!0},n.processProps),null),e("span",{class:"f-loading__text"},[(a=(r=o.text)==null?void 0:r.call(o))!=null?a:n.text])])}}}),F=i({name:"FFullscreenLoading",setup(n,{attrs:o}){return console.log(o),()=>e(g,{persistent:!0,class:"f-fullscreen-loading"},{default:()=>[e(s,o,null)]})}}),I={parameters:{storySource:{source:`import { ref } from "vue";
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
`,locationsMap:{default:{startLoc:{col:43,line:12},endLoc:{col:2,line:22},startBody:{col:43,line:12},endBody:{col:2,line:22}},"process-props":{startLoc:{col:43,line:12},endLoc:{col:2,line:22},startBody:{col:43,line:12},endBody:{col:2,line:22}},fullscreen:{startLoc:{col:44,line:33},endLoc:{col:2,line:52},startBody:{col:44,line:33},endBody:{col:2,line:52}}}}},title:"Components/FLoading",component:s},p=t(n=>({components:{FLoading:s,FButton:l},setup(){return{args:n}},template:`
    <div style="padding: 60px;">
      <FLoading v-bind="args" />
    </div>
  `}),"Template"),f=p.bind({});f.args={text:"Please Wait"};const L=p.bind({});L.args={text:"loading",processProps:{size:40,color:"success"}};const v=t(n=>({components:{FFullscreenLoading:F,FButton:l},setup(){const o=m(!1);return{args:n,loading:o,show:t(()=>{o.value=!0,setTimeout(()=>o.value=!1,3e3)},"show")}},template:`
    <div>
      <FFullscreenLoading v-model="loading" v-bind="args" />

      <FButton color="primary" @click="show">Show</FButton>
    </div>
  `}),"Template2"),y=v.bind({});y.args={text:"Please wait"};const J=["Default","ProcessProps","Fullscreen"];export{f as Default,y as Fullscreen,L as ProcessProps,J as __namedExportsOrder,I as default};
//# sourceMappingURL=FLoading.stories.40d54b21.js.map
