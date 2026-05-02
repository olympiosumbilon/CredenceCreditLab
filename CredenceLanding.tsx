import type { ReactNode } from "react";

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
  pricingTiers,
  services,
  trustBadges,
  trustItems,
} from "./credence-landing.data";
import credenceLogo from "./src/assets/credence-logo.png";

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

function PrimaryButton({ href = "#apply", children, centered = false }: PrimaryButtonProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 rounded-lg bg-[#c9a84c] px-7 py-4 text-sm font-bold tracking-[0.02em] text-[#0f2419] transition duration-200 hover:-translate-y-0.5 hover:bg-[#e0bf78] hover:shadow-[0_12px_40px_rgba(201,168,76,0.3)] ${
        centered ? "mx-auto" : ""
      }`}
    >
      {children}
      <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  );
}

export default function CredenceLanding() {
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
            href="#apply"
            className="rounded-md bg-[#c9a84c] px-5 py-3 text-sm font-bold tracking-[0.03em] text-[#0f2419] transition hover:-translate-y-0.5 hover:bg-[#e0bf78]"
          >
            Book Strategy Call
          </a>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28 md:px-10 xl:px-16">
        <div className="absolute inset-0 bg-[#0f2419]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_70%_50%,rgba(45,92,62,0.35)_0%,transparent_70%),radial-gradient(ellipse_40%_40%_at_20%_80%,rgba(201,168,76,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

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
              <PrimaryButton>Book My Strategy Call</PrimaryButton>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#8aab97] transition hover:text-white"
              >
                See How It Works
                <span aria-hidden="true">v</span>
              </a>
            </div>

            <p className="mt-5 flex items-center gap-2 text-xs text-[#8aab97] before:h-px before:w-6 before:bg-[#8aab97] before:content-['']">
              No commitment. Just clarity on how to scale your business.
            </p>
          </div>

          <div className="grid animate-credence-fade-up gap-6 sm:grid-cols-3 lg:min-w-[360px] lg:justify-items-end">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-left sm:text-right">
                <div className="font-['Playfair_Display'] text-4xl font-black leading-none text-[#c9a84c]">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.12em] text-[#8aab97]">
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
          <SectionLabel>The Problem</SectionLabel>
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="font-['Playfair_Display'] text-4xl font-black leading-tight tracking-[-0.03em] md:text-5xl">
                Running a credit repair business should not feel like doing everything alone.
              </h2>
              <p className="mt-6 text-[17px] leading-8 text-white/60">
                Most credit repair owners are buried in operations - processing disputes, chasing
                clients, handling admin - with no time left to actually grow their business.
              </p>
              <p className="mt-4 text-[17px] leading-8 text-white/60">Sound familiar?</p>
            </div>

            <div>
              <ul className="flex flex-col gap-4">
                {painPoints.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-start gap-4 rounded-xl border border-white/6 bg-white/[0.02] px-5 py-5 text-[15px] leading-7 text-white/75 transition hover:border-[#c9a84c]/30 hover:bg-[#c9a84c]/5"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#c9a84c]/12 text-[11px] font-bold text-[#c9a84c]">
                      {item.icon}
                    </div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-r-xl rounded-l-none border-l-[3px] border-[#c9a84c] bg-[#c9a84c]/6 px-7 py-6 text-base italic leading-7 text-[#f0dfa8]">
                And the worst part? The harder you work, the less your business actually grows.
              </div>
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

          <div className="grid gap-px overflow-hidden rounded-2xl bg-[#c9a84c]/20 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="bg-[#10271b] px-9 py-10 transition hover:bg-[#c9a84c]/5"
              >
                <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-[#c9a84c]/12 text-[11px] font-bold uppercase tracking-[0.15em] text-[#c9a84c]">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold leading-7">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/50">{benefit.description}</p>
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
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c9a84c] text-[11px] font-bold uppercase tracking-[0.08em] text-[#0f2419]">
                    {item.icon}
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

      <section
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
                  href="#apply"
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
      </section>

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
            <PrimaryButton centered>Book My Strategy Call</PrimaryButton>
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
              Tell us a bit about where you are and what you're working toward. We'll come prepared
              with a clear plan - not a sales pitch.
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

          <div className="rounded-[20px] border border-[#c9a84c]/20 bg-white/[0.03] p-8 md:p-12">
            <h3 className="font-['Playfair_Display'] text-3xl font-bold">Secure My Strategy Call</h3>
            <p className="mt-2 text-sm text-[#8aab97]">Takes 2 minutes. We'll do the rest.</p>

            <form className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.1em] text-white/60">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3.5 text-[15px] text-white outline-none transition placeholder:text-white/25 focus:border-[#c9a84c] focus:bg-[#c9a84c]/6"
                />
              </div>

              <div>
                <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.1em] text-white/60">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3.5 text-[15px] text-white outline-none transition placeholder:text-white/25 focus:border-[#c9a84c] focus:bg-[#c9a84c]/6"
                />
              </div>

              <div>
                <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.1em] text-white/60">
                  Monthly Active Clients
                </label>
                <select className="w-full appearance-none rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3.5 text-[15px] text-white outline-none transition focus:border-[#c9a84c] focus:bg-[#c9a84c]/6">
                  <option value="">Select range</option>
                  <option>Just starting (0-5)</option>
                  <option>Growing (6-20)</option>
                  <option>Scaling (21-50)</option>
                  <option>Established (50+)</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.1em] text-white/60">
                  Biggest Challenge Right Now
                </label>
                <textarea
                  placeholder="e.g. I'm spending too much time on disputes and can't focus on getting new clients..."
                  className="min-h-[110px] w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3.5 text-[15px] text-white outline-none transition placeholder:text-white/25 focus:border-[#c9a84c] focus:bg-[#c9a84c]/6"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#c9a84c] px-5 py-4 text-base font-bold text-[#0f2419] transition hover:-translate-y-0.5 hover:bg-[#e0bf78] hover:shadow-[0_12px_40px_rgba(201,168,76,0.3)]"
              >
                Secure My Call
                <ArrowIcon />
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-[#8aab97]">
              Your information is private and never shared.
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
