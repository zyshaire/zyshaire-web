import { CaseStudyCard } from '../components/common/CaseStudyCard';
import { Container } from '../components/common/Container';
import { CtaBanner } from '../components/common/CtaBanner';
import { PageHero } from '../components/common/PageHero';
import { caseStudies } from '../data/site-data';

export function ProjectsPage() {
  return (
    <>
      <PageHero
        align="center"
        badge="Our Work"
        title="Projects Built by"
        highlight="Zyshaire"
        description="Real products engineered for real users. Explore what we've built and shipped."
        primaryCta={{ label: 'Start Your Project', href: '/contact' }}
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((project) => (
              <CaseStudyCard key={project.title} item={project} />
            ))}
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
