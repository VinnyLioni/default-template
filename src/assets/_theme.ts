export const Gataticos = () => {
  const pt = {
    button: {
      root: "bg-teal-500 hover:bg-teal-700 active:bg-teal-900 cursor-pointer py-2 px-4 rounded-full border-0 flex gap-2",
      label: "text-white font-bold text-lg",
      icon: "text-white text-xl",
    },
    datatable: {
      table: "w-full border-spacing-0 border-9",
      thead: ({ context }: { context: { scrollable?: boolean } }) => ({
        class: [{ "top-0 z-40 sticky": context.scrollable }],
      }),
      footer: {
        class: ["font-bold", "border-t-0 border-b border-x-0"],
      },
      column: {
        headercell: ({
          context,
          props,
        }: {
          context: {
            resizable?: boolean;
            showGridlines?: boolean;
            size?: string;
            sorted?: boolean;
          };
          props: { frozen?: boolean | string; sortable?: boolean | string };
        }) => ({
          class: [
            "font-bold",

            // position
            { "sticky z-20 border-b": props.frozen || props.frozen === "" },
            { relative: context.resizable },

            // alignment
            "text-left",

            // shape
            { "first:border-l border-y border-r": context?.showGridlines },

            // spacing
            context?.size === "small"
              ? "p-2"
              : context?.size === "large"
              ? "p-5"
              : "p-4",

            //states
            {
              "hover:bg-neutral-200/40 dark:hover:bg-slate-700/30":
                (props?.sortable === "" || props.sortable) && !context?.sorted,
            },
            "focus-visible:outline-hidden focus:rounded-lg focus-visible:outline-offset-0 focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-slate-400/50 dark:focus-visible:ring-slate-300/50",

            // Transition
            {
              "transition duration-200":
                props.sortable === "" || props.sortable,
            },

            // Misc
            { "cursor-pointer": props.sortable === "" || props.sortable },
            {
              "overflow-hidden space-nowrap border-y bg-clip-padding":
                context.resizable, // Resizable
            },
          ],
        }),
      },
    },
  };

  return { pt };
};
