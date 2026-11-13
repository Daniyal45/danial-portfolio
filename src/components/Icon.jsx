// Utils
import { classNames } from "@/utils";

function Icon({ path, className = "size-[18px]" }) {
  /****** Render Functions ******/
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={classNames(
        "flex-none fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]",
        className
      )}
    >
      <path d={path} />
    </svg>
  );
}

export default Icon;
