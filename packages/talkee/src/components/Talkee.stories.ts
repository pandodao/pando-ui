import Talkee from "../components/Talkee.vue";
import { StoryFn } from "@storybook/vue3";

export default {
  title: "Talkee/Talkee",
  components: Talkee,
};

const Template: StoryFn<typeof Talkee> = (args) => ({
  components: { Talkee },
  setup() {
    return {};
  },
  template: "<Talkee />",
});

export const Default = Template.bind({});

Default.args = {};
