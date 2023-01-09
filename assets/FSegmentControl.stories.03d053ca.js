var p=Object.defineProperty;var r=(t,e)=>p(t,"name",{value:e,configurable:!0});import{A as u,b as c,a as l,m as g,N as f,u as d,r as C}from"./vue.esm-bundler.a5c4e1bf.js";import{k as F}from"./color.43314d1d.js";import{F as s}from"./FButton.f3fc7c21.js";import{d as S}from"./VBtn.b5444450.js";import"./helpers.cec2c044.js";import"./useRender.c7ecffde.js";import"./proxiedModel.9639363f.js";import"./border.0d2c7ad0.js";import"./density.b3e2de9a.js";import"./elevation.52b4704c.js";import"./rounded.a0c73c18.js";import"./VIcon.5ca83e1b.js";import"./variant.b9606795.js";import"./index.1b40d9d7.js";import"./dimensions.b6fbc401.js";import"./loader.7d1fab10.js";import"./locale.76e208ea.js";import"./position.d49ff30e.js";import"./anchor.e4a88562.js";import"./router.3d9f142b.js";import"./VProgressCircular.ad6cc829.js";function v(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!f(t)}r(v,"_isSlot");const a=u({name:"FSegmentControl",props:{grow:Boolean,bgColor:{type:String,default:"greyscale_6"},items:{type:Array,default:()=>[]}},setup(t){const{colorClasses:e,colorStyles:o}=F(c(()=>({background:d(t.bgColor)}))),i={color:"greyscale_1",mandatory:!0};return()=>{let n;return l(S,g({class:["f-segment-control",e.value,{"f-segment-control--grow":t.grow}],style:[o.value]},i),v(n=t.items.map(m=>l(s,{value:m.value},{default:()=>[m.text]})))?n:{default:()=>[n]})}}}),G={parameters:{storySource:{source:`import { ref } from "vue";
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
`,locationsMap:{default:{startLoc:{col:50,line:11},endLoc:{col:2,line:28},startBody:{col:50,line:11},endBody:{col:2,line:28}}}}},title:"Components/FSegmentControl",component:a},y=r(t=>({components:{FSegmentControl:a,FButton:s},setup(){const e=[{value:"week",text:"Week"},{value:"month",text:"Month"},{value:"year",text:"Year"}],o=C("month");return{args:t,items:e,current:o}},template:`
    <FSegmentControl v-model="current" :items="items" v-bind="args">
    </FSegmentControl>
    <div>{{current}}</div>
  `}),"Template"),b=y.bind({});b.args={grow:!1};const H=["Default"];export{b as Default,H as __namedExportsOrder,G as default};
//# sourceMappingURL=FSegmentControl.stories.03d053ca.js.map
