import type { CSSProperties, ReactNode } from "react";

import {
  authorityStats,
  benefits,
  coreServiceFeatures,
  faqs,
  featuredServiceStats,
  footerLinks,
  heroStats,
  marqueeItems,
  navLinks,
  painPoints,
  successStories,
  services,
  trustBadges,
  trustItems,
} from "./credence-landing.data";
import credenceLogo from "./src/assets/credence-logo.png";
import teamCollabImage from "./src/assets/team-collab.png";

const CALENDLY_URL = "https://calendly.com/pyowdigitals/15-minute-meeting";

interface IconProps {
  className?: string;
}

interface SectionLabelProps {
  children: ReactNode;
  centered?: boolean;
}

interface PrimaryButtonProps {
  href?: string;
  children: ReactNode;
  centered?: boolean;
}

interface BenefitIconProps {
  icon: string;
}

interface TrustIconProps {
  icon: string;
}

function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6 10l2.5 2.5L14 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionLabel({ children, centered = false }: SectionLabelProps) {
  return (
    <div
      className={`mb-4 flex items-center gap-3 font-['DM_Mono'] text-[11px] font-medium uppercase tracking-[0.3em] text-[#c9a84c] ${
        centered ? "justify-center" : ""
      }`}
    >
      <span className="h-px w-8 bg-[#c9a84c]" />
      {children}
    </div>
  );
}

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <img
        src={credenceLogo}
        alt="Credence Credit Lab logo"
        className="h-12 w-12 rounded-lg object-contain"
      />
      <div className="font-['Playfair_Display'] text-lg font-bold leading-none text-white">
        Credence
        <span className="mt-1 block font-['DM_Sans'] text-[11px] font-normal uppercase tracking-[0.2em] text-[#c9a84c]">
          Credit Lab
        </span>
      </div>
    </div>
  );
}

function PrimaryButton({ href = CALENDLY_URL, children, centered = false }: PrimaryButtonProps) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`group inline-flex items-center gap-2 rounded-lg bg-[#c9a84c] px-7 py-4 text-sm font-bold tracking-[0.02em] text-[#0f2419] transition duration-200 hover:-translate-y-0.5 hover:bg-[#e0bf78] hover:shadow-[0_12px_40px_rgba(201,168,76,0.3)] ${
        centered ? "mx-auto" : ""
      }`}
    >
      {children}
      <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  );
}

