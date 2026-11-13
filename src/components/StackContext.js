"use client";

// Packages
import { createContext } from "react";

// Page-level stack state: { isStacked, scrollY, viewportHeightRef }
export const StackContext = createContext(null);

// Per-panel state: { progress } — 0 (panel below the fold) -> 1 (panel covers the viewport)
export const PanelContext = createContext(null);
