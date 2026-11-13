"use client";

// Packages
import { motion, useReducedMotion, useTransform } from "framer-motion";

// Utils
import { EASE } from "@/constants";

const GRID_MASK = "radial-gradient(ellipse 70% 60% at 50% 45%, #000 20%, transparent 75%)";

// Ambient hero backdrop: dot grid + two drifting colour washes. Transform/opacity only; static under reduced motion
function HeroBackground({ isVisible, scrollY }) {
  /****** States ******/
  const reduceMotion = useReducedMotion();
  const gridY = useTransform(scrollY, [0, 800], [0, -60]);
  const washOneY = useTransform(scrollY, [0, 800], [0, -120]);
  const washTwoY = useTransform(scrollY, [0, 800], [0, -40]);

  const getDrift = (x, y, duration) =>
    reduceMotion ? {} : { animate: { x: [0, x, 0], y: [0, y, 0] }, transition: { duration, ease: "easeInOut", repeat: Infinity } };

  /****** Render Functions ******/
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1.2, ease: EASE }}
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
    >
      <motion.div
        className="absolute -inset-10"
        style={{
          y: gridY,
          backgroundImage: "radial-gradient(rgba(15,27,61,.16) 1px, transparent 1.5px)",
          backgroundSize: "32px 32px",
          maskImage: GRID_MASK,
          WebkitMaskImage: GRID_MASK,
        }}
      />
      <motion.div
        className="absolute -left-[8%] -top-[14%] aspect-square w-[min(52vw,640px)] will-change-transform"
        style={{ y: washOneY }}
      >
        <motion.div
          className="size-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(47,182,124,.22), transparent 68%)" }}
          {...getDrift(60, 40, 18)}
        />
      </motion.div>
      <motion.div
        className="absolute -bottom-[18%] -right-[6%] aspect-square w-[min(46vw,560px)] will-change-transform"
        style={{ y: washTwoY }}
      >
        <motion.div
          className="size-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(47,91,208,.16), transparent 68%)" }}
          {...getDrift(-50, -36, 22)}
        />
      </motion.div>
    </motion.div>
  );
}

export default HeroBackground;
