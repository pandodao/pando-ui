import { ref } from "vue";

import { FPaymentModal } from "./FPaymentModal";
import { FButton } from "../FButton";
import { Meta, StoryFn } from "@storybook/vue3";

import { usePayment } from "../../plugins/payment";

export default {
  name: "FPaymentModal",
  component: FPaymentModal,
} as Meta<typeof FPaymentModal>;

const Template: StoryFn<typeof FPaymentModal> = (args) => ({
  components: { FPaymentModal, FButton },

  setup() {
    const dialog = ref(false);

    const open = () => {
      dialog.value.show({
        assetId: "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
        scheme: "string-scheme",
        amount: "0.5",
        channel: "mixin",
        hideCheckingModal: false,
        actions: {
          mixin: () => {},
        },
        checker: () => {},
      });
    };

    return { args, dialog, open };
  },

  template: `
    <div>
      <FButton color="primary" @click="open">Payment</FButton>

      <FPaymentModal ref="dialog" v-bind="args" />
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};

const Template2: StoryFn<typeof FPaymentModal> = (args) => ({
  setup() {
    const payment = usePayment();

    const open = () => {
      payment.show({
        assetId: "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
        scheme: "string-scheme",
        amount: "0.5",
        channel: "mixin",
        hideCheckingModal: false,
        actions: {
          mixin: () => {},
        },
        checker: () => {},
        ...args,
      });
    };

    return { open, args };
  },

  template: `
    <FButton color="primary" @click="open">Payment</FButton>
  `,
});

export const Functional = Template2.bind({});
Functional.args = {};