function BenefitIcon({ icon }: BenefitIconProps) {
  const iconClassName = "h-6 w-6 text-[#c9a84c]";

  switch (icon) {
    case "UP":
      return (
        <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 16.5L9 11.5L13 15.5L20 8.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 8.5H20V13"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "LAW":
      return (
        <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 5V19"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M7 8H17"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M5 8L3 12H7L5 8Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M19 8L17 12H21L19 8Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9 19H15"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "TIME":
      return (
        <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M12 8V12L15 14"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "FOCUS":
      return (
        <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M12 4V6.5M12 17.5V20M4 12H6.5M17.5 12H20"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M6.8 6.8L8.5 8.5M15.5 15.5L17.2 17.2M17.2 6.8L15.5 8.5M8.5 15.5L6.8 17.2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "SYNC":
      return (
        <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7 7H17V17"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 7L7 17"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M5 12C5 8.13401 8.13401 5 12 5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M19 12C19 15.866 15.866 19 12 19"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "COST":
      return (
        <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 4V20"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M15.5 7.5C15.5 6.11929 13.933 5 12 5C10.067 5 8.5 6.11929 8.5 7.5C8.5 8.88071 10.067 10 12 10C13.933 10 15.5 11.1193 15.5 12.5C15.5 13.8807 13.933 15 12 15C10.067 15 8.5 13.8807 8.5 12.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return (
        <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
  }
}

function TrustIcon({ icon }: TrustIconProps) {
  const iconClassName = "h-5 w-5 text-[#0f2419]";

  switch (icon) {
    case "7+":
      return (
        <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 7V12L15 14"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "LAW":
      return (
        <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 5V19"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M7 8H17"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M5 8L3 12H7L5 8Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M19 8L17 12H21L19 8Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9 19H15"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "PPF":
      return (
        <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 4V20"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M15.5 7.5C15.5 6.11929 13.933 5 12 5C10.067 5 8.5 6.11929 8.5 7.5C8.5 8.88071 10.067 10 12 10C13.933 10 15.5 11.1193 15.5 12.5C15.5 13.8807 13.933 15 12 15C10.067 15 8.5 13.8807 8.5 12.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "ALLY":
      return (
        <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M8.5 13.5L12 17L15.5 13.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 10.5C15.5 9.11929 14.3807 8 13 8C12.4296 8 11.9038 8.19114 11.4838 8.51309C11.0637 8.19114 10.5379 8 9.96755 8C8.58684 8 7.46755 9.11929 7.46755 10.5C7.46755 11.3555 7.89125 12.1121 8.54061 12.5667L11.4838 14.75L14.427 12.5667C15.0763 12.1121 15.5 11.3555 15.5 10.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return (
        <svg className={iconClassName} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
  }
}

function PlayIcon() {
  return (
    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 7.5V16.5L16 12L8 7.5Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M6 3H3.75C3.05964 3 2.5 3.55964 2.5 4.25V12.25C2.5 12.9404 3.05964 13.5 3.75 13.5H11.75C12.4404 13.5 13 12.9404 13 12.25V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 3H13.5V8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 3L7 9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CredenceLanding() {
  const heroStyle = {
    "--highlight-x": "14%",
    "--highlight-y": "16%",
  } as CSSProperties;

  const dustParticles = Array.from({ length: 18 }, (_, index) => ({
    id: index,
    left: `${12 + ((index * 11) % 74)}%`,
    top: `${10 + ((index * 7) % 76)}%`,
    size: 3 + (index % 4) * 2,
    delay: `${(index % 6) * 0.9}s`,
    duration: `${10 + (index % 5) * 2.4}s`,
  }));

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0f2419] font-['DM_Sans'] text-white">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#c9a84c]/20 bg-[#0f2419]/85 px-6 py-4 backdrop-blur md:px-10 xl:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <a href="#" className="shrink-0">
            <BrandMark />
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#8aab97] transition hover:text-[#c9a84c]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-md bg-[#c9a84c] px-5 py-3 text-sm font-bold tracking-[0.03em] text-[#0f2419] transition hover:-translate-y-0.5 hover:bg-[#e0bf78]"
          >
            Let's Talk
            <ArrowIcon className="h-4 w-4 text-[#0f2419] transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </nav>

      <section
        className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28 md:px-10 xl:px-16"
        style={heroStyle}
      >
        <div className="absolute inset-0 bg-[#0f2419]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_70%_50%,rgba(45,92,62,0.35)_0%,transparent_70%),radial-gradient(ellipse_40%_40%_at_20%_80%,rgba(201,168,76,0.08)_0%,transparent_60%)]" />
        <div className="credence-hero-grid absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="credence-hero-highlight absolute inset-0" />
        <div className="credence-hero-orb credence-hero-orb-one absolute" />
        <div className="credence-hero-orb credence-hero-orb-two absolute" />
        <div className="credence-hero-orb credence-hero-orb-three absolute" />
        <div className="credence-hero-ring absolute" />
        <div className="credence-hero-ring credence-hero-ring-delayed absolute" />
        <div className="credence-hero-beam absolute" />
        <div className="credence-hero-beam credence-hero-beam-secondary absolute" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {dustParticles.map((particle) => (
            <span
              key={particle.id}
              className="credence-dust-particle absolute rounded-full"
              style={
                {
                  left: particle.left,
                  top: particle.top,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  animationDelay: particle.delay,
                  animationDuration: particle.duration,
                } as CSSProperties
              }
            />
          ))}
        </div>
        <div className="pointer-events-none absolute right-[7%] top-1/2 hidden h-[460px] w-[420px] -translate-y-1/2 lg:block">
          <div className="credence-hero-image-shell absolute inset-0">
            <div className="credence-hero-image-glow absolute inset-0" />
            <div className="credence-hero-image-frame absolute inset-0 overflow-hidden rounded-[34px]">
              <img
                src={teamCollabImage}
                alt="Credence team collaboration"
                className="credence-hero-image h-full w-full object-cover"
              />
            </div>
            <div className="credence-hero-image-outline absolute -inset-5 rounded-[42px]" />
          </div>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl animate-credence-fade-up">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/20 bg-[#c9a84c]/8 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-[#c9a84c]">
              <span className="h-2 w-2 rounded-full bg-[#c9a84c] animate-pulse" />
              Credit Repair Back-Office Partner
            </div>

            <h1 className="max-w-4xl font-['Playfair_Display'] text-5xl font-black leading-[1.05] tracking-[-0.04em] md:text-6xl xl:text-7xl">
              Build &amp; Scale Your Credit Repair Business -
              <span className="relative ml-2 inline-block text-[#c9a84c]">
                Without Hiring a Full Team
                <span className="absolute inset-x-0 -bottom-1 h-[3px] bg-gradient-to-r from-[#c9a84c] to-transparent" />
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Get a full team of disputers, marketers, and funding specialists handling your
              operations so you can focus on growth and revenue.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <PrimaryButton href={CALENDLY_URL}>Book My Strategy Call</PrimaryButton>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#8aab97] transition hover:text-white"
              >
                See How It Works
                {/* <span aria-hidden="true">v</span> */}
              </a>
            </div>

            <p className="mt-5 flex items-center gap-2 text-xs text-[#8aab97] before:h-px before:w-6 before:bg-[#8aab97] before:content-['']">
              No commitment. Just clarity on how to scale your business.
            </p>
          </div>

          <div className="grid animate-credence-fade-up gap-6 sm:grid-cols-3 lg:min-w-[360px] lg:justify-items-end">
            {heroStats.map((stat, index) => (
              <div
                key={stat.label}
                className="credence-hero-stat group text-left sm:text-right"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="credence-hero-stat-value font-['Playfair_Display'] text-4xl font-black leading-none text-[#c9a84c]">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.12em] text-[#8aab97]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#c9a84c] py-4">
        <div className="credence-marquee-track inline-flex min-w-max items-center whitespace-nowrap text-[13px] font-bold uppercase tracking-[0.1em] text-[#0f2419]">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center">
              <span className="mx-8">{item}</span>
              <span className="mx-2 opacity-50">+</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#c9a84c]/20 bg-[#0f2419] px-6 py-20 md:px-10 xl:px-16 xl:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
            <div>
              <SectionLabel>The Problem</SectionLabel>
              <h2 className="font-['Playfair_Display'] text-4xl font-black leading-tight tracking-[-0.03em] md:text-5xl">
                Running a credit repair business should not feel like doing everything alone.
              </h2>
              <p className="mt-6 text-[17px] leading-8 text-white/60">
                Most credit repair owners are buried in operations - processing disputes, chasing
                clients, handling admin - with no time left to actually grow their business.
              </p>
            </div>

            <div className="lg:pt-20">
              <p className="max-w-xl text-xl leading-8 text-white/88">
                The bottleneck is not effort. It's trying to scale a serious service business
                without operational infrastructure behind it.
              </p>
              <p className="mt-4 max-w-xl border-l border-[#c9a84c]/30 pl-5 text-sm leading-7 text-[#8aab97]">
                These friction points quietly drain time, delivery quality, and revenue momentum
                before most owners even realize what the real problem is.
              </p>
            </div>
          </div>

          <div className="mt-14 overflow-hidden rounded-[28px] border border-[#c9a84c]/16 bg-[#102417]/80 shadow-[0_30px_80px_rgba(0,0,0,0.22)]">
            <div className="grid gap-px bg-[#c9a84c]/14 md:grid-cols-2">
              {painPoints.map((item, index) => (
                <article
                  key={item.title}
                  className="credence-problem-card group bg-[#0d2016] px-8 py-8 md:px-9 md:py-10"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <span className="font-['DM_Mono'] text-[11px] uppercase tracking-[0.24em] text-[#71917d]">
                      {item.number}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#c9a84c]/12 bg-[#c9a84c]/10 text-[11px] font-bold uppercase tracking-[0.16em] text-[#c9a84c] transition duration-300 group-hover:scale-110 group-hover:border-[#c9a84c]/35 group-hover:bg-[#c9a84c]/18">
                      {item.icon}
                    </span>
                  </div>

                  <h3 className="max-w-[16ch] text-[28px] font-semibold leading-[1.15] tracking-[-0.03em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-[34ch] text-lg leading-8 text-white/76">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[24px] border border-[#c9a84c]/18 bg-[linear-gradient(90deg,rgba(201,168,76,0.12),rgba(201,168,76,0.03))]">
            <div className="credence-problem-callout relative px-8 py-7 md:px-10">
              <div className="absolute left-0 top-0 h-full w-[3px] bg-[#c9a84c]" />
              <p className="max-w-4xl text-[22px] italic leading-9 text-[#f0dfa8]">
                And the worst part? The harder you work, the less your business actually grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative overflow-hidden bg-gradient-to-b from-[#0f2419] to-[#1a3a28] px-6 py-20 md:px-10 xl:px-16 xl:py-24"
      >
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(45,92,62,0.4)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <SectionLabel centered>The Solution</SectionLabel>
            <h2 className="font-['Playfair_Display'] text-4xl font-black leading-tight tracking-[-0.03em] md:text-5xl">
              What if you had a full team...
              <span className="text-[#c9a84c]"> without the overhead?</span>
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/60">
              Credence Credit Lab becomes your invisible back office - powering your business
              behind the scenes so you can focus 100% on acquisition and revenue.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="grid gap-10 rounded-2xl border border-[#c9a84c]/40 bg-[linear-gradient(135deg,rgba(201,168,76,0.1)_0%,rgba(45,92,62,0.2)_100%)] p-9 lg:col-span-2 lg:grid-cols-2">
              <div>
                <div className="mb-4 font-['DM_Mono'] text-[11px] uppercase tracking-[0.2em] text-[#c9a84c]">
                  01 - Core Service
                </div>
                <h3 className="font-['Playfair_Display'] text-3xl font-bold">
                  Complete Client Acquisition System
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/55">
                  We handle every layer of your operation - from dispute processing to client
                  communications - so nothing falls through the cracks while you scale.
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {coreServiceFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-white/70">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#c9a84c]/20 text-[10px] text-[#c9a84c]">
                        +
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="mb-4 font-['DM_Mono'] text-[11px] uppercase tracking-[0.2em] text-[#c9a84c]">
                  Results You Can Expect
                </div>
                <div className="mt-4 flex flex-wrap gap-5">
                  {featuredServiceStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="min-w-[140px] flex-1 rounded-2xl border border-[#c9a84c]/20 bg-white/[0.02] px-7 py-8 text-center"
                    >
                      <div className="font-['Playfair_Display'] text-4xl font-black leading-none text-[#c9a84c]">
                        {stat.value}
                      </div>
                      <div className="mt-2 text-sm leading-6 text-white/55">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {services.map((service) => (
              <article
                key={service.number}
                className="rounded-2xl border border-[#c9a84c]/20 bg-white/[0.02] p-9 backdrop-blur transition hover:-translate-y-1 hover:border-[#c9a84c]/50"
              >
                <div className="mb-4 font-['DM_Mono'] text-[11px] uppercase tracking-[0.2em] text-[#c9a84c]">
                  {service.number}
                </div>
                <h3 className="font-['Playfair_Display'] text-[26px] font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">{service.description}</p>
                <ul className="mt-6 flex flex-col gap-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-white/70">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#c9a84c]/20 text-[10px] text-[#c9a84c]">
                        +
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#c9a84c]/20 bg-[#0f2419] px-6 py-20 md:px-10 xl:px-16 xl:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <SectionLabel>Your Outcomes</SectionLabel>
            <h2 className="font-['Playfair_Display'] text-4xl font-black leading-tight tracking-[-0.03em] md:text-5xl">
              The leverage you've been missing.
            </h2>
            <p className="mt-4 text-[17px] leading-8 text-white/55">
              Every service we provide translates directly into growth, time saved, or money earned
              for your credit repair business.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[28px] border border-[#c9a84c]/14 bg-[#c9a84c]/14 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="credence-benefit-card group bg-[#10271b] px-9 py-10"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="mb-6 flex h-[56px] w-[56px] items-center justify-center rounded-2xl border border-[#c9a84c]/14 bg-[linear-gradient(180deg,rgba(201,168,76,0.16),rgba(201,168,76,0.08))] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 group-hover:-translate-y-1 group-hover:border-[#c9a84c]/30 group-hover:bg-[linear-gradient(180deg,rgba(201,168,76,0.22),rgba(201,168,76,0.10))]">
                  <BenefitIcon icon={benefit.icon} />
                </div>
                <h3 className="max-w-[18ch] text-[30px] font-semibold leading-[1.18] tracking-[-0.03em] text-white">
                  {benefit.title}
                </h3>
                <p className="mt-4 max-w-[30ch] text-[15px] leading-8 text-white/52">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#c9a84c]/20 bg-[#08110d] px-6 py-20 md:px-10 xl:px-16 xl:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionLabel>Success Stories</SectionLabel>
            <h2 className="font-['Playfair_Display'] text-4xl font-black leading-tight tracking-[-0.03em] md:text-5xl">
              Real clients.
              <br />
              <span className="text-white/45">Real momentum.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-[17px] leading-8 text-white/55">
              Don't just take our word for it. This is what it looks like when operators finally
              stop carrying every part of the business by themselves.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {successStories.map((story, index) => (
              <article
                key={story.title}
                className="credence-story-card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`credence-story-frame ${
                    story.accent === "gold" ? "credence-story-frame-gold" : "credence-story-frame-green"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-['DM_Mono'] text-[11px] uppercase tracking-[0.22em] text-[#c9a84c]">
                        {story.eyebrow}
                      </div>
                      <div className="mt-3 text-sm text-white/45">{story.sourceLabel}</div>
                      <h3 className="mt-4 max-w-[18ch] text-[30px] font-semibold leading-[1.12] tracking-[-0.03em] text-white">
                        {story.title}
                      </h3>
                      <div className="mt-3 text-sm text-[#8aab97]">{story.role}</div>
                    </div>
                    <a
                      href={story.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ff2d20] shadow-[0_14px_30px_rgba(255,45,32,0.25)] transition duration-300 group-hover:scale-105 group-hover:shadow-[0_18px_36px_rgba(255,45,32,0.35)]"
                      aria-label={`Watch ${story.title} on YouTube`}
                    >
                      <PlayIcon />
                    </a>
                  </div>

                  <a
                    href={story.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 block overflow-hidden rounded-[24px] border border-white/6 bg-[#0b1711]/90"
                  >
                    <div
                      className="credence-story-video h-[220px] w-full"
                      style={{
                        backgroundImage: `linear-gradient(135deg, rgba(14,31,21,0.76), rgba(18,43,29,0.48)), url(https://img.youtube.com/vi/${story.videoId}/hqdefault.jpg)`,
                      }}
                    >
                      <div className="credence-story-video-ui" />
                      <div className="credence-story-play">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ff2d20] shadow-[0_18px_40px_rgba(255,45,32,0.28)]">
                          <PlayIcon />
                        </div>
                      </div>
                    </div>
                  </a>

                  <p className="mt-7 max-w-[44ch] text-[15px] leading-8 text-white/60">
                    {story.quote}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#c9a84c]/12 bg-[#c9a84c]/6 px-5 py-4 text-sm font-medium text-[#f0dfa8]">
                    <span>{story.result}</span>
                    <a
                      href={story.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[#f0dfa8] transition hover:text-white"
                    >
                      Watch sample
                      <ExternalLinkIcon />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="why-us"
        className="relative overflow-hidden border-t border-[#c9a84c]/20 bg-[#1a3a28] px-6 py-20 md:px-10 xl:px-16 xl:py-24"
      >
        <div className="pointer-events-none absolute right-10 top-6 font-['Playfair_Display'] text-[220px] leading-none text-[#c9a84c]/5 lg:text-[280px]">
          "
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-24">
          <div>
            <SectionLabel>Why Different</SectionLabel>
            <h2 className="font-['Playfair_Display'] text-4xl font-black leading-tight tracking-[-0.03em] md:text-5xl">
              This is not outsourced labor. This is
              <span className="text-[#c9a84c]"> strategic execution.</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-white/60">
              Most outsourcing gives you warm bodies. We give you a specialized team with deep
              credit industry experience, legal frameworks, and proven systems - all working inside
              your business.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {trustItems.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 rounded-xl border border-[#c9a84c]/20 bg-[#c9a84c]/5 px-5 py-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c9a84c] shadow-[0_10px_24px_rgba(201,168,76,0.18)]">
                    <TrustIcon icon={item.icon} />
                  </div>
                  <div>
                    <strong className="block text-[15px]">{item.title}</strong>
                    <span className="text-[13px] text-[#8aab97]">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#c9a84c]/20 bg-white/[0.02] px-7 py-8 text-center sm:col-span-2">
              <div className="font-['Playfair_Display'] text-3xl font-black leading-tight text-[#c9a84c]">
                "You don't just get help -
                <br />
                you get leverage."
              </div>
              <div className="mt-4 text-sm text-white/55">
                Full operational coverage. Legal-grade quality. Zero overhead.
              </div>
            </div>

            {authorityStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#c9a84c]/20 bg-white/[0.02] px-7 py-8 text-center transition hover:-translate-y-0.5 hover:border-[#c9a84c]"
              >
                <div className="font-['Playfair_Display'] text-4xl font-black leading-none text-[#c9a84c]">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm leading-6 text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section
        id="pricing"
        className="border-t border-[#c9a84c]/20 bg-[#0f2419] px-6 py-20 md:px-10 xl:px-16 xl:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <SectionLabel centered>Simple Pricing</SectionLabel>
            <h2 className="font-['Playfair_Display'] text-4xl font-black leading-tight tracking-[-0.03em] md:text-5xl">
              Pay for results, not overhead.
            </h2>
            <p className="mt-4 text-[17px] leading-8 text-white/55">
              No retainers. No lock-in. Scale up or down as your business demands.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <article
                key={tier.title}
                className={`relative rounded-2xl border p-8 transition hover:-translate-y-1 ${
                  tier.featured
                    ? "border-[#c9a84c] bg-[linear-gradient(160deg,rgba(201,168,76,0.12)_0%,rgba(45,92,62,0.15)_100%)]"
                    : "border-[#c9a84c]/20 bg-white/[0.02] hover:border-[#c9a84c]/40"
                }`}
              >
                {tier.featured ? (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a84c] px-4 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[#0f2419]">
                    Most Popular
                  </div>
                ) : null}

                <h3 className="font-['Playfair_Display'] text-[28px] font-bold">{tier.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#8aab97]">{tier.description}</p>
                <div className="mt-7 font-['Playfair_Display'] text-5xl font-black leading-none text-[#c9a84c]">
                  {tier.amount}
                  <span className="ml-2 font-['DM_Sans'] text-sm font-normal text-[#8aab97]">
                    {tier.unit}
                  </span>
                </div>
                <div className="mt-2 text-xs text-[#8aab97]">{tier.note}</div>
                <div className="my-7 h-px bg-[#c9a84c]/20" />
                <ul className="mb-8 flex flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-white/70">
                      <span className="mt-1 text-[#c9a84c]">+</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-4 text-center text-sm font-bold transition ${
                    tier.featured
                      ? "bg-[#c9a84c] text-[#0f2419] hover:-translate-y-0.5 hover:bg-[#e0bf78]"
                      : "border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c]/8"
                  }`}
                >
                  {tier.cta}
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      <section className="border-t border-[#c9a84c]/20 bg-[#1a3a28] px-6 py-20 md:px-10 xl:px-16 xl:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Common Questions</SectionLabel>
          <h2 className="font-['Playfair_Display'] text-4xl font-black leading-tight tracking-[-0.03em] md:text-5xl">
            Every hesitation, answered.
          </h2>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-xl border border-[#c9a84c]/20 bg-white/[0.02] p-8 transition hover:border-[#c9a84c]/35"
              >
                <div className="mb-4 flex items-start gap-3 text-base font-semibold">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#c9a84c]/15 font-['DM_Mono'] text-[13px] font-bold text-[#c9a84c]">
                    Q
                  </span>
                  {faq.question}
                </div>
                <p className="pl-10 text-sm leading-7 text-white/60">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-[#c9a84c]/20 bg-gradient-to-br from-[#1a3a28] to-[#2d5c3e] px-6 py-24 text-center md:px-10 xl:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_50%,rgba(201,168,76,0.1)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl">
          <h2 className="font-['Playfair_Display'] text-5xl font-black leading-tight tracking-[-0.04em] md:text-6xl">
            Your Competitors Are
            <br />
            <span className="text-[#c9a84c]">Scaling While You're Stuck.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Don't let operations hold your growth hostage. Let's build your back office and your
            revenue.
          </p>
          <div className="mt-10">
            <PrimaryButton href={CALENDLY_URL} centered>Book My Strategy Call</PrimaryButton>
          </div>
          <p className="mt-5 text-sm text-[#8aab97]">
            Limited slots available. No pressure, just strategy.
          </p>
        </div>
      </section>

      <section
        id="apply"
        className="border-t border-[#c9a84c]/20 bg-[#0f2419] px-6 py-20 md:px-10 xl:px-16 xl:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionLabel>Apply Now</SectionLabel>
            <h2 className="font-['Playfair_Display'] text-4xl font-black leading-tight tracking-[-0.03em] md:text-5xl">
              Let's Build Your Credit Repair Growth System
            </h2>
            <p className="mt-5 text-base leading-8 text-white/55">
              We are focused on fast, direct booking now. Pick a time on Calendly and we will come
              prepared with a clear strategy conversation, not a sales pitch.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-3 text-sm text-white/70">
                  <CheckIcon className="h-5 w-5 shrink-0 text-[#c9a84c]" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-[#c9a84c]/20 bg-white/[0.03] p-8 md:p-12">
            <h3 className="font-['Playfair_Display'] text-3xl font-bold">Book Your Strategy Call</h3>
            <p className="mt-2 text-sm leading-7 text-[#8aab97]">
              Skip the long form. Choose a time directly in Calendly and we will handle the rest.
            </p>

            <div className="mt-8 rounded-2xl border border-[#c9a84c]/12 bg-[#c9a84c]/6 p-6">
              <div className="font-['DM_Mono'] text-[11px] uppercase tracking-[0.18em] text-[#c9a84c]">
                What happens next
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-3 text-sm leading-7 text-white/72">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-[#c9a84c]" />
                  Pick a 15-minute slot that works for you.
                </div>
                <div className="flex items-start gap-3 text-sm leading-7 text-white/72">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-[#c9a84c]" />
                  We review your current bottlenecks before the call.
                </div>
                <div className="flex items-start gap-3 text-sm leading-7 text-white/72">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-[#c9a84c]" />
                  You leave with a clearer scaling path and next steps.
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#c9a84c] px-5 py-4 text-base font-bold text-[#0f2419] transition hover:-translate-y-0.5 hover:bg-[#e0bf78] hover:shadow-[0_12px_40px_rgba(201,168,76,0.3)]"
              >
                Secure My Call
                <ArrowIcon />
              </a>
              <a
                href="#services"
                className="inline-flex flex-1 items-center justify-center rounded-lg border border-white/12 px-5 py-4 text-base font-semibold text-white/82 transition hover:border-[#c9a84c]/30 hover:bg-white/[0.03] hover:text-white"
              >
                Review Services First
              </a>
            </div>

            <p className="mt-5 text-center text-xs text-[#8aab97]">
              Sample Calendly link connected for now. Replace with your final booking URL anytime.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#c9a84c]/20 bg-[#0f2419] px-6 py-16 md:px-10 xl:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-10 lg:flex-row">
            <div>
              <a href="#" className="inline-block">
                <BrandMark />
              </a>
              <p className="mt-4 max-w-xs text-sm leading-7 text-[#8aab97]">
                Your invisible back office - powering credit repair businesses behind the scenes so
                you can focus on growth.
              </p>
            </div>

            <div className="flex flex-wrap gap-10 lg:gap-20">
              {footerLinks.map((column) => (
                <div key={column.title}>
                  <h4 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#c9a84c]">
                    {column.title}
                  </h4>
                  <div className="space-y-3">
                    {column.links.map((link) => (
                      <a
                        key={link}
                        href="#"
                        className="block text-sm text-[#8aab97] transition hover:text-white"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[#c9a84c]/20 pt-7 text-center text-[13px] text-white/30 md:flex-row">
            <span>Copyright 2025 Credence Credit Lab. All rights reserved.</span>
            <span>Built for credit repair operators who are serious about scale.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
