import { FAuthMethodModal } from "./FAuthMethodModal";
import { FButton } from "../FButton";
import { ref } from "vue";
import { Meta, StoryFn } from "@storybook/vue3";
import { useAuth } from "../../plugins/auth";
import { useToast } from "../../plugins/toast";

import { usePassport } from "../../../../passport/src/index";

export default {
  name: "FAuthMethodModal",
  component: { FAuthMethodModal },
} as Meta<typeof FAuthMethodModal>;

const Template: StoryFn<typeof FAuthMethodModal> = (args) => ({
  components: { FAuthMethodModal, FButton },
  setup() {
    const authModal = ref();
    const toast = useToast();

    const open = () => {
      authModal.value.show();
    };

    const handleAuth = (data) => {
      toast.success({ message: JSON.stringify(data) });
    };

    const handleError = (error) => {
      toast.error({ message: error });
    };

    return { args, open, authModal, handleAuth, handleError };
  },
  template: `
    <FButton color="primary" @click="open">Auth</FButton>

    <FAuthMethodModal ref="authModal" v-bind="args" @auth="handleAuth" @error="handleError" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  authMethods: ["fennec", "mixin", "metamask", "walletconnect", "onekey"],
  scope: "PROFILE:READ",
  clientId: "fbd26bc6-3d04-4964-a7fe-a540432b16e2",
};

export const InstallState = Template.bind({});
InstallState.args = {
  ...Default.args,
  authMethodState: { fennec: true, metamask: true, onekey: true },
};

export const PKCE = Template.bind({});
PKCE.args = {
  ...Default.args,
  pkce: true,
};

const Template2: StoryFn<typeof FAuthMethodModal> = (args) => ({
  setup() {
    const auth = useAuth();
    const toast = useToast();

    const open = () => {
      auth.show({
        wallets: ["mixin"],
        handleAuth: (data) => {
          toast.success({ message: JSON.stringify(data) });
        },
        handleError: (error) => {
          toast.error(error);
        },
      });
    };

    return { open, args };
  },

  template: `
    <FButton color="primary" @click="open">Auth</FButton>
  `,
});

export const Functional = Template2.bind({});
Functional.args = {};

const Template3: StoryFn = () => ({
  setup() {
    const toast = useToast();
    const passport = usePassport();
    const openAuth = async () => {
      try {
        const { channel, token } = await passport.auth();

        toast.success({ message: `Auth success: ${channel} - ${token}` });
      } catch (error: any) {
        toast.error(error);
      }
    };
    return { openAuth };
  },

  template: `
    <FButton color="primary" @click="openAuth">Auth</FButton>
  `,
});

export const Passport = Template3.bind({});
Passport.args = {};
