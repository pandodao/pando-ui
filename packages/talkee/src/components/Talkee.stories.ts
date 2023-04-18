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
  apiBase: "https://talkee-api.pando.im/api",
  // slug: "talkee-demo",
  slug: "/news/2022/2022-12-21-protocol-upgrade-and-integration-plan/",
  siteId: "1",
  clientId: "61504be8-a9da-477d-9e18-448ac3780919",
  authMethods: ["mixin", "fennec", "metamask"],
};

export const Test = Template.bind({});

Test.args = {
  apiBase: "https://talkee-api.aspens.rocks/api",
  wsBase: "wss://talkee-ws.pando.im/ws",
  wsApiBase: "https://talkee-ws.pando.im/ws",
  redirectUrl: "http://localhost:6006/?path=/story/talkee-talkee--test",
  slug: "talkee-chat",
  siteId: "3",
  clientId: "829283f7-c82d-4931-bad6-a04da459d83b",
  authMethods: ["mixin", "fennec", "metamask"],
};
