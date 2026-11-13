// Utils
import { EASE } from "@/constants";

// Letter/word rising out of a clipped line
export const getRiseMotion = (isVisible, delay) => ({
  initial: { y: "110%" },
  animate: { y: isVisible ? 0 : "110%" },
  transition: { duration: 0.7, ease: EASE, delay },
});

// Soft fade up
export const getFadeMotion = (isVisible, delay) => ({
  initial: { opacity: 0, y: 8 },
  animate: isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 },
  transition: { duration: 0.5, ease: EASE, delay },
});
