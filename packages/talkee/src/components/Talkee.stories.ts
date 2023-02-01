import Talkee from "../components/Talkee.vue";
import { StoryFn } from "@storybook/vue3";

export default {
  title: "Talkee/Talkee",
  components: Talkee,
};

const Template: StoryFn<typeof Talkee> = (args) => ({
  components: { Talkee },
  setup() {
    return { args };
  },
  template: "<Talkee v-bind='args' />",
});

export const Default = Template.bind({});

Default.args = {
  apiBase: "https://talkee-api.mixin.fan/api",
  slug: "7000103488-course-2367",
  siteId: "2",
  clientId: "61504be8-a9da-477d-9e18-448ac3780919",
};
