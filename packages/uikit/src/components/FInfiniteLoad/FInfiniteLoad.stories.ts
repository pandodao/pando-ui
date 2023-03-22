import { ref } from "vue";
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
  template: `
    <div class="list">
      <FListItem v-for="(item, index) in items" :key="index" :title="item">
      </FListItem>
    </div>
    <FInfiniteLoad @infinite="(state) => loadData(state)" />
  `,
});

export const Default = Template.bind({});
Default.args = {};
