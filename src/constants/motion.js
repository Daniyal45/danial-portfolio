export const EASE = [0.22, 1, 0.36, 1];

export const ZOOM_EASE = [0.7, 0, 0.2, 1];

// Stacked panels only on viewports tall and wide enough to hold a full panel
export const STACK_MEDIA_QUERY = "(min-width: 901px) and (min-height: 720px)";

// Intro timeline: laptop opens -> boots -> zooms into screen -> name appears -> scroll unlocks
export const INTRO_TIMELINE = [
  { phase: "boot", delay: 1000 },
  { phase: "zoom", delay: 3400 },
  { phase: "name", delay: 4650 },
  { phase: "done", delay: 6200 },
];

// Timeline rows arrive top to bottom; each dot settles, its text slides in, then the connector draws down
export const TIMELINE_VARIANTS = {
  list: { show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } },
  item: { hidden: {}, show: {} },
  dot: {
    hidden: { scale: 0.4, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.35, ease: EASE } },
  },
  row: {
    hidden: { opacity: 0, x: 32 },
    show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE } },
  },
  segment: {
    hidden: { scaleY: 0 },
    show: { scaleY: 1, transition: { duration: 0.4, ease: EASE, delay: 0.2 } },
  },
};
