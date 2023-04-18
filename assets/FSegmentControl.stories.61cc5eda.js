var p=Object.defineProperty;var r=(t,e)=>p(t,"name",{value:e,configurable:!0});import{A as c,b as u,a as l,m as g,U as f,u as d,r as C}from"./vue.esm-bundler.9500adb2.js";import{k as F}from"./color.45246ddd.js";import{F as s}from"./FButton.d61383cc.js";import{d as S}from"./VBtn.b26bd4ae.js";import"./helpers.681e1792.js";import"./useRender.44945942.js";import"./border.eebb6db1.js";import"./density.0c8fab1e.js";import"./elevation.d906eb56.js";import"./rounded.d16b72e9.js";import"./VIcon.b10ecbaa.js";import"./variant.95637a5a.js";import"./proxiedModel.881d858e.js";import"./index.1967ded9.js";import"./dimensions.5f5b1dd8.js";import"./loader.4d40f77d.js";import"./location.c535e823.js";import"./locale.7efc9def.js";import"./anchor.1afb8064.js";import"./intersectionObserver.10253e57.js";import"./position.427d9f74.js";import"./router.6e1740fe.js";import"./VProgressCircular.8b82923d.js";function y(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!f(t)}r(y,"_isSlot");const a=c({name:"FSegmentControl",props:{grow:Boolean,bgColor:{type:String,default:"greyscale_6"},items:{type:Array,default:()=>[]}},setup(t){const{colorClasses:e,colorStyles:o}=F(u(()=>({background:d(t.bgColor)}))),i={color:"greyscale_1",mandatory:!0};return()=>{let n;return l(S,g({class:["f-segment-control",e.value,{"f-segment-control--grow":t.grow}],style:[o.value]},i),y(n=t.items.map(m=>l(s,m,{default:()=>[m.text]})))?n:{default:()=>[n]})}}}),H={parameters:{storySource:{source:`import { ref } from "vue";
import { FSegmentControl } from "./FSegmentControl";
import { FButton } from "../FButton";
import { StoryFn, Meta } from "@storybook/vue3";

export default {
  title: "Components/FSegmentControl",
  component: FSegmentControl,
} as Meta<typeof FSegmentControl>;

const Template: StoryFn<typeof FSegmentControl> = (args) => ({
  components: { FSegmentControl, FButton },
  setup() {
    const items = [
      { value: "week", text: "Week" },
      { value: "month", text: "Month" },
      { value: "year", text: "Year" },
    ];
    const current = ref("month");

    return { args, items, current };
  },
  template: \`
    <FSegmentControl v-model="current" :items="items" v-bind="args">
    </FSegmentControl>
    <div>{{current}}</div>
  \`,
});

export const Default = Template.bind({});
Default.args = { grow: false };
`,locationsMap:{default:{startLoc:{col:50,line:11},endLoc:{col:2,line:28},startBody:{col:50,line:11},endBody:{col:2,line:28}}}}},title:"Components/FSegmentControl",component:a},v=r(t=>({components:{FSegmentControl:a,FButton:s},setup(){const e=[{value:"week",text:"Week"},{value:"month",text:"Month"},{value:"year",text:"Year"}],o=C("month");return{args:t,items:e,current:o}},template:`
    <FSegmentControl v-model="current" :items="items" v-bind="args">
    </FSegmentControl>
    <div>{{current}}</div>
  `}),"Template"),b=v.bind({});b.args={grow:!1};const I=["Default"];export{b as Default,I as __namedExportsOrder,H as default};
//# sourceMappingURL=FSegmentControl.stories.61cc5eda.js.map
