// Packages
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

// Utils
import { Chip, Icon, ScrollToTop } from "@/components";
import { HERO, ICONS, PROJECTS } from "@/constants";

function ProjectDetail({ slug }) {
  /****** States ******/
  const index = PROJECTS.findIndex((project) => project.slug === slug);
  const { name, company, logo, role, tech, description, contributions = [], contributionsTitle = "Technical contributions", screens } = PROJECTS[index];
  const previous = PROJECTS[(index + PROJECTS.length - 1) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const caseNumber = `${String(index + 1).padStart(2, "0")} / ${String(PROJECTS.length).padStart(2, "0")}`;

  /****** Render Functions ******/
  const HEADER = () => (
    <header className="sticky top-0 z-10 border-b border-line bg-white/96">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-[1160px] items-center gap-4 px-5 md:px-8">
        <Link href="/" className="mr-auto flex min-h-11 items-center gap-3">
          <Image src="/portfolio.svg" width={36} height={36} alt={HERO.name} className="size-9" />
          <Image src="/images/green-secondary-logo.jpg" width={394} height={222} alt="" className="h-9 w-auto" />
        </Link>
        <Link
          href="/#projects"
          className="inline-flex h-11 items-center rounded-[10px] border border-line-2 bg-surface px-[18px] text-[15px] font-medium transition-colors duration-150 ease-out-soft hover:border-ink-3"
        >
          All projects
        </Link>
      </nav>
    </header>
  );

  const INTRO = () => (
    <Fragment>
      <Link href="/#projects" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-link">
        <Icon path={ICONS.arrow} className="size-4 rotate-180" />
        Back to Home
      </Link>
      <section className="mb-10 mt-2 grid grid-cols-1 items-center gap-4 md:grid-cols-[280px_1fr] md:gap-8">
        <div className="grid h-24 w-56 place-items-center rounded-2xl border border-line bg-white p-2 md:h-[140px] md:w-auto">
          <Image src={logo.src} width={logo.width} height={logo.height} alt={`${name} logo`} className="size-full object-contain" />
        </div>
        <div>
          <p className="font-mono text-xs text-ink-3">Project Details · {caseNumber}</p>
          <h1 className="mb-2 mt-1.5 text-[clamp(32px,5vw,56px)] font-medium leading-[1.05] tracking-[-.03em]">{name}</h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-ink-2">
            <span>
              Developed for <b className="font-medium text-ink">{company}</b>
            </span>
            {role && (
              <span>
                Role <b className="font-medium text-ink">{role}</b>
              </span>
            )}
          </div>
        </div>
      </section>
    </Fragment>
  );

  const DETAILS = () => (
    <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1.6fr_1fr] md:gap-12">
      <div>
        <h2 className="mb-3 text-sm font-medium text-ink-3">Project description</h2>
        {description.map((paragraph) => (
          <p key={paragraph} className="max-w-[62ch] text-[17px] text-ink-2 [&+p]:mt-4">
            {paragraph}
          </p>
        ))}
        {contributions.length > 0 && (
          <Fragment>
            <h2 className="mb-3 mt-8 text-sm font-medium text-ink-3">{contributionsTitle}</h2>
            <ul className="grid max-w-[62ch] gap-2 text-[17px] text-ink-2">
              {contributions.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Icon path={ICONS.tick} className="mt-1.5 size-4 flex-none text-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </Fragment>
        )}
      </div>
      {role && (
        <aside className="grid gap-6 rounded-2xl border border-line bg-surface p-6">
          <div>
            <h2 className="mb-3 text-sm font-medium text-ink-3">Worked as</h2>
            <p className="text-lg font-medium">{role}</p>
          </div>
          <div>
            <h2 className="mb-3 text-sm font-medium text-ink-3">Technologies used</h2>
            <div className="flex flex-wrap gap-2">
              {tech.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
        </aside>
      )}
    </div>
  );

  const SCREENS = () => (
    <section className="mt-14">
      <h2 className="mb-3 text-sm font-medium text-ink-3">Screens</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {screens.map(({ label, src }) => (
          <div
            key={label}
            className="relative grid aspect-[16/10] place-items-center overflow-hidden rounded-xl border border-dashed border-line-2 bg-[repeating-linear-gradient(135deg,transparent_0_12px,rgba(15,27,61,.03)_12px_24px)] text-[13px] text-ink-3"
          >
            {src ? <Image src={src} alt={`${name} — ${label}`} fill className="object-cover object-top" /> : `${label} (placeholder)`}
          </div>
        ))}
      </div>
    </section>
  );

  const PAGER = () => (
    <nav aria-label="Projects" className="mt-14 flex flex-wrap justify-between gap-4 border-t border-line pt-6">
      <Link href={`/${previous.slug}`} className="group flex min-h-11 flex-col text-[13px] text-ink-3">
        <small>← Previous</small>
        <b className="text-base font-medium text-ink group-hover:text-link">{previous.name}</b>
      </Link>
      <Link href={`/${next.slug}`} className="group ml-auto flex min-h-11 flex-col text-right text-[13px] text-ink-3">
        <small>Next →</small>
        <b className="text-base font-medium text-ink group-hover:text-link">{next.name}</b>
      </Link>
    </nav>
  );

  return (
    <div id="project-detail-screen" className="min-h-dvh bg-canvas">
      {HEADER()}
      <main className="mx-auto max-w-[1160px] px-5 pb-20 pt-8 md:px-8">
        {INTRO()}
        {DETAILS()}
        {/* TODO: re-enable once project screenshots are ready */}
        {/* {screens.length > 0 && SCREENS()} */}
        {PAGER()}
        <ScrollToTop />
      </main>
    </div>
  );
}

export default ProjectDetail;
