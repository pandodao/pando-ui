import { ref } from "vue";
import { FLoading } from "./FLoading";
import { FButton } from "../FButton";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  name: "FLoading",
  component: FLoading,
} as Meta<typeof FLoading>;

const Template: StoryFn<typeof FLoading> = (args) => ({
  components: { FLoading, FButton },
  setup() {
    const loading = ref(false);
    const show = () => {
      loading.value = true;

      setTimeout(() => (loading.value = false), 3000);
    };

    return { args, loading, show };
  },
  template: `
    <div>
      <FLoading v-model="loading" v-bind="args" />  

      <FButton color="primary" @click="show">Show</FButton>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = { fullscreen: true, text: "Please Wait" };
