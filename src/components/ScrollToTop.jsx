"use client";

// Packages
import { useEffect, useState } from "react";

// Utils
import Icon from "./Icon";
import { ICONS } from "@/constants";
import { classNames } from "@/utils";

const SHOW_AFTER_PX = 400;

function ScrollToTop() {
  /****** States ******/
  const [isVisible, _isVisible] = useState(false);

  /****** Handlers ******/
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /****** Effects ******/
  useEffect(() => {
    const handleScroll = () => _isVisible(window.scrollY > SHOW_AFTER_PX);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={handleClick}
      tabIndex={isVisible ? 0 : -1}
      className={classNames(
        "fixed bottom-5 right-5 z-[90] grid size-11 place-items-center rounded-full border-transparent bg-brand text-white shadow-lg transition-all duration-200 ease-out-soft hover:bg-brand-hover md:bottom-8 md:right-8",
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <Icon path={ICONS.arrow} className="size-5 [transform:rotate(-90deg)]" />
    </button>
  );
}

export default ScrollToTop;
