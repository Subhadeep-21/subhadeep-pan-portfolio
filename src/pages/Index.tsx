import { ArrowUpRight, Download, Github, Linkedin, Mail, BarChart3, Database, FileSpreadsheet, LineChart, Briefcase, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Regulatory MIS & Compliance Reporting System",
    subtitle: "Enterprise Simulation · 2026",
    tools: ["SQL", "Power BI", "Excel"],
    bullets: [
      "Automated monthly reporting for 25+ regulatory KPIs, cutting manual effort 58% and cycle time from 3.5 to 1.5 days.",
      "Processed 80,000+ records from 6 sources, lifting data accuracy from 84.6% to 99.1% via validation & exception checks.",
      "SQL reconciliation logic delivered 99.2% report-data consistency and surfaced 640 mismatched records.",
      "4-page Power BI dashboards enabled 52% faster tracking of 180+ overdue cases and 75 policy breaches across 7 regions.",
    ],
    href: "https://github.com/subhadeep-pan",
  },
  {
    title: "AML Transaction Monitoring System",
    subtitle: "Enterprise Simulation · 2026",
    tools: ["SQL", "Python", "Alteryx", "Power BI", "Tableau"],
    bullets: [
      "Analyzed 50,000+ banking transactions over 12 months, flagging 680+ suspicious patterns including 210 structuring cases.",
      "Alteryx workflow integrated 3 datasets, reducing manual review effort 55% and processing time from 4.5 to 2 hours.",
      "Python anomaly detection generated 420+ alerts with 87% validation accuracy.",
      "5 Power BI dashboards + Tableau geo-visuals across 18 countries identified 5 corridors driving 63% of suspicious volume.",
    ],
    href: "https://github.com/subhadeep-pan",
  },
  {
    title: "IMF World Economic Outlook 2026 Analytics",
    subtitle: "Excel & Power Query · 2026",
    tools: ["Excel", "Power Query"],
    bullets: [
      "Dashboard covering 190+ countries and 4 macro indicators: GDP growth, inflation, fiscal balance, current account.",
      "Cleaned 2,700+ data points using Pivot Tables, XLOOKUP, IF formulas, and structured tables.",
      "6 interactive views comparing advanced vs emerging economies, inflation outlook, and regional performance.",
      "Trend analysis identified 10+ slowdown-risk economies and outperforming regions.",
    ],
    href: "https://github.com/subhadeep-pan",
  },
  {
    title: "Retail Sales Performance Dashboard",
    subtitle: "Power BI · 2025",
    tools: ["Power BI", "SQL", "Excel"],
    bullets: [
      "Analyzed 12,500+ sales transactions across products and regions to surface revenue trends and low-margin categories.",
      "Power BI dashboards tracked profitability, top SKUs, and underperforming markets.",
      "Refresh-enabled workflows reduced manual monthly reporting effort by 40%.",
    ],
    href: "https://github.com/subhadeep-pan",
  },
];

const skillGroups = [
  {
    icon: Database,
    title: "Analytics & Programming",
    items: ["SQL", "MySQL", "SQL Server", "Python (Pandas, NumPy)", "Data Analysis", "Statistical Reporting"],
  },
  {
    icon: BarChart3,
    title: "Visualization & Reporting",
    items: ["Power BI Desktop", "Power BI Service", "Tableau", "Advanced Excel", "Power Query", "DAX", "KPI Dashboards"],
  },
  {
    icon: FileSpreadsheet,
    title: "Data Management",
    items: ["Data Cleansing", "Data Validation", "Reconciliation", "ETL Concepts", "Exception Reporting", "Root Cause Analysis"],
  },
  {
    icon: Briefcase,
    title: "Business Skills",
    items: ["Stakeholder Reporting", "Documentation", "Problem Solving", "Requirement Gathering", "Presentation Skills"],
  },
  {
    icon: ShieldCheck,
    title: "Domain Exposure",
    items: ["Risk Monitoring", "Regulatory Reporting", "Controls Testing", "Forecast Analysis", "Finance Operations"],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="container-tight flex h-16 items-center justify-between">
          <a href="#top" className="font-bold tracking-tight text-primary">SP.</a>
          <nav className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#projects" className="transition-colors hover:text-primary">Projects</a>
            <a href="#skills" className="transition-colors hover:text-primary">Skills</a>
            <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
          </nav>
          <Button asChild size="sm" variant="outline" className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground">
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="section-pad">
        <div className="container-tight">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Available for analyst roles
          </div>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-primary md:text-6xl">
            Subhadeep Pan
            <span className="block text-muted-foreground">Aspiring Data Analyst</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            MCA graduate with hands-on experience delivering analytics solutions across finance, banking, sales, and HR domains.
            I apply SQL and Python to clean, validate, reconcile, and analyze datasets of up to 80,000+ records — improving
            reporting accuracy, control monitoring, and business decisions. I build Power BI, Tableau, and Excel dashboards
            that have reduced manual reporting effort by up to 58% and accelerated management reviews. Strong interest in
            supporting risk, regulatory, and advisory engagements through data-driven solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="https://drive.google.com/uc?export=download&id=16s1AvL0F1RSp39ATYyIGpr4CODUKZVzm" target="_blank" rel="noreferrer">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-secondary">
              <a href="#projects">
                View Projects <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Quick stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-10 md:grid-cols-4">
            {[
              { k: "80K+", v: "Records analyzed" },
              { k: "58%", v: "Less manual effort" },
              { k: "99.1%", v: "Data accuracy" },
              { k: "15+", v: "Dashboards shipped" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-3xl font-bold text-primary md:text-4xl">{s.k}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section-pad bg-secondary/40">
        <div className="container-tight">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Projects</p>
              <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">Selected analytics work</h2>
            </div>
            <LineChart className="hidden h-10 w-10 text-primary/30 md:block" />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-primary md:text-xl">{p.title}</h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{p.subtitle}</p>
                  </div>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} on GitHub`}
                    className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tools.map((t) => (
                    <span key={t} className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary/60" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section-pad">
        <div className="container-tight">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Skills</p>
          <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">Tools & expertise</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g) => {
              const Icon = g.icon;
              return (
                <div key={g.title} className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-primary">{g.title}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {g.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-primary"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-pad bg-primary text-primary-foreground">
        <div className="container-tight">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">Contact</p>
          <h2 className="mt-2 max-w-3xl text-3xl font-bold md:text-5xl">
            Let's turn your data into decisions.
          </h2>
          <p className="mt-4 max-w-xl text-primary-foreground/70">
            Open to data analyst, BI, and risk &amp; regulatory analytics opportunities. Happy to chat — reach me here:
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <a
              href="mailto:subhadeeppan07@gmail.com"
              className="group flex items-center justify-between rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 transition-colors hover:bg-primary-foreground/10"
            >
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/60">Email</div>
                  <div className="font-medium">subhadeeppan07@gmail.com</div>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/subhadeep-pan"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 transition-colors hover:bg-primary-foreground/10"
            >
              <div className="flex items-center gap-4">
                <Linkedin className="h-5 w-5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/60">LinkedIn</div>
                  <div className="font-medium">linkedin.com/in/subhadeep-pan</div>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-10">
            <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <a href="https://drive.google.com/file/d/16s1AvL0F1RSp39ATYyIGpr4CODUKZVzm/view?usp=drive_link" target="_blank" rel="noreferrer">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container-tight flex flex-col items-center justify-between gap-2 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Subhadeep Pan. All rights reserved.</p>
          <p>Built with care · Data, dashboards & decisions.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
