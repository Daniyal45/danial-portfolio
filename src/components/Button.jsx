// Utils
import { classNames } from "@/utils";

const VARIANTS = {
  primary: "border-transparent bg-brand text-white hover:bg-brand-hover",
  secondary: "border-line-2 bg-surface hover:border-ink-3",
};

const SIZES = {
  md: "h-12 rounded-[10px] px-5 text-[15px]",
  sm: "h-9 rounded-lg px-3.5 text-sm",
};

function Button({ variant = "primary", size = "md", className, children, ...rest }) {
  /****** Render Functions ******/
  return (
    <button
      type="button"
      className={classNames(
        "inline-flex items-center justify-center gap-2 border font-medium transition-[background-color,border-color,scale] duration-150 ease-out-soft active:scale-[.98]",
        VARIANTS[variant],
        SIZES[size],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
