// Temporarily hidden: success stories/case studies section is disabled.
// import { Link } from 'react-router-dom';
// import { CaseStudyCard } from '../components/common/CaseStudyCard';
import { Container } from '../components/common/Container';
import { CtaBanner } from '../components/common/CtaBanner';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { ServiceCard } from '../components/common/ServiceCard';
import { services } from '../data/site-data';

const processSteps = [
  { title: 'Discover', description: 'We map bottlenecks, goals, and constraints with stakeholders.' },
  { title: 'Architect', description: 'We design a scalable technical approach aligned to outcomes.' },
  { title: 'Build', description: 'We execute in iterative delivery cycles with clear milestones.' },
  { title: 'Measure', description: 'We monitor business KPIs and optimize continuously.' },
];

const founderProofPillars = [
  {
    title: 'Flash MVP in 2 Weeks',
    description: 'We help founders validate ideas quickly with rapid, high-utility MVP builds.',
  },
  {
    title: 'AI-Assisted Engineering',
    description: 'We use AI-assisted delivery workflows to accelerate implementation without sacrificing quality.',
  },
  {
    title: 'Founder-Friendly Cost Profile',
    description: 'Validate product direction without carrying the cost of a full team for months.',
  },
  {
    title: 'Clear Path to Production',
    description: 'Every MVP includes guidance on what to harden next for production readiness.',
  },
];

export function HomePage() {
  return (
    <>
      <PageHero
        align="center"
        badge="Accepting New Enterprise Clients"
        title="We Build SaaS and AI Systems That Move"
        highlight="Business Metrics"
        description="From product engineering to AI workflow integration, Zyshaire helps businesses launch faster, automate smarter, and scale with confidence."
        primaryCta={{ label: 'Book Discovery Call', href: '/contact' }}
        secondaryCta={{ label: 'Request AI Audit', href: '/ai-audit' }}
      />

      <section className="border-y border-slate-200 bg-white py-12">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {founderProofPillars.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-background-light p-5">
                <h3 className="font-display text-lg font-bold text-text-main">{item.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Expertise"
            title="Services Built Around Outcomes"
            description="We engineer software systems that directly improve delivery velocity, operational efficiency, and decision quality."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((item) => (
              <ServiceCard key={item.title} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <h3 className="font-display text-2xl font-bold text-text-main">The Old Way</h3>
              <ul className="mt-5 space-y-2 text-sm text-text-muted">
                <li>• Manual operations and fragmented spreadsheets</li>
                <li>• Slow product iterations due to legacy constraints</li>
                <li>• AI experiments without measurable returns</li>
                <li>• Security and compliance blind spots</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-3xl font-bold text-text-main">The Zyshaire Standard</h3>
              <p className="mt-4 text-text-muted">
                We combine enterprise engineering rigor with practical AI execution to create systems that are secure, resilient, and outcome-driven.
              </p>
              <div className="mt-6 space-y-4 text-sm text-text-muted">
                <p>• Automated workflows that reduce repetitive execution overhead.</p>
                <p>• Enterprise-grade architecture designed for scale and governance.</p>
                <p>• KPI-first delivery model tied to measurable business impact.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Process"
            title="How We Work"
            description="A structured delivery system from discovery through post-launch optimization."
            centered
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">Step {index + 1}</p>
                <h4 className="mt-2 font-display text-xl font-bold text-text-main">{step.title}</h4>
                <p className="mt-3 text-sm text-text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Temporarily hidden: success stories section will be added back later. */}
      {/* <section className="bg-white py-16">
        <Container>
          <div className="mb-8 flex items-end justify-between gap-4">
            <SectionHeading title="Recent Success Stories" description="Selected examples of measurable business outcomes." />
            <Link className="text-sm font-semibold text-primary hover:underline" to="/case-studies">
              View all case studies
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {caseStudies.slice(0, 3).map((item) => (
              <CaseStudyCard key={item.title} item={item} />
            ))}
          </div>
        </Container>
      </section> */}

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Why Zyshaire"
            title="Built for Business Impact"
            description="We prioritize reliability, speed, and measurable ROI over vanity deliverables."
            centered
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ['Business-First Engineering', 'Every feature maps to a business objective and KPI.'],
              ['AI With ROI Discipline', 'We implement AI where it improves throughput, quality, or cost.'],
              ['Enterprise Delivery Quality', 'Secure architecture, observability, and long-term maintainability.'],
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="font-display text-xl font-bold text-text-main">{title}</h4>
                <p className="mt-3 text-sm text-text-muted">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Ready to modernize your systems?"
        description="Let's design and deliver a scalable roadmap tailored to your business goals."
        primaryCta={{ label: 'Book Discovery Call', href: '/contact' }}
        secondaryCta={{ label: 'Request AI Audit', href: '/ai-audit' }}
      />
    </>
  );
}
