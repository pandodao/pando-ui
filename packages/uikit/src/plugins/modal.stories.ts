import { StoryFn } from "@storybook/vue3";
import { useModal } from "./modal";

export default {
  title: "Plugin/Modal",
};

const Template: StoryFn = (args) => ({
  setup() {
    const modal = useModal();
    const open = () => {
      modal.show({
        title: "Title",
        text: "Once the transaction is executed, it is irrevocable, please pay after confirmation carefully",
        confirm: {
          props: { color: "error" },
          text: "confirm",
        },
      });
    };

    return { open };
  },
  template: `
    <FButton color="primary" @click="open">Show Message Modal</FButton>
  `,
});

export const Default = Template.bind({});
Default.args = {};
