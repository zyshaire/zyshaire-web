import { Container } from '../components/common/Container';
import { CtaBanner } from '../components/common/CtaBanner';
import { FaqAccordion } from '../components/common/FaqAccordion';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { ServiceCard } from '../components/common/ServiceCard';
import { serviceFaqs, services } from '../data/site-data';

const engagementModels = [
  {
    title: 'Project-Based',
    description: 'Ideal for clearly scoped builds with defined milestones and outcomes.',
    bullets: ['Fixed scope and delivery timeline', 'Clear acceptance criteria', 'One-time engagement'],
  },
  {
    title: 'Retainer',
    description: 'Best for ongoing product development, iteration, and optimization.',
    bullets: ['Dedicated monthly capacity', 'Priority support and roadmap execution', 'Flexible sprint allocation'],
  },
  {
    title: 'Fractional Leadership',
    description: 'Embedded strategic technical leadership without full-time overhead.',
    bullets: ['Senior architecture direction', 'Team mentorship and standards', 'Execution governance'],
  },
];

export function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Business Outcomes First"
        title="Services Built Around"
        highlight="Business Outcomes"
        description="From Flash MVP sprints and custom SaaS engineering to AI workflow integration, we build practical systems that improve business performance."
        primaryCta={{ label: 'Book Consultation', href: '/contact' }}
      />

      <section className="py-16">
        <Container>
          <SectionHeading title="Core Service Areas" description="Every engagement is mapped to measurable execution and business outcomes." />
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} item={service} />
            ))}
          </div>
        </Container>
      </section>

      <section id="engagement-models" className="bg-white py-16">
        <Container>
          <SectionHeading
            eyebrow="Collaboration"
            title="Flexible Engagement Models"
            description="Choose the operating model that best fits your team capacity and execution pace."
            centered
          />
          <div className="grid gap-6 md:grid-cols-3">
            {engagementModels.map((model, idx) => (
              <article
                key={model.title}
                className={`rounded-2xl border p-6 ${idx === 1 ? 'border-primary bg-text-main text-white' : 'border-slate-200 bg-white'}`}
              >
                <h3 className="font-display text-xl font-bold">{model.title}</h3>
                <p className={`mt-3 text-sm ${idx === 1 ? 'text-slate-300' : 'text-text-muted'}`}>{model.description}</p>
                <ul className={`mt-5 space-y-2 text-sm ${idx === 1 ? 'text-slate-200' : 'text-text-muted'}`}>
                  {model.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-4xl">
          <SectionHeading title="Common Questions" centered />
          <FaqAccordion items={serviceFaqs} />
        </Container>
      </section>

      <CtaBanner
        title="Need help choosing the right service path?"
        description="We can map your business needs to the right architecture and engagement model in one discovery call."
        primaryCta={{ label: 'Book Discovery Call', href: '/contact' }}
      />
    </>
  );
}
