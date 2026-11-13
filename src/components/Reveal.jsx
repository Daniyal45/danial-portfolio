"use client";

// Packages
import { useContext } from "react";
import { motion, useTransform } from "framer-motion";

// Utils
import { PanelContext, StackContext } from "./StackContext";
import { EASE } from "@/constants";

// Content settles in as its panel arrives: scroll-linked while stacked, once in view otherwise.
// `as` is an HTML tag name or a motion component (e.g. MotionLink).
function Reveal({ as = "div", direction = 0, delay = 0, children, ...rest }) {
  /****** States ******/
  const { isStacked } = useContext(StackContext);
  const { progress } = useContext(PanelContext);
  const start = Math.min(delay, 0.3);
  const x = useTransform(progress, [start, start + 0.45], [direction * 24, 0]);
  const y = useTransform(progress, [start, start + 0.45], [16, 0]);
  const opacity = useTransform(progress, [start, start + 0.3], [0, 1]);
  const MotionTag = typeof as === "string" ? motion[as] : as;

  /****** Render Functions ******/
  if (isStacked) {
    return (
      <MotionTag style={{ x, y, opacity }} {...rest}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.5, ease: EASE, delay: Math.min(delay, 0.24) }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;
