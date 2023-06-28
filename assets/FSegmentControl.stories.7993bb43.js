var p=Object.defineProperty;var r=(t,e)=>p(t,"name",{value:e,configurable:!0});import{A as c,b as u,a as l,m as g,U as f,u as d,r as C}from"./vue.esm-bundler.b09b7c5a.js";import{y as F}from"./color.7fbf1750.js";import{F as s}from"./FButton.7621db81.js";import{d as S}from"./VBtn.7921a3d1.js";import"./helpers.4b349f1c.js";import"./border.6019dc9f.js";import"./density.6083b2d4.js";import"./elevation.12d4edaf.js";import"./rounded.28975b1c.js";import"./VIcon.bd07cc2b.js";import"./variant.fbd007cc.js";import"./proxiedModel.28fe5444.js";import"./index.eca3ba9a.js";import"./router.b8d53e34.js";import"./loader.a0162f6e.js";import"./location.b7cdffb8.js";import"./locale.88650f04.js";import"./anchor.b337e11f.js";import"./intersectionObserver.1e3a532e.js";import"./position.faf59b49.js";import"./VProgressCircular.7bee339a.js";function y(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!f(t)}r(y,"_isSlot");const a=c({name:"FSegmentControl",props:{grow:Boolean,bgColor:{type:String,default:"greyscale_6"},items:{type:Array,default:()=>[]}},setup(t){const{colorClasses:e,colorStyles:o}=F(u(()=>({background:d(t.bgColor)}))),i={color:"greyscale_1",mandatory:!0};return()=>{let n;return l(S,g({class:["f-segment-control",e.value,{"f-segment-control--grow":t.grow}],style:[o.value]},i),y(n=t.items.map(m=>l(s,m,{default:()=>[m.text]})))?n:{default:()=>[n]})}}}),z={parameters:{storySource:{source:`import { ref } from "vue";
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
  `}),"Template"),b=v.bind({});b.args={grow:!1};const G=["Default"];export{b as Default,G as __namedExportsOrder,z as default};
//# sourceMappingURL=FSegmentControl.stories.7993bb43.js.map
