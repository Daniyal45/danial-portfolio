export const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export const classNames = (...classes) => classes.filter(Boolean).join(" ");

export { getFadeMotion, getRiseMotion } from "./motion";
