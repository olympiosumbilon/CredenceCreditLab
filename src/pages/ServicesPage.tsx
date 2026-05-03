import { useEffect } from "react";
import {
  Header,
  Footer,
  PrimaryButton,
} from "../../CredenceLanding";
import { coreServiceFeatures, featuredServiceStats, services } from "../../credence-landing.data";

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0f2419] font-['DM_Sans'] text-white">
      <Header />
      
      {/* Hero Section for Services */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0f2419] to-[#1a3a28] px-6 pb-20 pt-36 md:px-10 xl:px-16">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(45,92,62,0.4)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="font-['Playfair_Display'] text-5xl font-black leading-tight tracking-[-0.03em] md:text-6xl">
            Our <span className="text-[#c9a84c]">Services</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/60">
            Everything you need to access funding, build credit, and grow your business behind the scenes so you can focus 100% on acquisition and revenue.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative bg-[#1a3a28] px-6 pb-24 md:px-10 xl:px-16">
        <div className="relative mx-auto max-w-7xl">
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

      {/* CTA Section from commented out block */}
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
          <div className="mt-10 flex justify-center">
            <PrimaryButton centered>Book My Strategy Call</PrimaryButton>
          </div>
          <p className="mt-5 text-sm text-[#8aab97]">
            Limited slots available. No pressure, just strategy.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
