import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import logo from "@/assets/logo.png";
import bookkeepingImg from "@/assets/service-bookkeeping.jpg";
import estimatingImg from "@/assets/service-estimating.jpg";
import consultingImg from "@/assets/service-consulting.jpg";
import advisoryImg from "@/assets/service-advisory.jpg";
import documentsImg from "@/assets/service-documents.jpg";
import { ArrowRight, Building2, Calculator, ClipboardList, FileSpreadsheet, HardHat, Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tucker Business Services — Back Office & Construction Consulting" },
      { name: "description", content: "Back office support and construction consulting for contractors. Tucker Business Services helps you run a tighter, more profitable build." },
      { property: "og:title", content: "Tucker Business Services" },
      { property: "og:description", content: "Back office support and construction consulting built for contractors." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: FileSpreadsheet, image: bookkeepingImg, title: "Bookkeeping & AP/AR", desc: "Job-costed books, invoicing, lien waivers, and clean monthly closes." },
  { icon: ClipboardList, image: estimatingImg, title: "Estimating Support", desc: "Bid prep and proposal polish so you win the right work." },
  { icon: HardHat, image: consultingImg, title: "Construction Consulting", desc: "Project controls, schedule analysis, and operational tune-ups." },
  { icon: Building2, image: advisoryImg, title: "Owner Advisory", desc: "Profitability reviews, KPI dashboards, and growth roadmaps." },
  { icon: ClipboardList, image: documentsImg, title: "Document Control", desc: "RFIs, submittals, change orders — organized and on time." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3 font-display text-base font-bold tracking-tight">
            <img src={logo} alt="Tucker Business Services" className="h-32 w-32 md:h-40 md:w-40 object-contain" />
            <span className="hidden sm:inline">Tucker Business Services</span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#services" className="hover:text-foreground transition">Services</a>
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90 transition">
            Book a call <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute right-0 top-0 -z-10 h-[600px] w-[600px] rounded-full opacity-20 blur-3xl" style={{ background: "var(--gradient-accent)" }} />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <h1 className="font-display text-5xl font-bold leading-[1.05] md:text-7xl">
              Run the business.
              <br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-accent)" }}>
                We'll handle the back office.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Tucker Business Services delivers back-office support and construction consulting built specifically for contractors — so your jobs stay profitable and your paperwork never holds you back.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition hover:opacity-90" style={{ boxShadow: "var(--shadow-glow)" }}>
                Get a free consult
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition hover:bg-card">
                Explore services
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 max-w-md">
              {[["20+", "Years in the trade"], ["100%", "Contractor focused"], ["1:1", "Owner attention"]].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-display text-3xl font-bold text-accent">{k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl opacity-50 blur-2xl" style={{ background: "var(--gradient-accent)" }} />
            <img
              src={heroImg}
              alt="Construction blueprints and financial documents"
              width={1536}
              height={1024}
              className="relative aspect-[4/5] w-full rounded-3xl object-cover"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-border/50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-accent">/ Services</span>
              <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Everything off your desk.</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              From the books to the bid room, we plug into your operation and clean it up.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, image, title, desc }) => (
              <div key={title} className="group relative overflow-hidden rounded-2xl border border-border bg-card transition hover:bg-secondary">
                <img
                  src={image}
                  alt={title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-8">
                  <Icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
                  <h3 className="mt-6 font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative border-t border-border/50 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-accent">/ About</span>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl leading-tight">
              We've been on the jobsite — and behind the desk.
            </h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Tucker Business Services was founded to give contractors the kind of back-office and operational support that's usually reserved for the biggest firms — without the overhead.
            </p>
            <p>
              We speak the language of estimates, change orders, retention, and bonded work. That means cleaner books, sharper bids, and decisions backed by numbers you can actually trust.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border/50 py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16" style={{ boxShadow: "var(--shadow-elegant)" }}>
            <span className="text-xs uppercase tracking-widest text-accent">/ Contact</span>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Let's talk about your next build.</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Tell us where you're stuck — bookkeeping, bidding, project controls — and we'll show you how we'd help.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <a href="mailto:info@tuckerbusinessservices.com" className="group rounded-2xl border border-border bg-background p-6 transition hover:border-accent">
                <Mail className="h-6 w-6 text-accent" />
                <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="mt-1 font-semibold group-hover:text-accent transition text-sm whitespace-nowrap">info@tuckerbusinessservices.com</div>
              </a>
              <a href="tel:+17753910242" className="group rounded-2xl border border-border bg-background p-6 transition hover:border-accent">
                <Phone className="h-6 w-6 text-accent" />
                <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                <div className="mt-1 font-semibold group-hover:text-accent transition">(775) 391-0242</div>
              </a>
              <div className="rounded-2xl border border-border bg-background p-6">
                <MapPin className="h-6 w-6 text-accent" />
                <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">Service Area</div>
                <div className="mt-1 font-semibold">Nationwide, remote-first</div>
              </div>
            </div>

            <div className="mt-10">
              <a href="mailto:info@tuckerbusinessservices.com" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition hover:opacity-90" style={{ boxShadow: "var(--shadow-glow)" }}>
                Start the conversation <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Tucker Business Services. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Built for contractors who'd rather build.
          </div>
        </div>
      </footer>
    </div>
  );
}
