"use client";

// Packages
import { useContext } from "react";
import { motion, useTransform } from "framer-motion";

// Utils
import { PanelContext, StackContext } from "./StackContext";
import { clamp, classNames } from "@/utils";

function Panel({ index, id, isLast = false, className, children }) {
  /****** States ******/
  const { isStacked, scrollY, viewportHeightRef } = useContext(StackContext);
  const isFirst = index === 0;
  const progress = useTransform(scrollY, (y) =>
    isFirst ? 1 : clamp((y - (index - 1) * viewportHeightRef.current) / viewportHeightRef.current, 0, 1)
  );
  const nextProgress = useTransform(scrollY, (y) =>
    isLast ? 0 : clamp((y - index * viewportHeightRef.current) / viewportHeightRef.current, 0, 1)
  );
  const scale = useTransform(nextProgress, [0, 1], [1, 0.94]);
  const dimOpacity = useTransform(nextProgress, [0, 1], [0, 0.32]);

  /****** Render Functions ******/
  return (
    <PanelContext.Provider value={{ progress }}>
      <motion.section
        id={id}
        data-panel
        className={classNames(
          "flex origin-top items-center overflow-hidden",
          isStacked ? "sticky top-0 h-svh" : "relative",
          isStacked && !isFirst && "rounded-t-[20px] shadow-[0_-12px_32px_-20px_rgba(15,27,61,.3)]",
          !isStacked && !isFirst && "border-t border-line",
          !isStacked && isFirst && "min-h-svh",
          className
        )}
        style={{ zIndex: index + 1, scale: isStacked ? scale : 1 }}
      >
        {children}
        <motion.i
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 bg-ink"
          style={{ opacity: isStacked ? dimOpacity : 0 }}
        />
      </motion.section>
    </PanelContext.Provider>
  );
}

export default Panel;
