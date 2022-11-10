import { FInfoGrid } from "./FInfoGrid";
import { FInfoGridItem } from "./FInfoGridItem";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  name: "FInfoGrid",
  component: FInfoGrid,
} as Meta<typeof FInfoGrid>;

const Template: StoryFn<typeof FInfoGrid> = (args) => ({
  components: { FInfoGrid, FInfoGridItem },
  setup() {
    const items = [
      {
        title: "ETH Position",
        value: "5.27638999",
        valueUnit: "ETH",
      },
      {
        title: "24h changes",
        value: "+34.41",
        valueUnit: "%",
        valueColor: "green",
      },
      {
        title: "7d changes",
        value: "-1.41",
        valueUnit: "%",
        valueColor: "red",
      },
      {
        title: "Profit Margin (USD)",
        value: "-0.121",
        valueUnit: "%",
        valueColor: "red",
        valueCustomColor: "blue",
      },
      {
        title: "Profit (ETH)",
        value: "+0.00235512",
        valueUnit: "ETH",
        valueColor: "",
        hint: "Some description about profit.",
      },
    ];
    return { args, items };
  },
  template: `
    <FInfoGrid v-bind="args">
      <FInfoGridItem 
        v-for="(item, ix) in items"
        :key="ix"
        :index="ix"
        :title="item.title"
        :value="item.value"
        :unit="item.valueUnit"
        :color="item.valueColor"
        :hint="item.hint"
      />
    </FInfoGrid>
  `,
});

export const Default = Template.bind({});
Default.args = { reverse: false, list: false };
