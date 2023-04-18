var l=Object.defineProperty;var r=(n,t)=>l(n,"name",{value:t,configurable:!0});import{A as p,a as e,r as d}from"./vue.esm-bundler.9500adb2.js";import{K as f}from"./v3-infinite-loading.5611ca76.js";import{F as c}from"./FFullscreenLoading.be4445bd.js";import{a as u}from"./locale.7efc9def.js";import{F as L}from"./FListItem.7cf292ab.js";import"./VProgressCircular.8b82923d.js";import"./VIcon.b10ecbaa.js";import"./useRender.44945942.js";import"./helpers.681e1792.js";import"./color.45246ddd.js";import"./intersectionObserver.10253e57.js";import"./VOverlay.96b5c4e3.js";import"./dimensions.5f5b1dd8.js";import"./easing.36b781ab.js";import"./anchor.1afb8064.js";import"./transition.10caf698.js";import"./router.6e1740fe.js";import"./proxiedModel.881d858e.js";import"./display.9827c8ac.js";import"./VListItem.492edb65.js";import"./createSimpleFunctional.0b08b174.js";import"./index.1967ded9.js";import"./variant.95637a5a.js";import"./border.eebb6db1.js";import"./density.0c8fab1e.js";import"./elevation.d906eb56.js";import"./rounded.d16b72e9.js";import"./VAvatar.9487a2f3.js";import"./VImg.6757be35.js";import"./index.91748bc9.js";const s=p({name:"FInfiniteLoad",props:{completeText:{type:String,default:""},errorText:{type:String,default:""}},setup(n,{slots:t}){const{t:i}=u();return()=>e(f,null,{spinner:()=>e(c,{size:"16"},null),complete:()=>e("div",{class:"f-infinited-load__hint"},[e("span",null,[n.completeText||i("$vuetify.uikit.infinite_complete")])]),error:({retry:o})=>e("div",{class:"f-infinited-load__hint"},[e("span",null,[n.errorText||i("$vuetify.uikit.infinite_error")]),e("span",{onClick:o,class:"f-infinited-load__retry"},[i("$vuetify.uikit.retry")])]),...t})}}),U={parameters:{storySource:{source:`import { ref } from "vue";
import { FInfiniteLoad } from "./FInfiniteLoad";
import { FListItem } from "../FListItem";
import { StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FInfiniteLoad",
  component: FInfiniteLoad,
};

const Template: StoryFn<typeof FInfiniteLoad> = (args) => ({
  components: { FInfiniteLoad, FListItem },
  setup() {
    const items = ref<string[]>([]);

    async function loadData(state) {
      console.log("Load Data...");
      return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          if (items.value.length > 20) {
            state.complete();
            reject();
          } else if (Math.random() < 0.5) {
            state.error();
            reject();
          } else {
            items.value = [...items.value, ...["A", "B", "C", "D", "E"]];
            state.loaded();
            resolve();
          }
        }, 3000);
      });
    }

    return { args, items, loadData };
  },
  template: \`
    <div class="list">
      <FListItem v-for="(item, index) in items" :key="index" :title="item">
      </FListItem>
    </div>
    <FInfiniteLoad @infinite="(state) => loadData(state)" />
  \`,
});

export const Default = Template.bind({});
Default.args = {};
`,locationsMap:{default:{startLoc:{col:48,line:11},endLoc:{col:2,line:44},startBody:{col:48,line:11},endBody:{col:2,line:44}}}}},title:"Components/FInfiniteLoad",component:s},F=r(n=>({components:{FInfiniteLoad:s,FListItem:L},setup(){const t=d([]);async function i(o){return console.log("Load Data..."),new Promise((m,a)=>{setTimeout(()=>{t.value.length>20?(o.complete(),a()):Math.random()<.5?(o.error(),a()):(t.value=[...t.value,"A","B","C","D","E"],o.loaded(),m())},3e3)})}return r(i,"loadData"),{args:n,items:t,loadData:i}},template:`
    <div class="list">
      <FListItem v-for="(item, index) in items" :key="index" :title="item">
      </FListItem>
    </div>
    <FInfiniteLoad @infinite="(state) => loadData(state)" />
  `}),"Template"),v=F.bind({});v.args={};const W=["Default"];export{v as Default,W as __namedExportsOrder,U as default};
//# sourceMappingURL=FInfiniteLoad.stories.f44f8692.js.map
