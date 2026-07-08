import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BarChart3, MapPin, Globe, Truck, Mail, Phone } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

// Swap these href values with real partner subdomains
// e.g. https://partner1.meadowsdair.com
const PARTNERS = Array.from({ length: 40 }, (_, i) => ({
  { id: 1, name: "MeadowsDair LLC", category: "Services", href: "meadowsdair.com", available: false },
}));

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Directory />
      <ValueProps />
      <ContactForm />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <a href="https://meadowsdair.com" className="font-display text-sm font-semibold tracking-tight">
  MeadowsDair <span className="ml-1 text-muted-foreground">LLC</span>
</a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#directory" className="transition hover:text-foreground">Directory</a>
          <a href="#why" className="transition hover:text-foreground">Why Us</a>
          <a href="#contact" className="transition hover:text-foreground">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Request Slot <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs uppercase tracking-wider text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          Serving Lancaster, OH
        </div>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          MeadowsDair LLC
          <span className="block bg-[image:var(--gradient-accent)] bg-clip-text text-transparent">
            Logistics & Marketing Systems
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Driving trackable foot traffic to Lancaster businesses through
          hyper-local digital systems.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-90"
          >
            Request a Partnership Slot <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#directory"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:bg-surface-elevated"
          >
            View the Directory
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-border/60 pt-8 sm:grid-cols-4">
          {[
            { k: "5,000+", v: "Households / drop" },
            { k: "40", v: "Partner slots" },
            { k: "Weekly", v: "ROI reports" },
            { k: "100%", v: "Trackable traffic" },
          ].map((s) => (
            <div key={s.v}>
              <dt className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {s.k}
              </dt>
              <dd className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {s.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Directory() {
  return (
    <section id="directory" className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="font-mono text-xs uppercase tracking-wider text-primary">
            The Toll Booth
          </div>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Live partner directory
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            40 curated Lancaster business slots. Each partner receives a dedicated
            subdomain with live offers, hyper-local reach, and weekly performance data.
          </p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-primary" /> Active
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-muted-foreground/40" /> Open
          </span>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {PARTNERS.map((p) => (
          <PartnerCard key={p.id} partner={p} />
        ))}
      </div>
    </section>
  );
}

function PartnerCard({
  partner,
}: {
  partner: { id: number; name: string; category: string; href: string; available: boolean };
}) {
  const initials = partner.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="flex items-start justify-between">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-border bg-surface-elevated font-display text-sm font-semibold tracking-tight text-foreground">
          {initials}
        </div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          #{String(partner.id).padStart(3, "0")}
        </span>
      </div>
      <div className="mt-4 min-w-0">
        <div className="truncate font-display text-base font-semibold">{partner.name}</div>
        <div className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {partner.category}
        </div>
      </div>
      <a
        href={partner.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-5 inline-flex items-center justify-center gap-1.5 rounded-md px-3 py-2 text-xs font-medium transition ${
          partner.available
            ? "border border-border bg-surface-elevated text-muted-foreground hover:border-primary/50 hover:text-foreground"
            : "bg-primary text-primary-foreground hover:opacity-90"
        }`}
      >
        {partner.available ? (
  <div className="flex flex-col">
    <span>Slot Available</span>
    <span className="text-[9px] opacity-70">
      {["Prime real estate.", "Don't miss out.", "Your spot here.", "Lancaster's finest are looking."][partner.id % 4]}
    </span>
  </div>
) : "View Live Offers"}
        <ArrowRight className="h-3 w-3" />
      </a>
    </div>
  );
}

function ValueProps() {
  const items = [
    {
      icon: BarChart3,
      title: "Weekly ROI Transparency",
      desc: "Data-driven reports delivered every week. See exactly how many customers walked through your door and where they came from.",
    },
    {
      icon: MapPin,
      title: "Hyper-Local Reach",
      desc: "Targeted 5,000-household drops across Lancaster's highest-value neighborhoods — no wasted spend on the wrong ZIP codes.",
    },
    {
      icon: Globe,
      title: "Integrated Digital Hub",
      desc: "Every partner gets a dedicated subdomain with live offers, contact routing, and full inclusion in our shared traffic engine.",
    },
  ];

  return (
    <section id="why" className="border-y border-border/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-wider text-primary">
            The System
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Why choose MeadowsDair?
          </h2>
          <p className="mt-3 text-muted-foreground">
            We built the infrastructure Lancaster businesses have been asking for:
            measurable, local, and always-on.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition hover:border-primary/40"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-[image:var(--gradient-accent)] shadow-[var(--shadow-glow)]">
                <it.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <div className="font-mono text-xs uppercase tracking-wider text-primary">
            Partnership Inquiry
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Request a partnership slot
          </h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            Limited to 40 Lancaster businesses. Reach out below to send us your details. We'll get back to you within 48 hours.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center justify-center rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
          <a 
            href="mailto:MeadowsDair.LLC@gmail.com?subject=Partnership%20Inquiry" 
            className="inline-flex items-center gap-3 text-lg font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <Mail className="h-6 w-6" />
            MeadowsDair.LLC@gmail.com
          </a>
          
          <a 
            href="tel:7402776442" 
            className="inline-flex items-center gap-3 text-lg font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <Phone className="h-6 w-6" />
            (740) 277-6442
          </a>
        </div>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <span className="font-display text-sm font-semibold">MeadowsDair LLC</span>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} MeadowsDair LLC · Lancaster, OH
        </p>
      </div>
    </footer>
  );
}
