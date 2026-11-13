"use client";

// Packages
import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { animate, motion, MotionConfig, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";

// Utils
import { Button, Chip, Eyebrow, HeroBackground, Icon, ScrollToTop } from "@/components";
import { MotionLink, Panel, Reveal, StackContext } from "@/components";
import {
  ABOUT,
  BOOT_LOG,
  CONTACT,
  EASE,
  HERO,
  ICONS,
  INTRO_TIMELINE,
  PROJECTS,
  SECTION_INDEX,
  SECTIONS,
  SKILLS,
  STACK_MEDIA_QUERY,
  TIMELINE_VARIANTS,
  WORK_HISTORY,
  ZOOM_EASE,
} from "@/constants";
import { classNames, getFadeMotion, getRiseMotion } from "@/utils";

function Home() {
  /****** States ******/
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const viewportHeightRef = useRef(800);
  const [introPhase, _introPhase] = useState("open");
  const [bootProgress, _bootProgress] = useState(0);
  const [activeSection, _activeSection] = useState(SECTION_INDEX.home);
  const [isMenuOpen, _isMenuOpen] = useState(false);
  const [isStacked, _isStacked] = useState(false);
  const [viewport, _viewport] = useState({ width: 1280, height: 800 });
  const [isEmailCopied, _isEmailCopied] = useState(false);

  const isIntroDone = introPhase === "done";
  const isNameVisible = introPhase === "name" || isIntroDone;
  const isZoomed = introPhase === "zoom" || isNameVisible;
  const isBooting = introPhase === "boot" || isZoomed;
  const isChromeVisible = isNameVisible;
  const laptopWidth = Math.min(viewport.width * (viewport.width < 640 ? 0.92 : 0.78), 820);
  const zoomScale = Math.max(viewport.width / (laptopWidth - 24), viewport.height / (laptopWidth * 0.65 - 26)) * 1.1;
  const stackContext = { isStacked, scrollY, viewportHeightRef };
  const innerClassName = classNames(
    "relative z-[2] mx-auto w-full max-w-[1160px]",
    isStacked ? "px-8 pb-8 pt-[88px]" : "px-5 pb-[72px] pt-[88px] sm:px-8 sm:pb-20 sm:pt-24"
  );
  const twoColumnClassName = "grid grid-cols-1 items-center gap-[clamp(32px,6vw,96px)] lg:grid-cols-2";

  /****** Handlers ******/
  const handleSyncViewport = () => {
    viewportHeightRef.current = window.innerHeight;
    _viewport({ width: window.innerWidth, height: window.innerHeight });
    _isStacked(window.matchMedia(STACK_MEDIA_QUERY).matches && !reduceMotion);
  };

  const handleScrollToSection = (index) => {
    _isMenuOpen(false);
    if (isStacked) {
      window.scrollTo({ top: index * viewportHeightRef.current, behavior: "smooth" });
      return;
    }
    document.getElementById(SECTIONS[index].id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickLogo = (e) => {
    e.preventDefault();
    handleScrollToSection(SECTION_INDEX.home);
  };

  const handleToggleMenu = () => {
    _isMenuOpen((isOpen) => !isOpen);
  };

  const handleSkipIntro = () => {
    _introPhase("done");
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
    } catch {
      // Clipboard can be blocked (permissions / insecure context); the mailto link still works
    }
    _isEmailCopied(true);
    setTimeout(() => _isEmailCopied(false), 1600);
  };

  const handleTrackActiveSection = () => {
    const panels = [...document.querySelectorAll("[data-panel]")];
    let current = SECTION_INDEX.home;
    panels.forEach((panel, index) => {
      if (panel.getBoundingClientRect().top <= window.innerHeight * 0.5) current = index;
    });
    _activeSection(current);
  };

  /****** Effects ******/
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    handleSyncViewport();
    window.addEventListener("resize", handleSyncViewport);
    return () => window.removeEventListener("resize", handleSyncViewport);
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion) {
      _introPhase("done");
      return;
    }
    if (isIntroDone) return;
    const timers = INTRO_TIMELINE.map(({ phase, delay }) => setTimeout(() => _introPhase(phase), delay));
    return () => timers.forEach(clearTimeout);
  }, [isIntroDone, reduceMotion]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", !isIntroDone);
  }, [isIntroDone]);

  useEffect(() => {
    if (introPhase !== "boot") return;
    const controls = animate(0, 100, {
      duration: 2.1,
      ease: "easeInOut",
      onUpdate: (value) => _bootProgress(Math.round(value)),
    });
    return () => controls.stop();
  }, [introPhase]);

  useMotionValueEvent(scrollY, "change", handleTrackActiveSection);

  /****** Render Functions ******/
  const SECTION_HEADING = ({ number, title, heading, highlight, lead, isInverted = false, isCompact = false }) => (
    <Fragment>
      <Eyebrow number={number} title={title} isInverted={isInverted} />
      <h2
        className={classNames(
          "mt-3 max-w-[18ch] text-[clamp(28px,3.4vw,44px)] font-medium leading-[1.1] tracking-[-.02em]",
          isCompact ? "mb-0" : "mb-4"
        )}
      >
        {heading}
        {highlight && (
          <Fragment>
            {" "}
            <em className={classNames("not-italic", isInverted ? "text-white/55" : "text-ink-3")}>{highlight}</em>
          </Fragment>
        )}
      </h2>
      {[lead].flat().filter(Boolean).map((paragraph) => (
        <p
          key={paragraph}
          className={classNames("max-w-[52ch] text-base sm:text-[17px] [&+p]:mt-4", isInverted ? "text-white/72" : "text-ink-2")}
        >
          {paragraph}
        </p>
      ))}
    </Fragment>
  );

  const TOP_NAV = () => (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: isChromeVisible ? 1 : 0, y: isChromeVisible ? 0 : -8 }}
      transition={{ duration: 0.5, ease: EASE }}
      className={classNames(
        "fixed inset-x-0 top-0 z-[100] border-b border-line bg-white/96",
        !isChromeVisible && "pointer-events-none"
      )}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-[1160px] items-center gap-3 px-5 md:gap-6 md:px-8">
        <a href="#home" onClick={handleClickLogo} className="mr-auto flex min-h-11 items-center gap-3">
          <Image src="/portfolio.svg" width={36} height={36} alt={HERO.name} className="size-9" />
          <Image src="/Green secondary logo.jpg" width={394} height={222} alt="" className="h-9 w-auto" />
        </a>
        <ul className="hidden gap-1 md:flex">
          {SECTIONS.slice(SECTION_INDEX.about, SECTION_INDEX.contact).map(({ id, label }, index) => {
            const isActive = activeSection === index + 1;
            return (
              <li key={id}>
                <button
                  type="button"
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => handleScrollToSection(index + 1)}
                  className={classNames(
                    "h-9 rounded-lg px-3 text-sm transition-colors duration-150 ease-out-soft hover:text-ink",
                    isActive ? "bg-brand-soft font-medium text-brand" : "text-ink-2"
                  )}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          aria-current={activeSection === SECTION_INDEX.contact ? "true" : undefined}
          onClick={() => handleScrollToSection(SECTION_INDEX.contact)}
          className={classNames(
            "h-9 rounded-lg px-3 text-sm transition-colors duration-150 ease-out-soft hover:text-ink max-xs:hidden",
            activeSection === SECTION_INDEX.contact ? "bg-brand-soft font-medium text-brand" : "text-ink-2"
          )}
        >
          Contact me
        </button>
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={isMenuOpen}
          onClick={handleToggleMenu}
          className="-mr-2.5 grid size-11 place-items-center rounded-lg md:hidden"
        >
          <Icon path={isMenuOpen ? ICONS.close : ICONS.menu} />
        </button>
      </nav>
      {isMenuOpen && MOBILE_NAV()}
    </motion.header>
  );

  const MOBILE_NAV = () => (
    <ul className="absolute inset-x-0 top-16 border-b border-line bg-white px-5 pb-3 pt-1 md:hidden">
      {SECTIONS.slice(SECTION_INDEX.about).map(({ id, label }, index) => (
        <li key={id} className="border-b border-line last:border-b-0">
          <button
            type="button"
            onClick={() => handleScrollToSection(index + 1)}
            className="h-12 w-full text-left text-base text-ink"
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );

  const SECTION_DOTS = () => (
    <motion.div
      animate={{ opacity: isIntroDone ? 1 : 0 }}
      className="fixed right-4 top-1/2 z-[100] hidden -translate-y-1/2 flex-col lg:flex"
    >
      {SECTIONS.map(({ id, label }, index) => {
        const isActive = activeSection === index;
        const isDark = activeSection === SECTION_INDEX.contact;
        return (
          <button
            key={id}
            type="button"
            aria-label={`Go to ${label}`}
            onClick={() => handleScrollToSection(index)}
            className="flex h-7 w-11 items-center justify-end pr-2"
          >
            <i
              className={classNames(
                "block w-1.5 rounded-[3px] transition-[height,background-color] duration-300 ease-out-soft",
                isActive ? "h-5" : "h-1.5",
                isDark ? (isActive ? "bg-white" : "bg-white/30") : isActive ? "bg-ink" : "bg-ink/22"
              )}
            />
          </button>
        );
      })}
    </motion.div>
  );

  const HERO_LAPTOP = () => (
    <motion.div
      animate={{ opacity: isNameVisible ? 0 : 1 }}
      transition={{ duration: 0.6 }}
      className="pointer-events-none absolute inset-x-0 top-0 z-[3] grid h-svh place-items-center"
    >
      <motion.div
        animate={{ scale: isZoomed ? zoomScale : 1 }}
        transition={{ duration: 1.25, ease: ZOOM_EASE }}
        style={{ width: laptopWidth }}
        className="origin-[50%_49%] perspective-[1400px]"
      >
        <motion.div
          initial={{ rotateX: -96 }}
          animate={{ rotateX: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
          className="aspect-[16/10.4] origin-bottom rounded-[16px_16px_6px_6px] bg-lid px-3 pb-3.5 pt-3 shadow-[0_32px_48px_-28px_rgba(15,27,61,.5)]"
        >
          <motion.div
            initial={{ backgroundColor: "#0F1B3D" }}
            animate={{ backgroundColor: isZoomed ? "#F6F8FB" : "#0F1B3D" }}
            transition={{ duration: 1 }}
            className="relative h-full overflow-hidden rounded-md"
          >
            <motion.div
              animate={{ opacity: isZoomed ? 0 : 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col font-mono text-[10px] leading-[1.5] text-terminal-text sm:text-xs sm:leading-[1.7]"
            >
              <div className="flex items-center gap-1.5 border-b border-white/6 bg-lid-bar px-3 py-1.5 sm:py-2">
                <i className="size-2 rounded-full bg-white/18" />
                <i className="size-2 rounded-full bg-white/18" />
                <i className="size-2 rounded-full bg-white/18" />
                <span className="ml-2">{HERO.name} — boot</span>
              </div>
              <div className="min-h-0 flex-1 overflow-hidden p-2.5 sm:p-4">
                {BOOT_LOG.map(({ text, status }, index) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0 }}
                    animate={isBooting ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.38, duration: 0.2 }}
                    className="whitespace-nowrap"
                  >
                    <span className="text-terminal-prompt">&gt;</span> {text}{" "}
                    {status && <span className="text-terminal-ok">… {status}</span>}
                  </motion.div>
                ))}
              </div>
              <div className="px-2.5 pb-2.5 sm:px-4 sm:pb-4">
                <p className="flex justify-between tabular-nums">
                  <span>Starting portfolio</span>
                  <span>{bootProgress}%</span>
                </p>
                <div className="mt-2 h-1 overflow-hidden rounded-xs bg-white/10">
                  {/* Width is driven by live progress, so it must be inline */}
                  <div className="h-full bg-live" style={{ width: `${bootProgress}%` }} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="relative -mx-[6%] h-3.5 w-[112%] rounded-b-2xl bg-[linear-gradient(#DDE2EA,#C3CAD6)] shadow-[0_16px_24px_-16px_rgba(15,27,61,.35)] after:absolute after:left-1/2 after:top-0 after:h-1 after:w-[18%] after:-translate-x-1/2 after:rounded-b-lg after:bg-[#AEB7C6] after:content-['']" />
      </motion.div>
    </motion.div>
  );

  const HERO_CONTENT = () => (
    <div className="relative z-[4] flex flex-col items-center px-5 text-center">
      <motion.span {...getFadeMotion(isNameVisible, 0.7)} className="mb-6 inline-flex items-center gap-2 text-sm text-ink-2">
        <i className="size-2 rounded-full bg-live" />
        {HERO.status}
      </motion.span>
      <h1
        aria-label={HERO.name}
        className="flex flex-wrap justify-center gap-x-[.24em] text-[clamp(40px,6.6vw,92px)] font-medium leading-[1.02] tracking-[-.035em]"
      >
        {HERO.name.split(" ").map((word, wordIndex) => (
          <span key={word} aria-hidden="true" className="inline-flex">
            {word.split("").map((letter, letterIndex) => (
              <span key={letterIndex} className="inline-block overflow-hidden pb-[.1em] pt-[.02em]">
                <motion.span
                  {...getRiseMotion(isNameVisible, (wordIndex * 5 + letterIndex) * 0.03)}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              </span>
            ))}
          </span>
        ))}
      </h1>
      <p className="mt-2 flex flex-wrap justify-center gap-x-[.3em] text-[clamp(18px,2vw,24px)] text-ink-2">
        <span className="sr-only">{HERO.roleWords.join(" ")}</span>
        {HERO.roleWords.map((word, index) => (
          <span key={word} aria-hidden="true" className="inline-block overflow-hidden pb-[.1em] pt-[.02em]">
            <motion.span {...getRiseMotion(isNameVisible, 0.4 + index * 0.06)} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </p>
      <motion.p {...getFadeMotion(isNameVisible, 0.7)} className="mb-8 mt-5 max-w-[44ch] text-base text-ink-2 sm:text-lg">
        {HERO.summary}
      </motion.p>
      <motion.div {...getFadeMotion(isNameVisible, 0.8)} className="flex flex-wrap justify-center gap-3">
        <Button onClick={() => handleScrollToSection(SECTION_INDEX.projects)}>
          View my work
          <Icon path={ICONS.arrow} className="size-4" />
        </Button>
        <Button variant="secondary" onClick={() => handleScrollToSection(SECTION_INDEX.contact)}>
          Get in touch
        </Button>
      </motion.div>
    </div>
  );

  const HERO_SECTION = () => (
    <Panel index={SECTION_INDEX.home} id="home" className="justify-center bg-canvas">
      <HeroBackground isVisible={isNameVisible} scrollY={scrollY} />
      {!isIntroDone && HERO_LAPTOP()}
      {HERO_CONTENT()}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: isIntroDone ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-5 left-1/2 z-[4] flex min-h-11 -translate-x-1/2 items-center gap-1 text-[13px] text-ink-3"
      >
        Scroll
        <Icon path={ICONS.chevronDown} className="size-4" />
      </motion.div>
      {!isIntroDone && (
        <button
          type="button"
          onClick={handleSkipIntro}
          className="absolute bottom-5 right-5 z-[6] min-h-11 rounded-lg px-3 text-[13px] text-ink-2 transition-colors duration-150 ease-out-soft hover:text-ink"
        >
          Skip intro
        </button>
      )}
    </Panel>
  );

  const ABOUT_SECTION = () => (
    <Panel index={SECTION_INDEX.about} id="about" className="bg-surface">
      <div className={classNames(innerClassName, twoColumnClassName)}>
        <Reveal direction={-1}>
          {SECTION_HEADING({ number: "02", title: "About", heading: ABOUT.heading, highlight: ABOUT.highlight, lead: ABOUT.lead })}
          <div className="mt-8 flex gap-8 border-t border-line pt-6 sm:gap-12">
            {ABOUT.stats.map(({ value, label }) => (
              <div key={label}>
                <b className="block text-[32px] font-medium leading-none tracking-[-.02em] tabular-nums">{value}</b>
                <small className="mt-2 block text-[13px] text-ink-3">{label}</small>
              </div>
            ))}
          </div>
        </Reveal>
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={TIMELINE_VARIANTS.list}
          className="border-t border-line"
        >
          {ABOUT.points.map((point) => (
            <motion.li key={point} variants={TIMELINE_VARIANTS.item} className="border-b border-line py-4 text-[15px] leading-normal">
              <motion.div variants={TIMELINE_VARIANTS.row} className="flex gap-3">
                <Icon path={ICONS.tick} className="mt-0.5 size-[18px] text-brand" />
                {point}
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Panel>
  );

  const SKILL_GROUP = ({ title, display, items, highlighted }, index) => (
    <div
      key={title}
      className={classNames("grid grid-cols-1 gap-3 p-5 sm:p-6 md:grid-cols-[200px_1fr] md:gap-8", index > 0 && "border-t border-line")}
    >
      <div>
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="mt-1 font-mono text-xs text-ink-3">{String(items.length).padStart(2, "0")} items</p>
      </div>
      {display === "chips" ? (
        <div className="flex min-w-0 flex-wrap content-start gap-2">
          {items.map((skill) => (
            <Chip key={skill} isHighlighted={highlighted.includes(skill)}>
              {skill}
            </Chip>
          ))}
        </div>
      ) : (
        <ul className="grid min-w-0 grid-cols-1 gap-x-8 gap-y-2 text-[15px] text-ink-2 sm:grid-cols-2">
          {items.map((skill) => (
            <li key={skill} className="flex items-start gap-2">
              <Icon path={ICONS.tick} className="mt-1 size-4 flex-none text-brand" />
              {skill}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const SKILLS_SECTION = () => (
    <Panel index={SECTION_INDEX.skills} id="skills" className="bg-canvas">
      <div className={innerClassName}>
        <Reveal direction={-1}>
          {SECTION_HEADING({ number: "03", title: "Skills", heading: SKILLS.heading, highlight: SKILLS.highlight, lead: SKILLS.lead })}
        </Reveal>
        <Reveal delay={0.08} className="mt-8 overflow-hidden rounded-2xl border border-line bg-surface">
          {SKILLS.groups.map(SKILL_GROUP)}
        </Reveal>
      </div>
    </Panel>
  );

  const PROJECTS_SECTION = () => (
    <Panel index={SECTION_INDEX.projects} id="projects" className="bg-surface">
      <div className={innerClassName}>
        <Reveal direction={-1}>{SECTION_HEADING({ number: "04", title: "Projects", heading: "Selected work", isCompact: true })}</Reveal>
        <div className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {PROJECTS.map(({ slug, name, company, logo }, index) => (
            <Reveal
              key={slug}
              as={MotionLink}
              href={`/${slug}`}
              delay={(index % 4) * 0.05 + (index > 3 ? 0.08 : 0)}
              className="group grid grid-cols-[104px_1fr] items-center gap-x-4 rounded-xl border border-line bg-surface p-3 transition-colors duration-150 ease-out-soft hover:border-line-2 sm:flex sm:flex-col sm:items-stretch sm:p-4"
            >
              <div className="row-span-3 grid h-[72px] place-items-center rounded-md bg-white p-1 sm:mb-4 sm:h-[88px] sm:p-1.5">
                <Image
                  src={logo.src}
                  width={logo.width}
                  height={logo.height}
                  alt={`${name} logo`}
                  className="size-full max-w-none object-contain"
                />
              </div>
              <h3 className="text-base font-medium leading-[1.3]">{name}</h3>
              <p className="mt-1 text-[13px] text-ink-3">{company}</p>
              <span className="mt-auto flex items-center gap-1.5 pt-2 text-sm font-medium text-link sm:pt-4">
                View Details
                <Icon path={ICONS.arrow} className="size-4 transition-transform duration-150 ease-out-soft group-hover:translate-x-0.5" />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </Panel>
  );

  const HISTORY_SECTION = () => (
    <Panel index={SECTION_INDEX.history} id="history" className="bg-canvas">
      <div className={classNames(innerClassName, twoColumnClassName)}>
        <Reveal direction={-1}>
          {SECTION_HEADING({
            number: "05",
            title: "Work history",
            heading: WORK_HISTORY.heading,
            highlight: WORK_HISTORY.highlight,
            lead: WORK_HISTORY.lead,
          })}
        </Reveal>
        <motion.ol initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={TIMELINE_VARIANTS.list}>
          {WORK_HISTORY.jobs.map(({ company, period, isCurrent }, index) => (
            <motion.li
              key={company}
              variants={TIMELINE_VARIANTS.item}
              className="relative border-b border-line py-[18px] pl-8 first:border-t"
            >
              {/* Dot and connector share one center line: dot 12px at left 0, line 2px at left 5px */}
              <motion.span
                variants={TIMELINE_VARIANTS.dot}
                className={classNames(
                  "absolute left-0 top-1/2 z-[1] -mt-1.5 size-3 rounded-full border-2",
                  isCurrent ? "border-live bg-live shadow-[0_0_0_4px_rgba(47,182,124,.18)]" : "border-rail bg-canvas"
                )}
              />
              {index < WORK_HISTORY.jobs.length - 1 && (
                <motion.span
                  variants={TIMELINE_VARIANTS.segment}
                  className="absolute left-[5px] top-1/2 h-full w-0.5 origin-top bg-rail-line"
                />
              )}
              <motion.div variants={TIMELINE_VARIANTS.row} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                <h3 className="flex items-baseline gap-3 text-base font-medium">
                  {company}
                  {/* {isCurrent && <span className="text-[13px] font-medium text-brand">Current</span>} */}
                </h3>
                <small className="font-mono text-[13px] leading-[normal] tabular-nums text-ink-3">{period}</small>
              </motion.div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </Panel>
  );

  const CONTACT_LINKS = () => (
    <Reveal direction={1} delay={0.08} className="border-t border-white/12">
      <div className="flex min-h-[72px] items-center gap-4 border-b border-white/12 py-3">
        <Icon path={ICONS.mail} className="size-[18px] text-white/60 max-sm:hidden" />
        <span className="min-w-0 flex-1">
          <small className="block text-[13px] leading-[1.4] text-white/60">Email</small>
          <b className="block wrap-anywhere text-[15px] font-medium sm:text-base">
            <a href={`mailto:${CONTACT.email}`} className="hover:underline hover:underline-offset-[3px]">
              {CONTACT.email}
            </a>
          </b>
        </span>
        <button
          type="button"
          aria-live="polite"
          onClick={handleCopyEmail}
          className="h-9 rounded-lg border border-white/24 px-3.5 text-sm font-medium transition-colors duration-150 ease-out-soft hover:bg-white/8"
        >
          {isEmailCopied ? "Copied" : "Copy"}
        </button>
      </div>
      {CONTACT.links.map(({ label, value, href, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-[72px] items-center gap-4 border-b border-white/12 py-3"
        >
          <Icon path={icon} className="size-[18px] text-white/60 max-sm:hidden" />
          <span className="min-w-0 flex-1">
            <small className="block text-[13px] leading-[1.4] text-white/60">{label}</small>
            <b className="block wrap-anywhere text-[15px] font-medium group-hover:underline group-hover:underline-offset-[3px] sm:text-base">
              {value}
            </b>
          </span>
          <span className="flex-none text-white/50">
            <Icon path={ICONS.external} className="inline size-[18px] align-baseline" />
          </span>
        </a>
      ))}
    </Reveal>
  );

  const CONTACT_SECTION = () => (
    <Panel index={SECTION_INDEX.contact} id="contact" isLast className="bg-ink text-white">
      <div className={classNames(innerClassName, twoColumnClassName)}>
        <Reveal direction={-1}>
          {SECTION_HEADING({
            number: "06",
            title: "Contact",
            heading: CONTACT.heading,
            highlight: CONTACT.highlight,
            lead: CONTACT.lead,
            isInverted: true,
          })}
        </Reveal>
        {CONTACT_LINKS()}
      </div>
      <p className="absolute inset-x-0 bottom-6 z-[2] text-center text-[13px] text-white/50">{CONTACT.copyright}</p>
    </Panel>
  );

  return (
    <MotionConfig reducedMotion="user">
      <StackContext.Provider value={stackContext}>
        <div id="home-screen">
          {TOP_NAV()}
          {SECTION_DOTS()}
          <main>
            {HERO_SECTION()}
            {ABOUT_SECTION()}
            {SKILLS_SECTION()}
            {PROJECTS_SECTION()}
            {HISTORY_SECTION()}
            {CONTACT_SECTION()}
          </main>
          <ScrollToTop />
        </div>
      </StackContext.Provider>
    </MotionConfig>
  );
}

export default Home;
