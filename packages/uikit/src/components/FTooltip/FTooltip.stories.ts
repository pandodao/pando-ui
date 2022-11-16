import { ref } from "vue";

import { FTooltip } from "./FTooltip";
import { FButton } from "../FButton";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  name: "FTooltip",
  component: FTooltip,
} as Meta<typeof FTooltip>;

const Template: StoryFn<typeof FTooltip> = (args) => ({
  components: { FTooltip, FButton },

  setup() {
    const dialog = ref(false);
    return { args, dialog };
  },

  template: `
    <div style="text-align: center; padding: 100px">
      <FTooltip text="tooltip test test test test test test test test test test test test test test tip test test test" v-model="dialog" v-bind="args">
        <template #activator="{props}">
          <FButton color="primary" v-bind="props">
            Tooltip
          </FButton>
        </template>
      </FTooltip>
    </div>
  `,
});

export const Top = Template.bind({});
Top.args = { location: "top", openOnHover: false, openOnClick: true };

export const End = Template.bind({});
End.args = { location: "end", openOnHover: false, openOnClick: true };

export const Bottom = Template.bind({});
Bottom.args = { location: "bottom", openOnHover: false, openOnClick: true };

export const Start = Template.bind({});
Start.args = { location: "start", openOnHover: false, openOnClick: true };
