import "./FSearchRecords.scss";
import { defineComponent, PropType } from "vue";

export const FSearchRecords = defineComponent({
  name: "FSearchRecords",

  props: {
    records: {
      type: Object as PropType<string[]>,
      default: () => [],
    },
  },

  emits: {
    select: (v: string) => true,
    clear: () => true,
  },

  setup(props, { emit }) {
    return () => (
      <div class="f-search-records">
        {props.records.map((record) => {
          return (
            <div class="f-search-record" onClick={() => emit("select", record)}>
              {record}
            </div>
          );
        })}

        <div
          class="f-search-record f-search-record__clear"
          onClick={() => emit("clear")}
        >
          Clear
        </div>
      </div>
    );
  },
});
