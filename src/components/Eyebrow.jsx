// Utils
import { classNames } from "@/utils";

function Eyebrow({ number, title, isInverted = false }) {
  /****** Render Functions ******/
  return (
    <p className={classNames("flex items-baseline gap-3 text-sm", isInverted ? "text-white/72" : "text-ink-2")}>
      <span className={classNames("font-mono text-xs leading-[normal]", isInverted ? "text-white/50" : "text-ink-3")}>{number}</span>
      {title}
    </p>
  );
}

export default Eyebrow;
