import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import * as Icons from "lucide-react";
import { ArrowRight, Download, Send, Mail, Phone, Linkedin, Github, MapPin, Menu, X, Award, Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";
import { profile, about, skills, rmg, projects, timeline, achievements } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} — RMG IT Professional | IT Infrastructure Specialist` },
      { name: "description", content: "Portfolio of an RMG IT professional in Bangladesh: IT infrastructure, networking, systems support, and digital solutions for garment factories." },
      { property: "og:title", content: `${profile.name} — RMG IT Professional` },
      { property: "og:description", content: "Connecting technology with the garments industry: IT infrastructure, support, and digital solutions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const Icon = ({ name, className }: { name: string; className?: string }) => {
  const C = (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Cpu;
  return <C className={className} />;
};

const nav = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">{title}</h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

const btnPrimary = "inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow transition hover:scale-105";
const btnGhost = "inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-6 py-3 font-semibold transition hover:border-primary hover:text-primary";

function Socials() {
  const s = [
    { href: `mailto:${profile.email}`, I: Mail, l: "Email" },
    { href: profile.linkedin, I: Linkedin, l: "LinkedIn" },
    { href: profile.github, I: Github, l: "GitHub" },
  ];
  return (
    <div className="flex gap-3">
      {s.map(({ href, I, l }) => (
        <a key={l} href={href} target="_blank" rel="noreferrer" aria-label={l} className="rounded-full border border-border p-2.5 text-muted-foreground transition hover:border-primary hover:text-primary">
          <I className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState<number | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `From: ${f.get("name")} (${f.get("email")})\n\n${f.get("message")}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(String(f.get("subject")))}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#home" className="font-display text-lg font-bold">
            <span className="text-gradient">{profile.initials}</span>.IT
          </a>
          <nav className="hidden gap-8 md:flex">
            {nav.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="text-sm text-muted-foreground transition hover:text-primary">{n}</a>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
        </div>
        {open && (
          <nav className="flex flex-col gap-4 border-t border-border px-6 py-4 md:hidden">
            {nav.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary">{n}</a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden pt-32 pb-24 md:pt-40">
        <div className="grid-bg absolute inset-0" />
        <div className="glow-orb absolute -top-20 right-0 h-96 w-96 rounded-full" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.3fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-accent/50 px-4 py-1.5 text-xs font-medium text-accent-foreground">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> {profile.title}
            </span>
            <p className="mt-6 text-lg text-muted-foreground">Hi, I'm {profile.name}</p>
            <h1 className="mt-2 text-4xl font-bold leading-tight md:text-6xl">
              Connecting <span className="text-gradient">Technology</span> with the Garments Industry.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className={btnPrimary}>Explore My Work <ArrowRight className="h-4 w-4" /></a>
              <a href={profile.cvUrl} download className={btnGhost}><Download className="h-4 w-4" /> Download CV</a>
              <a href="#contact" className={btnGhost}>Contact Me</a>
            </div>
          </div>
          <div className="relative mx-auto">
            <div className="absolute -inset-4 rounded-full bg-gradient-primary opacity-30 blur-2xl" />
            <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-4 border-primary/40 bg-card md:h-80 md:w-80">
              {profile.photoUrl ? (
                <img src={profile.photoUrl} alt={profile.name} className="h-full w-full object-cover" />
              ) : (
                <div className="text-center">
                  <Icons.UserRound className="mx-auto h-24 w-24 text-primary/60" />
                  <p className="mt-2 text-xs text-muted-foreground">Your photo here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Section id="about" eyebrow="About Me" title="Reliable IT for factories that never stop">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-lg text-muted-foreground">{about.map((p, i) => <p key={i}>{p}</p>)}</div>
          <div className="card-surface space-y-4 p-6">
            {["Technical problem-solving", "Business continuity", "End-user IT support", "Infrastructure reliability", "Continuous learning"].map((t) => (
              <div key={t} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary" />{t}</div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="skills" eyebrow="Technical Skills" title="What I work with">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.title} className="card-surface p-6">
              <div className="inline-flex rounded-lg bg-accent p-3"><Icon name={s.icon} className="h-6 w-6 text-primary" /></div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.items.map((i) => <span key={i} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">{i}</span>)}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="rmg" eyebrow="RMG Industry" title="How IT powers garment factory operations">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rmg.map((r) => (
            <div key={r.title} className="card-surface p-6">
              <Icon name={r.icon} className="h-7 w-7 text-primary" />
              <h3 className="mt-4 font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" eyebrow="Featured Projects" title="Portfolio & demo concepts">
        <p className="-mt-6 mb-8 text-sm text-muted-foreground">Projects below are clearly labeled demo concepts — to be replaced with real work.</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div key={p.title} className="card-surface flex flex-col p-6">
              <span className="w-fit rounded-full border border-primary/40 px-3 py-0.5 text-xs text-primary">Demo Project</span>
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <ul className="mt-4 space-y-1 text-sm">
                {p.features.map((f) => <li key={f} className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />{f}</li>)}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => <span key={t} className="rounded bg-muted px-2 py-0.5 text-xs text-accent-foreground">{t}</span>)}
              </div>
              <button onClick={() => setDetail(detail === i ? null : i)} className="mt-auto pt-5 text-left text-sm font-semibold text-primary hover:underline">
                {detail === i ? "Hide details" : "Project details →"}
              </button>
              {detail === i && <p className="mt-2 text-sm text-muted-foreground">{p.details}</p>}
            </div>
          ))}
        </div>
      </Section>

      <Section id="experience" eyebrow="Experience & Career" title="Career timeline">
        <div className="relative space-y-8 border-l border-border pl-8">
          {timeline.map((t, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[45px] rounded-full border border-primary bg-background p-1.5">
                {t.type === "work" ? <Briefcase className="h-4 w-4 text-primary" /> : <GraduationCap className="h-4 w-4 text-primary" />}
              </div>
              <div className="card-surface p-6">
                <p className="text-sm text-primary">{t.period}</p>
                <h3 className="mt-1 text-lg font-semibold">{t.role}</h3>
                <p className="text-sm text-muted-foreground">{t.org}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">{t.points.map((p, j) => <li key={j}>{p}</li>)}</ul>
              </div>
            </div>
          ))}
        </div>

        <h3 className="mt-20 text-2xl font-bold">Achievements & Certifications</h3>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => (
            <div key={i} className="card-surface p-6">
              <Award className="h-7 w-7 text-primary" />
              <p className="mt-3 text-xs uppercase tracking-wider text-primary">{a.kind}</p>
              <h4 className="mt-1 font-semibold">{a.title}</h4>
              <p className="text-sm text-muted-foreground">{a.issuer} · {a.year}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Let's work together">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <div className="space-y-5">
            {[
              { I: Mail, v: profile.email, h: `mailto:${profile.email}` },
              { I: Phone, v: profile.phone, h: `tel:${profile.phone.replace(/\s|-/g, "")}` },
              { I: Linkedin, v: "LinkedIn profile", h: profile.linkedin },
              { I: Github, v: "GitHub profile", h: profile.github },
              { I: MapPin, v: profile.location },
            ].map(({ I, v, h }) => (
              <a key={v} href={h} target={h?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-4 text-muted-foreground transition hover:text-primary">
                <span className="rounded-lg bg-accent p-3"><I className="h-5 w-5 text-primary" /></span>{v}
              </a>
            ))}
          </div>
          <form onSubmit={onSubmit} className="card-surface space-y-4 p-6 hover:translate-y-0">
            <div className="grid gap-4 sm:grid-cols-2">
              <input required name="name" placeholder="Your name" className="rounded-lg border border-input bg-background px-4 py-3 outline-none focus:border-primary" />
              <input required name="email" type="email" placeholder="Your email" className="rounded-lg border border-input bg-background px-4 py-3 outline-none focus:border-primary" />
            </div>
            <input required name="subject" placeholder="Subject" className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:border-primary" />
            <textarea required name="message" rows={5} placeholder="Message" className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:border-primary" />
            <button type="submit" className={btnPrimary}><Send className="h-4 w-4" /> Send Message</button>
            <p className="text-xs text-muted-foreground">Note: this form opens your email app to send the message. Direct in-site delivery needs extra backend setup.</p>
          </form>
        </div>
      </Section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {profile.name} · RMG IT Professional · Bangladesh</p>
          <Socials />
        </div>
      </footer>
    </div>
  );
}
