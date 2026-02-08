import { CaseStudyCard } from '../components/common/CaseStudyCard';
import { Container } from '../components/common/Container';
import { CtaBanner } from '../components/common/CtaBanner';
import { PageHero } from '../components/common/PageHero';
import { caseStudies } from '../data/site-data';

export function CaseStudiesPage() {
  return (
    <>
      <PageHero
        align="center"
        badge="Proven Results"
        title="Engineering Measurable Growth with"
        highlight="AI & SaaS"
        description="Explore how Zyshaire converts complex workflows into efficient systems with measurable business outcomes."
        primaryCta={{ label: 'Start Your Project', href: '/contact' }}
      />

      <section className="sticky top-16 z-40 border-y border-slate-200 bg-white/90 py-3 backdrop-blur">
        <Container className="flex flex-wrap items-center gap-2">
          {['All', 'Logistics', 'Fintech', 'Healthcare', 'HR Tech'].map((tag, idx) => (
            <button
              key={tag}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold ${
                idx === 0 ? 'bg-text-main text-white' : 'border border-slate-300 text-text-main'
              }`}
              type="button"
            >
              {tag}
            </button>
          ))}
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.title} item={caseStudy} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14">
        <Container>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Trusted by forward-thinking teams</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-xl font-bold text-slate-400">
            <span>LogiStream</span>
            <span>FinServe</span>
            <span>MediCare</span>
            <span>RetailFlow</span>
            <span>TalentMatch</span>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Ready to build your own success story?"
        description="We can map your current bottlenecks to a practical implementation plan and measurable outcomes."
        primaryCta={{ label: 'Book Discovery Call', href: '/contact' }}
      />
    </>
  );
}
