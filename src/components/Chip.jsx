// Utils
import { classNames } from "@/utils";

function Chip({ isHighlighted = false, children }) {
  /****** Render Functions ******/
  return (
    <span
      className={classNames(
        "rounded-lg border px-3 py-1 text-sm leading-6",
        isHighlighted ? "border-transparent bg-brand font-medium text-white" : "border-line bg-canvas text-ink-2"
      )}
    >
      {children}
    </span>
  );
}

export default Chip;
