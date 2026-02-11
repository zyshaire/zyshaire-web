import { Container } from '../components/common/Container';
import { CtaBanner } from '../components/common/CtaBanner';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';

const principles = [
  {
    title: 'Impact First',
    description: 'Every system and feature is mapped to a business outcome and measurable KPI.',
  },
  {
    title: 'Quality By Default',
    description: 'We prioritize maintainable architecture and engineering rigor over short-term shortcuts.',
  },
  {
    title: 'Measure Everything',
    description: 'Delivery includes observability and feedback loops for continuous improvement.',
  },
];

// Temporarily hidden: individual team profile cards will be re-enabled later.
// const team = [
//   ['David Chen', 'Founder & CEO'],
//   ['Sarah Al-Fayed', 'CTO'],
//   ['Marcus Johnson', 'Head of Engineering'],
//   ['Elena Rodriguez', 'Product Lead'],
// ];

export function AboutPage() {
  return (
    <>
      <PageHero
        align="center"
        badge="Engineered for Outcomes"
        title="We Build Practical Systems That"
        highlight="Deliver Real ROI"
        description="Zyshaire bridges the gap between technical complexity and business value through enterprise-grade engineering and focused AI execution."
      />

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Mission"
            title="Demystifying technology to unlock business potential"
            description="Our mission is to make high-quality SaaS and AI capabilities practical, measurable, and accessible for growth-stage and enterprise teams."
          />
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <SectionHeading title="Operating Principles" />
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-display text-xl font-bold text-text-main">{item.title}</h3>
                <p className="mt-3 text-sm text-text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            title="Delivery Model"
            description="Transparent collaboration with clear checkpoints from discovery to rollout and optimization."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ['01. Discovery', 'Align objectives, constraints, and measurable targets.'],
              ['02. Build & Iterate', 'Deliver in focused sprints with frequent validation.'],
              ['03. Deploy & Scale', 'Release with observability and scale-readiness by design.'],
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="font-display text-xl font-bold text-text-main">{title}</p>
                <p className="mt-3 text-sm text-text-muted">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Temporarily hidden: detailed "Meet the Builders" profile section. */}
      {/* <section className="bg-white py-16">
        <Container>
          <SectionHeading title="Meet the Builders" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map(([name, role]) => (
              <article key={name} className="rounded-2xl border border-slate-200 p-5">
                <div className="mb-4 aspect-[4/5] rounded-xl bg-gradient-to-br from-slate-100 to-slate-200" />
                <p className="font-display text-lg font-bold text-text-main">{name}</p>
                <p className="text-sm text-primary">{role}</p>
              </article>
            ))}
          </div>
        </Container>
      </section> */}

      <section className="bg-white py-16">
        <Container>
          <SectionHeading
            title="Our Team Capability"
            description="We have a highly capable team of full-stack engineers and AI engineers focused on delivering high-quality products with AI-assisted execution."
          />
          <div className="rounded-2xl border border-slate-200 bg-background-light p-6 sm:p-8">
            <p className="text-base leading-relaxed text-text-muted sm:text-lg">
              Zyshaire operates with a delivery-focused engineering team that combines strong product development expertise with practical AI implementation skills. We use AI assistance extensively to increase speed and maintain quality while shipping reliable MVPs and scalable systems.
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Ready to work with a pragmatic engineering partner?"
        description="Bring us your most important workflow or product challenge and we will map a practical path forward."
        primaryCta={{ label: 'Start a Project', href: '/contact' }}
      />
    </>
  );
}
