import { ValidationError, useForm } from '@formspree/react';
import { Container } from '../components/common/Container';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { insightTopics } from '../data/site-data';
import { getFormspreeFormId, isFormspreeConfigured } from '../lib/formspree';

const articles = [
  {
    title: '5 AI Automations Every CTO Needs in 2026',
    topic: 'AI Workflows',
    readTime: '4 min read',
    excerpt: 'A practical framework for high-impact automations that reduce operations load and improve throughput.',
  },
  {
    title: 'Why Microservices Fail at Scale',
    topic: 'Enterprise Engineering',
    readTime: '7 min read',
    excerpt: 'Common architecture mistakes teams make when scaling distributed systems and how to avoid them.',
  },
  {
    title: 'Reducing Churn With Predictive Analytics',
    topic: 'SaaS Optimization',
    readTime: '8 min read',
    excerpt: 'How to move from reactive retention to predictive customer health signals.',
  },
  {
    title: 'Human-in-the-Loop AI: Where It Matters Most',
    topic: 'AI Workflows',
    readTime: '5 min read',
    excerpt: 'Designing AI processes with oversight for reliability, trust, and measurable quality.',
  },
  // Temporarily hidden: case studies content section is disabled.
  // {
  //   title: 'Case Study: 300% Ops Efficiency Increase',
  //   topic: 'Case Studies',
  //   readTime: '3 min read',
  //   excerpt: 'How one team restructured workflows and tooling to dramatically improve execution speed.',
  // },
  {
    title: 'No-Code and Custom Engineering: The Right Mix',
    topic: 'SaaS Optimization',
    readTime: '6 min read',
    excerpt: 'Where no-code helps and where enterprise teams still need engineered systems.',
  },
];

export function InsightsPage() {
  const [playbookState, handlePlaybookSubmit] = useForm(getFormspreeFormId('newsletter'));
  const [newsletterState, handleNewsletterSubmit] = useForm(getFormspreeFormId('newsletter'));
  const isConfigured = isFormspreeConfigured('newsletter');

  return (
    <>
      <PageHero
        title="Insights on SaaS Delivery and"
        highlight="Applied AI"
        description="Practical guides, engineering perspectives, and implementation lessons from real-world delivery work."
        primaryCta={{ label: 'Read Featured Article', href: '/insights' }}
      />

      <section className="sticky top-16 z-40 border-y border-slate-200 bg-background-light/90 py-3 backdrop-blur">
        <Container className="flex flex-wrap gap-2">
          {insightTopics.map((topic, idx) => (
            <button
              key={topic}
              type="button"
              className={`rounded-full px-4 py-1.5 text-xs font-semibold ${
                idx === 0 ? 'bg-text-main text-white' : 'border border-slate-300 text-text-main'
              }`}
            >
              {topic}
            </button>
          ))}
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading title="Latest Insights" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <article key={article.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-primary">{article.topic}</span>
                  <span className="text-xs text-text-muted">{article.readTime}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-text-main">{article.title}</h3>
                <p className="mt-3 text-sm text-text-muted">{article.excerpt}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="rounded-3xl bg-text-main p-8 text-white sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Free Resource</p>
            <h3 className="mt-2 font-display text-3xl font-bold">The State of AI in 2026: Execution Playbook</h3>
            <p className="mt-4 max-w-3xl text-sm text-slate-300 sm:text-base">
              Download our practical guide for implementing AI safely with governance, measurement, and rollout discipline.
            </p>
            {!isConfigured ? (
              <div className="mt-6 rounded-lg border border-amber-200/30 bg-amber-50/10 px-4 py-3 text-sm text-amber-100">
                Configure `VITE_FORMSPREE_FORM_ID` or `VITE_FORMSPREE_NEWSLETTER_FORM_ID` to enable this form.
              </div>
            ) : null}
            {playbookState.succeeded ? (
              <div className="mt-6 rounded-lg border border-green-300/30 bg-green-500/10 px-4 py-3 text-sm text-green-100">
                Thanks. Check your inbox for the playbook details.
              </div>
            ) : (
              <form
                className="mt-6 flex max-w-xl flex-col gap-3 sm:flex-row"
                onSubmit={isConfigured ? handlePlaybookSubmit : (event) => event.preventDefault()}
              >
                <input
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm text-white"
                  name="email"
                  placeholder="Enter business email"
                  required
                  type="email"
                />
                <ValidationError className="text-sm text-red-200 sm:basis-full" errors={playbookState.errors} field="email" prefix="Email" />
                <input name="formType" type="hidden" value="Playbook Download Request" />
                <button
                  className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={playbookState.submitting || !isConfigured}
                  type="submit"
                >
                  {playbookState.submitting ? 'Sending...' : 'Download Playbook'}
                </button>
              </form>
            )}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="max-w-3xl text-center">
          <h3 className="font-display text-3xl font-bold text-text-main">Stay ahead of the curve</h3>
          <p className="mt-4 text-text-muted">Get weekly practical insights on SaaS architecture, AI integration, and operational scale.</p>
          {newsletterState.succeeded ? (
            <div className="mx-auto mt-7 max-w-lg rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
              Subscribed successfully. Thanks for joining.
            </div>
          ) : (
            <form
              className="mx-auto mt-7 flex max-w-lg flex-col gap-3 sm:flex-row"
              onSubmit={isConfigured ? handleNewsletterSubmit : (event) => event.preventDefault()}
            >
              <input className="w-full rounded-lg border border-slate-300 px-4 py-2" name="email" placeholder="Enter your email" required type="email" />
              <ValidationError className="text-left text-sm text-red-600 sm:basis-full" errors={newsletterState.errors} field="email" prefix="Email" />
              <input name="formType" type="hidden" value="Insights Newsletter Subscription" />
              <button
                className="rounded-lg bg-text-main px-5 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
                disabled={newsletterState.submitting || !isConfigured}
                type="submit"
              >
                {newsletterState.submitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}
        </Container>
      </section>
    </>
  );
}
