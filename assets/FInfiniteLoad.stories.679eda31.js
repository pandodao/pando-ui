var l=Object.defineProperty;var r=(n,t)=>l(n,"name",{value:t,configurable:!0});import{z as p,a as e,r as d}from"./vue.esm-bundler.3b29098a.js";import{K as f}from"./v3-infinite-loading.2bf99b14.js";import{F as c}from"./FFullscreenLoading.25afd438.js";import{a as u}from"./locale.eccdb440.js";import{F as L}from"./FListItem.b41d1377.js";import"./VProgressCircular.c527f932.js";import"./VIcon.c254d683.js";import"./useRender.3ca1765f.js";import"./helpers.e1d6c4cc.js";import"./color.fef4ce02.js";import"./intersectionObserver.b06f0fb9.js";import"./VOverlay.e2cb60a6.js";import"./dimensions.c2f0e23c.js";import"./easing.36b781ab.js";import"./anchor.c52c8661.js";import"./transition.94342caf.js";import"./router.6cb3b155.js";import"./proxiedModel.67252d17.js";import"./display.f5b0b65d.js";import"./VListItem.aa6733a2.js";import"./createSimpleFunctional.b1ebbe28.js";import"./index.09e65b91.js";import"./variant.be65e42d.js";import"./border.d0444c35.js";import"./density.6dd2b9c7.js";import"./elevation.154beddf.js";import"./rounded.375414e4.js";import"./VAvatar.ab09abd9.js";import"./VImg.78cc729b.js";import"./index.1414bb4a.js";const s=p({name:"FInfiniteLoad",props:{completeText:{type:String,default:""},errorText:{type:String,default:""}},setup(n,{slots:t}){const{t:i}=u();return()=>e(f,null,{spinner:()=>e(c,{size:"16"},null),complete:()=>e("div",{class:"f-infinited-load__hint"},[e("span",null,[n.completeText||i("$vuetify.uikit.infinite_complete")])]),error:({retry:o})=>e("div",{class:"f-infinited-load__hint"},[e("span",null,[n.errorText||i("$vuetify.uikit.infinite_error")]),e("span",{onClick:o,class:"f-infinited-load__retry"},[i("$vuetify.uikit.retry")])]),...t})}}),U={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FInfiniteLoad.stories.679eda31.js.map
