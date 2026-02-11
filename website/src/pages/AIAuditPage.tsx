import { ValidationError, useForm } from '@formspree/react';
import { Container } from '../components/common/Container';
import { FaqAccordion } from '../components/common/FaqAccordion';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { auditFaqs } from '../data/site-data';
import { getFormspreeFormId, isFormspreeConfigured } from '../lib/formspree';

const deliverables = [
  'ROI estimate and impact model',
  'Opportunity matrix prioritized by effort vs value',
  'Current stack and integration fit assessment',
  'Risk and governance checkpoints',
  'Capability and talent gap analysis',
  '30/60/90-day pilot execution strategy',
];

const method = [
  'Discovery interviews',
  'Workflow and data mapping',
  'Gap and readiness analysis',
  'Strategy and prioritization',
  'Executive handoff with roadmap',
];

export function AIAuditPage() {
  const [state, handleSubmit] = useForm(getFormspreeFormId('audit'));
  const isConfigured = isFormspreeConfigured('audit');

  return (
    <>
      <PageHero
        badge="Now Accepting Audit Requests"
        title="AI Audit: Find"
        highlight="High-Impact Opportunities Before You Build"
        description="Get a practical roadmap for AI adoption focused on measurable productivity and business impact."
        primaryCta={{ label: 'Start Your Audit', href: '/contact' }}
        secondaryCta={{ label: 'Book Discovery Call', href: '/contact' }}
      />

      <section className="bg-white py-16">
        <Container>
          <SectionHeading
            title="What You Get From an AI Audit"
            description="Concrete implementation assets designed for execution, not high-level theory."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-text-main">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Method"
            title="Our 5-Step Audit Process"
            description="A two-week engagement model that balances speed with business and technical depth."
            centered
          />
          <div className="grid gap-5 md:grid-cols-5">
            {method.map((step, index) => (
              <div key={step} className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
                <p className="font-display text-2xl font-bold text-primary">{index + 1}</p>
                <p className="mt-2 text-sm text-text-muted">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-text-main py-16 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-3xl font-bold">Example Impact From a Recent Audit</h3>
              <p className="mt-4 text-slate-300">
                For a logistics SaaS client, we identified manual invoicing as the primary bottleneck and designed an LLM-assisted processing pipeline.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/20 bg-white/5 p-5">
                <p className="font-display text-3xl font-bold text-primary">85%</p>
                <p className="mt-1 text-sm text-slate-300">Reduction in manual data entry</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/5 p-5">
                <p className="font-display text-3xl font-bold text-primary">15x</p>
                <p className="mt-1 text-sm text-slate-300">ROI in first 6 months</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/5 p-5">
                <p className="font-display text-3xl font-bold text-primary">2 Weeks</p>
                <p className="mt-1 text-sm text-slate-300">Estimated implementation</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/5 p-5">
                <p className="font-display text-3xl font-bold text-primary">$4.2K</p>
                <p className="mt-1 text-sm text-slate-300">Monthly projected savings</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-8 rounded-2xl border border-slate-200 bg-white p-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h3 className="font-display text-2xl font-bold text-text-main">Request an AI Audit</h3>
              <p className="mt-3 text-sm text-text-muted">Share your current bottlenecks and we will scope the best audit path.</p>
            </div>
            <div className="lg:col-span-2">
              {!isConfigured ? (
                <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
                  Formspree is not configured yet. Add `VITE_FORMSPREE_FORM_ID` (or `VITE_FORMSPREE_AUDIT_FORM_ID`) in your `.env` file.
                </div>
              ) : null}

              {state.succeeded ? (
                <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                  Thanks. Your AI audit request was submitted successfully. We will contact you shortly.
                </div>
              ) : (
                <form className="grid gap-4 md:grid-cols-2" onSubmit={isConfigured ? handleSubmit : (event) => event.preventDefault()}>
                  <input className="rounded-lg border border-slate-300 px-3 py-2" name="fullName" placeholder="Full Name" required />
                  <input className="rounded-lg border border-slate-300 px-3 py-2" name="email" placeholder="Work Email" required type="email" />
                  <ValidationError className="md:col-span-2 text-sm text-red-600" errors={state.errors} field="email" prefix="Email" />
                  <input className="rounded-lg border border-slate-300 px-3 py-2" name="company" placeholder="Company" required />
                  <input className="rounded-lg border border-slate-300 px-3 py-2" name="role" placeholder="Role" required />
                  <select className="rounded-lg border border-slate-300 px-3 py-2" name="teamSize" required>
                    <option value="">Team Size</option>
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-200</option>
                    <option>200+</option>
                  </select>
                  <input className="rounded-lg border border-slate-300 px-3 py-2" name="preferredTimeline" placeholder="Preferred timeline" required />
                  <textarea
                    className="col-span-full rounded-lg border border-slate-300 px-3 py-2"
                    name="biggestBottleneck"
                    placeholder="Biggest operational bottleneck"
                    required
                    rows={4}
                  />
                  <ValidationError
                    className="col-span-full text-sm text-red-600"
                    errors={state.errors}
                    field="biggestBottleneck"
                    prefix="Biggest operational bottleneck"
                  />
                  <input name="formType" type="hidden" value="AI Audit Request" />
                  <button
                    className="col-span-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
                    disabled={state.submitting || !isConfigured}
                    type="submit"
                  >
                    {state.submitting ? 'Submitting...' : 'Submit Audit Request'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container className="max-w-4xl">
          <SectionHeading title="Frequently Asked Questions" centered />
          <FaqAccordion items={auditFaqs} />
        </Container>
      </section>
    </>
  );
}
