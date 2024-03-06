var f=Object.defineProperty;var a=(n,e)=>f(n,"name",{value:e,configurable:!0});import{D as u,b as d,a as t}from"./vue.esm-bundler.80cafc0b.js";import{F as s}from"./FTooltip.082ea180.js";import"./VTooltip.73d686bc.js";import"./VOverlay.a7e28035.js";import"./proxiedModel.dbd4de1d.js";import"./color.7ba4ffe3.js";import"./helpers.32675158.js";import"./easing.da2e9236.js";import"./anchor.5ba72fdd.js";import"./router.9241c2dd.js";import"./display.1ed39e23.js";import"./locale.68d0262d.js";import"./transition.b6a16e6c.js";import"./forwardRefs.34034356.js";const m=u({name:"FInfoGrid",props:{reverse:Boolean,list:Boolean},setup(n,{slots:e}){const o=d(()=>["f-info-grid",{"f-info-grid--reverse":n.reverse,"f-info-grid--list":n.list}]);return()=>{var i;return t("div",{class:o.value},[(i=e.default)==null?void 0:i.call(e)])}}});const v=u({name:"FInfoGridItem",props:{title:String,value:String,hint:String,unit:String},setup(n,{slots:e}){return()=>{var o,i,r,l;return t("div",{class:"f-info-grid-item"},[t("div",{class:"f-info-grid-item__title"},[(i=(o=e.title)==null?void 0:o.call(e))!=null?i:n.title,t(s,{hint:n.hint},null)]),t("div",{class:"f-info-grid-item__value"},[t("span",null,[(l=(r=e.value)==null?void 0:r.call(e))!=null?l:n.value]),t("span",null,[n.unit])])])}}}),_={parameters:{storySource:{source:`import { FInfoGrid } from "./FInfoGrid";
import { FInfoGridItem } from "./FInfoGridItem";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FInfoGrid",
  component: FInfoGrid,
} as Meta<typeof FInfoGrid>;

const Template: StoryFn<typeof FInfoGrid> = (args) => ({
  components: { FInfoGrid, FInfoGridItem },
  setup() {
    const items = [
      {
        title: "ETH Position",
        value: "5.27638999",
        valueUnit: "ETH",
      },
      {
        title: "24h changes",
        value: "+34.41",
        valueUnit: "%",
        valueColor: "green",
      },
      {
        title: "7d changes",
        value: "-1.41",
        valueUnit: "%",
        valueColor: "red",
      },
      {
        title: "Profit Margin (USD)",
        value: "-0.121",
        valueUnit: "%",
        valueColor: "red",
        valueCustomColor: "blue",
      },
      {
        title: "Profit (ETH)",
        value: "+0.00235512",
        valueUnit: "ETH",
        valueColor: "",
        hint: "Some description about profit.",
      },
    ];
    return { args, items };
  },
  template: \`
    <FInfoGrid v-bind="args">
      <FInfoGridItem 
        v-for="(item, ix) in items"
        :key="ix"
        :index="ix"
        :title="item.title"
        :value="item.value"
        :unit="item.valueUnit"
        :color="item.valueColor"
        :hint="item.hint"
      />
    </FInfoGrid>
  \`,
});

export const Default = Template.bind({});
Default.args = { reverse: false, list: false };
`,locationsMap:{default:{startLoc:{col:44,line:10},endLoc:{col:2,line:62},startBody:{col:44,line:10},endBody:{col:2,line:62}}}}},title:"Components/FInfoGrid",component:m},p=a(n=>({components:{FInfoGrid:m,FInfoGridItem:v},setup(){return{args:n,items:[{title:"ETH Position",value:"5.27638999",valueUnit:"ETH"},{title:"24h changes",value:"+34.41",valueUnit:"%",valueColor:"green"},{title:"7d changes",value:"-1.41",valueUnit:"%",valueColor:"red"},{title:"Profit Margin (USD)",value:"-0.121",valueUnit:"%",valueColor:"red",valueCustomColor:"blue"},{title:"Profit (ETH)",value:"+0.00235512",valueUnit:"ETH",valueColor:"",hint:"Some description about profit."}]}},template:`
    <FInfoGrid v-bind="args">
      <FInfoGridItem 
        v-for="(item, ix) in items"
        :key="ix"
        :index="ix"
        :title="item.title"
        :value="item.value"
        :unit="item.valueUnit"
        :color="item.valueColor"
        :hint="item.hint"
      />
    </FInfoGrid>
  `}),"Template"),c=p.bind({});c.args={reverse:!1,list:!1};const P=["Default"];export{c as Default,P as __namedExportsOrder,_ as default};
//# sourceMappingURL=FInfoGrid.stories.f564ea3c.js.map
